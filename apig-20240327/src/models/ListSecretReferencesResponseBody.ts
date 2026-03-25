// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecretReferencesResponseBodyDataItemsPluginConfig extends $dara.Model {
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
   * pls-xxxxxxxx
   */
  pluginClassId?: string;
  /**
   * @remarks
   * The plug-in ID.
   * 
   * @example
   * pl-d4ijk56m1hkhxxxxxxxx
   */
  pluginId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      pluginClassId: 'pluginClassId',
      pluginId: 'pluginId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pluginClassId: 'string',
      pluginId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretReferencesResponseBodyDataItemsServiceConfig extends $dara.Model {
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * myService
   */
  name?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * svc-cvgbtcmm1hkmxxxxxxxx
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      serviceId: 'serviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      serviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretReferencesResponseBodyDataItemsConsumerConfig extends $dara.Model {
  /**
   * @remarks
   * The consumer ID.
   * 
   * @example
   * cs-d0iltnem1hkhxxxxxxxx
   */
  consumerId?: string;
  /**
   * @remarks
   * The consumer name.
   * 
   * @example
   * myconsumer
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      consumerId: 'consumerId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'string',
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

export class ListSecretReferencesResponseBodyDataItemsMcpServerConfig extends $dara.Model {
  /**
   * @remarks
   * The HTTP API ID.
   * 
   * @example
   * api-d2vv43em201hxxxxxxxx
   */
  httpApiId?: string;
  /**
   * @remarks
   * The route name.
   * 
   * @example
   * mcp
   */
  name?: string;
  /**
   * @remarks
   * The route ID.
   * 
   * @example
   * hr-cv0i5oum1hkhxxxxxxxx
   */
  routeId?: string;
  static names(): { [key: string]: string } {
    return {
      httpApiId: 'httpApiId',
      name: 'name',
      routeId: 'routeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpApiId: 'string',
      name: 'string',
      routeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretReferencesResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The information about the plug-in that references the current key.
   */
  pluginConfig?: ListSecretReferencesResponseBodyDataItemsPluginConfig;
  /**
   * @remarks
   * The service information that references the current key.
   */
  serviceConfig?: ListSecretReferencesResponseBodyDataItemsServiceConfig;
  /**
   * @remarks
   * The consumer information that references the current key.
   */
  consumerConfig?: ListSecretReferencesResponseBodyDataItemsConsumerConfig;
  /**
   * @remarks
   * The gateway instance ID.
   * 
   * @example
   * gw-xxxx
   */
  gatewayId?: string;
  /**
   * @remarks
   * MCP service information that references the current key.
   */
  mcpServerConfig?: ListSecretReferencesResponseBodyDataItemsMcpServerConfig;
  /**
   * @remarks
   * The type of resource.
   * 
   * @example
   * Plugin
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      pluginConfig: 'PluginConfig',
      serviceConfig: 'ServiceConfig',
      consumerConfig: 'consumerConfig',
      gatewayId: 'gatewayId',
      mcpServerConfig: 'mcpServerConfig',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pluginConfig: ListSecretReferencesResponseBodyDataItemsPluginConfig,
      serviceConfig: ListSecretReferencesResponseBodyDataItemsServiceConfig,
      consumerConfig: ListSecretReferencesResponseBodyDataItemsConsumerConfig,
      gatewayId: 'string',
      mcpServerConfig: ListSecretReferencesResponseBodyDataItemsMcpServerConfig,
      resourceType: 'string',
    };
  }

  validate() {
    if(this.pluginConfig && typeof (this.pluginConfig as any).validate === 'function') {
      (this.pluginConfig as any).validate();
    }
    if(this.serviceConfig && typeof (this.serviceConfig as any).validate === 'function') {
      (this.serviceConfig as any).validate();
    }
    if(this.consumerConfig && typeof (this.consumerConfig as any).validate === 'function') {
      (this.consumerConfig as any).validate();
    }
    if(this.mcpServerConfig && typeof (this.mcpServerConfig as any).validate === 'function') {
      (this.mcpServerConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretReferencesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of reference details.
   */
  items?: ListSecretReferencesResponseBodyDataItems[];
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
   * The total number of entries returned.
   * 
   * @example
   * 25
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
      items: { 'type': 'array', 'itemType': ListSecretReferencesResponseBodyDataItems },
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

export class ListSecretReferencesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListSecretReferencesResponseBodyData;
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
   * Id of the request
   * 
   * @example
   * CE857A85-251D-5018-8103-A38957D71***
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
      data: ListSecretReferencesResponseBodyData,
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

