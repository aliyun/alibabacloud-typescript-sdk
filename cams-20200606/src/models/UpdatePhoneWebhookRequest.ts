// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePhoneWebhookRequest extends $dara.Model {
  /**
   * @remarks
   * SpaceId for ISV sub clients.
   * 
   * This parameter is required.
   * 
   * @example
   * 293483938849493****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * Whether to use HTTP to receive receipts. Value:
   * *   Y: Yes.
   * *   N: No.
   * 
   * @example
   * Y
   */
  httpFlag?: string;
  ownerId?: number;
  /**
   * @remarks
   * phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 8613800001234
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Whether to use queue method to receive receipts. Value:
   * *   Y: Yes.
   * *   N: No.
   * 
   * @example
   * N
   */
  queueFlag?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * HTTP status report interface callback address.
   * 
   * @example
   * http://www.aliyun.com
   */
  statusCallbackUrl?: string;
  /**
   * @remarks
   * HTTP upstream message interface callback address.
   * 
   * @example
   * http://aliyun.com
   */
  upCallbackUrl?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      httpFlag: 'HttpFlag',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      queueFlag: 'QueueFlag',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      statusCallbackUrl: 'StatusCallbackUrl',
      upCallbackUrl: 'UpCallbackUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      httpFlag: 'string',
      ownerId: 'number',
      phoneNumber: 'string',
      queueFlag: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      statusCallbackUrl: 'string',
      upCallbackUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

