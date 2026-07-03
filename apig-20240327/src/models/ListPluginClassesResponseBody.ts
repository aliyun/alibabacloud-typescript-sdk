// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPluginClassesResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The plug-in alias.
   * 
   * @example
   * OAuth2 认证
   */
  alias?: string;
  /**
   * @remarks
   * The plug-in description.
   * 
   * @example
   * 基于 OAuth2 实现身份认证和鉴权。
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the plug-in is installed.
   * 
   * @example
   * true
   */
  installed?: boolean;
  /**
   * @remarks
   * The plug-in name.
   * 
   * @example
   * oauth
   */
  name?: string;
  /**
   * @remarks
   * The plug-in type ID.
   * 
   * @example
   * pls-d4ghv6em1hkixxxxxxxx
   */
  pluginClassId?: string;
  /**
   * @remarks
   * The plug-in ID.
   * 
   * @example
   * pl-cvu6r4um1hkoxxxxxxxx
   */
  pluginId?: string;
  /**
   * @remarks
   * The publish status.
   * 
   * @example
   * Success
   */
  publishStatus?: string;
  /**
   * @remarks
   * The plug-in source.
   * 
   * @example
   * HigressOfficial
   */
  source?: string;
  /**
   * @remarks
   * The minimum gateway version supported by the plug-in.
   * 
   * @example
   * 2.0.0
   */
  supportedMinGatewayVersion?: string;
  /**
   * @remarks
   * The plug-in type.
   * 
   * @example
   * Auth
   */
  type?: string;
  /**
   * @remarks
   * The plug-in version.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      description: 'description',
      installed: 'installed',
      name: 'name',
      pluginClassId: 'pluginClassId',
      pluginId: 'pluginId',
      publishStatus: 'publishStatus',
      source: 'source',
      supportedMinGatewayVersion: 'supportedMinGatewayVersion',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      description: 'string',
      installed: 'boolean',
      name: 'string',
      pluginClassId: 'string',
      pluginId: 'string',
      publishStatus: 'string',
      source: 'string',
      supportedMinGatewayVersion: 'string',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPluginClassesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The result objects.
   */
  items?: ListPluginClassesResponseBodyDataItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListPluginClassesResponseBodyDataItems },
      pageNumber: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPluginClassesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListPluginClassesResponseBodyData;
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
   * 61EBF577-1601-51E1-B136-9CD6xxxxxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListPluginClassesResponseBodyData,
      message: 'string',
      requestId: 'string',
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

