// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPluginClassesResponseBodyDataItems extends $dara.Model {
  alias?: string;
  description?: string;
  /**
   * @example
   * true
   */
  installed?: boolean;
  /**
   * @example
   * oauth
   */
  name?: string;
  /**
   * @example
   * pls-d4ghv6em1hkixxxxxxxx
   */
  pluginClassId?: string;
  /**
   * @example
   * pl-cvu6r4um1hkoxxxxxxxx
   */
  pluginId?: string;
  /**
   * @example
   * Success
   */
  publishStatus?: string;
  /**
   * @example
   * HigressOfficial
   */
  source?: string;
  /**
   * @example
   * 2.0.0
   */
  supportedMinGatewayVersion?: string;
  /**
   * @example
   * Auth
   */
  type?: string;
  /**
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
  items?: ListPluginClassesResponseBodyDataItems[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: ListPluginClassesResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
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

