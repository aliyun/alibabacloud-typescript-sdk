// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetConnectionResponseBodyDataConnections } from "./GetConnectionResponseBodyDataConnections";


export class GetConnectionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The queried connections.
   */
  connections?: GetConnectionResponseBodyDataConnections[];
  static names(): { [key: string]: string } {
    return {
      connections: 'Connections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: { 'type': 'array', 'itemType': GetConnectionResponseBodyDataConnections },
    };
  }

  validate() {
    if(Array.isArray(this.connections)) {
      $dara.Model.validateArray(this.connections);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

