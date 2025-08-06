// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitWorkflowJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the media file. You can use one of the following methods to obtain the ID:
   * 
   * *   Log on to the [ApsaraVideo VOD](https://vod.console.aliyun.com) console. In the left-side navigation pane, choose **Media Files** > **Audio/Video**. On the Video and Audio page, view the ID of the audio or video file. This method is applicable to files that are uploaded by using the ApsaraVideo VOD console.
   * *   Obtain the value of the VideoId parameter when you call the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation to upload media files.
   * *   Obtain the value of the VideoId parameter when you call the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation after you upload media files.
   * 
   * @example
   * 058b39e75269da42b08f00459****
   */
  mediaId?: string;
  /**
   * @remarks
   * The ID of the workflow. To view the ID of the workflow, log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com). In the left-side navigation pane, choose **Configuration Management** > **Media Processing** > **Workflows**.
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

