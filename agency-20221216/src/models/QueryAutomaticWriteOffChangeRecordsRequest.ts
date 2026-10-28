// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAutomaticWriteOffChangeRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The customer UID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  customerUid?: number;
  /**
   * @remarks
   * The end date.
   * Format: yyyy-MM-dd.
   * 
   * @example
   * 2026-05-20
   */
  endDate?: string;
  /**
   * @remarks
   * The language. If you do not specify this parameter, English is used by default. Valid values:
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start date.
   * Format: yyyy-MM-dd.
   * 
   * @example
   * 2026-06-20
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      customerUid: 'CustomerUid',
      endDate: 'EndDate',
      language: 'Language',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerUid: 'number',
      endDate: 'string',
      language: 'string',
      pageNo: 'number',
      pageSize: 'number',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

