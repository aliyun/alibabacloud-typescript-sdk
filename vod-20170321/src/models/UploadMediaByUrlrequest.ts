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
  enableFirstFrameCover?: boolean;
  generateThumbnail?: boolean;
  /**
   * @remarks
   * The custom deduplication identifier. If this parameter is specified and a request with the same identifier was sent within the past 10 minutes, an error is returned for the current request.
   * >  
   * > - This deduplication identifier is custom-defined. It can be up to 50 characters in length and can contain uppercase and lowercase letters, digits, hyphens (-), and underscores (_). If this parameter is not specified or is set to an empty string, deduplication is not performed.
   * 
   * @example
   * 5c62d40299034bbaa4c195da330****
   */
  sessionId?: string;
  /**
   * @remarks
   * The storage address of the media file.
   * 
   * Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com/?spm=a2c4g.11186623.2.15.6948257eaZ4m54#/vod/settings/censored) and choose **Configuration Management** > **Media Asset Management** > **Storage** to view the storage address. If you do not specify this parameter, the default storage address is used.
   * 
   * @example
   * outin-bfefbb90a47c******163e1c7426.oss-cn-shanghai.aliyuncs.com
   */
  storageLocation?: string;
  /**
   * @remarks
   * The ID of the transcoding template group. You can obtain the ID by using one of the following methods:
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Processing** > **Transcoding Template Groups** to view the transcoding template group ID.
   * - Obtain the value of TranscodeTemplateGroupId from the response when you call the [AddTranscodeTemplateGroup](https://help.aliyun.com/document_detail/102665.html) operation.
   * - Obtain the value of TranscodeTemplateGroupId from the response when you call the [ListTranscodeTemplateGroup](https://help.aliyun.com/document_detail/102669.html) operation.
   * 
   * >- If you do not specify a transcoding template group ID, the default transcoding template group is used. If you specify a transcoding template group ID, the specified template group is used.
   * >- You can also set this parameter in `UploadMetadatas`. If TemplateGroupId is set in both UploadMetadatas and this parameter, the value in UploadMetadatas takes precedence.
   * 
   * @example
   * ca3a8f6e4957b65806709586****
   */
  templateGroupId?: string;
  /**
   * @remarks
   * The metadata of the media files to upload. The value is a JSON string.
   * 
   * - The metadata takes effect only when it matches a URL in UploadURLs.
   * - JSON format: `[UploadMetadata, UploadMetadata,…]`. The value must be converted to a JSON string.
   * - For more information, see the **UploadMetadata** table below.
   * 
   * @example
   * [{"SourceURL":"https://example.aliyundoc.com/video01.mp4","Title":"urlUploadTest"}]
   */
  uploadMetadatas?: string;
  /**
   * @remarks
   * The URLs of media source files.
   * - The URL must include a file name extension. For example, mp4 is the file name extension in `https://****.mp4`.
   *     - If the URL does not include a file name extension, you can specify the FileExtension parameter in `UploadMetadatas`.
   *     - If the URL includes a file name extension and the `FileExtension` parameter is also specified, the value of `FileExtension` takes precedence.
   *     - For supported file name extensions, see [Upload overview](https://help.aliyun.com/document_detail/55396.html).
   * 
   * > - Separate multiple URLs with commas (,). A maximum of 20 URLs are supported. To prevent upload failures caused by special characters, URL-encode each URL before joining them with commas.
   * 
   * This parameter is required.
   * 
   * @example
   * https://****.mp4
   */
  uploadURLs?: string;
  /**
   * @remarks
   * The custom settings. The value is a JSON string that supports message callback and upload acceleration settings. For more information, see [UserData](~~86952#UserData~~).
   * 
   * > - To use message callbacks in this parameter, you must configure an HTTP callback URL and select the corresponding callback event types in the console. Otherwise, the callback settings do not take effect. For information about how to configure HTTP callbacks in the console, see [Callback settings](https://help.aliyun.com/document_detail/86071.html).
   * > - To use the upload acceleration feature, submit a ticket to activate it. For more information, see [Upload instructions](https://help.aliyun.com/document_detail/55396.html). For information about how to submit a ticket, see [Contact us](https://help.aliyun.com/document_detail/464625.html).
   * 
   * @example
   * {"MessageCallback":{"CallbackURL":"http://example.aliyundoc.com"},"Extend":{"localId":"xxx","test":"www"}}
   */
  userData?: string;
  /**
   * @remarks
   * The workflow ID. Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Processing** > **Workflows** to view the workflow ID.
   * 
   * > If both WorkflowId and TemplateGroupId are specified, WorkflowId takes precedence. For usage instructions, see [Workflows](https://help.aliyun.com/document_detail/115347.html).
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

