// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkPathResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the network path.
   * 
   * @example
   * np-4cbf598673d14d27****
   */
  networkPathId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 92DD9FFB-06FB-56F7-83EF-5CEF98F5562A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkPathId: 'NetworkPathId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPathId: 'string',
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

