// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnvServiceMonitorsResponseBodyDataEndpoints extends $dara.Model {
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
   * The number of pods that match the ServiceMonitor endpoint.
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
   * 9101
   */
  port?: string;
  /**
   * @remarks
   * The destination port.
   * 
   * @example
   * 443
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

export class ListEnvServiceMonitorsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the add-on to which the ServiceMonitor belongs.
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
   * 1.1.0
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
   * The time when the ServiceMonitor was created. The value of this parameter is a timestamp.
   * 
   * @example
   * 2011-10-11T22:32:11Z
   */
  creationTimestamp?: string;
  /**
   * @remarks
   * The endpoints of the ServiceMonitor.
   */
  endpoints?: ListEnvServiceMonitorsResponseBodyDataEndpoints[];
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
   * The number of matched services.
   * 
   * @example
   * 1
   */
  matchedServiceCount?: number;
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
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the ServiceMonitor.
   * 
   * @example
   * sm1
   */
  serviceMonitorName?: string;
  /**
   * @remarks
   * The status of the ServiceMonitor.
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
      matchedServiceCount: 'MatchedServiceCount',
      namespace: 'Namespace',
      regionId: 'RegionId',
      serviceMonitorName: 'ServiceMonitorName',
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
      endpoints: { 'type': 'array', 'itemType': ListEnvServiceMonitorsResponseBodyDataEndpoints },
      environmentId: 'string',
      matchedServiceCount: 'number',
      namespace: 'string',
      regionId: 'string',
      serviceMonitorName: 'string',
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

export class ListEnvServiceMonitorsResponseBody extends $dara.Model {
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
   * The returned struct.
   */
  data?: ListEnvServiceMonitorsResponseBodyData[];
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
   * 1A474FF8-7861-4D00-81B5-5BC3DA4E****
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
      data: { 'type': 'array', 'itemType': ListEnvServiceMonitorsResponseBodyData },
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

