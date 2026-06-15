// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigSetUpdateResponseBody extends $dara.Model {
  /**
   * @remarks
   * Configuration set ID.
   * 
   * @example
   * xxx
   */
  id?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * xxx
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

