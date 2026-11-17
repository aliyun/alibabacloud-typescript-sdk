// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAiEngineEventNodesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The details of the node in the specified language. The details are in Markdown format.
   * 
   * @example
   * - **Characteristic**: single quote closure
   * - **Risk**: high
   */
  nodeDetail?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * node-109-04
   */
  nodeId?: string;
  /**
   * @remarks
   * The name of the node in the specified language.
   * 
   * @example
   * SQL Injection
   */
  nodeName?: string;
  /**
   * @remarks
   * The summary of the node in the specified language.
   * 
   * @example
   * The request matches SQL injection characteristics.
   */
  nodeSummary?: string;
  /**
   * @remarks
   * The node tag. Valid values:
   * 
   * - **bypass**: Suspected bypass.
   * 
   * - **protect**: Mitigated.
   * 
   * - **attempt**: Reconnaissance and probing.
   * 
   * @example
   * bypass
   */
  nodeTag?: string;
  /**
   * @remarks
   * The time when the node occurred. The time is in the UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1792973400000
   */
  occurredAt?: number;
  static names(): { [key: string]: string } {
    return {
      nodeDetail: 'NodeDetail',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeSummary: 'NodeSummary',
      nodeTag: 'NodeTag',
      occurredAt: 'OccurredAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeDetail: 'string',
      nodeId: 'string',
      nodeName: 'string',
      nodeSummary: 'string',
      nodeTag: 'string',
      occurredAt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAiEngineEventNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of nodes.
   */
  items?: DescribeAiEngineEventNodesResponseBodyItems[];
  /**
   * @remarks
   * The number of entries to return on each page in a paging query. Valid values: 1 to 20. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used to query the next page. If a next page exists, this field returns a value.
   * > If this parameter returns a value, a next page exists. You can use the returned **NextToken** as a request parameter to obtain the data on the next page until no value is returned, which indicates that all data is obtained.
   * 
   * @example
   * AAAAAGBgV9tolsLfijC4wam2htS*****D/46H3X2wIS
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * request-demo
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of nodes for the event.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeAiEngineEventNodesResponseBodyItems },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

