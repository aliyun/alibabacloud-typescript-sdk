// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SetBackendServersResponseBodyBackendServersBackendServer } from "./SetBackendServersResponseBodyBackendServersBackendServer";


export class SetBackendServersResponseBodyBackendServers extends $dara.Model {
  backendServer?: SetBackendServersResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': SetBackendServersResponseBodyBackendServersBackendServer },
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

