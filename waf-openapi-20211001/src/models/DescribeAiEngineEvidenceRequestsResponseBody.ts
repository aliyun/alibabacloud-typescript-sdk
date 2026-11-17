// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAiEngineEvidenceRequestsResponseBodyItemsAttackSourcesSources extends $dara.Model {
  /**
   * @remarks
   * The display attribute of the source, such as the region code.
   * 
   * @example
   * US-CA
   */
  attribute?: string;
  /**
   * @remarks
   * The source value, such as an IP address.
   * 
   * @example
   * 2XX.0.113.1X
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'Attribute',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: 'string',
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

export class DescribeAiEngineEvidenceRequestsResponseBodyItemsAttackSources extends $dara.Model {
  /**
   * @remarks
   * The list of sources of this type.
   */
  sources?: DescribeAiEngineEvidenceRequestsResponseBodyItemsAttackSourcesSources[];
  /**
   * @remarks
   * The attack source type.
   * 
   * @example
   * ip
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      sources: 'Sources',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sources: { 'type': 'array', 'itemType': DescribeAiEngineEvidenceRequestsResponseBodyItemsAttackSourcesSources },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sources)) {
      $dara.Model.validateArray(this.sources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAiEngineEvidenceRequestsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The list of attack source groups for the request.
   */
  attackSources?: DescribeAiEngineEvidenceRequestsResponseBodyItemsAttackSources[];
  /**
   * @remarks
   * The evidence ID. The value can contain up to 64 ASCII characters.
   * 
   * @example
   * EVD-20241025-001
   */
  evidenceId?: string;
  /**
   * @remarks
   * The host of the request.
   * 
   * @example
   * api.example.com
   */
  host?: string;
  /**
   * @remarks
   * The HTTP response status code.
   * 
   * @example
   * 500
   */
  httpStatus?: number;
  /**
   * @remarks
   * The evidence impact tag. Valid values:
   * 
   * - **block**: The request is blocked.
   * 
   * - **challenge**: The request is challenged.
   * 
   * - **monitor**: The request is monitored.
   * 
   * - **bypass**: The request is suspected to be a bypass.
   * 
   * - **attempt**: The request is a reconnaissance probe.
   * 
   * @example
   * bypass
   */
  impactType?: string;
  /**
   * @remarks
   * The HTTP method.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * The ID of the associated node. This ID corresponds to the NodeId in the node list.
   * 
   * @example
   * node-109-04
   */
  nodeId?: string;
  /**
   * @remarks
   * The masked request path.
   * 
   * @example
   * /api/orders/query
   */
  requestPath?: string;
  /**
   * @remarks
   * The time when the original request was made. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1792973400000
   */
  requestTime?: number;
  /**
   * @remarks
   * The ID of the protected object to which the request belongs.
   * 
   * @example
   * www.example.com
   */
  resource?: string;
  /**
   * @remarks
   * Specifies whether the request is suspected to be a bypass. Valid values:
   * 
   * - **1**: The request is suspected to be a bypass.
   * - **0**: The request is not a bypass.
   * 
   * @example
   * 1
   */
  suspectedBypass?: number;
  /**
   * @remarks
   * The trace ID of the original request. The value can contain up to 128 ASCII characters.
   * 
   * @example
   * trace-20241025-109-04
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      attackSources: 'AttackSources',
      evidenceId: 'EvidenceId',
      host: 'Host',
      httpStatus: 'HttpStatus',
      impactType: 'ImpactType',
      method: 'Method',
      nodeId: 'NodeId',
      requestPath: 'RequestPath',
      requestTime: 'RequestTime',
      resource: 'Resource',
      suspectedBypass: 'SuspectedBypass',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackSources: { 'type': 'array', 'itemType': DescribeAiEngineEvidenceRequestsResponseBodyItemsAttackSources },
      evidenceId: 'string',
      host: 'string',
      httpStatus: 'number',
      impactType: 'string',
      method: 'string',
      nodeId: 'string',
      requestPath: 'string',
      requestTime: 'number',
      resource: 'string',
      suspectedBypass: 'number',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attackSources)) {
      $dara.Model.validateArray(this.attackSources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAiEngineEvidenceRequestsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of evidence requests.
   */
  items?: DescribeAiEngineEvidenceRequestsResponseBodyItems[];
  /**
   * @remarks
   * The number of entries to return on each page in a paging query. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page. If a next page exists, this field returns a value.
   * > If this parameter returns a value, it indicates that a next page exists. You can use the returned **NextToken** as a request parameter to obtain the data of the next page until no value is returned, which indicates that all data is obtained.
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
   * 01A1CEE2-*****9-019A-8B44-2*****C2C8
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of evidence requests that meet the query conditions.
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
      items: { 'type': 'array', 'itemType': DescribeAiEngineEvidenceRequestsResponseBodyItems },
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

