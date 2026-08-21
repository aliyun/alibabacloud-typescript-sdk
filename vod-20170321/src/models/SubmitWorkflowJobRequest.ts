// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitWorkflowJobRequest extends $dara.Model {
  /**
   * @remarks
   * The media asset ID, which is the video ID. You can obtain the ID by using one of the following methods:
   * - For videos uploaded through the console, log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Files** > **Audio/Video** to view the video ID.
   * - When you call the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation to obtain the upload URL and credential, the video ID is the value of the VideoId parameter in the response.
   * - After the video is uploaded, you can call the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation to query the video ID, which is the value of the VideoId parameter in the response.
   * 
   * @example
   * 058b39e75269da42b08f00459****
   */
  mediaId?: string;
  /**
   * @remarks
   * The workflow ID. Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Processing** > **Workflow** to view the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 34d577eade633860bdf1237****
   */
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

