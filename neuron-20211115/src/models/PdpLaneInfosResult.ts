// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PdpLaneInfo } from "./PdpLaneInfo";


export class PdpLaneInfosResult extends $dara.Model {
  pdpLanes?: PdpLaneInfo[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pdpLanes: 'pdpLanes',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pdpLanes: { 'type': 'array', 'itemType': PdpLaneInfo },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.pdpLanes)) {
      $dara.Model.validateArray(this.pdpLanes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

