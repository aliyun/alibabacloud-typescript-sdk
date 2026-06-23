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
   * * **Mini.2**: 2 Mbps
   * 
   * * **Mini.5**: 5 Mbps
   * 
   * * **Small.1**: 10 Mbps
   * 
   * * **Small.2**: 20 Mbps
   * 
   * * **Small.5**: 50 Mbps
   * 
   * * **Middle.1**: 100 Mbps
   * 
   * * **Middle.2**: 200 Mbps
   * 
   * * **Middle.5**: 500 Mbps
   * 
   * * **Large.1**: 1000 Mbps
   * 
   * * **Large.2**: 2000 Mbps
   * 
   * * **Large.5**: 5000 Mbps
   * 
   * * **Xlarge.1**: 10000 Mbps.
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

