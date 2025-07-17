// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnvPodMonitorsResponseBodyDataEndpoints extends $dara.Model {
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
   * The number of pods that match the PodMonitor endpoint.
   * 
   * @example
   * 1
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
   * The external port.
   * 
   * @example
   * 9182
   */
  port?: string;
  /**
   * @remarks
   * The destination port.
   * 
   * @example
   * 3306
   */
  targetPort?: number;
  static names(): { [key: string]: string } {
    return {
      interval: 'Interval',
      matchedTargetCount: 'MatchedTargetCount',
      path: 'Path',
      port: 'Port',
      targetPort: 'TargetPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interval: 'string',
      matchedTargetCount: 'number',
      path: 'string',
      port: 'string',
      targetPort: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvPodMonitorsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the add-on to which the PodMonitor belongs.
   * 
   * @example
   * mysql
   */
  addonName?: string;
  /**
   * @remarks
   * The instance name of the add-on.
   * 
   * @example
   * mysql1
   */
  addonReleaseName?: string;
  /**
   * @remarks
   * The version of the add-on.
   * 
   * @example
   * 1.0.5
   */
  addonVersion?: string;
  /**
   * @remarks
   * The YAML configuration string.
   * 
   * @example
   * Refer to supplementary instructions.
   */
  configYaml?: string;
  /**
   * @remarks
   * The time when the PodMonitor was created. The value of this parameter is a timestamp.
   * 
   * @example
   * 2011-01-02T11:34:22Z
   */
  creationTimestamp?: string;
  /**
   * @remarks
   * The endpoints of the PodMonitor.
   */
  endpoints?: ListEnvPodMonitorsResponseBodyDataEndpoints[];
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-xxxxx
   */
  environmentId?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * arms-prom
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the PodMonitor.
   * 
   * @example
   * pm1
   */
  podMonitorName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the PodMonitor.
   * 
   * @example
   * run
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      addonName: 'AddonName',
      addonReleaseName: 'AddonReleaseName',
      addonVersion: 'AddonVersion',
      configYaml: 'ConfigYaml',
      creationTimestamp: 'CreationTimestamp',
      endpoints: 'Endpoints',
      environmentId: 'EnvironmentId',
      namespace: 'Namespace',
      podMonitorName: 'PodMonitorName',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonName: 'string',
      addonReleaseName: 'string',
      addonVersion: 'string',
      configYaml: 'string',
      creationTimestamp: 'string',
      endpoints: { 'type': 'array', 'itemType': ListEnvPodMonitorsResponseBodyDataEndpoints },
      environmentId: 'string',
      namespace: 'string',
      podMonitorName: 'string',
      regionId: 'string',
      status: 'string',
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

export class ListEnvPodMonitorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The result of the operation.
   */
  data?: ListEnvPodMonitorsResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4C518054-852F-4023-ABC1-4AF95FF7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListEnvPodMonitorsResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

