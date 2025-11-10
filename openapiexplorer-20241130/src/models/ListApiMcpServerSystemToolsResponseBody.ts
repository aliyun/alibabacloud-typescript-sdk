// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiMcpServerSystemToolsResponseBodySystemTools extends $dara.Model {
  /**
   * @example
   * system tool description
   */
  description?: string;
  /**
   * @example
   * mcp-system
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiMcpServerSystemToolsResponseBody extends $dara.Model {
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAZjtYxxxxxxxx
   */
  nextToken?: string;
  /**
   * @example
   * 9BFC4AC1-6BE4-5405-BDEC-CA288D404812
   */
  requestId?: string;
  systemTools?: ListApiMcpServerSystemToolsResponseBodySystemTools[];
  /**
   * @example
   * 22
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      systemTools: 'systemTools',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      systemTools: { 'type': 'array', 'itemType': ListApiMcpServerSystemToolsResponseBodySystemTools },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.systemTools)) {
      $dara.Model.validateArray(this.systemTools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

