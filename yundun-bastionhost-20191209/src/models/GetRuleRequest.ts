// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Bastionhost instance.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to retrieve this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-wwo35essw07
   */
  instanceId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 3
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * > For the mappings between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the authorization rule to query.
   * > You can call the [ListRules](https://help.aliyun.com/document_detail/2758868.html) operation to retrieve this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 18
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

