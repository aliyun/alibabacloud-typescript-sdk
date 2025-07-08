// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetXtraceTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The internal error code. This parameter is returned only when an error occurs.
   * 
   * @example
   * InvalidInputParams
   */
  code?: string;
  /**
   * @remarks
   * The gRPC endpoint used for uploading ARM traces.
   * 
   * @example
   * http://tracing-analysis-dc-hz.aliyuncs.com:8090
   */
  grpcEndpoint?: string;
  /**
   * @remarks
   * The internal gRPC endpoint used for uploading ARMS traces used by Alibaba Cloud.
   * 
   * @example
   * http://tracing-analysis-dc-hz-internal.aliyuncs.com:8090
   */
  grpcInternalEndpoint?: string;
  /**
   * @remarks
   * The endpoint used for uploading ARMS traces.
   * 
   * @example
   * http://tracing-analysis-dc-hz.aliyuncs.com/aaa@bbb@ccc/api/otlp/traces
   */
  httpEndpoint?: string;
  /**
   * @remarks
   * The internal endpoint used for uploading ARMS traces used by Alibaba Cloud.
   * 
   * @example
   * http://tracing-analysis-dc-hz-internal.aliyuncs.com/aaa@bbb@ccc/api/otlp/traces
   */
  httpInternalEndpoint?: string;
  /**
   * @remarks
   * The error message. This parameter is returned only when an error occurs.
   * 
   * @example
   * get_xtrace_token: failed, ERROR: NoPermission
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6A87228C-969A-1381-98CF-AE07AE630FA5
   */
  requestId?: string;
  /**
   * @remarks
   * The token used for uploading ARMS traces.
   * 
   * @example
   * h1abcw7@5abcb_h1abcw7@5abc01
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      grpcEndpoint: 'GrpcEndpoint',
      grpcInternalEndpoint: 'GrpcInternalEndpoint',
      httpEndpoint: 'HttpEndpoint',
      httpInternalEndpoint: 'HttpInternalEndpoint',
      message: 'Message',
      requestId: 'RequestId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      grpcEndpoint: 'string',
      grpcInternalEndpoint: 'string',
      httpEndpoint: 'string',
      httpInternalEndpoint: 'string',
      message: 'string',
      requestId: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

