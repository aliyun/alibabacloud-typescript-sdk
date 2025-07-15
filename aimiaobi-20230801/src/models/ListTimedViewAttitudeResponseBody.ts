// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTimedViewAttitudeResponseBodyDataViewPointsOutlines extends $dara.Model {
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

export class ListTimedViewAttitudeResponseBodyDataViewPoints extends $dara.Model {
  outlines?: ListTimedViewAttitudeResponseBodyDataViewPointsOutlines[];
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
      outlines: { 'type': 'array', 'itemType': ListTimedViewAttitudeResponseBodyDataViewPointsOutlines },
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

export class ListTimedViewAttitudeResponseBodyData extends $dara.Model {
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
  /**
   * @example
   * 2024-01-22 10:29
   */
  pubTime?: string;
  /**
   * @example
   * 当前观点占比
   */
  ratio?: string;
  /**
   * @example
   * 新浪
   */
  source?: string;
  /**
   * @example
   * 标题
   */
  title?: string;
  /**
   * @example
   * http://www.example.com/news/1.html
   */
  url?: string;
  viewPoints?: ListTimedViewAttitudeResponseBodyDataViewPoints[];
  static names(): { [key: string]: string } {
    return {
      attitude: 'Attitude',
      attitudeType: 'AttitudeType',
      pubTime: 'PubTime',
      ratio: 'Ratio',
      source: 'Source',
      title: 'Title',
      url: 'Url',
      viewPoints: 'ViewPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attitude: 'string',
      attitudeType: 'string',
      pubTime: 'string',
      ratio: 'string',
      source: 'string',
      title: 'string',
      url: 'string',
      viewPoints: { 'type': 'array', 'itemType': ListTimedViewAttitudeResponseBodyDataViewPoints },
    };
  }

  validate() {
    if(Array.isArray(this.viewPoints)) {
      $dara.Model.validateArray(this.viewPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTimedViewAttitudeResponseBody extends $dara.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: ListTimedViewAttitudeResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 15
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
   * 58
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
      data: { 'type': 'array', 'itemType': ListTimedViewAttitudeResponseBodyData },
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

