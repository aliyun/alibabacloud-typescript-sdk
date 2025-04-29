// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GenerateBroadcastNewsResponseBodyDataHotTopicSummariesImages } from "./GenerateBroadcastNewsResponseBodyDataHotTopicSummariesImages";


export class GenerateBroadcastNewsResponseBodyDataHotTopicSummaries extends $dara.Model {
  category?: string;
  hotTopic?: string;
  /**
   * @example
   * 2024-09-13_08
   */
  hotTopicVersion?: string;
  /**
   * @example
   * 1000000
   */
  hotValue?: number;
  /**
   * @example
   * 1458tb3bjo7531kap42a
   */
  id?: string;
  images?: GenerateBroadcastNewsResponseBodyDataHotTopicSummariesImages[];
  /**
   * @example
   * xxx
   */
  textSummary?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      hotTopic: 'hotTopic',
      hotTopicVersion: 'hotTopicVersion',
      hotValue: 'hotValue',
      id: 'id',
      images: 'images',
      textSummary: 'textSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      hotTopic: 'string',
      hotTopicVersion: 'string',
      hotValue: 'number',
      id: 'string',
      images: { 'type': 'array', 'itemType': GenerateBroadcastNewsResponseBodyDataHotTopicSummariesImages },
      textSummary: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

