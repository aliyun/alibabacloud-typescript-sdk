// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterPayTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp11q28kvl688****
   */
  dbClusterId?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go.
   * *   **Prepaid**: subscription.
   * 
   * This parameter is required.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The subscription type of the subscription cluster. Valid values:
   * 
   * *   **Year**: subscription on a yearly basis.
   * *   **Month**: subscription on a monthly basis.
   * 
   * > This parameter must be specified when PayType is set to Prepaid.
   * 
   * @example
   * Year
   */
  period?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The subscription duration of the subscription cluster.
   * 
   * *   Valid values when Period is set to Year: 1, 2, 3, and 5 (integer).
   * *   Valid values when Period is set to Month: 1 to 11 (integer).
   * 
   * > 
   * 
   * *   This parameter must be specified when PayType is set to Prepaid.
   * 
   * *   Longer subscription durations offer more savings. Purchasing a cluster for one year is more cost-effective than purchasing the cluster for 10 or 11 months.
   * 
   * @example
   * 1
   */
  usedTime?: string;
  static names(): { [key: string]: string } {
    return {
      dbClusterId: 'DbClusterId',
      payType: 'PayType',
      period: 'Period',
      regionId: 'RegionId',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbClusterId: 'string',
      payType: 'string',
      period: 'string',
      regionId: 'string',
      usedTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

