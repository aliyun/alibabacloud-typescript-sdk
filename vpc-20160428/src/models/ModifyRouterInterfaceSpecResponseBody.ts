// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRouterInterfaceSpecResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4EC47282-1B74-4534-BD0E-403F3EE64CAF
   */
  requestId?: string;
  /**
   * @remarks
   * The specification of the router interface. Valid values:
   * 
   * *   **Mini.2**: 2 Mbit/s
   * *   **Mini.5**: 5 Mbit/s
   * *   **Small.1**: 10 Mbit/s
   * *   **Small.2**: 20 Mbit/s
   * *   **Small.5**: 50 Mbit/s
   * *   **Middle.1**: 100 Mbit/s
   * *   **Middle.2**: 200 Mbit/s
   * *   **Middle.5**: 500 Mbit/s
   * *   **Large.1**: 1,000 Mbit/s
   * *   **Large.2**: 2,000 Mbit/s
   * *   **Large.5**: 5,000 Mbit/s
   * *   **Xlarge.1**: 10,000 Mbit/s
   * 
   * @example
   * Small.1
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

