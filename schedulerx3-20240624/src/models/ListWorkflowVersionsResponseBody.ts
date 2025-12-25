// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowVersionsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2024-10-29 15:56:36
   */
  createTime?: string;
  /**
   * @example
   * true
   */
  current?: boolean;
  /**
   * @example
   * v1
   */
  dagVersion?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      current: 'Current',
      dagVersion: 'DagVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      current: 'boolean',
      dagVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowVersionsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: ListWorkflowVersionsResponseBodyData[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @example
   * eCKqVlS5FKF5EWGGOo8EgQ==
   */
  nextToken?: string;
  /**
   * @example
   * 3835AA29-2298-5434-BC53-9CC377CDFD2C
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
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListWorkflowVersionsResponseBodyData },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
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

