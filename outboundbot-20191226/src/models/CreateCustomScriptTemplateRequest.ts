// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomScriptTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the custom scenario.
   * 
   * @example
   * This is a large language model bot
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 0ec0c897-b92c-40e4-9ad7-e6e4f5ce13bb
   */
  instanceId?: string;
  /**
   * @remarks
   * The label descriptions in JSON array format.
   * 
   * @example
   * [{\\"name\\":\\"Delivered\\",\\"description\\":\\"Whether the purchased home appliance has been delivered\\",\\"valueList\\":\\"[\\\\\\"Yes\\\\\\",\\\\\\"No\\\\\\"]\\"},{\\"name\\":\\"On-site Appointment Time\\",\\"description\\":\\"Collect the customer\\"s expected on-site installation time\\",\\"valueList\\":\\"[]\\"}]
   */
  labelsJson?: string;
  /**
   * @remarks
   * The ID of the model used to create the template.
   * 
   * @example
   * model_002
   */
  model?: string;
  /**
   * @remarks
   * The name of the custom scenario.
   * 
   * @example
   * Test scenario
   */
  name?: string;
  /**
   * @remarks
   * The prompt in professional mode.
   * 
   * @example
   * \\nName: Annie \\nRole: Game Promoter\\nBackground: Promote the latest benefit activities to players over the phone, ensuring that every player stays informed and enjoys the game.\\nSkills: As a game customer service representative, recommend time-limited game benefit activities to users, highlight the benefits, and explain the participation process.\\nConstraints: You must remember that you are Annie,
   */
  prompt?: string;
  /**
   * @remarks
   * The agent configuration in JSON format.
   * 
   * @example
   * {"name":"Xiao X","gender":"Male","age":18,"role":"Game Promoter","communicationStyle":["Friendly"],"goals":"Hello","background":"Not very good","openingPrompt":"Hello, I am XXX"}
   */
  promptJson?: string;
  /**
   * @remarks
   * The script ID.
   * 
   * @example
   * 43972417-0657-452a-81c2-c59d8245a9b2
   */
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      labelsJson: 'LabelsJson',
      model: 'Model',
      name: 'Name',
      prompt: 'Prompt',
      promptJson: 'PromptJson',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      labelsJson: 'string',
      model: 'string',
      name: 'string',
      prompt: 'string',
      promptJson: 'string',
      scriptId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

