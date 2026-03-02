// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MicroServiceDigest } from "./MicroServiceDigest";


export class MicroServicePageResult extends $dara.Model {
  microServiceDigests?: MicroServiceDigest[];
  intTotal?: number;
  requestId?: string;
  /**
   * @example
   * 24
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      microServiceDigests: 'MicroServiceDigests',
      intTotal: 'intTotal',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      microServiceDigests: { 'type': 'array', 'itemType': MicroServiceDigest },
      intTotal: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.microServiceDigests)) {
      $dara.Model.validateArray(this.microServiceDigests);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

