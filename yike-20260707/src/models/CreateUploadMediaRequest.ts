// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUploadMediaRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the upload credential. Valid values:
   * - `STS_TOKEN`: the default value, used for direct upload by using the OSS SDK.
   * - `POST_POLICY`: used for form-based upload.
   * - `PRESIGNED_URL`: used for pre-signed PUT upload.
   * - `UPLOAD_TICKET`: the ticket mode, where a real credential is issued only when the ticket is exchanged.
   * 
   * @example
   * STS_TOKEN
   */
  credentialType?: string;
  /**
   * @remarks
   * The entity ID. The default value is AiSaasMediaAsset. You can ignore this parameter for general calls.
   * 
   * @example
   * AiSaasMediaAsset
   */
  entityId?: string;
  /**
   * @remarks
   * The file information in JSON string format. This parameter is required when you create a media asset. The **Type** field is required and can be set to video, audio, or image. The **Name** (file name), **Ext** (file name extension without the dot), and **Size** (size in bytes) fields are optional. This parameter can be omitted when you overwrite an existing media asset (Overwrite=true). If omitted, the original media asset type and source file name extension are used.
   * 
   * @example
   * {"Type":"video","Name":"demo.mp4","Ext":"mp4","Size":10485760}
   */
  fileInfo?: string;
  /**
   * @remarks
   * The ID of the existing media asset. This parameter is required when Overwrite is set to true to overwrite the media asset. If CredentialType is set to UPLOAD_TICKET, this parameter indicates a ticket exchange. Do not specify this parameter in other credential modes.
   * 
   * @example
   * b7e94fc0e*****6e7c5486601
   */
  mediaId?: string;
  /**
   * @remarks
   * The media asset metadata in JSON string format. This parameter is required when you create a media asset. It can contain the following fields: **Title** (title, defaults to FileInfo.Name if not specified), **Description**, **CateId** (category ID), **Tags** (comma-separated), **BusinessType** (falls back to general for invalid values), **CoverURL**, **DynamicMetaData** (JSON string, such as ProductionId), **ReferenceId** (external reference ID), and **RegisterConfig** (object containing SearchLibName to specify the search library). This parameter can be omitted when you overwrite an existing media asset.
   * 
   * @example
   * {"Title":"demo","Description":"test","Tags":"test,demo","BusinessType":"general","DynamicMetaData":"{\\"ProductionId\\":\\"pd_123456\\"}"}
   */
  mediaMetaData?: string;
  /**
   * @remarks
   * Specifies whether to overwrite the existing media asset. Default value: false. If this parameter is set to true, you must specify MediaId. The original media asset is reset (old files, snapshots, and analysis artifacts are cleared, and the status is set to uploading), and a new credential is issued as if it were the first upload.
   * 
   * @example
   * true
   */
  overwrite?: boolean;
  /**
   * @remarks
   * The project ID. This parameter is written to dynamicMetaData.ProductionId with the highest priority, overwriting the value with the same name in DynamicMetaData, and is automatically paired with the default folder `fd__default`. This parameter is supported only by the default entity. If you specify this parameter for a non-default entity, an `InvalidParameter` error is returned. If you do not specify this parameter, the `ProductionId` is obtained from the existing fallback chain.
   * 
   * @example
   * pd_123456
   */
  projectId?: string;
  /**
   * @remarks
   * The specified storage location in the `bucket.endpoint` format. If you do not specify this parameter, a bucket is selected based on the default bucket selection policy.
   * 
   * @example
   * yike-shared-ap-southeast-1-1.oss-ap-southeast-1.aliyuncs.com
   */
  storageLocation?: string;
  /**
   * @remarks
   * The custom user data in JSON string format.
   * 
   * @example
   * {"bizId":"order-123"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      credentialType: 'CredentialType',
      entityId: 'EntityId',
      fileInfo: 'FileInfo',
      mediaId: 'MediaId',
      mediaMetaData: 'MediaMetaData',
      overwrite: 'Overwrite',
      projectId: 'ProjectId',
      storageLocation: 'StorageLocation',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialType: 'string',
      entityId: 'string',
      fileInfo: 'string',
      mediaId: 'string',
      mediaMetaData: 'string',
      overwrite: 'boolean',
      projectId: 'string',
      storageLocation: 'string',
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

