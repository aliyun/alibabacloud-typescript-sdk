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
   * The entity ID. You can call the CreateEntity operation to create an entity and specify a dynamic metadata structure.
   * 
   * @example
   * d67281da3c8743b8823ad12976187***
   */
  entityId?: string;
  /**
   * @remarks
   * The metadata of the media file that you want to upload. The value must be a JSON string.
   * 
   * *   This parameter takes effect only if its value matches a URL that is specified in UploadURLs.
   * *   You must convert the JSON-formatted data, such as [UploadMetadata, UploadMetadata,…], into a JSON string.
   * *   For more information, see the "UploadMetadata" section of this topic.
   * 
   * @example
   * [{"SourceURL":"https://example.aliyundoc.com/video01.mp4","Title":"urlUploadTest"}]
   */
  mediaMetaData?: string;
  /**
   * @remarks
   * The postprocessing configurations. You can specify this parameter if Type is set to video or audio.
   * 
   * Set ProcessType to Workflow.
   * 
   * @example
   * {"ProcessType": "Workflow","ProcessID":"b72a06c6beeb4dcdb898feef067b1***"}
   */
  postProcessConfig?: string;
  /**
   * @remarks
   * The destination storage address.
   * 
   * Set StorageType to oss.
   * 
   * Set StorageLocation to an address in ApsaraVideo VOD. You cannot set this field to an OSS URL.
   * 
   * @example
   * {"StorageType":"oss","StorageLocation":"outin-***.oss-cn-shanghai.aliyuncs.com"}
   */
  uploadTargetConfig?: string;
  /**
   * @remarks
   * The URL of the source file.
   * 
   * *   The URL must contain a file name extension, such as mp4 in `https://****.mp4`.
   * 
   *     *   If the URL does not contain a file name extension, you can specify one by setting `FileExtension` in `UploadMetadata`.
   *     *   If the URL contains a file name extension and `FileExtension` is also specified, the value of `FileExtension` prevails.
   * 
   * *   URL encoding is required. Separate multiple URLs with commas (,). You can specify a maximum of 20 URLs.
   * 
   * *   Special characters may cause upload failures. Therefore, you must encode URLs before you separate them with commas (,).
   * 
   * @example
   * https://diffurl.mp4
   */
  uploadURLs?: string;
  /**
   * @remarks
   * The user data. The value must be a JSON string. You can configure settings such as message callbacks.
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

