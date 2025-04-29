// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunHotTopicChatRequestStepForBroadcastContentConfigCustomHotValueWeights } from "./RunHotTopicChatRequestStepForBroadcastContentConfigCustomHotValueWeights";


export class RunHotTopicChatRequestStepForBroadcastContentConfig extends $dara.Model {
  categories?: string[];
  customHotValueWeights?: RunHotTopicChatRequestStepForBroadcastContentConfigCustomHotValueWeights[];
  /**
   * @example
   * 20
   */
  topicCount?: number;
  static names(): { [key: string]: string } {
    return {
      categories: 'categories',
      customHotValueWeights: 'customHotValueWeights',
      topicCount: 'topicCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      customHotValueWeights: { 'type': 'array', 'itemType': RunHotTopicChatRequestStepForBroadcastContentConfigCustomHotValueWeights },
      topicCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    if(Array.isArray(this.customHotValueWeights)) {
      $dara.Model.validateArray(this.customHotValueWeights);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

