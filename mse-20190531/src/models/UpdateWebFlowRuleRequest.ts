// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWebFlowRuleRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @example
   * hkhon1****@c3df23522******
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
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
   * {"fieldName":"key","matchStrategy":2,"parseStrategy":2,"pattern":"value"}
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
  resourceMode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  ruleId?: number;
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
      acceptLanguage: 'AcceptLanguage',
      appId: 'AppId',
      appName: 'AppName',
      burst: 'Burst',
      controlBehavior: 'ControlBehavior',
      enable: 'Enable',
      maxQueueingTimeMs: 'MaxQueueingTimeMs',
      metricType: 'MetricType',
      namespace: 'Namespace',
      paramItem: 'ParamItem',
      regionId: 'RegionId',
      resourceMode: 'ResourceMode',
      ruleId: 'RuleId',
      statIntervalMs: 'StatIntervalMs',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appId: 'string',
      appName: 'string',
      burst: 'number',
      controlBehavior: 'number',
      enable: 'boolean',
      maxQueueingTimeMs: 'number',
      metricType: 'number',
      namespace: 'string',
      paramItem: 'string',
      regionId: 'string',
      resourceMode: 'number',
      ruleId: 'number',
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

