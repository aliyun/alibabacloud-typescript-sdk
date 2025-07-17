// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTraceConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Whether to Enable Tracing:
   * true: Enabled
   * false: Disabled
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Sampling Rate
   * 
   * @example
   * 50
   */
  sampleRatio?: number;
  /**
   * @remarks
   * Service ID, present when the tracing type is SKYWALKING
   * 
   * @example
   * ss-co370icmjeu****
   */
  serviceId?: string;
  /**
   * @remarks
   * 服务端口，链路追踪类型为SKYWALKING时存在该参数
   * 
   * @example
   * 8090
   */
  servicePort?: string;
  /**
   * @remarks
   * Tracing Type:
   * - XTRACE
   * - SKYWALKING
   * - OPENTELEMETRY
   * - OTSKYWALKING
   * 
   * @example
   * SKYWALKING
   */
  traceType?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      sampleRatio: 'sampleRatio',
      serviceId: 'serviceId',
      servicePort: 'servicePort',
      traceType: 'traceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      sampleRatio: 'number',
      serviceId: 'string',
      servicePort: 'string',
      traceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response Code
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Response Data
   */
  data?: GetTraceConfigResponseBodyData;
  /**
   * @remarks
   * Error Message
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 2F46B9E7-67EF-5C8A-BA52-D38D5B32AF2C
   */
  requestId?: string;
  /**
   * @remarks
   * Boolean	Request Result, with the following values:
   * true: Request succeeded.
   * false: Request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetTraceConfigResponseBodyData,
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

