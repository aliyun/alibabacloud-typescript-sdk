// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetBackendServersRequestBackendServers extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance that you use as the backend server.
   * 
   * This parameter is required.
   * 
   * @example
   * i-5ze0o05xccvbljtn****
   */
  serverId?: string;
  /**
   * @remarks
   * The type of the backend server. Valid values:
   * 
   * *   **ens**: ENS instance
   * *   **eni**: elastic network interface (ENI)
   * 
   * @example
   * ens
   */
  type?: string;
  /**
   * @remarks
   * The weight of the backend server. Default value: 100. Valid values: **0** to **100**.
   * 
   * >  The value 0 indicates that requests are not forwarded to the backend server.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      serverId: 'ServerId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverId: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

