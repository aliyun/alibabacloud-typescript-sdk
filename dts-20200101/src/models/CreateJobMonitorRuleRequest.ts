// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobMonitorRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The threshold for triggering an alert.
   * 
   * *   If **Type** is set to **delay**, the threshold must be an integer in units of seconds. You can specify the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
   * *   If **Type** is set to **full_timeout**, the threshold must be an integer in units of hours.
   * 
   * > This parameter is required if **Type** is set to **delay** or **full_timeout** and **State** is set to **Y**.
   * 
   * @example
   * 11
   */
  delayRuleTime?: number;
  /**
   * @remarks
   * The ID of the data migration, data synchronization, or change tracking task. You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query the task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i03e3zty16i****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The alert threshold.
   * 
   * @example
   * 2
   */
  noticeValue?: number;
  /**
   * @remarks
   * The statistical period of the incremental data verification task. Unit: minutes.
   * 
   * > Valid values: 1, 3, 5, and 30.
   * 
   * @example
   * 5
   */
  period?: number;
  /**
   * @remarks
   * The mobile numbers that receive alert notifications. Separate multiple mobile numbers with commas (,).
   * 
   * > 
   * 
   * *   This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers.
   * 
   * *   Users of the international site (alibabacloud.com) cannot receive notifications on alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console. For more information, see [Configure alert rules for DTS tasks in the CloudMonitor console](https://help.aliyun.com/document_detail/175876.html).
   * 
   * @example
   * 1361234****,1371234****
   */
  phone?: string;
  /**
   * @remarks
   * The region ID of the DTS instance. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to enable the alert rule. Valid values:
   * 
   * *   **Y**: enables the alert rule.
   * *   **N**: disables the alert rule.
   * 
   * Default value: **Y**.
   * 
   * @example
   * Y
   */
  state?: string;
  /**
   * @remarks
   * The number of statistical periods of the incremental data verification task.
   * 
   * @example
   * 2
   */
  times?: number;
  /**
   * @remarks
   * The metric that is used to monitor the task. Valid values:
   * 
   * *   **delay**: the **Latency** metric.
   * *   **error**: the **Status** metric.
   * *   **full_timeout**: the **Full Timeout** metric.
   * 
   * Default value: **error**. You must manually set this value.
   * 
   * @example
   * delay
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      delayRuleTime: 'DelayRuleTime',
      dtsJobId: 'DtsJobId',
      noticeValue: 'NoticeValue',
      period: 'Period',
      phone: 'Phone',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      state: 'State',
      times: 'Times',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delayRuleTime: 'number',
      dtsJobId: 'string',
      noticeValue: 'number',
      period: 'number',
      phone: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      state: 'string',
      times: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

