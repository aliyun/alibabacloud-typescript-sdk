// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAccountWebhookRequest extends $dara.Model {
  /**
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * This parameter is required.
   * 
   * @example
   * 293483938849493**
   */
  custSpaceId?: string;
  /**
   * @remarks
   * Specifies whether to use HTTP callbacks to receive message receipts. Valid values:
   * 
   * *   Y: indicates that HTTP callbacks are used to receive receipts.
   * *   N: indicates that HTTP callbacks are not used to receive receipts.
   * 
   * @example
   * Y
   */
  httpFlag?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to use Message Service (MNS) queues to receive receipts. Valid values:
   * 
   * *   Y: indicates that MNS queues are used to receive receipts.
   * *   N: indicates that MNS queues are not used to receive receipts.
   * 
   * @example
   * N
   */
  queueFlag?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The callback URL to which status reports are sent by using HTTP callbacks.
   * 
   * @example
   * http://www.aliyun.com
   */
  statusCallbackUrl?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      httpFlag: 'HttpFlag',
      ownerId: 'OwnerId',
      queueFlag: 'QueueFlag',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      statusCallbackUrl: 'StatusCallbackUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      httpFlag: 'string',
      ownerId: 'number',
      queueFlag: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      statusCallbackUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

