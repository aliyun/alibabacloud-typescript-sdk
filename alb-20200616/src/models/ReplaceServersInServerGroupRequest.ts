// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ReplaceServersInServerGroupRequestAddedServers } from "./ReplaceServersInServerGroupRequestAddedServers";
import { ReplaceServersInServerGroupRequestRemovedServers } from "./ReplaceServersInServerGroupRequestRemovedServers";


export class ReplaceServersInServerGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The backend servers. You can specify at most 200 servers in each call.
   * 
   * This parameter is required.
   */
  addedServers?: ReplaceServersInServerGroupRequestAddedServers[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 593B0448-D13E-4C56-AC0D-FDF0FDE0E9A3
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a `2xx` HTTP status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The backend servers that you want to remove.
   * 
   * This parameter is required.
   */
  removedServers?: ReplaceServersInServerGroupRequestRemovedServers[];
  /**
   * @remarks
   * The ID of the server group.
   * 
   * > You cannot perform this operation on a server group of the Function type.
   * 
   * This parameter is required.
   * 
   * @example
   * sgp-5114d593o96qxy****
   */
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      addedServers: 'AddedServers',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      removedServers: 'RemovedServers',
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addedServers: { 'type': 'array', 'itemType': ReplaceServersInServerGroupRequestAddedServers },
      clientToken: 'string',
      dryRun: 'boolean',
      removedServers: { 'type': 'array', 'itemType': ReplaceServersInServerGroupRequestRemovedServers },
      serverGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addedServers)) {
      $dara.Model.validateArray(this.addedServers);
    }
    if(Array.isArray(this.removedServers)) {
      $dara.Model.validateArray(this.removedServers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

