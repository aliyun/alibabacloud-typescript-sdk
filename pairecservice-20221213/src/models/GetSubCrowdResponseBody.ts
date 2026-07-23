// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSubCrowdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the sub-crowd was created.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The number of users in the sub-crowd.
   * 
   * @example
   * 3
   */
  quantity?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 01D22D08-BA20-5F35-8302-99115F288220
   */
  requestId?: string;
  /**
   * @remarks
   * The source of the sub-crowd. Valid values:
   * 
   * @example
   * ManualInput
   */
  source?: string;
  /**
   * @remarks
   * The users in the sub-crowd.
   * 
   * @example
   * user1,user2
   */
  users?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      quantity: 'Quantity',
      requestId: 'RequestId',
      source: 'Source',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      quantity: 'string',
      requestId: 'string',
      source: 'string',
      users: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

