// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachProjectsFromReviewRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the bastion host.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The array of project IDs to remove from the audit policy.
   * > You can call the GetReviewRule operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  projectIds?: string;
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
   * The audit policy ID.
   * > You can call the ListReviewRules operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  reviewRuleId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectIds: 'ProjectIds',
      regionId: 'RegionId',
      reviewRuleId: 'ReviewRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      projectIds: 'string',
      regionId: 'string',
      reviewRuleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

