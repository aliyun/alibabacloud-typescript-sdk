// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePackageOrdersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  apiKey?: string;
  currentPage?: number;
  desktopIdList?: string[];
  orderIdList?: string[];
  orderStatusList?: string[];
  pageSize?: number;
  productTypeList?: string[];
  resourceIdList?: string[];
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      currentPage: 'CurrentPage',
      desktopIdList: 'DesktopIdList',
      orderIdList: 'OrderIdList',
      orderStatusList: 'OrderStatusList',
      pageSize: 'PageSize',
      productTypeList: 'ProductTypeList',
      resourceIdList: 'ResourceIdList',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      currentPage: 'number',
      desktopIdList: { 'type': 'array', 'itemType': 'string' },
      orderIdList: { 'type': 'array', 'itemType': 'string' },
      orderStatusList: { 'type': 'array', 'itemType': 'string' },
      pageSize: 'number',
      productTypeList: { 'type': 'array', 'itemType': 'string' },
      resourceIdList: { 'type': 'array', 'itemType': 'string' },
      sessionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopIdList)) {
      $dara.Model.validateArray(this.desktopIdList);
    }
    if(Array.isArray(this.orderIdList)) {
      $dara.Model.validateArray(this.orderIdList);
    }
    if(Array.isArray(this.orderStatusList)) {
      $dara.Model.validateArray(this.orderStatusList);
    }
    if(Array.isArray(this.productTypeList)) {
      $dara.Model.validateArray(this.productTypeList);
    }
    if(Array.isArray(this.resourceIdList)) {
      $dara.Model.validateArray(this.resourceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

