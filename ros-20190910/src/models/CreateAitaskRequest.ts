// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAITaskRequest extends $dara.Model {
  /**
   * @remarks
   * The input description for the AI task.
   * 
   * - When the task type is Generate Template, this parameter specifies the functionality of the template to be generated.
   * - When the task type is FixTemplate, this parameter can describe how the template should be repaired.
   * 
   * @example
   * 创建一台ECS，部署nignx服务
   */
  prompt?: string;
  /**
   * @remarks
   * The type of AI task. Values:
   * - GenerateTemplate: AI template generation
   * - FixTemplate: AI template repair
   * 
   * @example
   * GenerateTemplate
   */
  taskType?: string;
  /**
   * @remarks
   * When the task type is AI template repair, specify the original template that needs to be fixed or modified.
   * 
   * @example
   * {"ROSTemplateFormatVersion": "2015-09-01"}
   */
  template?: string;
  /**
   * @remarks
   * The type of the template to be generated or repaired. Default is ROS.
   * 
   * @example
   * ROS
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      prompt: 'Prompt',
      taskType: 'TaskType',
      template: 'Template',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prompt: 'string',
      taskType: 'string',
      template: 'string',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

