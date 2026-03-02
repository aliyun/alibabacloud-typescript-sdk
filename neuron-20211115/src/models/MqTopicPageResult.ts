// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MqTopicDigest } from "./MqTopicDigest";


export class MqTopicPageResult extends $dara.Model {
  mqTopicDigests?: MqTopicDigest[];
  intTotal?: number;
  requestId?: string;
  /**
   * @example
   * 24
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      mqTopicDigests: 'MqTopicDigests',
      intTotal: 'intTotal',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mqTopicDigests: { 'type': 'array', 'itemType': MqTopicDigest },
      intTotal: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.mqTopicDigests)) {
      $dara.Model.validateArray(this.mqTopicDigests);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

