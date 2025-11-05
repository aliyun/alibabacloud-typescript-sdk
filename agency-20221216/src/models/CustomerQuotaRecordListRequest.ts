// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CustomerQuotaRecordListRequest extends $dara.Model {
  /**
   * @remarks
   * End Date Format: yyyy-MM-dd
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-09-24
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
   * Pagination, current page number, starting from 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Pagination, record number on each page. Maximum 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Start Date Format: yyyy-MM-dd
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

