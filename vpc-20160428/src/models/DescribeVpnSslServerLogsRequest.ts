// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpnSslServerLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The start time of the log. Only UNIX timestamps in seconds are supported. For example, 1600738962 represents 2020-09-22 09:42:42.
   * 
   * > If you specify **From**, you must also specify **To** or **MinutePeriod**.
   * 
   * @example
   * 1600738962
   */
  from?: number;
  /**
   * @remarks
   * The log period. Unit: minutes.
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
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page when using paging. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the SSL server. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
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
   * The end time of the log. Only UNIX timestamps in seconds are supported. For example, 1600738962 represents 2020-09-22 09:42:42.
   * 
   * > If you specify **To**, you must also specify **From** or **MinutePeriod**.
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

