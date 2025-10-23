// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigSetCreateResponseBody extends $dara.Model {
  /**
   * @example
   * XXX
   */
  id?: string;
  /**
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

