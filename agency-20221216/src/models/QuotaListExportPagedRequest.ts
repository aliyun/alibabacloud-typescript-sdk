// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuotaListExportPagedRequest extends $dara.Model {
  /**
   * @remarks
   * Pagination, current page number, starting from 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
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
   * Pagination, record number on each page, maximum 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      language: 'Language',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      language: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

