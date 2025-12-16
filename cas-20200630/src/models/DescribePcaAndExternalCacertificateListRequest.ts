// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePcaAndExternalCACertificateListRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 50
   */
  showSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      showSize: 'ShowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
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

