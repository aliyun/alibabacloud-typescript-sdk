// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotSourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Hot ranking source description
   * 
   * @example
   * 热榜源描述
   */
  description?: string;
  /**
   * @remarks
   * Whether to display in the console
   * 
   * @example
   * true
   */
  show?: boolean;
  /**
   * @remarks
   * Sorting value
   * 
   * @example
   * 86
   */
  sort?: number;
  /**
   * @remarks
   * Hot ranking source identity
   * 
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
   * @remarks
   * Status code
   * 
   * @example
   * NoData
   */
  code?: string;
  /**
   * @remarks
   * Third-party source list
   */
  data?: ListHotSourcesResponseBodyData[];
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
   * Maximum number of results returned
   * 
   * @example
   * 4
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
   * Next page token
   * 
   * @example
   * xxxxxx
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
   * Total number of records
   * 
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

