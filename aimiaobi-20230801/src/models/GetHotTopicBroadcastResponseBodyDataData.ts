// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetHotTopicBroadcastResponseBodyDataDataImages } from "./GetHotTopicBroadcastResponseBodyDataDataImages";
import { GetHotTopicBroadcastResponseBodyDataDataNews } from "./GetHotTopicBroadcastResponseBodyDataDataNews";
import { GetHotTopicBroadcastResponseBodyDataDataSummary } from "./GetHotTopicBroadcastResponseBodyDataDataSummary";


export class GetHotTopicBroadcastResponseBodyDataData extends $dara.Model {
  /**
   * @example
   * 热点话题分类
   */
  category?: string;
  /**
   * @example
   * 创建时间
   */
  createTime?: string;
  /**
   * @example
   * 34.7905341705522
   */
  customHotValue?: number;
  /**
   * @example
   * 自定义热点话题文本摘要
   */
  customTextSummary?: string;
  /**
   * @example
   * 热点话题名称
   */
  hotTopic?: string;
  /**
   * @example
   * 热点话题摘要版本
   */
  hotTopicVersion?: string;
  /**
   * @example
   * 1.4120480606282884
   */
  hotValue?: number;
  /**
   * @example
   * 热点话题ID
   */
  id?: string;
  images?: GetHotTopicBroadcastResponseBodyDataDataImages[];
  /**
   * @example
   * 29
   */
  inputToken?: number;
  locations?: string[];
  news?: GetHotTopicBroadcastResponseBodyDataDataNews[];
  /**
   * @example
   * 22
   */
  outputToken?: number;
  summary?: GetHotTopicBroadcastResponseBodyDataDataSummary;
  /**
   * @example
   * 热点话题文本摘要
   */
  textSummary?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      createTime: 'CreateTime',
      customHotValue: 'CustomHotValue',
      customTextSummary: 'CustomTextSummary',
      hotTopic: 'HotTopic',
      hotTopicVersion: 'HotTopicVersion',
      hotValue: 'HotValue',
      id: 'Id',
      images: 'Images',
      inputToken: 'InputToken',
      locations: 'Locations',
      news: 'News',
      outputToken: 'OutputToken',
      summary: 'Summary',
      textSummary: 'TextSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      createTime: 'string',
      customHotValue: 'number',
      customTextSummary: 'string',
      hotTopic: 'string',
      hotTopicVersion: 'string',
      hotValue: 'number',
      id: 'string',
      images: { 'type': 'array', 'itemType': GetHotTopicBroadcastResponseBodyDataDataImages },
      inputToken: 'number',
      locations: { 'type': 'array', 'itemType': 'string' },
      news: { 'type': 'array', 'itemType': GetHotTopicBroadcastResponseBodyDataDataNews },
      outputToken: 'number',
      summary: GetHotTopicBroadcastResponseBodyDataDataSummary,
      textSummary: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(Array.isArray(this.locations)) {
      $dara.Model.validateArray(this.locations);
    }
    if(Array.isArray(this.news)) {
      $dara.Model.validateArray(this.news);
    }
    if(this.summary && typeof (this.summary as any).validate === 'function') {
      (this.summary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

