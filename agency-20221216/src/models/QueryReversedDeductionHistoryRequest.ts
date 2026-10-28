// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryReversedDeductionHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The end date. Format: yyyy-MM-dd.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-12-31
   */
  endDate?: string;
  /**
   * @remarks
   * The language. Valid values:
   * - en: English.
   * - zh: Chinese.
   * - ja: Japanese.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The page number. Pages start from 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The start date. Format: yyyy-MM-dd.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-07-31
   */
  startDate?: string;
  /**
   * @remarks
   * The customer UID.
   * 
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

