// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIntlFixPriceDomainListUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The date when the list is exported.
   * 
   * @example
   * 20240809
   */
  listDate?: string;
  static names(): { [key: string]: string } {
    return {
      listDate: 'ListDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

