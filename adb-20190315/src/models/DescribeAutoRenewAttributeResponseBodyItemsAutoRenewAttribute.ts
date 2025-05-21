// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoRenewAttributeResponseBodyItemsAutoRenewAttribute extends $dara.Model {
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled for the cluster. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  autoRenewEnabled?: boolean;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The renewal duration.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The unit of the renewal duration. Valid values:
   * 
   * *   **Year**
   * *   **Month**
   * 
   * @example
   * Year
   */
  periodUnit?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The renewal status of the cluster. Valid values:
   * 
   * *   **AutoRenewal**: The cluster is automatically renewed.
   * *   **Normal**: The cluster is manually renewed. Before the cluster expires, the system sends you a reminder by SMS message.
   * *   **NotRenewal**: The cluster is not renewed. Three days before the cluster expires, the system sends you a reminder by SMS message to remind you that the cluster is not renewed. However, the system does not send you a reminder when the cluster expires.
   * 
   * @example
   * AutoRenewal
   */
  renewalStatus?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewEnabled: 'AutoRenewEnabled',
      DBClusterId: 'DBClusterId',
      duration: 'Duration',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      renewalStatus: 'RenewalStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewEnabled: 'boolean',
      DBClusterId: 'string',
      duration: 'number',
      periodUnit: 'string',
      regionId: 'string',
      renewalStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

