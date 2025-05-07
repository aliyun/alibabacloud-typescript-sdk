// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfigStepForNewsBroadcastContentConfigCustomHotValueWeights } from "./SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfigStepForNewsBroadcastContentConfigCustomHotValueWeights";


export class SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfigStepForNewsBroadcastContentConfig extends $dara.Model {
  /**
   * @example
   * ["科技","经济","时政","娱乐"]
   */
  categories?: string[];
  customHotValueWeights?: SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfigStepForNewsBroadcastContentConfigCustomHotValueWeights[];
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
      customHotValueWeights: { 'type': 'array', 'itemType': SubmitCustomHotTopicBroadcastJobRequestHotTopicBroadcastConfigStepForNewsBroadcastContentConfigCustomHotValueWeights },
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

