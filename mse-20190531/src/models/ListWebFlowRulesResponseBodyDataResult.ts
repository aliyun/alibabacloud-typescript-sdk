// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWebFlowRulesResponseBodyDataResult extends $dara.Model {
  /**
   * @example
   * hkhon1XXXX@c3df23522bXXXXX
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
   * {\\"appName\\":\\"spring-cloud-a\\",\\"fallbackBehavior\\":{\\"webFallbackMode\\":0,\\"webRespContentType\\":0,\\"webRespMessage\\":\\"Blocked\\",\\"webRespStatusCode\\":429},\\"id\\":977,\\"name\\":\\"Fallback\\",\\"namespace\\":\\"default\\",\\"resourceClassification\\":1}
   */
  fallbackObject?: string;
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
   * /flow
   */
  resource?: string;
  /**
   * @example
   * 0
   */
  resourceMode?: number;
  /**
   * @example
   * 1
   */
  resourceType?: number;
  /**
   * @example
   * 1
   */
  ruleId?: string;
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
      fallbackObject: 'FallbackObject',
      maxQueueingTimeMs: 'MaxQueueingTimeMs',
      metricType: 'MetricType',
      namespace: 'Namespace',
      paramItem: 'ParamItem',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceMode: 'ResourceMode',
      resourceType: 'ResourceType',
      ruleId: 'RuleId',
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
      fallbackObject: 'string',
      maxQueueingTimeMs: 'number',
      metricType: 'number',
      namespace: 'string',
      paramItem: 'string',
      regionId: 'string',
      resource: 'string',
      resourceMode: 'number',
      resourceType: 'number',
      ruleId: 'string',
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

