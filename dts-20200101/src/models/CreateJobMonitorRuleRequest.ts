// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobMonitorRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The threshold for triggering an alert.
   * 
   * - If **Type** is set to **delay**, the unit is seconds and the value must be an integer. Set the threshold based on your business requirements. A value of 10 or greater is recommended to avoid alert fluctuations caused by network issues or database loads.
   * 
   * - If **Type** is set to **full_timeout**, the unit is hours and the value must be an integer.
   * 
   * > This parameter is required when **Type** is set to **delay** or **full_timeout** and **State** is set to **Y**.
   * 
   * @example
   * 11
   */
  delayRuleTime?: number;
  /**
   * @remarks
   * The ID of the data migration, data synchronization, or change tracking task. You can call [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) to obtain the task ID.
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
   * The statistical period of the incremental verification task. Unit: minutes.
   * 
   * > Valid values: 1, 5, 10, and 30.
   * 
   * @example
   * 5
   */
  period?: number;
  /**
   * @remarks
   * The mobile phone numbers of alert contacts, separated by commas (,).
   * >-  This parameter is supported only on the China site (aliyun.com) and only for the Chinese mainland mobile phone numbers. A maximum of 10 mobile phone numbers can be specified.
   * - The international site does not support SMS-based alerting. You can only [set alert rules for DTS tasks through the CloudMonitor monitoring platform](https://help.aliyun.com/document_detail/175876.html).
   * 
   * @example
   * 1361234****,1371234****
   */
  phone?: string;
  /**
   * @remarks
   * The region in which the DTS instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to enable the alert rule. Valid values:
   * 
   * - **Y**: Enable the alert rule.
   * - **N**: Disable the alert rule.
   * 
   * Default value: **Y**.
   * 
   * @example
   * Y
   */
  state?: string;
  /**
   * @remarks
   * The number of statistical periods for the incremental verification task.
   * 
   * @example
   * 2
   */
  times?: number;
  /**
   * @remarks
   * The type of the alert metric. Valid values:
   * - **delay**: the **Latency** metric.
   * - **error**: the **Migration Status** metric.
   * - **full_timeout**: the **Full Migration Duration** metric.
   * 
   * Default value: **error**. This parameter must be manually specified.
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

