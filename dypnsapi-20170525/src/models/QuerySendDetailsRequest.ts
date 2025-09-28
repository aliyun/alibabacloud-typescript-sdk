// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySendDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the business, which is provided by Alibaba Cloud.
   * 
   * @example
   * 1231891289318923^12
   */
  bizId?: string;
  /**
   * @remarks
   * The number of the page on which you are reading the text message. Pages start from page 1. The value of this parameter cannot exceed the maximum page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  ownerId?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 186****9399
   */
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The date when the text message was sent. You can query text messages that were sent within the last 30 days.
   * 
   * Specify the date in the yyyyMMdd format. Example: 20181225.
   * 
   * This parameter is required.
   * 
   * @example
   * 20181225
   */
  sendDate?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      currentPage: 'CurrentPage',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sendDate: 'SendDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      currentPage: 'number',
      ownerId: 'number',
      pageSize: 'number',
      phoneNumber: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sendDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

