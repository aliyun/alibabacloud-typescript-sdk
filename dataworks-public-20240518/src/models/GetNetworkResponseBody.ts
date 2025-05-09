// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetNetworkResponseBodyNetwork } from "./GetNetworkResponseBodyNetwork";


export class GetNetworkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the network resource.
   */
  network?: GetNetworkResponseBodyNetwork;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      network: 'Network',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      network: GetNetworkResponseBodyNetwork,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

