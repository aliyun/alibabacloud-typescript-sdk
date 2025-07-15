// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotTopicBroadcastResponseBodyDataDataImages extends $dara.Model {
  /**
   * @example
   * http://www.example.com/a.png
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotTopicBroadcastResponseBodyDataDataNewsComments extends $dara.Model {
  /**
   * @example
   * 评论内容
   */
  text?: string;
  /**
   * @example
   * 评论用户名
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class GetHotTopicBroadcastResponseBodyDataDataSummarySummaries extends $dara.Model {
  /**
   * @example
   * 摘要
   */
  summary?: string;
  /**
   * @example
   * 标题
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      summary: 'Summary',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summary: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotTopicBroadcastResponseBodyDataDataSummary extends $dara.Model {
  /**
   * @example
   * 17
   */
  inputToken?: number;
  /**
   * @example
   * 41
   */
  outputToken?: number;
  summaries?: GetHotTopicBroadcastResponseBodyDataDataSummarySummaries[];
  static names(): { [key: string]: string } {
    return {
      inputToken: 'InputToken',
      outputToken: 'OutputToken',
      summaries: 'Summaries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputToken: 'number',
      outputToken: 'number',
      summaries: { 'type': 'array', 'itemType': GetHotTopicBroadcastResponseBodyDataDataSummarySummaries },
    };
  }

  validate() {
    if(Array.isArray(this.summaries)) {
      $dara.Model.validateArray(this.summaries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
  pubTime?: string;
  summary?: GetHotTopicBroadcastResponseBodyDataDataSummary;
  /**
   * @example
   * 热点话题文本摘要
   */
  textSummary?: string;
  url?: string;
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
      pubTime: 'PubTime',
      summary: 'Summary',
      textSummary: 'TextSummary',
      url: 'Url',
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
      pubTime: 'string',
      summary: GetHotTopicBroadcastResponseBodyDataDataSummary,
      textSummary: 'string',
      url: 'string',
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

export class GetHotTopicBroadcastResponseBodyDataTotalTokenInfo extends $dara.Model {
  /**
   * @example
   * 100
   */
  hotTopicCount?: number;
  /**
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 100
   */
  wordCount?: number;
  static names(): { [key: string]: string } {
    return {
      hotTopicCount: 'HotTopicCount',
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      wordCount: 'WordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotTopicCount: 'number',
      inputTokens: 'number',
      outputTokens: 'number',
      wordCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotTopicBroadcastResponseBodyData extends $dara.Model {
  data?: GetHotTopicBroadcastResponseBodyDataData[];
  /**
   * @example
   * 100
   */
  totalCount?: number;
  totalTokenInfo?: GetHotTopicBroadcastResponseBodyDataTotalTokenInfo;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      totalCount: 'TotalCount',
      totalTokenInfo: 'TotalTokenInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetHotTopicBroadcastResponseBodyDataData },
      totalCount: 'number',
      totalTokenInfo: GetHotTopicBroadcastResponseBodyDataTotalTokenInfo,
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.totalTokenInfo && typeof (this.totalTokenInfo as any).validate === 'function') {
      (this.totalTokenInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotTopicBroadcastResponseBody extends $dara.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: GetHotTopicBroadcastResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetHotTopicBroadcastResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

