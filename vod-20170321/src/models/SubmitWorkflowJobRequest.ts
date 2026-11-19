// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitWorkflowJobRequest extends $dara.Model {
  extraInputs?: string;
  /**
   * @remarks
   * The media asset ID, which is the video ID. You can obtain the ID by using one of the following methods:
   * - For videos uploaded through the console, log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Assets** > **Audio/Video** to view the video ID.
   * - When you call the [Get the upload URL and credential for a video](https://help.aliyun.com/document_detail/55407.html) operation to obtain the upload URL and credential, the video ID is the value of the VideoId response parameter.
   * - After a video is uploaded, you can call the [Search for media information](https://help.aliyun.com/document_detail/86044.html) operation to query the video ID. The video ID is the value of the VideoId response parameter.
   * 
   * @example
   * 058b39e75269da42b08f00459****
   */
  mediaId?: string;
  /**
   * @remarks
   * The workflow ID. You can log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Processing Configuration** > **Workflow Management** to view the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 34d577eade633860bdf1237****
   */
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      extraInputs: 'ExtraInputs',
      mediaId: 'MediaId',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraInputs: 'string',
      mediaId: 'string',
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

