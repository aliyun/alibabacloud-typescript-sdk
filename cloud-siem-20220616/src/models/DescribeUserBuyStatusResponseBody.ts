// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserBuyStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the current account can perform operations on threat analysis orders. Valid values:
   * 
   * - true: The account can purchase, upgrade, or downgrade threat analysis.
   * 
   * - false: The account cannot perform operations on threat analysis orders.
   * 
   * @example
   * true
   */
  canBuy?: boolean;
  /**
   * @remarks
   * The purchased capacity of Simple Log Service (SLS) for threat analysis. Unit: GB.
   * 
   * @example
   * 1024
   */
  capacity?: number;
  /**
   * @remarks
   * The number of days before threat analysis expires.
   * 
   * @example
   * 3
   */
  durationDays?: number;
  /**
   * @remarks
   * The expiration time of threat analysis. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1669823999000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that purchased threat analysis.
   * 
   * @example
   * 123XXXXXX
   */
  mainUserId?: number;
  /**
   * @remarks
   * The name of the Alibaba Cloud account that purchased threat analysis.
   * 
   * @example
   * sas_account_xxx
   */
  mainUserName?: string;
  /**
   * @remarks
   * The ID of the master account of the resource directory.
   * 
   * @example
   * 123XXXXXX
   */
  masterUserId?: number;
  /**
   * @remarks
   * The display name of the master account of the resource directory.
   * 
   * @example
   * rd_master_xxx
   */
  masterUserName?: string;
  /**
   * @remarks
   * The type of the current order.
   * 
   * - 0: The order includes threat analysis traffic and capacity.
   * 
   * - 1: The order includes only threat analysis capacity.
   * 
   * @example
   * 1
   */
  rdOrder?: number;
  /**
   * @remarks
   * The ID of the Security Center instance.
   * 
   * @example
   * sas-instance-xxxxx
   */
  sasInstanceId?: string;
  /**
   * @remarks
   * The ID of the currently logged-on Alibaba Cloud account.
   * 
   * @example
   * 123XXXXXX
   */
  subUserId?: number;
  /**
   * @remarks
   * The name of the currently logged-on Alibaba Cloud account.
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

export class DescribeUserBuyStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: DescribeUserBuyStatusResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 81D8EC0C-0804-51AD-8C38-17ED0BC74892
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeUserBuyStatusResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

