// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTenantBindNumberRequest extends $dara.Model {
  /**
   * @example
   * 95187
   */
  number?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

