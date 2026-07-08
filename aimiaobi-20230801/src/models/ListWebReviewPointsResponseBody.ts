// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWebReviewPointsResponseBodyDataComments extends $dara.Model {
  /**
   * @remarks
   * Source
   * 
   * @example
   * 来源
   */
  source?: string;
  /**
   * @remarks
   * Content
   * 
   * @example
   * 内容
   */
  text?: string;
  /**
   * @remarks
   * title
   * 
   * @example
   * 标题
   */
  title?: string;
  /**
   * @remarks
   * Current URL
   * 
   * @example
   * 当前所属的URL
   */
  url?: string;
  /**
   * @remarks
   * username
   * 
   * @example
   * 用户名
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      text: 'Text',
      title: 'Title',
      url: 'Url',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      text: 'string',
      title: 'string',
      url: 'string',
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

export class ListWebReviewPointsResponseBodyDataViewPointsOutlines extends $dara.Model {
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

export class ListWebReviewPointsResponseBodyDataViewPoints extends $dara.Model {
  /**
   * @remarks
   * Outline
   */
  outlines?: ListWebReviewPointsResponseBodyDataViewPointsOutlines[];
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
      outlines: { 'type': 'array', 'itemType': ListWebReviewPointsResponseBodyDataViewPointsOutlines },
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

export class ListWebReviewPointsResponseBodyData extends $dara.Model {
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
   * Viewpoint type
   * 
   * @example
   * 观点类型
   */
  attitudeType?: string;
  /**
   * @remarks
   * List of user opinions
   */
  comments?: ListWebReviewPointsResponseBodyDataComments[];
  /**
   * @remarks
   * Proportion of the current opinion
   * 
   * @example
   * 当前观点占比
   */
  ratio?: string;
  /**
   * @remarks
   * List of topic perspectives
   */
  viewPoints?: ListWebReviewPointsResponseBodyDataViewPoints[];
  static names(): { [key: string]: string } {
    return {
      attitude: 'Attitude',
      attitudeType: 'AttitudeType',
      comments: 'Comments',
      ratio: 'Ratio',
      viewPoints: 'ViewPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attitude: 'string',
      attitudeType: 'string',
      comments: { 'type': 'array', 'itemType': ListWebReviewPointsResponseBodyDataComments },
      ratio: 'string',
      viewPoints: { 'type': 'array', 'itemType': ListWebReviewPointsResponseBodyDataViewPoints },
    };
  }

  validate() {
    if(Array.isArray(this.comments)) {
      $dara.Model.validateArray(this.comments);
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

export class ListWebReviewPointsResponseBody extends $dara.Model {
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
  data?: ListWebReviewPointsResponseBodyData[];
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
   * 79
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
   * 32
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
      data: { 'type': 'array', 'itemType': ListWebReviewPointsResponseBodyData },
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

