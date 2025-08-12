// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutMetricRuleTargetsRequestTargets extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the resource. Simple Message Queue (formerly MNS) (SMQ), Auto Scaling, Simple Log Service, and Function Compute are supported.
   * 
   * The following part describes the ARN of SMQ and the parameters in the ARN:
   * 
   * `acs:mns:{regionId}:{userId}:/{Resource type}/{Resource name}/message`.
   * 
   * *   {regionId}: the region ID of the SMQ queue or topic.
   * 
   * *   {userId}: the ID of the Alibaba Cloud account that owns the resource.
   * 
   * *   {Resource type}: the type of the resource for which alerts are triggered. Valid values:
   * 
   *     *   **queues**
   *     *   **topics**
   * 
   * *   {Resource name}: the resource name.
   * 
   *     *   If the resource type is **queues**, the resource name is the queue name.
   *     *   If the resource type is **topics**, the resource name is the topic name.
   * 
   * ARN of Auto Scaling:
   * 
   * acs:ess:{regionId}:{userId}:scalingGroupId/{Scaling group ID}:scalingRuleId/{Scaling rule ID}
   * 
   * ARN of Simple Log Service:
   * 
   * acs:log:{regionId}:{userId}:project/{Project name}/logstore/{Logstore name}
   * 
   * ARN of Function Compute:
   * 
   * acs:fc:{regionId}:{userId}:services/{Service name}/functions/{Function name}
   * 
   * This parameter is required.
   * 
   * @example
   * acs:mns:cn-hangzhou:120886317861****:/queues/test/message
   */
  arn?: string;
  /**
   * @remarks
   * The ID of the resource for which alerts are triggered.
   * 
   * For more information about how to obtain the ID of the resource for which alerts are triggered, see [DescribeMetricRuleTargets](https://help.aliyun.com/document_detail/121592.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * The parameters of the alert callback. The parameters are in the JSON format.
   * 
   * @example
   * {"customField1":"value1","customField2":"$.name"}
   */
  jsonParams?: string;
  /**
   * @remarks
   * The alert level. Valid values:
   * 
   * *   INFO
   * *   WARN
   * *   CRITICAL
   * 
   * @example
   * ["INFO", "WARN", "CRITICAL"]
   */
  level?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      id: 'Id',
      jsonParams: 'JsonParams',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      id: 'string',
      jsonParams: 'string',
      level: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMetricRuleTargetsRequest extends $dara.Model {
  regionId?: string;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * For information about how to obtain the ID of an alert rule, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ae06917_75a8c43178ab66****
   */
  ruleId?: string;
  /**
   * @remarks
   * None.
   * 
   * This parameter is required.
   */
  targets?: PutMetricRuleTargetsRequestTargets[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ruleId: 'RuleId',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ruleId: 'string',
      targets: { 'type': 'array', 'itemType': PutMetricRuleTargetsRequestTargets },
    };
  }

  validate() {
    if(Array.isArray(this.targets)) {
      $dara.Model.validateArray(this.targets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

