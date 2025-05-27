// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetConnectionResponseBodyDataConnectionsAuthParameters } from "./GetConnectionResponseBodyDataConnectionsAuthParameters";
import { GetConnectionResponseBodyDataConnectionsNetworkParameters } from "./GetConnectionResponseBodyDataConnectionsNetworkParameters";


export class GetConnectionResponseBodyDataConnections extends $dara.Model {
  /**
   * @remarks
   * The authentication methods.
   */
  authParameters?: GetConnectionResponseBodyDataConnectionsAuthParameters;
  /**
   * @remarks
   * The connection name.
   * 
   * @example
   * demo
   */
  connectionName?: string;
  /**
   * @remarks
   * The connection description.
   * 
   * @example
   * demo
   */
  description?: string;
  /**
   * @remarks
   * The time when the connection was created.
   * 
   * @example
   * 1669648905
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * 5668
   */
  id?: number;
  /**
   * @remarks
   * The information about the network.
   */
  networkParameters?: GetConnectionResponseBodyDataConnectionsNetworkParameters;
  static names(): { [key: string]: string } {
    return {
      authParameters: 'AuthParameters',
      connectionName: 'ConnectionName',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      networkParameters: 'NetworkParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authParameters: GetConnectionResponseBodyDataConnectionsAuthParameters,
      connectionName: 'string',
      description: 'string',
      gmtCreate: 'number',
      id: 'number',
      networkParameters: GetConnectionResponseBodyDataConnectionsNetworkParameters,
    };
  }

  validate() {
    if(this.authParameters && typeof (this.authParameters as any).validate === 'function') {
      (this.authParameters as any).validate();
    }
    if(this.networkParameters && typeof (this.networkParameters as any).validate === 'function') {
      (this.networkParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

