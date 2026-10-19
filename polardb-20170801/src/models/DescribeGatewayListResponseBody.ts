// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGatewayListResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * The time is in ISO 8601 format in UTC (format: YYYY-MM-DDTHH:mm:ssZ).
   * 
   * @example
   * 2020-08-14T05:58:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The database type.
   * 
   * @example
   * polardb_mysql
   */
  dbType?: string;
  /**
   * @remarks
   * The expiration time of the cluster.
   * - If the billing method of the cluster is subscription, the actual expiration time is returned.
   * - If the billing method of the cluster is pay-as-you-go, an empty value is returned.
   * 
   * The time is in ISO 8601 format in UTC (format: YYYY-MM-DDTHH:mm:ssZ).
   * 
   * @example
   * 2028-09-01T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether the cluster has expired. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * false
   */
  expired?: boolean;
  /**
   * @remarks
   * The gateway instance ID.
   * 
   * @example
   * pg-xxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The gateway description.
   * 
   * @example
   * pg-xxxxxx
   */
  gwDescription?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * The time is in ISO 8601 format in UTC (format: YYYY-MM-DDTHH:mm:ssZ).
   * 
   * @example
   * 2024-10-29T09:31:37Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The billing method. Valid values: 
   * 
   * - **Postpaid**: pay-as-you-go.
   * - **Prepaid**: subscription.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The application status. Valid values:
   * 
   * - CREATE: being created.
   * - ACTIVATION: running.
   * 
   * @example
   * ACTIVATION
   */
  status?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-wz9u0v2yuskt1gth3uuju
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-****************
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dbType: 'DbType',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      gwClusterId: 'GwClusterId',
      gwDescription: 'GwDescription',
      modifyTime: 'ModifyTime',
      payType: 'PayType',
      regionId: 'RegionId',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dbType: 'string',
      expireTime: 'string',
      expired: 'boolean',
      gwClusterId: 'string',
      gwDescription: 'string',
      modifyTime: 'string',
      payType: 'string',
      regionId: 'string',
      status: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of gateway instances.
   */
  items?: DescribeGatewayListResponseBodyItems[];
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * * **30**
   * * **50**
   * * **100**
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CED079B7-A408-41A1-BFF1-EC608E******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalRecordCount?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeGatewayListResponseBodyItems },
      pageNumber: 'string',
      pageRecordCount: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalRecordCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

