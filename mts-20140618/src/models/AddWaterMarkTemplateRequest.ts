// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddWaterMarkTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the watermark template. The value is a JSON object. For more information, see the "WaterMarks" section of the [Parameter details](https://help.aliyun.com/document_detail/29253.html) topic.
   * 
   * > If you do not require a positive correlation between the size of text in the watermark and the resolution, you can enable adaptation for the watermark. To do so, add `[\\"adaptive\\"]=true` to the TextWaterMark parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * {"Width":"10","Height":"30","Dx":"10","Dy":"5","ReferPos":"TopRight","Type":"Image","Timeline":{"Start":"0","Duration":"10"}}
   */
  config?: string;
  /**
   * @remarks
   * The name of the watermark template. The value can contain letters and digits and can be up to 128 bytes in size.
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
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

