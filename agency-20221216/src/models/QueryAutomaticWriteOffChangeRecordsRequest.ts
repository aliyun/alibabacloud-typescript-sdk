// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAutomaticWriteOffChangeRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  customerUid?: number;
  /**
   * @example
   * 2026-05-20
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
   * 10
   */
  pageSize?: number;
  /**
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

