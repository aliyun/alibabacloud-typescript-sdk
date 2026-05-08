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
   * The billing method of the cluster. Valid values:
   * *   **Postpaid**: pay-as-you-go.
   * *   **Prepaid**: subscription.
   * 
   * This parameter is required.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The subscription type of the subscription cluster. Valid values:
   * 
   * *   **Year**: subscription on a yearly basis.
   * *   **Month**: subscription on a monthly basis.
   * 
   * >  This parameter must be specified when PayType is set to Prepaid.
   * 
   * @example
   * Year
   */
  period?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The subscription period of the subscription cluster.
   * 
   * *   Valid values when Period is set to Year: 1, 2, and 3 (integer)
   * *   Valid values when Period is set to Month: 1 to 9 (integer)
   * 
   * > * This parameter is required if the PayType parameter is set to Prepaid.
   * > * Longer subscription periods offer more savings. Purchasing a cluster for one year is more cost-effective than purchasing the cluster for 10 or 11 months.
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

