// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PdpConfigUpdateCmd extends $dara.Model {
  /**
   * @example
   * 1223435435
   */
  accountId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"key":"value"}
   */
  context?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      context: 'context',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      context: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

