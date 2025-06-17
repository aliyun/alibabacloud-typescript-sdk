// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeAuctionRequestAuctionListBidRecords extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  createTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  price?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      price: 'Price',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      price: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

