// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePcaAndExternalCACertificateListRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  identifiers?: string;
  keyWord?: string;
  /**
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

