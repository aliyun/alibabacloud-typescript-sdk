// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDNAJobRequestInput extends $dara.Model {
  /**
   * @remarks
   * The media ID or OSS file url of the input file.
   * 
   * 1\\. `oss://bucket/object`
   * 
   * 2\\. `http(s)://bucket.oss-[regionId].aliyuncs.com/object`
   * 
   * In these formats, `bucket` is the name of an OSS bucket in the same region as your project, and `object` is the file path.
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
   * 1. `OSS`: The input is an OSS file url.
   * 
   * 2. `Media`: The input is a media ID.
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
   * The DNA configuration in JSON format. If specified, these settings override the corresponding template parameters.
   * 
   * @example
   * {"SaveType": "save","MediaType":"video"}
   */
  config?: string;
  /**
   * @remarks
   * The DNA library ID. To create a DNA library, see [CreateDNADB](https://help.aliyun.com/document_detail/479275.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 2288c6ca184c0e47098a5b665e2a12****
   */
  DBId?: string;
  /**
   * @remarks
   * The input DNA file.
   * 
   * This parameter is required.
   */
  input?: SubmitDNAJobRequestInput;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The pipeline ID.
   * 
   * @example
   * 5246b8d12a62433ab77845074039****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The unique primary key for the video. You are responsible for ensuring its uniqueness.
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
   * The user-defined data. The maximum length is 128 bytes.
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

