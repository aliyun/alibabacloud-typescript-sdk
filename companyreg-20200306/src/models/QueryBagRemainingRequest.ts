// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryBagRemainingRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * esp.hightech
   */
  bizType?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

