// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetHotTopicBroadcastResponseBodyDataDataNewsComments } from "./GetHotTopicBroadcastResponseBodyDataDataNewsComments";


export class GetHotTopicBroadcastResponseBodyDataDataNews extends $dara.Model {
  analysisCategory?: string;
  /**
   * @example
   * 聚合后热点名称
   */
  analysisTopic?: string;
  author?: string;
  category?: string[];
  comments?: GetHotTopicBroadcastResponseBodyDataDataNewsComments[];
  content?: string;
  /**
   * @example
   * 2024-06-13 08:45:05
   */
  createTime?: string;
  domain?: string;
  /**
   * @example
   * 2024111110
   */
  dt?: string;
  /**
   * @example
   * 原始热点名称
   */
  hotTopic?: string;
  imgList?: string[];
  /**
   * @remarks
   * logo
   * 
   * @example
   * https://www.example.com/a.png
   */
  logo?: string;
  /**
   * @example
   * 2024-10-10 12:12:00
   */
  pubTime?: string;
  /**
   * @example
   * 摘要
   */
  summary?: string;
  title?: string;
  /**
   * @example
   * http://www.example.com/a.png
   */
  url?: string;
  /**
   * @example
   * 主键ID
   */
  uuid?: string;
  /**
   * @example
   * 网站
   */
  website?: string;
  static names(): { [key: string]: string } {
    return {
      analysisCategory: 'AnalysisCategory',
      analysisTopic: 'AnalysisTopic',
      author: 'Author',
      category: 'Category',
      comments: 'Comments',
      content: 'Content',
      createTime: 'CreateTime',
      domain: 'Domain',
      dt: 'Dt',
      hotTopic: 'HotTopic',
      imgList: 'ImgList',
      logo: 'Logo',
      pubTime: 'PubTime',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
      uuid: 'Uuid',
      website: 'Website',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisCategory: 'string',
      analysisTopic: 'string',
      author: 'string',
      category: { 'type': 'array', 'itemType': 'string' },
      comments: { 'type': 'array', 'itemType': GetHotTopicBroadcastResponseBodyDataDataNewsComments },
      content: 'string',
      createTime: 'string',
      domain: 'string',
      dt: 'string',
      hotTopic: 'string',
      imgList: { 'type': 'array', 'itemType': 'string' },
      logo: 'string',
      pubTime: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
      uuid: 'string',
      website: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.category)) {
      $dara.Model.validateArray(this.category);
    }
    if(Array.isArray(this.comments)) {
      $dara.Model.validateArray(this.comments);
    }
    if(Array.isArray(this.imgList)) {
      $dara.Model.validateArray(this.imgList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

