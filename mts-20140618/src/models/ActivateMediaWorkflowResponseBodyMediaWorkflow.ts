// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ActivateMediaWorkflowResponseBodyMediaWorkflow extends $dara.Model {
  /**
   * @remarks
   * The time when the media workflow was created.
   * 
   * @example
   * 2016-04-01T05:29:37Z
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
   * mediaworkflow-example
   */
  name?: string;
  /**
   * @remarks
   * The status of the media workflow. The value is **Active**.
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
   * {\\"Activities\\":{\\"Act-Start\\":{\\"Parameters\\":{\\"PipelineId\\":\\"130266f58161436a80bf07cb12c8****\\",\\"InputFile\\":\\"{\\\\\\"Bucket\\\\\\": \\\\\\"example\\\\\\",\\\\\\"Location\\\\\\": \\\\\\"oss-cn-hangzhou\\\\\\"}\\"},\\"Type\\":\\"Start\\"},\\"Act-Report\\":{\\"Parameters\\":{},\\"Type\\":\\"Report\\"},\\"Act-Transcode-M3U8\\":{\\"Parameters\\":{\\"Outputs\\":\\"[{\\\\\\"OutputObject\\\\\\":\\\\\\"transcode%2F%7BObjectPrefix%7D%7BFileName%7D\\\\\\",\\\\\\"TemplateId\\\\\\": \\\\\\"957d1719ee85ed6527b90cf62726****\\\\\\"}]\\",\\"OutputBucket\\":\\"panda-vod-hls\\",\\"OutputLocation\\":\\"oss-cn-hangzhou\\"},\\"Type\\":\\"Transcode\\"}},\\"Dependencies\\":{\\"Act-Start\\":[\\"Act-Transcode-M3U8\\"],\\"Act-Report\\":[],\\"Act-Transcode-M3U8\\":[\\"Act-Report\\"]}}
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

