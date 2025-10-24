// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMediaWorkflowResponseBodyMediaWorkflow extends $dara.Model {
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
   * The ID of the media workflow that is updated.
   * 
   * @example
   * 6307eb0d3f85477882d205aa040f****
   */
  mediaWorkflowId?: string;
  /**
   * @remarks
   * The name of the media workflow.
   * 
   * @example
   * examp-mediaworkflow-****
   */
  name?: string;
  /**
   * @remarks
   * The state of the media workflow. Valid values:
   * 
   * *   **Inactive**: The media workflow is disabled.
   * *   **Active**: The media workflow is enabled.
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
   * {
   *       "Activities": {
   *             "Act-Start": {
   *                   "Parameters": {
   *                         "PipelineId": "130266f58161436a80bf07cb12c8****",
   *                         "InputFile": "{\\"Bucket\\": \\"example-bucket-****\\",\\"Location\\": \\"cn-shanghai\\"}"
   *                   },
   *                   "Type": "Start"
   *             },
   *             "Act-Report": {
   *                   "Parameters": {},
   *                   "Type": "Report"
   *             },
   *             "Act-Transcode-M3U8": {
   *                   "Parameters": {
   *                         "Outputs": "[{\\"Object\\":\\"transcode/{ObjectPrefix}{FileName}\\",\\"TemplateId\\": \\"957d1719ee85ed6527b90cf62726****\\"}]",
   *                         "OutputBucket": "example-bucket-****",
   *                         "OutputLocation": "cn-shanghai"
   *                   },
   *                   "Type": "Transcode"
   *             }
   *       },
   *       "Dependencies": {
   *             "Act-Start": [
   *                   "Act-Transcode-M3U8"
   *             ],
   *             "Act-Report": [],
   *             "Act-Transcode-M3U8": [
   *                   "Act-Report"
   *             ]
   *       }
   * }
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

export class UpdateMediaWorkflowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed information about the media workflow.
   */
  mediaWorkflow?: UpdateMediaWorkflowResponseBodyMediaWorkflow;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7D752035-97DA-54E5-88E2-E8405EEA****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaWorkflow: 'MediaWorkflow',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflow: UpdateMediaWorkflowResponseBodyMediaWorkflow,
      requestId: 'string',
    };
  }

  validate() {
    if(this.mediaWorkflow && typeof (this.mediaWorkflow as any).validate === 'function') {
      (this.mediaWorkflow as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

