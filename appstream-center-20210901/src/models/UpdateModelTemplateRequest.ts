// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The model group configuration JSON object. You can use this field to modify the default model. The configuration format varies depending on the agent provider (AgentProvider):
   * 
   * - **OpenClaw / AgenticComputer scenarios:**
   * Set the default model by using the `defaults.model.primary` field in the format of `provider name/model code`.
   * 
   * - **HermesAgent scenarios:**
   * Specify the provider name by using `model.provider` and the model code by using `model.default`.
   * 
   * > Note:
   * > - When you modify the default model, the system verifies whether the specified provider and model code already exist in the model group.
   * 
   * @example
   * OpenClaw：
   * {"defaults":{"model":{"primary":"bailian/qwen3.5-plus"}}}
   * 
   * HermesAgent：
   * {"model":{"provider":"bailian","default":"qwen3.5-plus"}}
   */
  config?: string;
  /**
   * @remarks
   * The template group description.
   * 
   * @example
   * Test model group
   */
  description?: string;
  /**
   * @remarks
   * The model group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * mt-xxxx
   */
  modelTemplateId?: string;
  /**
   * @remarks
   * The template group name.
   * 
   * @example
   * model-template-001
   */
  name?: string;
  /**
   * @remarks
   * The authorization scope. This parameter is optional and can be modified only for Common model groups. Valid values: ALL_USER and USER_MIXED.
   */
  refScope?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      description: 'Description',
      modelTemplateId: 'ModelTemplateId',
      name: 'Name',
      refScope: 'RefScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      description: 'string',
      modelTemplateId: 'string',
      name: 'string',
      refScope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

