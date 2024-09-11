# Prompter Files

Prompter files are a powerful tool for generating code based on predefined templates or guidelines. In this lab, we'll explore how to use prompter files to create Data Transfer Objects (DTOs) from our models.

## Using Prompter Files

1. Open the `model.ts` file located in the `stuff-to-do/3-prompter-files` directory. This file contains the definition of our model.

2. Create a new file named `dto.prompt` in the same directory. This file will serve as our prompter file.

3. Open the `dto.prompt` file and define the guidelines for generating DTOs from the model. Here's an example:

   ```
   # DTO Generation Guidelines

   When creating Data Transfer Objects (DTOs) from models, follow these guidelines to ensure consistency and proper implementation:

   1. Naming Convention:
      - Name the DTO class by appending "Dto" to the model name (e.g., ModelDto for Model).

   2. Properties:
      - Include all properties from the model in the DTO.
      - Use the same property names and types as in the model.
      - For nullable properties, use the nullable type syntax (e.g., averageResponseTime?: number).

   3. Nested Objects:
      - For nested objects like ModelStatus and ModelParameters, define them inline in the DTO class.

   4. Constructor:
      - Implement a constructor that accepts a Partial<T> of the DTO class.
      - Use Object.assign(this, data) to populate the properties.

   5. Serialization Methods:
      - Implement a toJson() method that returns a JSON string representation of the DTO.
      - Implement a static fromJson(json: string) method that creates a DTO instance from a JSON string.
   ```

4. Save the `dto.prompt` file.

5. Open the Codeium extension and use the "Codeium Command Palette" by pressing CTRL (CMD on Mac) + I (CTRL + SHIFT + K for Cursor).

6. In the command palette, type "@<file> please create a dto from @<model-file>" and press Enter.

7. Codeium will use the guidelines defined in the `dto.prompt` file to generate the DTO class based on the model in `model.ts`.

8. The generated DTO class will be inserted into a new file named `modelDto.ts` in the same directory.
