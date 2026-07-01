// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDNAJobShrinkRequest extends $dara.Model {
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
  inputShrink?: string;
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

