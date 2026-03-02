// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PdpPbc } from "./PdpPbc";


export class PdpPbcListResult extends $dara.Model {
  pdpPbcs?: PdpPbc[];
  requestId?: string;
  /**
   * @example
   * 24
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pdpPbcs: 'pdpPbcs',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pdpPbcs: { 'type': 'array', 'itemType': PdpPbc },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pdpPbcs)) {
      $dara.Model.validateArray(this.pdpPbcs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

