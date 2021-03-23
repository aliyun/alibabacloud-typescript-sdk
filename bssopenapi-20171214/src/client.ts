// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AllocateCostUnitResourceRequest extends $tea.Model {
  fromUnitUserId?: number;
  fromUnitId?: number;
  toUnitUserId?: number;
  toUnitId?: number;
  resourceInstanceList?: AllocateCostUnitResourceRequestResourceInstanceList[];
  static names(): { [key: string]: string } {
    return {
      fromUnitUserId: 'FromUnitUserId',
      fromUnitId: 'FromUnitId',
      toUnitUserId: 'ToUnitUserId',
      toUnitId: 'ToUnitId',
      resourceInstanceList: 'ResourceInstanceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromUnitUserId: 'number',
      fromUnitId: 'number',
      toUnitUserId: 'number',
      toUnitId: 'number',
      resourceInstanceList: { 'type': 'array', 'itemType': AllocateCostUnitResourceRequestResourceInstanceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateCostUnitResourceResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  code?: string;
  success?: boolean;
  data?: AllocateCostUnitResourceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
      data: AllocateCostUnitResourceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateCostUnitResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AllocateCostUnitResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AllocateCostUnitResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyInvoiceRequest extends $tea.Model {
  invoiceAmount?: number;
  ownerId?: number;
  customerId?: number;
  addressId?: number;
  invoicingType?: number;
  processWay?: number;
  applyUserNick?: string;
  selectedIds?: number[];
  invoiceByAmount?: boolean;
  static names(): { [key: string]: string } {
    return {
      invoiceAmount: 'InvoiceAmount',
      ownerId: 'OwnerId',
      customerId: 'CustomerId',
      addressId: 'AddressId',
      invoicingType: 'InvoicingType',
      processWay: 'ProcessWay',
      applyUserNick: 'ApplyUserNick',
      selectedIds: 'SelectedIds',
      invoiceByAmount: 'InvoiceByAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invoiceAmount: 'number',
      ownerId: 'number',
      customerId: 'number',
      addressId: 'number',
      invoicingType: 'number',
      processWay: 'number',
      applyUserNick: 'string',
      selectedIds: { 'type': 'array', 'itemType': 'number' },
      invoiceByAmount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyInvoiceResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: ApplyInvoiceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: ApplyInvoiceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyInvoiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ApplyInvoiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ApplyInvoiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderRequest extends $tea.Model {
  orderId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: CancelOrderResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: CancelOrderResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResellerConsumeAmountRequest extends $tea.Model {
  ownerId?: number;
  adjustType?: string;
  amount?: string;
  currency?: string;
  businessType?: string;
  source?: string;
  outBizId?: string;
  extendMap?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      adjustType: 'AdjustType',
      amount: 'Amount',
      currency: 'Currency',
      businessType: 'BusinessType',
      source: 'Source',
      outBizId: 'OutBizId',
      extendMap: 'ExtendMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      adjustType: 'string',
      amount: 'string',
      currency: 'string',
      businessType: 'string',
      source: 'string',
      outBizId: 'string',
      extendMap: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResellerConsumeAmountResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  success?: boolean;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      success: 'boolean',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResellerConsumeAmountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ChangeResellerConsumeAmountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ChangeResellerConsumeAmountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertChargeTypeRequest extends $tea.Model {
  ownerId?: number;
  productType?: string;
  subscriptionType?: string;
  period?: number;
  productCode?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
      period: 'Period',
      productCode: 'ProductCode',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      productType: 'string',
      subscriptionType: 'string',
      period: 'number',
      productCode: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertChargeTypeResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: ConvertChargeTypeResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: ConvertChargeTypeResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertChargeTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConvertChargeTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConvertChargeTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgAccountRequest extends $tea.Model {
  loginEmail?: string;
  accountAttr?: string;
  enterpriseName?: string;
  firstName?: string;
  lastName?: string;
  nationCode?: string;
  provinceName?: string;
  cityName?: string;
  postcode?: string;
  static names(): { [key: string]: string } {
    return {
      loginEmail: 'LoginEmail',
      accountAttr: 'AccountAttr',
      enterpriseName: 'EnterpriseName',
      firstName: 'FirstName',
      lastName: 'LastName',
      nationCode: 'NationCode',
      provinceName: 'ProvinceName',
      cityName: 'CityName',
      postcode: 'Postcode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginEmail: 'string',
      accountAttr: 'string',
      enterpriseName: 'string',
      firstName: 'string',
      lastName: 'string',
      nationCode: 'string',
      provinceName: 'string',
      cityName: 'string',
      postcode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgAccountResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  success?: boolean;
  agRelationDto?: CreateAgAccountResponseBodyAgRelationDto;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      success: 'Success',
      agRelationDto: 'AgRelationDto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      success: 'boolean',
      agRelationDto: CreateAgAccountResponseBodyAgRelationDto,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAgAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAgAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCostUnitRequest extends $tea.Model {
  unitEntityList?: CreateCostUnitRequestUnitEntityList[];
  static names(): { [key: string]: string } {
    return {
      unitEntityList: 'UnitEntityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unitEntityList: { 'type': 'array', 'itemType': CreateCostUnitRequestUnitEntityList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCostUnitResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  code?: string;
  success?: boolean;
  data?: CreateCostUnitResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
      data: CreateCostUnitResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCostUnitResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCostUnitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCostUnitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $tea.Model {
  productCode?: string;
  parameter?: CreateInstanceRequestParameter[];
  ownerId?: number;
  productType?: string;
  subscriptionType?: string;
  period?: number;
  renewalStatus?: string;
  renewPeriod?: number;
  clientToken?: string;
  logistics?: string;
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
      parameter: 'Parameter',
      ownerId: 'OwnerId',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
      period: 'Period',
      renewalStatus: 'RenewalStatus',
      renewPeriod: 'RenewPeriod',
      clientToken: 'ClientToken',
      logistics: 'Logistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      parameter: { 'type': 'array', 'itemType': CreateInstanceRequestParameter },
      ownerId: 'number',
      productType: 'string',
      subscriptionType: 'string',
      period: 'number',
      renewalStatus: 'string',
      renewPeriod: 'number',
      clientToken: 'string',
      logistics: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: CreateInstanceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: CreateInstanceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResellerUserQuotaRequest extends $tea.Model {
  ownerId?: number;
  amount?: string;
  currency?: string;
  outBizId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      amount: 'Amount',
      currency: 'Currency',
      outBizId: 'OutBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      amount: 'string',
      currency: 'string',
      outBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResellerUserQuotaResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  success?: boolean;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      success: 'boolean',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResellerUserQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateResellerUserQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateResellerUserQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourcePackageRequest extends $tea.Model {
  ownerId?: number;
  productCode?: string;
  packageType?: string;
  effectiveDate?: string;
  specification?: string;
  duration?: number;
  pricingCycle?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      packageType: 'PackageType',
      effectiveDate: 'EffectiveDate',
      specification: 'Specification',
      duration: 'Duration',
      pricingCycle: 'PricingCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      productCode: 'string',
      packageType: 'string',
      effectiveDate: 'string',
      specification: 'string',
      duration: 'number',
      pricingCycle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourcePackageResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: number;
  success?: boolean;
  code?: string;
  message?: string;
  data?: CreateResourcePackageResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'number',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: CreateResourcePackageResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourcePackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateResourcePackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateResourcePackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCostUnitRequest extends $tea.Model {
  ownerUid?: number;
  unitId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerUid: 'OwnerUid',
      unitId: 'UnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerUid: 'number',
      unitId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCostUnitResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  code?: string;
  success?: boolean;
  data?: DeleteCostUnitResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
      data: DeleteCostUnitResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCostUnitResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCostUnitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCostUnitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePricingModuleRequest extends $tea.Model {
  ownerId?: number;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePricingModuleResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: DescribePricingModuleResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: DescribePricingModuleResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePricingModuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePricingModuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePricingModuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductRequest extends $tea.Model {
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: number;
  success?: boolean;
  code?: string;
  message?: string;
  data?: DescribeResourcePackageProductResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'number',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: DescribeResourcePackageProductResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeResourcePackageProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeResourcePackageProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSplitItemBillRequest extends $tea.Model {
  billingCycle?: string;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  ownerId?: number;
  nextToken?: string;
  maxResults?: number;
  billOwnerId?: number;
  tagFilter?: DescribeSplitItemBillRequestTagFilter[];
  instanceID?: string;
  splitItemID?: string;
  static names(): { [key: string]: string } {
    return {
      billingCycle: 'BillingCycle',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
      ownerId: 'OwnerId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      billOwnerId: 'BillOwnerId',
      tagFilter: 'TagFilter',
      instanceID: 'InstanceID',
      splitItemID: 'SplitItemID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingCycle: 'string',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
      ownerId: 'number',
      nextToken: 'string',
      maxResults: 'number',
      billOwnerId: 'number',
      tagFilter: { 'type': 'array', 'itemType': DescribeSplitItemBillRequestTagFilter },
      instanceID: 'string',
      splitItemID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSplitItemBillResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: DescribeSplitItemBillResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: DescribeSplitItemBillResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSplitItemBillResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSplitItemBillResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSplitItemBillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableBillGenerationRequest extends $tea.Model {
  productCode?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableBillGenerationResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: EnableBillGenerationResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: EnableBillGenerationResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableBillGenerationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableBillGenerationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableBillGenerationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerAccountInfoRequest extends $tea.Model {
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerAccountInfoResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: GetCustomerAccountInfoResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: GetCustomerAccountInfoResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerAccountInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCustomerAccountInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCustomerAccountInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerListResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: GetCustomerListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: GetCustomerListResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCustomerListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCustomerListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderDetailRequest extends $tea.Model {
  orderId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderDetailResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  code?: string;
  success?: boolean;
  data?: GetOrderDetailResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
      data: GetOrderDetailResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOrderDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOrderDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayAsYouGoPriceRequest extends $tea.Model {
  ownerId?: number;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  region?: string;
  moduleList?: GetPayAsYouGoPriceRequestModuleList[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
      region: 'Region',
      moduleList: 'ModuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
      region: 'string',
      moduleList: { 'type': 'array', 'itemType': GetPayAsYouGoPriceRequestModuleList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayAsYouGoPriceResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: GetPayAsYouGoPriceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: GetPayAsYouGoPriceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayAsYouGoPriceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPayAsYouGoPriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPayAsYouGoPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePackagePriceRequest extends $tea.Model {
  ownerId?: number;
  productCode?: string;
  packageType?: string;
  effectiveDate?: string;
  specification?: string;
  duration?: number;
  pricingCycle?: string;
  orderType?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      packageType: 'PackageType',
      effectiveDate: 'EffectiveDate',
      specification: 'Specification',
      duration: 'Duration',
      pricingCycle: 'PricingCycle',
      orderType: 'OrderType',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      productCode: 'string',
      packageType: 'string',
      effectiveDate: 'string',
      specification: 'string',
      duration: 'number',
      pricingCycle: 'string',
      orderType: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePackagePriceResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: GetResourcePackagePriceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: GetResourcePackagePriceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePackagePriceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetResourcePackagePriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetResourcePackagePriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionPriceRequest extends $tea.Model {
  servicePeriodUnit?: string;
  subscriptionType?: string;
  ownerId?: number;
  productCode?: string;
  orderType?: string;
  servicePeriodQuantity?: number;
  productType?: string;
  region?: string;
  instanceId?: string;
  moduleList?: GetSubscriptionPriceRequestModuleList[];
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      servicePeriodUnit: 'ServicePeriodUnit',
      subscriptionType: 'SubscriptionType',
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      orderType: 'OrderType',
      servicePeriodQuantity: 'ServicePeriodQuantity',
      productType: 'ProductType',
      region: 'Region',
      instanceId: 'InstanceId',
      moduleList: 'ModuleList',
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      servicePeriodUnit: 'string',
      subscriptionType: 'string',
      ownerId: 'number',
      productCode: 'string',
      orderType: 'string',
      servicePeriodQuantity: 'number',
      productType: 'string',
      region: 'string',
      instanceId: 'string',
      moduleList: { 'type': 'array', 'itemType': GetSubscriptionPriceRequestModuleList },
      quantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionPriceResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: GetSubscriptionPriceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: GetSubscriptionPriceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionPriceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSubscriptionPriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSubscriptionPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCostUnitRequest extends $tea.Model {
  unitEntityList?: ModifyCostUnitRequestUnitEntityList[];
  static names(): { [key: string]: string } {
    return {
      unitEntityList: 'UnitEntityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unitEntityList: { 'type': 'array', 'itemType': ModifyCostUnitRequestUnitEntityList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCostUnitResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  code?: string;
  success?: boolean;
  data?: ModifyCostUnitResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
      data: { 'type': 'array', 'itemType': ModifyCostUnitResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCostUnitResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyCostUnitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyCostUnitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceRequest extends $tea.Model {
  productCode?: string;
  ownerId?: number;
  productType?: string;
  subscriptionType?: string;
  modifyType?: string;
  instanceId?: string;
  parameter?: ModifyInstanceRequestParameter[];
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
      ownerId: 'OwnerId',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
      modifyType: 'ModifyType',
      instanceId: 'InstanceId',
      parameter: 'Parameter',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      ownerId: 'number',
      productType: 'string',
      subscriptionType: 'string',
      modifyType: 'string',
      instanceId: 'string',
      parameter: { 'type': 'array', 'itemType': ModifyInstanceRequestParameter },
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: ModifyInstanceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: ModifyInstanceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountBalanceResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: QueryAccountBalanceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: QueryAccountBalanceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountBalanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryAccountBalanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryAccountBalanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountBillRequest extends $tea.Model {
  billingCycle?: string;
  pageNum?: number;
  pageSize?: number;
  ownerID?: number;
  isGroupByProduct?: boolean;
  productCode?: string;
  billOwnerId?: number;
  granularity?: string;
  billingDate?: string;
  static names(): { [key: string]: string } {
    return {
      billingCycle: 'BillingCycle',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      ownerID: 'OwnerID',
      isGroupByProduct: 'IsGroupByProduct',
      productCode: 'ProductCode',
      billOwnerId: 'BillOwnerId',
      granularity: 'Granularity',
      billingDate: 'BillingDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingCycle: 'string',
      pageNum: 'number',
      pageSize: 'number',
      ownerID: 'number',
      isGroupByProduct: 'boolean',
      productCode: 'string',
      billOwnerId: 'number',
      granularity: 'string',
      billingDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountBillResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: QueryAccountBillResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: QueryAccountBillResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountBillResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryAccountBillResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryAccountBillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTransactionDetailsRequest extends $tea.Model {
  transactionNumber?: string;
  recordID?: string;
  transactionChannelSN?: string;
  createTimeStart?: string;
  createTimeEnd?: string;
  transactionType?: string;
  transactionChannel?: string;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      transactionNumber: 'TransactionNumber',
      recordID: 'RecordID',
      transactionChannelSN: 'TransactionChannelSN',
      createTimeStart: 'CreateTimeStart',
      createTimeEnd: 'CreateTimeEnd',
      transactionType: 'TransactionType',
      transactionChannel: 'TransactionChannel',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transactionNumber: 'string',
      recordID: 'string',
      transactionChannelSN: 'string',
      createTimeStart: 'string',
      createTimeEnd: 'string',
      transactionType: 'string',
      transactionChannel: 'string',
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTransactionDetailsResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: QueryAccountTransactionDetailsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: QueryAccountTransactionDetailsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTransactionDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryAccountTransactionDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryAccountTransactionDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTransactionsRequest extends $tea.Model {
  transactionNumber?: string;
  recordID?: string;
  transactionChannelSN?: string;
  createTimeStart?: string;
  createTimeEnd?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      transactionNumber: 'TransactionNumber',
      recordID: 'RecordID',
      transactionChannelSN: 'TransactionChannelSN',
      createTimeStart: 'CreateTimeStart',
      createTimeEnd: 'CreateTimeEnd',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transactionNumber: 'string',
      recordID: 'string',
      transactionChannelSN: 'string',
      createTimeStart: 'string',
      createTimeEnd: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTransactionsResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: QueryAccountTransactionsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: QueryAccountTransactionsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTransactionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryAccountTransactionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryAccountTransactionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvailableInstancesRequest extends $tea.Model {
  region?: string;
  ownerId?: number;
  pageNum?: number;
  pageSize?: number;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  instanceIDs?: string;
  endTimeStart?: string;
  endTimeEnd?: string;
  createTimeStart?: string;
  createTimeEnd?: string;
  renewStatus?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
      instanceIDs: 'InstanceIDs',
      endTimeStart: 'EndTimeStart',
      endTimeEnd: 'EndTimeEnd',
      createTimeStart: 'CreateTimeStart',
      createTimeEnd: 'CreateTimeEnd',
      renewStatus: 'RenewStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
      instanceIDs: 'string',
      endTimeStart: 'string',
      endTimeEnd: 'string',
      createTimeStart: 'string',
      createTimeEnd: 'string',
      renewStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvailableInstancesResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: QueryAvailableInstancesResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: QueryAvailableInstancesResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvailableInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryAvailableInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryAvailableInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillRequest extends $tea.Model {
  billingCycle?: string;
  type?: string;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  isHideZeroCharge?: boolean;
  isDisplayLocalCurrency?: boolean;
  ownerId?: number;
  pageNum?: number;
  pageSize?: number;
  billOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      billingCycle: 'BillingCycle',
      type: 'Type',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
      isHideZeroCharge: 'IsHideZeroCharge',
      isDisplayLocalCurrency: 'IsDisplayLocalCurrency',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      billOwnerId: 'BillOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingCycle: 'string',
      type: 'string',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
      isHideZeroCharge: 'boolean',
      isDisplayLocalCurrency: 'boolean',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      billOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: QueryBillResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: QueryBillResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryBillResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryBillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillOverviewRequest extends $tea.Model {
  billingCycle?: string;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  billOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      billingCycle: 'BillingCycle',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
      billOwnerId: 'BillOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingCycle: 'string',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
      billOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillOverviewResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: QueryBillOverviewResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: QueryBillOverviewResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillOverviewResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryBillOverviewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryBillOverviewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillToOSSSubscriptionResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: QueryBillToOSSSubscriptionResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: QueryBillToOSSSubscriptionResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillToOSSSubscriptionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryBillToOSSSubscriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryBillToOSSSubscriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCashCouponsRequest extends $tea.Model {
  expiryTimeEnd?: string;
  expiryTimeStart?: string;
  effectiveOrNot?: boolean;
  static names(): { [key: string]: string } {
    return {
      expiryTimeEnd: 'ExpiryTimeEnd',
      expiryTimeStart: 'ExpiryTimeStart',
      effectiveOrNot: 'EffectiveOrNot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiryTimeEnd: 'string',
      expiryTimeStart: 'string',
      effectiveOrNot: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCashCouponsResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: QueryCashCouponsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: QueryCashCouponsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCashCouponsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryCashCouponsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryCashCouponsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitRequest extends $tea.Model {
  ownerUid?: number;
  parentUnitId?: number;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerUid: 'OwnerUid',
      parentUnitId: 'ParentUnitId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerUid: 'number',
      parentUnitId: 'number',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  code?: string;
  success?: boolean;
  data?: QueryCostUnitResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
      data: QueryCostUnitResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryCostUnitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryCostUnitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResourceRequest extends $tea.Model {
  ownerUid?: number;
  unitId?: number;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerUid: 'OwnerUid',
      unitId: 'UnitId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerUid: 'number',
      unitId: 'number',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResourceResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  code?: string;
  success?: boolean;
  data?: QueryCostUnitResourceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      code: 'string',
      success: 'boolean',
      data: QueryCostUnitResourceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryCostUnitResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryCostUnitResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomerAddressListRequest extends $tea.Model {
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomerAddressListResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: QueryCustomerAddressListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: QueryCustomerAddressListResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomerAddressListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryCustomerAddressListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryCustomerAddressListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEvaluateListRequest extends $tea.Model {
  type?: number;
  outBizId?: string;
  ownerId?: number;
  pageNum?: number;
  pageSize?: number;
  startAmount?: number;
  endAmount?: number;
  startBizTime?: string;
  endBizTime?: string;
  sortType?: number;
  startSearchTime?: string;
  endSearchTime?: string;
  billCycle?: string;
  bizTypeList?: string[];
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      outBizId: 'OutBizId',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      startAmount: 'StartAmount',
      endAmount: 'EndAmount',
      startBizTime: 'StartBizTime',
      endBizTime: 'EndBizTime',
      sortType: 'SortType',
      startSearchTime: 'StartSearchTime',
      endSearchTime: 'EndSearchTime',
      billCycle: 'BillCycle',
      bizTypeList: 'BizTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      outBizId: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      startAmount: 'number',
      endAmount: 'number',
      startBizTime: 'string',
      endBizTime: 'string',
      sortType: 'number',
      startSearchTime: 'string',
      endSearchTime: 'string',
      billCycle: 'string',
      bizTypeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEvaluateListResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: QueryEvaluateListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: QueryEvaluateListResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEvaluateListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryEvaluateListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryEvaluateListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFinancialAccountInfoRequest extends $tea.Model {
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFinancialAccountInfoResponseBody extends $tea.Model {
  code?: string;
  requestId?: string;
  success?: boolean;
  message?: string;
  data?: QueryFinancialAccountInfoResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
      success: 'Success',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      requestId: 'string',
      success: 'boolean',
      message: 'string',
      data: QueryFinancialAccountInfoResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFinancialAccountInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryFinancialAccountInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryFinancialAccountInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceBillRequest extends $tea.Model {
  billingCycle?: string;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  ownerId?: number;
  isBillingItem?: boolean;
  pageNum?: number;
  pageSize?: number;
  isHideZeroCharge?: boolean;
  billingDate?: string;
  granularity?: string;
  billOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      billingCycle: 'BillingCycle',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
      ownerId: 'OwnerId',
      isBillingItem: 'IsBillingItem',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      isHideZeroCharge: 'IsHideZeroCharge',
      billingDate: 'BillingDate',
      granularity: 'Granularity',
      billOwnerId: 'BillOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingCycle: 'string',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
      ownerId: 'number',
      isBillingItem: 'boolean',
      pageNum: 'number',
      pageSize: 'number',
      isHideZeroCharge: 'boolean',
      billingDate: 'string',
      granularity: 'string',
      billOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceBillResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: QueryInstanceBillResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: QueryInstanceBillResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceBillResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryInstanceBillResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryInstanceBillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceByTagRequest extends $tea.Model {
  resourceType?: string;
  resourceId?: string[];
  tag?: QueryInstanceByTagRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': QueryInstanceByTagRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceByTagResponseBody extends $tea.Model {
  code?: string;
  requestId?: string;
  success?: boolean;
  message?: string;
  nextToken?: string;
  tagResource?: QueryInstanceByTagResponseBodyTagResource[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
      success: 'Success',
      message: 'Message',
      nextToken: 'NextToken',
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      requestId: 'string',
      success: 'boolean',
      message: 'string',
      nextToken: 'string',
      tagResource: { 'type': 'array', 'itemType': QueryInstanceByTagResponseBodyTagResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceByTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryInstanceByTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryInstanceByTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceGaapCostRequest extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  billingCycle?: string;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      billingCycle: 'BillingCycle',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      billingCycle: 'string',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceGaapCostResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: QueryInstanceGaapCostResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: QueryInstanceGaapCostResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceGaapCostResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryInstanceGaapCostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryInstanceGaapCostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvoicingCustomerListRequest extends $tea.Model {
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvoicingCustomerListResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: QueryInvoicingCustomerListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: QueryInvoicingCustomerListResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvoicingCustomerListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryInvoicingCustomerListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryInvoicingCustomerListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonthlyBillRequest extends $tea.Model {
  billingCycle?: string;
  static names(): { [key: string]: string } {
    return {
      billingCycle: 'BillingCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingCycle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonthlyBillResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: QueryMonthlyBillResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: QueryMonthlyBillResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonthlyBillResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryMonthlyBillResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryMonthlyBillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonthlyInstanceConsumptionRequest extends $tea.Model {
  productCode?: string;
  ownerId?: number;
  pageNum?: number;
  pageSize?: number;
  billingCycle?: string;
  productType?: string;
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      billingCycle: 'BillingCycle',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      billingCycle: 'string',
      productType: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonthlyInstanceConsumptionResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: QueryMonthlyInstanceConsumptionResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: QueryMonthlyInstanceConsumptionResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonthlyInstanceConsumptionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryMonthlyInstanceConsumptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryMonthlyInstanceConsumptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrdersRequest extends $tea.Model {
  createTimeEnd?: string;
  pageNum?: number;
  pageSize?: number;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  orderType?: string;
  paymentStatus?: string;
  createTimeStart?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      createTimeEnd: 'CreateTimeEnd',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
      orderType: 'OrderType',
      paymentStatus: 'PaymentStatus',
      createTimeStart: 'CreateTimeStart',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeEnd: 'string',
      pageNum: 'number',
      pageSize: 'number',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
      orderType: 'string',
      paymentStatus: 'string',
      createTimeStart: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrdersResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: QueryOrdersResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: QueryOrdersResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrdersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryOrdersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryOrdersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPermissionListRequest extends $tea.Model {
  relationId?: number;
  static names(): { [key: string]: string } {
    return {
      relationId: 'RelationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relationId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPermissionListResponseBody extends $tea.Model {
  code?: string;
  requestId?: string;
  success?: boolean;
  message?: string;
  data?: QueryPermissionListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
      success: 'Success',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      requestId: 'string',
      success: 'boolean',
      message: 'string',
      data: QueryPermissionListResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPermissionListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryPermissionListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryPermissionListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPrepaidCardsRequest extends $tea.Model {
  expiryTimeEnd?: string;
  expiryTimeStart?: string;
  effectiveOrNot?: boolean;
  static names(): { [key: string]: string } {
    return {
      expiryTimeEnd: 'ExpiryTimeEnd',
      expiryTimeStart: 'ExpiryTimeStart',
      effectiveOrNot: 'EffectiveOrNot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiryTimeEnd: 'string',
      expiryTimeStart: 'string',
      effectiveOrNot: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPrepaidCardsResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: QueryPrepaidCardsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: QueryPrepaidCardsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPrepaidCardsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryPrepaidCardsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryPrepaidCardsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductListRequest extends $tea.Model {
  queryTotalCount?: boolean;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      queryTotalCount: 'QueryTotalCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryTotalCount: 'boolean',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductListResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: QueryProductListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: QueryProductListResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryProductListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryProductListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRedeemRequest extends $tea.Model {
  expiryTimeStart?: string;
  expiryTimeEnd?: string;
  effectiveOrNot?: boolean;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      expiryTimeStart: 'ExpiryTimeStart',
      expiryTimeEnd: 'ExpiryTimeEnd',
      effectiveOrNot: 'EffectiveOrNot',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiryTimeStart: 'string',
      expiryTimeEnd: 'string',
      effectiveOrNot: 'boolean',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRedeemResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: QueryRedeemResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: QueryRedeemResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRedeemResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryRedeemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryRedeemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRelationListRequest extends $tea.Model {
  userId?: number;
  statusList?: string[];
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      statusList: 'StatusList',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'number',
      statusList: { 'type': 'array', 'itemType': 'string' },
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRelationListResponseBody extends $tea.Model {
  code?: string;
  requestId?: string;
  success?: boolean;
  message?: string;
  data?: QueryRelationListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
      success: 'Success',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      requestId: 'string',
      success: 'boolean',
      message: 'string',
      data: QueryRelationListResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRelationListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryRelationListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryRelationListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResellerAvailableQuotaRequest extends $tea.Model {
  ownerId?: number;
  itemCodes?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      itemCodes: 'ItemCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      itemCodes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResellerAvailableQuotaResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  success?: boolean;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      success: 'boolean',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResellerAvailableQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryResellerAvailableQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryResellerAvailableQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourcePackageInstancesRequest extends $tea.Model {
  ownerId?: number;
  productCode?: string;
  expiryTimeStart?: string;
  expiryTimeEnd?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      expiryTimeStart: 'ExpiryTimeStart',
      expiryTimeEnd: 'ExpiryTimeEnd',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      productCode: 'string',
      expiryTimeStart: 'string',
      expiryTimeEnd: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourcePackageInstancesResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  page?: number;
  pageSize?: number;
  total?: number;
  data?: QueryResourcePackageInstancesResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      page: 'Page',
      pageSize: 'PageSize',
      total: 'Total',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      page: 'number',
      pageSize: 'number',
      total: 'number',
      data: QueryResourcePackageInstancesResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourcePackageInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryResourcePackageInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryResourcePackageInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRIUtilizationDetailRequest extends $tea.Model {
  RIInstanceId?: string;
  instanceSpec?: string;
  RICommodityCode?: string;
  deductedInstanceId?: string;
  startTime?: string;
  endTime?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      RIInstanceId: 'RIInstanceId',
      instanceSpec: 'InstanceSpec',
      RICommodityCode: 'RICommodityCode',
      deductedInstanceId: 'DeductedInstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      RIInstanceId: 'string',
      instanceSpec: 'string',
      RICommodityCode: 'string',
      deductedInstanceId: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRIUtilizationDetailResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: QueryRIUtilizationDetailResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: QueryRIUtilizationDetailResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRIUtilizationDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryRIUtilizationDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryRIUtilizationDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansDeductLogRequest extends $tea.Model {
  instanceType?: string;
  pageSize?: number;
  locale?: string;
  pageNum?: number;
  instanceId?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      pageSize: 'PageSize',
      locale: 'Locale',
      pageNum: 'PageNum',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      pageSize: 'number',
      locale: 'string',
      pageNum: 'number',
      instanceId: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansDeductLogResponseBody extends $tea.Model {
  code?: string;
  requestId?: string;
  success?: boolean;
  message?: string;
  data?: QuerySavingsPlansDeductLogResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
      success: 'Success',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      requestId: 'string',
      success: 'boolean',
      message: 'string',
      data: QuerySavingsPlansDeductLogResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansDeductLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QuerySavingsPlansDeductLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QuerySavingsPlansDeductLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansInstanceRequest extends $tea.Model {
  pageSize?: number;
  locale?: string;
  pageNum?: number;
  instanceId?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      locale: 'Locale',
      pageNum: 'PageNum',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      locale: 'string',
      pageNum: 'number',
      instanceId: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansInstanceResponseBody extends $tea.Model {
  code?: string;
  requestId?: string;
  success?: boolean;
  message?: string;
  data?: QuerySavingsPlansInstanceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
      success: 'Success',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      requestId: 'string',
      success: 'boolean',
      message: 'string',
      data: QuerySavingsPlansInstanceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QuerySavingsPlansInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QuerySavingsPlansInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySettleBillRequest extends $tea.Model {
  billingCycle?: string;
  type?: string;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  isHideZeroCharge?: boolean;
  isDisplayLocalCurrency?: boolean;
  ownerId?: number;
  nextToken?: string;
  maxResults?: number;
  billOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      billingCycle: 'BillingCycle',
      type: 'Type',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
      isHideZeroCharge: 'IsHideZeroCharge',
      isDisplayLocalCurrency: 'IsDisplayLocalCurrency',
      ownerId: 'OwnerId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      billOwnerId: 'BillOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingCycle: 'string',
      type: 'string',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
      isHideZeroCharge: 'boolean',
      isDisplayLocalCurrency: 'boolean',
      ownerId: 'number',
      nextToken: 'string',
      maxResults: 'number',
      billOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySettleBillResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: QuerySettleBillResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: QuerySettleBillResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySettleBillResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QuerySettleBillResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QuerySettleBillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySettlementBillRequest extends $tea.Model {
  pageSize?: number;
  ownerId?: number;
  pageNum?: number;
  billingCycle?: string;
  startTime?: string;
  endTime?: string;
  type?: string;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  isHideZeroCharge?: boolean;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      billingCycle: 'BillingCycle',
      startTime: 'StartTime',
      endTime: 'EndTime',
      type: 'Type',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
      isHideZeroCharge: 'IsHideZeroCharge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      ownerId: 'number',
      pageNum: 'number',
      billingCycle: 'string',
      startTime: 'string',
      endTime: 'string',
      type: 'string',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
      isHideZeroCharge: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySettlementBillResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: QuerySettlementBillResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: QuerySettlementBillResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySettlementBillResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QuerySettlementBillResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QuerySettlementBillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySplitItemBillRequest extends $tea.Model {
  billingCycle?: string;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  ownerId?: number;
  pageNum?: number;
  pageSize?: number;
  billOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      billingCycle: 'BillingCycle',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      billOwnerId: 'BillOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingCycle: 'string',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      billOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySplitItemBillResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: QuerySplitItemBillResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: QuerySplitItemBillResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySplitItemBillResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QuerySplitItemBillResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QuerySplitItemBillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserOmsDataRequest extends $tea.Model {
  ownerId?: number;
  table?: string;
  dataType?: string;
  startTime?: string;
  endTime?: string;
  marker?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      table: 'Table',
      dataType: 'DataType',
      startTime: 'StartTime',
      endTime: 'EndTime',
      marker: 'Marker',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      table: 'string',
      dataType: 'string',
      startTime: 'string',
      endTime: 'string',
      marker: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserOmsDataResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: QueryUserOmsDataResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: QueryUserOmsDataResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserOmsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryUserOmsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryUserOmsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceRequest extends $tea.Model {
  productCode?: string;
  instanceId?: string;
  renewPeriod?: number;
  clientToken?: string;
  productType?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
      instanceId: 'InstanceId',
      renewPeriod: 'RenewPeriod',
      clientToken: 'ClientToken',
      productType: 'ProductType',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      instanceId: 'string',
      renewPeriod: 'number',
      clientToken: 'string',
      productType: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: RenewInstanceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: RenewInstanceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RenewInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RenewInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewResourcePackageRequest extends $tea.Model {
  ownerId?: number;
  instanceId?: string;
  effectiveDate?: string;
  duration?: number;
  pricingCycle?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      instanceId: 'InstanceId',
      effectiveDate: 'EffectiveDate',
      duration: 'Duration',
      pricingCycle: 'PricingCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      instanceId: 'string',
      effectiveDate: 'string',
      duration: 'number',
      pricingCycle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewResourcePackageResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: number;
  success?: boolean;
  code?: string;
  message?: string;
  data?: RenewResourcePackageResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'number',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: RenewResourcePackageResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewResourcePackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RenewResourcePackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RenewResourcePackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveUserCreditRequest extends $tea.Model {
  avoidExpiration?: boolean;
  avoidPrepaidNotification?: boolean;
  description?: string;
  avoidNotification?: boolean;
  creditValue?: string;
  avoidPrepaidExpiration?: boolean;
  operator?: string;
  creditType?: string;
  static names(): { [key: string]: string } {
    return {
      avoidExpiration: 'AvoidExpiration',
      avoidPrepaidNotification: 'AvoidPrepaidNotification',
      description: 'Description',
      avoidNotification: 'AvoidNotification',
      creditValue: 'CreditValue',
      avoidPrepaidExpiration: 'AvoidPrepaidExpiration',
      operator: 'Operator',
      creditType: 'CreditType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avoidExpiration: 'boolean',
      avoidPrepaidNotification: 'boolean',
      description: 'string',
      avoidNotification: 'boolean',
      creditValue: 'string',
      avoidPrepaidExpiration: 'boolean',
      operator: 'string',
      creditType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveUserCreditResponseBody extends $tea.Model {
  code?: string;
  success?: boolean;
  requestId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      success: 'Success',
      requestId: 'RequestId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      success: 'boolean',
      requestId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveUserCreditResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SaveUserCreditResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveUserCreditResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCreditLabelActionRequest extends $tea.Model {
  actionType?: string;
  uid?: string;
  clearCycle?: string;
  creditAmount?: string;
  currencyCode?: string;
  dailyCycle?: string;
  description?: string;
  isNeedAddSettleLabel?: string;
  isNeedAdjustCreditAccount?: string;
  isNeedSaveNotifyRule?: string;
  isNeedSetCreditAmount?: string;
  needNotice?: boolean;
  newCreateMode?: boolean;
  operator?: string;
  requestId?: string;
  siteCode?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      uid: 'Uid',
      clearCycle: 'ClearCycle',
      creditAmount: 'CreditAmount',
      currencyCode: 'CurrencyCode',
      dailyCycle: 'DailyCycle',
      description: 'Description',
      isNeedAddSettleLabel: 'IsNeedAddSettleLabel',
      isNeedAdjustCreditAccount: 'IsNeedAdjustCreditAccount',
      isNeedSaveNotifyRule: 'IsNeedSaveNotifyRule',
      isNeedSetCreditAmount: 'IsNeedSetCreditAmount',
      needNotice: 'NeedNotice',
      newCreateMode: 'NewCreateMode',
      operator: 'Operator',
      requestId: 'RequestId',
      siteCode: 'SiteCode',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      uid: 'string',
      clearCycle: 'string',
      creditAmount: 'string',
      currencyCode: 'string',
      dailyCycle: 'string',
      description: 'string',
      isNeedAddSettleLabel: 'string',
      isNeedAdjustCreditAccount: 'string',
      isNeedSaveNotifyRule: 'string',
      isNeedSetCreditAmount: 'string',
      needNotice: 'boolean',
      newCreateMode: 'boolean',
      operator: 'string',
      requestId: 'string',
      siteCode: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCreditLabelActionResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  message?: string;
  success?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      success: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCreditLabelActionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetCreditLabelActionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetCreditLabelActionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetRenewalRequest extends $tea.Model {
  renewalPeriod?: number;
  instanceIDs?: string;
  ownerId?: number;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  renewalPeriodUnit?: string;
  renewalStatus?: string;
  static names(): { [key: string]: string } {
    return {
      renewalPeriod: 'RenewalPeriod',
      instanceIDs: 'InstanceIDs',
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
      renewalPeriodUnit: 'RenewalPeriodUnit',
      renewalStatus: 'RenewalStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renewalPeriod: 'number',
      instanceIDs: 'string',
      ownerId: 'number',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
      renewalPeriodUnit: 'string',
      renewalStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetRenewalResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetRenewalResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetRenewalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetRenewalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetResellerUserAlarmThresholdRequest extends $tea.Model {
  ownerId?: number;
  alarmType?: string;
  alarmThresholds?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      alarmType: 'AlarmType',
      alarmThresholds: 'AlarmThresholds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      alarmType: 'string',
      alarmThresholds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetResellerUserAlarmThresholdResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  success?: boolean;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      success: 'boolean',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetResellerUserAlarmThresholdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetResellerUserAlarmThresholdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetResellerUserAlarmThresholdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetResellerUserQuotaRequest extends $tea.Model {
  ownerId?: number;
  amount?: string;
  currency?: string;
  outBizId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      amount: 'Amount',
      currency: 'Currency',
      outBizId: 'OutBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      amount: 'string',
      currency: 'string',
      outBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetResellerUserQuotaResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  success?: boolean;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      success: 'boolean',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetResellerUserQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetResellerUserQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetResellerUserQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetResellerUserStatusRequest extends $tea.Model {
  ownerId?: string;
  status?: string;
  businessType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      status: 'Status',
      businessType: 'BusinessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
      status: 'string',
      businessType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetResellerUserStatusResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  success?: boolean;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      success: 'boolean',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetResellerUserStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetResellerUserStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetResellerUserStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscribeBillToOSSRequest extends $tea.Model {
  subscribeBucket?: string;
  subscribeType?: string;
  multAccountRelSubscribe?: string;
  bucketOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      subscribeBucket: 'SubscribeBucket',
      subscribeType: 'SubscribeType',
      multAccountRelSubscribe: 'MultAccountRelSubscribe',
      bucketOwnerId: 'BucketOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscribeBucket: 'string',
      subscribeType: 'string',
      multAccountRelSubscribe: 'string',
      bucketOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscribeBillToOSSResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscribeBillToOSSResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubscribeBillToOSSResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubscribeBillToOSSResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  resourceType?: string;
  resourceId?: string[];
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  code?: string;
  requestId?: string;
  success?: boolean;
  message?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
      success: 'Success',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      requestId: 'string',
      success: 'boolean',
      message: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnsubscribeBillToOSSRequest extends $tea.Model {
  subscribeType?: string;
  multAccountRelSubscribe?: string;
  static names(): { [key: string]: string } {
    return {
      subscribeType: 'SubscribeType',
      multAccountRelSubscribe: 'MultAccountRelSubscribe',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscribeType: 'string',
      multAccountRelSubscribe: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnsubscribeBillToOSSResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnsubscribeBillToOSSResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnsubscribeBillToOSSResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnsubscribeBillToOSSResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  resourceType?: string;
  resourceId?: string[];
  tagKey?: string[];
  all?: boolean;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
      all: 'All',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tagKey: { 'type': 'array', 'itemType': 'string' },
      all: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  code?: string;
  requestId?: string;
  success?: boolean;
  message?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
      success: 'Success',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      requestId: 'string',
      success: 'boolean',
      message: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeResourcePackageRequest extends $tea.Model {
  ownerId?: number;
  instanceId?: string;
  effectiveDate?: string;
  specification?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      instanceId: 'InstanceId',
      effectiveDate: 'EffectiveDate',
      specification: 'Specification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      instanceId: 'string',
      effectiveDate: 'string',
      specification: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeResourcePackageResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: number;
  success?: boolean;
  code?: string;
  message?: string;
  data?: UpgradeResourcePackageResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'number',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: UpgradeResourcePackageResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeResourcePackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradeResourcePackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradeResourcePackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateCostUnitResourceRequestResourceInstanceList extends $tea.Model {
  apportionCode?: string;
  commodityCode?: string;
  resourceId?: string;
  resourceUserId?: number;
  static names(): { [key: string]: string } {
    return {
      apportionCode: 'ApportionCode',
      commodityCode: 'CommodityCode',
      resourceId: 'ResourceId',
      resourceUserId: 'ResourceUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apportionCode: 'string',
      commodityCode: 'string',
      resourceId: 'string',
      resourceUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateCostUnitResourceResponseBodyData extends $tea.Model {
  isSuccess?: boolean;
  toUnitUserId?: number;
  toUnitId?: number;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      toUnitUserId: 'ToUnitUserId',
      toUnitId: 'ToUnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      toUnitUserId: 'number',
      toUnitId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyInvoiceResponseBodyData extends $tea.Model {
  invoiceApplyId?: number;
  static names(): { [key: string]: string } {
    return {
      invoiceApplyId: 'InvoiceApplyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invoiceApplyId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderResponseBodyData extends $tea.Model {
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertChargeTypeResponseBodyData extends $tea.Model {
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

export class CreateAgAccountResponseBodyAgRelationDto extends $tea.Model {
  pk?: string;
  type?: string;
  mpk?: string;
  ramAdminRoleName?: string;
  static names(): { [key: string]: string } {
    return {
      pk: 'Pk',
      type: 'Type',
      mpk: 'Mpk',
      ramAdminRoleName: 'RamAdminRoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pk: 'string',
      type: 'string',
      mpk: 'string',
      ramAdminRoleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCostUnitRequestUnitEntityList extends $tea.Model {
  ownerUid?: number;
  parentUnitId?: number;
  unitName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerUid: 'OwnerUid',
      parentUnitId: 'ParentUnitId',
      unitName: 'UnitName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerUid: 'number',
      parentUnitId: 'number',
      unitName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCostUnitResponseBodyDataCostUnitDtoList extends $tea.Model {
  unitId?: number;
  parentUnitId?: number;
  ownerUid?: number;
  unitName?: string;
  static names(): { [key: string]: string } {
    return {
      unitId: 'UnitId',
      parentUnitId: 'ParentUnitId',
      ownerUid: 'OwnerUid',
      unitName: 'UnitName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unitId: 'number',
      parentUnitId: 'number',
      ownerUid: 'number',
      unitName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCostUnitResponseBodyData extends $tea.Model {
  costUnitDtoList?: CreateCostUnitResponseBodyDataCostUnitDtoList[];
  static names(): { [key: string]: string } {
    return {
      costUnitDtoList: 'CostUnitDtoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costUnitDtoList: { 'type': 'array', 'itemType': CreateCostUnitResponseBodyDataCostUnitDtoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestParameter extends $tea.Model {
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

export class CreateInstanceResponseBodyData extends $tea.Model {
  instanceId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourcePackageResponseBodyData extends $tea.Model {
  orderId?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCostUnitResponseBodyData extends $tea.Model {
  isSuccess?: boolean;
  unitId?: number;
  ownerUid?: number;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      unitId: 'UnitId',
      ownerUid: 'OwnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      unitId: 'number',
      ownerUid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePricingModuleResponseBodyDataModuleListModuleConfigList extends $tea.Model {
  configList?: string[];
  static names(): { [key: string]: string } {
    return {
      configList: 'ConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePricingModuleResponseBodyDataModuleListModule extends $tea.Model {
  moduleCode?: string;
  moduleName?: string;
  priceType?: string;
  currency?: string;
  configList?: DescribePricingModuleResponseBodyDataModuleListModuleConfigList;
  static names(): { [key: string]: string } {
    return {
      moduleCode: 'ModuleCode',
      moduleName: 'ModuleName',
      priceType: 'PriceType',
      currency: 'Currency',
      configList: 'ConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleCode: 'string',
      moduleName: 'string',
      priceType: 'string',
      currency: 'string',
      configList: DescribePricingModuleResponseBodyDataModuleListModuleConfigList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePricingModuleResponseBodyDataModuleList extends $tea.Model {
  module?: DescribePricingModuleResponseBodyDataModuleListModule[];
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: { 'type': 'array', 'itemType': DescribePricingModuleResponseBodyDataModuleListModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePricingModuleResponseBodyDataAttributeListAttributeValuesAttributeValue extends $tea.Model {
  type?: string;
  name?: string;
  value?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      name: 'Name',
      value: 'Value',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      name: 'string',
      value: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePricingModuleResponseBodyDataAttributeListAttributeValues extends $tea.Model {
  attributeValue?: DescribePricingModuleResponseBodyDataAttributeListAttributeValuesAttributeValue[];
  static names(): { [key: string]: string } {
    return {
      attributeValue: 'AttributeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeValue: { 'type': 'array', 'itemType': DescribePricingModuleResponseBodyDataAttributeListAttributeValuesAttributeValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePricingModuleResponseBodyDataAttributeListAttribute extends $tea.Model {
  code?: string;
  name?: string;
  unit?: string;
  values?: DescribePricingModuleResponseBodyDataAttributeListAttributeValues;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      unit: 'Unit',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      unit: 'string',
      values: DescribePricingModuleResponseBodyDataAttributeListAttributeValues,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePricingModuleResponseBodyDataAttributeList extends $tea.Model {
  attribute?: DescribePricingModuleResponseBodyDataAttributeListAttribute[];
  static names(): { [key: string]: string } {
    return {
      attribute: 'Attribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: { 'type': 'array', 'itemType': DescribePricingModuleResponseBodyDataAttributeListAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePricingModuleResponseBodyData extends $tea.Model {
  moduleList?: DescribePricingModuleResponseBodyDataModuleList;
  attributeList?: DescribePricingModuleResponseBodyDataAttributeList;
  static names(): { [key: string]: string } {
    return {
      moduleList: 'ModuleList',
      attributeList: 'AttributeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleList: DescribePricingModuleResponseBodyDataModuleList,
      attributeList: DescribePricingModuleResponseBodyDataAttributeList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypePropertiesProperty extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeProperties extends $tea.Model {
  property?: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypePropertiesProperty[];
  static names(): { [key: string]: string } {
    return {
      property: 'Property',
    };
  }

  static types(): { [key: string]: any } {
    return {
      property: { 'type': 'array', 'itemType': DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypePropertiesProperty },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecificationsSpecificationAvailableDurationsAvailableDuration extends $tea.Model {
  name?: string;
  value?: number;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'number',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecificationsSpecificationAvailableDurations extends $tea.Model {
  availableDuration?: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecificationsSpecificationAvailableDurationsAvailableDuration[];
  static names(): { [key: string]: string } {
    return {
      availableDuration: 'AvailableDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableDuration: { 'type': 'array', 'itemType': DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecificationsSpecificationAvailableDurationsAvailableDuration },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecificationsSpecification extends $tea.Model {
  name?: string;
  value?: string;
  availableDurations?: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecificationsSpecificationAvailableDurations;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
      availableDurations: 'AvailableDurations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
      availableDurations: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecificationsSpecificationAvailableDurations,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecifications extends $tea.Model {
  specification?: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecificationsSpecification[];
  static names(): { [key: string]: string } {
    return {
      specification: 'Specification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specification: { 'type': 'array', 'itemType': DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecificationsSpecification },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageType extends $tea.Model {
  name?: string;
  code?: string;
  properties?: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeProperties;
  specifications?: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecifications;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      code: 'Code',
      properties: 'Properties',
      specifications: 'Specifications',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      code: 'string',
      properties: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeProperties,
      specifications: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecifications,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypes extends $tea.Model {
  packageType?: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageType[];
  static names(): { [key: string]: string } {
    return {
      packageType: 'PackageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageType: { 'type': 'array', 'itemType': DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageType },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackage extends $tea.Model {
  productCode?: string;
  productType?: string;
  name?: string;
  packageTypes?: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypes;
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
      productType: 'ProductType',
      name: 'Name',
      packageTypes: 'PackageTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      productType: 'string',
      name: 'string',
      packageTypes: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponseBodyDataResourcePackages extends $tea.Model {
  resourcePackage?: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackage[];
  static names(): { [key: string]: string } {
    return {
      resourcePackage: 'ResourcePackage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourcePackage: { 'type': 'array', 'itemType': DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcePackageProductResponseBodyData extends $tea.Model {
  resourcePackages?: DescribeResourcePackageProductResponseBodyDataResourcePackages;
  static names(): { [key: string]: string } {
    return {
      resourcePackages: 'ResourcePackages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourcePackages: DescribeResourcePackageProductResponseBodyDataResourcePackages,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSplitItemBillRequestTagFilter extends $tea.Model {
  tagKey?: string;
  tagValues?: string[];
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValues: 'TagValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSplitItemBillResponseBodyDataItems extends $tea.Model {
  instanceID?: string;
  billingType?: string;
  costUnit?: string;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  productName?: string;
  productDetail?: string;
  ownerID?: string;
  billingItem?: string;
  listPrice?: string;
  listPriceUnit?: string;
  usage?: string;
  usageUnit?: string;
  deductedByResourcePackage?: string;
  pretaxGrossAmount?: number;
  invoiceDiscount?: number;
  deductedByCoupons?: number;
  pretaxAmount?: number;
  deductedByCashCoupons?: number;
  deductedByPrepaidCard?: number;
  paymentAmount?: number;
  outstandingAmount?: number;
  currency?: string;
  nickName?: string;
  resourceGroup?: string;
  tag?: string;
  instanceConfig?: string;
  instanceSpec?: string;
  internetIP?: string;
  intranetIP?: string;
  region?: string;
  zone?: string;
  item?: string;
  servicePeriod?: string;
  billingDate?: string;
  splitItemID?: string;
  splitItemName?: string;
  pipCode?: string;
  commodityCode?: string;
  servicePeriodUnit?: string;
  splitCommodityCode?: string;
  splitProductDetail?: string;
  splitAccountID?: string;
  splitAccountName?: string;
  splitBillingCycle?: string;
  static names(): { [key: string]: string } {
    return {
      instanceID: 'InstanceID',
      billingType: 'BillingType',
      costUnit: 'CostUnit',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
      productName: 'ProductName',
      productDetail: 'ProductDetail',
      ownerID: 'OwnerID',
      billingItem: 'BillingItem',
      listPrice: 'ListPrice',
      listPriceUnit: 'ListPriceUnit',
      usage: 'Usage',
      usageUnit: 'UsageUnit',
      deductedByResourcePackage: 'DeductedByResourcePackage',
      pretaxGrossAmount: 'PretaxGrossAmount',
      invoiceDiscount: 'InvoiceDiscount',
      deductedByCoupons: 'DeductedByCoupons',
      pretaxAmount: 'PretaxAmount',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      paymentAmount: 'PaymentAmount',
      outstandingAmount: 'OutstandingAmount',
      currency: 'Currency',
      nickName: 'NickName',
      resourceGroup: 'ResourceGroup',
      tag: 'Tag',
      instanceConfig: 'InstanceConfig',
      instanceSpec: 'InstanceSpec',
      internetIP: 'InternetIP',
      intranetIP: 'IntranetIP',
      region: 'Region',
      zone: 'Zone',
      item: 'Item',
      servicePeriod: 'ServicePeriod',
      billingDate: 'BillingDate',
      splitItemID: 'SplitItemID',
      splitItemName: 'SplitItemName',
      pipCode: 'PipCode',
      commodityCode: 'CommodityCode',
      servicePeriodUnit: 'ServicePeriodUnit',
      splitCommodityCode: 'SplitCommodityCode',
      splitProductDetail: 'SplitProductDetail',
      splitAccountID: 'SplitAccountID',
      splitAccountName: 'SplitAccountName',
      splitBillingCycle: 'SplitBillingCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceID: 'string',
      billingType: 'string',
      costUnit: 'string',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
      productName: 'string',
      productDetail: 'string',
      ownerID: 'string',
      billingItem: 'string',
      listPrice: 'string',
      listPriceUnit: 'string',
      usage: 'string',
      usageUnit: 'string',
      deductedByResourcePackage: 'string',
      pretaxGrossAmount: 'number',
      invoiceDiscount: 'number',
      deductedByCoupons: 'number',
      pretaxAmount: 'number',
      deductedByCashCoupons: 'number',
      deductedByPrepaidCard: 'number',
      paymentAmount: 'number',
      outstandingAmount: 'number',
      currency: 'string',
      nickName: 'string',
      resourceGroup: 'string',
      tag: 'string',
      instanceConfig: 'string',
      instanceSpec: 'string',
      internetIP: 'string',
      intranetIP: 'string',
      region: 'string',
      zone: 'string',
      item: 'string',
      servicePeriod: 'string',
      billingDate: 'string',
      splitItemID: 'string',
      splitItemName: 'string',
      pipCode: 'string',
      commodityCode: 'string',
      servicePeriodUnit: 'string',
      splitCommodityCode: 'string',
      splitProductDetail: 'string',
      splitAccountID: 'string',
      splitAccountName: 'string',
      splitBillingCycle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSplitItemBillResponseBodyData extends $tea.Model {
  billingCycle?: string;
  accountID?: string;
  accountName?: string;
  totalCount?: number;
  nextToken?: string;
  maxResults?: number;
  items?: DescribeSplitItemBillResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      billingCycle: 'BillingCycle',
      accountID: 'AccountID',
      accountName: 'AccountName',
      totalCount: 'TotalCount',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingCycle: 'string',
      accountID: 'string',
      accountName: 'string',
      totalCount: 'number',
      nextToken: 'string',
      maxResults: 'number',
      items: { 'type': 'array', 'itemType': DescribeSplitItemBillResponseBodyDataItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableBillGenerationResponseBodyData extends $tea.Model {
  boolean?: boolean;
  static names(): { [key: string]: string } {
    return {
      boolean: 'Boolean',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boolean: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerAccountInfoResponseBodyData extends $tea.Model {
  loginEmail?: string;
  accountType?: string;
  mpk?: number;
  hostingStatus?: string;
  creditLimitStatus?: string;
  isCertified?: boolean;
  static names(): { [key: string]: string } {
    return {
      loginEmail: 'LoginEmail',
      accountType: 'AccountType',
      mpk: 'Mpk',
      hostingStatus: 'HostingStatus',
      creditLimitStatus: 'CreditLimitStatus',
      isCertified: 'IsCertified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginEmail: 'string',
      accountType: 'string',
      mpk: 'number',
      hostingStatus: 'string',
      creditLimitStatus: 'string',
      isCertified: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerListResponseBodyData extends $tea.Model {
  uidList?: string[];
  static names(): { [key: string]: string } {
    return {
      uidList: 'UidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderDetailResponseBodyDataOrderListOrder extends $tea.Model {
  operator?: string;
  afterTaxAmount?: string;
  subOrderId?: string;
  config?: string;
  tax?: string;
  paymentTime?: string;
  paymentCurrency?: string;
  usageEndTime?: string;
  subscriptionType?: string;
  pretaxGrossAmount?: string;
  orderType?: string;
  currency?: string;
  usageStartTime?: string;
  originalConfig?: string;
  paymentStatus?: string;
  productCode?: string;
  createTime?: string;
  productType?: string;
  relatedOrderId?: string;
  quantity?: string;
  orderId?: string;
  pretaxAmount?: string;
  orderSubType?: string;
  region?: string;
  instanceIDs?: string;
  pretaxAmountLocal?: string;
  commodityCode?: string;
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
      afterTaxAmount: 'AfterTaxAmount',
      subOrderId: 'SubOrderId',
      config: 'Config',
      tax: 'Tax',
      paymentTime: 'PaymentTime',
      paymentCurrency: 'PaymentCurrency',
      usageEndTime: 'UsageEndTime',
      subscriptionType: 'SubscriptionType',
      pretaxGrossAmount: 'PretaxGrossAmount',
      orderType: 'OrderType',
      currency: 'Currency',
      usageStartTime: 'UsageStartTime',
      originalConfig: 'OriginalConfig',
      paymentStatus: 'PaymentStatus',
      productCode: 'ProductCode',
      createTime: 'CreateTime',
      productType: 'ProductType',
      relatedOrderId: 'RelatedOrderId',
      quantity: 'Quantity',
      orderId: 'OrderId',
      pretaxAmount: 'PretaxAmount',
      orderSubType: 'OrderSubType',
      region: 'Region',
      instanceIDs: 'InstanceIDs',
      pretaxAmountLocal: 'PretaxAmountLocal',
      commodityCode: 'CommodityCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      afterTaxAmount: 'string',
      subOrderId: 'string',
      config: 'string',
      tax: 'string',
      paymentTime: 'string',
      paymentCurrency: 'string',
      usageEndTime: 'string',
      subscriptionType: 'string',
      pretaxGrossAmount: 'string',
      orderType: 'string',
      currency: 'string',
      usageStartTime: 'string',
      originalConfig: 'string',
      paymentStatus: 'string',
      productCode: 'string',
      createTime: 'string',
      productType: 'string',
      relatedOrderId: 'string',
      quantity: 'string',
      orderId: 'string',
      pretaxAmount: 'string',
      orderSubType: 'string',
      region: 'string',
      instanceIDs: 'string',
      pretaxAmountLocal: 'string',
      commodityCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderDetailResponseBodyDataOrderList extends $tea.Model {
  order?: GetOrderDetailResponseBodyDataOrderListOrder[];
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: { 'type': 'array', 'itemType': GetOrderDetailResponseBodyDataOrderListOrder },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderDetailResponseBodyData extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  pageNum?: number;
  hostName?: string;
  orderList?: GetOrderDetailResponseBodyDataOrderList;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
      hostName: 'HostName',
      orderList: 'OrderList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      pageNum: 'number',
      hostName: 'string',
      orderList: GetOrderDetailResponseBodyDataOrderList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayAsYouGoPriceRequestModuleList extends $tea.Model {
  moduleCode?: string;
  config?: string;
  priceType?: string;
  static names(): { [key: string]: string } {
    return {
      moduleCode: 'ModuleCode',
      config: 'Config',
      priceType: 'PriceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleCode: 'string',
      config: 'string',
      priceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayAsYouGoPriceResponseBodyDataModuleDetailsModuleDetail extends $tea.Model {
  moduleCode?: string;
  originalCost?: number;
  invoiceDiscount?: number;
  costAfterDiscount?: number;
  unitPrice?: number;
  static names(): { [key: string]: string } {
    return {
      moduleCode: 'ModuleCode',
      originalCost: 'OriginalCost',
      invoiceDiscount: 'InvoiceDiscount',
      costAfterDiscount: 'CostAfterDiscount',
      unitPrice: 'UnitPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleCode: 'string',
      originalCost: 'number',
      invoiceDiscount: 'number',
      costAfterDiscount: 'number',
      unitPrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayAsYouGoPriceResponseBodyDataModuleDetails extends $tea.Model {
  moduleDetail?: GetPayAsYouGoPriceResponseBodyDataModuleDetailsModuleDetail[];
  static names(): { [key: string]: string } {
    return {
      moduleDetail: 'ModuleDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleDetail: { 'type': 'array', 'itemType': GetPayAsYouGoPriceResponseBodyDataModuleDetailsModuleDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayAsYouGoPriceResponseBodyDataPromotionDetailsPromotionDetail extends $tea.Model {
  promotionName?: string;
  promotionDesc?: string;
  promotionId?: number;
  static names(): { [key: string]: string } {
    return {
      promotionName: 'PromotionName',
      promotionDesc: 'PromotionDesc',
      promotionId: 'PromotionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionName: 'string',
      promotionDesc: 'string',
      promotionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayAsYouGoPriceResponseBodyDataPromotionDetails extends $tea.Model {
  promotionDetail?: GetPayAsYouGoPriceResponseBodyDataPromotionDetailsPromotionDetail[];
  static names(): { [key: string]: string } {
    return {
      promotionDetail: 'PromotionDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionDetail: { 'type': 'array', 'itemType': GetPayAsYouGoPriceResponseBodyDataPromotionDetailsPromotionDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayAsYouGoPriceResponseBodyData extends $tea.Model {
  currency?: string;
  moduleDetails?: GetPayAsYouGoPriceResponseBodyDataModuleDetails;
  promotionDetails?: GetPayAsYouGoPriceResponseBodyDataPromotionDetails;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      moduleDetails: 'ModuleDetails',
      promotionDetails: 'PromotionDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      moduleDetails: GetPayAsYouGoPriceResponseBodyDataModuleDetails,
      promotionDetails: GetPayAsYouGoPriceResponseBodyDataPromotionDetails,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePackagePriceResponseBodyDataPromotionsPromotion extends $tea.Model {
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePackagePriceResponseBodyDataPromotions extends $tea.Model {
  promotion?: GetResourcePackagePriceResponseBodyDataPromotionsPromotion[];
  static names(): { [key: string]: string } {
    return {
      promotion: 'Promotion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotion: { 'type': 'array', 'itemType': GetResourcePackagePriceResponseBodyDataPromotionsPromotion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePackagePriceResponseBodyData extends $tea.Model {
  currency?: string;
  originalPrice?: number;
  tradePrice?: number;
  discountPrice?: number;
  promotions?: GetResourcePackagePriceResponseBodyDataPromotions;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      originalPrice: 'OriginalPrice',
      tradePrice: 'TradePrice',
      discountPrice: 'DiscountPrice',
      promotions: 'Promotions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      originalPrice: 'number',
      tradePrice: 'number',
      discountPrice: 'number',
      promotions: GetResourcePackagePriceResponseBodyDataPromotions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionPriceRequestModuleList extends $tea.Model {
  moduleCode?: string;
  config?: string;
  moduleStatus?: number;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      moduleCode: 'ModuleCode',
      config: 'Config',
      moduleStatus: 'ModuleStatus',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleCode: 'string',
      config: 'string',
      moduleStatus: 'number',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionPriceResponseBodyDataModuleDetailsModuleDetail extends $tea.Model {
  moduleCode?: string;
  originalCost?: number;
  invoiceDiscount?: number;
  costAfterDiscount?: number;
  unitPrice?: number;
  static names(): { [key: string]: string } {
    return {
      moduleCode: 'ModuleCode',
      originalCost: 'OriginalCost',
      invoiceDiscount: 'InvoiceDiscount',
      costAfterDiscount: 'CostAfterDiscount',
      unitPrice: 'UnitPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleCode: 'string',
      originalCost: 'number',
      invoiceDiscount: 'number',
      costAfterDiscount: 'number',
      unitPrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionPriceResponseBodyDataModuleDetails extends $tea.Model {
  moduleDetail?: GetSubscriptionPriceResponseBodyDataModuleDetailsModuleDetail[];
  static names(): { [key: string]: string } {
    return {
      moduleDetail: 'ModuleDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleDetail: { 'type': 'array', 'itemType': GetSubscriptionPriceResponseBodyDataModuleDetailsModuleDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionPriceResponseBodyDataPromotionDetailsPromotionDetail extends $tea.Model {
  promotionName?: string;
  promotionDesc?: string;
  promotionId?: number;
  static names(): { [key: string]: string } {
    return {
      promotionName: 'PromotionName',
      promotionDesc: 'PromotionDesc',
      promotionId: 'PromotionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionName: 'string',
      promotionDesc: 'string',
      promotionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionPriceResponseBodyDataPromotionDetails extends $tea.Model {
  promotionDetail?: GetSubscriptionPriceResponseBodyDataPromotionDetailsPromotionDetail[];
  static names(): { [key: string]: string } {
    return {
      promotionDetail: 'PromotionDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionDetail: { 'type': 'array', 'itemType': GetSubscriptionPriceResponseBodyDataPromotionDetailsPromotionDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionPriceResponseBodyData extends $tea.Model {
  originalPrice?: number;
  discountPrice?: number;
  tradePrice?: number;
  currency?: string;
  quantity?: number;
  moduleDetails?: GetSubscriptionPriceResponseBodyDataModuleDetails;
  promotionDetails?: GetSubscriptionPriceResponseBodyDataPromotionDetails;
  static names(): { [key: string]: string } {
    return {
      originalPrice: 'OriginalPrice',
      discountPrice: 'DiscountPrice',
      tradePrice: 'TradePrice',
      currency: 'Currency',
      quantity: 'Quantity',
      moduleDetails: 'ModuleDetails',
      promotionDetails: 'PromotionDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalPrice: 'number',
      discountPrice: 'number',
      tradePrice: 'number',
      currency: 'string',
      quantity: 'number',
      moduleDetails: GetSubscriptionPriceResponseBodyDataModuleDetails,
      promotionDetails: GetSubscriptionPriceResponseBodyDataPromotionDetails,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCostUnitRequestUnitEntityList extends $tea.Model {
  newUnitName?: string;
  ownerUid?: number;
  unitId?: number;
  static names(): { [key: string]: string } {
    return {
      newUnitName: 'NewUnitName',
      ownerUid: 'OwnerUid',
      unitId: 'UnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newUnitName: 'string',
      ownerUid: 'number',
      unitId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCostUnitResponseBodyData extends $tea.Model {
  isSuccess?: boolean;
  unitId?: number;
  ownerUid?: number;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      unitId: 'UnitId',
      ownerUid: 'OwnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      unitId: 'number',
      ownerUid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceRequestParameter extends $tea.Model {
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

export class ModifyInstanceResponseBodyData extends $tea.Model {
  hostId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountBalanceResponseBodyData extends $tea.Model {
  availableAmount?: string;
  availableCashAmount?: string;
  creditAmount?: string;
  mybankCreditAmount?: string;
  currency?: string;
  static names(): { [key: string]: string } {
    return {
      availableAmount: 'AvailableAmount',
      availableCashAmount: 'AvailableCashAmount',
      creditAmount: 'CreditAmount',
      mybankCreditAmount: 'MybankCreditAmount',
      currency: 'Currency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAmount: 'string',
      availableCashAmount: 'string',
      creditAmount: 'string',
      mybankCreditAmount: 'string',
      currency: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountBillResponseBodyDataItemsItem extends $tea.Model {
  costUnit?: string;
  ownerID?: string;
  pretaxGrossAmount?: number;
  invoiceDiscount?: number;
  deductedByCoupons?: number;
  pretaxAmount?: number;
  deductedByCashCoupons?: number;
  deductedByPrepaidCard?: number;
  paymentAmount?: number;
  outstandingAmount?: number;
  currency?: string;
  ownerName?: string;
  productCode?: string;
  productName?: string;
  subscriptionType?: string;
  pipCode?: string;
  billingDate?: string;
  static names(): { [key: string]: string } {
    return {
      costUnit: 'CostUnit',
      ownerID: 'OwnerID',
      pretaxGrossAmount: 'PretaxGrossAmount',
      invoiceDiscount: 'InvoiceDiscount',
      deductedByCoupons: 'DeductedByCoupons',
      pretaxAmount: 'PretaxAmount',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      paymentAmount: 'PaymentAmount',
      outstandingAmount: 'OutstandingAmount',
      currency: 'Currency',
      ownerName: 'OwnerName',
      productCode: 'ProductCode',
      productName: 'ProductName',
      subscriptionType: 'SubscriptionType',
      pipCode: 'PipCode',
      billingDate: 'BillingDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costUnit: 'string',
      ownerID: 'string',
      pretaxGrossAmount: 'number',
      invoiceDiscount: 'number',
      deductedByCoupons: 'number',
      pretaxAmount: 'number',
      deductedByCashCoupons: 'number',
      deductedByPrepaidCard: 'number',
      paymentAmount: 'number',
      outstandingAmount: 'number',
      currency: 'string',
      ownerName: 'string',
      productCode: 'string',
      productName: 'string',
      subscriptionType: 'string',
      pipCode: 'string',
      billingDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountBillResponseBodyDataItems extends $tea.Model {
  item?: QueryAccountBillResponseBodyDataItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': QueryAccountBillResponseBodyDataItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountBillResponseBodyData extends $tea.Model {
  billingCycle?: string;
  accountID?: string;
  accountName?: string;
  totalCount?: number;
  pageNum?: number;
  pageSize?: number;
  items?: QueryAccountBillResponseBodyDataItems;
  static names(): { [key: string]: string } {
    return {
      billingCycle: 'BillingCycle',
      accountID: 'AccountID',
      accountName: 'AccountName',
      totalCount: 'TotalCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingCycle: 'string',
      accountID: 'string',
      accountName: 'string',
      totalCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      items: QueryAccountBillResponseBodyDataItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTransactionDetailsResponseBodyDataAccountTransactionsListAccountTransactionsList extends $tea.Model {
  transactionNumber?: string;
  transactionTime?: string;
  transactionFlow?: string;
  transactionType?: string;
  transactionChannel?: string;
  transactionChannelSN?: string;
  fundType?: string;
  recordID?: string;
  remarks?: string;
  billingCycle?: string;
  amount?: string;
  balance?: string;
  transactionAccount?: string;
  static names(): { [key: string]: string } {
    return {
      transactionNumber: 'TransactionNumber',
      transactionTime: 'TransactionTime',
      transactionFlow: 'TransactionFlow',
      transactionType: 'TransactionType',
      transactionChannel: 'TransactionChannel',
      transactionChannelSN: 'TransactionChannelSN',
      fundType: 'FundType',
      recordID: 'RecordID',
      remarks: 'Remarks',
      billingCycle: 'BillingCycle',
      amount: 'Amount',
      balance: 'Balance',
      transactionAccount: 'TransactionAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transactionNumber: 'string',
      transactionTime: 'string',
      transactionFlow: 'string',
      transactionType: 'string',
      transactionChannel: 'string',
      transactionChannelSN: 'string',
      fundType: 'string',
      recordID: 'string',
      remarks: 'string',
      billingCycle: 'string',
      amount: 'string',
      balance: 'string',
      transactionAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTransactionDetailsResponseBodyDataAccountTransactionsList extends $tea.Model {
  accountTransactionsList?: QueryAccountTransactionDetailsResponseBodyDataAccountTransactionsListAccountTransactionsList[];
  static names(): { [key: string]: string } {
    return {
      accountTransactionsList: 'AccountTransactionsList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountTransactionsList: { 'type': 'array', 'itemType': QueryAccountTransactionDetailsResponseBodyDataAccountTransactionsListAccountTransactionsList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTransactionDetailsResponseBodyData extends $tea.Model {
  accountName?: string;
  totalCount?: number;
  nextToken?: string;
  maxResults?: number;
  accountTransactionsList?: QueryAccountTransactionDetailsResponseBodyDataAccountTransactionsList;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      totalCount: 'TotalCount',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      accountTransactionsList: 'AccountTransactionsList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      totalCount: 'number',
      nextToken: 'string',
      maxResults: 'number',
      accountTransactionsList: QueryAccountTransactionDetailsResponseBodyDataAccountTransactionsList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTransactionsResponseBodyDataAccountTransactionsListAccountTransactionsList extends $tea.Model {
  transactionNumber?: string;
  transactionTime?: string;
  transactionFlow?: string;
  transactionType?: string;
  transactionChannel?: string;
  transactionChannelSN?: string;
  fundType?: string;
  recordID?: string;
  remarks?: string;
  billingCycle?: string;
  amount?: string;
  balance?: string;
  transactionAccount?: string;
  static names(): { [key: string]: string } {
    return {
      transactionNumber: 'TransactionNumber',
      transactionTime: 'TransactionTime',
      transactionFlow: 'TransactionFlow',
      transactionType: 'TransactionType',
      transactionChannel: 'TransactionChannel',
      transactionChannelSN: 'TransactionChannelSN',
      fundType: 'FundType',
      recordID: 'RecordID',
      remarks: 'Remarks',
      billingCycle: 'BillingCycle',
      amount: 'Amount',
      balance: 'Balance',
      transactionAccount: 'TransactionAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transactionNumber: 'string',
      transactionTime: 'string',
      transactionFlow: 'string',
      transactionType: 'string',
      transactionChannel: 'string',
      transactionChannelSN: 'string',
      fundType: 'string',
      recordID: 'string',
      remarks: 'string',
      billingCycle: 'string',
      amount: 'string',
      balance: 'string',
      transactionAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTransactionsResponseBodyDataAccountTransactionsList extends $tea.Model {
  accountTransactionsList?: QueryAccountTransactionsResponseBodyDataAccountTransactionsListAccountTransactionsList[];
  static names(): { [key: string]: string } {
    return {
      accountTransactionsList: 'AccountTransactionsList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountTransactionsList: { 'type': 'array', 'itemType': QueryAccountTransactionsResponseBodyDataAccountTransactionsListAccountTransactionsList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTransactionsResponseBodyData extends $tea.Model {
  accountName?: string;
  totalCount?: number;
  pageNum?: number;
  pageSize?: number;
  accountTransactionsList?: QueryAccountTransactionsResponseBodyDataAccountTransactionsList;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      totalCount: 'TotalCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      accountTransactionsList: 'AccountTransactionsList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      totalCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      accountTransactionsList: QueryAccountTransactionsResponseBodyDataAccountTransactionsList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvailableInstancesResponseBodyDataInstanceList extends $tea.Model {
  ownerId?: number;
  sellerId?: number;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  instanceID?: string;
  region?: string;
  createTime?: string;
  endTime?: string;
  stopTime?: string;
  releaseTime?: string;
  expectedReleaseTime?: string;
  status?: string;
  subStatus?: string;
  renewStatus?: string;
  renewalDuration?: number;
  renewalDurationUnit?: string;
  seller?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      sellerId: 'SellerId',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
      instanceID: 'InstanceID',
      region: 'Region',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      stopTime: 'StopTime',
      releaseTime: 'ReleaseTime',
      expectedReleaseTime: 'ExpectedReleaseTime',
      status: 'Status',
      subStatus: 'SubStatus',
      renewStatus: 'RenewStatus',
      renewalDuration: 'RenewalDuration',
      renewalDurationUnit: 'RenewalDurationUnit',
      seller: 'Seller',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      sellerId: 'number',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
      instanceID: 'string',
      region: 'string',
      createTime: 'string',
      endTime: 'string',
      stopTime: 'string',
      releaseTime: 'string',
      expectedReleaseTime: 'string',
      status: 'string',
      subStatus: 'string',
      renewStatus: 'string',
      renewalDuration: 'number',
      renewalDurationUnit: 'string',
      seller: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvailableInstancesResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  instanceList?: QueryAvailableInstancesResponseBodyDataInstanceList[];
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      instanceList: 'InstanceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
      instanceList: { 'type': 'array', 'itemType': QueryAvailableInstancesResponseBodyDataInstanceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillResponseBodyDataItemsItem extends $tea.Model {
  recordID?: string;
  item?: string;
  ownerID?: string;
  usageStartTime?: string;
  usageEndTime?: string;
  paymentTime?: string;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  productName?: string;
  productDetail?: string;
  pretaxGrossAmount?: number;
  deductedByCoupons?: number;
  invoiceDiscount?: number;
  pretaxAmount?: number;
  currency?: string;
  pretaxAmountLocal?: number;
  tax?: number;
  paymentAmount?: number;
  deductedByCashCoupons?: number;
  deductedByPrepaidCard?: number;
  outstandingAmount?: number;
  afterTaxAmount?: number;
  status?: string;
  paymentCurrency?: string;
  paymentTransactionID?: string;
  roundDownDiscount?: string;
  subOrderId?: string;
  pipCode?: string;
  commodityCode?: string;
  static names(): { [key: string]: string } {
    return {
      recordID: 'RecordID',
      item: 'Item',
      ownerID: 'OwnerID',
      usageStartTime: 'UsageStartTime',
      usageEndTime: 'UsageEndTime',
      paymentTime: 'PaymentTime',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
      productName: 'ProductName',
      productDetail: 'ProductDetail',
      pretaxGrossAmount: 'PretaxGrossAmount',
      deductedByCoupons: 'DeductedByCoupons',
      invoiceDiscount: 'InvoiceDiscount',
      pretaxAmount: 'PretaxAmount',
      currency: 'Currency',
      pretaxAmountLocal: 'PretaxAmountLocal',
      tax: 'Tax',
      paymentAmount: 'PaymentAmount',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      outstandingAmount: 'OutstandingAmount',
      afterTaxAmount: 'AfterTaxAmount',
      status: 'Status',
      paymentCurrency: 'PaymentCurrency',
      paymentTransactionID: 'PaymentTransactionID',
      roundDownDiscount: 'RoundDownDiscount',
      subOrderId: 'SubOrderId',
      pipCode: 'PipCode',
      commodityCode: 'CommodityCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordID: 'string',
      item: 'string',
      ownerID: 'string',
      usageStartTime: 'string',
      usageEndTime: 'string',
      paymentTime: 'string',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
      productName: 'string',
      productDetail: 'string',
      pretaxGrossAmount: 'number',
      deductedByCoupons: 'number',
      invoiceDiscount: 'number',
      pretaxAmount: 'number',
      currency: 'string',
      pretaxAmountLocal: 'number',
      tax: 'number',
      paymentAmount: 'number',
      deductedByCashCoupons: 'number',
      deductedByPrepaidCard: 'number',
      outstandingAmount: 'number',
      afterTaxAmount: 'number',
      status: 'string',
      paymentCurrency: 'string',
      paymentTransactionID: 'string',
      roundDownDiscount: 'string',
      subOrderId: 'string',
      pipCode: 'string',
      commodityCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillResponseBodyDataItems extends $tea.Model {
  item?: QueryBillResponseBodyDataItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': QueryBillResponseBodyDataItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillResponseBodyData extends $tea.Model {
  billingCycle?: string;
  accountID?: string;
  accountName?: string;
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  items?: QueryBillResponseBodyDataItems;
  static names(): { [key: string]: string } {
    return {
      billingCycle: 'BillingCycle',
      accountID: 'AccountID',
      accountName: 'AccountName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingCycle: 'string',
      accountID: 'string',
      accountName: 'string',
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
      items: QueryBillResponseBodyDataItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillOverviewResponseBodyDataItemsItem extends $tea.Model {
  item?: string;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  productName?: string;
  productDetail?: string;
  pretaxGrossAmount?: number;
  invoiceDiscount?: number;
  deductedByCoupons?: number;
  pretaxAmount?: number;
  currency?: string;
  paymentAmount?: number;
  outstandingAmount?: number;
  deductedByCashCoupons?: number;
  deductedByPrepaidCard?: number;
  pretaxAmountLocal?: number;
  tax?: number;
  afterTaxAmount?: number;
  paymentCurrency?: string;
  roundDownDiscount?: string;
  pipCode?: string;
  commodityCode?: string;
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
      productName: 'ProductName',
      productDetail: 'ProductDetail',
      pretaxGrossAmount: 'PretaxGrossAmount',
      invoiceDiscount: 'InvoiceDiscount',
      deductedByCoupons: 'DeductedByCoupons',
      pretaxAmount: 'PretaxAmount',
      currency: 'Currency',
      paymentAmount: 'PaymentAmount',
      outstandingAmount: 'OutstandingAmount',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      pretaxAmountLocal: 'PretaxAmountLocal',
      tax: 'Tax',
      afterTaxAmount: 'AfterTaxAmount',
      paymentCurrency: 'PaymentCurrency',
      roundDownDiscount: 'RoundDownDiscount',
      pipCode: 'PipCode',
      commodityCode: 'CommodityCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: 'string',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
      productName: 'string',
      productDetail: 'string',
      pretaxGrossAmount: 'number',
      invoiceDiscount: 'number',
      deductedByCoupons: 'number',
      pretaxAmount: 'number',
      currency: 'string',
      paymentAmount: 'number',
      outstandingAmount: 'number',
      deductedByCashCoupons: 'number',
      deductedByPrepaidCard: 'number',
      pretaxAmountLocal: 'number',
      tax: 'number',
      afterTaxAmount: 'number',
      paymentCurrency: 'string',
      roundDownDiscount: 'string',
      pipCode: 'string',
      commodityCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillOverviewResponseBodyDataItems extends $tea.Model {
  item?: QueryBillOverviewResponseBodyDataItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': QueryBillOverviewResponseBodyDataItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillOverviewResponseBodyData extends $tea.Model {
  billingCycle?: string;
  accountID?: string;
  accountName?: string;
  items?: QueryBillOverviewResponseBodyDataItems;
  static names(): { [key: string]: string } {
    return {
      billingCycle: 'BillingCycle',
      accountID: 'AccountID',
      accountName: 'AccountName',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingCycle: 'string',
      accountID: 'string',
      accountName: 'string',
      items: QueryBillOverviewResponseBodyDataItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillToOSSSubscriptionResponseBodyDataItemsItem extends $tea.Model {
  subscribeType?: string;
  subscribeBucket?: string;
  bucketOwnerId?: number;
  subscribeTime?: string;
  subscribeLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      subscribeType: 'SubscribeType',
      subscribeBucket: 'SubscribeBucket',
      bucketOwnerId: 'BucketOwnerId',
      subscribeTime: 'SubscribeTime',
      subscribeLanguage: 'SubscribeLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscribeType: 'string',
      subscribeBucket: 'string',
      bucketOwnerId: 'number',
      subscribeTime: 'string',
      subscribeLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillToOSSSubscriptionResponseBodyDataItems extends $tea.Model {
  item?: QueryBillToOSSSubscriptionResponseBodyDataItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': QueryBillToOSSSubscriptionResponseBodyDataItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillToOSSSubscriptionResponseBodyData extends $tea.Model {
  accountID?: string;
  accountName?: string;
  items?: QueryBillToOSSSubscriptionResponseBodyDataItems;
  static names(): { [key: string]: string } {
    return {
      accountID: 'AccountID',
      accountName: 'AccountName',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountID: 'string',
      accountName: 'string',
      items: QueryBillToOSSSubscriptionResponseBodyDataItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCashCouponsResponseBodyDataCashCoupon extends $tea.Model {
  cashCouponId?: number;
  cashCouponNo?: string;
  grantedTime?: string;
  effectiveTime?: string;
  expiryTime?: string;
  applicableProducts?: string;
  applicableScenarios?: string;
  nominalValue?: string;
  balance?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cashCouponId: 'CashCouponId',
      cashCouponNo: 'CashCouponNo',
      grantedTime: 'GrantedTime',
      effectiveTime: 'EffectiveTime',
      expiryTime: 'ExpiryTime',
      applicableProducts: 'ApplicableProducts',
      applicableScenarios: 'ApplicableScenarios',
      nominalValue: 'NominalValue',
      balance: 'Balance',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cashCouponId: 'number',
      cashCouponNo: 'string',
      grantedTime: 'string',
      effectiveTime: 'string',
      expiryTime: 'string',
      applicableProducts: 'string',
      applicableScenarios: 'string',
      nominalValue: 'string',
      balance: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCashCouponsResponseBodyData extends $tea.Model {
  cashCoupon?: QueryCashCouponsResponseBodyDataCashCoupon[];
  static names(): { [key: string]: string } {
    return {
      cashCoupon: 'CashCoupon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cashCoupon: { 'type': 'array', 'itemType': QueryCashCouponsResponseBodyDataCashCoupon },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResponseBodyDataCostUnitDtoList extends $tea.Model {
  unitId?: number;
  parentUnitId?: number;
  ownerUid?: number;
  unitName?: string;
  static names(): { [key: string]: string } {
    return {
      unitId: 'UnitId',
      parentUnitId: 'ParentUnitId',
      ownerUid: 'OwnerUid',
      unitName: 'UnitName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unitId: 'number',
      parentUnitId: 'number',
      ownerUid: 'number',
      unitName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResponseBodyData extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  pageNum?: number;
  costUnitDtoList?: QueryCostUnitResponseBodyDataCostUnitDtoList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
      costUnitDtoList: 'CostUnitDtoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      pageNum: 'number',
      costUnitDtoList: { 'type': 'array', 'itemType': QueryCostUnitResponseBodyDataCostUnitDtoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResourceResponseBodyDataResourceInstanceDtoList extends $tea.Model {
  resourceUserId?: number;
  resourceTag?: string;
  relatedResources?: string;
  apportionName?: string;
  resourceId?: string;
  commodityCode?: string;
  resourceStatus?: string;
  resourceType?: string;
  resourceUserName?: string;
  resourceNick?: string;
  resourceGroup?: string;
  commodityName?: string;
  apportionCode?: string;
  static names(): { [key: string]: string } {
    return {
      resourceUserId: 'ResourceUserId',
      resourceTag: 'ResourceTag',
      relatedResources: 'RelatedResources',
      apportionName: 'ApportionName',
      resourceId: 'ResourceId',
      commodityCode: 'CommodityCode',
      resourceStatus: 'ResourceStatus',
      resourceType: 'ResourceType',
      resourceUserName: 'ResourceUserName',
      resourceNick: 'ResourceNick',
      resourceGroup: 'ResourceGroup',
      commodityName: 'CommodityName',
      apportionCode: 'ApportionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceUserId: 'number',
      resourceTag: 'string',
      relatedResources: 'string',
      apportionName: 'string',
      resourceId: 'string',
      commodityCode: 'string',
      resourceStatus: 'string',
      resourceType: 'string',
      resourceUserName: 'string',
      resourceNick: 'string',
      resourceGroup: 'string',
      commodityName: 'string',
      apportionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResourceResponseBodyDataCostUnit extends $tea.Model {
  unitId?: number;
  parentUnitId?: number;
  ownerUid?: number;
  unitName?: string;
  static names(): { [key: string]: string } {
    return {
      unitId: 'UnitId',
      parentUnitId: 'ParentUnitId',
      ownerUid: 'OwnerUid',
      unitName: 'UnitName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unitId: 'number',
      parentUnitId: 'number',
      ownerUid: 'number',
      unitName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResourceResponseBodyDataCostUnitStatisInfo extends $tea.Model {
  subUnitCount?: number;
  totalResourceGroupCount?: number;
  totalResourceCount?: number;
  userCount?: number;
  resourceCount?: number;
  totalUserCount?: number;
  resourceGroupCount?: number;
  static names(): { [key: string]: string } {
    return {
      subUnitCount: 'SubUnitCount',
      totalResourceGroupCount: 'TotalResourceGroupCount',
      totalResourceCount: 'TotalResourceCount',
      userCount: 'UserCount',
      resourceCount: 'ResourceCount',
      totalUserCount: 'TotalUserCount',
      resourceGroupCount: 'ResourceGroupCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subUnitCount: 'number',
      totalResourceGroupCount: 'number',
      totalResourceCount: 'number',
      userCount: 'number',
      resourceCount: 'number',
      totalUserCount: 'number',
      resourceGroupCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResourceResponseBodyData extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  pageNum?: number;
  resourceInstanceDtoList?: QueryCostUnitResourceResponseBodyDataResourceInstanceDtoList[];
  costUnit?: QueryCostUnitResourceResponseBodyDataCostUnit;
  costUnitStatisInfo?: QueryCostUnitResourceResponseBodyDataCostUnitStatisInfo;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
      resourceInstanceDtoList: 'ResourceInstanceDtoList',
      costUnit: 'CostUnit',
      costUnitStatisInfo: 'CostUnitStatisInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      pageNum: 'number',
      resourceInstanceDtoList: { 'type': 'array', 'itemType': QueryCostUnitResourceResponseBodyDataResourceInstanceDtoList },
      costUnit: QueryCostUnitResourceResponseBodyDataCostUnit,
      costUnitStatisInfo: QueryCostUnitResourceResponseBodyDataCostUnitStatisInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomerAddressListResponseBodyDataCustomerInvoiceAddressListCustomerInvoiceAddress extends $tea.Model {
  id?: number;
  userId?: number;
  userNick?: string;
  addressee?: string;
  province?: string;
  city?: string;
  county?: string;
  street?: string;
  postalCode?: string;
  phone?: string;
  bizType?: string;
  deliveryAddress?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      userId: 'UserId',
      userNick: 'UserNick',
      addressee: 'Addressee',
      province: 'Province',
      city: 'City',
      county: 'County',
      street: 'Street',
      postalCode: 'PostalCode',
      phone: 'Phone',
      bizType: 'BizType',
      deliveryAddress: 'DeliveryAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      userId: 'number',
      userNick: 'string',
      addressee: 'string',
      province: 'string',
      city: 'string',
      county: 'string',
      street: 'string',
      postalCode: 'string',
      phone: 'string',
      bizType: 'string',
      deliveryAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomerAddressListResponseBodyDataCustomerInvoiceAddressList extends $tea.Model {
  customerInvoiceAddress?: QueryCustomerAddressListResponseBodyDataCustomerInvoiceAddressListCustomerInvoiceAddress[];
  static names(): { [key: string]: string } {
    return {
      customerInvoiceAddress: 'CustomerInvoiceAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerInvoiceAddress: { 'type': 'array', 'itemType': QueryCustomerAddressListResponseBodyDataCustomerInvoiceAddressListCustomerInvoiceAddress },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomerAddressListResponseBodyData extends $tea.Model {
  customerInvoiceAddressList?: QueryCustomerAddressListResponseBodyDataCustomerInvoiceAddressList;
  static names(): { [key: string]: string } {
    return {
      customerInvoiceAddressList: 'CustomerInvoiceAddressList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerInvoiceAddressList: QueryCustomerAddressListResponseBodyDataCustomerInvoiceAddressList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEvaluateListResponseBodyDataEvaluateListEvaluate extends $tea.Model {
  id?: number;
  gmtCreate?: string;
  gmtModified?: string;
  userId?: number;
  userNick?: string;
  outBizId?: string;
  billId?: number;
  itemId?: number;
  billCycle?: string;
  bizType?: string;
  originalAmount?: number;
  presentAmount?: number;
  canInvoiceAmount?: number;
  invoicedAmount?: number;
  offsetCostAmount?: number;
  offsetAcceptAmount?: number;
  status?: number;
  opId?: string;
  name?: string;
  bizTime?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      userId: 'UserId',
      userNick: 'UserNick',
      outBizId: 'OutBizId',
      billId: 'BillId',
      itemId: 'ItemId',
      billCycle: 'BillCycle',
      bizType: 'BizType',
      originalAmount: 'OriginalAmount',
      presentAmount: 'PresentAmount',
      canInvoiceAmount: 'CanInvoiceAmount',
      invoicedAmount: 'InvoicedAmount',
      offsetCostAmount: 'OffsetCostAmount',
      offsetAcceptAmount: 'OffsetAcceptAmount',
      status: 'Status',
      opId: 'OpId',
      name: 'Name',
      bizTime: 'BizTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      userId: 'number',
      userNick: 'string',
      outBizId: 'string',
      billId: 'number',
      itemId: 'number',
      billCycle: 'string',
      bizType: 'string',
      originalAmount: 'number',
      presentAmount: 'number',
      canInvoiceAmount: 'number',
      invoicedAmount: 'number',
      offsetCostAmount: 'number',
      offsetAcceptAmount: 'number',
      status: 'number',
      opId: 'string',
      name: 'string',
      bizTime: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEvaluateListResponseBodyDataEvaluateList extends $tea.Model {
  evaluate?: QueryEvaluateListResponseBodyDataEvaluateListEvaluate[];
  static names(): { [key: string]: string } {
    return {
      evaluate: 'Evaluate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluate: { 'type': 'array', 'itemType': QueryEvaluateListResponseBodyDataEvaluateListEvaluate },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEvaluateListResponseBodyData extends $tea.Model {
  hostId?: string;
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  totalInvoiceAmount?: number;
  totalUnAppliedInvoiceAmount?: number;
  evaluateList?: QueryEvaluateListResponseBodyDataEvaluateList;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalInvoiceAmount: 'TotalInvoiceAmount',
      totalUnAppliedInvoiceAmount: 'TotalUnAppliedInvoiceAmount',
      evaluateList: 'EvaluateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalInvoiceAmount: 'number',
      totalUnAppliedInvoiceAmount: 'number',
      evaluateList: QueryEvaluateListResponseBodyDataEvaluateList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFinancialAccountInfoResponseBodyData extends $tea.Model {
  userName?: string;
  isFinancialAccount?: boolean;
  accountType?: string;
  memberNickName?: string;
  memberGroupId?: number;
  memberGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
      isFinancialAccount: 'IsFinancialAccount',
      accountType: 'AccountType',
      memberNickName: 'MemberNickName',
      memberGroupId: 'MemberGroupId',
      memberGroupName: 'MemberGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
      isFinancialAccount: 'boolean',
      accountType: 'string',
      memberNickName: 'string',
      memberGroupId: 'number',
      memberGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceBillResponseBodyDataItemsItem extends $tea.Model {
  instanceID?: string;
  billingType?: string;
  costUnit?: string;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  productName?: string;
  productDetail?: string;
  ownerID?: string;
  billingItem?: string;
  listPrice?: string;
  listPriceUnit?: string;
  usage?: string;
  usageUnit?: string;
  deductedByResourcePackage?: string;
  pretaxGrossAmount?: number;
  invoiceDiscount?: number;
  deductedByCoupons?: number;
  pretaxAmount?: number;
  deductedByCashCoupons?: number;
  deductedByPrepaidCard?: number;
  paymentAmount?: number;
  outstandingAmount?: number;
  currency?: string;
  nickName?: string;
  resourceGroup?: string;
  tag?: string;
  instanceConfig?: string;
  instanceSpec?: string;
  internetIP?: string;
  intranetIP?: string;
  region?: string;
  zone?: string;
  item?: string;
  servicePeriod?: string;
  billingDate?: string;
  servicePeriodUnit?: string;
  pipCode?: string;
  commodityCode?: string;
  static names(): { [key: string]: string } {
    return {
      instanceID: 'InstanceID',
      billingType: 'BillingType',
      costUnit: 'CostUnit',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
      productName: 'ProductName',
      productDetail: 'ProductDetail',
      ownerID: 'OwnerID',
      billingItem: 'BillingItem',
      listPrice: 'ListPrice',
      listPriceUnit: 'ListPriceUnit',
      usage: 'Usage',
      usageUnit: 'UsageUnit',
      deductedByResourcePackage: 'DeductedByResourcePackage',
      pretaxGrossAmount: 'PretaxGrossAmount',
      invoiceDiscount: 'InvoiceDiscount',
      deductedByCoupons: 'DeductedByCoupons',
      pretaxAmount: 'PretaxAmount',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      paymentAmount: 'PaymentAmount',
      outstandingAmount: 'OutstandingAmount',
      currency: 'Currency',
      nickName: 'NickName',
      resourceGroup: 'ResourceGroup',
      tag: 'Tag',
      instanceConfig: 'InstanceConfig',
      instanceSpec: 'InstanceSpec',
      internetIP: 'InternetIP',
      intranetIP: 'IntranetIP',
      region: 'Region',
      zone: 'Zone',
      item: 'Item',
      servicePeriod: 'ServicePeriod',
      billingDate: 'BillingDate',
      servicePeriodUnit: 'ServicePeriodUnit',
      pipCode: 'PipCode',
      commodityCode: 'CommodityCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceID: 'string',
      billingType: 'string',
      costUnit: 'string',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
      productName: 'string',
      productDetail: 'string',
      ownerID: 'string',
      billingItem: 'string',
      listPrice: 'string',
      listPriceUnit: 'string',
      usage: 'string',
      usageUnit: 'string',
      deductedByResourcePackage: 'string',
      pretaxGrossAmount: 'number',
      invoiceDiscount: 'number',
      deductedByCoupons: 'number',
      pretaxAmount: 'number',
      deductedByCashCoupons: 'number',
      deductedByPrepaidCard: 'number',
      paymentAmount: 'number',
      outstandingAmount: 'number',
      currency: 'string',
      nickName: 'string',
      resourceGroup: 'string',
      tag: 'string',
      instanceConfig: 'string',
      instanceSpec: 'string',
      internetIP: 'string',
      intranetIP: 'string',
      region: 'string',
      zone: 'string',
      item: 'string',
      servicePeriod: 'string',
      billingDate: 'string',
      servicePeriodUnit: 'string',
      pipCode: 'string',
      commodityCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceBillResponseBodyDataItems extends $tea.Model {
  item?: QueryInstanceBillResponseBodyDataItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': QueryInstanceBillResponseBodyDataItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceBillResponseBodyData extends $tea.Model {
  billingCycle?: string;
  accountID?: string;
  accountName?: string;
  totalCount?: number;
  pageNum?: number;
  pageSize?: number;
  items?: QueryInstanceBillResponseBodyDataItems;
  static names(): { [key: string]: string } {
    return {
      billingCycle: 'BillingCycle',
      accountID: 'AccountID',
      accountName: 'AccountName',
      totalCount: 'TotalCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingCycle: 'string',
      accountID: 'string',
      accountName: 'string',
      totalCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      items: QueryInstanceBillResponseBodyDataItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceByTagRequestTag extends $tea.Model {
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

export class QueryInstanceByTagResponseBodyTagResourceTag extends $tea.Model {
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

export class QueryInstanceByTagResponseBodyTagResource extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  tag?: QueryInstanceByTagResponseBodyTagResourceTag[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': QueryInstanceByTagResponseBodyTagResourceTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceGaapCostResponseBodyDataModulesModule extends $tea.Model {
  billingCycle?: string;
  instanceID?: string;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  tag?: string;
  resourceGroup?: string;
  accountingUnit?: string;
  payerAccount?: string;
  ownerID?: string;
  region?: string;
  currency?: string;
  paymentCurrency?: string;
  orderType?: string;
  payTime?: string;
  pretaxGrossAmount?: string;
  pricingDiscount?: string;
  deductedByCoupons?: string;
  pretaxAmount?: string;
  pretaxAmountLocal?: string;
  deductedByCashCoupons?: string;
  deductedByPrepaidCard?: string;
  paymentAmount?: string;
  gaapPretaxGrossAmount?: string;
  gaapPricingDiscount?: string;
  gaapDeductedByCoupons?: string;
  gaapPretaxAmount?: string;
  gaapPretaxAmountLocal?: string;
  gaapDeductedByCashCoupons?: string;
  gaapDeductedByPrepaidCard?: string;
  gaapPaymentAmount?: string;
  monthGaapPretaxGrossAmount?: string;
  monthGaapPricingDiscount?: string;
  monthGaapDeductedByCoupons?: string;
  monthGaapPretaxAmount?: string;
  monthGaapPretaxAmountLocal?: string;
  monthGaapDeductedByCashCoupons?: string;
  monthGaapDeductedByPrepaidCard?: string;
  monthGaapPaymentAmount?: string;
  unallocatedPaymentAmount?: string;
  usageStartDate?: string;
  usageEndDate?: string;
  billType?: string;
  orderId?: string;
  subOrderId?: string;
  unallocatedPretaxGrossAmount?: string;
  unallocatedPricingDiscount?: string;
  unallocatedDeductedByCoupons?: string;
  unallocatedPretaxAmount?: string;
  unallocatedPretaxAmountLocal?: string;
  unallocatedDeductedByCashCoupons?: string;
  unallocatedDeductedByPrepaidCard?: string;
  static names(): { [key: string]: string } {
    return {
      billingCycle: 'BillingCycle',
      instanceID: 'InstanceID',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
      tag: 'Tag',
      resourceGroup: 'ResourceGroup',
      accountingUnit: 'AccountingUnit',
      payerAccount: 'PayerAccount',
      ownerID: 'OwnerID',
      region: 'Region',
      currency: 'Currency',
      paymentCurrency: 'PaymentCurrency',
      orderType: 'OrderType',
      payTime: 'PayTime',
      pretaxGrossAmount: 'PretaxGrossAmount',
      pricingDiscount: 'PricingDiscount',
      deductedByCoupons: 'DeductedByCoupons',
      pretaxAmount: 'PretaxAmount',
      pretaxAmountLocal: 'PretaxAmountLocal',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      paymentAmount: 'PaymentAmount',
      gaapPretaxGrossAmount: 'GaapPretaxGrossAmount',
      gaapPricingDiscount: 'GaapPricingDiscount',
      gaapDeductedByCoupons: 'GaapDeductedByCoupons',
      gaapPretaxAmount: 'GaapPretaxAmount',
      gaapPretaxAmountLocal: 'GaapPretaxAmountLocal',
      gaapDeductedByCashCoupons: 'GaapDeductedByCashCoupons',
      gaapDeductedByPrepaidCard: 'GaapDeductedByPrepaidCard',
      gaapPaymentAmount: 'GaapPaymentAmount',
      monthGaapPretaxGrossAmount: 'MonthGaapPretaxGrossAmount',
      monthGaapPricingDiscount: 'MonthGaapPricingDiscount',
      monthGaapDeductedByCoupons: 'MonthGaapDeductedByCoupons',
      monthGaapPretaxAmount: 'MonthGaapPretaxAmount',
      monthGaapPretaxAmountLocal: 'MonthGaapPretaxAmountLocal',
      monthGaapDeductedByCashCoupons: 'MonthGaapDeductedByCashCoupons',
      monthGaapDeductedByPrepaidCard: 'MonthGaapDeductedByPrepaidCard',
      monthGaapPaymentAmount: 'MonthGaapPaymentAmount',
      unallocatedPaymentAmount: 'UnallocatedPaymentAmount',
      usageStartDate: 'UsageStartDate',
      usageEndDate: 'UsageEndDate',
      billType: 'BillType',
      orderId: 'OrderId',
      subOrderId: 'SubOrderId',
      unallocatedPretaxGrossAmount: 'UnallocatedPretaxGrossAmount',
      unallocatedPricingDiscount: 'UnallocatedPricingDiscount',
      unallocatedDeductedByCoupons: 'UnallocatedDeductedByCoupons',
      unallocatedPretaxAmount: 'UnallocatedPretaxAmount',
      unallocatedPretaxAmountLocal: 'UnallocatedPretaxAmountLocal',
      unallocatedDeductedByCashCoupons: 'UnallocatedDeductedByCashCoupons',
      unallocatedDeductedByPrepaidCard: 'UnallocatedDeductedByPrepaidCard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingCycle: 'string',
      instanceID: 'string',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
      tag: 'string',
      resourceGroup: 'string',
      accountingUnit: 'string',
      payerAccount: 'string',
      ownerID: 'string',
      region: 'string',
      currency: 'string',
      paymentCurrency: 'string',
      orderType: 'string',
      payTime: 'string',
      pretaxGrossAmount: 'string',
      pricingDiscount: 'string',
      deductedByCoupons: 'string',
      pretaxAmount: 'string',
      pretaxAmountLocal: 'string',
      deductedByCashCoupons: 'string',
      deductedByPrepaidCard: 'string',
      paymentAmount: 'string',
      gaapPretaxGrossAmount: 'string',
      gaapPricingDiscount: 'string',
      gaapDeductedByCoupons: 'string',
      gaapPretaxAmount: 'string',
      gaapPretaxAmountLocal: 'string',
      gaapDeductedByCashCoupons: 'string',
      gaapDeductedByPrepaidCard: 'string',
      gaapPaymentAmount: 'string',
      monthGaapPretaxGrossAmount: 'string',
      monthGaapPricingDiscount: 'string',
      monthGaapDeductedByCoupons: 'string',
      monthGaapPretaxAmount: 'string',
      monthGaapPretaxAmountLocal: 'string',
      monthGaapDeductedByCashCoupons: 'string',
      monthGaapDeductedByPrepaidCard: 'string',
      monthGaapPaymentAmount: 'string',
      unallocatedPaymentAmount: 'string',
      usageStartDate: 'string',
      usageEndDate: 'string',
      billType: 'string',
      orderId: 'string',
      subOrderId: 'string',
      unallocatedPretaxGrossAmount: 'string',
      unallocatedPricingDiscount: 'string',
      unallocatedDeductedByCoupons: 'string',
      unallocatedPretaxAmount: 'string',
      unallocatedPretaxAmountLocal: 'string',
      unallocatedDeductedByCashCoupons: 'string',
      unallocatedDeductedByPrepaidCard: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceGaapCostResponseBodyDataModules extends $tea.Model {
  module?: QueryInstanceGaapCostResponseBodyDataModulesModule[];
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: { 'type': 'array', 'itemType': QueryInstanceGaapCostResponseBodyDataModulesModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceGaapCostResponseBodyData extends $tea.Model {
  hostId?: string;
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  modules?: QueryInstanceGaapCostResponseBodyDataModules;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      modules: 'Modules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
      modules: QueryInstanceGaapCostResponseBodyDataModules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvoicingCustomerListResponseBodyDataCustomerInvoiceListCustomerInvoice extends $tea.Model {
  id?: number;
  userId?: number;
  userNick?: string;
  invoiceTitle?: string;
  customerType?: number;
  taxpayerType?: number;
  bank?: string;
  bankNo?: string;
  operatingLicenseAddress?: string;
  operatingLicensePhone?: string;
  registerNo?: string;
  startCycle?: number;
  status?: number;
  gmtCreate?: string;
  taxationLicense?: string;
  adjustType?: number;
  endCycle?: number;
  titleChangeInstructions?: string;
  issueType?: number;
  type?: number;
  defaultRemark?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      userId: 'UserId',
      userNick: 'UserNick',
      invoiceTitle: 'InvoiceTitle',
      customerType: 'CustomerType',
      taxpayerType: 'TaxpayerType',
      bank: 'Bank',
      bankNo: 'BankNo',
      operatingLicenseAddress: 'OperatingLicenseAddress',
      operatingLicensePhone: 'OperatingLicensePhone',
      registerNo: 'RegisterNo',
      startCycle: 'StartCycle',
      status: 'Status',
      gmtCreate: 'GmtCreate',
      taxationLicense: 'TaxationLicense',
      adjustType: 'AdjustType',
      endCycle: 'EndCycle',
      titleChangeInstructions: 'TitleChangeInstructions',
      issueType: 'IssueType',
      type: 'Type',
      defaultRemark: 'DefaultRemark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      userId: 'number',
      userNick: 'string',
      invoiceTitle: 'string',
      customerType: 'number',
      taxpayerType: 'number',
      bank: 'string',
      bankNo: 'string',
      operatingLicenseAddress: 'string',
      operatingLicensePhone: 'string',
      registerNo: 'string',
      startCycle: 'number',
      status: 'number',
      gmtCreate: 'string',
      taxationLicense: 'string',
      adjustType: 'number',
      endCycle: 'number',
      titleChangeInstructions: 'string',
      issueType: 'number',
      type: 'number',
      defaultRemark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvoicingCustomerListResponseBodyDataCustomerInvoiceList extends $tea.Model {
  customerInvoice?: QueryInvoicingCustomerListResponseBodyDataCustomerInvoiceListCustomerInvoice[];
  static names(): { [key: string]: string } {
    return {
      customerInvoice: 'CustomerInvoice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerInvoice: { 'type': 'array', 'itemType': QueryInvoicingCustomerListResponseBodyDataCustomerInvoiceListCustomerInvoice },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvoicingCustomerListResponseBodyData extends $tea.Model {
  customerInvoiceList?: QueryInvoicingCustomerListResponseBodyDataCustomerInvoiceList;
  static names(): { [key: string]: string } {
    return {
      customerInvoiceList: 'CustomerInvoiceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerInvoiceList: QueryInvoicingCustomerListResponseBodyDataCustomerInvoiceList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonthlyBillResponseBodyDataItemsItem extends $tea.Model {
  item?: string;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  solutionCode?: string;
  solutionName?: string;
  pretaxGrossAmount?: number;
  invoiceDiscount?: number;
  deductedByCoupons?: number;
  pretaxAmount?: number;
  currency?: string;
  pretaxAmountLocal?: number;
  tax?: number;
  afterTaxAmount?: number;
  outstandingAmount?: number;
  deductedByCashCoupons?: number;
  deductedByPrepaidCard?: number;
  paymentAmount?: number;
  paymentCurrency?: string;
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
      solutionCode: 'SolutionCode',
      solutionName: 'SolutionName',
      pretaxGrossAmount: 'PretaxGrossAmount',
      invoiceDiscount: 'InvoiceDiscount',
      deductedByCoupons: 'DeductedByCoupons',
      pretaxAmount: 'PretaxAmount',
      currency: 'Currency',
      pretaxAmountLocal: 'PretaxAmountLocal',
      tax: 'Tax',
      afterTaxAmount: 'AfterTaxAmount',
      outstandingAmount: 'OutstandingAmount',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      paymentAmount: 'PaymentAmount',
      paymentCurrency: 'PaymentCurrency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: 'string',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
      solutionCode: 'string',
      solutionName: 'string',
      pretaxGrossAmount: 'number',
      invoiceDiscount: 'number',
      deductedByCoupons: 'number',
      pretaxAmount: 'number',
      currency: 'string',
      pretaxAmountLocal: 'number',
      tax: 'number',
      afterTaxAmount: 'number',
      outstandingAmount: 'number',
      deductedByCashCoupons: 'number',
      deductedByPrepaidCard: 'number',
      paymentAmount: 'number',
      paymentCurrency: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonthlyBillResponseBodyDataItems extends $tea.Model {
  item?: QueryMonthlyBillResponseBodyDataItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': QueryMonthlyBillResponseBodyDataItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonthlyBillResponseBodyData extends $tea.Model {
  outstandingAmount?: number;
  totalOutstandingAmount?: number;
  newInvoiceAmount?: number;
  billingCycle?: string;
  items?: QueryMonthlyBillResponseBodyDataItems;
  static names(): { [key: string]: string } {
    return {
      outstandingAmount: 'OutstandingAmount',
      totalOutstandingAmount: 'TotalOutstandingAmount',
      newInvoiceAmount: 'NewInvoiceAmount',
      billingCycle: 'BillingCycle',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outstandingAmount: 'number',
      totalOutstandingAmount: 'number',
      newInvoiceAmount: 'number',
      billingCycle: 'string',
      items: QueryMonthlyBillResponseBodyDataItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonthlyInstanceConsumptionResponseBodyDataItemsItem extends $tea.Model {
  instanceID?: string;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  tag?: string;
  resourceGroup?: string;
  payerAccount?: string;
  ownerID?: string;
  region?: string;
  pretaxGrossAmount?: number;
  discountAmount?: number;
  pretaxAmount?: number;
  currency?: string;
  pretaxAmountLocal?: number;
  tax?: number;
  afterTaxAmount?: number;
  paymentCurrency?: string;
  static names(): { [key: string]: string } {
    return {
      instanceID: 'InstanceID',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
      tag: 'Tag',
      resourceGroup: 'ResourceGroup',
      payerAccount: 'PayerAccount',
      ownerID: 'OwnerID',
      region: 'Region',
      pretaxGrossAmount: 'PretaxGrossAmount',
      discountAmount: 'DiscountAmount',
      pretaxAmount: 'PretaxAmount',
      currency: 'Currency',
      pretaxAmountLocal: 'PretaxAmountLocal',
      tax: 'Tax',
      afterTaxAmount: 'AfterTaxAmount',
      paymentCurrency: 'PaymentCurrency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceID: 'string',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
      tag: 'string',
      resourceGroup: 'string',
      payerAccount: 'string',
      ownerID: 'string',
      region: 'string',
      pretaxGrossAmount: 'number',
      discountAmount: 'number',
      pretaxAmount: 'number',
      currency: 'string',
      pretaxAmountLocal: 'number',
      tax: 'number',
      afterTaxAmount: 'number',
      paymentCurrency: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonthlyInstanceConsumptionResponseBodyDataItems extends $tea.Model {
  item?: QueryMonthlyInstanceConsumptionResponseBodyDataItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': QueryMonthlyInstanceConsumptionResponseBodyDataItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonthlyInstanceConsumptionResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  billingCycle?: string;
  items?: QueryMonthlyInstanceConsumptionResponseBodyDataItems;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      billingCycle: 'BillingCycle',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
      billingCycle: 'string',
      items: QueryMonthlyInstanceConsumptionResponseBodyDataItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrdersResponseBodyDataOrderListOrder extends $tea.Model {
  orderId?: string;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  orderType?: string;
  createTime?: string;
  paymentTime?: string;
  paymentStatus?: string;
  pretaxGrossAmount?: string;
  pretaxAmount?: string;
  currency?: string;
  pretaxAmountLocal?: string;
  tax?: string;
  afterTaxAmount?: string;
  paymentCurrency?: string;
  relatedOrderId?: string;
  commodityCode?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
      orderType: 'OrderType',
      createTime: 'CreateTime',
      paymentTime: 'PaymentTime',
      paymentStatus: 'PaymentStatus',
      pretaxGrossAmount: 'PretaxGrossAmount',
      pretaxAmount: 'PretaxAmount',
      currency: 'Currency',
      pretaxAmountLocal: 'PretaxAmountLocal',
      tax: 'Tax',
      afterTaxAmount: 'AfterTaxAmount',
      paymentCurrency: 'PaymentCurrency',
      relatedOrderId: 'RelatedOrderId',
      commodityCode: 'CommodityCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
      orderType: 'string',
      createTime: 'string',
      paymentTime: 'string',
      paymentStatus: 'string',
      pretaxGrossAmount: 'string',
      pretaxAmount: 'string',
      currency: 'string',
      pretaxAmountLocal: 'string',
      tax: 'string',
      afterTaxAmount: 'string',
      paymentCurrency: 'string',
      relatedOrderId: 'string',
      commodityCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrdersResponseBodyDataOrderList extends $tea.Model {
  order?: QueryOrdersResponseBodyDataOrderListOrder[];
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: { 'type': 'array', 'itemType': QueryOrdersResponseBodyDataOrderListOrder },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrdersResponseBodyData extends $tea.Model {
  hostName?: string;
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  orderList?: QueryOrdersResponseBodyDataOrderList;
  static names(): { [key: string]: string } {
    return {
      hostName: 'HostName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      orderList: 'OrderList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostName: 'string',
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
      orderList: QueryOrdersResponseBodyDataOrderList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPermissionListResponseBodyDataPermissionList extends $tea.Model {
  permissionCode?: string;
  permissionName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      permissionCode: 'PermissionCode',
      permissionName: 'PermissionName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissionCode: 'string',
      permissionName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPermissionListResponseBodyData extends $tea.Model {
  masterId?: number;
  memberId?: number;
  relationType?: string;
  state?: string;
  setupTime?: string;
  startTime?: string;
  endTime?: string;
  permissionList?: QueryPermissionListResponseBodyDataPermissionList[];
  static names(): { [key: string]: string } {
    return {
      masterId: 'MasterId',
      memberId: 'MemberId',
      relationType: 'RelationType',
      state: 'State',
      setupTime: 'SetupTime',
      startTime: 'StartTime',
      endTime: 'EndTime',
      permissionList: 'PermissionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterId: 'number',
      memberId: 'number',
      relationType: 'string',
      state: 'string',
      setupTime: 'string',
      startTime: 'string',
      endTime: 'string',
      permissionList: { 'type': 'array', 'itemType': QueryPermissionListResponseBodyDataPermissionList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPrepaidCardsResponseBodyDataPrepaidCard extends $tea.Model {
  prepaidCardId?: number;
  prepaidCardNo?: string;
  grantedTime?: string;
  effectiveTime?: string;
  expiryTime?: string;
  applicableProducts?: string;
  applicableScenarios?: string;
  nominalValue?: string;
  balance?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      prepaidCardId: 'PrepaidCardId',
      prepaidCardNo: 'PrepaidCardNo',
      grantedTime: 'GrantedTime',
      effectiveTime: 'EffectiveTime',
      expiryTime: 'ExpiryTime',
      applicableProducts: 'ApplicableProducts',
      applicableScenarios: 'ApplicableScenarios',
      nominalValue: 'NominalValue',
      balance: 'Balance',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prepaidCardId: 'number',
      prepaidCardNo: 'string',
      grantedTime: 'string',
      effectiveTime: 'string',
      expiryTime: 'string',
      applicableProducts: 'string',
      applicableScenarios: 'string',
      nominalValue: 'string',
      balance: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPrepaidCardsResponseBodyData extends $tea.Model {
  prepaidCard?: QueryPrepaidCardsResponseBodyDataPrepaidCard[];
  static names(): { [key: string]: string } {
    return {
      prepaidCard: 'PrepaidCard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prepaidCard: { 'type': 'array', 'itemType': QueryPrepaidCardsResponseBodyDataPrepaidCard },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductListResponseBodyDataProductListProduct extends $tea.Model {
  productCode?: string;
  productName?: string;
  productType?: string;
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
      productName: 'ProductName',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      productName: 'string',
      productType: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductListResponseBodyDataProductList extends $tea.Model {
  product?: QueryProductListResponseBodyDataProductListProduct[];
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: { 'type': 'array', 'itemType': QueryProductListResponseBodyDataProductListProduct },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductListResponseBodyData extends $tea.Model {
  totalCount?: number;
  pageNum?: number;
  pageSize?: number;
  productList?: QueryProductListResponseBodyDataProductList;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productList: 'ProductList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      productList: QueryProductListResponseBodyDataProductList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRedeemResponseBodyDataRedeemRedeem extends $tea.Model {
  redeemId?: string;
  redeemNo?: string;
  status?: string;
  grantedTime?: string;
  effectiveTime?: string;
  expiryTime?: string;
  nominalValue?: string;
  balance?: string;
  applicableProducts?: string;
  specification?: string;
  static names(): { [key: string]: string } {
    return {
      redeemId: 'RedeemId',
      redeemNo: 'RedeemNo',
      status: 'Status',
      grantedTime: 'GrantedTime',
      effectiveTime: 'EffectiveTime',
      expiryTime: 'ExpiryTime',
      nominalValue: 'NominalValue',
      balance: 'Balance',
      applicableProducts: 'ApplicableProducts',
      specification: 'Specification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      redeemId: 'string',
      redeemNo: 'string',
      status: 'string',
      grantedTime: 'string',
      effectiveTime: 'string',
      expiryTime: 'string',
      nominalValue: 'string',
      balance: 'string',
      applicableProducts: 'string',
      specification: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRedeemResponseBodyDataRedeem extends $tea.Model {
  redeem?: QueryRedeemResponseBodyDataRedeemRedeem[];
  static names(): { [key: string]: string } {
    return {
      redeem: 'Redeem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      redeem: { 'type': 'array', 'itemType': QueryRedeemResponseBodyDataRedeemRedeem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRedeemResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  redeem?: QueryRedeemResponseBodyDataRedeem;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      redeem: 'Redeem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
      redeem: QueryRedeemResponseBodyDataRedeem,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRelationListResponseBodyDataFinancialRelationInfoList extends $tea.Model {
  relationId?: number;
  accountType?: string;
  accountId?: number;
  accountName?: string;
  accountNickName?: string;
  relationType?: string;
  state?: string;
  setupTime?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      relationId: 'RelationId',
      accountType: 'AccountType',
      accountId: 'AccountId',
      accountName: 'AccountName',
      accountNickName: 'AccountNickName',
      relationType: 'RelationType',
      state: 'State',
      setupTime: 'SetupTime',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relationId: 'number',
      accountType: 'string',
      accountId: 'number',
      accountName: 'string',
      accountNickName: 'string',
      relationType: 'string',
      state: 'string',
      setupTime: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRelationListResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  financialRelationInfoList?: QueryRelationListResponseBodyDataFinancialRelationInfoList[];
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      financialRelationInfoList: 'FinancialRelationInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
      financialRelationInfoList: { 'type': 'array', 'itemType': QueryRelationListResponseBodyDataFinancialRelationInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourcePackageInstancesResponseBodyDataInstancesInstanceApplicableProducts extends $tea.Model {
  product?: string[];
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourcePackageInstancesResponseBodyDataInstancesInstance extends $tea.Model {
  instanceId?: string;
  region?: string;
  totalAmount?: string;
  totalAmountUnit?: string;
  remainingAmount?: string;
  remainingAmountUnit?: string;
  effectiveTime?: string;
  expiryTime?: string;
  remark?: string;
  packageType?: string;
  status?: string;
  deductType?: string;
  applicableProducts?: QueryResourcePackageInstancesResponseBodyDataInstancesInstanceApplicableProducts;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      region: 'Region',
      totalAmount: 'TotalAmount',
      totalAmountUnit: 'TotalAmountUnit',
      remainingAmount: 'RemainingAmount',
      remainingAmountUnit: 'RemainingAmountUnit',
      effectiveTime: 'EffectiveTime',
      expiryTime: 'ExpiryTime',
      remark: 'Remark',
      packageType: 'PackageType',
      status: 'Status',
      deductType: 'DeductType',
      applicableProducts: 'ApplicableProducts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      region: 'string',
      totalAmount: 'string',
      totalAmountUnit: 'string',
      remainingAmount: 'string',
      remainingAmountUnit: 'string',
      effectiveTime: 'string',
      expiryTime: 'string',
      remark: 'string',
      packageType: 'string',
      status: 'string',
      deductType: 'string',
      applicableProducts: QueryResourcePackageInstancesResponseBodyDataInstancesInstanceApplicableProducts,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourcePackageInstancesResponseBodyDataInstances extends $tea.Model {
  instance?: QueryResourcePackageInstancesResponseBodyDataInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': QueryResourcePackageInstancesResponseBodyDataInstancesInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourcePackageInstancesResponseBodyData extends $tea.Model {
  hostId?: string;
  pageNum?: string;
  pageSize?: string;
  totalCount?: string;
  instances?: QueryResourcePackageInstancesResponseBodyDataInstances;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      pageNum: 'string',
      pageSize: 'string',
      totalCount: 'string',
      instances: QueryResourcePackageInstancesResponseBodyDataInstances,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRIUtilizationDetailResponseBodyDataDetailListDetailList extends $tea.Model {
  RIInstanceId?: string;
  instanceSpec?: string;
  deductedInstanceId?: string;
  deductedCommodityCode?: string;
  deductDate?: string;
  deductHours?: string;
  deductedProductDetail?: string;
  deductQuantity?: number;
  deductFactorTotal?: number;
  static names(): { [key: string]: string } {
    return {
      RIInstanceId: 'RIInstanceId',
      instanceSpec: 'InstanceSpec',
      deductedInstanceId: 'DeductedInstanceId',
      deductedCommodityCode: 'DeductedCommodityCode',
      deductDate: 'DeductDate',
      deductHours: 'DeductHours',
      deductedProductDetail: 'DeductedProductDetail',
      deductQuantity: 'DeductQuantity',
      deductFactorTotal: 'DeductFactorTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      RIInstanceId: 'string',
      instanceSpec: 'string',
      deductedInstanceId: 'string',
      deductedCommodityCode: 'string',
      deductDate: 'string',
      deductHours: 'string',
      deductedProductDetail: 'string',
      deductQuantity: 'number',
      deductFactorTotal: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRIUtilizationDetailResponseBodyDataDetailList extends $tea.Model {
  detailList?: QueryRIUtilizationDetailResponseBodyDataDetailListDetailList[];
  static names(): { [key: string]: string } {
    return {
      detailList: 'DetailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailList: { 'type': 'array', 'itemType': QueryRIUtilizationDetailResponseBodyDataDetailListDetailList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRIUtilizationDetailResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  detailList?: QueryRIUtilizationDetailResponseBodyDataDetailList;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      detailList: 'DetailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
      detailList: QueryRIUtilizationDetailResponseBodyDataDetailList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansDeductLogResponseBodyDataItems extends $tea.Model {
  instanceId?: string;
  startTime?: string;
  endTime?: string;
  savingsType?: string;
  billModule?: string;
  deductFee?: string;
  deductRate?: string;
  userId?: number;
  deductCommodity?: string;
  deductInstanceId?: string;
  discountRate?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      savingsType: 'SavingsType',
      billModule: 'BillModule',
      deductFee: 'DeductFee',
      deductRate: 'DeductRate',
      userId: 'UserId',
      deductCommodity: 'DeductCommodity',
      deductInstanceId: 'DeductInstanceId',
      discountRate: 'DiscountRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      startTime: 'string',
      endTime: 'string',
      savingsType: 'string',
      billModule: 'string',
      deductFee: 'string',
      deductRate: 'string',
      userId: 'number',
      deductCommodity: 'string',
      deductInstanceId: 'string',
      discountRate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansDeductLogResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  items?: QuerySavingsPlansDeductLogResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': QuerySavingsPlansDeductLogResponseBodyDataItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansInstanceResponseBodyDataItems extends $tea.Model {
  instanceId?: string;
  savingsType?: string;
  instanceFamily?: string;
  region?: string;
  poolValue?: string;
  currency?: string;
  status?: string;
  startTime?: string;
  endTime?: string;
  payMode?: string;
  prepayFee?: string;
  totalSave?: string;
  utilization?: string;
  share?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      savingsType: 'SavingsType',
      instanceFamily: 'InstanceFamily',
      region: 'Region',
      poolValue: 'PoolValue',
      currency: 'Currency',
      status: 'Status',
      startTime: 'StartTime',
      endTime: 'EndTime',
      payMode: 'PayMode',
      prepayFee: 'PrepayFee',
      totalSave: 'TotalSave',
      utilization: 'Utilization',
      share: 'Share',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      savingsType: 'string',
      instanceFamily: 'string',
      region: 'string',
      poolValue: 'string',
      currency: 'string',
      status: 'string',
      startTime: 'string',
      endTime: 'string',
      payMode: 'string',
      prepayFee: 'string',
      totalSave: 'string',
      utilization: 'string',
      share: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansInstanceResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  items?: QuerySavingsPlansInstanceResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': QuerySavingsPlansInstanceResponseBodyDataItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySettleBillResponseBodyDataItemsItem extends $tea.Model {
  recordID?: string;
  item?: string;
  ownerID?: string;
  usageStartTime?: string;
  usageEndTime?: string;
  paymentTime?: string;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  productName?: string;
  productDetail?: string;
  pretaxGrossAmount?: number;
  deductedByCoupons?: number;
  invoiceDiscount?: number;
  pretaxAmount?: number;
  currency?: string;
  pretaxAmountLocal?: number;
  tax?: number;
  paymentAmount?: number;
  deductedByCashCoupons?: number;
  deductedByPrepaidCard?: number;
  outstandingAmount?: number;
  afterTaxAmount?: number;
  status?: string;
  paymentCurrency?: string;
  paymentTransactionID?: string;
  roundDownDiscount?: string;
  subOrderId?: string;
  pipCode?: string;
  commodityCode?: string;
  static names(): { [key: string]: string } {
    return {
      recordID: 'RecordID',
      item: 'Item',
      ownerID: 'OwnerID',
      usageStartTime: 'UsageStartTime',
      usageEndTime: 'UsageEndTime',
      paymentTime: 'PaymentTime',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
      productName: 'ProductName',
      productDetail: 'ProductDetail',
      pretaxGrossAmount: 'PretaxGrossAmount',
      deductedByCoupons: 'DeductedByCoupons',
      invoiceDiscount: 'InvoiceDiscount',
      pretaxAmount: 'PretaxAmount',
      currency: 'Currency',
      pretaxAmountLocal: 'PretaxAmountLocal',
      tax: 'Tax',
      paymentAmount: 'PaymentAmount',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      outstandingAmount: 'OutstandingAmount',
      afterTaxAmount: 'AfterTaxAmount',
      status: 'Status',
      paymentCurrency: 'PaymentCurrency',
      paymentTransactionID: 'PaymentTransactionID',
      roundDownDiscount: 'RoundDownDiscount',
      subOrderId: 'SubOrderId',
      pipCode: 'PipCode',
      commodityCode: 'CommodityCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordID: 'string',
      item: 'string',
      ownerID: 'string',
      usageStartTime: 'string',
      usageEndTime: 'string',
      paymentTime: 'string',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
      productName: 'string',
      productDetail: 'string',
      pretaxGrossAmount: 'number',
      deductedByCoupons: 'number',
      invoiceDiscount: 'number',
      pretaxAmount: 'number',
      currency: 'string',
      pretaxAmountLocal: 'number',
      tax: 'number',
      paymentAmount: 'number',
      deductedByCashCoupons: 'number',
      deductedByPrepaidCard: 'number',
      outstandingAmount: 'number',
      afterTaxAmount: 'number',
      status: 'string',
      paymentCurrency: 'string',
      paymentTransactionID: 'string',
      roundDownDiscount: 'string',
      subOrderId: 'string',
      pipCode: 'string',
      commodityCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySettleBillResponseBodyDataItems extends $tea.Model {
  item?: QuerySettleBillResponseBodyDataItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': QuerySettleBillResponseBodyDataItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySettleBillResponseBodyData extends $tea.Model {
  billingCycle?: string;
  accountID?: string;
  accountName?: string;
  nextToken?: string;
  maxResults?: number;
  totalCount?: number;
  items?: QuerySettleBillResponseBodyDataItems;
  static names(): { [key: string]: string } {
    return {
      billingCycle: 'BillingCycle',
      accountID: 'AccountID',
      accountName: 'AccountName',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingCycle: 'string',
      accountID: 'string',
      accountName: 'string',
      nextToken: 'string',
      maxResults: 'number',
      totalCount: 'number',
      items: QuerySettleBillResponseBodyDataItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySettlementBillResponseBodyDataItemsItem extends $tea.Model {
  recordID?: string;
  item?: string;
  payerAccount?: string;
  ownerID?: string;
  createTime?: string;
  usageStartTime?: string;
  usageEndTime?: string;
  suborderID?: string;
  orderID?: string;
  orderType?: string;
  linkedCustomerOrderID?: string;
  originalOrderID?: string;
  paymentTime?: string;
  solutionID?: string;
  solutionName?: string;
  billID?: string;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  region?: string;
  config?: string;
  quantity?: string;
  pretaxGrossAmount?: number;
  chargeDiscount?: number;
  deductedByCoupons?: number;
  accountDiscount?: number;
  promotion?: string;
  pretaxAmount?: number;
  currency?: string;
  pretaxAmountLocal?: number;
  previousBillingCycleBalance?: number;
  tax?: number;
  afterTaxAmount?: number;
  status?: string;
  clearedTime?: string;
  outstandingAmount?: number;
  deductedByCashCoupons?: number;
  deductedByPrepaidCard?: number;
  mybankPaymentAmount?: number;
  paymentAmount?: number;
  paymentCurrency?: string;
  seller?: string;
  invoiceNo?: string;
  static names(): { [key: string]: string } {
    return {
      recordID: 'RecordID',
      item: 'Item',
      payerAccount: 'PayerAccount',
      ownerID: 'OwnerID',
      createTime: 'CreateTime',
      usageStartTime: 'UsageStartTime',
      usageEndTime: 'UsageEndTime',
      suborderID: 'SuborderID',
      orderID: 'OrderID',
      orderType: 'OrderType',
      linkedCustomerOrderID: 'LinkedCustomerOrderID',
      originalOrderID: 'OriginalOrderID',
      paymentTime: 'PaymentTime',
      solutionID: 'SolutionID',
      solutionName: 'SolutionName',
      billID: 'BillID',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
      region: 'Region',
      config: 'Config',
      quantity: 'Quantity',
      pretaxGrossAmount: 'PretaxGrossAmount',
      chargeDiscount: 'ChargeDiscount',
      deductedByCoupons: 'DeductedByCoupons',
      accountDiscount: 'AccountDiscount',
      promotion: 'Promotion',
      pretaxAmount: 'PretaxAmount',
      currency: 'Currency',
      pretaxAmountLocal: 'PretaxAmountLocal',
      previousBillingCycleBalance: 'PreviousBillingCycleBalance',
      tax: 'Tax',
      afterTaxAmount: 'AfterTaxAmount',
      status: 'Status',
      clearedTime: 'ClearedTime',
      outstandingAmount: 'OutstandingAmount',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      mybankPaymentAmount: 'MybankPaymentAmount',
      paymentAmount: 'PaymentAmount',
      paymentCurrency: 'PaymentCurrency',
      seller: 'Seller',
      invoiceNo: 'InvoiceNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordID: 'string',
      item: 'string',
      payerAccount: 'string',
      ownerID: 'string',
      createTime: 'string',
      usageStartTime: 'string',
      usageEndTime: 'string',
      suborderID: 'string',
      orderID: 'string',
      orderType: 'string',
      linkedCustomerOrderID: 'string',
      originalOrderID: 'string',
      paymentTime: 'string',
      solutionID: 'string',
      solutionName: 'string',
      billID: 'string',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
      region: 'string',
      config: 'string',
      quantity: 'string',
      pretaxGrossAmount: 'number',
      chargeDiscount: 'number',
      deductedByCoupons: 'number',
      accountDiscount: 'number',
      promotion: 'string',
      pretaxAmount: 'number',
      currency: 'string',
      pretaxAmountLocal: 'number',
      previousBillingCycleBalance: 'number',
      tax: 'number',
      afterTaxAmount: 'number',
      status: 'string',
      clearedTime: 'string',
      outstandingAmount: 'number',
      deductedByCashCoupons: 'number',
      deductedByPrepaidCard: 'number',
      mybankPaymentAmount: 'number',
      paymentAmount: 'number',
      paymentCurrency: 'string',
      seller: 'string',
      invoiceNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySettlementBillResponseBodyDataItems extends $tea.Model {
  item?: QuerySettlementBillResponseBodyDataItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': QuerySettlementBillResponseBodyDataItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySettlementBillResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  billingCycle?: string;
  items?: QuerySettlementBillResponseBodyDataItems;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      billingCycle: 'BillingCycle',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
      billingCycle: 'string',
      items: QuerySettlementBillResponseBodyDataItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySplitItemBillResponseBodyDataItemsItem extends $tea.Model {
  instanceID?: string;
  billingType?: string;
  costUnit?: string;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  productName?: string;
  productDetail?: string;
  ownerID?: string;
  billingItem?: string;
  listPrice?: string;
  listPriceUnit?: string;
  usage?: string;
  usageUnit?: string;
  deductedByResourcePackage?: string;
  pretaxGrossAmount?: number;
  invoiceDiscount?: number;
  deductedByCoupons?: number;
  pretaxAmount?: number;
  deductedByCashCoupons?: number;
  deductedByPrepaidCard?: number;
  paymentAmount?: number;
  outstandingAmount?: number;
  currency?: string;
  nickName?: string;
  resourceGroup?: string;
  tag?: string;
  instanceConfig?: string;
  instanceSpec?: string;
  internetIP?: string;
  intranetIP?: string;
  region?: string;
  zone?: string;
  item?: string;
  servicePeriod?: string;
  billingDate?: string;
  splitItemID?: string;
  splitItemName?: string;
  pipCode?: string;
  commodityCode?: string;
  servicePeriodUnit?: string;
  splitCommodityCode?: string;
  splitProductDetail?: string;
  splitAccountID?: string;
  splitAccountName?: string;
  splitBillingCycle?: string;
  static names(): { [key: string]: string } {
    return {
      instanceID: 'InstanceID',
      billingType: 'BillingType',
      costUnit: 'CostUnit',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
      productName: 'ProductName',
      productDetail: 'ProductDetail',
      ownerID: 'OwnerID',
      billingItem: 'BillingItem',
      listPrice: 'ListPrice',
      listPriceUnit: 'ListPriceUnit',
      usage: 'Usage',
      usageUnit: 'UsageUnit',
      deductedByResourcePackage: 'DeductedByResourcePackage',
      pretaxGrossAmount: 'PretaxGrossAmount',
      invoiceDiscount: 'InvoiceDiscount',
      deductedByCoupons: 'DeductedByCoupons',
      pretaxAmount: 'PretaxAmount',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      paymentAmount: 'PaymentAmount',
      outstandingAmount: 'OutstandingAmount',
      currency: 'Currency',
      nickName: 'NickName',
      resourceGroup: 'ResourceGroup',
      tag: 'Tag',
      instanceConfig: 'InstanceConfig',
      instanceSpec: 'InstanceSpec',
      internetIP: 'InternetIP',
      intranetIP: 'IntranetIP',
      region: 'Region',
      zone: 'Zone',
      item: 'Item',
      servicePeriod: 'ServicePeriod',
      billingDate: 'BillingDate',
      splitItemID: 'SplitItemID',
      splitItemName: 'SplitItemName',
      pipCode: 'PipCode',
      commodityCode: 'CommodityCode',
      servicePeriodUnit: 'ServicePeriodUnit',
      splitCommodityCode: 'SplitCommodityCode',
      splitProductDetail: 'SplitProductDetail',
      splitAccountID: 'SplitAccountID',
      splitAccountName: 'SplitAccountName',
      splitBillingCycle: 'SplitBillingCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceID: 'string',
      billingType: 'string',
      costUnit: 'string',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
      productName: 'string',
      productDetail: 'string',
      ownerID: 'string',
      billingItem: 'string',
      listPrice: 'string',
      listPriceUnit: 'string',
      usage: 'string',
      usageUnit: 'string',
      deductedByResourcePackage: 'string',
      pretaxGrossAmount: 'number',
      invoiceDiscount: 'number',
      deductedByCoupons: 'number',
      pretaxAmount: 'number',
      deductedByCashCoupons: 'number',
      deductedByPrepaidCard: 'number',
      paymentAmount: 'number',
      outstandingAmount: 'number',
      currency: 'string',
      nickName: 'string',
      resourceGroup: 'string',
      tag: 'string',
      instanceConfig: 'string',
      instanceSpec: 'string',
      internetIP: 'string',
      intranetIP: 'string',
      region: 'string',
      zone: 'string',
      item: 'string',
      servicePeriod: 'string',
      billingDate: 'string',
      splitItemID: 'string',
      splitItemName: 'string',
      pipCode: 'string',
      commodityCode: 'string',
      servicePeriodUnit: 'string',
      splitCommodityCode: 'string',
      splitProductDetail: 'string',
      splitAccountID: 'string',
      splitAccountName: 'string',
      splitBillingCycle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySplitItemBillResponseBodyDataItems extends $tea.Model {
  item?: QuerySplitItemBillResponseBodyDataItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': QuerySplitItemBillResponseBodyDataItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySplitItemBillResponseBodyData extends $tea.Model {
  billingCycle?: string;
  accountID?: string;
  accountName?: string;
  totalCount?: number;
  pageNum?: number;
  pageSize?: number;
  items?: QuerySplitItemBillResponseBodyDataItems;
  static names(): { [key: string]: string } {
    return {
      billingCycle: 'BillingCycle',
      accountID: 'AccountID',
      accountName: 'AccountName',
      totalCount: 'TotalCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingCycle: 'string',
      accountID: 'string',
      accountName: 'string',
      totalCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      items: QuerySplitItemBillResponseBodyDataItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserOmsDataResponseBodyData extends $tea.Model {
  marker?: string;
  hostId?: string;
  omsData?: { [key: string]: string }[];
  static names(): { [key: string]: string } {
    return {
      marker: 'Marker',
      hostId: 'HostId',
      omsData: 'OmsData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      hostId: 'string',
      omsData: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponseBodyData extends $tea.Model {
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

export class RenewResourcePackageResponseBodyData extends $tea.Model {
  orderId?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
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

export class UpgradeResourcePackageResponseBodyData extends $tea.Model {
  orderId?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      instanceId: 'string',
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
      'ap-northeast-1': "business.ap-southeast-1.aliyuncs.com",
      'ap-northeast-2-pop': "business.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "business.ap-southeast-1.aliyuncs.com",
      'ap-southeast-1': "business.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "business.ap-southeast-1.aliyuncs.com",
      'ap-southeast-3': "business.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "business.ap-southeast-1.aliyuncs.com",
      'cn-beijing': "business.aliyuncs.com",
      'cn-beijing-finance-1': "business.aliyuncs.com",
      'cn-beijing-finance-pop': "business.aliyuncs.com",
      'cn-beijing-gov-1': "business.aliyuncs.com",
      'cn-beijing-nu16-b01': "business.aliyuncs.com",
      'cn-chengdu': "business.aliyuncs.com",
      'cn-edge-1': "business.aliyuncs.com",
      'cn-fujian': "business.aliyuncs.com",
      'cn-haidian-cm12-c01': "business.aliyuncs.com",
      'cn-hangzhou': "business.aliyuncs.com",
      'cn-hangzhou-bj-b01': "business.aliyuncs.com",
      'cn-hangzhou-finance': "business.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "business.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "business.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "business.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "business.aliyuncs.com",
      'cn-hangzhou-test-306': "business.aliyuncs.com",
      'cn-hongkong': "business.aliyuncs.com",
      'cn-hongkong-finance-pop': "business.aliyuncs.com",
      'cn-huhehaote': "business.aliyuncs.com",
      'cn-north-2-gov-1': "business.aliyuncs.com",
      'cn-qingdao': "business.aliyuncs.com",
      'cn-qingdao-nebula': "business.aliyuncs.com",
      'cn-shanghai': "business.aliyuncs.com",
      'cn-shanghai-et15-b01': "business.aliyuncs.com",
      'cn-shanghai-et2-b01': "business.aliyuncs.com",
      'cn-shanghai-finance-1': "business.aliyuncs.com",
      'cn-shanghai-inner': "business.aliyuncs.com",
      'cn-shanghai-internal-test-1': "business.aliyuncs.com",
      'cn-shenzhen': "business.aliyuncs.com",
      'cn-shenzhen-finance-1': "business.aliyuncs.com",
      'cn-shenzhen-inner': "business.aliyuncs.com",
      'cn-shenzhen-st4-d01': "business.aliyuncs.com",
      'cn-shenzhen-su18-b01': "business.aliyuncs.com",
      'cn-wuhan': "business.aliyuncs.com",
      'cn-yushanfang': "business.aliyuncs.com",
      'cn-zhangbei-na61-b01': "business.aliyuncs.com",
      'cn-zhangjiakou': "business.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "business.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "business.aliyuncs.com",
      'eu-central-1': "business.ap-southeast-1.aliyuncs.com",
      'eu-west-1': "business.ap-southeast-1.aliyuncs.com",
      'eu-west-1-oxs': "business.ap-southeast-1.aliyuncs.com",
      'me-east-1': "business.ap-southeast-1.aliyuncs.com",
      'rus-west-1-pop': "business.ap-southeast-1.aliyuncs.com",
      'us-east-1': "business.ap-southeast-1.aliyuncs.com",
      'us-west-1': "business.ap-southeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("bssopenapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async allocateCostUnitResourceWithOptions(request: AllocateCostUnitResourceRequest, runtime: $Util.RuntimeOptions): Promise<AllocateCostUnitResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AllocateCostUnitResourceResponse>(await this.doRPCRequest("AllocateCostUnitResource", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new AllocateCostUnitResourceResponse({}));
  }

  async allocateCostUnitResource(request: AllocateCostUnitResourceRequest): Promise<AllocateCostUnitResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocateCostUnitResourceWithOptions(request, runtime);
  }

  async applyInvoiceWithOptions(request: ApplyInvoiceRequest, runtime: $Util.RuntimeOptions): Promise<ApplyInvoiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ApplyInvoiceResponse>(await this.doRPCRequest("ApplyInvoice", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new ApplyInvoiceResponse({}));
  }

  async applyInvoice(request: ApplyInvoiceRequest): Promise<ApplyInvoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyInvoiceWithOptions(request, runtime);
  }

  async cancelOrderWithOptions(request: CancelOrderRequest, runtime: $Util.RuntimeOptions): Promise<CancelOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelOrderResponse>(await this.doRPCRequest("CancelOrder", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new CancelOrderResponse({}));
  }

  async cancelOrder(request: CancelOrderRequest): Promise<CancelOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelOrderWithOptions(request, runtime);
  }

  async changeResellerConsumeAmountWithOptions(request: ChangeResellerConsumeAmountRequest, runtime: $Util.RuntimeOptions): Promise<ChangeResellerConsumeAmountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ChangeResellerConsumeAmountResponse>(await this.doRPCRequest("ChangeResellerConsumeAmount", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new ChangeResellerConsumeAmountResponse({}));
  }

  async changeResellerConsumeAmount(request: ChangeResellerConsumeAmountRequest): Promise<ChangeResellerConsumeAmountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeResellerConsumeAmountWithOptions(request, runtime);
  }

  async convertChargeTypeWithOptions(request: ConvertChargeTypeRequest, runtime: $Util.RuntimeOptions): Promise<ConvertChargeTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConvertChargeTypeResponse>(await this.doRPCRequest("ConvertChargeType", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new ConvertChargeTypeResponse({}));
  }

  async convertChargeType(request: ConvertChargeTypeRequest): Promise<ConvertChargeTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.convertChargeTypeWithOptions(request, runtime);
  }

  async createAgAccountWithOptions(request: CreateAgAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateAgAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAgAccountResponse>(await this.doRPCRequest("CreateAgAccount", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAgAccountResponse({}));
  }

  async createAgAccount(request: CreateAgAccountRequest): Promise<CreateAgAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAgAccountWithOptions(request, runtime);
  }

  async createCostUnitWithOptions(request: CreateCostUnitRequest, runtime: $Util.RuntimeOptions): Promise<CreateCostUnitResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCostUnitResponse>(await this.doRPCRequest("CreateCostUnit", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCostUnitResponse({}));
  }

  async createCostUnit(request: CreateCostUnitRequest): Promise<CreateCostUnitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCostUnitWithOptions(request, runtime);
  }

  async createInstanceWithOptions(request: CreateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateInstanceResponse>(await this.doRPCRequest("CreateInstance", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new CreateInstanceResponse({}));
  }

  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  async createResellerUserQuotaWithOptions(request: CreateResellerUserQuotaRequest, runtime: $Util.RuntimeOptions): Promise<CreateResellerUserQuotaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateResellerUserQuotaResponse>(await this.doRPCRequest("CreateResellerUserQuota", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new CreateResellerUserQuotaResponse({}));
  }

  async createResellerUserQuota(request: CreateResellerUserQuotaRequest): Promise<CreateResellerUserQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createResellerUserQuotaWithOptions(request, runtime);
  }

  async createResourcePackageWithOptions(request: CreateResourcePackageRequest, runtime: $Util.RuntimeOptions): Promise<CreateResourcePackageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateResourcePackageResponse>(await this.doRPCRequest("CreateResourcePackage", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new CreateResourcePackageResponse({}));
  }

  async createResourcePackage(request: CreateResourcePackageRequest): Promise<CreateResourcePackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createResourcePackageWithOptions(request, runtime);
  }

  async deleteCostUnitWithOptions(request: DeleteCostUnitRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCostUnitResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCostUnitResponse>(await this.doRPCRequest("DeleteCostUnit", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCostUnitResponse({}));
  }

  async deleteCostUnit(request: DeleteCostUnitRequest): Promise<DeleteCostUnitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCostUnitWithOptions(request, runtime);
  }

  async describePricingModuleWithOptions(request: DescribePricingModuleRequest, runtime: $Util.RuntimeOptions): Promise<DescribePricingModuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePricingModuleResponse>(await this.doRPCRequest("DescribePricingModule", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePricingModuleResponse({}));
  }

  async describePricingModule(request: DescribePricingModuleRequest): Promise<DescribePricingModuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePricingModuleWithOptions(request, runtime);
  }

  async describeResourcePackageProductWithOptions(request: DescribeResourcePackageProductRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourcePackageProductResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeResourcePackageProductResponse>(await this.doRPCRequest("DescribeResourcePackageProduct", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeResourcePackageProductResponse({}));
  }

  async describeResourcePackageProduct(request: DescribeResourcePackageProductRequest): Promise<DescribeResourcePackageProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourcePackageProductWithOptions(request, runtime);
  }

  async describeSplitItemBillWithOptions(request: DescribeSplitItemBillRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSplitItemBillResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSplitItemBillResponse>(await this.doRPCRequest("DescribeSplitItemBill", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSplitItemBillResponse({}));
  }

  async describeSplitItemBill(request: DescribeSplitItemBillRequest): Promise<DescribeSplitItemBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSplitItemBillWithOptions(request, runtime);
  }

  async enableBillGenerationWithOptions(request: EnableBillGenerationRequest, runtime: $Util.RuntimeOptions): Promise<EnableBillGenerationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableBillGenerationResponse>(await this.doRPCRequest("EnableBillGeneration", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new EnableBillGenerationResponse({}));
  }

  async enableBillGeneration(request: EnableBillGenerationRequest): Promise<EnableBillGenerationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableBillGenerationWithOptions(request, runtime);
  }

  async getCustomerAccountInfoWithOptions(request: GetCustomerAccountInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetCustomerAccountInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetCustomerAccountInfoResponse>(await this.doRPCRequest("GetCustomerAccountInfo", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new GetCustomerAccountInfoResponse({}));
  }

  async getCustomerAccountInfo(request: GetCustomerAccountInfoRequest): Promise<GetCustomerAccountInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCustomerAccountInfoWithOptions(request, runtime);
  }

  async getCustomerListWithOptions(runtime: $Util.RuntimeOptions): Promise<GetCustomerListResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<GetCustomerListResponse>(await this.doRPCRequest("GetCustomerList", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new GetCustomerListResponse({}));
  }

  async getCustomerList(): Promise<GetCustomerListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCustomerListWithOptions(runtime);
  }

  async getOrderDetailWithOptions(request: GetOrderDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetOrderDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetOrderDetailResponse>(await this.doRPCRequest("GetOrderDetail", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new GetOrderDetailResponse({}));
  }

  async getOrderDetail(request: GetOrderDetailRequest): Promise<GetOrderDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOrderDetailWithOptions(request, runtime);
  }

  async getPayAsYouGoPriceWithOptions(request: GetPayAsYouGoPriceRequest, runtime: $Util.RuntimeOptions): Promise<GetPayAsYouGoPriceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPayAsYouGoPriceResponse>(await this.doRPCRequest("GetPayAsYouGoPrice", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new GetPayAsYouGoPriceResponse({}));
  }

  async getPayAsYouGoPrice(request: GetPayAsYouGoPriceRequest): Promise<GetPayAsYouGoPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPayAsYouGoPriceWithOptions(request, runtime);
  }

  async getResourcePackagePriceWithOptions(request: GetResourcePackagePriceRequest, runtime: $Util.RuntimeOptions): Promise<GetResourcePackagePriceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetResourcePackagePriceResponse>(await this.doRPCRequest("GetResourcePackagePrice", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new GetResourcePackagePriceResponse({}));
  }

  async getResourcePackagePrice(request: GetResourcePackagePriceRequest): Promise<GetResourcePackagePriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourcePackagePriceWithOptions(request, runtime);
  }

  async getSubscriptionPriceWithOptions(request: GetSubscriptionPriceRequest, runtime: $Util.RuntimeOptions): Promise<GetSubscriptionPriceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSubscriptionPriceResponse>(await this.doRPCRequest("GetSubscriptionPrice", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new GetSubscriptionPriceResponse({}));
  }

  async getSubscriptionPrice(request: GetSubscriptionPriceRequest): Promise<GetSubscriptionPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSubscriptionPriceWithOptions(request, runtime);
  }

  async modifyCostUnitWithOptions(request: ModifyCostUnitRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCostUnitResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyCostUnitResponse>(await this.doRPCRequest("ModifyCostUnit", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyCostUnitResponse({}));
  }

  async modifyCostUnit(request: ModifyCostUnitRequest): Promise<ModifyCostUnitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCostUnitWithOptions(request, runtime);
  }

  async modifyInstanceWithOptions(request: ModifyInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyInstanceResponse>(await this.doRPCRequest("ModifyInstance", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyInstanceResponse({}));
  }

  async modifyInstance(request: ModifyInstanceRequest): Promise<ModifyInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceWithOptions(request, runtime);
  }

  async queryAccountBalanceWithOptions(runtime: $Util.RuntimeOptions): Promise<QueryAccountBalanceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<QueryAccountBalanceResponse>(await this.doRPCRequest("QueryAccountBalance", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QueryAccountBalanceResponse({}));
  }

  async queryAccountBalance(): Promise<QueryAccountBalanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAccountBalanceWithOptions(runtime);
  }

  async queryAccountBillWithOptions(request: QueryAccountBillRequest, runtime: $Util.RuntimeOptions): Promise<QueryAccountBillResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryAccountBillResponse>(await this.doRPCRequest("QueryAccountBill", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QueryAccountBillResponse({}));
  }

  async queryAccountBill(request: QueryAccountBillRequest): Promise<QueryAccountBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAccountBillWithOptions(request, runtime);
  }

  async queryAccountTransactionDetailsWithOptions(request: QueryAccountTransactionDetailsRequest, runtime: $Util.RuntimeOptions): Promise<QueryAccountTransactionDetailsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryAccountTransactionDetailsResponse>(await this.doRPCRequest("QueryAccountTransactionDetails", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QueryAccountTransactionDetailsResponse({}));
  }

  async queryAccountTransactionDetails(request: QueryAccountTransactionDetailsRequest): Promise<QueryAccountTransactionDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAccountTransactionDetailsWithOptions(request, runtime);
  }

  async queryAccountTransactionsWithOptions(request: QueryAccountTransactionsRequest, runtime: $Util.RuntimeOptions): Promise<QueryAccountTransactionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryAccountTransactionsResponse>(await this.doRPCRequest("QueryAccountTransactions", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QueryAccountTransactionsResponse({}));
  }

  async queryAccountTransactions(request: QueryAccountTransactionsRequest): Promise<QueryAccountTransactionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAccountTransactionsWithOptions(request, runtime);
  }

  async queryAvailableInstancesWithOptions(request: QueryAvailableInstancesRequest, runtime: $Util.RuntimeOptions): Promise<QueryAvailableInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryAvailableInstancesResponse>(await this.doRPCRequest("QueryAvailableInstances", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QueryAvailableInstancesResponse({}));
  }

  async queryAvailableInstances(request: QueryAvailableInstancesRequest): Promise<QueryAvailableInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAvailableInstancesWithOptions(request, runtime);
  }

  async queryBillWithOptions(request: QueryBillRequest, runtime: $Util.RuntimeOptions): Promise<QueryBillResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryBillResponse>(await this.doRPCRequest("QueryBill", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QueryBillResponse({}));
  }

  async queryBill(request: QueryBillRequest): Promise<QueryBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBillWithOptions(request, runtime);
  }

  async queryBillOverviewWithOptions(request: QueryBillOverviewRequest, runtime: $Util.RuntimeOptions): Promise<QueryBillOverviewResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryBillOverviewResponse>(await this.doRPCRequest("QueryBillOverview", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QueryBillOverviewResponse({}));
  }

  async queryBillOverview(request: QueryBillOverviewRequest): Promise<QueryBillOverviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBillOverviewWithOptions(request, runtime);
  }

  async queryBillToOSSSubscriptionWithOptions(runtime: $Util.RuntimeOptions): Promise<QueryBillToOSSSubscriptionResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<QueryBillToOSSSubscriptionResponse>(await this.doRPCRequest("QueryBillToOSSSubscription", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QueryBillToOSSSubscriptionResponse({}));
  }

  async queryBillToOSSSubscription(): Promise<QueryBillToOSSSubscriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBillToOSSSubscriptionWithOptions(runtime);
  }

  async queryCashCouponsWithOptions(request: QueryCashCouponsRequest, runtime: $Util.RuntimeOptions): Promise<QueryCashCouponsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryCashCouponsResponse>(await this.doRPCRequest("QueryCashCoupons", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QueryCashCouponsResponse({}));
  }

  async queryCashCoupons(request: QueryCashCouponsRequest): Promise<QueryCashCouponsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCashCouponsWithOptions(request, runtime);
  }

  async queryCostUnitWithOptions(request: QueryCostUnitRequest, runtime: $Util.RuntimeOptions): Promise<QueryCostUnitResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryCostUnitResponse>(await this.doRPCRequest("QueryCostUnit", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QueryCostUnitResponse({}));
  }

  async queryCostUnit(request: QueryCostUnitRequest): Promise<QueryCostUnitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCostUnitWithOptions(request, runtime);
  }

  async queryCostUnitResourceWithOptions(request: QueryCostUnitResourceRequest, runtime: $Util.RuntimeOptions): Promise<QueryCostUnitResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryCostUnitResourceResponse>(await this.doRPCRequest("QueryCostUnitResource", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QueryCostUnitResourceResponse({}));
  }

  async queryCostUnitResource(request: QueryCostUnitResourceRequest): Promise<QueryCostUnitResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCostUnitResourceWithOptions(request, runtime);
  }

  async queryCustomerAddressListWithOptions(request: QueryCustomerAddressListRequest, runtime: $Util.RuntimeOptions): Promise<QueryCustomerAddressListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryCustomerAddressListResponse>(await this.doRPCRequest("QueryCustomerAddressList", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QueryCustomerAddressListResponse({}));
  }

  async queryCustomerAddressList(request: QueryCustomerAddressListRequest): Promise<QueryCustomerAddressListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCustomerAddressListWithOptions(request, runtime);
  }

  async queryEvaluateListWithOptions(request: QueryEvaluateListRequest, runtime: $Util.RuntimeOptions): Promise<QueryEvaluateListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryEvaluateListResponse>(await this.doRPCRequest("QueryEvaluateList", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QueryEvaluateListResponse({}));
  }

  async queryEvaluateList(request: QueryEvaluateListRequest): Promise<QueryEvaluateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEvaluateListWithOptions(request, runtime);
  }

  async queryFinancialAccountInfoWithOptions(request: QueryFinancialAccountInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryFinancialAccountInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryFinancialAccountInfoResponse>(await this.doRPCRequest("QueryFinancialAccountInfo", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QueryFinancialAccountInfoResponse({}));
  }

  async queryFinancialAccountInfo(request: QueryFinancialAccountInfoRequest): Promise<QueryFinancialAccountInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFinancialAccountInfoWithOptions(request, runtime);
  }

  async queryInstanceBillWithOptions(request: QueryInstanceBillRequest, runtime: $Util.RuntimeOptions): Promise<QueryInstanceBillResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryInstanceBillResponse>(await this.doRPCRequest("QueryInstanceBill", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QueryInstanceBillResponse({}));
  }

  async queryInstanceBill(request: QueryInstanceBillRequest): Promise<QueryInstanceBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryInstanceBillWithOptions(request, runtime);
  }

  async queryInstanceByTagWithOptions(request: QueryInstanceByTagRequest, runtime: $Util.RuntimeOptions): Promise<QueryInstanceByTagResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryInstanceByTagResponse>(await this.doRPCRequest("QueryInstanceByTag", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QueryInstanceByTagResponse({}));
  }

  async queryInstanceByTag(request: QueryInstanceByTagRequest): Promise<QueryInstanceByTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryInstanceByTagWithOptions(request, runtime);
  }

  async queryInstanceGaapCostWithOptions(request: QueryInstanceGaapCostRequest, runtime: $Util.RuntimeOptions): Promise<QueryInstanceGaapCostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryInstanceGaapCostResponse>(await this.doRPCRequest("QueryInstanceGaapCost", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QueryInstanceGaapCostResponse({}));
  }

  async queryInstanceGaapCost(request: QueryInstanceGaapCostRequest): Promise<QueryInstanceGaapCostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryInstanceGaapCostWithOptions(request, runtime);
  }

  async queryInvoicingCustomerListWithOptions(request: QueryInvoicingCustomerListRequest, runtime: $Util.RuntimeOptions): Promise<QueryInvoicingCustomerListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryInvoicingCustomerListResponse>(await this.doRPCRequest("QueryInvoicingCustomerList", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QueryInvoicingCustomerListResponse({}));
  }

  async queryInvoicingCustomerList(request: QueryInvoicingCustomerListRequest): Promise<QueryInvoicingCustomerListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryInvoicingCustomerListWithOptions(request, runtime);
  }

  async queryMonthlyBillWithOptions(request: QueryMonthlyBillRequest, runtime: $Util.RuntimeOptions): Promise<QueryMonthlyBillResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryMonthlyBillResponse>(await this.doRPCRequest("QueryMonthlyBill", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QueryMonthlyBillResponse({}));
  }

  async queryMonthlyBill(request: QueryMonthlyBillRequest): Promise<QueryMonthlyBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMonthlyBillWithOptions(request, runtime);
  }

  async queryMonthlyInstanceConsumptionWithOptions(request: QueryMonthlyInstanceConsumptionRequest, runtime: $Util.RuntimeOptions): Promise<QueryMonthlyInstanceConsumptionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryMonthlyInstanceConsumptionResponse>(await this.doRPCRequest("QueryMonthlyInstanceConsumption", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QueryMonthlyInstanceConsumptionResponse({}));
  }

  async queryMonthlyInstanceConsumption(request: QueryMonthlyInstanceConsumptionRequest): Promise<QueryMonthlyInstanceConsumptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMonthlyInstanceConsumptionWithOptions(request, runtime);
  }

  async queryOrdersWithOptions(request: QueryOrdersRequest, runtime: $Util.RuntimeOptions): Promise<QueryOrdersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryOrdersResponse>(await this.doRPCRequest("QueryOrders", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QueryOrdersResponse({}));
  }

  async queryOrders(request: QueryOrdersRequest): Promise<QueryOrdersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOrdersWithOptions(request, runtime);
  }

  async queryPermissionListWithOptions(request: QueryPermissionListRequest, runtime: $Util.RuntimeOptions): Promise<QueryPermissionListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryPermissionListResponse>(await this.doRPCRequest("QueryPermissionList", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QueryPermissionListResponse({}));
  }

  async queryPermissionList(request: QueryPermissionListRequest): Promise<QueryPermissionListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPermissionListWithOptions(request, runtime);
  }

  async queryPrepaidCardsWithOptions(request: QueryPrepaidCardsRequest, runtime: $Util.RuntimeOptions): Promise<QueryPrepaidCardsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryPrepaidCardsResponse>(await this.doRPCRequest("QueryPrepaidCards", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QueryPrepaidCardsResponse({}));
  }

  async queryPrepaidCards(request: QueryPrepaidCardsRequest): Promise<QueryPrepaidCardsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPrepaidCardsWithOptions(request, runtime);
  }

  async queryProductListWithOptions(request: QueryProductListRequest, runtime: $Util.RuntimeOptions): Promise<QueryProductListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryProductListResponse>(await this.doRPCRequest("QueryProductList", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QueryProductListResponse({}));
  }

  async queryProductList(request: QueryProductListRequest): Promise<QueryProductListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryProductListWithOptions(request, runtime);
  }

  async queryRedeemWithOptions(request: QueryRedeemRequest, runtime: $Util.RuntimeOptions): Promise<QueryRedeemResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<QueryRedeemResponse>(await this.doRPCRequest("QueryRedeem", "2017-12-14", "HTTPS", "GET", "AK", "json", req, runtime), new QueryRedeemResponse({}));
  }

  async queryRedeem(request: QueryRedeemRequest): Promise<QueryRedeemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRedeemWithOptions(request, runtime);
  }

  async queryRelationListWithOptions(request: QueryRelationListRequest, runtime: $Util.RuntimeOptions): Promise<QueryRelationListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryRelationListResponse>(await this.doRPCRequest("QueryRelationList", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QueryRelationListResponse({}));
  }

  async queryRelationList(request: QueryRelationListRequest): Promise<QueryRelationListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRelationListWithOptions(request, runtime);
  }

  async queryResellerAvailableQuotaWithOptions(request: QueryResellerAvailableQuotaRequest, runtime: $Util.RuntimeOptions): Promise<QueryResellerAvailableQuotaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryResellerAvailableQuotaResponse>(await this.doRPCRequest("QueryResellerAvailableQuota", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QueryResellerAvailableQuotaResponse({}));
  }

  async queryResellerAvailableQuota(request: QueryResellerAvailableQuotaRequest): Promise<QueryResellerAvailableQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryResellerAvailableQuotaWithOptions(request, runtime);
  }

  async queryResourcePackageInstancesWithOptions(request: QueryResourcePackageInstancesRequest, runtime: $Util.RuntimeOptions): Promise<QueryResourcePackageInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryResourcePackageInstancesResponse>(await this.doRPCRequest("QueryResourcePackageInstances", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QueryResourcePackageInstancesResponse({}));
  }

  async queryResourcePackageInstances(request: QueryResourcePackageInstancesRequest): Promise<QueryResourcePackageInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryResourcePackageInstancesWithOptions(request, runtime);
  }

  async queryRIUtilizationDetailWithOptions(request: QueryRIUtilizationDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryRIUtilizationDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryRIUtilizationDetailResponse>(await this.doRPCRequest("QueryRIUtilizationDetail", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QueryRIUtilizationDetailResponse({}));
  }

  async queryRIUtilizationDetail(request: QueryRIUtilizationDetailRequest): Promise<QueryRIUtilizationDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRIUtilizationDetailWithOptions(request, runtime);
  }

  async querySavingsPlansDeductLogWithOptions(request: QuerySavingsPlansDeductLogRequest, runtime: $Util.RuntimeOptions): Promise<QuerySavingsPlansDeductLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QuerySavingsPlansDeductLogResponse>(await this.doRPCRequest("QuerySavingsPlansDeductLog", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QuerySavingsPlansDeductLogResponse({}));
  }

  async querySavingsPlansDeductLog(request: QuerySavingsPlansDeductLogRequest): Promise<QuerySavingsPlansDeductLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySavingsPlansDeductLogWithOptions(request, runtime);
  }

  async querySavingsPlansInstanceWithOptions(request: QuerySavingsPlansInstanceRequest, runtime: $Util.RuntimeOptions): Promise<QuerySavingsPlansInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QuerySavingsPlansInstanceResponse>(await this.doRPCRequest("QuerySavingsPlansInstance", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QuerySavingsPlansInstanceResponse({}));
  }

  async querySavingsPlansInstance(request: QuerySavingsPlansInstanceRequest): Promise<QuerySavingsPlansInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySavingsPlansInstanceWithOptions(request, runtime);
  }

  async querySettleBillWithOptions(request: QuerySettleBillRequest, runtime: $Util.RuntimeOptions): Promise<QuerySettleBillResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QuerySettleBillResponse>(await this.doRPCRequest("QuerySettleBill", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QuerySettleBillResponse({}));
  }

  async querySettleBill(request: QuerySettleBillRequest): Promise<QuerySettleBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySettleBillWithOptions(request, runtime);
  }

  async querySettlementBillWithOptions(request: QuerySettlementBillRequest, runtime: $Util.RuntimeOptions): Promise<QuerySettlementBillResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QuerySettlementBillResponse>(await this.doRPCRequest("QuerySettlementBill", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QuerySettlementBillResponse({}));
  }

  async querySettlementBill(request: QuerySettlementBillRequest): Promise<QuerySettlementBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySettlementBillWithOptions(request, runtime);
  }

  async querySplitItemBillWithOptions(request: QuerySplitItemBillRequest, runtime: $Util.RuntimeOptions): Promise<QuerySplitItemBillResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QuerySplitItemBillResponse>(await this.doRPCRequest("QuerySplitItemBill", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QuerySplitItemBillResponse({}));
  }

  async querySplitItemBill(request: QuerySplitItemBillRequest): Promise<QuerySplitItemBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySplitItemBillWithOptions(request, runtime);
  }

  async queryUserOmsDataWithOptions(request: QueryUserOmsDataRequest, runtime: $Util.RuntimeOptions): Promise<QueryUserOmsDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryUserOmsDataResponse>(await this.doRPCRequest("QueryUserOmsData", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QueryUserOmsDataResponse({}));
  }

  async queryUserOmsData(request: QueryUserOmsDataRequest): Promise<QueryUserOmsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUserOmsDataWithOptions(request, runtime);
  }

  async renewInstanceWithOptions(request: RenewInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RenewInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RenewInstanceResponse>(await this.doRPCRequest("RenewInstance", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new RenewInstanceResponse({}));
  }

  async renewInstance(request: RenewInstanceRequest): Promise<RenewInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewInstanceWithOptions(request, runtime);
  }

  async renewResourcePackageWithOptions(request: RenewResourcePackageRequest, runtime: $Util.RuntimeOptions): Promise<RenewResourcePackageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RenewResourcePackageResponse>(await this.doRPCRequest("RenewResourcePackage", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new RenewResourcePackageResponse({}));
  }

  async renewResourcePackage(request: RenewResourcePackageRequest): Promise<RenewResourcePackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewResourcePackageWithOptions(request, runtime);
  }

  async saveUserCreditWithOptions(request: SaveUserCreditRequest, runtime: $Util.RuntimeOptions): Promise<SaveUserCreditResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveUserCreditResponse>(await this.doRPCRequest("SaveUserCredit", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new SaveUserCreditResponse({}));
  }

  async saveUserCredit(request: SaveUserCreditRequest): Promise<SaveUserCreditResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveUserCreditWithOptions(request, runtime);
  }

  async setCreditLabelActionWithOptions(request: SetCreditLabelActionRequest, runtime: $Util.RuntimeOptions): Promise<SetCreditLabelActionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetCreditLabelActionResponse>(await this.doRPCRequest("SetCreditLabelAction", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new SetCreditLabelActionResponse({}));
  }

  async setCreditLabelAction(request: SetCreditLabelActionRequest): Promise<SetCreditLabelActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setCreditLabelActionWithOptions(request, runtime);
  }

  async setRenewalWithOptions(request: SetRenewalRequest, runtime: $Util.RuntimeOptions): Promise<SetRenewalResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetRenewalResponse>(await this.doRPCRequest("SetRenewal", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new SetRenewalResponse({}));
  }

  async setRenewal(request: SetRenewalRequest): Promise<SetRenewalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setRenewalWithOptions(request, runtime);
  }

  async setResellerUserAlarmThresholdWithOptions(request: SetResellerUserAlarmThresholdRequest, runtime: $Util.RuntimeOptions): Promise<SetResellerUserAlarmThresholdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetResellerUserAlarmThresholdResponse>(await this.doRPCRequest("SetResellerUserAlarmThreshold", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new SetResellerUserAlarmThresholdResponse({}));
  }

  async setResellerUserAlarmThreshold(request: SetResellerUserAlarmThresholdRequest): Promise<SetResellerUserAlarmThresholdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setResellerUserAlarmThresholdWithOptions(request, runtime);
  }

  async setResellerUserQuotaWithOptions(request: SetResellerUserQuotaRequest, runtime: $Util.RuntimeOptions): Promise<SetResellerUserQuotaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetResellerUserQuotaResponse>(await this.doRPCRequest("SetResellerUserQuota", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new SetResellerUserQuotaResponse({}));
  }

  async setResellerUserQuota(request: SetResellerUserQuotaRequest): Promise<SetResellerUserQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setResellerUserQuotaWithOptions(request, runtime);
  }

  async setResellerUserStatusWithOptions(request: SetResellerUserStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetResellerUserStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetResellerUserStatusResponse>(await this.doRPCRequest("SetResellerUserStatus", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new SetResellerUserStatusResponse({}));
  }

  async setResellerUserStatus(request: SetResellerUserStatusRequest): Promise<SetResellerUserStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setResellerUserStatusWithOptions(request, runtime);
  }

  async subscribeBillToOSSWithOptions(request: SubscribeBillToOSSRequest, runtime: $Util.RuntimeOptions): Promise<SubscribeBillToOSSResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubscribeBillToOSSResponse>(await this.doRPCRequest("SubscribeBillToOSS", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new SubscribeBillToOSSResponse({}));
  }

  async subscribeBillToOSS(request: SubscribeBillToOSSRequest): Promise<SubscribeBillToOSSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.subscribeBillToOSSWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async unsubscribeBillToOSSWithOptions(request: UnsubscribeBillToOSSRequest, runtime: $Util.RuntimeOptions): Promise<UnsubscribeBillToOSSResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnsubscribeBillToOSSResponse>(await this.doRPCRequest("UnsubscribeBillToOSS", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new UnsubscribeBillToOSSResponse({}));
  }

  async unsubscribeBillToOSS(request: UnsubscribeBillToOSSRequest): Promise<UnsubscribeBillToOSSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unsubscribeBillToOSSWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UntagResourcesResponse>(await this.doRPCRequest("UntagResources", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async upgradeResourcePackageWithOptions(request: UpgradeResourcePackageRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeResourcePackageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpgradeResourcePackageResponse>(await this.doRPCRequest("UpgradeResourcePackage", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new UpgradeResourcePackageResponse({}));
  }

  async upgradeResourcePackage(request: UpgradeResourcePackageRequest): Promise<UpgradeResourcePackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeResourcePackageWithOptions(request, runtime);
  }

}
