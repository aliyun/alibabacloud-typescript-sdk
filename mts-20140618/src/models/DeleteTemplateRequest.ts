// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTemplateRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the custom transcoding template that you want to delete. To obtain the ID of the custom transcoding template, you can log on to the **ApsaraVideo Media Processing (MPS) console** and choose **Global Settings** > **Encoding Templates** in the left-side navigation pane.
   * 
   * This parameter is required.
   * 
   * @example
   * 16f01ad6175e4230ac42bb5182cd****
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

