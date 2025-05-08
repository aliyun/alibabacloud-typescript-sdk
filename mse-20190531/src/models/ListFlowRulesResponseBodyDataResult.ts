// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFlowRulesResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * hkhon1po62@5f1b08becb*****
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * finance
   */
  appName?: string;
  /**
   * @remarks
   * The throttling effect.
   * 
   * Valid values:
   * 
   * *   0
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     fast failure
   * 
   *     <!-- -->
   * 
   * *   2
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     in queue
   * 
   *     <!-- -->
   * 
   * @example
   * 0
   */
  controlBehavior?: number;
  /**
   * @remarks
   * Indicates whether the throttling rule was enabled.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The throttling behavior.
   * 
   * @example
   * "{\\"appName\\":\\"spring-cloud-a\\",\\"fallbackBehavior\\":{\\"webFallbackMode\\":0,\\"webRespContentType\\":0,\\"webRespMessage\\":\\"Blocked\\",\\"webRespStatusCode\\":429},\\"id\\":977,\\"name\\":\\"Fallback\\",\\"namespace\\":\\"default\\",\\"resourceClassification\\":1}"
   */
  fallbackObject?: string;
  /**
   * @remarks
   * Requests source application.
   * 
   * @example
   * spring-cloud-a
   */
  limitApp?: string;
  /**
   * @remarks
   * The timeout period for queuing when the value of ControlBehavior is set to 2. Unit: milliseconds.
   * 
   * @example
   * 500
   */
  maxQueueingTimeMs?: number;
  /**
   * @remarks
   * The statistical dimension. The value 1 indicates that the number of accepted requests is used for statistics.
   * 
   * @example
   * 1
   */
  metricType?: number;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the interface resource.
   * 
   * @example
   * /a
   */
  resource?: string;
  /**
   * @remarks
   * Interface resource type.
   * 
   * @example
   * 1
   */
  resourceType?: number;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 2
   */
  ruleId?: number;
  /**
   * @remarks
   * The throttling threshold.
   * 
   * @example
   * 10
   */
  threshold?: number;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * {\\"origin\\":\\"default\\"}
   */
  trafficTags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      controlBehavior: 'ControlBehavior',
      enable: 'Enable',
      fallbackObject: 'FallbackObject',
      limitApp: 'LimitApp',
      maxQueueingTimeMs: 'MaxQueueingTimeMs',
      metricType: 'MetricType',
      namespace: 'Namespace',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceType: 'ResourceType',
      ruleId: 'RuleId',
      threshold: 'Threshold',
      trafficTags: 'TrafficTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      controlBehavior: 'number',
      enable: 'boolean',
      fallbackObject: 'string',
      limitApp: 'string',
      maxQueueingTimeMs: 'number',
      metricType: 'number',
      namespace: 'string',
      regionId: 'string',
      resource: 'string',
      resourceType: 'number',
      ruleId: 'number',
      threshold: 'number',
      trafficTags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.trafficTags) {
      $dara.Model.validateMap(this.trafficTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

