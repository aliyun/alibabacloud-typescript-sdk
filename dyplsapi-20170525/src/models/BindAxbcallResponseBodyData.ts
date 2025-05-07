// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class BindAXBCallResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 绑定关系ID
   * 
   * @example
   * 476567566
   */
  bindId?: string;
  static names(): { [key: string]: string } {
    return {
      bindId: 'BindId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

