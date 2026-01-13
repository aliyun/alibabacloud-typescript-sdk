// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMeteringDailyDetailRequest extends $dara.Model {
  /**
   * @example
   * 202506
   */
  billPeriod?: string;
  billingItem?: string;
  /**
   * @example
   * 20240908
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 20240908
   */
  startTime?: string;
  /**
   * @example
   * 23432423423434
   */
  subAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      billPeriod: 'billPeriod',
      billingItem: 'billingItem',
      endTime: 'endTime',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      startTime: 'startTime',
      subAccountId: 'subAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billPeriod: 'string',
      billingItem: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
      subAccountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

