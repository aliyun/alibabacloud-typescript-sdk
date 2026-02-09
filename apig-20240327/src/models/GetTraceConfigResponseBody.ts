// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTraceConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether tracing analysis is enabled. Valid values: true and false
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The sampling rate.
   * 
   * @example
   * 50
   */
  sampleRatio?: number;
  /**
   * @remarks
   * The service ID. This parameter exists when the traceType value is SKYWALKING.
   * 
   * @example
   * ss-co370icmjeu****
   */
  serviceId?: string;
  /**
   * @remarks
   * The service port. This parameter exists when the traceType value is SKYWALKING.
   * 
   * @example
   * 8090
   */
  servicePort?: string;
  /**
   * @remarks
   * The type of tracing analysis. Valid values:
   * 
   * *   XTRACE
   * *   SKYWALKING
   * *   OPENTELEMETRY
   * *   OTSKYWALKING
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
   * The response code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetTraceConfigResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2F46B9E7-67EF-5C8A-BA52-D38D5B32AF2C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true false
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

