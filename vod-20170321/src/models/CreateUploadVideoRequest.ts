// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUploadVideoRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Default value: **app-1000000**. For more information, see [Multi-application](https://help.aliyun.com/document_detail/113600.html).
   * 
   * @example
   * app-1000000
   */
  appId?: string;
  /**
   * @remarks
   * The category ID. You can obtain the category ID by using one of the following methods:
   * 
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Management Configuration** > **Category Management** to view the category ID.
   * - When you create a category by calling the [AddCategory](~~AddCategory~~) operation, the category ID is the value of the CateId parameter in the response.
   * - When you query categories by calling the [GetCategories](~~GetCategories~~) operation, the category ID is the value of the CateId parameter in the response.
   * 
   * @example
   * 100036****
   */
  cateId?: number;
  /**
   * @remarks
   * The URL of the custom video thumbnail.
   * 
   * @example
   * https://example.aliyundoc.com/image/D22F553TEST****.jpeg
   */
  coverURL?: string;
  /**
   * @remarks
   * The description of the audio or video file displayed in ApsaraVideo VOD after the upload is complete.
   * 
   * - The description can be up to 1024 characters in length.
   * - The value is encoded in UTF-8.
   * 
   * @example
   * UploadTest
   */
  description?: string;
  enableFirstFrameCover?: boolean;
  /**
   * @remarks
   * The address of the audio or video source file to be uploaded.
   * 
   * - The file name extension is required and is not case-sensitive.
   * - For supported file name extensions, see [Upload overview](https://help.aliyun.com/document_detail/55396.html).
   * 
   * This parameter is required.
   * 
   * @example
   * D:\\video_01.mp4
   */
  fileName?: string;
  /**
   * @remarks
   * The size of the audio or video source file to be uploaded. Unit: bytes.
   * 
   * @example
   * 123
   */
  fileSize?: number;
  generateThumbnail?: boolean;
  /**
   * @remarks
   * The custom ID. Only lowercase letters, uppercase letters, digits, hyphens, and underscores are supported. The length is 6 to 64 characters. The ID is unique at the user level.
   * 
   * @example
   * 123-123
   */
  referenceId?: string;
  /**
   * @remarks
   * The storage address. You can obtain the storage address by using the following method:
   * Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Management Configuration** > **Storage Management** to view the storage address.
   * 
   * > If this parameter is not specified, the audio or video file is uploaded to the default storage address. If no default storage address exists, the file is uploaded to the first storage address in the storage list. If this parameter is specified, the audio or video file is uploaded to the specified storage address.
   * 
   * @example
   * out-****.oss-cn-shanghai.aliyuncs.com
   */
  storageLocation?: string;
  /**
   * @remarks
   * The tags of the audio or video file.
   * 
   * - You can specify up to 16 tags.
   * - To specify multiple tags, separate them with commas (,).
   * - Each tag can be up to 32 characters in length.
   * - The value is encoded in UTF-8.
   * 
   * @example
   * tag1,tag2
   */
  tags?: string;
  /**
   * @remarks
   * The ID of the transcoding template group. You can obtain the ID by using one of the following methods:
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Processing Configuration** > **Transcoding Template Groups** to view the transcoding template group ID.
   * - When you create a transcoding template group by calling the [Create a transcoding template group](https://help.aliyun.com/document_detail/102665.html) operation, the transcoding template group ID is the value of the TranscodeTemplateGroupId parameter in the response.
   * - When you query transcoding template groups by calling the [Query transcoding configurations](https://help.aliyun.com/document_detail/102669.html) operation, the transcoding template group ID is the value of the TranscodeTemplateGroupId parameter in the response.
   * 
   * >- If both WorkflowId and TemplateGroupId are specified, WorkflowId takes precedence.
   * >- If this parameter is not specified, the default transcoding template group is used for transcoding. If a transcoding template group ID is specified, the specified template group is used for transcoding.
   * >- If this parameter is set to the built-in **No Transcoding** template group, only the [Video Upload Complete](https://help.aliyun.com/document_detail/55630.html) event notification is sent after the audio or video file is uploaded. The [Transcode Complete for a Single Definition](https://help.aliyun.com/document_detail/55636.html) event notification is not sent.
   * > - This parameter triggers an [asynchronous task](https://help.aliyun.com/document_detail/3027551.html). After submission, the task is not immediately completed and is queued for asynchronous execution in the background.
   * >- To ensure normal playback, when the built-in **No Transcoding** template group is used, only the following formats support direct playback without transcoding after the audio or video file is uploaded: MP4, FLV, MP3, M3U8, and WEBM. Other formats support storage only (check the file name extension of FileName). If you use ApsaraVideo Player, the player version must be 3.1.0 or later.
   * 
   * @example
   * 405477f9e214d19ea2c7c854****
   */
  templateGroupId?: string;
  /**
   * @remarks
   * The title of the audio or video file displayed in ApsaraVideo VOD after the upload is complete.
   * 
   * - The title can be up to 128 characters in length.
   * - The value is encoded in UTF-8.
   * 
   * This parameter is required.
   * 
   * @example
   * UploadTest
   */
  title?: string;
  /**
   * @remarks
   * The custom settings in a JSON string. The settings support message callbacks, upload acceleration, and other configurations. For more information, see [UserData](https://help.aliyun.com/document_detail/86952.html).
   * 
   * > - To use the message callback in this parameter, you must configure an HTTP callback URL and select the corresponding callback event types in the console. Otherwise, the callback settings do not take effect. If no callback URL is specified for subsequent tasks, callbacks are sent to this address by default. To configure HTTP callbacks in the console, see [Callback settings](https://help.aliyun.com/document_detail/86071.html).
   * > - To use the upload acceleration feature, you must [submit a Yida form](https://yida.alibaba-inc.com/o/ticketapply) to apply for activation. For more information, see [Upload instructions](https://help.aliyun.com/document_detail/55396.html).
   * 
   * @example
   * {"MessageCallback":{"CallbackURL":"http://example.aliyundoc.com"},"Extend":{"localId":"*****","test":"www"}}
   */
  userData?: string;
  /**
   * @remarks
   * The workflow ID. Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Processing Configuration** > **Workflow Management** to view the workflow ID.
   * 
   * > - If both WorkflowId and TemplateGroupId are specified, WorkflowId takes precedence. For more information, see [Workflows](https://help.aliyun.com/document_detail/115347.html).
   * > - This parameter triggers an [asynchronous task](https://help.aliyun.com/document_detail/3027551.html). After submission, the task is not immediately completed and is queued for asynchronous execution in the background.
   * 
   * @example
   * 613efff3887ec34af685714cc461****
   */
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cateId: 'CateId',
      coverURL: 'CoverURL',
      description: 'Description',
      enableFirstFrameCover: 'EnableFirstFrameCover',
      fileName: 'FileName',
      fileSize: 'FileSize',
      generateThumbnail: 'GenerateThumbnail',
      referenceId: 'ReferenceId',
      storageLocation: 'StorageLocation',
      tags: 'Tags',
      templateGroupId: 'TemplateGroupId',
      title: 'Title',
      userData: 'UserData',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cateId: 'number',
      coverURL: 'string',
      description: 'string',
      enableFirstFrameCover: 'boolean',
      fileName: 'string',
      fileSize: 'number',
      generateThumbnail: 'boolean',
      referenceId: 'string',
      storageLocation: 'string',
      tags: 'string',
      templateGroupId: 'string',
      title: 'string',
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

