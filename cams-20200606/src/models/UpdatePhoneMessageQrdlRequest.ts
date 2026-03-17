// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePhoneMessageQrdlRequest extends $dara.Model {
  /**
   * @remarks
   * SpaceId/instance ID of ISV sub customer.
   * 
   * @example
   * 9383884
   */
  custSpaceId?: string;
  /**
   * @remarks
   * Produce QR code image format.
   * 
   * This parameter is required.
   * 
   * @example
   * PNG
   */
  generateQrImage?: string;
  ownerId?: number;
  /**
   * @remarks
   * Number, enter the country/region code+number.
   * 
   * This parameter is required.
   * 
   * @example
   * 861380000
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Message content.
   * 
   * This parameter is required.
   * 
   * @example
   * Hello
   */
  prefilledMessage?: string;
  /**
   * @remarks
   * QR code encoding.
   * 
   * This parameter is required.
   * 
   * @example
   * 29338838
   */
  qrdlCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      generateQrImage: 'GenerateQrImage',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      prefilledMessage: 'PrefilledMessage',
      qrdlCode: 'QrdlCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      generateQrImage: 'string',
      ownerId: 'number',
      phoneNumber: 'string',
      prefilledMessage: 'string',
      qrdlCode: 'string',
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

