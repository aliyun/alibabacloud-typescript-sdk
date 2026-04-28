// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGatewayListResponseBodyItems extends $dara.Model {
  /**
   * @example
   * 2020-08-14T05:58:42Z
   */
  createTime?: string;
  /**
   * @example
   * polardb_mysql
   */
  dbType?: string;
  expireTime?: string;
  expired?: boolean;
  /**
   * @example
   * pg-xxxxxxx
   */
  gwClusterId?: string;
  /**
   * @example
   * pg-xxxxxx
   */
  gwDescription?: string;
  /**
   * @example
   * 2024-10-29T09:31:37Z
   */
  modifyTime?: string;
  /**
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * ACTIVATION
   */
  status?: string;
  /**
   * @example
   * vsw-wz9u0v2yuskt1gth3uuju
   */
  vSwitchId?: string;
  /**
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
  items?: DescribeGatewayListResponseBodyItems[];
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 30
   */
  pageRecordCount?: string;
  /**
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

