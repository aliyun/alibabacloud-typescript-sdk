// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PdpLaneInfo } from "./PdpLaneInfo";


export class PdpLanesPageResult extends $dara.Model {
  pdpLanes?: PdpLaneInfo[];
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  /**
   * @example
   * 24
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pdpLanes: 'pdpLanes',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pdpLanes: { 'type': 'array', 'itemType': PdpLaneInfo },
      requestId: 'string',
      total: 'number',
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

