// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListConnectionsResponseBodyDataConnectionsAuthParameters } from "./ListConnectionsResponseBodyDataConnectionsAuthParameters";
import { ListConnectionsResponseBodyDataConnectionsNetworkParameters } from "./ListConnectionsResponseBodyDataConnectionsNetworkParameters";


export class ListConnectionsResponseBodyDataConnections extends $dara.Model {
  /**
   * @remarks
   * The parameters that are returned for authentication.
   */
  authParameters?: ListConnectionsResponseBodyDataConnectionsAuthParameters;
  /**
   * @remarks
   * The connection name.
   * 
   * @example
   * connection-name
   */
  connectionName?: string;
  /**
   * @remarks
   * The connection description.
   * 
   * @example
   * The description of the connection.
   */
  description?: string;
  /**
   * @remarks
   * The time when the connection was created.
   * 
   * @example
   * 1592838994234
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The ID of the connection.
   * 
   * @example
   * 1141093
   */
  id?: number;
  /**
   * @remarks
   * The parameters that are returned for the network.
   */
  networkParameters?: ListConnectionsResponseBodyDataConnectionsNetworkParameters;
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
      authParameters: ListConnectionsResponseBodyDataConnectionsAuthParameters,
      connectionName: 'string',
      description: 'string',
      gmtCreate: 'number',
      id: 'number',
      networkParameters: ListConnectionsResponseBodyDataConnectionsNetworkParameters,
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

