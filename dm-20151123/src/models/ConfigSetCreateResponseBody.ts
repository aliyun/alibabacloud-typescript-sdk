// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigSetCreateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration set ID.
   * 
   * @example
   * XXX
   */
  id?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * XXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

