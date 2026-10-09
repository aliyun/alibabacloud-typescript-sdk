// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePcaAndExternalCACertificateListRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The certificate identifiers. Separate multiple identifiers with commas (,).
   * 
   * @example
   * aaa,bbb
   */
  identifiers?: string;
  /**
   * @remarks
   * The search keyword. Fuzzy search by name, domain name, or SANs is supported.
   * 
   * @example
   * test_name
   */
  keyWord?: string;
  /**
   * @remarks
   * The number of records to display per page. Default value: 50.
   * 
   * @example
   * 50
   */
  showSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      identifiers: 'Identifiers',
      keyWord: 'KeyWord',
      showSize: 'ShowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      identifiers: 'string',
      keyWord: 'string',
      showSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

