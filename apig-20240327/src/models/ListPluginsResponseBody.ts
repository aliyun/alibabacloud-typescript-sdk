// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPluginsResponseBodyDataItemsAttachmentInfo extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the plugin is enabled.
   * 
   * @example
   * false
   */
  enable?: string;
  /**
   * @remarks
   * The plugin attachment ID.
   * 
   * @example
   * pa-ct2irn6m1hkreaen0t40
   */
  pluginAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      pluginAttachmentId: 'pluginAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'string',
      pluginAttachmentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPluginsResponseBodyDataItemsGatewayInfo extends $dara.Model {
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * gw-cq7og15lhtxx6qasrj60
   */
  gatewayId?: string;
  /**
   * @remarks
   * The gateway name.
   * 
   * @example
   * apitest-gw
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPluginsResponseBodyDataItemsPluginClassInfo extends $dara.Model {
  /**
   * @remarks
   * The alias.
   * 
   * @example
   * 基于 Key 限流
   */
  alias?: string;
  /**
   * @remarks
   * The execution priority.
   * 
   * @example
   * 999
   */
  executePriority?: string;
  /**
   * @remarks
   * The execution stage.
   * 
   * @example
   * AUTHZ
   */
  executeStage?: string;
  /**
   * @remarks
   * The plugin name.
   * 
   * @example
   * key-rate-limit
   */
  name?: string;
  /**
   * @remarks
   * The plugin type ID.
   * 
   * @example
   * pls-cqebrgh46ppatmpri
   */
  pluginClassId?: string;
  /**
   * @remarks
   * The plugin source.
   * 
   * @example
   * HigressOfficial
   */
  source?: string;
  /**
   * @remarks
   * The version.
   * 
   * @example
   * 2.0.3
   */
  version?: string;
  /**
   * @remarks
   * The version description.
   * 
   * @example
   * 版本描述
   */
  versionDescription?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      executePriority: 'executePriority',
      executeStage: 'executeStage',
      name: 'name',
      pluginClassId: 'pluginClassId',
      source: 'source',
      version: 'version',
      versionDescription: 'versionDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      executePriority: 'string',
      executeStage: 'string',
      name: 'string',
      pluginClassId: 'string',
      source: 'string',
      version: 'string',
      versionDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPluginsResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The plugin attachment information.
   */
  attachmentInfo?: ListPluginsResponseBodyDataItemsAttachmentInfo;
  /**
   * @remarks
   * The gateway information.
   */
  gatewayInfo?: ListPluginsResponseBodyDataItemsGatewayInfo;
  /**
   * @remarks
   * The plugin type information.
   */
  pluginClassInfo?: ListPluginsResponseBodyDataItemsPluginClassInfo;
  /**
   * @remarks
   * The plugin ID.
   * 
   * @example
   * pl-cvu6r4um1hko3b3ti0a0
   */
  pluginId?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentInfo: 'attachmentInfo',
      gatewayInfo: 'gatewayInfo',
      pluginClassInfo: 'pluginClassInfo',
      pluginId: 'pluginId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentInfo: ListPluginsResponseBodyDataItemsAttachmentInfo,
      gatewayInfo: ListPluginsResponseBodyDataItemsGatewayInfo,
      pluginClassInfo: ListPluginsResponseBodyDataItemsPluginClassInfo,
      pluginId: 'string',
    };
  }

  validate() {
    if(this.attachmentInfo && typeof (this.attachmentInfo as any).validate === 'function') {
      (this.attachmentInfo as any).validate();
    }
    if(this.gatewayInfo && typeof (this.gatewayInfo as any).validate === 'function') {
      (this.gatewayInfo as any).validate();
    }
    if(this.pluginClassInfo && typeof (this.pluginClassInfo as any).validate === 'function') {
      (this.pluginClassInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPluginsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The plugin list.
   */
  items?: ListPluginsResponseBodyDataItems[];
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
   * The page size.
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
      items: { 'type': 'array', 'itemType': ListPluginsResponseBodyDataItems },
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

export class ListPluginsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListPluginsResponseBodyData;
  /**
   * @remarks
   * The response message.
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
   * 168BA42D-F822-569D-A67F-FC59E6ABC2B1
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
      data: ListPluginsResponseBodyData,
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

