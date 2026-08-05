// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUploadMediaRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Default value: app-1000000.
   * 
   * @example
   * app-1000000
   */
  appId?: string;
  /**
   * @remarks
   * The entity ID. You can call the CreateEntity operation to create an entity and customize the dynamic metadata structure.
   * 
   * @example
   * 9e177cac2fb44f8b8c67b199fcc7bffd
   */
  entityId?: string;
  /**
   * @remarks
   * The file information in JSON format. This parameter contains the following fields:
   * - Type (required): the file type. Valid values: video, image, audio, text, and other.
   * - Name (required): the file name without the file name extension.
   * - Size (optional): the file size.
   * - Ext (required): the file name extension.
   * 
   * @example
   * {\\"Type\\":\\"video\\",\\"Name\\":\\"test\\",\\"Size\\":108078336,\\"Ext\\":\\"mp4\\"}
   */
  fileInfo?: string;
  /**
   * @remarks
   * The metadata of the media asset to upload, in JSON format.
   * 
   * Title (required):
   * - The maximum length is 128 characters.
   * - UTF-8 encoded.
   * 
   * Description (optional):
   * - The maximum length is 1024 characters.
   * - UTF-8 encoded.
   * 
   * CateId (optional): the category ID.
   * 
   * Tags (optional): the tags.
   * 
   * BusinessType (required): the business type. Valid values:
   * - When Type = video:
   * opening: opening credits. ending: ending credits.
   * - When Type = image:
   *   default: default.
   *   cover: cover image.
   * - When Type = text:
   *   subtitles: subtitles.
   *   font: font.
   * - When Type = material:
   *   watermark: watermark.
   * - general: general-purpose.
   * 
   * CoverURL (optional): the cover URL.
   * 
   * DynamicMetaData: the dynamic metadata. The value is a string.
   * 
   * @example
   * {\\"Title\\": \\"UploadTest\\", \\"Description\\": \\"UploadImageTest\\", \\"Tags\\": \\"tag1,tag2\\",\\"BusinessType\\":\\"cover\\"}
   */
  mediaMetaData?: string;
  /**
   * @remarks
   * Specifies the post-upload processing action when Type = video or audio.
   * 
   * ProcessType: set to Workflow.
   * 
   * > 
   * > - This parameter triggers an [asynchronous task](https://help.aliyun.com/document_detail/3027141.html). After submission, the task is not immediately completed and enters a background queue for asynchronous execution.
   * 
   * @example
   * {\\"ProcessType\\":\\"Workflow\\",\\"ProcessID\\":\\"74ba870f1a4873a3ba238e0bf6fa9***\\"}
   */
  postProcessConfig?: string;
  /**
   * @remarks
   * The destination storage address.
   * 
   * - StorageType: only oss is supported.
   * - StorageLocation: only VOD storage is supported. User-owned OSS storage is not supported.
   * 
   * @example
   * {\\"StorageType\\":\\"oss\\",\\"StorageLocation\\":\\"outin-***.oss-cn-shanghai.aliyuncs.com\\"}
   */
  uploadTargetConfig?: string;
  /**
   * @remarks
   * The custom settings. The value is a JSON string that supports settings such as message callbacks.
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

