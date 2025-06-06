// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Backend } from "./Backend";
import { HttpRouteDomainInfos } from "./HttpRouteDomainInfos";
import { HttpRouteEnvironmentInfo } from "./HttpRouteEnvironmentInfo";
import { HttpRouteMatch } from "./HttpRouteMatch";
import { HttpRouteMcpServerInfo } from "./HttpRouteMcpServerInfo";


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

