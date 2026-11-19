// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterMediaRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use the first frame of the video as the thumbnail.
   */
  enableFirstFrameCover?: boolean;
  /**
   * @remarks
   * Specifies whether to generate a thumbnail for the video.
   */
  generateThumbnail?: boolean;
  /**
   * @remarks
   * The metadata of the media assets to be registered. The value is a JSON string. You can specify the metadata for up to 10 media assets at a time. For more information about the parameter structure, see the **RegisterMetadata** table below.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"FileURL":"https://****.oss-cn-shanghai.aliyuncs.com/video/test/video123.m3u8","Title":"VideoName"}]
   */
  registerMetadatas?: string;
  /**
   * @remarks
   * The ID of the transcoding template group. You can obtain the ID by using one of the following methods:
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Processing Configuration** > **Transcoding Template Groups** to view the ID of the transcoding template group.
   * - When you create a transcoding template group by calling the [Create a transcoding template group](https://help.aliyun.com/document_detail/102665.html) operation, the ID of the transcoding template group is the value of the TranscodeTemplateGroupId response parameter.
   * - When you query transcoding template groups by calling the [Query transcoding configurations](https://help.aliyun.com/document_detail/102669.html) operation, the ID of the transcoding template group is the value of the TranscodeTemplateGroupId response parameter.
   * 
   * > - If transcoding is not required, set this parameter to VOD_NO_TRANSCODE, which specifies the no-transcoding template group. Otherwise, the video status is **Upload Completed**, and you cannot use the playback service to play the audio or video. If transcoding is required, specify the ID of the corresponding transcoding template group.
   * > - If both WorkflowId and TemplateGroupId are specified, WorkflowId takes precedence. For more information, see [Media workflows](https://help.aliyun.com/document_detail/115347.html).
   * > - The task for this parameter is an [asynchronous task](https://help.aliyun.com/document_detail/3027551.html). After the task is submitted, it is not immediately completed but queued for asynchronous execution in the background.
   * 
   * @example
   * ca3a8f6e49c87b65806709586****
   */
  templateGroupId?: string;
  /**
   * @remarks
   * The custom settings. The value is a JSON string. You can configure settings such as message callbacks. For more information about the parameter, see [UserData](~~86952#section_6fg_qll_v3w~~).
   * > This operation does not support callbacks. Even if a message callback is configured in this parameter, no callback message is generated after the media asset registration is completed. When you subsequently initiate media processing such as transcoding and snapshot generation for the registered media assets, if you separately configure a message callback in UserData when initiating the transcoding or snapshot generation, that callback URL takes precedence. If no callback is separately configured, the callback URL configured in UserData during the media asset registration is used.
   * 
   * @example
   * {"Extend":{"localId":"****","test":"www"}}
   */
  userData?: string;
  /**
   * @remarks
   * The ID of the media workflow. You can log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Processing Configuration** > **Workflow Management** to view the workflow ID.
   * 
   * > - If both WorkflowId and TemplateGroupId are specified, WorkflowId takes precedence. For more information, see [Media workflows](https://help.aliyun.com/document_detail/115347.html).
   * > - The task for this parameter is an [asynchronous task](https://help.aliyun.com/document_detail/3027551.html). After the task is submitted, it is not immediately completed but queued for asynchronous execution in the background.
   * 
   * @example
   * 637adc2b7ba51a83d841606f8****
   */
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      enableFirstFrameCover: 'EnableFirstFrameCover',
      generateThumbnail: 'GenerateThumbnail',
      registerMetadatas: 'RegisterMetadatas',
      templateGroupId: 'TemplateGroupId',
      userData: 'UserData',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableFirstFrameCover: 'boolean',
      generateThumbnail: 'boolean',
      registerMetadatas: 'string',
      templateGroupId: 'string',
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

