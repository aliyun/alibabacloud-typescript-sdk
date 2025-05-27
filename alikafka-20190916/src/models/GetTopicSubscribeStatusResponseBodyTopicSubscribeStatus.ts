// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTopicSubscribeStatusResponseBodyTopicSubscribeStatus extends $dara.Model {
  /**
   * @remarks
   * The groups that subscribe to the topic.
   */
  consumerGroups?: string[];
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * topic_api_1681624879908
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroups: 'ConsumerGroups',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroups: { 'type': 'array', 'itemType': 'string' },
      topic: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.consumerGroups)) {
      $dara.Model.validateArray(this.consumerGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

