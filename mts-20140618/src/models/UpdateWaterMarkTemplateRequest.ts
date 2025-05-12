// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWaterMarkTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The updated configuration of the watermark template. The value is a JSON object. For more information, see [Parameter details](https://help.aliyun.com/document_detail/29253.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {"Width":"10","Height":"30","Dx":"10","Dy":"5","Type":"Image","Timeline":{"Start":"0","Duration":"10"}}
   */
  config?: string;
  /**
   * @remarks
   * The new name of the watermark template. The value can contain letters and digits and can be up to 128 bytes in size.
   * 
   * This parameter is required.
   * 
   * @example
   * example-watermark-****
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the watermark template that you want to update. To obtain the ID of the watermark template, you can log on to the **ApsaraVideo Media Processing (MPS) console** and choose **Global Settings** > **Watermark Templates** in the left-side navigation pane.
   * 
   * This parameter is required.
   * 
   * @example
   * 3780bd69b2b74540bc7b1096f564****
   */
  waterMarkTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      waterMarkTemplateId: 'WaterMarkTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      name: 'string',
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

