// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiResponseBodyRequestConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter takes effect only when the RequestMode parameter is set to MAPPING.********
   * 
   * The server data transmission method used for POST and PUT requests. Valid values: FORM and STREAM. FORM indicates that data in key-value pairs is transmitted as forms. STREAM indicates that data is transmitted as byte streams.
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
   * https://apigateway.aliyun.com/models/3a240a127dcc4afd9ab1bf7e947b4095/9e2df550e85b4121a79ec33e2619eaab
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
   * The HTTP method used to make the request. Valid values: GET, POST, DELETE, PUT, HEADER, TRACE, PATCH, CONNECT, and OPTIONS.
   * 
   * @example
   * POST
   */
  requestHttpMethod?: string;
  /**
   * @remarks
   * The request mode. Valid values: MAPPING and PASSTHROUGH.
   * 
   * @example
   * MAPPING
   */
  requestMode?: string;
  /**
   * @remarks
   * The API request path. If the complete API URL is `http://api.a.com:8080/object/add?key1=value1&key2=value2`, the API request path is ` /object/add  `.
   * 
   * @example
   * /api/billing/test/[type]
   */
  requestPath?: string;
  /**
   * @remarks
   * The protocol type supported by the API. Valid values: HTTP and HTTPS. Separate multiple values with commas (,), such as "HTTP,HTTPS".
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

