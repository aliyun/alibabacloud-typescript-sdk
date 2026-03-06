// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiMcpServerSystemToolsResponseBodySystemTools extends $dara.Model {
  /**
   * @remarks
   * The description of the system tool.
   * 
   * @example
   * system tool description
   */
  description?: string;
  /**
   * @remarks
   * The name of the system tool.
   * 
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
   * @remarks
   * The maximum number of entries to return on each page. The maximum value is 100. The default value is 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The NextToken value. Use this value to retrieve more results.
   * 
   * > If this parameter is not returned, no more results are available.
   * 
   * @example
   * AAAAAZjtYxxxxxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9BFC4AC1-6BE4-5405-BDEC-CA288D404812
   */
  requestId?: string;
  /**
   * @remarks
   * The list of system tools.
   */
  systemTools?: ListApiMcpServerSystemToolsResponseBodySystemTools[];
  /**
   * @remarks
   * The total number of records.
   * 
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

