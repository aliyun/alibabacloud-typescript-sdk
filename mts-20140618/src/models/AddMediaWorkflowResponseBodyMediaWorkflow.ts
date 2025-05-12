// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMediaWorkflowResponseBodyMediaWorkflow extends $dara.Model {
  /**
   * @remarks
   * The time when the media workflow was created.
   * 
   * @example
   * 016-04-01T05:29:37Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the media workflow. We recommend that you keep this ID for later operations on this workflow.
   * 
   * @example
   * e00732b977da427d9177a4deb1aa****
   */
  mediaWorkflowId?: string;
  /**
   * @remarks
   * The name of the media workflow.
   * 
   * @example
   * mediaworkflow-example
   */
  name?: string;
  /**
   * @remarks
   * The state of the media workflow. By default, the created workflow is in the **Active** state.
   * 
   * @example
   * Active
   */
  state?: string;
  /**
   * @remarks
   * The topology of the media workflow. The value is a JSON object that contains the activities and activity dependencies.
   * 
   * @example
   * {mediaworkflow","State":"Active","Topology":"{\\"Activities\\":{\\"Act-Start\\":{\\"Parameters\\":{\\"PipelineId\\":\\"130266f58161436a80bf07cb12c8****\\",\\"InputFile\\":\\"{\\\\\\"Bucket\\\\\\": \\\\\\"example-bucket-****\\\\\\",\\\\\\"Location\\\\\\": \\\\\\"cn-shanghai\\\\\\"}\\"},\\"Type\\":\\"Start\\"},\\"Act-Report\\":{\\"Parameters\\":{},\\"Type\\":\\"Report\\"},\\"Act-Transcode-M3U8\\":{\\"Parameters\\":{\\"Outputs\\":\\"[{\\\\\\"Object\\\\\\":\\\\\\"transcode/{ObjectPrefix}{FileName}\\\\\\",\\\\\\"TemplateId\\\\\\": \\\\\\"957d1719ee85ed6527b90cf62726****\\\\\\"}]\\",\\"OutputBucket\\":\\"example-bucket-****\\",\\"OutputLocation\\":\\"cn-shanghai\\"},\\"Type\\":\\"Transcode\\"}},\\"Dependencies\\":{\\"Act-Start\\":[\\"Act-Transcode-M3U8\\"],\\"Act-Report\\":[],\\"Act-Transcode-M3U8\\":[\\"Act-Report\\"]}}","MediaWorkflowId":"93ab850b4f6f44eab54b6e91d24d****"}]},"RequestId":"16CD0CDD-457E-420D-9755-8385075A1234"}
   */
  topology?: string;
  /**
   * @remarks
   * The triggering mode of the media workflow. Valid values:
   * 
   * *   **OssAutoTrigger**: The media workflow is automatically triggered.
   * *   **NotInAuto**: The media workflow is not automatically triggered.
   * 
   * @example
   * OssAutoTrigger
   */
  triggerMode?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      mediaWorkflowId: 'MediaWorkflowId',
      name: 'Name',
      state: 'State',
      topology: 'Topology',
      triggerMode: 'TriggerMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      mediaWorkflowId: 'string',
      name: 'string',
      state: 'string',
      topology: 'string',
      triggerMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

