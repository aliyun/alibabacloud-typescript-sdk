// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EventHouseRuntime } from "./EventHouseRuntime";


export class ListEventHouseRuntimesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The maximum number of runtimes returned per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page. An empty value indicates that there are no more pages.
   * 
   * @example
   * 10
   */
  nextToken?: string;
  /**
   * @remarks
   * The runtime list.
   */
  runtimes?: EventHouseRuntime[];
  /**
   * @remarks
   * The total number of runtimes that meet the query conditions.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      runtimes: 'Runtimes',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      runtimes: { 'type': 'array', 'itemType': EventHouseRuntime },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.runtimes)) {
      $dara.Model.validateArray(this.runtimes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventHouseRuntimesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of Success indicates that the request is successful.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The runtime list results.
   */
  data?: ListEventHouseRuntimesResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Operation success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 34AD682D-5B91-5773-8132-AA38C130****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListEventHouseRuntimesResponseBodyData,
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

