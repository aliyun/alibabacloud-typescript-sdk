// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportCustomerQuotaRecordRequest extends $dara.Model {
  /**
   * @remarks
   * End Date Format:  yyyy-MM-dd
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-12-24
   */
  endDate?: string;
  /**
   * @remarks
   * Customer UID
   * 
   * This parameter is required.
   * 
   * @example
   * 5113766248601929
   */
  endUserPk?: number;
  /**
   * @remarks
   * Multilingual Parameters, the default language is English.</br>
   * en: English</br>
   * zh: Chinese</br>
   * ja: Japanese </br>
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * Operation Type Enum</br>
   * all All types</br>
   * quota_create Create quota</br>
   * quota_amount_adjust Adjust the amount of quota</br>
   * 
   * This parameter is required.
   * 
   * @example
   * all
   */
  operationType?: string;
  /**
   * @remarks
   * Start Date Format:  yyyy-MM-dd
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

