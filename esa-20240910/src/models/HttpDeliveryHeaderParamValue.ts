// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpDeliveryHeaderParamValue extends $dara.Model {
  /**
   * @remarks
   * The value of the custom HTTP delivery request header.
   * 
   * > Key-map. The value can be a static value, dynamic function, or dynamic value.
   * 
   * @example
   * x-auth: sk-***
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

