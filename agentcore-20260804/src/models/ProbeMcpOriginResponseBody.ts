// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProbeMcpOriginResponseBodyDataCoverage extends $dara.Model {
  /**
   * @remarks
   * The evidence-verified legacy or modern protocol. This field is empty during HTTP interface checks.
   * 
   * @example
   * modern
   */
  backendMcpProtocol?: string;
  /**
   * @remarks
   * Returns only non-sensitive names and excludes internal platform routing or network identities.
   */
  headerNames?: string[];
  /**
   * @remarks
   * The selected HTTP method for this check. This field is empty for direct connections.
   * 
   * @example
   * HEAD
   */
  method?: string;
  /**
   * @remarks
   * The redacted summary of the selected HTTP path for this check. This field is empty for direct connections.
   * 
   * @example
   * /mcp
   */
  path?: string;
  /**
   * @remarks
   * The evidence-verified MCP transport. This field is empty during HTTP interface checks.
   * 
   * @example
   * StreamableHTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The summary of the origin server target for this check. It does not contain sensitive query parameters or credentials.
   * 
   * @example
   * https://mcp.example.com/mcp
   */
  target?: string;
  /**
   * @remarks
   * The origin server check before creation is fixed to false, which does not indicate that the resource is ready.
   */
  viaGateway?: boolean;
  static names(): { [key: string]: string } {
    return {
      backendMcpProtocol: 'backendMcpProtocol',
      headerNames: 'headerNames',
      method: 'method',
      path: 'path',
      protocol: 'protocol',
      target: 'target',
      viaGateway: 'viaGateway',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendMcpProtocol: 'string',
      headerNames: { 'type': 'array', 'itemType': 'string' },
      method: 'string',
      path: 'string',
      protocol: 'string',
      target: 'string',
      viaGateway: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.headerNames)) {
      $dara.Model.validateArray(this.headerNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProbeMcpOriginResponseBodyDataError extends $dara.Model {
  /**
   * @remarks
   * Returns only bounded diagnostic codes. The original error body from the origin server is not returned.
   * 
   * @example
   * PROBE_TIMEOUT
   */
  code?: string;
  /**
   * @remarks
   * The trimmed and redacted diagnostic information. This excludes credentials or original responses.
   * 
   * @example
   * The probe deadline was exceeded.
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the operation is suitable for retry under a restricted policy. This does not trigger automatic retries.
   */
  retryable?: boolean;
  /**
   * @remarks
   * The error source, which can be MAGIC, ROUTER, NETWORK, ORIGIN, or UNKNOWN. This is determined solely based on actual evidence.
   * 
   * @example
   * UNKNOWN
   */
  source?: string;
  /**
   * @remarks
   * The detection or publishing stage where the error occurred.
   * 
   * @example
   * INITIALIZE
   */
  stage?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      retryable: 'retryable',
      source: 'source',
      stage: 'stage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      retryable: 'boolean',
      source: 'string',
      stage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProbeMcpOriginResponseBodyDataHttpResult extends $dara.Model {
  /**
   * @remarks
   * The connection status of the target. Valid values: PASSED, FAILED, NOT_RUN, or UNKNOWN. This is judged only based on the actual target connection evidence for this check.
   * 
   * @example
   * PASSED
   */
  connectionStatus?: string;
  /**
   * @remarks
   * The check result of the API definition. Valid values: PASSED, FAILED, or NOT_RUN. The value is NOT_RUN when no OpenAPI specification is available.
   * 
   * @example
   * PASSED
   */
  definitionStatus?: string;
  /**
   * @remarks
   * The actual HTTP status code received. This is empty if the request was not executed or no response was received.
   * 
   * @example
   * 405
   */
  httpStatusCode?: number;
  static names(): { [key: string]: string } {
    return {
      connectionStatus: 'connectionStatus',
      definitionStatus: 'definitionStatus',
      httpStatusCode: 'httpStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStatus: 'string',
      definitionStatus: 'string',
      httpStatusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProbeMcpOriginResponseBodyDataObservations extends $dara.Model {
  /**
   * @remarks
   * The backend MCP protocol policy. Valid values: legacy or modern.
   * 
   * @example
   * modern
   */
  backendMcpProtocol?: string;
  /**
   * @remarks
   * Indicates whether the origin server declares support for this combination. This is empty when there is no declaration evidence.
   */
  declared?: boolean;
  /**
   * @remarks
   * The list of declared versions. It retains only the date versions actually declared by the origin server and does not infer the full set from a single negotiation.
   */
  declaredVersions?: string[];
  /**
   * @remarks
   * The desensitized origin server or controlled subsequent endpoint. Sensitive query parameters are not returned.
   * 
   * @example
   * https://mcp.example.com/mcp
   */
  endpoint?: string;
  /**
   * @remarks
   * The negotiated version. For legacy, it is the negotiated version. For modern, it is the selected and verified date version. This is empty when not confirmed.
   * 
   * @example
   * 2025-03-26
   */
  negotiatedVersion?: string;
  /**
   * @remarks
   * The protocol. Valid values: SSE or StreamableHTTP. The modern policy is only combined with StreamableHTTP.
   * 
   * @example
   * StreamableHTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The session mode. Valid values: STATEFUL, STATELESS, NOT_APPLICABLE, or UNKNOWN. A direct legacy connection without a session is not automatically judged as failed.
   * 
   * @example
   * STATELESS
   */
  sessionMode?: string;
  /**
   * @remarks
   * The protocol verification status. Valid values: VERIFIED, UNSUPPORTED, FAILED, or UNKNOWN. UNSUPPORTED requires protocol evidence.
   * 
   * @example
   * VERIFIED
   */
  verificationStatus?: string;
  static names(): { [key: string]: string } {
    return {
      backendMcpProtocol: 'backendMcpProtocol',
      declared: 'declared',
      declaredVersions: 'declaredVersions',
      endpoint: 'endpoint',
      negotiatedVersion: 'negotiatedVersion',
      protocol: 'protocol',
      sessionMode: 'sessionMode',
      verificationStatus: 'verificationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendMcpProtocol: 'string',
      declared: 'boolean',
      declaredVersions: { 'type': 'array', 'itemType': 'string' },
      endpoint: 'string',
      negotiatedVersion: 'string',
      protocol: 'string',
      sessionMode: 'string',
      verificationStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.declaredVersions)) {
      $dara.Model.validateArray(this.declaredVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProbeMcpOriginResponseBodyDataRecommendation extends $dara.Model {
  /**
   * @remarks
   * The backend MCP protocol policy. Valid values: legacy or modern.
   * 
   * @example
   * modern
   */
  backendMcpProtocol?: string;
  /**
   * @remarks
   * The actual negotiated or selected and verified origin server MCP date version in YYYY-MM-DD format. This is null when not confirmed. It only displays the origin server protocol date metadata. It can be specified during creation and modified during updates. If omitted during an update, the current value is retained. It does not control backend requests or the external protocol of the gateway.
   * 
   * @example
   * 2025-03-26
   */
  originProtocolVersion?: string;
  /**
   * @remarks
   * The protocol. Valid values: SSE or StreamableHTTP. The modern policy is only combined with StreamableHTTP.
   * 
   * @example
   * StreamableHTTP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      backendMcpProtocol: 'backendMcpProtocol',
      originProtocolVersion: 'originProtocolVersion',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendMcpProtocol: 'string',
      originProtocolVersion: 'string',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProbeMcpOriginResponseBodyDataSelectedConfiguration extends $dara.Model {
  /**
   * @remarks
   * The backend MCP protocol policy. Valid values: legacy or modern.
   * 
   * @example
   * modern
   */
  backendMcpProtocol?: string;
  /**
   * @remarks
   * The actual negotiated or selected and verified origin server MCP date version in YYYY-MM-DD format. This is null when not confirmed. It only displays the origin server protocol date metadata. It can be specified during creation and modified during updates. If omitted during an update, the current value is retained. It does not control backend requests or the external protocol of the gateway.
   * 
   * @example
   * 2025-03-26
   */
  originProtocolVersion?: string;
  /**
   * @remarks
   * The protocol. Valid values: SSE or StreamableHTTP. The modern policy is only combined with StreamableHTTP.
   * 
   * @example
   * StreamableHTTP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      backendMcpProtocol: 'backendMcpProtocol',
      originProtocolVersion: 'originProtocolVersion',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendMcpProtocol: 'string',
      originProtocolVersion: 'string',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProbeMcpOriginResponseBodyDataTools extends $dara.Model {
  /**
   * @remarks
   * The input schema defined by the protocol, represented as a JSON string.
   * 
   * @example
   * {"type":"object","properties":{}}
   */
  inputSchema?: string;
  /**
   * @remarks
   * The output schema defined by the protocol, represented as a JSON string.
   * 
   * @example
   * {"type":"object","properties":{"total":{"type":"integer"}}}
   */
  outputSchema?: string;
  /**
   * @remarks
   * The untrusted description text returned by the origin server. It is escaped when displayed and is not executed as an instruction.
   * 
   * @example
   * List inventory items
   */
  toolDescription?: string;
  /**
   * @remarks
   * The declared name of the tool. Only metadata is displayed.
   * 
   * @example
   * list_inventory
   */
  toolName?: string;
  static names(): { [key: string]: string } {
    return {
      inputSchema: 'inputSchema',
      outputSchema: 'outputSchema',
      toolDescription: 'toolDescription',
      toolName: 'toolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputSchema: 'string',
      outputSchema: 'string',
      toolDescription: 'string',
      toolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProbeMcpOriginResponseBodyDataWarnings extends $dara.Model {
  /**
   * @remarks
   * The structured identifier for the detection limitation.
   * 
   * @example
   * TOOLS_TRUNCATED
   */
  code?: string;
  /**
   * @remarks
   * Explains limitations such as UNKNOWN, not executed, or truncated. This excludes credentials and original responses.
   * 
   * @example
   * The tool preview limit was reached; protocol verification succeeded.
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProbeMcpOriginResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The check coverage. It describes the target, protocol, or HTTP request conditions for this check and does not prove that the formal gateway and other APIs are available.
   */
  coverage?: ProbeMcpOriginResponseBodyDataCoverage;
  /**
   * @remarks
   * Indicates origin server failures. This field is empty upon success. Origin server 401 errors or connection failures are not uniformly mapped to API exceptions.
   */
  error?: ProbeMcpOriginResponseBodyDataError;
  /**
   * @remarks
   * The HTTP check result. This is returned only for the HTTP type. The definition and actual request status are separated. This is null for direct connections. A 2xx status code only proves the success of this request and does not prove that business functions or other APIs are available.
   */
  httpResult?: ProbeMcpOriginResponseBodyDataHttpResult;
  /**
   * @remarks
   * The declared and actual test results for controlled endpoints of a single origin server. This is an empty array for the HTTP type.
   */
  observations?: ProbeMcpOriginResponseBodyDataObservations[];
  /**
   * @remarks
   * The ID used only to correlate desensitized logs. It is not used for queries, authorization, binding MCPs, or reusing check evidence.
   * 
   * @example
   * mcpprobe-8f7a9d02-8e5b-4376-8d2b-6a9cb3a42b16
   */
  probeId?: string;
  /**
   * @remarks
   * The observation time in ISO 8601 UTC format.
   * 
   * @example
   * 2026-11-19T08:30:00Z
   */
  probedAt?: string;
  /**
   * @remarks
   * The recommended protocol combination. It only includes verified combinations that the platform can access. This is empty when no combinations are available or for the HTTP type.
   */
  recommendation?: ProbeMcpOriginResponseBodyDataRecommendation;
  /**
   * @remarks
   * The combination actually used for tool queries. Specifying this does not mean verification passed. This is empty for the HTTP type.
   */
  selectedConfiguration?: ProbeMcpOriginResponseBodyDataSelectedConfiguration;
  /**
   * @remarks
   * The stage of the check. Valid values: AUTHORIZE, VALIDATE, RATE_LIMIT, NETWORK, NETWORK_CONTEXT, CONNECT, DISCOVER, INITIALIZE, SESSION_CHECK, TOOLS_LIST, HTTP_DEFINITION, HTTP_REQUEST, CLEANUP, EXECUTION, or COMPLETE.
   * 
   * @example
   * COMPLETE
   */
  stage?: string;
  /**
   * @remarks
   * The check result of the origin server. Valid values: SUCCESS, PARTIAL, or FAILED. SUCCESS indicates that the protocol check passed but no capabilities were declared or no tools capability exists. A completely empty tool list also passes. PARTIAL indicates that the tool query failed or was truncated. For HTTP, PARTIAL indicates that only the definition was checked or required evidence is unknown.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The restricted metadata list for this check. Tools are not executed. An empty array is returned if tools are not declared, the list is completely empty, or the type is HTTP. Refer to toolsStatus and toolsComplete for judgment.
   */
  tools?: ProbeMcpOriginResponseBodyDataTools[];
  /**
   * @remarks
   * Indicates whether the tool list is complete. The value is true for COMPLETE or EMPTY, and false for TRUNCATED. The value is null if not queried, not declared, or failed. Completeness cannot be determined solely by an empty array.
   */
  toolsComplete?: boolean;
  /**
   * @remarks
   * The tool query status. Valid values: NOT_RUN, NOT_DECLARED, EMPTY, COMPLETE, TRUNCATED, or FAILED. If tools are not declared, the value is NOT_DECLARED and tools/list is not executed. For the HTTP type, the value is NOT_RUN.
   * 
   * @example
   * COMPLETE
   */
  toolsStatus?: string;
  /**
   * @remarks
   * The coverage and completeness limitations of this check.
   */
  warnings?: ProbeMcpOriginResponseBodyDataWarnings[];
  static names(): { [key: string]: string } {
    return {
      coverage: 'coverage',
      error: 'error',
      httpResult: 'httpResult',
      observations: 'observations',
      probeId: 'probeId',
      probedAt: 'probedAt',
      recommendation: 'recommendation',
      selectedConfiguration: 'selectedConfiguration',
      stage: 'stage',
      status: 'status',
      tools: 'tools',
      toolsComplete: 'toolsComplete',
      toolsStatus: 'toolsStatus',
      warnings: 'warnings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverage: ProbeMcpOriginResponseBodyDataCoverage,
      error: ProbeMcpOriginResponseBodyDataError,
      httpResult: ProbeMcpOriginResponseBodyDataHttpResult,
      observations: { 'type': 'array', 'itemType': ProbeMcpOriginResponseBodyDataObservations },
      probeId: 'string',
      probedAt: 'string',
      recommendation: ProbeMcpOriginResponseBodyDataRecommendation,
      selectedConfiguration: ProbeMcpOriginResponseBodyDataSelectedConfiguration,
      stage: 'string',
      status: 'string',
      tools: { 'type': 'array', 'itemType': ProbeMcpOriginResponseBodyDataTools },
      toolsComplete: 'boolean',
      toolsStatus: 'string',
      warnings: { 'type': 'array', 'itemType': ProbeMcpOriginResponseBodyDataWarnings },
    };
  }

  validate() {
    if(this.coverage && typeof (this.coverage as any).validate === 'function') {
      (this.coverage as any).validate();
    }
    if(this.error && typeof (this.error as any).validate === 'function') {
      (this.error as any).validate();
    }
    if(this.httpResult && typeof (this.httpResult as any).validate === 'function') {
      (this.httpResult as any).validate();
    }
    if(Array.isArray(this.observations)) {
      $dara.Model.validateArray(this.observations);
    }
    if(this.recommendation && typeof (this.recommendation as any).validate === 'function') {
      (this.recommendation as any).validate();
    }
    if(this.selectedConfiguration && typeof (this.selectedConfiguration as any).validate === 'function') {
      (this.selectedConfiguration as any).validate();
    }
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    if(Array.isArray(this.warnings)) {
      $dara.Model.validateArray(this.warnings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProbeMcpOriginResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the API operation. SUCCESS indicates that the operation completed normally. For the origin server result, see data.status.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The read-only, one-time, and bounded probe result. It is not persisted and is not associated with subsequently created MCPs.
   */
  data?: ProbeMcpOriginResponseBodyData;
  /**
   * @remarks
   * The HTTP status code of the POP API request.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The processing result of the API operation, excluding the original response from the origin server.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID used to correlate this API call.
   * 
   * @example
   * 8F7A9D02-8E5B-4376-8D2B-6A9CB3A42B16
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API operation was processed successfully. This means that authorization, parameter validation, and execution mechanisms completed normally, which does not equate to a successful origin server check.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ProbeMcpOriginResponseBodyData,
      httpStatusCode: 'number',
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

