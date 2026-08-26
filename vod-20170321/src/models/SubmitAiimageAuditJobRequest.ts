// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAIImageAuditJobRequest extends $dara.Model {
  censorProvider?: string;
  imageService?: string;
  /**
   * @remarks
   * The review node configuration.
   * - Other configuration items of the review node. Currently, only the ResourceType field is supported, which is used to specify the media file type. You can adjust the review standards and rules for the specified type.
   * - Usage notes for ResourceType: Only letters, digits, and underscores (_) are allowed.
   * 
   * >- You can customize the ResourceType field based on the usage notes. After customization, [submit a Yida form](https://yida.alibaba-inc.com/o/ticketapply) to commit to Alibaba Cloud for spooling before the configuration takes effect.
   * >- To adjust the review standards and rules for a specific ResourceType, [submit a Yida form](https://yida.alibaba-inc.com/o/ticketapply) to request technical support.
   * 
   * @example
   * {"ResourceType":"****_short_video"}
   */
  mediaAuditConfiguration?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * The unique identifier of the image returned after the image is uploaded to ApsaraVideo VOD.
   * 
   * This parameter is required.
   * 
   * @example
   * f1aa3024aee64*****6dc8ca20dbc320
   */
  mediaId?: string;
  ownerAccount?: string;
  ownerId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  serviceParameters?: string;
  /**
   * @remarks
   * The AI template ID. You can obtain the ID by using one of the following methods:
   * - Call the [Add AI template](https://help.aliyun.com/document_detail/102930.html) operation to add an AI template. The AI template ID is the value of TemplateId in the response.
   * - After the AI template is added, call the [Query AI template list](https://help.aliyun.com/document_detail/102936.html) operation to query the AI template ID, which is the value of TemplateId in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * a07a7f7d7d10eb9fd999e56ecc****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      censorProvider: 'CensorProvider',
      imageService: 'ImageService',
      mediaAuditConfiguration: 'MediaAuditConfiguration',
      mediaId: 'MediaId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serviceParameters: 'ServiceParameters',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      censorProvider: 'string',
      imageService: 'string',
      mediaAuditConfiguration: 'string',
      mediaId: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
      serviceParameters: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

