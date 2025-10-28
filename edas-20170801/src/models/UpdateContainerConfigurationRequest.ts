// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContainerConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * c627c157-560d-43ff-************
   */
  appId?: string;
  /**
   * @remarks
   * The context path of the Tomcat container. The context path can be an empty string, a null WAR package name, a root directory, or other custom non-empty strings. It can contain letters, digits, hyphens (-), and underscores (_). Take note of the following items:
   * 
   * *   If this parameter is not specified when you configure the application instance group, the configuration of the application is applied.
   * *   If this parameter is not specified when you configure the Tomcat container for an application, the root directory `/` is used.
   * 
   * @example
   * /
   */
  contextPath?: string;
  /**
   * @remarks
   * The ID of the application instance group.
   * 
   * *   If an ID is specified, this operation configures the Tomcat container for the specified application instance group.
   * *   If you set this parameter to "", this operation configures the Tomcat container for the application.
   * 
   * @example
   * 8123db90-880f-**************
   */
  groupId?: string;
  /**
   * @remarks
   * The application port number for the Tomcat container. Take note of the following items:
   * 
   * *   If this parameter is not specified when you configure the application instance group, the configuration of the application is applied.
   * *   If this parameter is not specified when you configure the application, the default port 8080 is applied.
   * 
   * @example
   * 8080
   */
  httpPort?: number;
  /**
   * @remarks
   * The maximum number of threads. Take note of the following items:
   * 
   * *   If this parameter is not specified when you configure the application instance group, the configuration of the application is applied.
   * *   If this parameter is not specified when you configure the application, the default value 250 is applied.
   * 
   * @example
   * 20
   */
  maxThreads?: number;
  /**
   * @remarks
   * The uniform resource identifier (URI) encoding scheme. Valid values: ISO-8859-1, GBK, GB2312, and UTF-8. Take note of the following items:
   * 
   * *   If this parameter is not specified when you configure the application instance group, the configuration of the application is applied.
   * *   If this parameter is not specified when you configure the application, the default URI encoding scheme in the Tomcat container is applied.
   * 
   * @example
   * ISO-8859-1
   */
  URIEncoding?: string;
  /**
   * @remarks
   * Specifies whether to use the encoding scheme specified in the request body for URI query parameters. Take note of the following items:
   * 
   * *   If this parameter is not specified when you configure the application instance group, the configuration of the application is applied.
   * *   If this parameter is not specified when you configure the application, the default value false is applied.
   * 
   * @example
   * true
   */
  useBodyEncoding?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      contextPath: 'ContextPath',
      groupId: 'GroupId',
      httpPort: 'HttpPort',
      maxThreads: 'MaxThreads',
      URIEncoding: 'URIEncoding',
      useBodyEncoding: 'UseBodyEncoding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      contextPath: 'string',
      groupId: 'string',
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

