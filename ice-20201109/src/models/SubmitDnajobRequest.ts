// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDNAJobRequestInput extends $dara.Model {
  /**
   * @remarks
   * The input file. The file can be an OSS object or a media asset. You can specify the path of an OSS object in one of the following formats:
   * 
   * 1\\. oss://bucket/object
   * 
   * 2\\. http(s)://bucket.oss-[regionId].aliyuncs.com/object
   * 
   * In the preceding paths, bucket indicates an OSS bucket that resides in the same region as the current project, and object indicates the path of the object in the bucket.
   * 
   * This parameter is required.
   * 
   * @example
   * 1b1b9cd148034739af413150fded****
   */
  media?: string;
  /**
   * @remarks
   * The type of the input file. Valid values:
   * 
   * 1.  OSS: Object Storage Service (OSS) object.
   * 2.  Media: media asset.
   * 
   * This parameter is required.
   * 
   * @example
   * Media
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDNAJobRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of the media fingerprint analysis job. The value is a JSON object. If you specify this parameter, the template parameters are overwritten.
   * 
   * @example
   * {"SaveType": "save","MediaType"":"video"}
   */
  config?: string;
  /**
   * @remarks
   * The ID of the media fingerprint library. If you do not specify this parameter, the default media fingerprint library is used. For more information about how to create a media fingerprint library, see [CreateDNADB](https://help.aliyun.com/document_detail/479275.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 2288c6ca184c0e47098a5b665e2a12****
   */
  DBId?: string;
  /**
   * @remarks
   * The input file for media fingerprint analysis.
   * 
   * This parameter is required.
   */
  input?: SubmitDNAJobRequestInput;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the ApsaraVideo Media Processing (MPS) queue to which the media fingerprint analysis job is submitted.
   * 
   * @example
   * 5246b8d12a62433ab77845074039****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The primary key of the video. You must make sure that each primary key is unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 3ca84a39a9024f19853b21be9cf9****
   */
  primaryKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * S00000101-100060
   */
  templateId?: string;
  /**
   * @remarks
   * The user-defined data. The data can be up to 128 bytes in length.
   * 
   * @example
   * userData
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      DBId: 'DBId',
      input: 'Input',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pipelineId: 'PipelineId',
      primaryKey: 'PrimaryKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateId: 'TemplateId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      DBId: 'string',
      input: SubmitDNAJobRequestInput,
      ownerAccount: 'string',
      ownerId: 'number',
      pipelineId: 'string',
      primaryKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateId: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

