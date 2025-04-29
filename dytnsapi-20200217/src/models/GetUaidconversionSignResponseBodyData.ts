// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUAIDConversionSignResponseBodyData extends $dara.Model {
  /**
   * @example
   * 示例值示例值示例值
   */
  carrier?: string;
  /**
   * @example
   * 示例值示例值
   */
  outId?: string;
  /**
   * @example
   * 示例值
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

