// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyAddRequestHotelShare extends $dara.Model {
  /**
   * @example
   * 70
   */
  param?: string;
  /**
   * @example
   * 1
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      param: 'param',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      param: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

