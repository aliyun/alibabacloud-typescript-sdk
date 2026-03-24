// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntegrationPolicyPodMonitorsResponseBodyPodMonitorsEndpoints extends $dara.Model {
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
   * 1
   */
  matchedTargetCount?: number;
  /**
   * @remarks
   * The metric collection path.
   * 
   * @example
   * /metrics
   */
  path?: string;
  /**
   * @remarks
   * The port number.
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
   * @remarks
   * The name of the add-on.
   * 
   * @example
   * cloud-ecs
   */
  addonName?: string;
  /**
   * @remarks
   * The name of the add-on release.
   * 
   * @example
   * release-2345678
   */
  addonReleaseName?: string;
  /**
   * @remarks
   * The version of the add-on.
   * 
   * @example
   * 0.0.1
   */
  addonVersion?: string;
  /**
   * @remarks
   * The YAML configuration.
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
   * The endpoints of the instance.
   */
  endpoints?: ListIntegrationPolicyPodMonitorsResponseBodyPodMonitorsEndpoints[];
  /**
   * @remarks
   * The number of matched pods.
   * 
   * @example
   * 3
   */
  matchedPodCount?: number;
  /**
   * @remarks
   * The collection name.
   * 
   * @example
   * znzmo_entity_test
   */
  name?: string;
  /**
   * @remarks
   * The namespace.
   * 
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
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * et15prod-et15storage
   */
  clusterId?: string;
  /**
   * @remarks
   * The list of PodMonitors.
   */
  podMonitors?: ListIntegrationPolicyPodMonitorsResponseBodyPodMonitors[];
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * policy-c9efed2b99c348d49e589c5f780fc074
   */
  policyId?: string;
  /**
   * @remarks
   * The ID of the request.
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

