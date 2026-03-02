// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MqMsgDigest } from "./MqMsgDigest";


export class MqMsgPageResult extends $dara.Model {
  mqMsgDigests?: MqMsgDigest[];
  intTotal?: number;
  requestId?: string;
  /**
   * @example
   * 24
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      mqMsgDigests: 'MqMsgDigests',
      intTotal: 'intTotal',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mqMsgDigests: { 'type': 'array', 'itemType': MqMsgDigest },
      intTotal: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.mqMsgDigests)) {
      $dara.Model.validateArray(this.mqMsgDigests);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

