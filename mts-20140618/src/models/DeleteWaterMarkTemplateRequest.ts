// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWaterMarkTemplateRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the watermark template that you want to delete. To obtain the template ID, you can log on to the **ApsaraVideo Media Processing (MPS) console** and choose **Global Settings** > **Watermark Templates** in the left-side navigation pane.
   * 
   * This parameter is required.
   * 
   * @example
   * 3780bd69b2b74540bc7b1096f564****
   */
  waterMarkTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      waterMarkTemplateId: 'WaterMarkTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      waterMarkTemplateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

