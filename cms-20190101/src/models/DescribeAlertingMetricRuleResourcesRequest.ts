// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlertingMetricRuleResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Queries alerts that occurred before this point in time. The value is a millisecond-level timestamp.
   * 
   * @example
   * 1698827400000
   */
  alertBeforeTime?: string;
  /**
   * @remarks
   * The dimension map used to query monitoring data of a specified resource.
   * 
   * @example
   * {\\"userId\\":\\"120886317861****\\",\\"region\\":\\"cn-huhehaote\\",\\"queue\\":\\"test-0128\\"}
   */
  dimensions?: string;
  /**
   * @remarks
   * The ID of the application group. For more information about how to query application group IDs, see [DescribeMonitorGroups](https://help.aliyun.com/document_detail/115032.html).
   * 
   * @example
   * 7671****
   */
  groupId?: string;
  /**
   * @remarks
   * The data namespace of the Alibaba Cloud service.
   * 
   * For more information about how to obtain the data namespace of an Alibaba Cloud service, see [Alibaba Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * acs_mns_new
   */
  namespace?: string;
  /**
   * @remarks
   * The page number. 
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  regionId?: string;
  /**
   * @remarks
   * The ID of the alert rule. For more information about how to query alert rule IDs, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
   * 
   * @example
   * putNewAlarm_user_7e78d765-0e3e-4671-ba6d-7ce39108****
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      alertBeforeTime: 'AlertBeforeTime',
      dimensions: 'Dimensions',
      groupId: 'GroupId',
      namespace: 'Namespace',
      page: 'Page',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertBeforeTime: 'string',
      dimensions: 'string',
      groupId: 'string',
      namespace: 'string',
      page: 'number',
      pageSize: 'number',
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

