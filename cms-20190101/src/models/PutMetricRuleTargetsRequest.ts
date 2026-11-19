// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutMetricRuleTargetsRequestTargets extends $dara.Model {
  /**
   * @remarks
   * The ARN of the resource. Simple Message Queue (formerly MNS), Auto Scaling (ESS), Simple Log Service (SLS), and Function Compute (FC) are supported.
   * 
   * The ARN parameters for Simple Message Queue (formerly MNS) are as follows:
   * 
   * `acs:mns:{regionId}:{userId}:/{resource type}/{resource name}/message`.
   * 
   * - {regionId}: the region where the Simple Message Queue (formerly MNS) queue or topic resides.
   * - {userId}: the Alibaba Cloud account to which the resource belongs.
   * - {resource type}: the type of the resource that accepts alerts. Valid values:
   * 
   *   - **queues**: queue
   *   - **topics**: topic
   * 
   * - {resource name}: the name of the resource.
   * 
   *   - If the resource type is **queues**, the resource name is the queue name.
   *   - If the resource type is **topics**, the resource name is the topic name.
   * 
   * The ARN for Auto Scaling:
   * 
   * acs:ess:{regionId}:{userId}:scalingGroupId/{scaling group ID}:scalingRuleId/{scaling rule ID}
   * 
   * The ARN for Simple Log Service:
   * 
   * acs:log:{regionId}:{userId}:project/{project name}/logstore/{Logstore name}
   * 
   * The ARN for Function Compute:
   * 
   * acs:fc:{regionId}:{userId}:services/{service name}/functions/{function name}
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
   * For more information about how to obtain the ID of an alert trigger target, see [DescribeMetricRuleTargets](https://help.aliyun.com/document_detail/121592.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * The JSON-formatted parameters for the alert callback.
   * 
   * @example
   * {"customField1":"value1","customField2":"$.name"}
   */
  jsonParams?: string;
  /**
   * @remarks
   * The alert level. Valid values:
   * 
   * - INFO: information
   * - WARN: warning
   * - CRITICAL: critical
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
  /**
   * @remarks
   * Specifies whether to perform a dry run.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  regionId?: string;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * For more information about how to obtain the ID of an alert rule, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
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
      dryRun: 'DryRun',
      regionId: 'RegionId',
      ruleId: 'RuleId',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
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

