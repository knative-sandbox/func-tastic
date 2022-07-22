
const handle = async (context) => {
  const service = context.body.object
  if (!service) {
    console.warn("No target object received")
  }
  if (!service.labels) service.labels = {}

  // Skip updating the controller itself
  if (service.labels["function-controller"] === "true") {
    console.warn("Not updating the controller")
    return service
  }

  // Inject the Pod name as a label
  service.labels["pod-name"] = pod.metadata.name

  // Return the updated Service
  return service;
}

// Export the function
module.exports = { handle };
