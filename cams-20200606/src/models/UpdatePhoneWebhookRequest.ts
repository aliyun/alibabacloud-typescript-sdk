// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePhoneWebhookRequest extends $dara.Model {
  /**
   * @remarks
   * The SpaceId of the ISV sub-customer.
   * 
   * This parameter is required.
   * 
   * @example
   * 293483938849493****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * Specifies whether to use HTTP to receive receipts. Valid values:
   * 
   * - Y: Yes.
   * 
   * - N: No.
   * 
   * @example
   * Y
   */
  httpFlag?: string;
  ownerId?: number;
  /**
   * @remarks
   * The phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 861380000****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Specifies whether to use a queue to receive receipts. Valid values:
   * 
   * - Y: Yes.
   * 
   * - N: No.
   * 
   * @example
   * N
   */
  queueFlag?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The callback URL for the HTTP-based status report.
   * 
   * @example
   * http://www.aliyun.com
   */
  statusCallbackUrl?: string;
  /**
   * @remarks
   * The callback URL for the HTTP-based upstream message.
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

