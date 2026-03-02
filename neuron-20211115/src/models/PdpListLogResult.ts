// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PdpLog } from "./PdpLog";


export class PdpListLogResult extends $dara.Model {
  logs?: PdpLog[];
  static names(): { [key: string]: string } {
    return {
      logs: 'logs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': PdpLog },
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

