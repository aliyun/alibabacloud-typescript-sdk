// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddBackendServersResponseBodyBackendServers } from "./AddBackendServersResponseBodyBackendServers";


export class AddBackendServersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of backend servers that you want to add. You can add at most 20 backend servers.
   * 
   * >  Only ENS instances that are in the running state can be attached to the ELB instance as backend servers.
   */
  backendServers?: AddBackendServersResponseBodyBackendServers;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backendServers: 'BackendServers',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServers: AddBackendServersResponseBodyBackendServers,
      requestId: 'string',
    };
  }

  validate() {
    if(this.backendServers && typeof (this.backendServers as any).validate === 'function') {
      (this.backendServers as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

