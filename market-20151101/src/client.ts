// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ActivateLicenseRequest extends $tea.Model {
  identification?: string;
  licenseCode?: string;
  static names(): { [key: string]: string } {
    return {
      identification: 'Identification',
      licenseCode: 'LicenseCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identification: 'string',
      licenseCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateLicenseResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateLicenseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ActivateLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ActivateLicenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AutoRenewInstanceRequest extends $tea.Model {
  autoRenewCycle?: string;
  autoRenewDuration?: number;
  orderBizId?: number;
  ownerId?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewCycle: 'AutoRenewCycle',
      autoRenewDuration: 'AutoRenewDuration',
      orderBizId: 'OrderBizId',
      ownerId: 'OwnerId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewCycle: 'string',
      autoRenewDuration: 'number',
      orderBizId: 'number',
      ownerId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AutoRenewInstanceResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AutoRenewInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AutoRenewInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AutoRenewInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderRequest extends $tea.Model {
  clientToken?: string;
  commodity?: string;
  orderSouce?: string;
  orderType?: string;
  ownerId?: string;
  paymentType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commodity: 'Commodity',
      orderSouce: 'OrderSouce',
      orderType: 'OrderType',
      ownerId: 'OwnerId',
      paymentType: 'PaymentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commodity: 'string',
      orderSouce: 'string',
      orderType: 'string',
      ownerId: 'string',
      paymentType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponseBody extends $tea.Model {
  instanceIds?: CreateOrderResponseBodyInstanceIds;
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: CreateOrderResponseBodyInstanceIds,
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CrossAccountVerifyTokenRequest extends $tea.Model {
  token?: string;
  static names(): { [key: string]: string } {
    return {
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CrossAccountVerifyTokenResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: CrossAccountVerifyTokenResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: CrossAccountVerifyTokenResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CrossAccountVerifyTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CrossAccountVerifyTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CrossAccountVerifyTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiMeteringRequest extends $tea.Model {
  pageNum?: number;
  productCode?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'pageNum',
      productCode: 'productCode',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      productCode: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiMeteringResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  fatal?: boolean;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  result?: DescribeApiMeteringResponseBodyResult[];
  success?: boolean;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      fatal: 'Fatal',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      fatal: 'boolean',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeApiMeteringResponseBodyResult },
      success: 'boolean',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiMeteringResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApiMeteringResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApiMeteringResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCurrentNodeInfoRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCurrentNodeInfoResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeCurrentNodeInfoResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeCurrentNodeInfoResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCurrentNodeInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCurrentNodeInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCurrentNodeInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistributionProductsRequest extends $tea.Model {
  filter?: DescribeDistributionProductsRequestFilter[];
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': DescribeDistributionProductsRequestFilter },
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistributionProductsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  results?: DescribeDistributionProductsResponseBodyResults[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      results: 'Results',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': DescribeDistributionProductsResponseBodyResults },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistributionProductsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDistributionProductsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDistributionProductsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistributionProductsLinkRequest extends $tea.Model {
  codes?: string[];
  static names(): { [key: string]: string } {
    return {
      codes: 'Codes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistributionProductsLinkShrinkRequest extends $tea.Model {
  codesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      codesShrink: 'Codes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistributionProductsLinkResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeDistributionProductsLinkResponseBodyResult[];
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeDistributionProductsLinkResponseBodyResult },
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistributionProductsLinkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDistributionProductsLinkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDistributionProductsLinkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRequest extends $tea.Model {
  instanceId?: string;
  orderType?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderType: 'OrderType',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      orderType: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBody extends $tea.Model {
  appJson?: string;
  autoRenewal?: string;
  beganOn?: number;
  componentJson?: string;
  constraints?: string;
  createdOn?: number;
  endOn?: number;
  extendJson?: string;
  hostJson?: string;
  instanceId?: number;
  isTrial?: boolean;
  modules?: DescribeInstanceResponseBodyModules;
  orderId?: number;
  productCode?: string;
  productName?: string;
  productSkuCode?: string;
  productType?: string;
  relationalData?: DescribeInstanceResponseBodyRelationalData;
  status?: string;
  supplierName?: string;
  static names(): { [key: string]: string } {
    return {
      appJson: 'AppJson',
      autoRenewal: 'AutoRenewal',
      beganOn: 'BeganOn',
      componentJson: 'ComponentJson',
      constraints: 'Constraints',
      createdOn: 'CreatedOn',
      endOn: 'EndOn',
      extendJson: 'ExtendJson',
      hostJson: 'HostJson',
      instanceId: 'InstanceId',
      isTrial: 'IsTrial',
      modules: 'Modules',
      orderId: 'OrderId',
      productCode: 'ProductCode',
      productName: 'ProductName',
      productSkuCode: 'ProductSkuCode',
      productType: 'ProductType',
      relationalData: 'RelationalData',
      status: 'Status',
      supplierName: 'SupplierName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appJson: 'string',
      autoRenewal: 'string',
      beganOn: 'number',
      componentJson: 'string',
      constraints: 'string',
      createdOn: 'number',
      endOn: 'number',
      extendJson: 'string',
      hostJson: 'string',
      instanceId: 'number',
      isTrial: 'boolean',
      modules: DescribeInstanceResponseBodyModules,
      orderId: 'number',
      productCode: 'string',
      productName: 'string',
      productSkuCode: 'string',
      productType: 'string',
      relationalData: DescribeInstanceResponseBodyRelationalData,
      status: 'string',
      supplierName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequest extends $tea.Model {
  codes?: string;
  exceptCodes?: string;
  pageNumber?: number;
  pageSize?: number;
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      codes: 'Codes',
      exceptCodes: 'ExceptCodes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codes: 'string',
      exceptCodes: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBody extends $tea.Model {
  instanceItems?: DescribeInstancesResponseBodyInstanceItems;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLicenseRequest extends $tea.Model {
  licenseCode?: string;
  static names(): { [key: string]: string } {
    return {
      licenseCode: 'LicenseCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      licenseCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLicenseResponseBody extends $tea.Model {
  license?: DescribeLicenseResponseBodyLicense;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      license: 'License',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      license: DescribeLicenseResponseBodyLicense,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLicenseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeLicenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrderRequest extends $tea.Model {
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrderResponseBody extends $tea.Model {
  accountQuantity?: number;
  aliUid?: number;
  components?: { [key: string]: any };
  couponPrice?: number;
  createdOn?: number;
  instanceIds?: DescribeOrderResponseBodyInstanceIds;
  orderId?: number;
  orderStatus?: string;
  orderType?: string;
  originalPrice?: number;
  paidOn?: number;
  payStatus?: string;
  paymentPrice?: number;
  periodType?: string;
  productCode?: string;
  productName?: string;
  productSkuCode?: string;
  quantity?: number;
  requestId?: string;
  supplierCompanyName?: string;
  supplierTelephones?: DescribeOrderResponseBodySupplierTelephones;
  totalPrice?: number;
  static names(): { [key: string]: string } {
    return {
      accountQuantity: 'AccountQuantity',
      aliUid: 'AliUid',
      components: 'Components',
      couponPrice: 'CouponPrice',
      createdOn: 'CreatedOn',
      instanceIds: 'InstanceIds',
      orderId: 'OrderId',
      orderStatus: 'OrderStatus',
      orderType: 'OrderType',
      originalPrice: 'OriginalPrice',
      paidOn: 'PaidOn',
      payStatus: 'PayStatus',
      paymentPrice: 'PaymentPrice',
      periodType: 'PeriodType',
      productCode: 'ProductCode',
      productName: 'ProductName',
      productSkuCode: 'ProductSkuCode',
      quantity: 'Quantity',
      requestId: 'RequestId',
      supplierCompanyName: 'SupplierCompanyName',
      supplierTelephones: 'SupplierTelephones',
      totalPrice: 'TotalPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountQuantity: 'number',
      aliUid: 'number',
      components: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      couponPrice: 'number',
      createdOn: 'number',
      instanceIds: DescribeOrderResponseBodyInstanceIds,
      orderId: 'number',
      orderStatus: 'string',
      orderType: 'string',
      originalPrice: 'number',
      paidOn: 'number',
      payStatus: 'string',
      paymentPrice: 'number',
      periodType: 'string',
      productCode: 'string',
      productName: 'string',
      productSkuCode: 'string',
      quantity: 'number',
      requestId: 'string',
      supplierCompanyName: 'string',
      supplierTelephones: DescribeOrderResponseBodySupplierTelephones,
      totalPrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceRequest extends $tea.Model {
  commodity?: string;
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      commodity: 'Commodity',
      orderType: 'OrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodity: 'string',
      orderType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBody extends $tea.Model {
  coupons?: DescribePriceResponseBodyCoupons;
  currency?: string;
  cuxiao?: boolean;
  cycle?: string;
  discountPrice?: number;
  duration?: number;
  expressionCode?: string;
  expressionMessage?: string;
  infoTitle?: string;
  originalPrice?: number;
  productCode?: string;
  promotionRules?: DescribePriceResponseBodyPromotionRules;
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      coupons: 'Coupons',
      currency: 'Currency',
      cuxiao: 'Cuxiao',
      cycle: 'Cycle',
      discountPrice: 'DiscountPrice',
      duration: 'Duration',
      expressionCode: 'ExpressionCode',
      expressionMessage: 'ExpressionMessage',
      infoTitle: 'InfoTitle',
      originalPrice: 'OriginalPrice',
      productCode: 'ProductCode',
      promotionRules: 'PromotionRules',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coupons: DescribePriceResponseBodyCoupons,
      currency: 'string',
      cuxiao: 'boolean',
      cycle: 'string',
      discountPrice: 'number',
      duration: 'number',
      expressionCode: 'string',
      expressionMessage: 'string',
      infoTitle: 'string',
      originalPrice: 'number',
      productCode: 'string',
      promotionRules: DescribePriceResponseBodyPromotionRules,
      tradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductRequest extends $tea.Model {
  aliUid?: string;
  code?: string;
  queryDraft?: boolean;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      code: 'Code',
      queryDraft: 'QueryDraft',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      code: 'string',
      queryDraft: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBody extends $tea.Model {
  auditFailMsg?: string;
  auditStatus?: string;
  auditTime?: number;
  code?: string;
  description?: string;
  frontCategoryId?: number;
  gmtCreated?: number;
  gmtModified?: number;
  name?: string;
  picUrl?: string;
  productExtras?: DescribeProductResponseBodyProductExtras;
  productSkus?: DescribeProductResponseBodyProductSkus;
  requestId?: string;
  score?: number;
  shopInfo?: DescribeProductResponseBodyShopInfo;
  shortDescription?: string;
  status?: string;
  supplierPk?: number;
  type?: string;
  useCount?: number;
  static names(): { [key: string]: string } {
    return {
      auditFailMsg: 'AuditFailMsg',
      auditStatus: 'AuditStatus',
      auditTime: 'AuditTime',
      code: 'Code',
      description: 'Description',
      frontCategoryId: 'FrontCategoryId',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      name: 'Name',
      picUrl: 'PicUrl',
      productExtras: 'ProductExtras',
      productSkus: 'ProductSkus',
      requestId: 'RequestId',
      score: 'Score',
      shopInfo: 'ShopInfo',
      shortDescription: 'ShortDescription',
      status: 'Status',
      supplierPk: 'SupplierPk',
      type: 'Type',
      useCount: 'UseCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditFailMsg: 'string',
      auditStatus: 'string',
      auditTime: 'number',
      code: 'string',
      description: 'string',
      frontCategoryId: 'number',
      gmtCreated: 'number',
      gmtModified: 'number',
      name: 'string',
      picUrl: 'string',
      productExtras: DescribeProductResponseBodyProductExtras,
      productSkus: DescribeProductResponseBodyProductSkus,
      requestId: 'string',
      score: 'number',
      shopInfo: DescribeProductResponseBodyShopInfo,
      shortDescription: 'string',
      status: 'string',
      supplierPk: 'number',
      type: 'string',
      useCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsRequest extends $tea.Model {
  filter?: DescribeProductsRequestFilter[];
  pageNumber?: number;
  pageSize?: number;
  searchTerm?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchTerm: 'SearchTerm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': DescribeProductsRequestFilter },
      pageNumber: 'number',
      pageSize: 'number',
      searchTerm: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  productItems?: DescribeProductsResponseBodyProductItems;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productItems: 'ProductItems',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      productItems: DescribeProductsResponseBodyProductItems,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeProductsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeProductsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectAttachmentsRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectAttachmentsResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeProjectAttachmentsResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeProjectAttachmentsResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectAttachmentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeProjectAttachmentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeProjectAttachmentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectInfoRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectInfoResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeProjectInfoResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeProjectInfoResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeProjectInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeProjectInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectMessagesRequest extends $tea.Model {
  instanceId?: string;
  pageIndex?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageIndex: 'PageIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectMessagesResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeProjectMessagesResponseBodyResult[];
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeProjectMessagesResponseBodyResult },
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectMessagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeProjectMessagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeProjectMessagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectNodesRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectNodesResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeProjectNodesResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeProjectNodesResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeProjectNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeProjectNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectOperateLogsRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectOperateLogsResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeProjectOperateLogsResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeProjectOperateLogsResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectOperateLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeProjectOperateLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeProjectOperateLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FinishCurrentProjectNodeRequest extends $tea.Model {
  instanceId?: string;
  nodeId?: number;
  remark?: string;
  templateForm?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      remark: 'Remark',
      templateForm: 'TemplateForm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nodeId: 'number',
      remark: 'string',
      templateForm: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FinishCurrentProjectNodeResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FinishCurrentProjectNodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FinishCurrentProjectNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: FinishCurrentProjectNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseProjectRequest extends $tea.Model {
  instanceId?: string;
  nodeId?: number;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nodeId: 'number',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseProjectResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PauseProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PauseProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMeteringDataRequest extends $tea.Model {
  metering?: string;
  static names(): { [key: string]: string } {
    return {
      metering: 'Metering',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metering: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMeteringDataResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMeteringDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PushMeteringDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PushMeteringDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeProjectRequest extends $tea.Model {
  instanceId?: string;
  nodeId?: number;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nodeId: 'number',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeProjectResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResumeProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResumeProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackCurrentProjectNodeRequest extends $tea.Model {
  instanceId?: string;
  nodeId?: number;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nodeId: 'number',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackCurrentProjectNodeResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackCurrentProjectNodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RollbackCurrentProjectNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RollbackCurrentProjectNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponseBodyInstanceIds extends $tea.Model {
  instanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CrossAccountVerifyTokenResponseBodyResult extends $tea.Model {
  authRoles?: string[];
  authTime?: number;
  name?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      authRoles: 'AuthRoles',
      authTime: 'AuthTime',
      name: 'Name',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authRoles: { 'type': 'array', 'itemType': 'string' },
      authTime: 'number',
      name: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiMeteringResponseBodyResult extends $tea.Model {
  aliyunPk?: number;
  productCode?: string;
  productName?: string;
  totalQuota?: number;
  totalUsage?: number;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunPk: 'AliyunPk',
      productCode: 'ProductCode',
      productName: 'ProductName',
      totalQuota: 'TotalQuota',
      totalUsage: 'TotalUsage',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunPk: 'number',
      productCode: 'string',
      productName: 'string',
      totalQuota: 'number',
      totalUsage: 'number',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCurrentNodeInfoResponseBodyResult extends $tea.Model {
  allowRollbackNode?: boolean;
  autoFinishNode?: boolean;
  finalStepNo?: number;
  gmtExpired?: number;
  gmtFinished?: number;
  gmtStart?: number;
  needAttachment?: boolean;
  nextNodeId?: number;
  nodeId?: number;
  nodeName?: string;
  nodeStatus?: string;
  operatorRole?: string;
  parentNodeId?: number;
  previousNodeId?: number;
  stepNo?: number;
  templateForm?: string;
  static names(): { [key: string]: string } {
    return {
      allowRollbackNode: 'AllowRollbackNode',
      autoFinishNode: 'AutoFinishNode',
      finalStepNo: 'FinalStepNo',
      gmtExpired: 'GmtExpired',
      gmtFinished: 'GmtFinished',
      gmtStart: 'GmtStart',
      needAttachment: 'NeedAttachment',
      nextNodeId: 'NextNodeId',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeStatus: 'NodeStatus',
      operatorRole: 'OperatorRole',
      parentNodeId: 'ParentNodeId',
      previousNodeId: 'PreviousNodeId',
      stepNo: 'StepNo',
      templateForm: 'TemplateForm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowRollbackNode: 'boolean',
      autoFinishNode: 'boolean',
      finalStepNo: 'number',
      gmtExpired: 'number',
      gmtFinished: 'number',
      gmtStart: 'number',
      needAttachment: 'boolean',
      nextNodeId: 'number',
      nodeId: 'number',
      nodeName: 'string',
      nodeStatus: 'string',
      operatorRole: 'string',
      parentNodeId: 'number',
      previousNodeId: 'number',
      stepNo: 'number',
      templateForm: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistributionProductsRequestFilter extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistributionProductsResponseBodyResults extends $tea.Model {
  code?: string;
  firstCategoryName?: string;
  imageUrl?: string;
  name?: string;
  price?: string;
  score?: string;
  secondCategoryName?: string;
  shortDescription?: string;
  submissionRadio?: string;
  supplierName?: string;
  supplierUId?: string;
  tradeCount?: string;
  type?: string;
  userCommentCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      firstCategoryName: 'FirstCategoryName',
      imageUrl: 'ImageUrl',
      name: 'Name',
      price: 'Price',
      score: 'Score',
      secondCategoryName: 'SecondCategoryName',
      shortDescription: 'ShortDescription',
      submissionRadio: 'SubmissionRadio',
      supplierName: 'SupplierName',
      supplierUId: 'SupplierUId',
      tradeCount: 'TradeCount',
      type: 'Type',
      userCommentCount: 'UserCommentCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      firstCategoryName: 'string',
      imageUrl: 'string',
      name: 'string',
      price: 'string',
      score: 'string',
      secondCategoryName: 'string',
      shortDescription: 'string',
      submissionRadio: 'string',
      supplierName: 'string',
      supplierUId: 'string',
      tradeCount: 'string',
      type: 'string',
      userCommentCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistributionProductsLinkResponseBodyResult extends $tea.Model {
  code?: string;
  name?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyModulesModulePropertiesPropertyPropertyValuesPropertyValue extends $tea.Model {
  displayName?: string;
  max?: string;
  min?: string;
  remark?: string;
  step?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      max: 'Max',
      min: 'Min',
      remark: 'Remark',
      step: 'Step',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      max: 'string',
      min: 'string',
      remark: 'string',
      step: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyModulesModulePropertiesPropertyPropertyValues extends $tea.Model {
  propertyValue?: DescribeInstanceResponseBodyModulesModulePropertiesPropertyPropertyValuesPropertyValue[];
  static names(): { [key: string]: string } {
    return {
      propertyValue: 'PropertyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyValue: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyModulesModulePropertiesPropertyPropertyValuesPropertyValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyModulesModulePropertiesProperty extends $tea.Model {
  displayUnit?: string;
  key?: string;
  name?: string;
  propertyValues?: DescribeInstanceResponseBodyModulesModulePropertiesPropertyPropertyValues;
  showType?: string;
  static names(): { [key: string]: string } {
    return {
      displayUnit: 'DisplayUnit',
      key: 'Key',
      name: 'Name',
      propertyValues: 'PropertyValues',
      showType: 'ShowType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayUnit: 'string',
      key: 'string',
      name: 'string',
      propertyValues: DescribeInstanceResponseBodyModulesModulePropertiesPropertyPropertyValues,
      showType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyModulesModuleProperties extends $tea.Model {
  property?: DescribeInstanceResponseBodyModulesModulePropertiesProperty[];
  static names(): { [key: string]: string } {
    return {
      property: 'Property',
    };
  }

  static types(): { [key: string]: any } {
    return {
      property: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyModulesModulePropertiesProperty },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyModulesModule extends $tea.Model {
  code?: string;
  id?: string;
  name?: string;
  properties?: DescribeInstanceResponseBodyModulesModuleProperties;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      name: 'Name',
      properties: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      id: 'string',
      name: 'string',
      properties: DescribeInstanceResponseBodyModulesModuleProperties,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyModules extends $tea.Model {
  module?: DescribeInstanceResponseBodyModulesModule[];
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyModulesModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyRelationalData extends $tea.Model {
  serviceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      serviceStatus: 'ServiceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstanceItemsInstanceItem extends $tea.Model {
  apiJson?: string;
  appJson?: string;
  beganOn?: number;
  createdOn?: number;
  endOn?: number;
  extendJson?: string;
  hostJson?: string;
  idaasJson?: string;
  imageJson?: string;
  instanceId?: number;
  orderId?: number;
  productCode?: string;
  productName?: string;
  productSkuCode?: string;
  productType?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstanceItems extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLicenseResponseBodyLicenseExtendArrayLicenseAttribute extends $tea.Model {
  code?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLicenseResponseBodyLicenseExtendArray extends $tea.Model {
  licenseAttribute?: DescribeLicenseResponseBodyLicenseExtendArrayLicenseAttribute[];
  static names(): { [key: string]: string } {
    return {
      licenseAttribute: 'LicenseAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      licenseAttribute: { 'type': 'array', 'itemType': DescribeLicenseResponseBodyLicenseExtendArrayLicenseAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLicenseResponseBodyLicenseExtendInfo extends $tea.Model {
  accountQuantity?: number;
  aliUid?: number;
  email?: string;
  mobile?: string;
  static names(): { [key: string]: string } {
    return {
      accountQuantity: 'AccountQuantity',
      aliUid: 'AliUid',
      email: 'Email',
      mobile: 'Mobile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountQuantity: 'number',
      aliUid: 'number',
      email: 'string',
      mobile: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLicenseResponseBodyLicense extends $tea.Model {
  activateTime?: string;
  createTime?: string;
  expiredTime?: string;
  extendArray?: DescribeLicenseResponseBodyLicenseExtendArray;
  extendInfo?: DescribeLicenseResponseBodyLicenseExtendInfo;
  instanceId?: string;
  licenseCode?: string;
  licenseStatus?: string;
  productCode?: string;
  productName?: string;
  productSkuId?: string;
  supplierName?: string;
  static names(): { [key: string]: string } {
    return {
      activateTime: 'ActivateTime',
      createTime: 'CreateTime',
      expiredTime: 'ExpiredTime',
      extendArray: 'ExtendArray',
      extendInfo: 'ExtendInfo',
      instanceId: 'InstanceId',
      licenseCode: 'LicenseCode',
      licenseStatus: 'LicenseStatus',
      productCode: 'ProductCode',
      productName: 'ProductName',
      productSkuId: 'ProductSkuId',
      supplierName: 'SupplierName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activateTime: 'string',
      createTime: 'string',
      expiredTime: 'string',
      extendArray: DescribeLicenseResponseBodyLicenseExtendArray,
      extendInfo: DescribeLicenseResponseBodyLicenseExtendInfo,
      instanceId: 'string',
      licenseCode: 'string',
      licenseStatus: 'string',
      productCode: 'string',
      productName: 'string',
      productSkuId: 'string',
      supplierName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrderResponseBodyInstanceIds extends $tea.Model {
  instanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrderResponseBodySupplierTelephones extends $tea.Model {
  telephone?: string[];
  static names(): { [key: string]: string } {
    return {
      telephone: 'Telephone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      telephone: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyCouponsCoupon extends $tea.Model {
  canPromFee?: number;
  couponDesc?: string;
  couponName?: string;
  couponOptionCode?: string;
  couponOptionNo?: string;
  isSelected?: boolean;
  static names(): { [key: string]: string } {
    return {
      canPromFee: 'CanPromFee',
      couponDesc: 'CouponDesc',
      couponName: 'CouponName',
      couponOptionCode: 'CouponOptionCode',
      couponOptionNo: 'CouponOptionNo',
      isSelected: 'IsSelected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canPromFee: 'number',
      couponDesc: 'string',
      couponName: 'string',
      couponOptionCode: 'string',
      couponOptionNo: 'string',
      isSelected: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyCoupons extends $tea.Model {
  coupon?: DescribePriceResponseBodyCouponsCoupon[];
  static names(): { [key: string]: string } {
    return {
      coupon: 'Coupon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coupon: { 'type': 'array', 'itemType': DescribePriceResponseBodyCouponsCoupon },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPromotionRulesPromotionRule extends $tea.Model {
  name?: string;
  ruleId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ruleId: 'RuleId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ruleId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPromotionRules extends $tea.Model {
  promotionRule?: DescribePriceResponseBodyPromotionRulesPromotionRule[];
  static names(): { [key: string]: string } {
    return {
      promotionRule: 'PromotionRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionRule: { 'type': 'array', 'itemType': DescribePriceResponseBodyPromotionRulesPromotionRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyProductExtrasProductExtra extends $tea.Model {
  key?: string;
  label?: string;
  order?: number;
  type?: string;
  values?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      label: 'Label',
      order: 'Order',
      type: 'Type',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      label: 'string',
      order: 'number',
      type: 'string',
      values: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyProductExtras extends $tea.Model {
  productExtra?: DescribeProductResponseBodyProductExtrasProductExtra[];
  static names(): { [key: string]: string } {
    return {
      productExtra: 'ProductExtra',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productExtra: { 'type': 'array', 'itemType': DescribeProductResponseBodyProductExtrasProductExtra },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyProductSkusProductSkuModulesModulePropertiesPropertyPropertyValuesPropertyValue extends $tea.Model {
  displayName?: string;
  max?: string;
  min?: string;
  remark?: string;
  step?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      max: 'Max',
      min: 'Min',
      remark: 'Remark',
      step: 'Step',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      max: 'string',
      min: 'string',
      remark: 'string',
      step: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyProductSkusProductSkuModulesModulePropertiesPropertyPropertyValues extends $tea.Model {
  propertyValue?: DescribeProductResponseBodyProductSkusProductSkuModulesModulePropertiesPropertyPropertyValuesPropertyValue[];
  static names(): { [key: string]: string } {
    return {
      propertyValue: 'PropertyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyValue: { 'type': 'array', 'itemType': DescribeProductResponseBodyProductSkusProductSkuModulesModulePropertiesPropertyPropertyValuesPropertyValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyProductSkusProductSkuModulesModulePropertiesProperty extends $tea.Model {
  displayUnit?: string;
  key?: string;
  name?: string;
  propertyValues?: DescribeProductResponseBodyProductSkusProductSkuModulesModulePropertiesPropertyPropertyValues;
  showType?: string;
  static names(): { [key: string]: string } {
    return {
      displayUnit: 'DisplayUnit',
      key: 'Key',
      name: 'Name',
      propertyValues: 'PropertyValues',
      showType: 'ShowType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayUnit: 'string',
      key: 'string',
      name: 'string',
      propertyValues: DescribeProductResponseBodyProductSkusProductSkuModulesModulePropertiesPropertyPropertyValues,
      showType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyProductSkusProductSkuModulesModuleProperties extends $tea.Model {
  property?: DescribeProductResponseBodyProductSkusProductSkuModulesModulePropertiesProperty[];
  static names(): { [key: string]: string } {
    return {
      property: 'Property',
    };
  }

  static types(): { [key: string]: any } {
    return {
      property: { 'type': 'array', 'itemType': DescribeProductResponseBodyProductSkusProductSkuModulesModulePropertiesProperty },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyProductSkusProductSkuModulesModule extends $tea.Model {
  code?: string;
  id?: string;
  name?: string;
  properties?: DescribeProductResponseBodyProductSkusProductSkuModulesModuleProperties;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      name: 'Name',
      properties: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      id: 'string',
      name: 'string',
      properties: DescribeProductResponseBodyProductSkusProductSkuModulesModuleProperties,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyProductSkusProductSkuModules extends $tea.Model {
  module?: DescribeProductResponseBodyProductSkusProductSkuModulesModule[];
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: { 'type': 'array', 'itemType': DescribeProductResponseBodyProductSkusProductSkuModulesModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyProductSkusProductSkuOrderPeriodsOrderPeriod extends $tea.Model {
  name?: string;
  periodType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      periodType: 'PeriodType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      periodType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyProductSkusProductSkuOrderPeriods extends $tea.Model {
  orderPeriod?: DescribeProductResponseBodyProductSkusProductSkuOrderPeriodsOrderPeriod[];
  static names(): { [key: string]: string } {
    return {
      orderPeriod: 'OrderPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderPeriod: { 'type': 'array', 'itemType': DescribeProductResponseBodyProductSkusProductSkuOrderPeriodsOrderPeriod },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyProductSkusProductSku extends $tea.Model {
  chargeType?: string;
  code?: string;
  constraints?: string;
  hidden?: boolean;
  modules?: DescribeProductResponseBodyProductSkusProductSkuModules;
  name?: string;
  orderPeriods?: DescribeProductResponseBodyProductSkusProductSkuOrderPeriods;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      code: 'Code',
      constraints: 'Constraints',
      hidden: 'Hidden',
      modules: 'Modules',
      name: 'Name',
      orderPeriods: 'OrderPeriods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      code: 'string',
      constraints: 'string',
      hidden: 'boolean',
      modules: DescribeProductResponseBodyProductSkusProductSkuModules,
      name: 'string',
      orderPeriods: DescribeProductResponseBodyProductSkusProductSkuOrderPeriods,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyProductSkus extends $tea.Model {
  productSku?: DescribeProductResponseBodyProductSkusProductSku[];
  static names(): { [key: string]: string } {
    return {
      productSku: 'ProductSku',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productSku: { 'type': 'array', 'itemType': DescribeProductResponseBodyProductSkusProductSku },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyShopInfoTelephones extends $tea.Model {
  telephone?: string[];
  static names(): { [key: string]: string } {
    return {
      telephone: 'Telephone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      telephone: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyShopInfoWangWangsWangWang extends $tea.Model {
  remark?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyShopInfoWangWangs extends $tea.Model {
  wangWang?: DescribeProductResponseBodyShopInfoWangWangsWangWang[];
  static names(): { [key: string]: string } {
    return {
      wangWang: 'WangWang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wangWang: { 'type': 'array', 'itemType': DescribeProductResponseBodyShopInfoWangWangsWangWang },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyShopInfo extends $tea.Model {
  emails?: string;
  id?: number;
  name?: string;
  telephones?: DescribeProductResponseBodyShopInfoTelephones;
  wangWangs?: DescribeProductResponseBodyShopInfoWangWangs;
  static names(): { [key: string]: string } {
    return {
      emails: 'Emails',
      id: 'Id',
      name: 'Name',
      telephones: 'Telephones',
      wangWangs: 'WangWangs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emails: 'string',
      id: 'number',
      name: 'string',
      telephones: DescribeProductResponseBodyShopInfoTelephones,
      wangWangs: DescribeProductResponseBodyShopInfoWangWangs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsRequestFilter extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsResponseBodyProductItemsProductItem extends $tea.Model {
  categoryId?: number;
  code?: string;
  deliveryDate?: string;
  deliveryWay?: string;
  imageUrl?: string;
  name?: string;
  operationSystem?: string;
  priceInfo?: string;
  score?: string;
  shortDescription?: string;
  suggestedPrice?: string;
  supplierId?: number;
  supplierName?: string;
  tags?: string;
  targetUrl?: string;
  warrantyDate?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      code: 'Code',
      deliveryDate: 'DeliveryDate',
      deliveryWay: 'DeliveryWay',
      imageUrl: 'ImageUrl',
      name: 'Name',
      operationSystem: 'OperationSystem',
      priceInfo: 'PriceInfo',
      score: 'Score',
      shortDescription: 'ShortDescription',
      suggestedPrice: 'SuggestedPrice',
      supplierId: 'SupplierId',
      supplierName: 'SupplierName',
      tags: 'Tags',
      targetUrl: 'TargetUrl',
      warrantyDate: 'WarrantyDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      code: 'string',
      deliveryDate: 'string',
      deliveryWay: 'string',
      imageUrl: 'string',
      name: 'string',
      operationSystem: 'string',
      priceInfo: 'string',
      score: 'string',
      shortDescription: 'string',
      suggestedPrice: 'string',
      supplierId: 'number',
      supplierName: 'string',
      tags: 'string',
      targetUrl: 'string',
      warrantyDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsResponseBodyProductItems extends $tea.Model {
  productItem?: DescribeProductsResponseBodyProductItemsProductItem[];
  static names(): { [key: string]: string } {
    return {
      productItem: 'ProductItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productItem: { 'type': 'array', 'itemType': DescribeProductsResponseBodyProductItemsProductItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectAttachmentsResponseBodyResult extends $tea.Model {
  attachmentToken?: string;
  attachmentType?: string;
  content?: string;
  fileLink?: string;
  fileLinkGmtExpired?: number;
  fileName?: string;
  fileSize?: number;
  fileSuffix?: string;
  gmtCreate?: number;
  nodeId?: number;
  nodeName?: string;
  operator?: number;
  operatorName?: string;
  operatorRole?: string;
  stepNo?: number;
  static names(): { [key: string]: string } {
    return {
      attachmentToken: 'AttachmentToken',
      attachmentType: 'AttachmentType',
      content: 'Content',
      fileLink: 'FileLink',
      fileLinkGmtExpired: 'FileLinkGmtExpired',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileSuffix: 'FileSuffix',
      gmtCreate: 'GmtCreate',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      operator: 'Operator',
      operatorName: 'OperatorName',
      operatorRole: 'OperatorRole',
      stepNo: 'StepNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentToken: 'string',
      attachmentType: 'string',
      content: 'string',
      fileLink: 'string',
      fileLinkGmtExpired: 'number',
      fileName: 'string',
      fileSize: 'number',
      fileSuffix: 'string',
      gmtCreate: 'number',
      nodeId: 'number',
      nodeName: 'string',
      operator: 'number',
      operatorName: 'string',
      operatorRole: 'string',
      stepNo: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectInfoResponseBodyResult extends $tea.Model {
  currentStepNo?: number;
  customerAliUid?: number;
  finalStepNo?: number;
  finishType?: string;
  gmtCreate?: number;
  gmtExpired?: number;
  gmtFinished?: number;
  instanceId?: string;
  orderId?: number;
  productCode?: string;
  productName?: string;
  productSkuCode?: string;
  productSkuName?: string;
  projectStatus?: string;
  supplierAliUid?: number;
  templateId?: number;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      currentStepNo: 'CurrentStepNo',
      customerAliUid: 'CustomerAliUid',
      finalStepNo: 'FinalStepNo',
      finishType: 'FinishType',
      gmtCreate: 'GmtCreate',
      gmtExpired: 'GmtExpired',
      gmtFinished: 'GmtFinished',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      productCode: 'ProductCode',
      productName: 'ProductName',
      productSkuCode: 'ProductSkuCode',
      productSkuName: 'ProductSkuName',
      projectStatus: 'ProjectStatus',
      supplierAliUid: 'SupplierAliUid',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentStepNo: 'number',
      customerAliUid: 'number',
      finalStepNo: 'number',
      finishType: 'string',
      gmtCreate: 'number',
      gmtExpired: 'number',
      gmtFinished: 'number',
      instanceId: 'string',
      orderId: 'number',
      productCode: 'string',
      productName: 'string',
      productSkuCode: 'string',
      productSkuName: 'string',
      projectStatus: 'string',
      supplierAliUid: 'number',
      templateId: 'number',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectMessagesResponseBodyResult extends $tea.Model {
  content?: string;
  gmtCreate?: number;
  operator?: number;
  operatorName?: string;
  operatorRole?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      gmtCreate: 'GmtCreate',
      operator: 'Operator',
      operatorName: 'OperatorName',
      operatorRole: 'OperatorRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      gmtCreate: 'number',
      operator: 'number',
      operatorName: 'string',
      operatorRole: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectNodesResponseBodyResult extends $tea.Model {
  allowRollbackNode?: boolean;
  autoFinishNode?: boolean;
  finalStepNo?: number;
  gmtExpired?: number;
  gmtFinished?: number;
  gmtStart?: number;
  needAttachment?: boolean;
  nextNodeId?: number;
  nodeId?: number;
  nodeName?: string;
  nodeStatus?: string;
  operatorRole?: string;
  parentNodeId?: number;
  previousNodeId?: number;
  stepNo?: number;
  templateForm?: string;
  static names(): { [key: string]: string } {
    return {
      allowRollbackNode: 'AllowRollbackNode',
      autoFinishNode: 'AutoFinishNode',
      finalStepNo: 'FinalStepNo',
      gmtExpired: 'GmtExpired',
      gmtFinished: 'GmtFinished',
      gmtStart: 'GmtStart',
      needAttachment: 'NeedAttachment',
      nextNodeId: 'NextNodeId',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeStatus: 'NodeStatus',
      operatorRole: 'OperatorRole',
      parentNodeId: 'ParentNodeId',
      previousNodeId: 'PreviousNodeId',
      stepNo: 'StepNo',
      templateForm: 'TemplateForm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowRollbackNode: 'boolean',
      autoFinishNode: 'boolean',
      finalStepNo: 'number',
      gmtExpired: 'number',
      gmtFinished: 'number',
      gmtStart: 'number',
      needAttachment: 'boolean',
      nextNodeId: 'number',
      nodeId: 'number',
      nodeName: 'string',
      nodeStatus: 'string',
      operatorRole: 'string',
      parentNodeId: 'number',
      previousNodeId: 'number',
      stepNo: 'number',
      templateForm: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectOperateLogsResponseBodyResult extends $tea.Model {
  description?: string;
  gmtCreate?: number;
  operator?: number;
  operatorName?: string;
  operatorRole?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      operator: 'Operator',
      operatorName: 'OperatorName',
      operatorRole: 'OperatorRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'number',
      operator: 'number',
      operatorName: 'string',
      operatorRole: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-hangzhou': "market.aliyuncs.com",
      'ap-northeast-1': "market.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "market.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "market.ap-southeast-1.aliyuncs.com",
      'ap-southeast-3': "market.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "market.ap-southeast-1.aliyuncs.com",
      'cn-beijing': "market.aliyuncs.com",
      'cn-chengdu': "market.aliyuncs.com",
      'cn-hongkong': "market.aliyuncs.com",
      'cn-huhehaote': "market.aliyuncs.com",
      'cn-qingdao': "market.aliyuncs.com",
      'cn-shanghai': "market.aliyuncs.com",
      'cn-shenzhen': "market.aliyuncs.com",
      'cn-zhangjiakou': "market.aliyuncs.com",
      'eu-central-1': "market.ap-southeast-1.aliyuncs.com",
      'eu-west-1': "market.ap-southeast-1.aliyuncs.com",
      'me-east-1': "market.ap-southeast-1.aliyuncs.com",
      'us-east-1': "market.ap-southeast-1.aliyuncs.com",
      'us-west-1': "market.ap-southeast-1.aliyuncs.com",
      'cn-hangzhou-finance': "market.aliyuncs.com",
      'cn-shenzhen-finance-1': "market.aliyuncs.com",
      'cn-shanghai-finance-1': "market.aliyuncs.com",
      'cn-north-2-gov-1': "market.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("market", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async activateLicenseWithOptions(request: ActivateLicenseRequest, runtime: $Util.RuntimeOptions): Promise<ActivateLicenseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.identification)) {
      query["Identification"] = request.identification;
    }

    if (!Util.isUnset(request.licenseCode)) {
      query["LicenseCode"] = request.licenseCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ActivateLicense",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ActivateLicenseResponse>(await this.callApi(params, req, runtime), new ActivateLicenseResponse({}));
  }

  async activateLicense(request: ActivateLicenseRequest): Promise<ActivateLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activateLicenseWithOptions(request, runtime);
  }

  async autoRenewInstanceWithOptions(request: AutoRenewInstanceRequest, runtime: $Util.RuntimeOptions): Promise<AutoRenewInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.autoRenewCycle)) {
      body["AutoRenewCycle"] = request.autoRenewCycle;
    }

    if (!Util.isUnset(request.autoRenewDuration)) {
      body["AutoRenewDuration"] = request.autoRenewDuration;
    }

    if (!Util.isUnset(request.orderBizId)) {
      body["OrderBizId"] = request.orderBizId;
    }

    if (!Util.isUnset(request.ownerId)) {
      body["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AutoRenewInstance",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AutoRenewInstanceResponse>(await this.callApi(params, req, runtime), new AutoRenewInstanceResponse({}));
  }

  async autoRenewInstance(request: AutoRenewInstanceRequest): Promise<AutoRenewInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.autoRenewInstanceWithOptions(request, runtime);
  }

  async createOrderWithOptions(request: CreateOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.commodity)) {
      query["Commodity"] = request.commodity;
    }

    if (!Util.isUnset(request.orderSouce)) {
      query["OrderSouce"] = request.orderSouce;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.paymentType)) {
      query["PaymentType"] = request.paymentType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateOrder",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOrderResponse>(await this.callApi(params, req, runtime), new CreateOrderResponse({}));
  }

  async createOrder(request: CreateOrderRequest): Promise<CreateOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrderWithOptions(request, runtime);
  }

  async crossAccountVerifyTokenWithOptions(request: CrossAccountVerifyTokenRequest, runtime: $Util.RuntimeOptions): Promise<CrossAccountVerifyTokenResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.token)) {
      body["Token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CrossAccountVerifyToken",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CrossAccountVerifyTokenResponse>(await this.callApi(params, req, runtime), new CrossAccountVerifyTokenResponse({}));
  }

  async crossAccountVerifyToken(request: CrossAccountVerifyTokenRequest): Promise<CrossAccountVerifyTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.crossAccountVerifyTokenWithOptions(request, runtime);
  }

  async describeApiMeteringWithOptions(request: DescribeApiMeteringRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiMeteringResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApiMetering",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApiMeteringResponse>(await this.callApi(params, req, runtime), new DescribeApiMeteringResponse({}));
  }

  async describeApiMetering(request: DescribeApiMeteringRequest): Promise<DescribeApiMeteringResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiMeteringWithOptions(request, runtime);
  }

  async describeCurrentNodeInfoWithOptions(request: DescribeCurrentNodeInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCurrentNodeInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCurrentNodeInfo",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCurrentNodeInfoResponse>(await this.callApi(params, req, runtime), new DescribeCurrentNodeInfoResponse({}));
  }

  async describeCurrentNodeInfo(request: DescribeCurrentNodeInfoRequest): Promise<DescribeCurrentNodeInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCurrentNodeInfoWithOptions(request, runtime);
  }

  async describeDistributionProductsWithOptions(request: DescribeDistributionProductsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDistributionProductsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDistributionProducts",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDistributionProductsResponse>(await this.callApi(params, req, runtime), new DescribeDistributionProductsResponse({}));
  }

  async describeDistributionProducts(request: DescribeDistributionProductsRequest): Promise<DescribeDistributionProductsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDistributionProductsWithOptions(request, runtime);
  }

  async describeDistributionProductsLinkWithOptions(tmpReq: DescribeDistributionProductsLinkRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDistributionProductsLinkResponse> {
    Util.validateModel(tmpReq);
    let request = new DescribeDistributionProductsLinkShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.codes)) {
      request.codesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.codes, "Codes", "json");
    }

    let query = { };
    if (!Util.isUnset(request.codesShrink)) {
      query["Codes"] = request.codesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDistributionProductsLink",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDistributionProductsLinkResponse>(await this.callApi(params, req, runtime), new DescribeDistributionProductsLinkResponse({}));
  }

  async describeDistributionProductsLink(request: DescribeDistributionProductsLinkRequest): Promise<DescribeDistributionProductsLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDistributionProductsLinkWithOptions(request, runtime);
  }

  async describeInstanceWithOptions(request: DescribeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstance",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceResponse>(await this.callApi(params, req, runtime), new DescribeInstanceResponse({}));
  }

  async describeInstance(request: DescribeInstanceRequest): Promise<DescribeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceWithOptions(request, runtime);
  }

  async describeInstancesWithOptions(request: DescribeInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.codes)) {
      query["Codes"] = request.codes;
    }

    if (!Util.isUnset(request.exceptCodes)) {
      query["ExceptCodes"] = request.exceptCodes;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstances",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstancesResponse>(await this.callApi(params, req, runtime), new DescribeInstancesResponse({}));
  }

  async describeInstances(request: DescribeInstancesRequest): Promise<DescribeInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  async describeLicenseWithOptions(request: DescribeLicenseRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLicenseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.licenseCode)) {
      query["LicenseCode"] = request.licenseCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLicense",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLicenseResponse>(await this.callApi(params, req, runtime), new DescribeLicenseResponse({}));
  }

  async describeLicense(request: DescribeLicenseRequest): Promise<DescribeLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLicenseWithOptions(request, runtime);
  }

  async describeOrderWithOptions(request: DescribeOrderRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOrder",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOrderResponse>(await this.callApi(params, req, runtime), new DescribeOrderResponse({}));
  }

  async describeOrder(request: DescribeOrderRequest): Promise<DescribeOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOrderWithOptions(request, runtime);
  }

  async describePriceWithOptions(request: DescribePriceRequest, runtime: $Util.RuntimeOptions): Promise<DescribePriceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.commodity)) {
      query["Commodity"] = request.commodity;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePrice",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePriceResponse>(await this.callApi(params, req, runtime), new DescribePriceResponse({}));
  }

  async describePrice(request: DescribePriceRequest): Promise<DescribePriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePriceWithOptions(request, runtime);
  }

  async describeProductWithOptions(request: DescribeProductRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProductResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.code)) {
      query["Code"] = request.code;
    }

    if (!Util.isUnset(request.queryDraft)) {
      query["QueryDraft"] = request.queryDraft;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProduct",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProductResponse>(await this.callApi(params, req, runtime), new DescribeProductResponse({}));
  }

  async describeProduct(request: DescribeProductRequest): Promise<DescribeProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProductWithOptions(request, runtime);
  }

  async describeProductsWithOptions(request: DescribeProductsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProductsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchTerm)) {
      query["SearchTerm"] = request.searchTerm;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProducts",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProductsResponse>(await this.callApi(params, req, runtime), new DescribeProductsResponse({}));
  }

  async describeProducts(request: DescribeProductsRequest): Promise<DescribeProductsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProductsWithOptions(request, runtime);
  }

  async describeProjectAttachmentsWithOptions(request: DescribeProjectAttachmentsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProjectAttachmentsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProjectAttachments",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProjectAttachmentsResponse>(await this.callApi(params, req, runtime), new DescribeProjectAttachmentsResponse({}));
  }

  async describeProjectAttachments(request: DescribeProjectAttachmentsRequest): Promise<DescribeProjectAttachmentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProjectAttachmentsWithOptions(request, runtime);
  }

  async describeProjectInfoWithOptions(request: DescribeProjectInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProjectInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProjectInfo",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProjectInfoResponse>(await this.callApi(params, req, runtime), new DescribeProjectInfoResponse({}));
  }

  async describeProjectInfo(request: DescribeProjectInfoRequest): Promise<DescribeProjectInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProjectInfoWithOptions(request, runtime);
  }

  async describeProjectMessagesWithOptions(request: DescribeProjectMessagesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProjectMessagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProjectMessages",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProjectMessagesResponse>(await this.callApi(params, req, runtime), new DescribeProjectMessagesResponse({}));
  }

  async describeProjectMessages(request: DescribeProjectMessagesRequest): Promise<DescribeProjectMessagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProjectMessagesWithOptions(request, runtime);
  }

  /**
    * **
    * **
    *
    * @param request DescribeProjectNodesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeProjectNodesResponse
   */
  async describeProjectNodesWithOptions(request: DescribeProjectNodesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProjectNodesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProjectNodes",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProjectNodesResponse>(await this.callApi(params, req, runtime), new DescribeProjectNodesResponse({}));
  }

  /**
    * **
    * **
    *
    * @param request DescribeProjectNodesRequest
    * @return DescribeProjectNodesResponse
   */
  async describeProjectNodes(request: DescribeProjectNodesRequest): Promise<DescribeProjectNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProjectNodesWithOptions(request, runtime);
  }

  async describeProjectOperateLogsWithOptions(request: DescribeProjectOperateLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProjectOperateLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProjectOperateLogs",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProjectOperateLogsResponse>(await this.callApi(params, req, runtime), new DescribeProjectOperateLogsResponse({}));
  }

  async describeProjectOperateLogs(request: DescribeProjectOperateLogsRequest): Promise<DescribeProjectOperateLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProjectOperateLogsWithOptions(request, runtime);
  }

  async finishCurrentProjectNodeWithOptions(request: FinishCurrentProjectNodeRequest, runtime: $Util.RuntimeOptions): Promise<FinishCurrentProjectNodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.templateForm)) {
      query["TemplateForm"] = request.templateForm;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FinishCurrentProjectNode",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FinishCurrentProjectNodeResponse>(await this.callApi(params, req, runtime), new FinishCurrentProjectNodeResponse({}));
  }

  async finishCurrentProjectNode(request: FinishCurrentProjectNodeRequest): Promise<FinishCurrentProjectNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.finishCurrentProjectNodeWithOptions(request, runtime);
  }

  async pauseProjectWithOptions(request: PauseProjectRequest, runtime: $Util.RuntimeOptions): Promise<PauseProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PauseProject",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PauseProjectResponse>(await this.callApi(params, req, runtime), new PauseProjectResponse({}));
  }

  async pauseProject(request: PauseProjectRequest): Promise<PauseProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pauseProjectWithOptions(request, runtime);
  }

  async pushMeteringDataWithOptions(request: PushMeteringDataRequest, runtime: $Util.RuntimeOptions): Promise<PushMeteringDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.metering)) {
      query["Metering"] = request.metering;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PushMeteringData",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PushMeteringDataResponse>(await this.callApi(params, req, runtime), new PushMeteringDataResponse({}));
  }

  async pushMeteringData(request: PushMeteringDataRequest): Promise<PushMeteringDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushMeteringDataWithOptions(request, runtime);
  }

  async resumeProjectWithOptions(request: ResumeProjectRequest, runtime: $Util.RuntimeOptions): Promise<ResumeProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResumeProject",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResumeProjectResponse>(await this.callApi(params, req, runtime), new ResumeProjectResponse({}));
  }

  async resumeProject(request: ResumeProjectRequest): Promise<ResumeProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeProjectWithOptions(request, runtime);
  }

  async rollbackCurrentProjectNodeWithOptions(request: RollbackCurrentProjectNodeRequest, runtime: $Util.RuntimeOptions): Promise<RollbackCurrentProjectNodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RollbackCurrentProjectNode",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RollbackCurrentProjectNodeResponse>(await this.callApi(params, req, runtime), new RollbackCurrentProjectNodeResponse({}));
  }

  async rollbackCurrentProjectNode(request: RollbackCurrentProjectNodeRequest): Promise<RollbackCurrentProjectNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rollbackCurrentProjectNodeWithOptions(request, runtime);
  }

}
