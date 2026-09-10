// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableMaintainWindowResponseBody extends $dara.Model {
  /**
   * @example
   * 123-12-312-31-23123
   */
  maintainWindowId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 123123-3213-345-9941-345345345
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maintainWindowId: 'maintainWindowId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maintainWindowId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

