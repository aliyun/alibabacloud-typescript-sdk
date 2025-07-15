// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotViewPointsResponseBodyDataNews extends $dara.Model {
  /**
   * @example
   * 作者
   */
  author?: string;
  /**
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @example
   * xxxxx
   */
  docId?: string;
  /**
   * @example
   * 123456
   */
  docUuid?: string;
  /**
   * @example
   * https://www.example.com/aaa.png
   */
  imageUrls?: string[];
  /**
   * @example
   * 2024-01-22 10:29:00
   */
  pubTime?: string;
  /**
   * @example
   * 新浪
   */
  source?: string;
  /**
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @example
   * ["标签1","标签2"]
   */
  tags?: string[];
  /**
   * @example
   * 文章标题
   */
  title?: string;
  /**
   * @example
   * 文章主题
   */
  topic?: string;
  /**
   * @example
   * https://www.example.com/aaa.docx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'Author',
      content: 'Content',
      docId: 'DocId',
      docUuid: 'DocUuid',
      imageUrls: 'ImageUrls',
      pubTime: 'PubTime',
      source: 'Source',
      summary: 'Summary',
      tags: 'Tags',
      title: 'Title',
      topic: 'Topic',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      content: 'string',
      docId: 'string',
      docUuid: 'string',
      imageUrls: { 'type': 'array', 'itemType': 'string' },
      pubTime: 'string',
      source: 'string',
      summary: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      topic: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageUrls)) {
      $dara.Model.validateArray(this.imageUrls);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotViewPointsResponseBodyDataViewPointsOutlines extends $dara.Model {
  /**
   * @example
   * 大纲
   */
  outline?: string;
  /**
   * @example
   * 大纲摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outline: 'Outline',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outline: 'string',
      summary: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotViewPointsResponseBodyDataViewPoints extends $dara.Model {
  outlines?: ListHotViewPointsResponseBodyDataViewPointsOutlines[];
  /**
   * @example
   * 视角
   */
  point?: string;
  /**
   * @example
   * 摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outlines: 'Outlines',
      point: 'Point',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outlines: { 'type': 'array', 'itemType': ListHotViewPointsResponseBodyDataViewPointsOutlines },
      point: 'string',
      summary: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.outlines)) {
      $dara.Model.validateArray(this.outlines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotViewPointsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 当前观点
   */
  attitude?: string;
  /**
   * @example
   * 观点类型
   */
  attitudeType?: string;
  news?: ListHotViewPointsResponseBodyDataNews[];
  /**
   * @example
   * 当前观点占比
   */
  ratio?: string;
  viewPoints?: ListHotViewPointsResponseBodyDataViewPoints[];
  static names(): { [key: string]: string } {
    return {
      attitude: 'Attitude',
      attitudeType: 'AttitudeType',
      news: 'News',
      ratio: 'Ratio',
      viewPoints: 'ViewPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attitude: 'string',
      attitudeType: 'string',
      news: { 'type': 'array', 'itemType': ListHotViewPointsResponseBodyDataNews },
      ratio: 'string',
      viewPoints: { 'type': 'array', 'itemType': ListHotViewPointsResponseBodyDataViewPoints },
    };
  }

  validate() {
    if(Array.isArray(this.news)) {
      $dara.Model.validateArray(this.news);
    }
    if(Array.isArray(this.viewPoints)) {
      $dara.Model.validateArray(this.viewPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotViewPointsResponseBody extends $dara.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: ListHotViewPointsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 67
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 下一页的token
   */
  nextToken?: string;
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
  /**
   * @example
   * 70
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListHotViewPointsResponseBodyData },
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

