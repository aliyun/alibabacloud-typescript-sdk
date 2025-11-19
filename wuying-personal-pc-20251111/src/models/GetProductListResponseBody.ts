// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProductListResponseBodyDisplayInfoProductListSkuList extends $dara.Model {
  appleSkuCode?: string;
  attribute?: string;
  purchaseMode?: string;
  skuCode?: string;
  skuDesc?: string;
  skuName?: string;
  static names(): { [key: string]: string } {
    return {
      appleSkuCode: 'AppleSkuCode',
      attribute: 'Attribute',
      purchaseMode: 'PurchaseMode',
      skuCode: 'SkuCode',
      skuDesc: 'SkuDesc',
      skuName: 'SkuName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appleSkuCode: 'string',
      attribute: 'string',
      purchaseMode: 'string',
      skuCode: 'string',
      skuDesc: 'string',
      skuName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductListResponseBodyDisplayInfoProductList extends $dara.Model {
  displayAttribute?: string;
  displayConfig?: string;
  dynamicAttribute?: string;
  isEnable?: boolean;
  modificationLevel?: number;
  productCode?: string;
  productDesc?: string;
  productGroup?: string;
  productName?: string;
  productType?: string;
  skuList?: GetProductListResponseBodyDisplayInfoProductListSkuList[];
  static names(): { [key: string]: string } {
    return {
      displayAttribute: 'DisplayAttribute',
      displayConfig: 'DisplayConfig',
      dynamicAttribute: 'DynamicAttribute',
      isEnable: 'IsEnable',
      modificationLevel: 'ModificationLevel',
      productCode: 'ProductCode',
      productDesc: 'ProductDesc',
      productGroup: 'ProductGroup',
      productName: 'ProductName',
      productType: 'ProductType',
      skuList: 'SkuList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayAttribute: 'string',
      displayConfig: 'string',
      dynamicAttribute: 'string',
      isEnable: 'boolean',
      modificationLevel: 'number',
      productCode: 'string',
      productDesc: 'string',
      productGroup: 'string',
      productName: 'string',
      productType: 'string',
      skuList: { 'type': 'array', 'itemType': GetProductListResponseBodyDisplayInfoProductListSkuList },
    };
  }

  validate() {
    if(Array.isArray(this.skuList)) {
      $dara.Model.validateArray(this.skuList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductListResponseBodyDisplayInfo extends $dara.Model {
  productList?: GetProductListResponseBodyDisplayInfoProductList[];
  static names(): { [key: string]: string } {
    return {
      productList: 'ProductList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productList: { 'type': 'array', 'itemType': GetProductListResponseBodyDisplayInfoProductList },
    };
  }

  validate() {
    if(Array.isArray(this.productList)) {
      $dara.Model.validateArray(this.productList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductListResponseBody extends $dara.Model {
  code?: string;
  displayInfo?: GetProductListResponseBodyDisplayInfo;
  maxResults?: number;
  message?: string;
  nextToken?: string;
  requestId?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      displayInfo: 'DisplayInfo',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      displayInfo: GetProductListResponseBodyDisplayInfo,
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    if(this.displayInfo && typeof (this.displayInfo as any).validate === 'function') {
      (this.displayInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

