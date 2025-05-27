// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloseDeliveryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the threat analysis feature was disabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F375A043-4F5B-55F2-A564-CC47FFC6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

