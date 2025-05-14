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
   * The entity ID. You can call the CreateEntity operation to create an entity and specify a dynamic metadata structure.
   * 
   * @example
   * 9e177cac2fb44f8b8c67b199fcc7bffd
   */
  entityId?: string;
  /**
   * @remarks
   * The file information, which is in the JSON format and contains the following fields:
   * 
   * *   Type: required. The file type. Valid values: video, image, audio, text, and other.
   * *   Name: required. The file name without the extension.
   * *   Size: optional. The file size.
   * *   Ext: required. The file name extension.
   * 
   * @example
   * {\\"Type\\":\\"video\\",\\"Name\\":\\"test.mp4\\",\\"Size\\":108078336,\\"Ext\\":\\"mp4\\"}
   */
  fileInfo?: string;
  /**
   * @remarks
   * The metadata of the media asset, which is a JSON string that contains the following fields:
   * 
   * Title: required.
   * 
   * *   The value can be up to 128 characters in length.
   * *   The value must be encoded in UTF-8.
   * 
   * Description: optional.
   * 
   * *   The value can be up to 1,024 characters in length.
   * *   The value must be encoded in UTF-8.
   * 
   * CateId: optional.
   * 
   * Tags: optional.
   * 
   * BusinessType: required. Valid values:
   * 
   * *   opening or ending if Type is set to video
   * *   default or cover if Type is set to image
   * *   subtitles or font if Type is set to text
   * *   watermark if Type is set to material
   * *   general CoverURL: optional.
   * 
   * DynamicMetaData: The value is a string.
   * 
   * @example
   * {\\"Title\\": \\"UploadTest\\", \\"Description\\": \\"UploadImageTest\\", \\"Tags\\": \\"tag1,tag2\\",\\"BusinessType\\":\\"cover\\"}
   */
  mediaMetaData?: string;
  /**
   * @remarks
   * The postprocessing configurations. You can specify this parameter if Type is set to video or audio.
   * 
   * Set ProcessType to Workflow.
   * 
   * @example
   * {\\"ProcessType\\":\\"Workflow\\",\\"ProcessID\\":\\"74ba870f1a4873a3ba238e0bf6fa9***\\"}
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
   * {\\"StorageType\\":\\"oss\\",\\"StorageLocation\\":\\"outin-***.oss-cn-shanghai.aliyuncs.com\\"}
   */
  uploadTargetConfig?: string;
  /**
   * @remarks
   * The user data. The value must be a JSON string. You can configure settings such as message callbacks.
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

