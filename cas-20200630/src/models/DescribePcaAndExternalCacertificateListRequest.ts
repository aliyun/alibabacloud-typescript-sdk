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
   * One or more certificate identifiers, separated by commas.
   * 
   * @example
   * aaa,bbb
   */
  identifiers?: string;
  /**
   * @remarks
   * The keyword for a fuzzy search on the name, domain name, and SAN fields.
   * 
   * @example
   * test_name
   */
  keyWord?: string;
  /**
   * @remarks
   * The number of entries to return per page. The default value is 50.
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

