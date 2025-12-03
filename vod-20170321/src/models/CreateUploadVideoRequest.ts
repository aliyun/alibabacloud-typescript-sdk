// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUploadVideoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. Default value: **app-1000000**. For more information, see [Overview](https://help.aliyun.com/document_detail/113600.html).
   * 
   * @example
   * app-1000000
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the category. You can use one of the following methods to obtain the ID:
   * 
   * *   Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com). In the left-side navigation pane, choose **Configuration Management** > **Media Management** > **Categories** to view the category ID of the media file.
   * *   Obtain the value of CateId from the response to the [AddCategory](~~AddCategory~~) operation.
   * *   Obtain the value of CateId from the response to the [GetCategories](~~GetCategories~~) operation.
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
   * The description of the audio or video file.
   * 
   * *   The value can be up to 1,024 characters in length.
   * *   The value must be encoded in UTF-8.
   * 
   * @example
   * UploadTest
   */
  description?: string;
  /**
   * @remarks
   * The name of the source file.
   * 
   * *   The name must contain a file name extension, which is not case-sensitive.
   * *   For more information about file name extensions supported by ApsaraVideo VOD, see [Overview](https://help.aliyun.com/document_detail/55396.html).
   * 
   * This parameter is required.
   * 
   * @example
   * D:\\video_01.mp4
   */
  fileName?: string;
  /**
   * @remarks
   * The size of the source file. Unit: bytes.
   * 
   * @example
   * 123
   */
  fileSize?: number;
  /**
   * @example
   * 123-123
   */
  referenceId?: string;
  /**
   * @remarks
   * The storage address. Perform the following operations to obtain the storage address: Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com). In the left-side navigation pane, choose **Configuration Management** > **Media Management** > **Storage**. On the Storage page, view the storage address.
   * 
   * >  If you leave this parameter empty, audio and video files are uploaded to the default storage address. If you specify a storage address, audio and video files are uploaded to the specified address.
   * 
   * @example
   * out-****.oss-cn-shanghai.aliyuncs.com
   */
  storageLocation?: string;
  /**
   * @remarks
   * The tags of the audio or video file.
   * 
   * *   You can specify a maximum of 16 tags.
   * *   If you want to specify multiple tags, separate the tags with commas (,).
   * *   Each tag can be up to 32 characters in length.
   * *   The value must be encoded in UTF-8.
   * 
   * @example
   * tag1,tag2
   */
  tags?: string;
  /**
   * @remarks
   * The ID of the transcoding template group. You can use one of the following methods to obtain the ID:
   * 
   * *   Log on to the ApsaraVideo VOD console. In the left-side navigation pane, choose Configuration Management > Media Processing > Transcoding Template Groups. On the Transcoding Template Groups page, you can view the ID of the transcoding template group.[](https://vod.console.aliyun.com)************
   * *   Obtain the value of the TranscodeTemplateGroupId parameter from the response to the [AddTranscodeTemplateGroup](https://help.aliyun.com/document_detail/102665.html) operation that you called to create a transcoding template group.
   * *   Obtain the value of the TranscodeTemplateGroupId parameter from the response to the [ListTranscodeTemplateGroup](https://help.aliyun.com/document_detail/102669.html) operation that you called to query transcoding template groups.
   * 
   * > *   If you specify both WorkflowId and TemplateGroupId, the value of the WorkflowId parameter takes effect.
   * > *   If this parameter is not specified, transcoding is performed based on the default transcoding template group. If the transcoding template group ID is specified, transcoding is performed based on the specified template group.
   * > *   If the **No Transcoding** template group is used, only the [FileUploadComplete](https://help.aliyun.com/document_detail/55630.html) event notification is returned after a video is uploaded. The [StreamTranscodeComplete](https://help.aliyun.com/document_detail/55636.html) event notification is not returned.
   * > *   If you use the **No Transcoding** template group to upload videos, only videos in the format of MP4, FLV, MP3, M3U8, or WebM can be played. Videos in other formats can only be stored in ApsaraVideo VOD. You can view the file name extension to obtain the video format. If you want to use ApsaraVideo Player, make sure that the version of the player is V3.1.0 or later.
   * 
   * @example
   * 405477f9e214d19ea2c7c854****
   */
  templateGroupId?: string;
  /**
   * @remarks
   * The title of the audio or video file.
   * 
   * *   The title can be up to 128 characters in length.
   * *   The value must be encoded in UTF-8.
   * 
   * This parameter is required.
   * 
   * @example
   * UploadTest
   */
  title?: string;
  /**
   * @remarks
   * The custom configurations such as callback configurations and upload acceleration configurations. The value must be a JSON string. For more information, see [Request parameters](https://help.aliyun.com/document_detail/86952.html).
   * 
   * > *   The callback configurations take effect only after you specify the HTTP callback URL and select specific callback events in the ApsaraVideo VOD console. For more information about how to configure HTTP callback settings in the ApsaraVideo VOD console, see [Configure callback settings](https://help.aliyun.com/document_detail/86071.html).
   * >*   If you want to enable the upload acceleration feature, [submit a request on Yida](https://yida.alibaba-inc.com/o/ticketapply). For more information, see [Overview](https://help.aliyun.com/document_detail/55396.html).
   * 
   * @example
   * {"MessageCallback":{"CallbackURL":"http://example.aliyundoc.com"},"Extend":{"localId":"*****","test":"www"}}
   */
  userData?: string;
  /**
   * @remarks
   * The ID of the workflow. To view the ID of the workflow, log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com). In the left-side navigation pane, choose **Configuration Management** > **Media Processing** > **Workflows**.
   * 
   * > If you specify the WorkflowId and TemplateGroupId parameters, the value of the WorkflowId parameter takes effect. For more information, see [Workflows](https://help.aliyun.com/document_detail/115347.html).
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
      fileName: 'FileName',
      fileSize: 'FileSize',
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
      fileName: 'string',
      fileSize: 'number',
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

