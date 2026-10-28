// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobMonitorRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The threshold that triggers an alert.
   * 
   * - If **Type** is set to **delay**, the unit is seconds and the value must be an integer. You can set the threshold based on your business requirements. We recommend that you set the threshold to 10 seconds or more to prevent alerts triggered by latency fluctuations caused by network conditions or database loads.
   * 
   * - If **Type** is set to **full_timeout**, the unit is hours and the value must be an integer.
   * 
   * > You must specify this parameter when **Type** is set to **delay** or **full_timeout** and **State** is set to **Y**.
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
   * > Valid values: 1, 5, 10, and 30.
   * 
   * @example
   * 5
   */
  period?: number;
  /**
   * @remarks
   * The mobile phone numbers of the contacts to receive alert notifications. Separate multiple mobile phone numbers with commas (,).
   * > - This parameter is supported only on the Alibaba Cloud China site. Only mobile phone numbers in the Chinese mainland are supported, and you can specify up to 10 mobile phone numbers.
   * > - The Alibaba Cloud International site does not support mobile phone alerts. You can only [configure alert rules for DTS tasks by using CloudMonitor](https://help.aliyun.com/document_detail/175876.html).
   * 
   * @example
   * 1361234****,1371234****
   */
  phone?: string;
  /**
   * @remarks
   * The region where the DTS instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to enable the alert rule. Valid values:
   * 
   * - **Y**: Enables the alert rule.
   * - **N**: Disables the alert rule.
   * 
   * Default value: **Y**.
   * 
   * @example
   * Y
   */
  state?: string;
  /**
   * @remarks
   * The number of periods for the incremental data verification task.
   * 
   * @example
   * 2
   */
  times?: number;
  /**
   * @remarks
   * The type of the monitoring metric. Valid values:
   * - **delay**: **Latency**.
   * - **error**: **Migration status**.
   * - **full_timeout**: **Full run duration**.
   * 
   * Default value: **error**. You must manually specify this parameter.
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

