// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCallInTransferRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The calling number of the inbound call.
   * 
   * @example
   * 150****0000
   */
  callInCaller?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 10.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The phone number to which a call is transferred.
   * 
   * This parameter is required.
   * 
   * @example
   * 400****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The time at which call transfer records are queried, in the YYYY-MM-DD hh:mm:ss format.
   * 
   * > The query result is all the call transfer records of the specified day.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-06-28 00:00:00
   */
  queryDate?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callInCaller: 'CallInCaller',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      phoneNumber: 'PhoneNumber',
      queryDate: 'QueryDate',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callInCaller: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      phoneNumber: 'string',
      queryDate: 'string',
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

