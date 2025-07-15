// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWebReviewPointsResponseBodyDataComments extends $dara.Model {
  /**
   * @example
   * 来源
   */
  source?: string;
  /**
   * @example
   * 评论内容
   */
  text?: string;
  /**
   * @example
   * 标题
   */
  title?: string;
  /**
   * @example
   * 当前评论所属的URL
   */
  url?: string;
  /**
   * @example
   * 评论用户名
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

export class ListWebReviewPointsResponseBodyDataViewPoints extends $dara.Model {
  outlines?: ListWebReviewPointsResponseBodyDataViewPointsOutlines[];
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
   * @example
   * 当前观点
   */
  attitude?: string;
  /**
   * @example
   * 观点类型
   */
  attitudeType?: string;
  comments?: ListWebReviewPointsResponseBodyDataComments[];
  /**
   * @example
   * 当前观点占比
   */
  ratio?: string;
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
   * @example
   * NoData
   */
  code?: string;
  data?: ListWebReviewPointsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 79
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

