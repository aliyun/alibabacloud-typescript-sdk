// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWebFlowRuleResponseBodyData extends $dara.Model {
  /**
   * @example
   * hkhon1****@c3df23522******
   */
  appId?: string;
  /**
   * @example
   * spring-cloud-a
   */
  appName?: string;
  /**
   * @example
   * 0
   */
  burst?: number;
  /**
   * @example
   * 0
   */
  controlBehavior?: number;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 200
   */
  maxQueueingTimeMs?: number;
  /**
   * @example
   * 1
   */
  metricType?: number;
  /**
   * @example
   * default
   */
  namespace?: string;
  /**
   * @example
   * {"fieldName":"testKey","matchStrategy":2,"parseStrategy":2,"pattern":"testValue"}
   */
  paramItem?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 0
   */
  reourceMode?: number;
  /**
   * @example
   * /flow
   */
  resource?: string;
  /**
   * @example
   * 1000
   */
  statIntervalMs?: number;
  /**
   * @example
   * 20
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      burst: 'Burst',
      controlBehavior: 'ControlBehavior',
      enable: 'Enable',
      id: 'Id',
      maxQueueingTimeMs: 'MaxQueueingTimeMs',
      metricType: 'MetricType',
      namespace: 'Namespace',
      paramItem: 'ParamItem',
      regionId: 'RegionId',
      reourceMode: 'ReourceMode',
      resource: 'Resource',
      statIntervalMs: 'StatIntervalMs',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      burst: 'number',
      controlBehavior: 'number',
      enable: 'boolean',
      id: 'number',
      maxQueueingTimeMs: 'number',
      metricType: 'number',
      namespace: 'string',
      paramItem: 'string',
      regionId: 'string',
      reourceMode: 'number',
      resource: 'string',
      statIntervalMs: 'number',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

