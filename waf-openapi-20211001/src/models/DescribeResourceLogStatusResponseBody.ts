// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceLogStatusResponseBodyResultTraceConfig extends $dara.Model {
  ratePerMille?: number;
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
   * The name of the protected object.
   * 
   * @example
   * alb-wewbb23dfsetetcic****
   */
  resource?: string;
  /**
   * @remarks
   * Indicates whether log collection is enabled for the protected object. Valid values:
   * 
   * - **true**: Log collection is enabled.
   * 
   * - **false**: Log collection is disabled.
   * 
   * @example
   * true
   */
  status?: boolean;
  traceConfig?: DescribeResourceLogStatusResponseBodyResultTraceConfig;
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
   * The ID of the request.
   * 
   * @example
   * 0DABF8AB-2321-5F8D-A8D7-922D757FBFFE
   */
  requestId?: string;
  /**
   * @remarks
   * The log status information of protected objects.
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

