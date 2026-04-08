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
   * routeIds
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
   * The matching condition configurations related to API publishing.
   * 
   * @example
   * {\\"change_order_revision\\":\\"3.657.33_fc-hz-yunqi.1662568293908382_faas-eerouter\\"}
   */
  match?: HttpApiBackendMatchConditions;
  /**
   * @remarks
   * The service port. If you want to use a dynamic port, do not pass this parameter.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The service protocol. Valid values:
   * 
   * *   HTTP
   * *   HTTPS
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
   * The version of the microservice.
   * 
   * @example
   * v1
   */
  version?: string;
  /**
   * @remarks
   * The weight. Valid values: [1,100]. This parameter is valid only in proportional routing.
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
   * The publishing scenario.
   * 
   * Valid values:
   * 
   * *   SingleService
   * *   MultiServiceByRatio
   * *   MultiServiceByContent
   * *   Mock
   * 
   * @example
   * SingleService
   * 
   * @deprecated
   */
  backendScene?: string;
  /**
   * @remarks
   * The custom domain names.
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
   * The configurations of existing services. For single-service publishing, only one entry is allowed. For other scenarios, multiple entries are allowed.
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
   * Operation type
   * 
   * @example
   * Publish
   */
  action?: string;
  /**
   * @remarks
   * Unique identifier of the operation
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
   * The user service API
   */
  description?: string;
  /**
   * @remarks
   * The environment configurations.
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
   * Operation-level deployment control list
   */
  operationDeployments?: DeployHttpApiRequestRestApiConfigOperationDeployments[];
  /**
   * @remarks
   * operationIds
   * 
   * @deprecated
   */
  operationIds?: string[];
  /**
   * @remarks
   * The historical version of the API. If you specify this parameter, the corresponding version of the API is published.
   * 
   * @example
   * apr-xxx
   */
  revisionId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
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
   * httpApiConfig
   * 
   * @deprecated
   */
  httpApiConfig?: DeployHttpApiRequestHttpApiConfig;
  /**
   * @remarks
   * The REST API deployment configuration. This parameter is required when you publish a REST API.
   */
  restApiConfig?: DeployHttpApiRequestRestApiConfig;
  /**
   * @remarks
   * The route ID. You must specify this parameter when you publish an HTTP API.
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

