// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryWaterMarkTemplateListRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IDs of the watermark templates that you want to query. To obtain the IDs of the watermark templates, you can log on to the **ApsaraVideo Media Processing (MPS) console** and choose **Global Settings** > **Watermark Templates** in the left-side navigation pane. You can query up to 10 watermark templates at a time. Separate multiple IDs of watermark templates with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 3780bd69b2b74540bc7b1096f564****
   */
  waterMarkTemplateIds?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      waterMarkTemplateIds: 'WaterMarkTemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      waterMarkTemplateIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

