// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadMediaByURLRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app-1000000
   */
  appId?: string;
  /**
   * @remarks
   * The entity ID. You can call the CreateEntity operation to create an entity and define a custom dynamic metadata structure.
   * 
   * @example
   * d67281da3c8743b8823ad12976187***
   */
  entityId?: string;
  /**
   * @remarks
   * The metadata of the media file to be uploaded. The value is a JSON string.
   * - The metadata takes effect only when it matches a URL in UploadURLs.
   * - JSON format: [UploadMetadata, UploadMetadata, ...]. The value must be converted to a JSON string.
   * - For more information, see the UploadMetadata table below.
   * 
   * @example
   * [{"SourceURL":"https://example.aliyundoc.com/video01.mp4","Title":"urlUploadTest"}]
   */
  mediaMetaData?: string;
  /**
   * @remarks
   * The post-upload processing action when Type is set to video or audio.
   * 
   * Valid values of ProcessType: Workflow.
   * 
   * @example
   * {"ProcessType": "Workflow","ProcessID":"b72a06c6beeb4dcdb898feef067b1***"}
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
   * {"StorageType":"oss","StorageLocation":"outin-***.oss-cn-shanghai.aliyuncs.com"}
   */
  uploadTargetConfig?: string;
  /**
   * @remarks
   * The URL of the media source file.
   * - The URL must include a file name extension. For example, mp4 is the file name extension in `https://****.mp4`.
   *     - If the URL does not include a file name extension, you can specify the FileExtension parameter in `UploadMetadatas`.
   *     - If the URL includes a file name extension and the FileExtension parameter is also specified, the value of FileExtension takes precedence.
   * - URL-encode the URLs. Separate multiple URLs with commas (,). A maximum of 20 URLs are supported.
   * - To prevent upload failures caused by special characters, URL-encode each URL before concatenating them with commas.
   * 
   * @example
   * https://diffurl.mp4
   */
  uploadURLs?: string;
  /**
   * @remarks
   * The custom settings. The value is a JSON string that supports settings such as message callbacks.
   * 
   * @example
   * {"MessageCallback":{"CallbackURL":"http://example.aliyundoc.com"},"Extend":{"localId":"xxx","test":"www"}}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      entityId: 'EntityId',
      mediaMetaData: 'MediaMetaData',
      postProcessConfig: 'PostProcessConfig',
      uploadTargetConfig: 'UploadTargetConfig',
      uploadURLs: 'UploadURLs',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      entityId: 'string',
      mediaMetaData: 'string',
      postProcessConfig: 'string',
      uploadTargetConfig: 'string',
      uploadURLs: 'string',
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

