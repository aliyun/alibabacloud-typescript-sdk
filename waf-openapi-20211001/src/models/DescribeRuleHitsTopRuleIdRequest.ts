// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRuleHitsTopRuleIdRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. This value is a UNIX timestamp. Unit: seconds. If you do not specify this parameter, the current time is used.
   * 
   * @example
   * 1665386280
   */
  endTimestamp?: string;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * > Call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to obtain the WAF instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to aggregate the number of rule hits by protected object.
   * 
   * - true (default): The number of rule hits is aggregated for each protection rule. In this case, the **Resource** parameter in the response is empty.
   * 
   * - **false**: The number of rule hits is not aggregated. Statistics are collected for each protected object and protection rule.
   * 
   * @example
   * true
   */
  isGroupResource?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * - **cn-hangzhou**: Chinese mainland.
   * 
   * - **ap-southeast-1**: Outside Chinese mainland.
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
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The type of rule that was hit. If you do not specify this parameter, statistics for all rule types are returned.
   * 
   * - **blacklist**: The request hit a rule in the IP address blacklist.
   * 
   * - **custom**: The request hit a custom rule.
   * 
   * - **antiscan**: The request hit a scan protection rule.
   * 
   * - **cc_system**: The request hit an HTTP flood protection rule.
   * 
   * - **region_block**: The request hit a rule in the Location Blacklist.
   * 
   * @example
   * blacklist
   */
  ruleType?: string;
  /**
   * @remarks
   * The start of the time range to query. This value is a UNIX timestamp. Unit: seconds.
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

