// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportCustomerQuotaRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The end date. Format: yyyy-MM-dd.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-12-24
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
   * The language parameter. Default value: en. Valid values:
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
   * - all: All operations.
   * - quota_create: Creation.
   * - quota_amount_adjust: Quota amount adjustment.
   * 
   * This parameter is required.
   * 
   * @example
   * all
   */
  operationType?: string;
  /**
   * @remarks
   * The start date. Format: yyyy-MM-dd.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-11-10
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      endUserPk: 'EndUserPk',
      language: 'Language',
      operationType: 'OperationType',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      endUserPk: 'number',
      language: 'string',
      operationType: 'string',
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

