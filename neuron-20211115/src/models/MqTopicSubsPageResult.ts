// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MqTopicSubsDigest } from "./MqTopicSubsDigest";


export class MqTopicSubsPageResult extends $dara.Model {
  mqTopicSubsDigests?: MqTopicSubsDigest[];
  intTotal?: number;
  requestId?: string;
  /**
   * @example
   * 24
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      mqTopicSubsDigests: 'MqTopicSubsDigests',
      intTotal: 'intTotal',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mqTopicSubsDigests: { 'type': 'array', 'itemType': MqTopicSubsDigest },
      intTotal: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.mqTopicSubsDigests)) {
      $dara.Model.validateArray(this.mqTopicSubsDigests);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

