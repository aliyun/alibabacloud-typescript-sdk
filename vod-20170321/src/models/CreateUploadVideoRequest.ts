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
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com). In the left-side navigation pane, choose **Configuration Management** > **Media Asset Management Configuration** > **Category Management** to view the category ID.
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
   * - The description can be up to 1,024 characters in length.
   * - The description must be encoded in UTF-8.
   * 
   * @example
   * UploadTest
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to use the first frame of the video as the thumbnail.
   */
  enableFirstFrameCover?: boolean;
  /**
   * @remarks
   * The name of the audio or video source file to be uploaded.
   * 
   * - The file name must contain an extension. The extension is not case-sensitive.
   * - For supported extensions, see [Upload overview](https://help.aliyun.com/document_detail/55396.html).
   * 
   * This parameter is required.
   * 
   * @example
   * D:\video_01.mp4
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
  /**
   * @remarks
   * Specifies whether to generate a thumbnail for the video.
   */
  generateThumbnail?: boolean;
  /**
   * @remarks
   * The custom ID. The ID can be 6 to 64 characters in length and can contain only lowercase letters, uppercase letters, digits, hyphens (-), and underscores (_). The ID must be unique within the user dimension.
   * 
   * @example
   * 123-123
   */
  referenceId?: string;
  /**
   * @remarks
   * The storage address. You can obtain the storage address by using the following method:
   * Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Asset Management Configuration** > **Storage Management** to view the storage address.
   * 
   * > If you do not specify this parameter, the audio or video file is uploaded to the default storage address. If no default storage address is configured, the file is uploaded to the first storage address in the storage list. If you specify this parameter, the audio or video file is uploaded to the specified storage address.
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
   * - Separate multiple tags with commas (,).
   * - Each tag can be up to 32 characters in length.
   * - The tags must be encoded in UTF-8.
   * 
   * @example
   * tag1,tag2
   */
  tags?: string;
  /**
   * @remarks
   * The ID of the transcoding template group. You can obtain the ID by using one of the following methods:
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com). In the left-side navigation pane, choose **Configuration Management** > **Media Processing Configuration** > **Transcoding Template Groups** to view the ID of the transcoding template group.
   * - When you create a transcoding template group by calling the [Create a transcoding template group](https://help.aliyun.com/document_detail/102665.html) operation, the ID is the value of the TranscodeTemplateGroupId parameter in the response.
   * - When you query transcoding template groups by calling the [Query transcoding configuration list](https://help.aliyun.com/document_detail/102669.html) operation, the ID is the value of the TranscodeTemplateGroupId parameter in the response.
   * 
   * >- If both WorkflowId and TemplateGroupId are specified, WorkflowId takes precedence.
   * >- If you do not specify this parameter, the default transcoding template group is used. If you specify this parameter, the specified transcoding template group is used.
   * >- If you set this parameter to the built-in **No Transcoding** template group, only the [video upload completion](https://help.aliyun.com/document_detail/55630.html) event notification is generated after the audio or video file is uploaded. The [single definition transcoding completion](https://help.aliyun.com/document_detail/55636.html) event notification is not generated.
   * > - The task triggered by this parameter is an [asynchronous task](https://help.aliyun.com/document_detail/3027551.html). After the task is submitted, it is queued and executed asynchronously in the background.
   * >- To ensure normal playback, if you set this parameter to the built-in **No Transcoding** template group, only the following formats support direct playback without transcoding after the audio or video file is uploaded: MP4, FLV, MP3, M3U8, and WEBM. Other formats are only supported for storage (pay attention to the extension of FileName). If you use ApsaraVideo Player for playback, the version must be 3.1.0 or later.
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
   * - The title must be encoded in UTF-8.
   * 
   * This parameter is required.
   * 
   * @example
   * UploadTest
   */
  title?: string;
  /**
   * @remarks
   * The custom settings. The value is a JSON string that supports settings such as message callback and upload acceleration. For more information, see [UserData](https://help.aliyun.com/document_detail/86952.html).
   * 
   * > - To use the message callback feature, you must configure an HTTP callback URL and select the corresponding callback event types in the console. Otherwise, the callback settings do not take effect. If no callback URL is specified for subsequent tasks, notifications are pushed to this URL by default. For more information about how to configure HTTP callbacks in the console, see [Callback settings](https://help.aliyun.com/document_detail/86071.html).
   * > - To use the upload acceleration feature, you must [submit an application](https://yida.alibaba-inc.com/o/ticketapply) to enable it. For more information, see [Upload instructions](https://help.aliyun.com/document_detail/55396.html).
   * 
   * @example
   * {"MessageCallback":{"CallbackURL":"http://example.aliyundoc.com"},"Extend":{"localId":"*****","test":"www"}}
   */
  userData?: string;
  /**
   * @remarks
   * The workflow ID. You can log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Processing Configuration** > **Workflows** to view the workflow ID.
   * 
   * > - If both WorkflowId and TemplateGroupId are specified, WorkflowId takes precedence. For more information, see [Workflows](https://help.aliyun.com/document_detail/115347.html).
   * > - The task triggered by this parameter is an [asynchronous task](https://help.aliyun.com/document_detail/3027551.html). After the task is submitted, it is queued and executed asynchronously in the background.
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

