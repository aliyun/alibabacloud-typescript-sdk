// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAiEngineEvidenceRequestResponseBodyAttackSourcesSources extends $dara.Model {
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
   * 1.1.1.1
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

export class DescribeAiEngineEvidenceRequestResponseBodyAttackSources extends $dara.Model {
  /**
   * @remarks
   * The list of sources of this type.
   */
  sources?: DescribeAiEngineEvidenceRequestResponseBodyAttackSourcesSources[];
  /**
   * @remarks
   * The type of the attack source.
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
      sources: { 'type': 'array', 'itemType': DescribeAiEngineEvidenceRequestResponseBodyAttackSourcesSources },
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

export class DescribeAiEngineEvidenceRequestResponseBody extends $dara.Model {
  /**
   * @remarks
   * The AI interpretation result in the specified language, in Markdown format.
   * 
   * @example
   * This request has SQL injection risk.
   */
  aiInterpretation?: string;
  /**
   * @remarks
   * The list of attack source groups for the request.
   */
  attackSources?: DescribeAiEngineEvidenceRequestResponseBodyAttackSources[];
  /**
   * @remarks
   * The evidence ID.
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
   * - **challenge**: The request triggers a challenge.
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
   * The ID of the associated node, which corresponds to the NodeId in the node list.
   * 
   * @example
   * node-109-04
   */
  nodeId?: string;
  /**
   * @remarks
   * The request content.
   * 
   * @example
   * GET /api/orders/query?id=1%27 HTTP/1.1
   */
  request?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 01A***2-1219-019A-8B44-255*****2C8
   */
  requestId?: string;
  /**
   * @remarks
   * The de-identified request path.
   * 
   * @example
   * /api/orders/query
   */
  requestPath?: string;
  /**
   * @remarks
   * The time when the original request was made. The time is a Unix timestamp in milliseconds.
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
   * www.example.com-waf
   */
  resource?: string;
  /**
   * @remarks
   * The response content.
   * 
   * @example
   * HTTP/1.1 500 Internal Server Error
   */
  response?: string;
  /**
   * @remarks
   * Specifies whether the request is a suspected bypass. Valid values:
   * 
   * - **1**: The request is a suspected bypass.
   * - **0**: The request is not a bypass.
   * 
   * @example
   * 1
   */
  suspectedBypass?: number;
  /**
   * @remarks
   * The trace ID of the original request. The ID can be up to 128 ASCII characters in length.
   * 
   * @example
   * trace-20241025-109-04
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      aiInterpretation: 'AiInterpretation',
      attackSources: 'AttackSources',
      evidenceId: 'EvidenceId',
      host: 'Host',
      httpStatus: 'HttpStatus',
      impactType: 'ImpactType',
      method: 'Method',
      nodeId: 'NodeId',
      request: 'Request',
      requestId: 'RequestId',
      requestPath: 'RequestPath',
      requestTime: 'RequestTime',
      resource: 'Resource',
      response: 'Response',
      suspectedBypass: 'SuspectedBypass',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiInterpretation: 'string',
      attackSources: { 'type': 'array', 'itemType': DescribeAiEngineEvidenceRequestResponseBodyAttackSources },
      evidenceId: 'string',
      host: 'string',
      httpStatus: 'number',
      impactType: 'string',
      method: 'string',
      nodeId: 'string',
      request: 'string',
      requestId: 'string',
      requestPath: 'string',
      requestTime: 'number',
      resource: 'string',
      response: 'string',
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

