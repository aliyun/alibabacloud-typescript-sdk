// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CustomerQuotaRecordListRequest extends $dara.Model {
  /**
   * @remarks
   * The end date.
   * Format: yyyy-MM-dd.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-09-24
   */
  endDate?: string;
  /**
   * @remarks
   * The UID of the customer.
   * 
   * This parameter is required.
   * 
   * @example
   * 5113766248601929
   */
  endUserPk?: number;
  /**
   * @remarks
   * The language. Default value: en. Valid values:
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
   * The operation type. Valid values:
   * - all: All.
   * - quota_create: Create.
   * - quota_amount_adjust: Quota adjustment.
   * 
   * This parameter is required.
   * 
   * @example
   * all
   */
  operationType?: string;
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
   * This parameter is required.
   * 
   * @example
   * 2023-01-02
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      endUserPk: 'EndUserPk',
      language: 'Language',
      operationType: 'OperationType',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      endUserPk: 'number',
      language: 'string',
      operationType: 'string',
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

