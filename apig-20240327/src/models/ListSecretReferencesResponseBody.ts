// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecretReferencesResponseBodyDataItemsPluginConfig extends $dara.Model {
  name?: string;
  pluginClassId?: string;
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
  name?: string;
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
  consumerId?: string;
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
  httpApiId?: string;
  name?: string;
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
  pluginConfig?: ListSecretReferencesResponseBodyDataItemsPluginConfig;
  serviceConfig?: ListSecretReferencesResponseBodyDataItemsServiceConfig;
  consumerConfig?: ListSecretReferencesResponseBodyDataItemsConsumerConfig;
  gatewayId?: string;
  mcpServerConfig?: ListSecretReferencesResponseBodyDataItemsMcpServerConfig;
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
  items?: ListSecretReferencesResponseBodyDataItems[];
  pageNumber?: number;
  pageSize?: number;
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
  code?: string;
  data?: ListSecretReferencesResponseBodyData;
  message?: string;
  /**
   * @remarks
   * Id of the request
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

