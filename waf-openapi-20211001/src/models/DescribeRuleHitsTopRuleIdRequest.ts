// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRuleHitsTopRuleIdRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Unit: seconds. If you do not specify this parameter, the current time is used.
   * 
   * @example
   * 1665386280
   */
  endTimestamp?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether protected objects that trigger protection rules are returned in the response. Valid values
   * 
   * - **true**: returns only the number of times each protection rule is triggered. If you set IsGroupResource to true, Resource is left empty.
   * - **false**: returns the number of times each protection rule is triggered by each protected object.
   * 
   * @example
   * true
   */
  isGroupResource?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * *   **cn-hangzhou:** the Chinese mainland.
   * *   **ap-southeast-1:** outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The protected object.
   * 
   * @example
   * www.aliyundoc.com
   */
  resource?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The type of rules that are triggered by the protected object. By default, this parameter is not specified and all types of rules are queried.
   * 
   * *   **blacklist:** IP address blacklist rules.
   * *   **custom:** custom rules.
   * *   **antiscan:** scan protection rules.
   * *   **cc_system:** HTTP flood protection rules.
   * *   **region_block:** region blacklist rules.
   * 
   * @example
   * blacklist
   */
  ruleType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1665331200
   */
  startTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      instanceId: 'InstanceId',
      isGroupResource: 'IsGroupResource',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      ruleType: 'RuleType',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'string',
      instanceId: 'string',
      isGroupResource: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      ruleType: 'string',
      startTimestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

