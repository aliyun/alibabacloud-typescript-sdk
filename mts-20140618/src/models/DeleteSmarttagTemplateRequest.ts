// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSmarttagTemplateRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the template that you want to delete. You can obtain the template ID from the response of the [AddSmarttagTemplate](https://help.aliyun.com/document_detail/187759.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 05de22f255284c7a8d2aab535dde****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

