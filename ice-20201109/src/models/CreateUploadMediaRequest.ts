// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUploadMediaRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. The default value is `app-1000000`.
   * 
   * @example
   * app-1000000
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the entity. You can call the `CreateEntity` operation to create an entity and define a custom schema for dynamic metadata.
   * 
   * @example
   * 9e177cac2fb44f8b8c67b199fcc7bffd
   */
  entityId?: string;
  /**
   * @remarks
   * The file information, provided as a JSON string containing the following fields:
   * 
   * - `Type` (Required): The file type. Valid values: `video`, `image`, `audio`, `text`, and `other`.
   * 
   * - `Name` (Required): The filename without the extension.
   * 
   * - `Size` (Optional): The file size.
   * 
   * - `Ext` (Required): The file extension.
   * 
   * @example
   * {\\"Type\\":\\"video\\",\\"Name\\":\\"test\\",\\"Size\\":108078336,\\"Ext\\":\\"mp4\\"}
   */
  fileInfo?: string;
  /**
   * @remarks
   * The media asset metadata, provided as a JSON string.
   * 
   * `Title` (Required):
   * 
   * - The title can be up to 128 characters in length.
   * 
   * - The title must be UTF-8 encoded.
   * 
   * `Description` (Optional):
   * 
   * - The description can be up to 1,024 characters in length.
   * 
   * - The description must be UTF-8 encoded.
   * 
   * `CateId` (Optional): The category ID.
   * 
   * `Tags` (Optional): The tags of the media asset, separated by commas.
   * 
   * `BusinessType` (Required): The business type. Valid values depend on the `Type` specified in `FileInfo`.
   * 
   * - If `Type` is `video`: `opening` or `ending`.
   * 
   * - If `Type` is `image`: `default`, `cover`, or `watermark`.
   * 
   * - If `Type` is `text`: `subtitles` or `font`.
   * 
   * -
   * 
   * - If `Type` is `other`: `general`.
   * 
   * `CoverURL` (Optional): The URL of the cover image.<br>`DynamicMetaData` (Optional): A string for custom dynamic metadata.<br>
   * 
   * @example
   * {\\"Title\\": \\"UploadTest\\", \\"Description\\": \\"UploadImageTest\\", \\"Tags\\": \\"tag1,tag2\\",\\"BusinessType\\":\\"cover\\"}
   */
  mediaMetaData?: string;
  /**
   * @remarks
   * The post-processing configuration for `video` or `audio` uploads.
   * 
   * Set `ProcessType` to `Workflow`.
   * 
   * > - This parameter specifies an [asynchronous task](https://help.aliyun.com/document_detail/3027141.html), which is queued and runs in the background after you submit the request.
   * 
   * @example
   * {\\"ProcessType\\":\\"Workflow\\",\\"ProcessID\\":\\"74ba870f1a4873a3ba238e0bf6fa9***\\"}
   */
  postProcessConfig?: string;
  /**
   * @remarks
   * The destination storage configuration, provided as a JSON string.
   * 
   * - `StorageType`: Only `oss` is supported.
   * 
   * - `StorageLocation`: Only VOD storage is supported. You cannot upload to your own OSS buckets.
   * 
   * @example
   * {\\"StorageType\\":\\"oss\\",\\"StorageLocation\\":\\"outin-***.oss-cn-shanghai.aliyuncs.com\\"}
   */
  uploadTargetConfig?: string;
  /**
   * @remarks
   * A JSON string for custom settings, such as configuring a message callback.
   * 
   * @example
   * {"MessageCallback":{"CallbackURL":"http://example.aliyundoc.com"},"Extend":{"localId":"*****","test":"www"}}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      entityId: 'EntityId',
      fileInfo: 'FileInfo',
      mediaMetaData: 'MediaMetaData',
      postProcessConfig: 'PostProcessConfig',
      uploadTargetConfig: 'UploadTargetConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      entityId: 'string',
      fileInfo: 'string',
      mediaMetaData: 'string',
      postProcessConfig: 'string',
      uploadTargetConfig: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

