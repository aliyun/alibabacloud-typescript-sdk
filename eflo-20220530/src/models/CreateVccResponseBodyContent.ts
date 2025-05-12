// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVccResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The ID of the Lingjun connection instance.
   * 
   * @example
   * vcc-cn-zvp2w222001
   */
  vccId?: string;
  static names(): { [key: string]: string } {
    return {
      vccId: 'VccId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vccId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

