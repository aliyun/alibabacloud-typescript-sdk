// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiHistoryResponseBodyRequestConfig extends $dara.Model {
  /**
   * @remarks
   * The server data transmission method used for POST and PUT requests. Valid values: FORM and STREAM. FORM indicates that data in key-value pairs is transmitted as forms. STREAM indicates that data is transmitted as byte streams. This parameter takes effect only when the RequestMode parameter is set to MAPPING.
   * 
   * @example
   * STREAM
   */
  bodyFormat?: string;
  /**
   * @remarks
   * The body model.
   * 
   * @example
   * https://apigateway.aliyun.com/models/3a240a1XXXXXXXXd9ab1bf7e947b4095/9e2df550e85b4XXXXXXXX619eaab
   */
  bodyModel?: string;
  /**
   * @remarks
   * Whether to escape the Path parameter, if true, the [param] on the Path will be treated as a regular character.
   * 
   * @example
   * true
   */
  escapePathParam?: boolean;
  /**
   * @remarks
   * The description of the request body.
   * 
   * @example
   * fwefwef
   */
  postBodyDescription?: string;
  /**
   * @remarks
   * The HTTP method. Valid values: GET, POST, DELETE, PUT, HEADER, TRACE, PATCH, CONNECT, and OPTIONS.
   * 
   * @example
   * POST
   */
  requestHttpMethod?: string;
  /**
   * @remarks
   * The request mode. Valid values:
   * 
   * *   MAPPING: Parameters are mapped. Unknown parameters are filtered out.
   * *   PASSTHROUGH: Parameters are passed through.
   * *   MAPPING_PASSTHROUGH: Parameters are mapped. Unknown parameters are passed through.
   * 
   * @example
   * MAPPING
   */
  requestMode?: string;
  /**
   * @remarks
   * API path
   * 
   * @example
   * /api/billing/test/[type]
   */
  requestPath?: string;
  /**
   * @remarks
   * The protocol type supported by the API. Valid values: HTTP, HTTPS, and WebSocket. Separate multiple values with commas (,), such as "HTTP,HTTPS".
   * 
   * @example
   * HTTP
   */
  requestProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      bodyFormat: 'BodyFormat',
      bodyModel: 'BodyModel',
      escapePathParam: 'EscapePathParam',
      postBodyDescription: 'PostBodyDescription',
      requestHttpMethod: 'RequestHttpMethod',
      requestMode: 'RequestMode',
      requestPath: 'RequestPath',
      requestProtocol: 'RequestProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyFormat: 'string',
      bodyModel: 'string',
      escapePathParam: 'boolean',
      postBodyDescription: 'string',
      requestHttpMethod: 'string',
      requestMode: 'string',
      requestPath: 'string',
      requestProtocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

