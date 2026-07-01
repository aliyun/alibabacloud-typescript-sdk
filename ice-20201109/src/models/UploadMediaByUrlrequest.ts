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
   * The entity ID. You can call the CreateEntity API to create an entity and define a custom dynamic metadata schema.
   * 
   * @example
   * d67281da3c8743b8823ad12976187***
   */
  entityId?: string;
  /**
   * @remarks
   * The metadata of the media file, provided as a JSON string.
   * 
   * - This metadata takes effect only when it matches a URL in `UploadURLs`.
   * 
   * - The value must be a JSON array in the `[UploadMetadata, UploadMetadata, ...]` format, passed as a JSON string.
   * 
   * - For more information, see the UploadMetadata table below.
   * 
   * @example
   * [{"SourceURL":"https://example.aliyundoc.com/video01.mp4","Title":"urlUploadTest"}]
   */
  mediaMetaData?: string;
  /**
   * @remarks
   * Specifies post-upload processing actions for media files of type `video` or `audio`.
   * 
   * The only supported value for `ProcessType` is `Workflow`.
   * 
   * @example
   * {"ProcessType": "Workflow","ProcessID":"b72a06c6beeb4dcdb898feef067b1***"}
   */
  postProcessConfig?: string;
  /**
   * @remarks
   * The destination storage location.
   * 
   * - The only valid value for `StorageType` is `oss`.
   * 
   * - `StorageLocation` supports VOD storage only and does not support your own OSS buckets.
   * 
   * @example
   * {"StorageType":"oss","StorageLocation":"outin-***.oss-cn-shanghai.aliyuncs.com"}
   */
  uploadTargetConfig?: string;
  /**
   * @remarks
   * The source URL of the media file.
   * 
   * - The URL must include a file extension. For example, in `https://****.mp4`, mp4 is the file extension.
   * 
   *   - If the URL does not include a file extension, you can specify it by using the `FileExtension` parameter in `MediaMetaData`.
   * 
   *   - If a file extension is present in both the URL and the `FileExtension` parameter, the value of `FileExtension` takes precedence.
   * 
   * - The URLs must be URL-encoded. Separate multiple URLs with commas (,). You can specify up to 20 URLs.
   * 
   * - To prevent upload failures due to special characters, URL-encode each URL before concatenating them with commas.
   * 
   * @example
   * https://diffurl.mp4
   */
  uploadURLs?: string;
  /**
   * @remarks
   * Custom settings, provided as a JSON string. This parameter supports configurations such as message callbacks.
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

