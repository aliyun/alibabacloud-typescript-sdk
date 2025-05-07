// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetHotTopicBroadcastRequestStepForNewsBroadcastContentConfigCustomHotValueWeights } from "./GetHotTopicBroadcastRequestStepForNewsBroadcastContentConfigCustomHotValueWeights";


export class GetHotTopicBroadcastRequestStepForNewsBroadcastContentConfig extends $dara.Model {
  /**
   * @example
   * ["科技","经济","时政","娱乐"]
   */
  categories?: string[];
  /**
   * @deprecated
   */
  customHotValueWeights?: GetHotTopicBroadcastRequestStepForNewsBroadcastContentConfigCustomHotValueWeights[];
  /**
   * @example
   * 10
   */
  topicCount?: number;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      customHotValueWeights: 'CustomHotValueWeights',
      topicCount: 'TopicCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      customHotValueWeights: { 'type': 'array', 'itemType': GetHotTopicBroadcastRequestStepForNewsBroadcastContentConfigCustomHotValueWeights },
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

