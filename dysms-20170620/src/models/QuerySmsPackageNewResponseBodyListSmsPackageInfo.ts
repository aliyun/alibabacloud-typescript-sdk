// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsPackageNewResponseBodyListSmsPackageInfo extends $dara.Model {
  buyTime?: string;
  detailOrderId?: string;
  effTime?: string;
  expTime?: string;
  orderId?: string;
  packageName?: string;
  packageType?: string;
  payPrice?: number;
  pkgId?: number;
  refundStatus?: number;
  state?: number;
  total?: number;
  usage?: number;
  static names(): { [key: string]: string } {
    return {
      buyTime: 'BuyTime',
      detailOrderId: 'DetailOrderId',
      effTime: 'EffTime',
      expTime: 'ExpTime',
      orderId: 'OrderId',
      packageName: 'PackageName',
      packageType: 'PackageType',
      payPrice: 'PayPrice',
      pkgId: 'PkgId',
      refundStatus: 'RefundStatus',
      state: 'State',
      total: 'Total',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyTime: 'string',
      detailOrderId: 'string',
      effTime: 'string',
      expTime: 'string',
      orderId: 'string',
      packageName: 'string',
      packageType: 'string',
      payPrice: 'number',
      pkgId: 'number',
      refundStatus: 'number',
      state: 'number',
      total: 'number',
      usage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

