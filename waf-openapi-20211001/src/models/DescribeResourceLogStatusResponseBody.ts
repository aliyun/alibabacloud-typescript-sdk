// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceLogStatusResponseBodyResultTraceConfig extends $dara.Model {
  /**
   * @remarks
   * The per-mille sampling ratio for Tracing Analysis.
   * 
   * @example
   * 90
   */
  ratePerMille?: number;
  /**
   * @remarks
   * The Hybrid Cloud Monitoring 2.0 workspace.
   * 
   * @example
   * cms-test
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      ratePerMille: 'RatePerMille',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ratePerMille: 'number',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceLogStatusResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The queried protected object.
   * 
   * @example
   * alb-wewbb23dfsetetcic****
   */
  resource?: string;
  /**
   * @remarks
   * The log enabling status of the protected object. Valid values:
   *  
   * - **true**: Logging is enabled.
   * 
   * - **false**: Logging is disabled.
   * 
   * @example
   * true
   */
  status?: boolean;
  /**
   * @remarks
   * The Tracing Analysis configuration.
   */
  traceConfig?: DescribeResourceLogStatusResponseBodyResultTraceConfig;
  /**
   * @remarks
   * The Tracing Analysis status. Valid values:
   *  
   * - **true**: Tracing Analysis is enabled.
   * 
   * - **false**: Tracing Analysis is shutdown.
   * 
   * @example
   * true
   */
  traceStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
      status: 'Status',
      traceConfig: 'TraceConfig',
      traceStatus: 'TraceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: 'string',
      status: 'boolean',
      traceConfig: DescribeResourceLogStatusResponseBodyResultTraceConfig,
      traceStatus: 'boolean',
    };
  }

  validate() {
    if(this.traceConfig && typeof (this.traceConfig as any).validate === 'function') {
      (this.traceConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceLogStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0DABF8AB-2321-5F8D-A8D7-922D757FBFFE
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: DescribeResourceLogStatusResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeResourceLogStatusResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

