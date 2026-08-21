// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterMediaRequest extends $dara.Model {
  enableFirstFrameCover?: boolean;
  generateThumbnail?: boolean;
  /**
   * @remarks
   * The metadata of the media assets to register. The value is a JSON string. You can specify metadata for up to 10 media assets at a time. For more information about the parameter structure, see the **RegisterMetadata** table below.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"FileURL":"https://****.oss-cn-shanghai.aliyuncs.com/video/test/video123.m3u8","Title":"VideoName"}]
   */
  registerMetadatas?: string;
  /**
   * @remarks
   * The transcoding template group ID. You can obtain the ID by using one of the following methods:
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Processing** > **Transcoding Template Groups** to view the transcoding template group ID.
   * - Obtain the value of TranscodeTemplateGroupId from the response when you call the [CreateTranscodeTemplateGroup](https://help.aliyun.com/document_detail/102665.html) operation.
   * - Obtain the value of TranscodeTemplateGroupId from the response when you call the [ListTranscodeTemplateGroup](https://help.aliyun.com/document_detail/102669.html) operation.
   * 
   * > - If transcoding is not required, set this parameter to VOD_NO_TRANSCODE (the no-transcoding template group). Otherwise, the video status is **UploadSucc** and the video cannot be played by using the playback service. If transcoding is required, specify the corresponding transcoding template group ID.
   * > - If both WorkflowId and TemplateGroupId are specified, WorkflowId takes precedence. For more information, see [Workflows](https://help.aliyun.com/document_detail/115347.html).
   * > - This parameter triggers an [asynchronous task](https://help.aliyun.com/document_detail/3027551.html). After submission, the task enters a background queue for asynchronous execution.
   * 
   * @example
   * ca3a8f6e49c87b65806709586****
   */
  templateGroupId?: string;
  /**
   * @remarks
   * The custom settings. The value is a JSON string that supports settings such as message callbacks. For more information, see [UserData](~~86952#section_6fg_qll_v3w~~).
   * >This operation does not support callbacks. Even if you configure a message callback in this parameter, no callback message is generated after media asset registration is complete. When you subsequently initiate media processing such as transcoding or snapshotting on the registered media asset, if you specify a message callback in UserData at that time, that callback URL takes precedence. Otherwise, the callback URL specified in UserData during media asset registration is used.
   * 
   * @example
   * {"Extend":{"localId":"****","test":"www"}}
   */
  userData?: string;
  /**
   * @remarks
   * The workflow ID. Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Processing** > **Workflow Management** to view the workflow ID.
   * 
   * > - If both WorkflowId and TemplateGroupId are specified, WorkflowId takes precedence. For more information, see [Workflows](https://help.aliyun.com/document_detail/115347.html).
   * > - This parameter triggers an [asynchronous task](https://help.aliyun.com/document_detail/3027551.html). After submission, the task enters a background queue for asynchronous execution.
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

