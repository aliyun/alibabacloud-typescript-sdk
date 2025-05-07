// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiRouteDomains } from "./HttpApiRouteDomains";
import { HttpApiRoutePolicies } from "./HttpApiRoutePolicies";
import { HttpApiRoutePredicates } from "./HttpApiRoutePredicates";
import { HttpApiRouteServices } from "./HttpApiRouteServices";


export class HttpApiRoute extends $dara.Model {
  /**
   * @example
   * intranet/internet
   */
  addressType?: string;
  /**
   * @example
   * Deploying/NotDeployed/Undeploying/Deployed
   */
  deployStatus?: string;
  /**
   * @example
   * Single/Multiple/VersionOriented
   */
  destinationType?: string;
  domains?: HttpApiRouteDomains[];
  environmentId?: string;
  gatewayId?: string;
  httpApiId?: string;
  /**
   * @example
   * Http
   */
  httpApiName?: string;
  /**
   * @example
   * Http
   */
  httpApiType?: string;
  /**
   * @example
   * 1
   */
  ingressId?: number;
  nacosInstanceId?: string;
  /**
   * @example
   * test
   */
  nacosNamespaceId?: string;
  name?: string;
  namespaceId?: string;
  policies?: HttpApiRoutePolicies;
  predicates?: HttpApiRoutePredicates;
  routeId?: string;
  services?: HttpApiRouteServices[];
  /**
   * @example
   * SAE_NACOS/SAE_K8S_SERVICE/MSE_NACOS
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      deployStatus: 'DeployStatus',
      destinationType: 'DestinationType',
      domains: 'Domains',
      environmentId: 'EnvironmentId',
      gatewayId: 'GatewayId',
      httpApiId: 'HttpApiId',
      httpApiName: 'HttpApiName',
      httpApiType: 'HttpApiType',
      ingressId: 'IngressId',
      nacosInstanceId: 'NacosInstanceId',
      nacosNamespaceId: 'NacosNamespaceId',
      name: 'Name',
      namespaceId: 'NamespaceId',
      policies: 'Policies',
      predicates: 'Predicates',
      routeId: 'RouteId',
      services: 'Services',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressType: 'string',
      deployStatus: 'string',
      destinationType: 'string',
      domains: { 'type': 'array', 'itemType': HttpApiRouteDomains },
      environmentId: 'string',
      gatewayId: 'string',
      httpApiId: 'string',
      httpApiName: 'string',
      httpApiType: 'string',
      ingressId: 'number',
      nacosInstanceId: 'string',
      nacosNamespaceId: 'string',
      name: 'string',
      namespaceId: 'string',
      policies: HttpApiRoutePolicies,
      predicates: HttpApiRoutePredicates,
      routeId: 'string',
      services: { 'type': 'array', 'itemType': HttpApiRouteServices },
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    if(this.policies && typeof (this.policies as any).validate === 'function') {
      (this.policies as any).validate();
    }
    if(this.predicates && typeof (this.predicates as any).validate === 'function') {
      (this.predicates as any).validate();
    }
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

