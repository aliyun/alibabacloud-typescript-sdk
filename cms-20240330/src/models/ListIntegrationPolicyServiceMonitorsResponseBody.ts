// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntegrationPolicyServiceMonitorsResponseBodyServiceMonitorsEndpoints extends $dara.Model {
  /**
   * @example
   * 30s
   */
  interval?: string;
  /**
   * @example
   * 65
   */
  matchedTargetCount?: number;
  /**
   * @example
   * /metrics
   */
  path?: string;
  /**
   * @example
   * 9100
   */
  port?: string;
  /**
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
   * @example
   * cloud-acs-ecs
   */
  addonName?: string;
  /**
   * @example
   * release-1234567
   */
  addonReleaseName?: string;
  /**
   * @example
   * 0.0.1
   */
  addonVersion?: string;
  /**
   * @example
   * apiVersion: xxxxx
   */
  configYaml?: string;
  /**
   * @example
   * run
   */
  enableStatus?: string;
  /**
   * @example
   * YXBpVmVyc2lvbjogeHh4eHgK
   */
  encryptYaml?: boolean;
  endpoints?: ListIntegrationPolicyServiceMonitorsResponseBodyServiceMonitorsEndpoints[];
  /**
   * @example
   * 50
   */
  matchedServiceCount?: number;
  /**
   * @example
   * 62a526c5-f6ca-4cfb-b5a4-b76974cffe51
   */
  name?: string;
  /**
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
   * @example
   * ea119prod-ea119blinkcptssd1
   */
  clusterId?: string;
  /**
   * @example
   * policy-ac38a7cb02d14ff48bc9f97d0a75063e
   */
  policyId?: string;
  /**
   * @example
   * CD8BA7D6-995D-578D-9941-78B0FECD14B5
   */
  requestId?: string;
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

