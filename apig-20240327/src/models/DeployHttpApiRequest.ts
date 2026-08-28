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
   * The match condition configuration related to API publishing.
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
   * The service protocol. Valid values:
   * - HTTP
   * - HTTPS
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
   * The weight. Valid values: 1 to 100. This parameter takes effect only in the ratio-based scenario.
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
   * The API publish scenario. Backend configurations cannot be specified during publishing. Configure them in advance by using UpdateHttpApi or UpdateHttpApiOperation before publishing.
   * 
   * @example
   * SingleService
   * 
   * @deprecated
   */
  backendScene?: string;
  /**
   * @remarks
   * The list of custom domain names.
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
   * The existing service configurations. In the single-service scenario, only one entry is allowed. In ratio-based or content-based scenarios, multiple entries are allowed. Backend configurations cannot be specified during publishing. Configure them in advance by using UpdateHttpApi or UpdateHttpApiOperation before publishing.
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
   * The action type.
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
   * User service API publish
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable REST API route compression. If this parameter is omitted or set to false, operations are published individually. If set to true, the API is published as a single prefix route. This field is ignored for historical revision publishing, which uses the route mode saved in the historical revision. When set to true, operationDeployments must not be specified because prefix route publishing supports only full publishing.
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
   * The operation-level deployment control list. This parameter takes effect only when enableRouteCompression is omitted or set to false. This field must not be specified when enableRouteCompression is set to true.
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
   * The historical revision ID. If this field is specified, the publish information is based on the historical revision.
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
   * The REST API deployment configuration. This parameter is required when the HTTP API being published is a REST API. At least one of revisionId, environment, or gatewayId must be provided to specify the publish target.
   */
  restApiConfig?: DeployHttpApiRequestRestApiConfig;
  /**
   * @remarks
   * The route ID. This parameter is required when publishing a route of an HTTP API.
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

