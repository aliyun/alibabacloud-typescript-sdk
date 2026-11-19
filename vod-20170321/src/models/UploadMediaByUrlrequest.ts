// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadMediaByURLRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Default value: **app-1000000**. For more information, see [Multi-application](https://help.aliyun.com/document_detail/113600.html).
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * Specifies whether to use the first frame of the video as the cover.
   */
  enableFirstFrameCover?: boolean;
  /**
   * @remarks
   * Specifies whether to generate a thumbnail for the video.
   */
  generateThumbnail?: boolean;
  /**
   * @remarks
   * The custom deduplication identifier. If this parameter is passed in a request and a request with the same identifier was detected within the past 10 minutes, an error is returned for the current request.
   * >  
   * > - The deduplication identifier is custom. It can be up to 50 characters in length and supports uppercase and lowercase letters, digits, hyphens (-), and underscores (_). If you do not pass this parameter or pass an empty string, deduplication is not performed.
   * 
   * @example
   * 5c62d40299034bbaa4c195da330****
   */
  sessionId?: string;
  /**
   * @remarks
   * The storage address of the media file.
   * 
   * Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com/?spm=a2c4g.11186623.2.15.6948257eaZ4m54#/vod/settings/censored) and choose **Configuration Management** > **Media Asset Management Configuration** > **Storage Management** to view the storage address. If you do not specify this parameter, the default storage address is used.
   * 
   * @example
   * outin-bfefbb90a47c******163e1c7426.oss-cn-shanghai.aliyuncs.com
   */
  storageLocation?: string;
  /**
   * @remarks
   * The ID of the transcoding template group. You can obtain the ID by using one of the following methods:
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Processing Configuration** > **Transcoding Template Groups** to view the ID of the transcoding template group.
   * - When you create a transcoding template group by calling the [Create a transcoding template group](https://help.aliyun.com/document_detail/102665.html) operation, the ID of the transcoding template group is the value of the TranscodeTemplateGroupId response parameter.
   * - When you query transcoding template groups by calling the [Query transcoding template groups](https://help.aliyun.com/document_detail/102669.html) operation, the ID is the value of the TranscodeTemplateGroupId response parameter.
   * 
   * >- If you do not specify the ID of a transcoding template group, the default transcoding template group is used for transcoding. If you specify the ID of a transcoding template group, the specified template group is used for transcoding.
   * >- You can also set this parameter in `UploadMetadatas`. If TemplateGroupId is set in both `UploadMetadatas` and here, the TemplateGroupId set in `UploadMetadatas` prevails.
   * 
   * @example
   * ca3a8f6e4957b65806709586****
   */
  templateGroupId?: string;
  /**
   * @remarks
   * The metadata of the media files to be uploaded. The value is a JSON string.
   * 
   * - The metadata takes effect only when it matches the URL in UploadURLs.
   * - JSON format: `[UploadMetadata, UploadMetadata,…]`. The value must be converted to a JSON string.
   * - For more information, see the **UploadMetadata** table below.
   * 
   * @example
   * [{"SourceURL":"https://example.aliyundoc.com/video01.mp4","Title":"urlUploadTest"}]
   */
  uploadMetadatas?: string;
  /**
   * @remarks
   * The URLs of the source media files.
   * - The URL must include a file name extension. For example, in `https://****.mp4`, mp4 is the file name extension.
   *     - If the URL does not contain a file name extension, you can specify it by passing `FileExtension` in `UploadMetadatas`.
   *     - If the URL contains a file name extension and `FileExtension` is also passed, the passed `FileExtension` prevails.
   *     - For supported file name extensions, see [Upload overview](https://help.aliyun.com/document_detail/55396.html).
   * 
   * > - The URLs must be URL-encoded. Separate multiple URLs with commas (,). You can specify up to 20 URLs. To prevent upload failures caused by special characters, **URL-encode** the URLs before concatenating them with commas.
   * 
   * This parameter is required.
   * 
   * @example
   * https://****.mp4
   */
  uploadURLs?: string;
  /**
   * @remarks
   * The custom settings. The value is a JSON string. You can configure settings such as message callbacks and upload acceleration. For more information, see [UserData](~~86952#UserData~~).
   * 
   * > - To use the message callback feature in this parameter, you must configure an HTTP callback URL and select the corresponding callback event types in the console. Otherwise, the callback settings do not take effect. For more information about how to configure HTTP callbacks in the console, see [Callback settings](https://help.aliyun.com/document_detail/86071.html).
   * > - To use the upload acceleration feature, you must submit a ticket to apply for activation. For more information, see [Upload instructions](https://help.aliyun.com/document_detail/55396.html). For more information about how to submit a ticket, see [Contact us](https://help.aliyun.com/document_detail/464625.html).
   * 
   * @example
   * {"MessageCallback":{"CallbackURL":"http://example.aliyundoc.com"},"Extend":{"localId":"xxx","test":"www"}}
   */
  userData?: string;
  /**
   * @remarks
   * The workflow ID. You can log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Processing Configuration** > **Workflow Management** to view the workflow ID.
   * 
   * > If both WorkflowId and TemplateGroupId are passed, WorkflowId prevails. For usage instructions, see [Workflows](https://help.aliyun.com/document_detail/115347.html).
   * 
   * @example
   * e1e243b42548248197d6f74f9****
   */
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      enableFirstFrameCover: 'EnableFirstFrameCover',
      generateThumbnail: 'GenerateThumbnail',
      sessionId: 'SessionId',
      storageLocation: 'StorageLocation',
      templateGroupId: 'TemplateGroupId',
      uploadMetadatas: 'UploadMetadatas',
      uploadURLs: 'UploadURLs',
      userData: 'UserData',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      enableFirstFrameCover: 'boolean',
      generateThumbnail: 'boolean',
      sessionId: 'string',
      storageLocation: 'string',
      templateGroupId: 'string',
      uploadMetadatas: 'string',
      uploadURLs: 'string',
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

