// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLicensesRequestOrders extends $dara.Model {
  orderBy?: string;
  orderDirection?: string;
  static names(): { [key: string]: string } {
    return {
      orderBy: 'OrderBy',
      orderDirection: 'OrderDirection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderBy: 'string',
      orderDirection: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLicensesRequest extends $dara.Model {
  appId?: string;
  appName?: string;
  appType?: number;
  businessType?: string;
  needTotalCount?: boolean;
  offset?: number;
  orders?: ListLicensesRequestOrders[];
  pageNo?: number;
  pageSize?: number;
  pkgName?: string;
  platformType?: number;
  product?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appType: 'AppType',
      businessType: 'BusinessType',
      needTotalCount: 'NeedTotalCount',
      offset: 'Offset',
      orders: 'Orders',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      pkgName: 'PkgName',
      platformType: 'PlatformType',
      product: 'Product',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appType: 'number',
      businessType: 'string',
      needTotalCount: 'boolean',
      offset: 'number',
      orders: { 'type': 'array', 'itemType': ListLicensesRequestOrders },
      pageNo: 'number',
      pageSize: 'number',
      pkgName: 'string',
      platformType: 'number',
      product: 'string',
      userId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.orders)) {
      $dara.Model.validateArray(this.orders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

