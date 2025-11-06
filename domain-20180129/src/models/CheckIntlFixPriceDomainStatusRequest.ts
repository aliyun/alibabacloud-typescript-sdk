// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckIntlFixPriceDomainStatusRequest extends $dara.Model {
  /**
   * @example
   * appp16.com
   */
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

