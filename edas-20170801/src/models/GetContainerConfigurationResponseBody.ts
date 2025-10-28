// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContainerConfigurationResponseBodyContainerConfiguration extends $dara.Model {
  /**
   * @remarks
   * The context path of the Tomcat container.
   * 
   * @example
   * /
   */
  contextPath?: string;
  /**
   * @remarks
   * The application port number for the Tomcat container. The value specified in the application configuration is returned.
   * 
   * @example
   * 8080
   */
  httpPort?: number;
  /**
   * @remarks
   * The maximum number of threads in the Tomcat container.
   * 
   * *   If no instance group is specified, the configuration of the application is returned.
   * *   If no application is specified, the default configuration is returned.
   * 
   * @example
   * 400
   */
  maxThreads?: number;
  /**
   * @remarks
   * The Uniform Resource Identifier (URI) encoding scheme. Valid values: ISO-8859-1, GBK, GB2312, and UTF-8.
   * 
   * *   If no instance group is specified, the configuration of the application is returned.
   * *   If no application is specified, the default configuration is returned.
   * 
   * @example
   * ISO-8859-1
   */
  URIEncoding?: string;
  /**
   * @remarks
   * Indicates whether useBodyEncodingForURI is enabled in the Tomcat container.
   * 
   * *   If no instance group is specified, the configuration of the application is returned.
   * *   If no application is specified, the default configuration is returned.
   * 
   * @example
   * true
   */
  useBodyEncoding?: boolean;
  static names(): { [key: string]: string } {
    return {
      contextPath: 'ContextPath',
      httpPort: 'HttpPort',
      maxThreads: 'MaxThreads',
      URIEncoding: 'URIEncoding',
      useBodyEncoding: 'UseBodyEncoding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextPath: 'string',
      httpPort: 'number',
      maxThreads: 'number',
      URIEncoding: 'string',
      useBodyEncoding: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContainerConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The Tomcat configuration.
   */
  containerConfiguration?: GetContainerConfigurationResponseBodyContainerConfiguration;
  /**
   * @remarks
   * The message returned for the request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 34F8-FDG9-*****************
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      containerConfiguration: 'ContainerConfiguration',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      containerConfiguration: GetContainerConfigurationResponseBodyContainerConfiguration,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.containerConfiguration && typeof (this.containerConfiguration as any).validate === 'function') {
      (this.containerConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

