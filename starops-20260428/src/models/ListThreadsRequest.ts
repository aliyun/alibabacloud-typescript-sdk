// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListThreadsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * title
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListThreadsRequest extends $dara.Model {
  filter?: ListThreadsRequestFilter[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * xxxxxx
   */
  nextToken?: string;
  /**
   * @example
   * active
   */
  status?: string;
  /**
   * @example
   * thread-123123
   */
  threadId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      status: 'status',
      threadId: 'threadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListThreadsRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      status: 'string',
      threadId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

