// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUAIDApplyTokenSignResponseBodyData extends $dara.Model {
  /**
   * @example
   * CM
   */
  carrier?: string;
  /**
   * @example
   * b8b5b3a*******0b9893484fdf412c99
   */
  outId?: string;
  /**
   * @example
   * D2E204D74EEB373E468632********23F592C4C9
   */
  sign?: string;
  static names(): { [key: string]: string } {
    return {
      carrier: 'Carrier',
      outId: 'OutId',
      sign: 'Sign',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carrier: 'string',
      outId: 'string',
      sign: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

