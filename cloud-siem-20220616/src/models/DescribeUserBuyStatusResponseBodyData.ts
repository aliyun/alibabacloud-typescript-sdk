// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserBuyStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the logon Alibaba Cloud account can be used to place orders for the threat analysis feature, such as purchase, upgrade, and specifications change orders. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  canBuy?: boolean;
  /**
   * @remarks
   * The log storage capacity that is purchased for the threat analysis feature. Unit: GB.
   * 
   * @example
   * 1024
   */
  capacity?: number;
  /**
   * @remarks
   * The number of days before the expiration time of the threat analysis feature.
   * 
   * @example
   * 3
   */
  durationDays?: number;
  /**
   * @remarks
   * The timestamp when the threat analysis feature expires. Unit: milliseconds.
   * 
   * @example
   * 1669823999000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to purchase the threat analysis feature.
   * 
   * @example
   * 123XXXXXX
   */
  mainUserId?: number;
  /**
   * @remarks
   * The username of the Alibaba Cloud account that is used to purchase the threat analysis feature.
   * 
   * @example
   * sas_account_xxx
   */
  mainUserName?: string;
  /**
   * @remarks
   * The ID of the management account of the resource directory.
   * 
   * @example
   * 123XXXXXX
   */
  masterUserId?: number;
  /**
   * @remarks
   * The display name of the management account of the resource directory.
   * 
   * @example
   * rd_master_xxx
   */
  masterUserName?: string;
  /**
   * @example
   * 1
   */
  rdOrder?: number;
  /**
   * @remarks
   * The instance ID of Security Center.
   * 
   * @example
   * sas-instance-xxxxx
   */
  sasInstanceId?: string;
  /**
   * @remarks
   * The ID of the logon Alibaba Cloud account.
   * 
   * @example
   * 123XXXXXX
   */
  subUserId?: number;
  /**
   * @remarks
   * The username of the logon Alibaba Cloud account.
   * 
   * @example
   * sas_account_xxx
   */
  subUserName?: string;
  static names(): { [key: string]: string } {
    return {
      canBuy: 'CanBuy',
      capacity: 'Capacity',
      durationDays: 'DurationDays',
      endTime: 'EndTime',
      mainUserId: 'MainUserId',
      mainUserName: 'MainUserName',
      masterUserId: 'MasterUserId',
      masterUserName: 'MasterUserName',
      rdOrder: 'RdOrder',
      sasInstanceId: 'SasInstanceId',
      subUserId: 'SubUserId',
      subUserName: 'SubUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canBuy: 'boolean',
      capacity: 'number',
      durationDays: 'number',
      endTime: 'number',
      mainUserId: 'number',
      mainUserName: 'string',
      masterUserId: 'number',
      masterUserName: 'string',
      rdOrder: 'number',
      sasInstanceId: 'string',
      subUserId: 'number',
      subUserName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

