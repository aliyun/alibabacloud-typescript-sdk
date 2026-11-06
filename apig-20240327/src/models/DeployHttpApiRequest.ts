// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiBackendMatchConditions } from "./HttpApiBackendMatchConditions";


export class DeployHttpApiRequestHttpApiConfig extends $dara.Model {
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * gw-csrhgfmm1hknf0hu6o3g
   */
  gatewayId?: string;
  /**
   * @remarks
   * The route IDs.
   */
  routeIds?: string[];
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      routeIds: 'routeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      routeIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.routeIds)) {
      $dara.Model.validateArray(this.routeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployHttpApiRequestRestApiConfigEnvironmentServiceConfigs extends $dara.Model {
  /**
   * @remarks
   * The match condition configuration for API publishing.
   * 
   * @example
   * {\\"change_order_revision\\":\\"3.657.33_fc-hz-yunqi.1662568293908382_faas-eerouter\\"}
   */
  match?: HttpApiBackendMatchConditions;
  /**
   * @remarks
   * The service port. Do not specify this parameter for dynamic ports.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The service protocol:
   * - HTTP.
   * - HTTPS.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * svc-cr6pk4tlhtgm58e***
   */
  serviceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * v1
   */
  version?: string;
  /**
   * @remarks
   * The weight. Valid values: 1 to 100. This parameter is valid only in the ratio-based scenario.
   * 
   * @example
   * 49
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      match: 'match',
      port: 'port',
      protocol: 'protocol',
      serviceId: 'serviceId',
      version: 'version',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      match: HttpApiBackendMatchConditions,
      port: 'number',
      protocol: 'string',
      serviceId: 'string',
      version: 'string',
      weight: 'number',
    };
  }

  validate() {
    if(this.match && typeof (this.match as any).validate === 'function') {
      (this.match as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployHttpApiRequestRestApiConfigEnvironment extends $dara.Model {
  /**
   * @remarks
   * The API publish scenario. Backend configurations cannot be specified during publishing. You must preconfigure them by using UpdateHttpApi or UpdateHttpApiOperation before publishing.
   * 
   * @example
   * SingleService
   * 
   * @deprecated
   */
  backendScene?: string;
  /**
   * @remarks
   * The list of user domain names.
   */
  customDomainIds?: string[];
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-cpqnr6tlhtgubc***
   * 
   * @deprecated
   */
  environmentId?: string;
  /**
   * @remarks
   * The existing service configurations. Only one entry can be configured in the single service scenario, while multiple entries are allowed in scenarios such as ratio-based or content-based. Backend configurations cannot be specified during publishing. You must preconfigure them by using UpdateHttpApi or UpdateHttpApiOperation before publishing.
   * 
   * **if can be null:**
   * true
   * 
   * @deprecated
   */
  serviceConfigs?: DeployHttpApiRequestRestApiConfigEnvironmentServiceConfigs[];
  static names(): { [key: string]: string } {
    return {
      backendScene: 'backendScene',
      customDomainIds: 'customDomainIds',
      environmentId: 'environmentId',
      serviceConfigs: 'serviceConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendScene: 'string',
      customDomainIds: { 'type': 'array', 'itemType': 'string' },
      environmentId: 'string',
      serviceConfigs: { 'type': 'array', 'itemType': DeployHttpApiRequestRestApiConfigEnvironmentServiceConfigs },
    };
  }

  validate() {
    if(Array.isArray(this.customDomainIds)) {
      $dara.Model.validateArray(this.customDomainIds);
    }
    if(Array.isArray(this.serviceConfigs)) {
      $dara.Model.validateArray(this.serviceConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployHttpApiRequestRestApiConfigOperationDeployments extends $dara.Model {
  /**
   * @remarks
   * The operation type.
   * 
   * @example
   * Publish
   */
  action?: string;
  /**
   * @remarks
   * The unique identifier of the operation.
   * 
   * @example
   * op-xxx
   */
  operationId?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      operationId: 'operationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      operationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployHttpApiRequestRestApiConfig extends $dara.Model {
  /**
   * @remarks
   * The publish description.
   * 
   * @example
   * User service API publication
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable REST API route compression. If this parameter is omitted or set to false, routes are published one by one by operation. If this parameter is set to true, routes are published as a single prefix route for the API. This field is ignored during historical version publishing, and the route mode saved in the historical version is used. If this parameter is set to true, do not specify operationDeployments because prefix route publishing supports only full publishing.
   * 
   * @example
   * true
   */
  enableRouteCompression?: boolean;
  /**
   * @remarks
   * The publish environment configuration.
   */
  environment?: DeployHttpApiRequestRestApiConfigEnvironment;
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * gw-cvn2u46m1hkun04oll8g
   */
  gatewayId?: string;
  /**
   * @remarks
   * The operation-level publish control list. This list is valid only when enableRouteCompression is omitted or set to false. If enableRouteCompression is set to true, do not specify this field.
   */
  operationDeployments?: DeployHttpApiRequestRestApiConfigOperationDeployments[];
  /**
   * @remarks
   * The operation IDs.
   * 
   * @deprecated
   */
  operationIds?: string[];
  /**
   * @remarks
   * The historical version number. If this field is specified, the publish information is subject to the historical version information.
   * 
   * @example
   * apr-xxx
   */
  revisionId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      enableRouteCompression: 'enableRouteCompression',
      environment: 'environment',
      gatewayId: 'gatewayId',
      operationDeployments: 'operationDeployments',
      operationIds: 'operationIds',
      revisionId: 'revisionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      enableRouteCompression: 'boolean',
      environment: DeployHttpApiRequestRestApiConfigEnvironment,
      gatewayId: 'string',
      operationDeployments: { 'type': 'array', 'itemType': DeployHttpApiRequestRestApiConfigOperationDeployments },
      operationIds: { 'type': 'array', 'itemType': 'string' },
      revisionId: 'string',
    };
  }

  validate() {
    if(this.environment && typeof (this.environment as any).validate === 'function') {
      (this.environment as any).validate();
    }
    if(Array.isArray(this.operationDeployments)) {
      $dara.Model.validateArray(this.operationDeployments);
    }
    if(Array.isArray(this.operationIds)) {
      $dara.Model.validateArray(this.operationIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployHttpApiRequest extends $dara.Model {
  /**
   * @remarks
   * The HTTP API deployment configuration.
   * 
   * @deprecated
   */
  httpApiConfig?: DeployHttpApiRequestHttpApiConfig;
  /**
   * @remarks
   * The REST API deployment configuration. This parameter is required when you publish an HTTP API as a REST API. You must provide at least one of revisionId, environment, and gatewayId to locate the deployment target.
   */
  restApiConfig?: DeployHttpApiRequestRestApiConfig;
  /**
   * @remarks
   * The route ID. This parameter is required when you publish a route of an HTTP API. Before you deploy by using routeId, make sure that the target route is associated with a publishable domain name. If no domain name is configured when the route is created, you can call UpdateHttpApiRoute to add domainIds. A publishable domain name refers to the default subdomain of the environment and does not include custom dedicated domain names. If the route is associated only with dedicated domain names, you must first call UpdateHttpApiRoute to add the domainIds corresponding to the default subdomain of the environment before deployment.
   * 
   * @example
   * hr-cr82undlhtgrl***
   */
  routeId?: string;
  static names(): { [key: string]: string } {
    return {
      httpApiConfig: 'httpApiConfig',
      restApiConfig: 'restApiConfig',
      routeId: 'routeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpApiConfig: DeployHttpApiRequestHttpApiConfig,
      restApiConfig: DeployHttpApiRequestRestApiConfig,
      routeId: 'string',
    };
  }

  validate() {
    if(this.httpApiConfig && typeof (this.httpApiConfig as any).validate === 'function') {
      (this.httpApiConfig as any).validate();
    }
    if(this.restApiConfig && typeof (this.restApiConfig as any).validate === 'function') {
      (this.restApiConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

