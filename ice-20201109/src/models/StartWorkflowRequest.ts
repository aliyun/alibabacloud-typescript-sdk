// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartWorkflowRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to skip the input path verification for the workflow. This parameter takes effect only when the workflow input is an OSS file. We recommend that you do not skip the verification to avoid errors caused by incorrect paths. If this parameter is not specified, the default value is false. Valid values:
   * 
   * - **true**: Skip the verification.
   * 
   * - **false**: Do not skip the verification.
   * 
   * @example
   * false
   */
  skipInputVerification?: boolean;
  /**
   * @remarks
   * The workflow input. Currently, media asset types and OSS files are supported.
   * 
   * Type: the supported media object type. Valid values:
   * 
   * - OSS: an OSS file.
   * 
   * - Media: a media asset ID.
   * 
   * Media: the media value. Valid values:
   * 
   * - If Type is set to OSS, the value is a URL that supports the OSS protocol and HTTP protocol.
   * 
   * - If Type is set to Media, the value is a media asset ID.
   * 
   * @example
   * {
   *       "Type": "Media",
   *       "Media": "******30706071edbfe290b488******"
   * } or
   * {
   *       "Type": "OSS",
   *       "Media": "oss://bucket.oss-ap-southeast-1.aliyuncs.com/A/B/C/test1.flv"
   * }
   */
  taskInput?: string;
  /**
   * @remarks
   * The custom settings in JSON format. The maximum length is 512 bytes. [Custom callback URL configuration](https://help.aliyun.com/document_detail/451631.html) is supported.
   * 
   * @example
   * {"NotifyAddress":"https://xx.xx.xxx"} or {"NotifyAddress":"ice-callback-demo"}
   */
  userData?: string;
  /**
   * @remarks
   * The workflow template ID. You can view the template ID in the [Intelligent Media Services console](https://ims.console.aliyun.com/settings/workflow/list) by navigating to Configuration Management > Workflow Template.
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

