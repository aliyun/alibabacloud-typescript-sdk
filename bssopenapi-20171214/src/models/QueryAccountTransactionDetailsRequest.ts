// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAccountTransactionDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the creation time range to query.
   * 
   * @example
   * 2022-12-20
   */
  createTimeEnd?: string;
  /**
   * @remarks
   * The beginning of the creation time range to query.
   * 
   * @example
   * 2022-01-20
   */
  createTimeStart?: string;
  /**
   * @remarks
   * This parameter is invalid.
   * 
   * @example
   * 0
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used for paging.
   * 
   * @example
   * ABEDSDS124DASA
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the order or bill.
   * 
   * @example
   * 2022120336190912
   */
  recordID?: string;
  /**
   * @remarks
   * The transaction channel.
   * 
   * @example
   * ALIPAY
   */
  transactionChannel?: string;
  /**
   * @remarks
   * The serial number of the transaction channel.
   * 
   * @example
   * 2022112122001470591458665933
   */
  transactionChannelSN?: string;
  /**
   * @remarks
   * The number of the transaction.
   * 
   * @example
   * 410874027490089
   */
  transactionNumber?: string;
  /**
   * @remarks
   * The type of the transaction.
   * 
   * @example
   * CHARGE
   */
  transactionType?: string;
  static names(): { [key: string]: string } {
    return {
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      recordID: 'RecordID',
      transactionChannel: 'TransactionChannel',
      transactionChannelSN: 'TransactionChannelSN',
      transactionNumber: 'TransactionNumber',
      transactionType: 'TransactionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeEnd: 'string',
      createTimeStart: 'string',
      maxResults: 'number',
      nextToken: 'string',
      recordID: 'string',
      transactionChannel: 'string',
      transactionChannelSN: 'string',
      transactionNumber: 'string',
      transactionType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

