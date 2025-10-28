// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWebContainerConfigResponseBodyWebContainerConfig extends $dara.Model {
  /**
   * @remarks
   * The type of the context path.
   * 
   * @example
   * root
   */
  contextInputType?: string;
  /**
   * @remarks
   * The context path.
   * 
   * @example
   * ROOT
   */
  contextPath?: string;
  /**
   * @remarks
   * The HTTP service port.
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
   * 500
   */
  maxThreads?: number;
  /**
   * @remarks
   * The content of the server.xml file customized by using advanced configurations.
   * 
   * @example
   * <Server port=*****
   */
  serverXml?: string;
  /**
   * @remarks
   * The URI encoding scheme.
   * 
   * @example
   * ISO-8859-1
   */
  uriEncoding?: string;
  /**
   * @remarks
   * Indicates whether advanced configurations are used to customize the server.xml file.
   * 
   * @example
   * true
   */
  useAdvancedServerXml?: boolean;
  /**
   * @remarks
   * Indicates whether the encoding scheme specified in the request body is used for uniform resource identifier (URI) query parameters.
   * 
   * @example
   * true
   */
  useBodyEncoding?: boolean;
  /**
   * @remarks
   * Indicates whether the default configurations are used.
   * 
   * @example
   * true
   */
  useDefaultConfig?: boolean;
  static names(): { [key: string]: string } {
    return {
      contextInputType: 'ContextInputType',
      contextPath: 'ContextPath',
      httpPort: 'HttpPort',
      maxThreads: 'MaxThreads',
      serverXml: 'ServerXml',
      uriEncoding: 'UriEncoding',
      useAdvancedServerXml: 'UseAdvancedServerXml',
      useBodyEncoding: 'UseBodyEncoding',
      useDefaultConfig: 'UseDefaultConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextInputType: 'string',
      contextPath: 'string',
      httpPort: 'number',
      maxThreads: 'number',
      serverXml: 'string',
      uriEncoding: 'string',
      useAdvancedServerXml: 'boolean',
      useBodyEncoding: 'boolean',
      useDefaultConfig: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebContainerConfigResponseBody extends $dara.Model {
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
   * 4823-bhjf-23u4-eiufh
   */
  requestId?: string;
  /**
   * @remarks
   * The Tomcat configurations of the application.
   */
  webContainerConfig?: GetWebContainerConfigResponseBodyWebContainerConfig;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      webContainerConfig: 'WebContainerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      webContainerConfig: GetWebContainerConfigResponseBodyWebContainerConfig,
    };
  }

  validate() {
    if(this.webContainerConfig && typeof (this.webContainerConfig as any).validate === 'function') {
      (this.webContainerConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

