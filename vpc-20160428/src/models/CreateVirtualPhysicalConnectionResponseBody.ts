// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVirtualPhysicalConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CD14EA74-E9C3-59A9-942A-DFEC7E12818D
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the hosted connection.
   * 
   * @example
   * pc-bp1mrgfbtmc9brre7****
   */
  virtualPhysicalConnection?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      virtualPhysicalConnection: 'VirtualPhysicalConnection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      virtualPhysicalConnection: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

