// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotViewPointsResponseBodyDataNews extends $dara.Model {
  /**
   * @remarks
   * Author
   * 
   * @example
   * 作者
   */
  author?: string;
  /**
   * @remarks
   * Content
   * 
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @remarks
   * External UUID of the article
   * 
   * @example
   * xxxxx
   */
  docId?: string;
  /**
   * @remarks
   * Unique ID of the article
   * 
   * @example
   * 123456
   */
  docUuid?: string;
  /**
   * @remarks
   * URLs of article images
   * 
   * @example
   * https://www.example.com/aaa.png
   */
  imageUrls?: string[];
  /**
   * @remarks
   * Published At. Format: YYYY-MM-dd HH:mm:ss
   * 
   * @example
   * 2024-01-22 10:29:00
   */
  pubTime?: string;
  /**
   * @remarks
   * Source
   * 
   * @example
   * 新浪
   */
  source?: string;
  /**
   * @remarks
   * summary
   * 
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @remarks
   * tags
   * 
   * @example
   * ["标签1","标签2"]
   */
  tags?: string[];
  /**
   * @remarks
   * title
   * 
   * @example
   * 文章标题
   */
  title?: string;
  /**
   * @remarks
   * topic
   * 
   * @example
   * 文章主题
   */
  topic?: string;
  /**
   * @remarks
   * Article URL
   * 
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
   * @remarks
   * Outline
   * 
   * @example
   * 大纲
   */
  outline?: string;
  /**
   * @remarks
   * Outline summary
   * 
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
  /**
   * @remarks
   * Outline
   */
  outlines?: ListHotViewPointsResponseBodyDataViewPointsOutlines[];
  /**
   * @remarks
   * Generated point
   * 
   * @example
   * 视角
   */
  point?: string;
  /**
   * @remarks
   * Summary
   * 
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
   * @remarks
   * Current viewpoint
   * 
   * @example
   * 当前观点
   */
  attitude?: string;
  /**
   * @remarks
   * Attitude Type
   * 
   * @example
   * 观点类型
   */
  attitudeType?: string;
  /**
   * @remarks
   * List of related news articles
   */
  news?: ListHotViewPointsResponseBodyDataNews[];
  /**
   * @remarks
   * Current viewpoint ratio
   * 
   * @example
   * 当前观点占比
   */
  ratio?: string;
  /**
   * @remarks
   * List of topic viewpoints
   */
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
   * @remarks
   * Status code
   * 
   * @example
   * NoData
   */
  code?: string;
  /**
   * @remarks
   * Business Data
   */
  data?: ListHotViewPointsResponseBodyData[];
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Maximum number of return results
   * 
   * @example
   * 67
   */
  maxResults?: number;
  /**
   * @remarks
   * Fault description
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Token for the next page
   * 
   * @example
   * 下一页的token
   */
  nextToken?: string;
  /**
   * @remarks
   * Request UUID
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation succeeded: true for success, false for failure
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total count
   * 
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

