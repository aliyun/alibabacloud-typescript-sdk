// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProtocolServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the protocol service.
   * 
   * @example
   * ptc-123****
   */
  protocolServiceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      protocolServiceId: 'ProtocolServiceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocolServiceId: 'string',
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

