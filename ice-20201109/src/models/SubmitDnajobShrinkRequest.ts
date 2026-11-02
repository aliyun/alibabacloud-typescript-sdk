// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDNAJobShrinkRequest extends $dara.Model {
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
  inputShrink?: string;
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
      inputShrink: 'Input',
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
      inputShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

