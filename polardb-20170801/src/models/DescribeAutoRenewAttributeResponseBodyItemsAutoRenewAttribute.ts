// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoRenewAttributeResponseBodyItemsAutoRenewAttribute extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the auto-renewal feature is enabled. Valid values:
   * 
   * *   true: enabled
   * *   false: disabled
   * 
   * @example
   * true
   */
  autoRenewEnabled?: boolean;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * pc-*****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The renewal duration.
   * 
   * @example
   * 4
   */
  duration?: number;
  /**
   * @remarks
   * The unit of the duration. Valid values:
   * 
   * *   Year
   * *   Month
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The renewal status. Valid values:
   * 
   * *   AutoRenewal: The cluster is automatically renewed.
   * *   Normal: The cluster is manually renewed. The system sends a text message to remind you before the cluster expires.
   * *   NotRenewal: The cluster is not renewed. The system does not send a reminder for expiration but only sends a text message three days before the cluster expires to remind you that the cluster is not renewed.
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

