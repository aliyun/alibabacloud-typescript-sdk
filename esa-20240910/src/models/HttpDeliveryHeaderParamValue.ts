// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpDeliveryHeaderParamValue extends $dara.Model {
  /**
   * @remarks
   * The static variable.
   * 
   * @example
   * alicdn
   */
  staticValue?: string;
  static names(): { [key: string]: string } {
    return {
      staticValue: 'StaticValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      staticValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

