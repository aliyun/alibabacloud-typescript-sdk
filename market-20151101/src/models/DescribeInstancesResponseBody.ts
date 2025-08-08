// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstanceItemsInstanceItem extends $dara.Model {
  /**
   * @example
   * {}
   */
  apiJson?: string;
  /**
   * @example
   * {"frontEndUrl":"https://***.aliyun.com","password":"Sjtv***","adminUrl":"https://***.aiiyun.com","username":"aliyun***"}
   */
  appJson?: string;
  /**
   * @example
   * 1570634021000
   */
  beganOn?: number;
  /**
   * @example
   * 1570634021000
   */
  createdOn?: number;
  /**
   * @example
   * 1570644021000
   */
  endOn?: number;
  extendJson?: string;
  /**
   * @example
   * {"password":"***","ip":"118.31.***.41","innerIp":"118.31.***.41","region":"","username":"***","beianInfo":""}
   */
  hostJson?: string;
  /**
   * @example
   * {}
   */
  idaasJson?: string;
  /**
   * @example
   * {}
   */
  imageJson?: string;
  /**
   * @example
   * 1551111111
   */
  instanceId?: number;
  /**
   * @example
   * 204211111111111
   */
  orderId?: number;
  /**
   * @example
   * cmgj00**11
   */
  productCode?: string;
  productName?: string;
  /**
   * @example
   * cmgj00**11-prepay
   */
  productSkuCode?: string;
  /**
   * @example
   * APP
   */
  productType?: string;
  /**
   * @example
   * OPENED
   */
  status?: string;
  supplierName?: string;
  static names(): { [key: string]: string } {
    return {
      apiJson: 'ApiJson',
      appJson: 'AppJson',
      beganOn: 'BeganOn',
      createdOn: 'CreatedOn',
      endOn: 'EndOn',
      extendJson: 'ExtendJson',
      hostJson: 'HostJson',
      idaasJson: 'IdaasJson',
      imageJson: 'ImageJson',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      productCode: 'ProductCode',
      productName: 'ProductName',
      productSkuCode: 'ProductSkuCode',
      productType: 'ProductType',
      status: 'Status',
      supplierName: 'SupplierName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiJson: 'string',
      appJson: 'string',
      beganOn: 'number',
      createdOn: 'number',
      endOn: 'number',
      extendJson: 'string',
      hostJson: 'string',
      idaasJson: 'string',
      imageJson: 'string',
      instanceId: 'number',
      orderId: 'number',
      productCode: 'string',
      productName: 'string',
      productSkuCode: 'string',
      productType: 'string',
      status: 'string',
      supplierName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstanceItems extends $dara.Model {
  instanceItem?: DescribeInstancesResponseBodyInstanceItemsInstanceItem[];
  static names(): { [key: string]: string } {
    return {
      instanceItem: 'InstanceItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceItem: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstanceItemsInstanceItem },
    };
  }

  validate() {
    if(Array.isArray(this.instanceItem)) {
      $dara.Model.validateArray(this.instanceItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBody extends $dara.Model {
  instanceItems?: DescribeInstancesResponseBodyInstanceItems;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 54C22FB9-0CB1-5629-97A8-653FC7990F00
   */
  requestId?: string;
  /**
   * @example
   * 55
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceItems: 'InstanceItems',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceItems: DescribeInstancesResponseBodyInstanceItems,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.instanceItems && typeof (this.instanceItems as any).validate === 'function') {
      (this.instanceItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

