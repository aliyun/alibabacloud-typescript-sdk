// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Backend } from "./Backend";
import { HttpRouteMatch } from "./HttpRouteMatch";


export class HttpRouteDomainInfos extends $dara.Model {
  domainId?: string;
  name?: string;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domainId',
      name: 'name',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      name: 'string',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpRouteEnvironmentInfoGatewayInfo extends $dara.Model {
  gatewayId?: string;
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

export class HttpRouteEnvironmentInfoSubDomains extends $dara.Model {
  domainId?: string;
  name?: string;
  /**
   * @example
   * Internet
   */
  networkType?: string;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domainId',
      name: 'name',
      networkType: 'networkType',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      name: 'string',
      networkType: 'string',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpRouteEnvironmentInfo extends $dara.Model {
  alias?: string;
  environmentId?: string;
  gatewayInfo?: HttpRouteEnvironmentInfoGatewayInfo;
  name?: string;
  subDomains?: HttpRouteEnvironmentInfoSubDomains[];
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      environmentId: 'environmentId',
      gatewayInfo: 'gatewayInfo',
      name: 'name',
      subDomains: 'subDomains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      environmentId: 'string',
      gatewayInfo: HttpRouteEnvironmentInfoGatewayInfo,
      name: 'string',
      subDomains: { 'type': 'array', 'itemType': HttpRouteEnvironmentInfoSubDomains },
    };
  }

  validate() {
    if(this.gatewayInfo && typeof (this.gatewayInfo as any).validate === 'function') {
      (this.gatewayInfo as any).validate();
    }
    if(Array.isArray(this.subDomains)) {
      $dara.Model.validateArray(this.subDomains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpRouteMcpServerInfoMcpRouteConfig extends $dara.Model {
  exposedUriPath?: string;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      exposedUriPath: 'exposedUriPath',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exposedUriPath: 'string',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpRouteMcpServerInfo extends $dara.Model {
  createFromType?: string;
  importInstanceId?: string;
  importMcpServerId?: string;
  importNamespace?: string;
  mcpRouteConfig?: HttpRouteMcpServerInfoMcpRouteConfig;
  mcpServerConfig?: string;
  static names(): { [key: string]: string } {
    return {
      createFromType: 'createFromType',
      importInstanceId: 'importInstanceId',
      importMcpServerId: 'importMcpServerId',
      importNamespace: 'importNamespace',
      mcpRouteConfig: 'mcpRouteConfig',
      mcpServerConfig: 'mcpServerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createFromType: 'string',
      importInstanceId: 'string',
      importMcpServerId: 'string',
      importNamespace: 'string',
      mcpRouteConfig: HttpRouteMcpServerInfoMcpRouteConfig,
      mcpServerConfig: 'string',
    };
  }

  validate() {
    if(this.mcpRouteConfig && typeof (this.mcpRouteConfig as any).validate === 'function') {
      (this.mcpRouteConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpRoute extends $dara.Model {
  backend?: Backend;
  createTimestamp?: number;
  deployStatus?: string;
  description?: string;
  domainInfos?: HttpRouteDomainInfos[];
  environmentInfo?: HttpRouteEnvironmentInfo;
  gatewayStatus?: { [key: string]: string };
  match?: HttpRouteMatch;
  mcpServerInfo?: HttpRouteMcpServerInfo;
  name?: string;
  routeId?: string;
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      backend: 'backend',
      createTimestamp: 'createTimestamp',
      deployStatus: 'deployStatus',
      description: 'description',
      domainInfos: 'domainInfos',
      environmentInfo: 'environmentInfo',
      gatewayStatus: 'gatewayStatus',
      match: 'match',
      mcpServerInfo: 'mcpServerInfo',
      name: 'name',
      routeId: 'routeId',
      updateTimestamp: 'updateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backend: Backend,
      createTimestamp: 'number',
      deployStatus: 'string',
      description: 'string',
      domainInfos: { 'type': 'array', 'itemType': HttpRouteDomainInfos },
      environmentInfo: HttpRouteEnvironmentInfo,
      gatewayStatus: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      match: HttpRouteMatch,
      mcpServerInfo: HttpRouteMcpServerInfo,
      name: 'string',
      routeId: 'string',
      updateTimestamp: 'number',
    };
  }

  validate() {
    if(this.backend && typeof (this.backend as any).validate === 'function') {
      (this.backend as any).validate();
    }
    if(Array.isArray(this.domainInfos)) {
      $dara.Model.validateArray(this.domainInfos);
    }
    if(this.environmentInfo && typeof (this.environmentInfo as any).validate === 'function') {
      (this.environmentInfo as any).validate();
    }
    if(this.gatewayStatus) {
      $dara.Model.validateMap(this.gatewayStatus);
    }
    if(this.match && typeof (this.match as any).validate === 'function') {
      (this.match as any).validate();
    }
    if(this.mcpServerInfo && typeof (this.mcpServerInfo as any).validate === 'function') {
      (this.mcpServerInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

