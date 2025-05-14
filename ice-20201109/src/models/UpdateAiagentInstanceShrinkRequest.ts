// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAIAgentInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AI agent that you want to update.
   * 
   * This parameter is required.
   * 
   * @example
   * 39f8e0bc005e4f309379701645f4****
   */
  instanceId?: string;
  /**
   * @remarks
   * The template configurations of the AI agent. The configurations are merged with the template configurations that are used to start the AI agent. For more information, see the definition of TemplateConfig.
   */
  templateConfigShrink?: string;
  /**
   * @example
   * {"VoiceId":"xiaoxia"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      templateConfigShrink: 'TemplateConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      templateConfigShrink: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

