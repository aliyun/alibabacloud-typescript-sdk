// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntegrationPolicyPodMonitorsResponseBodyPodMonitorsEndpoints extends $dara.Model {
  /**
   * @example
   * 30s
   */
  interval?: string;
  /**
   * @example
   * 1
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
   * https
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

export class ListIntegrationPolicyPodMonitorsResponseBodyPodMonitors extends $dara.Model {
  /**
   * @example
   * cloud-ecs
   */
  addonName?: string;
  /**
   * @example
   * release-2345678
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
  endpoints?: ListIntegrationPolicyPodMonitorsResponseBodyPodMonitorsEndpoints[];
  /**
   * @example
   * 3
   */
  matchedPodCount?: number;
  /**
   * @example
   * znzmo_entity_test
   */
  name?: string;
  /**
   * @example
   * sla-ns-d5aeb2b4f91b47
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
      matchedPodCount: 'matchedPodCount',
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
      endpoints: { 'type': 'array', 'itemType': ListIntegrationPolicyPodMonitorsResponseBodyPodMonitorsEndpoints },
      matchedPodCount: 'number',
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

export class ListIntegrationPolicyPodMonitorsResponseBody extends $dara.Model {
  clusterId?: string;
  podMonitors?: ListIntegrationPolicyPodMonitorsResponseBodyPodMonitors[];
  /**
   * @example
   * policy-c9efed2b99c348d49e589c5f780fc074
   */
  policyId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CD8BA7D6-995D-578D-9941-78B0FECD14B5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'clusterId',
      podMonitors: 'podMonitors',
      policyId: 'policyId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      podMonitors: { 'type': 'array', 'itemType': ListIntegrationPolicyPodMonitorsResponseBodyPodMonitors },
      policyId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.podMonitors)) {
      $dara.Model.validateArray(this.podMonitors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

