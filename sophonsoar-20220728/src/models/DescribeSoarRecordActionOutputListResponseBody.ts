// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSoarRecordActionOutputListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data that is returned when the component action is performed. The value is a JSON array.
   * 
   * >  The format of the output data is determined by the component that is configured when the playbook is written.
   * 
   * @example
   * [
   *     {
   *         "a": "a",
   *         "taskname": "92af3c79-1754-4646-9366-9ddbd1e45536_xxxx",
   *         "log_time": 1699868849000
   *     }
   * ]
   */
  actionOutputs?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6A2BF9CF-3E32-5E45-A79B-8F67E0A4FE90
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      actionOutputs: 'ActionOutputs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionOutputs: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

