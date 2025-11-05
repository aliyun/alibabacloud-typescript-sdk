// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryReversedDeductionHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-12-31
   */
  endDate?: string;
  /**
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-07-31
   */
  startDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      language: 'Language',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      language: 'string',
      pageNo: 'number',
      pageSize: 'number',
      startDate: 'string',
      uid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

