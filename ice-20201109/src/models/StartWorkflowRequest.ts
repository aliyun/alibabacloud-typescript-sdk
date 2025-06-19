// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartWorkflowRequest extends $dara.Model {
  skipInputVerification?: boolean;
  /**
   * @remarks
   * The workflow input. Only media assets are supported.
   * 
   * @example
   * {
   *       "Type": "Media",
   *       "Media": "******30706071edbfe290b488******"
   * }
   */
  taskInput?: string;
  /**
   * @remarks
   * The user-defined data in the JSON format, which cannot be up to 512 bytes in length. You can specify a custom callback URL. For more information, see [Configure a callback upon editing completion](https://help.aliyun.com/document_detail/451631.html).
   */
  userData?: string;
  /**
   * @remarks
   * The ID of the workflow template. To view the template ID, log on to the [IMS console](https://ims.console.aliyun.com/settings/workflow/list) and choose Configurations > Workflow Template.
   * 
   * @example
   * ******f0e54971ecbffd472190******
   */
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      skipInputVerification: 'SkipInputVerification',
      taskInput: 'TaskInput',
      userData: 'UserData',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skipInputVerification: 'boolean',
      taskInput: 'string',
      userData: 'string',
      workflowId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

