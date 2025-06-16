// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpnSslServerLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The beginning of the time range to query. The value must be a unix timestamp. For example, 1600738962 specifies 09:42:42 (UTC+8) on September 22, 2020.
   * 
   * >  If you specify **From**, you must also specify **To** or **MinutePeriod**.
   * 
   * @example
   * 1600738962
   */
  from?: number;
  /**
   * @remarks
   * The interval at which log data is queried. Unit: minutes.
   * 
   * >  If both **From** and **To** are not specified, you must specify **MinutePeriod**.
   * 
   * @example
   * 10
   */
  minutePeriod?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region where the SSL server is created. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the SSL client certificate.
   * 
   * @example
   * vsc-m5euof6s5jy8vs5kd****
   */
  sslVpnClientCertId?: string;
  /**
   * @remarks
   * The end of the time range to query. The value must be a unix timestamp. For example, 1600738962 specifies 09:42:42 (UTC+8) on September 22, 2020.
   * 
   * >  If you specify **To**, you must also specify **From** or **MinutePeriod**.
   * 
   * @example
   * 1600738962
   */
  to?: number;
  /**
   * @remarks
   * The ID of the SSL server.
   * 
   * This parameter is required.
   * 
   * @example
   * vss-bp155e9yclsg1xgq4****
   */
  vpnSslServerId?: string;
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
      sslVpnClientCertId: 'SslVpnClientCertId',
      to: 'To',
      vpnSslServerId: 'VpnSslServerId',
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
      sslVpnClientCertId: 'string',
      to: 'number',
      vpnSslServerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

