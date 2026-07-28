// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpnConnectionLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The start time of the log. Only UNIX timestamps in seconds are supported. For example, 1671003744 represents 2022-12-14 15:42:24.
   * 
   * > If you specify **From**, you must also specify **To** or **MinutePeriod**.
   * 
   * @example
   * 1671003744
   */
  from?: number;
  /**
   * @remarks
   * The log period. Valid values: **1** to **10**. Unit: minutes.
   * 
   * > If you do not specify **From** or **To**, you must specify **MinutePeriod**.
   * 
   * @example
   * 10
   */
  minutePeriod?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the list. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for paging. Valid values: **1** to **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the IPsec-VPN connection.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * eu-central-1
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The end time of the log. Only UNIX timestamps in seconds are supported. For example, 1671004344 represents 2022-12-14 15:52:24.
   * 
   * > If you specify **To**, you must also specify **From** or **MinutePeriod**.
   * 
   * @example
   * 1671004344
   */
  to?: number;
  /**
   * @remarks
   * The tunnel ID of the IPsec-VPN connection.
   * 
   * This parameter is supported only for IPsec-VPN connections in dual-tunnel mode.
   * 
   * @example
   * tun-opsqc4d97wni27****
   */
  tunnelId?: string;
  /**
   * @remarks
   * The ID of the IPsec-VPN connection.
   * 
   * This parameter is required.
   * 
   * @example
   * vco-m5evqnds4y459flt3****
   */
  vpnConnectionId?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      minutePeriod: 'MinutePeriod',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      to: 'To',
      tunnelId: 'TunnelId',
      vpnConnectionId: 'VpnConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      minutePeriod: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      to: 'number',
      tunnelId: 'string',
      vpnConnectionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

