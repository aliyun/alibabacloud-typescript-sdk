// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RemoveBackendServersResponseBodyBackendServersBackendServer } from "./RemoveBackendServersResponseBodyBackendServersBackendServer";


export class RemoveBackendServersResponseBodyBackendServers extends $dara.Model {
  backendServer?: RemoveBackendServersResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': RemoveBackendServersResponseBodyBackendServersBackendServer },
    };
  }

  validate() {
    if(Array.isArray(this.backendServer)) {
      $dara.Model.validateArray(this.backendServer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

