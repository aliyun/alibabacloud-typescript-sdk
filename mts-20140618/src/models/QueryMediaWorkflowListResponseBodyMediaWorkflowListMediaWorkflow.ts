// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMediaWorkflowListResponseBodyMediaWorkflowListMediaWorkflow extends $dara.Model {
  /**
   * @remarks
   * The time when the media workflow was created.
   * 
   * @example
   * 2016-04-01T05:29:38Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the media workflow.
   * 
   * @example
   * 93ab850b4f6f44eab54b6e9181d4****
   */
  mediaWorkflowId?: string;
  /**
   * @remarks
   * The name of the media workflow.
   * 
   * @example
   * example-mediaworkflow-****
   */
  name?: string;
  /**
   * @remarks
   * The state of the media workflow. Valid values:
   * 
   * *   **Inactive**: The media workflow was deactivated.
   * *   **Active**: The media workflow was activated.
   * *   **Deleted**: The media workflow was deleted.
   * 
   * @example
   * Active
   */
  state?: string;
  /**
   * @remarks
   * The topology of the media workflow.
   * 
   * @example
   * {mediaworkflow","State":"Active","Topology":"{\\"Activities\\":{\\"Act-Start\\":{\\"Parameters\\":{\\"PipelineId\\":\\"130266f58161436a80bf07cb12c8****\\",\\"InputFile\\":\\"{\\\\\\"Bucket\\\\\\": \\\\\\"example-bucket-****\\\\\\",\\\\\\"Location\\\\\\": \\\\\\"cn-shanghai\\\\\\"}\\"},\\"Type\\":\\"Start\\"},\\"Act-Report\\":{\\"Parameters\\":{},\\"Type\\":\\"Report\\"},\\"Act-Transcode-M3U8\\":{\\"Parameters\\":{\\"Outputs\\":\\"[{\\\\\\"Object\\\\\\":\\\\\\"transcode/{ObjectPrefix}{FileName}\\\\\\",\\\\\\"TemplateId\\\\\\": \\\\\\"957d1719ee85ed6527b90cf62726****\\\\\\"}]\\",\\"OutputBucket\\":\\"example-bucket-****\\",\\"OutputLocation\\":\\"cn-shanghai\\"},\\"Type\\":\\"Transcode\\"}},\\"Dependencies\\":{\\"Act-Start\\":[\\"Act-Transcode-M3U8\\"],\\"Act-Report\\":[],\\"Act-Transcode-M3U8\\":[\\"Act-Report\\"]}}","MediaWorkflowId":"93ab850b4f6f44eab54b6e91d24d****"}]},"RequestId":"16CD0CDD-457E-420D-9755-8385075A1234"}
   */
  topology?: string;
  /**
   * @remarks
   * The trigger mode of the media workflow. Valid values:
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

