// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntegrationPolicyServiceMonitorsResponseBodyServiceMonitorsEndpoints extends $dara.Model {
  /**
   * @remarks
   * The collection interval.
   * 
   * @example
   * 30s
   */
  interval?: string;
  /**
   * @remarks
   * The number of matched targets.
   * 
   * @example
   * 65
   */
  matchedTargetCount?: number;
  /**
   * @remarks
   * The collection path.
   * 
   * @example
   * /metrics
   */
  path?: string;
  /**
   * @remarks
   * The collection port.
   * 
   * @example
   * 9100
   */
  port?: string;
  /**
   * @remarks
   * The target port.
   * 
   * @example
   * http
   */
  targetPort?: string;
  static names(): { [key: string]: string } {
    return {
      interval: 'interval',
      matchedTargetCount: 'matchedTargetCount',
      path: 'path',
      port: 'port',
      targetPort: 'targetPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interval: 'string',
      matchedTargetCount: 'number',
      path: 'string',
      port: 'string',
      targetPort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntegrationPolicyServiceMonitorsResponseBodyServiceMonitors extends $dara.Model {
  /**
   * @remarks
   * The add-on name.
   * 
   * @example
   * cloud-acs-ecs
   */
  addonName?: string;
  /**
   * @remarks
   * The name of the add-on release.
   * 
   * @example
   * release-1234567
   */
  addonReleaseName?: string;
  /**
   * @remarks
   * The add-on version.
   * 
   * @example
   * 0.0.1
   */
  addonVersion?: string;
  /**
   * @remarks
   * The configuration YAML file.
   * 
   * @example
   * apiVersion: xxxxx
   */
  configYaml?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * run
   */
  enableStatus?: string;
  /**
   * @remarks
   * Indicates whether the YAML file is encrypted.
   * 
   * @example
   * YXBpVmVyc2lvbjogeHh4eHgK
   */
  encryptYaml?: boolean;
  /**
   * @remarks
   * The list of Endpoints.
   */
  endpoints?: ListIntegrationPolicyServiceMonitorsResponseBodyServiceMonitorsEndpoints[];
  /**
   * @remarks
   * The number of matched services.
   * 
   * @example
   * 50
   */
  matchedServiceCount?: number;
  /**
   * @remarks
   * The name of the ServiceMonitor.
   * 
   * @example
   * 62a526c5-f6ca-4cfb-b5a4-b76974cffe51
   */
  name?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * arms-prom
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      addonName: 'addonName',
      addonReleaseName: 'addonReleaseName',
      addonVersion: 'addonVersion',
      configYaml: 'configYaml',
      enableStatus: 'enableStatus',
      encryptYaml: 'encryptYaml',
      endpoints: 'endpoints',
      matchedServiceCount: 'matchedServiceCount',
      name: 'name',
      namespace: 'namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonName: 'string',
      addonReleaseName: 'string',
      addonVersion: 'string',
      configYaml: 'string',
      enableStatus: 'string',
      encryptYaml: 'boolean',
      endpoints: { 'type': 'array', 'itemType': ListIntegrationPolicyServiceMonitorsResponseBodyServiceMonitorsEndpoints },
      matchedServiceCount: 'number',
      name: 'string',
      namespace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntegrationPolicyServiceMonitorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ea119prod-ea119blinkcptssd1
   */
  clusterId?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * policy-ac38a7cb02d14ff48bc9f97d0a75063e
   */
  policyId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CD8BA7D6-995D-578D-9941-78B0FECD14B5
   */
  requestId?: string;
  /**
   * @remarks
   * The list of ServiceMonitors.
   */
  serviceMonitors?: ListIntegrationPolicyServiceMonitorsResponseBodyServiceMonitors[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'clusterId',
      policyId: 'policyId',
      requestId: 'requestId',
      serviceMonitors: 'serviceMonitors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      policyId: 'string',
      requestId: 'string',
      serviceMonitors: { 'type': 'array', 'itemType': ListIntegrationPolicyServiceMonitorsResponseBodyServiceMonitors },
    };
  }

  validate() {
    if(Array.isArray(this.serviceMonitors)) {
      $dara.Model.validateArray(this.serviceMonitors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

