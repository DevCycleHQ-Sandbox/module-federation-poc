# module-federation-poc

This is a proof of concept for using module federation to create a host app that can load remote componenets.

To run this project, run `npm run build` in the todo-component and then run `npm run preview` in the todo-components. This will start the todo-component in a local server port 4173.

Run the host app by running `npm run dev` in the host-app. This will start the host app in a local server port 5173.

Navigate to `http://localhost:5173/` in your browser to see the host app.

You will need to make sure to add a .env file in both apps with the `DEVCYCLE_SDK_KEY` variable and change the variable key in the todo-components/src/components/List.tsx file to match the key of a variable created on the devcycle dashboard.
