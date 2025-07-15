// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotSourcesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 热榜源描述
   */
  description?: string;
  /**
   * @example
   * true
   */
  show?: boolean;
  /**
   * @example
   * 86
   */
  sort?: number;
  /**
   * @example
   * 热榜源标识
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      show: 'Show',
      sort: 'Sort',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      show: 'boolean',
      sort: 'number',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotSourcesResponseBody extends $dara.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: ListHotSourcesResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 4
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * xxxxxx
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
   * 30
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
      data: { 'type': 'array', 'itemType': ListHotSourcesResponseBodyData },
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

