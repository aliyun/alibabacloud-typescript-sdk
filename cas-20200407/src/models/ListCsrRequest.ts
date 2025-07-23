// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCsrRequest extends $dara.Model {
  /**
   * @remarks
   * The algorithm. Valid values: RSA, ECC, and SM2.
   * 
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The keyword.
   * 
   * @example
   * test_name
   */
  keyWord?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 50.
   * 
   * @example
   * 10
   */
  showSize?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      currentPage: 'CurrentPage',
      keyWord: 'KeyWord',
      showSize: 'ShowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      currentPage: 'number',
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

