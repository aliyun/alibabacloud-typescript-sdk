// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTimedViewAttitudeResponseBodyDataViewPointsOutlines extends $dara.Model {
  /**
   * @remarks
   * outline
   * 
   * @example
   * 大纲
   */
  outline?: string;
  /**
   * @remarks
   * outline summary
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

export class ListTimedViewAttitudeResponseBodyDataViewPoints extends $dara.Model {
  /**
   * @remarks
   * outlines
   */
  outlines?: ListTimedViewAttitudeResponseBodyDataViewPointsOutlines[];
  /**
   * @remarks
   * generated point
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
   * @remarks
   * current attitude
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
   * Published At
   * 
   * @example
   * 2024-01-22 10:29
   */
  pubTime?: string;
  /**
   * @remarks
   * Proportion of the current attitude
   * 
   * @example
   * 当前观点占比
   */
  ratio?: string;
  /**
   * @remarks
   * News Source
   * 
   * @example
   * 新浪
   */
  source?: string;
  /**
   * @remarks
   * Current attitude, equivalent to the news title
   * 
   * @example
   * 标题
   */
  title?: string;
  /**
   * @remarks
   * News URL
   * 
   * @example
   * http://www.example.com/news/1.html
   */
  url?: string;
  /**
   * @remarks
   * List of topic perspectives
   */
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
   * @remarks
   * Status Code
   * 
   * @example
   * NoData
   */
  code?: string;
  /**
   * @remarks
   * Business Data
   */
  data?: ListTimedViewAttitudeResponseBodyData[];
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
   * 15
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

