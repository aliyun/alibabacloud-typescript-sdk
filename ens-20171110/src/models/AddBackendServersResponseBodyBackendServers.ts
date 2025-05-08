// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddBackendServersResponseBodyBackendServersBackendServer } from "./AddBackendServersResponseBodyBackendServersBackendServer";


export class AddBackendServersResponseBodyBackendServers extends $dara.Model {
  backendServer?: AddBackendServersResponseBodyBackendServersBackendServer[];
  static names(): { [key: string]: string } {
    return {
      backendServer: 'BackendServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendServer: { 'type': 'array', 'itemType': AddBackendServersResponseBodyBackendServersBackendServer },
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

