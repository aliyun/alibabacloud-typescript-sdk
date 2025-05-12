// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeactivateMediaWorkflowResponseBodyMediaWorkflow extends $dara.Model {
  /**
   * @remarks
   * *   After you deactivate a media workflow, you can modify the workflow information.
   * *   After you delete or deactivate a media workflow, the workflow cannot be used. In this case, the workflow is not automatically triggered when you upload a file to the bucket specified by the workflow.
   * 
   * ## Limits on QPS
   * 
   * You can call this operation up to 100 times per second. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation. For more information, see [QPS limits](https://www.alibabacloud.com/help/en/apsaravideo-for-media-processing/latest/qps-limit).
   * 
   * @example
   * 2016-04-01T05:29:37Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the media workflow that you want to deactivate. To obtain the ID of the media workflow, you can log on to the **ApsaraVideo Media Processing (MPS) console** and choose **Workflows** > **Workflow Settings** in the left-side navigation pane.
   * 
   * @example
   * 93ab850b4f6f44eab54b6e9181d4****
   */
  mediaWorkflowId?: string;
  /**
   * @remarks
   * The details of the media workflow.
   * 
   * @example
   * example-mediaworkflow-****
   */
  name?: string;
  /**
   * @remarks
   * The topology of the media workflow.The status of the media workflow. The value is **Inactive**.
   * 
   * @example
   * Inactive
   */
  state?: string;
  /**
   * @remarks
   * The status of the media workflow. The value is **Inactive**.
   * 
   * @example
   * {mediaworkflow","State":"Active","Topology":"{\\"Activities\\":{\\"Act-Start\\":{\\"Parameters\\":{\\"PipelineId\\":\\"130266f58161436a80bf07cb12c8****\\",\\"InputFile\\":\\"{\\\\\\"Bucket\\\\\\": \\\\\\"example-bucket-****\\\\\\",\\\\\\"Location\\\\\\": \\\\\\"cn-shanghai\\\\\\"}\\"},\\"Type\\":\\"Start\\"},\\"Act-Report\\":{\\"Parameters\\":{},\\"Type\\":\\"Report\\"},\\"Act-Transcode-M3U8\\":{\\"Parameters\\":{\\"Outputs\\":\\"[{\\\\\\"Object\\\\\\":\\\\\\"transcode/{ObjectPrefix}{FileName}\\\\\\",\\\\\\"TemplateId\\\\\\": \\\\\\"957d1719ee85ed6527b90cf62726****\\\\\\"}]\\",\\"OutputBucket\\":\\"example-bucket-****\\",\\"OutputLocation\\":\\"cn-shanghai\\"},\\"Type\\":\\"Transcode\\"}},\\"Dependencies\\":{\\"Act-Start\\":[\\"Act-Transcode-M3U8\\"],\\"Act-Report\\":[],\\"Act-Transcode-M3U8\\":[\\"Act-Report\\"]}}","MediaWorkflowId":"93ab850b4f6f44eab54b6e91d24d****"}]},"RequestId":"16CD0CDD-457E-420D-9755-8385075A1234"}
   */
  topology?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      mediaWorkflowId: 'MediaWorkflowId',
      name: 'Name',
      state: 'State',
      topology: 'Topology',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      mediaWorkflowId: 'string',
      name: 'string',
      state: 'string',
      topology: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

