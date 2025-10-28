// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContainerConfigurationResponseBodyContainerConfiguration extends $dara.Model {
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
   * The application port number for the Tomcat container.
   * 
   * @example
   * 8080
   */
  httpPort?: number;
  /**
   * @remarks
   * The maximum number of threads.
   * 
   * @example
   * 20
   */
  maxThreads?: number;
  /**
   * @remarks
   * The URI encoding scheme. Valid values: ISO-8859-1, GBK, GB2312, and UTF-8.
   * 
   * @example
   * ISO-8859-1
   */
  URIEncoding?: string;
  /**
   * @remarks
   * Indicates whether useBodyEncodingForURI is enabled.
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

export class UpdateContainerConfigurationResponseBody extends $dara.Model {
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
   * The configuration of the Tomcat container.
   */
  containerConfiguration?: UpdateContainerConfigurationResponseBodyContainerConfiguration;
  /**
   * @remarks
   * The additional information that is returned.
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
   * D16979DC-4D42-***************
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
      containerConfiguration: UpdateContainerConfigurationResponseBodyContainerConfiguration,
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

