// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpnConnectionLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The start time of the flow log. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * >  If you specify **From**, you must specify **To** or **MinutePeriod**.
   * 
   * @example
   * 1671003744
   */
  from?: number;
  /**
   * @remarks
   * The interval at which log data is collected. Valid values: **1** to **10**. Unit: minutes.
   * 
   * >  If you do not specify **From** and **To**, you must specify **MinutePeriod**.
   * 
   * @example
   * 10
   */
  minutePeriod?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1** to **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the IPsec-VPN connection.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
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
   * The end time of the flow log. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * >  If you specify **To**, you must specify **From** or **MinutePeriod**.
   * 
   * @example
   * 1671004344
   */
  to?: number;
  /**
   * @remarks
   * The ID of the IPsec-VPN connection.
   * 
   * This parameter is available only for a dual-tunnel IPsec-VPN connection.
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

