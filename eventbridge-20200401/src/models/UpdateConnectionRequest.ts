// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateConnectionRequestAuthParameters } from "./UpdateConnectionRequestAuthParameters";
import { UpdateConnectionRequestNetworkParameters } from "./UpdateConnectionRequestNetworkParameters";


export class UpdateConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters that are configured for authentication.
   */
  authParameters?: UpdateConnectionRequestAuthParameters;
  /**
   * @remarks
   * The name of the connection that you want to update. The name must be 2 to 127 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * connection-name
   */
  connectionName?: string;
  /**
   * @remarks
   * The description of the connection. The description can be up to 255 characters in length.
   * 
   * @example
   * The description of the connection.
   */
  description?: string;
  /**
   * @remarks
   * The parameters that are configured for the network.
   * 
   * This parameter is required.
   */
  networkParameters?: UpdateConnectionRequestNetworkParameters;
  static names(): { [key: string]: string } {
    return {
      authParameters: 'AuthParameters',
      connectionName: 'ConnectionName',
      description: 'Description',
      networkParameters: 'NetworkParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authParameters: UpdateConnectionRequestAuthParameters,
      connectionName: 'string',
      description: 'string',
      networkParameters: UpdateConnectionRequestNetworkParameters,
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

