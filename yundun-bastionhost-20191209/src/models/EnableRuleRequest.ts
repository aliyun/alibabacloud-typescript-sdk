// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the bastion host instance.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-78v1ghxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The project ID.
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the bastion host.
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the authorization rule to enable.
   * > You can call the [ListRules](https://help.aliyun.com/document_detail/2758868.html) operation to query the rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      projectId: 'number',
      regionId: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

