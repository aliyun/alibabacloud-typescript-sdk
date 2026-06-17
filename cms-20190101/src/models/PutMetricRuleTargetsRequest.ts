// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutMetricRuleTargetsRequestTargets extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the resource. Simple Message Queue (formerly MNS), elastic scaling (ESS), Simple Log Service (SLS), and Function Compute (FC) are supported.
   * 
   * The following section describes the ARN parameter metric description for Simple Message Queue (formerly MNS):
   * 
   * `acs:mns:{regionId}:{userId}:/{Resource type}/{Resource name}/message`
   * 
   * - {regionId}: the region where the MSMQ or topic of Simple Message Queue (formerly MNS) resides.
   * - {userId}: the Alibaba Cloud account that owns the resource.
   * - {Resource type}: the type of the resource that accepts alert notifications. Valid values:
   * 
   *   - **queues**: queue.
   *   - **topics**: topic.
   * 
   * - {Resource name}: the name of the resource.
   * 
   *   - If the resource type is **queues**, the resource name is the queue name.
   *   - If the resource type is **topics**, the resource name is the topic name.
   * 
   * ARN for elastic scaling:
   * 
   * acs:ess:{regionId}:{userId}:scalingGroupId/{Scaling group ID}:scalingRuleId/{Scaling rule ID}
   * 
   * ARN for Simple Log Service:
   * 
   * acs:log:{regionId}:{userId}:project/{Project name}/logstore/{Logstore name}
   * 
   * ARN for Function Compute:
   * 
   * acs:fc:{regionId}:{userId}:services/{Service name}/functions/{Function name}.
   * 
   * This parameter is required.
   * 
   * @example
   * acs:mns:cn-hangzhou:120886317861****:/queues/test/message
   */
  arn?: string;
  /**
   * @remarks
   * The ID of the alert trigger target.
   * 
   * For information about how to obtain the alert trigger target ID, see [DescribeMetricRuleTargets](https://help.aliyun.com/document_detail/121592.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * The JSON-formatted parameters of the alert callback.
   * 
   * @example
   * {"customField1":"value1","customField2":"$.name"}
   */
  jsonParams?: string;
  /**
   * @remarks
   * The alert level. Valid values:
   * 
   * - INFO: information.
   * - WARN: warning.
   * - CRITICAL: critical.
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
   * For information about how to obtain the alert rule ID, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
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

