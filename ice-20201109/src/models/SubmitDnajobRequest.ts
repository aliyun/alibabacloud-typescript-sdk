// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDNAJobRequestInput extends $dara.Model {
  /**
   * @remarks
   * The information about the input file. OSS URLs and media asset IDs are supported.
   * OSS URL formats:
   * 
   * - oss://bucket/object
   * 
   * - http(s)://bucket.oss-[regionId].aliyuncs.com/object
   * 
   * In the URLs, bucket is the name of the OSS bucket that resides in the same region as the current project, and object is the file path.
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
   * - OSS: the URL of an OSS file.
   * - Media: the ID of a media asset.
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
   * The DNA configuration, which is a JSON object.
   * If you specify this parameter, it overwrites the template parameters.
   * 
   * @example
   * {"SaveType": "save","MediaType":"video"}
   */
  config?: string;
  /**
   * @remarks
   * The ID of the DNA library. To create a DNA library, see [CreateDNADB - Create a DNA library](https://help.aliyun.com/document_detail/479275.html).
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
   * The ID of the pipeline.
   * 
   * @example
   * 5246b8d12a62433ab77845074039****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The unique primary key of the video. You must ensure its uniqueness.
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
   * The ID of the template.
   * 
   * @example
   * S00000101-100060
   */
  templateId?: string;
  /**
   * @remarks
   * The custom user data. The maximum length is 128 bytes.
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

