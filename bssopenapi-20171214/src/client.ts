// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddAccountRelationRequest extends $tea.Model {
  relationType?: string;
  parentUserId?: number;
  childNick?: string;
  childUserId?: number;
  requestId?: string;
  permissionCodes?: string[];
  roleCodes?: string[];
  static names(): { [key: string]: string } {
    return {
      relationType: 'RelationType',
      parentUserId: 'ParentUserId',
      childNick: 'ChildNick',
      childUserId: 'ChildUserId',
      requestId: 'RequestId',
      permissionCodes: 'PermissionCodes',
      roleCodes: 'RoleCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relationType: 'string',
      parentUserId: 'number',
      childNick: 'string',
      childUserId: 'number',
      requestId: 'string',
      permissionCodes: { 'type': 'array', 'itemType': 'string' },
      roleCodes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAccountRelationResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: AddAccountRelationResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      data: AddAccountRelationResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAccountRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddAccountRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddAccountRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: AllocateCostUnitResourceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  invoiceByAmount?: boolean;
  userRemark?: string;
  selectedIds?: number[];
  static names(): { [key: string]: string } {
    return {
      invoiceAmount: 'InvoiceAmount',
      ownerId: 'OwnerId',
      customerId: 'CustomerId',
      addressId: 'AddressId',
      invoicingType: 'InvoicingType',
      processWay: 'ProcessWay',
      applyUserNick: 'ApplyUserNick',
      invoiceByAmount: 'InvoiceByAmount',
      userRemark: 'UserRemark',
      selectedIds: 'SelectedIds',
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
      invoiceByAmount: 'boolean',
      userRemark: 'string',
      selectedIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyInvoiceResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: ApplyInvoiceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: CancelOrderResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      data: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class ConfirmRelationRequest extends $tea.Model {
  relationType?: string;
  parentUserId?: number;
  confirmCode?: string;
  childUserId?: number;
  requestId?: string;
  permissionCodes?: string[];
  static names(): { [key: string]: string } {
    return {
      relationType: 'RelationType',
      parentUserId: 'ParentUserId',
      confirmCode: 'ConfirmCode',
      childUserId: 'ChildUserId',
      requestId: 'RequestId',
      permissionCodes: 'PermissionCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relationType: 'string',
      parentUserId: 'number',
      confirmCode: 'string',
      childUserId: 'number',
      requestId: 'string',
      permissionCodes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmRelationResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: ConfirmRelationResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      data: ConfirmRelationResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfirmRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfirmRelationResponseBody,
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: ConvertChargeTypeResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  agRelationDto?: CreateAgAccountResponseBodyAgRelationDto;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      agRelationDto: 'AgRelationDto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: CreateCostUnitResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  ownerId?: number;
  productType?: string;
  subscriptionType?: string;
  period?: number;
  renewalStatus?: string;
  renewPeriod?: number;
  clientToken?: string;
  logistics?: string;
  parameter?: CreateInstanceRequestParameter[];
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
      ownerId: 'OwnerId',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
      period: 'Period',
      renewalStatus: 'RenewalStatus',
      renewPeriod: 'RenewPeriod',
      clientToken: 'ClientToken',
      logistics: 'Logistics',
      parameter: 'Parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      ownerId: 'number',
      productType: 'string',
      subscriptionType: 'string',
      period: 'number',
      renewalStatus: 'string',
      renewPeriod: 'number',
      clientToken: 'string',
      logistics: 'string',
      parameter: { 'type': 'array', 'itemType': CreateInstanceRequestParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: CreateInstanceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  data?: boolean;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      data: 'boolean',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  orderId?: number;
  data?: CreateResourcePackageResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      orderId: 'OrderId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      orderId: 'number',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: DeleteCostUnitResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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

export class DescribeInstanceBillRequest extends $tea.Model {
  billingCycle?: string;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  ownerId?: number;
  isBillingItem?: boolean;
  nextToken?: string;
  maxResults?: number;
  isHideZeroCharge?: boolean;
  billingDate?: string;
  granularity?: string;
  billOwnerId?: number;
  instanceID?: string;
  static names(): { [key: string]: string } {
    return {
      billingCycle: 'BillingCycle',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
      ownerId: 'OwnerId',
      isBillingItem: 'IsBillingItem',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      isHideZeroCharge: 'IsHideZeroCharge',
      billingDate: 'BillingDate',
      granularity: 'Granularity',
      billOwnerId: 'BillOwnerId',
      instanceID: 'InstanceID',
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
      nextToken: 'string',
      maxResults: 'number',
      isHideZeroCharge: 'boolean',
      billingDate: 'string',
      granularity: 'string',
      billOwnerId: 'number',
      instanceID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceBillResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: DescribeInstanceBillResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      data: DescribeInstanceBillResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceBillResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceBillResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceBillResponseBody,
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: DescribePricingModuleResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class DescribeResourceCoverageDetailRequest extends $tea.Model {
  startPeriod?: string;
  endPeriod?: string;
  periodType?: string;
  nextToken?: string;
  maxResults?: number;
  billOwnerId?: number;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      startPeriod: 'StartPeriod',
      endPeriod: 'EndPeriod',
      periodType: 'PeriodType',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      billOwnerId: 'BillOwnerId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startPeriod: 'string',
      endPeriod: 'string',
      periodType: 'string',
      nextToken: 'string',
      maxResults: 'number',
      billOwnerId: 'number',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceCoverageDetailResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: DescribeResourceCoverageDetailResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      data: DescribeResourceCoverageDetailResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceCoverageDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeResourceCoverageDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeResourceCoverageDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceCoverageTotalRequest extends $tea.Model {
  startPeriod?: string;
  endPeriod?: string;
  periodType?: string;
  billOwnerId?: number;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      startPeriod: 'StartPeriod',
      endPeriod: 'EndPeriod',
      periodType: 'PeriodType',
      billOwnerId: 'BillOwnerId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startPeriod: 'string',
      endPeriod: 'string',
      periodType: 'string',
      billOwnerId: 'number',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceCoverageTotalResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: DescribeResourceCoverageTotalResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      data: DescribeResourceCoverageTotalResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceCoverageTotalResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeResourceCoverageTotalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeResourceCoverageTotalResponseBody,
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  orderId?: number;
  data?: DescribeResourcePackageProductResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      orderId: 'OrderId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      orderId: 'number',
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

export class DescribeResourceUsageDetailRequest extends $tea.Model {
  startPeriod?: string;
  endPeriod?: string;
  periodType?: string;
  nextToken?: string;
  maxResults?: number;
  billOwnerId?: number;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      startPeriod: 'StartPeriod',
      endPeriod: 'EndPeriod',
      periodType: 'PeriodType',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      billOwnerId: 'BillOwnerId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startPeriod: 'string',
      endPeriod: 'string',
      periodType: 'string',
      nextToken: 'string',
      maxResults: 'number',
      billOwnerId: 'number',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageDetailResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: DescribeResourceUsageDetailResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      data: DescribeResourceUsageDetailResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeResourceUsageDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeResourceUsageDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageTotalRequest extends $tea.Model {
  startPeriod?: string;
  endPeriod?: string;
  periodType?: string;
  billOwnerId?: number;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      startPeriod: 'StartPeriod',
      endPeriod: 'EndPeriod',
      periodType: 'PeriodType',
      billOwnerId: 'BillOwnerId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startPeriod: 'string',
      endPeriod: 'string',
      periodType: 'string',
      billOwnerId: 'number',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageTotalResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: DescribeResourceUsageTotalResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      data: DescribeResourceUsageTotalResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageTotalResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeResourceUsageTotalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeResourceUsageTotalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansCoverageDetailRequest extends $tea.Model {
  startPeriod?: string;
  endPeriod?: string;
  periodType?: string;
  token?: string;
  maxResults?: number;
  billOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      startPeriod: 'StartPeriod',
      endPeriod: 'EndPeriod',
      periodType: 'PeriodType',
      token: 'Token',
      maxResults: 'MaxResults',
      billOwnerId: 'BillOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startPeriod: 'string',
      endPeriod: 'string',
      periodType: 'string',
      token: 'string',
      maxResults: 'number',
      billOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansCoverageDetailResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: DescribeSavingsPlansCoverageDetailResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      data: DescribeSavingsPlansCoverageDetailResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansCoverageDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSavingsPlansCoverageDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSavingsPlansCoverageDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansCoverageTotalRequest extends $tea.Model {
  startPeriod?: string;
  endPeriod?: string;
  periodType?: string;
  billOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      startPeriod: 'StartPeriod',
      endPeriod: 'EndPeriod',
      periodType: 'PeriodType',
      billOwnerId: 'BillOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startPeriod: 'string',
      endPeriod: 'string',
      periodType: 'string',
      billOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansCoverageTotalResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: DescribeSavingsPlansCoverageTotalResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      data: DescribeSavingsPlansCoverageTotalResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansCoverageTotalResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSavingsPlansCoverageTotalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSavingsPlansCoverageTotalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansUsageDetailRequest extends $tea.Model {
  startPeriod?: string;
  endPeriod?: string;
  periodType?: string;
  token?: string;
  maxResults?: number;
  billOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      startPeriod: 'StartPeriod',
      endPeriod: 'EndPeriod',
      periodType: 'PeriodType',
      token: 'Token',
      maxResults: 'MaxResults',
      billOwnerId: 'BillOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startPeriod: 'string',
      endPeriod: 'string',
      periodType: 'string',
      token: 'string',
      maxResults: 'number',
      billOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansUsageDetailResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: DescribeSavingsPlansUsageDetailResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      data: DescribeSavingsPlansUsageDetailResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansUsageDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSavingsPlansUsageDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSavingsPlansUsageDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansUsageTotalRequest extends $tea.Model {
  startPeriod?: string;
  endPeriod?: string;
  periodType?: string;
  billOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      startPeriod: 'StartPeriod',
      endPeriod: 'EndPeriod',
      periodType: 'PeriodType',
      billOwnerId: 'BillOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startPeriod: 'string',
      endPeriod: 'string',
      periodType: 'string',
      billOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansUsageTotalResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: DescribeSavingsPlansUsageTotalResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      data: DescribeSavingsPlansUsageTotalResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansUsageTotalResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSavingsPlansUsageTotalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSavingsPlansUsageTotalResponseBody,
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
  instanceID?: string;
  splitItemID?: string;
  granularity?: string;
  billingDate?: string;
  tagFilter?: DescribeSplitItemBillRequestTagFilter[];
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
      instanceID: 'InstanceID',
      splitItemID: 'SplitItemID',
      granularity: 'Granularity',
      billingDate: 'BillingDate',
      tagFilter: 'TagFilter',
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
      instanceID: 'string',
      splitItemID: 'string',
      granularity: 'string',
      billingDate: 'string',
      tagFilter: { 'type': 'array', 'itemType': DescribeSplitItemBillRequestTagFilter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSplitItemBillResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: DescribeSplitItemBillResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: EnableBillGenerationResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: GetCustomerAccountInfoResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: GetCustomerListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: GetOrderDetailResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: GetPayAsYouGoPriceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: GetResourcePackagePriceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  quantity?: number;
  moduleList?: GetSubscriptionPriceRequestModuleList[];
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
      quantity: 'Quantity',
      moduleList: 'ModuleList',
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
      quantity: 'number',
      moduleList: { 'type': 'array', 'itemType': GetSubscriptionPriceRequestModuleList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionPriceResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: GetSubscriptionPriceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class ModifyAccountRelationRequest extends $tea.Model {
  relationType?: string;
  relationOperation?: string;
  parentUserId?: number;
  childNick?: string;
  childUserId?: number;
  requestId?: string;
  roleCodes?: string[];
  permissionCodes?: string[];
  static names(): { [key: string]: string } {
    return {
      relationType: 'RelationType',
      relationOperation: 'RelationOperation',
      parentUserId: 'ParentUserId',
      childNick: 'ChildNick',
      childUserId: 'ChildUserId',
      requestId: 'RequestId',
      roleCodes: 'RoleCodes',
      permissionCodes: 'PermissionCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relationType: 'string',
      relationOperation: 'string',
      parentUserId: 'number',
      childNick: 'string',
      childUserId: 'number',
      requestId: 'string',
      roleCodes: { 'type': 'array', 'itemType': 'string' },
      permissionCodes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountRelationResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: ModifyAccountRelationResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      data: ModifyAccountRelationResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyAccountRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyAccountRelationResponseBody,
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: ModifyCostUnitResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  clientToken?: string;
  parameter?: ModifyInstanceRequestParameter[];
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
      ownerId: 'OwnerId',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
      modifyType: 'ModifyType',
      instanceId: 'InstanceId',
      clientToken: 'ClientToken',
      parameter: 'Parameter',
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
      clientToken: 'string',
      parameter: { 'type': 'array', 'itemType': ModifyInstanceRequestParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: ModifyInstanceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: QueryAccountBalanceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: QueryAccountBillResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: QueryAccountTransactionDetailsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: QueryAccountTransactionsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: QueryAvailableInstancesResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: QueryBillResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: QueryBillOverviewResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: QueryBillToOSSSubscriptionResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: QueryCashCouponsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: QueryCostUnitResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: QueryCostUnitResourceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: QueryCustomerAddressListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class QueryDPUtilizationDetailRequest extends $tea.Model {
  instanceId?: string;
  instanceSpec?: string;
  commodityCode?: string;
  deductedInstanceId?: string;
  startTime?: string;
  endTime?: string;
  lastToken?: string;
  limit?: number;
  includeShare?: boolean;
  prodCode?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceSpec: 'InstanceSpec',
      commodityCode: 'CommodityCode',
      deductedInstanceId: 'DeductedInstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      lastToken: 'LastToken',
      limit: 'Limit',
      includeShare: 'IncludeShare',
      prodCode: 'ProdCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceSpec: 'string',
      commodityCode: 'string',
      deductedInstanceId: 'string',
      startTime: 'string',
      endTime: 'string',
      lastToken: 'string',
      limit: 'number',
      includeShare: 'boolean',
      prodCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDPUtilizationDetailResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: QueryDPUtilizationDetailResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      data: QueryDPUtilizationDetailResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDPUtilizationDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDPUtilizationDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDPUtilizationDetailResponseBody,
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: QueryEvaluateListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: QueryFinancialAccountInfoResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: QueryInstanceBillResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  message?: string;
  nextToken?: string;
  requestId?: string;
  success?: boolean;
  tagResource?: QueryInstanceByTagResponseBodyTagResource[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: QueryInstanceGaapCostResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: QueryInvoicingCustomerListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: QueryMonthlyBillResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: QueryMonthlyInstanceConsumptionResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: QueryOrdersResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: QueryPermissionListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: QueryPrepaidCardsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: QueryProductListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: QueryRedeemResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  pageNum?: number;
  pageSize?: number;
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRelationListResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: QueryRelationListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      data: 'string',
      requestId: 'string',
      success: 'boolean',
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
  pageSize?: number;
  total?: number;
  page?: number;
  data?: QueryResourcePackageInstancesResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      pageSize: 'PageSize',
      total: 'Total',
      page: 'Page',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      pageSize: 'number',
      total: 'number',
      page: 'number',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: QueryRIUtilizationDetailResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: QuerySavingsPlansDeductLogResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  tag?: QuerySavingsPlansInstanceRequestTag[];
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      locale: 'Locale',
      pageNum: 'PageNum',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      tag: 'Tag',
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
      tag: { 'type': 'array', 'itemType': QuerySavingsPlansInstanceRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansInstanceResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: QuerySavingsPlansInstanceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  recordID?: string;
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
      recordID: 'RecordID',
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
      recordID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySettleBillResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: QuerySettleBillResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: QuerySettlementBillResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: QuerySplitItemBillResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: QueryUserOmsDataResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class RelieveAccountRelationRequest extends $tea.Model {
  relationType?: string;
  parentUserId?: number;
  childUserId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      relationType: 'RelationType',
      parentUserId: 'ParentUserId',
      childUserId: 'ChildUserId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relationType: 'string',
      parentUserId: 'number',
      childUserId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RelieveAccountRelationResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: RelieveAccountRelationResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      data: RelieveAccountRelationResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RelieveAccountRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RelieveAccountRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RelieveAccountRelationResponseBody,
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  data?: RenewInstanceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  orderId?: number;
  data?: RenewResourcePackageResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      orderId: 'OrderId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      orderId: 'number',
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
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class SetAllExpirationDayRequest extends $tea.Model {
  ownerId?: number;
  unifyExpireDay?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      unifyExpireDay: 'UnifyExpireDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      unifyExpireDay: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAllExpirationDayResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAllExpirationDayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetAllExpirationDayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetAllExpirationDayResponseBody,
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
  message?: string;
  data?: boolean;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      data: 'boolean',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  data?: boolean;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      data: 'boolean',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  data?: boolean;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      data: 'boolean',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  data?: boolean;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      data: 'boolean',
      requestId: 'string',
      success: 'boolean',
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
  beginBillingCycle?: string;
  static names(): { [key: string]: string } {
    return {
      subscribeBucket: 'SubscribeBucket',
      subscribeType: 'SubscribeType',
      multAccountRelSubscribe: 'MultAccountRelSubscribe',
      bucketOwnerId: 'BucketOwnerId',
      beginBillingCycle: 'BeginBillingCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscribeBucket: 'string',
      subscribeType: 'string',
      multAccountRelSubscribe: 'string',
      bucketOwnerId: 'number',
      beginBillingCycle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscribeBillToOSSResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  message?: string;
  data?: boolean;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      data: 'boolean',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  all?: boolean;
  resourceId?: string[];
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      all: 'All',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  data?: boolean;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      data: 'boolean',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  orderId?: number;
  data?: UpgradeResourcePackageResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      orderId: 'OrderId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      orderId: 'number',
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

export class AddAccountRelationResponseBodyData extends $tea.Model {
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

export class AllocateCostUnitResourceRequestResourceInstanceList extends $tea.Model {
  apportionCode?: string;
  commodityCode?: string;
  resourceUserId?: number;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      apportionCode: 'ApportionCode',
      commodityCode: 'CommodityCode',
      resourceUserId: 'ResourceUserId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apportionCode: 'string',
      commodityCode: 'string',
      resourceUserId: 'number',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateCostUnitResourceResponseBodyData extends $tea.Model {
  toUnitUserId?: number;
  isSuccess?: boolean;
  toUnitId?: number;
  static names(): { [key: string]: string } {
    return {
      toUnitUserId: 'ToUnitUserId',
      isSuccess: 'IsSuccess',
      toUnitId: 'ToUnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      toUnitUserId: 'number',
      isSuccess: 'boolean',
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

export class ConfirmRelationResponseBodyData extends $tea.Model {
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
  type?: string;
  pk?: string;
  ramAdminRoleName?: string;
  mpk?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      pk: 'Pk',
      ramAdminRoleName: 'RamAdminRoleName',
      mpk: 'Mpk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      pk: 'string',
      ramAdminRoleName: 'string',
      mpk: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCostUnitRequestUnitEntityList extends $tea.Model {
  parentUnitId?: number;
  ownerUid?: number;
  unitName?: string;
  static names(): { [key: string]: string } {
    return {
      parentUnitId: 'ParentUnitId',
      ownerUid: 'OwnerUid',
      unitName: 'UnitName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentUnitId: 'number',
      ownerUid: 'number',
      unitName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCostUnitResponseBodyDataCostUnitDtoList extends $tea.Model {
  parentUnitId?: number;
  unitName?: string;
  unitId?: number;
  ownerUid?: number;
  static names(): { [key: string]: string } {
    return {
      parentUnitId: 'ParentUnitId',
      unitName: 'UnitName',
      unitId: 'UnitId',
      ownerUid: 'OwnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentUnitId: 'number',
      unitName: 'string',
      unitId: 'number',
      ownerUid: 'number',
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
  value?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBodyData extends $tea.Model {
  orderId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      instanceId: 'string',
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

export class DescribeInstanceBillResponseBodyDataItems extends $tea.Model {
  billingDate?: string;
  instanceConfig?: string;
  internetIP?: string;
  item?: string;
  tag?: string;
  instanceID?: string;
  currency?: string;
  billAccountName?: string;
  deductedByCashCoupons?: number;
  subscriptionType?: string;
  bizType?: string;
  instanceSpec?: string;
  deductedByCoupons?: number;
  billingItem?: string;
  region?: string;
  outstandingAmount?: number;
  costUnit?: string;
  listPriceUnit?: string;
  resourceGroup?: string;
  pipCode?: string;
  servicePeriodUnit?: string;
  pretaxAmount?: number;
  commodityCode?: string;
  productName?: string;
  nickName?: string;
  productDetail?: string;
  usage?: string;
  intranetIP?: string;
  ownerID?: string;
  deductedByPrepaidCard?: number;
  usageUnit?: string;
  billAccountID?: string;
  paymentAmount?: number;
  invoiceDiscount?: number;
  deductedByResourcePackage?: string;
  productType?: string;
  servicePeriod?: string;
  zone?: string;
  listPrice?: string;
  pretaxGrossAmount?: number;
  productCode?: string;
  billingType?: string;
  static names(): { [key: string]: string } {
    return {
      billingDate: 'BillingDate',
      instanceConfig: 'InstanceConfig',
      internetIP: 'InternetIP',
      item: 'Item',
      tag: 'Tag',
      instanceID: 'InstanceID',
      currency: 'Currency',
      billAccountName: 'BillAccountName',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      subscriptionType: 'SubscriptionType',
      bizType: 'BizType',
      instanceSpec: 'InstanceSpec',
      deductedByCoupons: 'DeductedByCoupons',
      billingItem: 'BillingItem',
      region: 'Region',
      outstandingAmount: 'OutstandingAmount',
      costUnit: 'CostUnit',
      listPriceUnit: 'ListPriceUnit',
      resourceGroup: 'ResourceGroup',
      pipCode: 'PipCode',
      servicePeriodUnit: 'ServicePeriodUnit',
      pretaxAmount: 'PretaxAmount',
      commodityCode: 'CommodityCode',
      productName: 'ProductName',
      nickName: 'NickName',
      productDetail: 'ProductDetail',
      usage: 'Usage',
      intranetIP: 'IntranetIP',
      ownerID: 'OwnerID',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      usageUnit: 'UsageUnit',
      billAccountID: 'BillAccountID',
      paymentAmount: 'PaymentAmount',
      invoiceDiscount: 'InvoiceDiscount',
      deductedByResourcePackage: 'DeductedByResourcePackage',
      productType: 'ProductType',
      servicePeriod: 'ServicePeriod',
      zone: 'Zone',
      listPrice: 'ListPrice',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
      billingType: 'BillingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingDate: 'string',
      instanceConfig: 'string',
      internetIP: 'string',
      item: 'string',
      tag: 'string',
      instanceID: 'string',
      currency: 'string',
      billAccountName: 'string',
      deductedByCashCoupons: 'number',
      subscriptionType: 'string',
      bizType: 'string',
      instanceSpec: 'string',
      deductedByCoupons: 'number',
      billingItem: 'string',
      region: 'string',
      outstandingAmount: 'number',
      costUnit: 'string',
      listPriceUnit: 'string',
      resourceGroup: 'string',
      pipCode: 'string',
      servicePeriodUnit: 'string',
      pretaxAmount: 'number',
      commodityCode: 'string',
      productName: 'string',
      nickName: 'string',
      productDetail: 'string',
      usage: 'string',
      intranetIP: 'string',
      ownerID: 'string',
      deductedByPrepaidCard: 'number',
      usageUnit: 'string',
      billAccountID: 'string',
      paymentAmount: 'number',
      invoiceDiscount: 'number',
      deductedByResourcePackage: 'string',
      productType: 'string',
      servicePeriod: 'string',
      zone: 'string',
      listPrice: 'string',
      pretaxGrossAmount: 'number',
      productCode: 'string',
      billingType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceBillResponseBodyData extends $tea.Model {
  nextToken?: string;
  billingCycle?: string;
  maxResults?: number;
  accountID?: string;
  totalCount?: number;
  accountName?: string;
  items?: DescribeInstanceBillResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      billingCycle: 'BillingCycle',
      maxResults: 'MaxResults',
      accountID: 'AccountID',
      totalCount: 'TotalCount',
      accountName: 'AccountName',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      billingCycle: 'string',
      maxResults: 'number',
      accountID: 'string',
      totalCount: 'number',
      accountName: 'string',
      items: { 'type': 'array', 'itemType': DescribeInstanceBillResponseBodyDataItems },
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
  moduleName?: string;
  priceType?: string;
  currency?: string;
  moduleCode?: string;
  configList?: DescribePricingModuleResponseBodyDataModuleListModuleConfigList;
  static names(): { [key: string]: string } {
    return {
      moduleName: 'ModuleName',
      priceType: 'PriceType',
      currency: 'Currency',
      moduleCode: 'ModuleCode',
      configList: 'ConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleName: 'string',
      priceType: 'string',
      currency: 'string',
      moduleCode: 'string',
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
  value?: string;
  remark?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
      remark: 'Remark',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
      remark: 'string',
      name: 'string',
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

export class DescribeResourceCoverageDetailResponseBodyDataItems extends $tea.Model {
  commodityCode?: string;
  productName?: string;
  totalQuantity?: number;
  regionNo?: string;
  userId?: string;
  commodityName?: string;
  capacityUnit?: string;
  instanceId?: string;
  currency?: string;
  zoneName?: string;
  instanceSpec?: string;
  endTime?: string;
  startTime?: string;
  paymentAmount?: number;
  coveragePercentage?: number;
  region?: string;
  deductQuantity?: number;
  zone?: string;
  userName?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      productName: 'ProductName',
      totalQuantity: 'TotalQuantity',
      regionNo: 'RegionNo',
      userId: 'UserId',
      commodityName: 'CommodityName',
      capacityUnit: 'CapacityUnit',
      instanceId: 'InstanceId',
      currency: 'Currency',
      zoneName: 'ZoneName',
      instanceSpec: 'InstanceSpec',
      endTime: 'EndTime',
      startTime: 'StartTime',
      paymentAmount: 'PaymentAmount',
      coveragePercentage: 'CoveragePercentage',
      region: 'Region',
      deductQuantity: 'DeductQuantity',
      zone: 'Zone',
      userName: 'UserName',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      productName: 'string',
      totalQuantity: 'number',
      regionNo: 'string',
      userId: 'string',
      commodityName: 'string',
      capacityUnit: 'string',
      instanceId: 'string',
      currency: 'string',
      zoneName: 'string',
      instanceSpec: 'string',
      endTime: 'string',
      startTime: 'string',
      paymentAmount: 'number',
      coveragePercentage: 'number',
      region: 'string',
      deductQuantity: 'number',
      zone: 'string',
      userName: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceCoverageDetailResponseBodyData extends $tea.Model {
  nextToken?: string;
  totalCount?: number;
  maxResults?: number;
  items?: DescribeResourceCoverageDetailResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
      maxResults: 'MaxResults',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      totalCount: 'number',
      maxResults: 'number',
      items: { 'type': 'array', 'itemType': DescribeResourceCoverageDetailResponseBodyDataItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceCoverageTotalResponseBodyDataPeriodCoverage extends $tea.Model {
  coveragePercentage?: number;
  period?: string;
  static names(): { [key: string]: string } {
    return {
      coveragePercentage: 'CoveragePercentage',
      period: 'Period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coveragePercentage: 'number',
      period: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceCoverageTotalResponseBodyDataTotalCoverage extends $tea.Model {
  capacityUnit?: string;
  deductQuantity?: number;
  coveragePercentage?: number;
  totalQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      capacityUnit: 'CapacityUnit',
      deductQuantity: 'DeductQuantity',
      coveragePercentage: 'CoveragePercentage',
      totalQuantity: 'TotalQuantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityUnit: 'string',
      deductQuantity: 'number',
      coveragePercentage: 'number',
      totalQuantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceCoverageTotalResponseBodyData extends $tea.Model {
  periodCoverage?: DescribeResourceCoverageTotalResponseBodyDataPeriodCoverage[];
  totalCoverage?: DescribeResourceCoverageTotalResponseBodyDataTotalCoverage;
  static names(): { [key: string]: string } {
    return {
      periodCoverage: 'PeriodCoverage',
      totalCoverage: 'TotalCoverage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodCoverage: { 'type': 'array', 'itemType': DescribeResourceCoverageTotalResponseBodyDataPeriodCoverage },
      totalCoverage: DescribeResourceCoverageTotalResponseBodyDataTotalCoverage,
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
  value?: number;
  name?: string;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      name: 'Name',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'number',
      name: 'string',
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
  code?: string;
  name?: string;
  properties?: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeProperties;
  specifications?: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecifications;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      properties: 'Properties',
      specifications: 'Specifications',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
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
  productType?: string;
  name?: string;
  productCode?: string;
  packageTypes?: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypes;
  static names(): { [key: string]: string } {
    return {
      productType: 'ProductType',
      name: 'Name',
      productCode: 'ProductCode',
      packageTypes: 'PackageTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productType: 'string',
      name: 'string',
      productCode: 'string',
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

export class DescribeResourceUsageDetailResponseBodyDataItems extends $tea.Model {
  status?: string;
  usagePercentage?: number;
  resourceInstanceId?: string;
  totalQuantity?: number;
  reservationCost?: string;
  regionNo?: string;
  userId?: string;
  statusName?: string;
  capacityUnit?: string;
  potentialSavedCost?: string;
  currency?: string;
  zoneName?: string;
  instanceSpec?: string;
  endTime?: string;
  postpaidCost?: string;
  imageType?: string;
  startTime?: string;
  region?: string;
  deductQuantity?: number;
  savedCost?: string;
  zone?: string;
  userName?: string;
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      usagePercentage: 'UsagePercentage',
      resourceInstanceId: 'ResourceInstanceId',
      totalQuantity: 'TotalQuantity',
      reservationCost: 'ReservationCost',
      regionNo: 'RegionNo',
      userId: 'UserId',
      statusName: 'StatusName',
      capacityUnit: 'CapacityUnit',
      potentialSavedCost: 'PotentialSavedCost',
      currency: 'Currency',
      zoneName: 'ZoneName',
      instanceSpec: 'InstanceSpec',
      endTime: 'EndTime',
      postpaidCost: 'PostpaidCost',
      imageType: 'ImageType',
      startTime: 'StartTime',
      region: 'Region',
      deductQuantity: 'DeductQuantity',
      savedCost: 'SavedCost',
      zone: 'Zone',
      userName: 'UserName',
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      usagePercentage: 'number',
      resourceInstanceId: 'string',
      totalQuantity: 'number',
      reservationCost: 'string',
      regionNo: 'string',
      userId: 'string',
      statusName: 'string',
      capacityUnit: 'string',
      potentialSavedCost: 'string',
      currency: 'string',
      zoneName: 'string',
      instanceSpec: 'string',
      endTime: 'string',
      postpaidCost: 'string',
      imageType: 'string',
      startTime: 'string',
      region: 'string',
      deductQuantity: 'number',
      savedCost: 'string',
      zone: 'string',
      userName: 'string',
      quantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageDetailResponseBodyData extends $tea.Model {
  nextToken?: string;
  totalCount?: number;
  maxResults?: number;
  items?: DescribeResourceUsageDetailResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
      maxResults: 'MaxResults',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      totalCount: 'number',
      maxResults: 'number',
      items: { 'type': 'array', 'itemType': DescribeResourceUsageDetailResponseBodyDataItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageTotalResponseBodyDataPeriodCoverage extends $tea.Model {
  usagePercentage?: number;
  period?: string;
  static names(): { [key: string]: string } {
    return {
      usagePercentage: 'UsagePercentage',
      period: 'Period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usagePercentage: 'number',
      period: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageTotalResponseBodyDataTotalUsage extends $tea.Model {
  postpaidCost?: number;
  savedCost?: number;
  usagePercentage?: number;
  potentialSavedCost?: number;
  reservationCost?: number;
  static names(): { [key: string]: string } {
    return {
      postpaidCost: 'PostpaidCost',
      savedCost: 'SavedCost',
      usagePercentage: 'UsagePercentage',
      potentialSavedCost: 'PotentialSavedCost',
      reservationCost: 'ReservationCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      postpaidCost: 'number',
      savedCost: 'number',
      usagePercentage: 'number',
      potentialSavedCost: 'number',
      reservationCost: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageTotalResponseBodyData extends $tea.Model {
  periodCoverage?: DescribeResourceUsageTotalResponseBodyDataPeriodCoverage[];
  totalUsage?: DescribeResourceUsageTotalResponseBodyDataTotalUsage;
  static names(): { [key: string]: string } {
    return {
      periodCoverage: 'PeriodCoverage',
      totalUsage: 'TotalUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodCoverage: { 'type': 'array', 'itemType': DescribeResourceUsageTotalResponseBodyDataPeriodCoverage },
      totalUsage: DescribeResourceUsageTotalResponseBodyDataTotalUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansCoverageDetailResponseBodyDataItems extends $tea.Model {
  userId?: number;
  instanceId?: string;
  currency?: string;
  instanceSpec?: string;
  postpaidCost?: number;
  coveragePercentage?: number;
  region?: string;
  deductAmount?: number;
  startPeriod?: string;
  totalAmount?: number;
  userName?: string;
  endPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      instanceId: 'InstanceId',
      currency: 'Currency',
      instanceSpec: 'InstanceSpec',
      postpaidCost: 'PostpaidCost',
      coveragePercentage: 'CoveragePercentage',
      region: 'Region',
      deductAmount: 'DeductAmount',
      startPeriod: 'StartPeriod',
      totalAmount: 'TotalAmount',
      userName: 'UserName',
      endPeriod: 'EndPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'number',
      instanceId: 'string',
      currency: 'string',
      instanceSpec: 'string',
      postpaidCost: 'number',
      coveragePercentage: 'number',
      region: 'string',
      deductAmount: 'number',
      startPeriod: 'string',
      totalAmount: 'number',
      userName: 'string',
      endPeriod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansCoverageDetailResponseBodyData extends $tea.Model {
  totalCount?: number;
  nextToken?: string;
  items?: DescribeSavingsPlansCoverageDetailResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      nextToken: 'NextToken',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      nextToken: 'string',
      items: { 'type': 'array', 'itemType': DescribeSavingsPlansCoverageDetailResponseBodyDataItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansCoverageTotalResponseBodyDataPeriodCoverage extends $tea.Model {
  percentage?: number;
  period?: string;
  static names(): { [key: string]: string } {
    return {
      percentage: 'Percentage',
      period: 'Period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      percentage: 'number',
      period: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansCoverageTotalResponseBodyDataTotalCoverage extends $tea.Model {
  coveragePercentage?: number;
  deductAmount?: number;
  static names(): { [key: string]: string } {
    return {
      coveragePercentage: 'CoveragePercentage',
      deductAmount: 'DeductAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coveragePercentage: 'number',
      deductAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansCoverageTotalResponseBodyData extends $tea.Model {
  periodCoverage?: DescribeSavingsPlansCoverageTotalResponseBodyDataPeriodCoverage[];
  totalCoverage?: DescribeSavingsPlansCoverageTotalResponseBodyDataTotalCoverage;
  static names(): { [key: string]: string } {
    return {
      periodCoverage: 'PeriodCoverage',
      totalCoverage: 'TotalCoverage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodCoverage: { 'type': 'array', 'itemType': DescribeSavingsPlansCoverageTotalResponseBodyDataPeriodCoverage },
      totalCoverage: DescribeSavingsPlansCoverageTotalResponseBodyDataTotalCoverage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansUsageDetailResponseBodyDataItems extends $tea.Model {
  status?: string;
  type?: string;
  usagePercentage?: number;
  userId?: number;
  instanceId?: string;
  currency?: string;
  postpaidCost?: number;
  deductValue?: number;
  startPeriod?: string;
  savedCost?: number;
  poolValue?: number;
  userName?: string;
  endPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      usagePercentage: 'UsagePercentage',
      userId: 'UserId',
      instanceId: 'InstanceId',
      currency: 'Currency',
      postpaidCost: 'PostpaidCost',
      deductValue: 'DeductValue',
      startPeriod: 'StartPeriod',
      savedCost: 'SavedCost',
      poolValue: 'PoolValue',
      userName: 'UserName',
      endPeriod: 'EndPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      usagePercentage: 'number',
      userId: 'number',
      instanceId: 'string',
      currency: 'string',
      postpaidCost: 'number',
      deductValue: 'number',
      startPeriod: 'string',
      savedCost: 'number',
      poolValue: 'number',
      userName: 'string',
      endPeriod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansUsageDetailResponseBodyData extends $tea.Model {
  totalCount?: number;
  nextToken?: string;
  items?: DescribeSavingsPlansUsageDetailResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      nextToken: 'NextToken',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      nextToken: 'string',
      items: { 'type': 'array', 'itemType': DescribeSavingsPlansUsageDetailResponseBodyDataItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansUsageTotalResponseBodyDataPeriodCoverage extends $tea.Model {
  percentage?: number;
  period?: string;
  static names(): { [key: string]: string } {
    return {
      percentage: 'Percentage',
      period: 'Period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      percentage: 'number',
      period: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansUsageTotalResponseBodyDataTotalUsage extends $tea.Model {
  postpaidCost?: number;
  savedCost?: number;
  usagePercentage?: number;
  poolValue?: number;
  static names(): { [key: string]: string } {
    return {
      postpaidCost: 'PostpaidCost',
      savedCost: 'SavedCost',
      usagePercentage: 'UsagePercentage',
      poolValue: 'PoolValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      postpaidCost: 'number',
      savedCost: 'number',
      usagePercentage: 'number',
      poolValue: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansUsageTotalResponseBodyData extends $tea.Model {
  periodCoverage?: DescribeSavingsPlansUsageTotalResponseBodyDataPeriodCoverage[];
  totalUsage?: DescribeSavingsPlansUsageTotalResponseBodyDataTotalUsage;
  static names(): { [key: string]: string } {
    return {
      periodCoverage: 'PeriodCoverage',
      totalUsage: 'TotalUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodCoverage: { 'type': 'array', 'itemType': DescribeSavingsPlansUsageTotalResponseBodyDataPeriodCoverage },
      totalUsage: DescribeSavingsPlansUsageTotalResponseBodyDataTotalUsage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSplitItemBillRequestTagFilter extends $tea.Model {
  tagValues?: string[];
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagValues: 'TagValues',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValues: { 'type': 'array', 'itemType': 'string' },
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSplitItemBillResponseBodyDataItems extends $tea.Model {
  splitAccountID?: string;
  billAccountName?: string;
  subscriptionType?: string;
  instanceSpec?: string;
  deductedByCoupons?: number;
  region?: string;
  outstandingAmount?: number;
  pipCode?: string;
  commodityCode?: string;
  nickName?: string;
  productDetail?: string;
  usage?: string;
  intranetIP?: string;
  usageUnit?: string;
  splitCommodityCode?: string;
  billAccountID?: string;
  productType?: string;
  deductedByResourcePackage?: string;
  paymentAmount?: number;
  splitBillingCycle?: string;
  servicePeriod?: string;
  splitItemName?: string;
  listPrice?: string;
  zone?: string;
  pretaxGrossAmount?: number;
  instanceConfig?: string;
  billingDate?: string;
  internetIP?: string;
  item?: string;
  splitItemID?: string;
  instanceID?: string;
  tag?: string;
  currency?: string;
  deductedByCashCoupons?: number;
  bizType?: string;
  billingItem?: string;
  costUnit?: string;
  listPriceUnit?: string;
  resourceGroup?: string;
  pretaxAmount?: number;
  servicePeriodUnit?: string;
  splitBillingDate?: string;
  productName?: string;
  splitProductDetail?: string;
  ownerID?: string;
  deductedByPrepaidCard?: number;
  invoiceDiscount?: number;
  splitAccountName?: string;
  billingType?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      splitAccountID: 'SplitAccountID',
      billAccountName: 'BillAccountName',
      subscriptionType: 'SubscriptionType',
      instanceSpec: 'InstanceSpec',
      deductedByCoupons: 'DeductedByCoupons',
      region: 'Region',
      outstandingAmount: 'OutstandingAmount',
      pipCode: 'PipCode',
      commodityCode: 'CommodityCode',
      nickName: 'NickName',
      productDetail: 'ProductDetail',
      usage: 'Usage',
      intranetIP: 'IntranetIP',
      usageUnit: 'UsageUnit',
      splitCommodityCode: 'SplitCommodityCode',
      billAccountID: 'BillAccountID',
      productType: 'ProductType',
      deductedByResourcePackage: 'DeductedByResourcePackage',
      paymentAmount: 'PaymentAmount',
      splitBillingCycle: 'SplitBillingCycle',
      servicePeriod: 'ServicePeriod',
      splitItemName: 'SplitItemName',
      listPrice: 'ListPrice',
      zone: 'Zone',
      pretaxGrossAmount: 'PretaxGrossAmount',
      instanceConfig: 'InstanceConfig',
      billingDate: 'BillingDate',
      internetIP: 'InternetIP',
      item: 'Item',
      splitItemID: 'SplitItemID',
      instanceID: 'InstanceID',
      tag: 'Tag',
      currency: 'Currency',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      bizType: 'BizType',
      billingItem: 'BillingItem',
      costUnit: 'CostUnit',
      listPriceUnit: 'ListPriceUnit',
      resourceGroup: 'ResourceGroup',
      pretaxAmount: 'PretaxAmount',
      servicePeriodUnit: 'ServicePeriodUnit',
      splitBillingDate: 'SplitBillingDate',
      productName: 'ProductName',
      splitProductDetail: 'SplitProductDetail',
      ownerID: 'OwnerID',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      invoiceDiscount: 'InvoiceDiscount',
      splitAccountName: 'SplitAccountName',
      billingType: 'BillingType',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      splitAccountID: 'string',
      billAccountName: 'string',
      subscriptionType: 'string',
      instanceSpec: 'string',
      deductedByCoupons: 'number',
      region: 'string',
      outstandingAmount: 'number',
      pipCode: 'string',
      commodityCode: 'string',
      nickName: 'string',
      productDetail: 'string',
      usage: 'string',
      intranetIP: 'string',
      usageUnit: 'string',
      splitCommodityCode: 'string',
      billAccountID: 'string',
      productType: 'string',
      deductedByResourcePackage: 'string',
      paymentAmount: 'number',
      splitBillingCycle: 'string',
      servicePeriod: 'string',
      splitItemName: 'string',
      listPrice: 'string',
      zone: 'string',
      pretaxGrossAmount: 'number',
      instanceConfig: 'string',
      billingDate: 'string',
      internetIP: 'string',
      item: 'string',
      splitItemID: 'string',
      instanceID: 'string',
      tag: 'string',
      currency: 'string',
      deductedByCashCoupons: 'number',
      bizType: 'string',
      billingItem: 'string',
      costUnit: 'string',
      listPriceUnit: 'string',
      resourceGroup: 'string',
      pretaxAmount: 'number',
      servicePeriodUnit: 'string',
      splitBillingDate: 'string',
      productName: 'string',
      splitProductDetail: 'string',
      ownerID: 'string',
      deductedByPrepaidCard: 'number',
      invoiceDiscount: 'number',
      splitAccountName: 'string',
      billingType: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSplitItemBillResponseBodyData extends $tea.Model {
  nextToken?: string;
  billingCycle?: string;
  maxResults?: number;
  accountID?: string;
  totalCount?: number;
  accountName?: string;
  items?: DescribeSplitItemBillResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      billingCycle: 'BillingCycle',
      maxResults: 'MaxResults',
      accountID: 'AccountID',
      totalCount: 'TotalCount',
      accountName: 'AccountName',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      billingCycle: 'string',
      maxResults: 'number',
      accountID: 'string',
      totalCount: 'number',
      accountName: 'string',
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
  mpk?: number;
  loginEmail?: string;
  hostingStatus?: string;
  accountType?: string;
  creditLimitStatus?: string;
  isCertified?: boolean;
  static names(): { [key: string]: string } {
    return {
      mpk: 'Mpk',
      loginEmail: 'LoginEmail',
      hostingStatus: 'HostingStatus',
      accountType: 'AccountType',
      creditLimitStatus: 'CreditLimitStatus',
      isCertified: 'IsCertified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mpk: 'number',
      loginEmail: 'string',
      hostingStatus: 'string',
      accountType: 'string',
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
  orderSubType?: string;
  createTime?: string;
  currency?: string;
  config?: string;
  subscriptionType?: string;
  usageStartTime?: string;
  usageEndTime?: string;
  subOrderId?: string;
  region?: string;
  afterTaxAmount?: string;
  paymentTime?: string;
  operator?: string;
  orderType?: string;
  paymentStatus?: string;
  quantity?: string;
  pretaxAmountLocal?: string;
  tax?: string;
  originalConfig?: string;
  pretaxAmount?: string;
  commodityCode?: string;
  relatedOrderId?: string;
  paymentCurrency?: string;
  productType?: string;
  instanceIDs?: string;
  pretaxGrossAmount?: string;
  orderId?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      orderSubType: 'OrderSubType',
      createTime: 'CreateTime',
      currency: 'Currency',
      config: 'Config',
      subscriptionType: 'SubscriptionType',
      usageStartTime: 'UsageStartTime',
      usageEndTime: 'UsageEndTime',
      subOrderId: 'SubOrderId',
      region: 'Region',
      afterTaxAmount: 'AfterTaxAmount',
      paymentTime: 'PaymentTime',
      operator: 'Operator',
      orderType: 'OrderType',
      paymentStatus: 'PaymentStatus',
      quantity: 'Quantity',
      pretaxAmountLocal: 'PretaxAmountLocal',
      tax: 'Tax',
      originalConfig: 'OriginalConfig',
      pretaxAmount: 'PretaxAmount',
      commodityCode: 'CommodityCode',
      relatedOrderId: 'RelatedOrderId',
      paymentCurrency: 'PaymentCurrency',
      productType: 'ProductType',
      instanceIDs: 'InstanceIDs',
      pretaxGrossAmount: 'PretaxGrossAmount',
      orderId: 'OrderId',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderSubType: 'string',
      createTime: 'string',
      currency: 'string',
      config: 'string',
      subscriptionType: 'string',
      usageStartTime: 'string',
      usageEndTime: 'string',
      subOrderId: 'string',
      region: 'string',
      afterTaxAmount: 'string',
      paymentTime: 'string',
      operator: 'string',
      orderType: 'string',
      paymentStatus: 'string',
      quantity: 'string',
      pretaxAmountLocal: 'string',
      tax: 'string',
      originalConfig: 'string',
      pretaxAmount: 'string',
      commodityCode: 'string',
      relatedOrderId: 'string',
      paymentCurrency: 'string',
      productType: 'string',
      instanceIDs: 'string',
      pretaxGrossAmount: 'string',
      orderId: 'string',
      productCode: 'string',
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
  hostName?: string;
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  orderList?: GetOrderDetailResponseBodyDataOrderList;
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
      orderList: GetOrderDetailResponseBodyDataOrderList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayAsYouGoPriceRequestModuleList extends $tea.Model {
  moduleCode?: string;
  priceType?: string;
  config?: string;
  static names(): { [key: string]: string } {
    return {
      moduleCode: 'ModuleCode',
      priceType: 'PriceType',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleCode: 'string',
      priceType: 'string',
      config: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayAsYouGoPriceResponseBodyDataModuleDetailsModuleDetail extends $tea.Model {
  costAfterDiscount?: number;
  invoiceDiscount?: number;
  unitPrice?: number;
  originalCost?: number;
  moduleCode?: string;
  static names(): { [key: string]: string } {
    return {
      costAfterDiscount: 'CostAfterDiscount',
      invoiceDiscount: 'InvoiceDiscount',
      unitPrice: 'UnitPrice',
      originalCost: 'OriginalCost',
      moduleCode: 'ModuleCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costAfterDiscount: 'number',
      invoiceDiscount: 'number',
      unitPrice: 'number',
      originalCost: 'number',
      moduleCode: 'string',
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
  promotionDesc?: string;
  promotionId?: number;
  promotionName?: string;
  static names(): { [key: string]: string } {
    return {
      promotionDesc: 'PromotionDesc',
      promotionId: 'PromotionId',
      promotionName: 'PromotionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionDesc: 'string',
      promotionId: 'number',
      promotionName: 'string',
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
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      id: 'number',
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
  originalPrice?: number;
  discountPrice?: number;
  currency?: string;
  tradePrice?: number;
  promotions?: GetResourcePackagePriceResponseBodyDataPromotions;
  static names(): { [key: string]: string } {
    return {
      originalPrice: 'OriginalPrice',
      discountPrice: 'DiscountPrice',
      currency: 'Currency',
      tradePrice: 'TradePrice',
      promotions: 'Promotions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalPrice: 'number',
      discountPrice: 'number',
      currency: 'string',
      tradePrice: 'number',
      promotions: GetResourcePackagePriceResponseBodyDataPromotions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionPriceRequestModuleList extends $tea.Model {
  moduleStatus?: number;
  moduleCode?: string;
  tag?: string;
  config?: string;
  static names(): { [key: string]: string } {
    return {
      moduleStatus: 'ModuleStatus',
      moduleCode: 'ModuleCode',
      tag: 'Tag',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleStatus: 'number',
      moduleCode: 'string',
      tag: 'string',
      config: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionPriceResponseBodyDataModuleDetailsModuleDetail extends $tea.Model {
  costAfterDiscount?: number;
  invoiceDiscount?: number;
  unitPrice?: number;
  originalCost?: number;
  moduleCode?: string;
  static names(): { [key: string]: string } {
    return {
      costAfterDiscount: 'CostAfterDiscount',
      invoiceDiscount: 'InvoiceDiscount',
      unitPrice: 'UnitPrice',
      originalCost: 'OriginalCost',
      moduleCode: 'ModuleCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costAfterDiscount: 'number',
      invoiceDiscount: 'number',
      unitPrice: 'number',
      originalCost: 'number',
      moduleCode: 'string',
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
  promotionDesc?: string;
  promotionId?: number;
  promotionName?: string;
  static names(): { [key: string]: string } {
    return {
      promotionDesc: 'PromotionDesc',
      promotionId: 'PromotionId',
      promotionName: 'PromotionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionDesc: 'string',
      promotionId: 'number',
      promotionName: 'string',
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
  currency?: string;
  quantity?: number;
  tradePrice?: number;
  moduleDetails?: GetSubscriptionPriceResponseBodyDataModuleDetails;
  promotionDetails?: GetSubscriptionPriceResponseBodyDataPromotionDetails;
  static names(): { [key: string]: string } {
    return {
      originalPrice: 'OriginalPrice',
      discountPrice: 'DiscountPrice',
      currency: 'Currency',
      quantity: 'Quantity',
      tradePrice: 'TradePrice',
      moduleDetails: 'ModuleDetails',
      promotionDetails: 'PromotionDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalPrice: 'number',
      discountPrice: 'number',
      currency: 'string',
      quantity: 'number',
      tradePrice: 'number',
      moduleDetails: GetSubscriptionPriceResponseBodyDataModuleDetails,
      promotionDetails: GetSubscriptionPriceResponseBodyDataPromotionDetails,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountRelationResponseBodyData extends $tea.Model {
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

export class ModifyCostUnitRequestUnitEntityList extends $tea.Model {
  unitId?: number;
  newUnitName?: string;
  ownerUid?: number;
  static names(): { [key: string]: string } {
    return {
      unitId: 'UnitId',
      newUnitName: 'NewUnitName',
      ownerUid: 'OwnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unitId: 'number',
      newUnitName: 'string',
      ownerUid: 'number',
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
  value?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceResponseBodyData extends $tea.Model {
  orderId?: string;
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      hostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountBalanceResponseBodyData extends $tea.Model {
  availableAmount?: string;
  creditAmount?: string;
  mybankCreditAmount?: string;
  currency?: string;
  availableCashAmount?: string;
  static names(): { [key: string]: string } {
    return {
      availableAmount: 'AvailableAmount',
      creditAmount: 'CreditAmount',
      mybankCreditAmount: 'MybankCreditAmount',
      currency: 'Currency',
      availableCashAmount: 'AvailableCashAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAmount: 'string',
      creditAmount: 'string',
      mybankCreditAmount: 'string',
      currency: 'string',
      availableCashAmount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountBillResponseBodyDataItemsItem extends $tea.Model {
  pipCode?: string;
  pretaxAmount?: number;
  billingDate?: string;
  productName?: string;
  ownerName?: string;
  currency?: string;
  billAccountName?: string;
  subscriptionType?: string;
  deductedByCashCoupons?: number;
  bizType?: string;
  ownerID?: string;
  deductedByPrepaidCard?: number;
  deductedByCoupons?: number;
  billAccountID?: string;
  paymentAmount?: number;
  invoiceDiscount?: number;
  outstandingAmount?: number;
  costUnit?: string;
  pretaxGrossAmount?: number;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      pipCode: 'PipCode',
      pretaxAmount: 'PretaxAmount',
      billingDate: 'BillingDate',
      productName: 'ProductName',
      ownerName: 'OwnerName',
      currency: 'Currency',
      billAccountName: 'BillAccountName',
      subscriptionType: 'SubscriptionType',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      bizType: 'BizType',
      ownerID: 'OwnerID',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      deductedByCoupons: 'DeductedByCoupons',
      billAccountID: 'BillAccountID',
      paymentAmount: 'PaymentAmount',
      invoiceDiscount: 'InvoiceDiscount',
      outstandingAmount: 'OutstandingAmount',
      costUnit: 'CostUnit',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipCode: 'string',
      pretaxAmount: 'number',
      billingDate: 'string',
      productName: 'string',
      ownerName: 'string',
      currency: 'string',
      billAccountName: 'string',
      subscriptionType: 'string',
      deductedByCashCoupons: 'number',
      bizType: 'string',
      ownerID: 'string',
      deductedByPrepaidCard: 'number',
      deductedByCoupons: 'number',
      billAccountID: 'string',
      paymentAmount: 'number',
      invoiceDiscount: 'number',
      outstandingAmount: 'number',
      costUnit: 'string',
      pretaxGrossAmount: 'number',
      productCode: 'string',
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
  pageNum?: number;
  billingCycle?: string;
  accountID?: string;
  pageSize?: number;
  totalCount?: number;
  accountName?: string;
  items?: QueryAccountBillResponseBodyDataItems;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      billingCycle: 'BillingCycle',
      accountID: 'AccountID',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      accountName: 'AccountName',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      billingCycle: 'string',
      accountID: 'string',
      pageSize: 'number',
      totalCount: 'number',
      accountName: 'string',
      items: QueryAccountBillResponseBodyDataItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTransactionDetailsResponseBodyDataAccountTransactionsListAccountTransactionsList extends $tea.Model {
  billingCycle?: string;
  transactionChannel?: string;
  recordID?: string;
  remarks?: string;
  amount?: string;
  transactionAccount?: string;
  transactionTime?: string;
  transactionType?: string;
  transactionFlow?: string;
  fundType?: string;
  transactionChannelSN?: string;
  transactionNumber?: string;
  balance?: string;
  static names(): { [key: string]: string } {
    return {
      billingCycle: 'BillingCycle',
      transactionChannel: 'TransactionChannel',
      recordID: 'RecordID',
      remarks: 'Remarks',
      amount: 'Amount',
      transactionAccount: 'TransactionAccount',
      transactionTime: 'TransactionTime',
      transactionType: 'TransactionType',
      transactionFlow: 'TransactionFlow',
      fundType: 'FundType',
      transactionChannelSN: 'TransactionChannelSN',
      transactionNumber: 'TransactionNumber',
      balance: 'Balance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingCycle: 'string',
      transactionChannel: 'string',
      recordID: 'string',
      remarks: 'string',
      amount: 'string',
      transactionAccount: 'string',
      transactionTime: 'string',
      transactionType: 'string',
      transactionFlow: 'string',
      fundType: 'string',
      transactionChannelSN: 'string',
      transactionNumber: 'string',
      balance: 'string',
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
  nextToken?: string;
  totalCount?: number;
  maxResults?: number;
  accountName?: string;
  accountTransactionsList?: QueryAccountTransactionDetailsResponseBodyDataAccountTransactionsList;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
      maxResults: 'MaxResults',
      accountName: 'AccountName',
      accountTransactionsList: 'AccountTransactionsList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      totalCount: 'number',
      maxResults: 'number',
      accountName: 'string',
      accountTransactionsList: QueryAccountTransactionDetailsResponseBodyDataAccountTransactionsList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTransactionsResponseBodyDataAccountTransactionsListAccountTransactionsList extends $tea.Model {
  billingCycle?: string;
  transactionChannel?: string;
  recordID?: string;
  remarks?: string;
  amount?: string;
  transactionAccount?: string;
  transactionTime?: string;
  transactionType?: string;
  transactionFlow?: string;
  fundType?: string;
  transactionChannelSN?: string;
  transactionNumber?: string;
  balance?: string;
  static names(): { [key: string]: string } {
    return {
      billingCycle: 'BillingCycle',
      transactionChannel: 'TransactionChannel',
      recordID: 'RecordID',
      remarks: 'Remarks',
      amount: 'Amount',
      transactionAccount: 'TransactionAccount',
      transactionTime: 'TransactionTime',
      transactionType: 'TransactionType',
      transactionFlow: 'TransactionFlow',
      fundType: 'FundType',
      transactionChannelSN: 'TransactionChannelSN',
      transactionNumber: 'TransactionNumber',
      balance: 'Balance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingCycle: 'string',
      transactionChannel: 'string',
      recordID: 'string',
      remarks: 'string',
      amount: 'string',
      transactionAccount: 'string',
      transactionTime: 'string',
      transactionType: 'string',
      transactionFlow: 'string',
      fundType: 'string',
      transactionChannelSN: 'string',
      transactionNumber: 'string',
      balance: 'string',
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
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  accountName?: string;
  accountTransactionsList?: QueryAccountTransactionsResponseBodyDataAccountTransactionsList;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      accountName: 'AccountName',
      accountTransactionsList: 'AccountTransactionsList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
      accountName: 'string',
      accountTransactionsList: QueryAccountTransactionsResponseBodyDataAccountTransactionsList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvailableInstancesResponseBodyDataInstanceList extends $tea.Model {
  subStatus?: string;
  status?: string;
  expectedReleaseTime?: string;
  renewStatus?: string;
  createTime?: string;
  sellerId?: number;
  instanceID?: string;
  seller?: string;
  stopTime?: string;
  renewalDurationUnit?: string;
  subscriptionType?: string;
  ownerId?: number;
  endTime?: string;
  productType?: string;
  region?: string;
  releaseTime?: string;
  renewalDuration?: number;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      subStatus: 'SubStatus',
      status: 'Status',
      expectedReleaseTime: 'ExpectedReleaseTime',
      renewStatus: 'RenewStatus',
      createTime: 'CreateTime',
      sellerId: 'SellerId',
      instanceID: 'InstanceID',
      seller: 'Seller',
      stopTime: 'StopTime',
      renewalDurationUnit: 'RenewalDurationUnit',
      subscriptionType: 'SubscriptionType',
      ownerId: 'OwnerId',
      endTime: 'EndTime',
      productType: 'ProductType',
      region: 'Region',
      releaseTime: 'ReleaseTime',
      renewalDuration: 'RenewalDuration',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subStatus: 'string',
      status: 'string',
      expectedReleaseTime: 'string',
      renewStatus: 'string',
      createTime: 'string',
      sellerId: 'number',
      instanceID: 'string',
      seller: 'string',
      stopTime: 'string',
      renewalDurationUnit: 'string',
      subscriptionType: 'string',
      ownerId: 'number',
      endTime: 'string',
      productType: 'string',
      region: 'string',
      releaseTime: 'string',
      renewalDuration: 'number',
      productCode: 'string',
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
  status?: string;
  roundDownDiscount?: string;
  item?: string;
  currency?: string;
  usageStartTime?: string;
  subscriptionType?: string;
  deductedByCashCoupons?: number;
  usageEndTime?: string;
  deductedByCoupons?: number;
  subOrderId?: string;
  outstandingAmount?: number;
  afterTaxAmount?: number;
  paymentTime?: string;
  pretaxAmountLocal?: number;
  tax?: number;
  pipCode?: string;
  paymentTransactionID?: string;
  pretaxAmount?: number;
  commodityCode?: string;
  productName?: string;
  recordID?: string;
  productDetail?: string;
  paymentCurrency?: string;
  ownerID?: string;
  deductedByPrepaidCard?: number;
  productType?: string;
  invoiceDiscount?: number;
  paymentAmount?: number;
  pretaxGrossAmount?: number;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      roundDownDiscount: 'RoundDownDiscount',
      item: 'Item',
      currency: 'Currency',
      usageStartTime: 'UsageStartTime',
      subscriptionType: 'SubscriptionType',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      usageEndTime: 'UsageEndTime',
      deductedByCoupons: 'DeductedByCoupons',
      subOrderId: 'SubOrderId',
      outstandingAmount: 'OutstandingAmount',
      afterTaxAmount: 'AfterTaxAmount',
      paymentTime: 'PaymentTime',
      pretaxAmountLocal: 'PretaxAmountLocal',
      tax: 'Tax',
      pipCode: 'PipCode',
      paymentTransactionID: 'PaymentTransactionID',
      pretaxAmount: 'PretaxAmount',
      commodityCode: 'CommodityCode',
      productName: 'ProductName',
      recordID: 'RecordID',
      productDetail: 'ProductDetail',
      paymentCurrency: 'PaymentCurrency',
      ownerID: 'OwnerID',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      productType: 'ProductType',
      invoiceDiscount: 'InvoiceDiscount',
      paymentAmount: 'PaymentAmount',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      roundDownDiscount: 'string',
      item: 'string',
      currency: 'string',
      usageStartTime: 'string',
      subscriptionType: 'string',
      deductedByCashCoupons: 'number',
      usageEndTime: 'string',
      deductedByCoupons: 'number',
      subOrderId: 'string',
      outstandingAmount: 'number',
      afterTaxAmount: 'number',
      paymentTime: 'string',
      pretaxAmountLocal: 'number',
      tax: 'number',
      pipCode: 'string',
      paymentTransactionID: 'string',
      pretaxAmount: 'number',
      commodityCode: 'string',
      productName: 'string',
      recordID: 'string',
      productDetail: 'string',
      paymentCurrency: 'string',
      ownerID: 'string',
      deductedByPrepaidCard: 'number',
      productType: 'string',
      invoiceDiscount: 'number',
      paymentAmount: 'number',
      pretaxGrossAmount: 'number',
      productCode: 'string',
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
  pageNum?: number;
  billingCycle?: string;
  accountID?: string;
  pageSize?: number;
  totalCount?: number;
  accountName?: string;
  items?: QueryBillResponseBodyDataItems;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      billingCycle: 'BillingCycle',
      accountID: 'AccountID',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      accountName: 'AccountName',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      billingCycle: 'string',
      accountID: 'string',
      pageSize: 'number',
      totalCount: 'number',
      accountName: 'string',
      items: QueryBillResponseBodyDataItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillOverviewResponseBodyDataItemsItem extends $tea.Model {
  roundDownDiscount?: string;
  item?: string;
  currency?: string;
  subscriptionType?: string;
  deductedByCashCoupons?: number;
  billAccountName?: string;
  bizType?: string;
  deductedByCoupons?: number;
  outstandingAmount?: number;
  afterTaxAmount?: number;
  pretaxAmountLocal?: number;
  tax?: number;
  pipCode?: string;
  pretaxAmount?: number;
  productName?: string;
  commodityCode?: string;
  productDetail?: string;
  paymentCurrency?: string;
  ownerID?: string;
  deductedByPrepaidCard?: number;
  productType?: string;
  invoiceDiscount?: number;
  paymentAmount?: number;
  billAccountID?: string;
  pretaxGrossAmount?: number;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      roundDownDiscount: 'RoundDownDiscount',
      item: 'Item',
      currency: 'Currency',
      subscriptionType: 'SubscriptionType',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      billAccountName: 'BillAccountName',
      bizType: 'BizType',
      deductedByCoupons: 'DeductedByCoupons',
      outstandingAmount: 'OutstandingAmount',
      afterTaxAmount: 'AfterTaxAmount',
      pretaxAmountLocal: 'PretaxAmountLocal',
      tax: 'Tax',
      pipCode: 'PipCode',
      pretaxAmount: 'PretaxAmount',
      productName: 'ProductName',
      commodityCode: 'CommodityCode',
      productDetail: 'ProductDetail',
      paymentCurrency: 'PaymentCurrency',
      ownerID: 'OwnerID',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      productType: 'ProductType',
      invoiceDiscount: 'InvoiceDiscount',
      paymentAmount: 'PaymentAmount',
      billAccountID: 'BillAccountID',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roundDownDiscount: 'string',
      item: 'string',
      currency: 'string',
      subscriptionType: 'string',
      deductedByCashCoupons: 'number',
      billAccountName: 'string',
      bizType: 'string',
      deductedByCoupons: 'number',
      outstandingAmount: 'number',
      afterTaxAmount: 'number',
      pretaxAmountLocal: 'number',
      tax: 'number',
      pipCode: 'string',
      pretaxAmount: 'number',
      productName: 'string',
      commodityCode: 'string',
      productDetail: 'string',
      paymentCurrency: 'string',
      ownerID: 'string',
      deductedByPrepaidCard: 'number',
      productType: 'string',
      invoiceDiscount: 'number',
      paymentAmount: 'number',
      billAccountID: 'string',
      pretaxGrossAmount: 'number',
      productCode: 'string',
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
  bucketOwnerId?: number;
  subscribeType?: string;
  subscribeBucket?: string;
  subscribeTime?: string;
  subscribeLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      bucketOwnerId: 'BucketOwnerId',
      subscribeType: 'SubscribeType',
      subscribeBucket: 'SubscribeBucket',
      subscribeTime: 'SubscribeTime',
      subscribeLanguage: 'SubscribeLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketOwnerId: 'number',
      subscribeType: 'string',
      subscribeBucket: 'string',
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
  accountName?: string;
  accountID?: string;
  items?: QueryBillToOSSSubscriptionResponseBodyDataItems;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountID: 'AccountID',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountID: 'string',
      items: QueryBillToOSSSubscriptionResponseBodyDataItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCashCouponsResponseBodyDataCashCoupon extends $tea.Model {
  status?: string;
  expiryTime?: string;
  grantedTime?: string;
  nominalValue?: string;
  effectiveTime?: string;
  applicableScenarios?: string;
  cashCouponId?: number;
  applicableProducts?: string;
  cashCouponNo?: string;
  balance?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      expiryTime: 'ExpiryTime',
      grantedTime: 'GrantedTime',
      nominalValue: 'NominalValue',
      effectiveTime: 'EffectiveTime',
      applicableScenarios: 'ApplicableScenarios',
      cashCouponId: 'CashCouponId',
      applicableProducts: 'ApplicableProducts',
      cashCouponNo: 'CashCouponNo',
      balance: 'Balance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      expiryTime: 'string',
      grantedTime: 'string',
      nominalValue: 'string',
      effectiveTime: 'string',
      applicableScenarios: 'string',
      cashCouponId: 'number',
      applicableProducts: 'string',
      cashCouponNo: 'string',
      balance: 'string',
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
  parentUnitId?: number;
  unitName?: string;
  unitId?: number;
  ownerUid?: number;
  static names(): { [key: string]: string } {
    return {
      parentUnitId: 'ParentUnitId',
      unitName: 'UnitName',
      unitId: 'UnitId',
      ownerUid: 'OwnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentUnitId: 'number',
      unitName: 'string',
      unitId: 'number',
      ownerUid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  costUnitDtoList?: QueryCostUnitResponseBodyDataCostUnitDtoList[];
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      costUnitDtoList: 'CostUnitDtoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
      costUnitDtoList: { 'type': 'array', 'itemType': QueryCostUnitResponseBodyDataCostUnitDtoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResourceResponseBodyDataResourceInstanceDtoList extends $tea.Model {
  commodityCode?: string;
  resourceUserName?: string;
  commodityName?: string;
  resourceUserId?: number;
  apportionName?: string;
  apportionCode?: string;
  resourceType?: string;
  resourceNick?: string;
  resourceTag?: string;
  resourceId?: string;
  resourceGroup?: string;
  relatedResources?: string;
  resourceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      resourceUserName: 'ResourceUserName',
      commodityName: 'CommodityName',
      resourceUserId: 'ResourceUserId',
      apportionName: 'ApportionName',
      apportionCode: 'ApportionCode',
      resourceType: 'ResourceType',
      resourceNick: 'ResourceNick',
      resourceTag: 'ResourceTag',
      resourceId: 'ResourceId',
      resourceGroup: 'ResourceGroup',
      relatedResources: 'RelatedResources',
      resourceStatus: 'ResourceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      resourceUserName: 'string',
      commodityName: 'string',
      resourceUserId: 'number',
      apportionName: 'string',
      apportionCode: 'string',
      resourceType: 'string',
      resourceNick: 'string',
      resourceTag: 'string',
      resourceId: 'string',
      resourceGroup: 'string',
      relatedResources: 'string',
      resourceStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResourceResponseBodyDataCostUnit extends $tea.Model {
  parentUnitId?: number;
  unitName?: string;
  unitId?: number;
  ownerUid?: number;
  static names(): { [key: string]: string } {
    return {
      parentUnitId: 'ParentUnitId',
      unitName: 'UnitName',
      unitId: 'UnitId',
      ownerUid: 'OwnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentUnitId: 'number',
      unitName: 'string',
      unitId: 'number',
      ownerUid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResourceResponseBodyDataCostUnitStatisInfo extends $tea.Model {
  totalResourceCount?: number;
  resourceCount?: number;
  totalUserCount?: number;
  subUnitCount?: number;
  resourceGroupCount?: number;
  totalResourceGroupCount?: number;
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      totalResourceCount: 'TotalResourceCount',
      resourceCount: 'ResourceCount',
      totalUserCount: 'TotalUserCount',
      subUnitCount: 'SubUnitCount',
      resourceGroupCount: 'ResourceGroupCount',
      totalResourceGroupCount: 'TotalResourceGroupCount',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalResourceCount: 'number',
      resourceCount: 'number',
      totalUserCount: 'number',
      subUnitCount: 'number',
      resourceGroupCount: 'number',
      totalResourceGroupCount: 'number',
      userCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResourceResponseBodyData extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  resourceInstanceDtoList?: QueryCostUnitResourceResponseBodyDataResourceInstanceDtoList[];
  costUnit?: QueryCostUnitResourceResponseBodyDataCostUnit;
  costUnitStatisInfo?: QueryCostUnitResourceResponseBodyDataCostUnitStatisInfo;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      resourceInstanceDtoList: 'ResourceInstanceDtoList',
      costUnit: 'CostUnit',
      costUnitStatisInfo: 'CostUnitStatisInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
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
  addressee?: string;
  postalCode?: string;
  userId?: number;
  city?: string;
  userNick?: string;
  street?: string;
  phone?: string;
  county?: string;
  bizType?: string;
  deliveryAddress?: string;
  id?: number;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      addressee: 'Addressee',
      postalCode: 'PostalCode',
      userId: 'UserId',
      city: 'City',
      userNick: 'UserNick',
      street: 'Street',
      phone: 'Phone',
      county: 'County',
      bizType: 'BizType',
      deliveryAddress: 'DeliveryAddress',
      id: 'Id',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressee: 'string',
      postalCode: 'string',
      userId: 'number',
      city: 'string',
      userNick: 'string',
      street: 'string',
      phone: 'string',
      county: 'string',
      bizType: 'string',
      deliveryAddress: 'string',
      id: 'number',
      province: 'string',
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

export class QueryDPUtilizationDetailResponseBodyDataDetailListDetailList extends $tea.Model {
  deductedInstanceId?: string;
  instanceId?: string;
  deductHours?: number;
  shareUid?: number;
  deductDate?: string;
  instanceSpec?: string;
  deductedCommodityCode?: string;
  deductedProductDetail?: string;
  deductMeasure?: number;
  region?: string;
  deductQuantity?: number;
  deductFactorTotal?: number;
  resCode?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      deductedInstanceId: 'DeductedInstanceId',
      instanceId: 'InstanceId',
      deductHours: 'DeductHours',
      shareUid: 'ShareUid',
      deductDate: 'DeductDate',
      instanceSpec: 'InstanceSpec',
      deductedCommodityCode: 'DeductedCommodityCode',
      deductedProductDetail: 'DeductedProductDetail',
      deductMeasure: 'DeductMeasure',
      region: 'Region',
      deductQuantity: 'DeductQuantity',
      deductFactorTotal: 'DeductFactorTotal',
      resCode: 'ResCode',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deductedInstanceId: 'string',
      instanceId: 'string',
      deductHours: 'number',
      shareUid: 'number',
      deductDate: 'string',
      instanceSpec: 'string',
      deductedCommodityCode: 'string',
      deductedProductDetail: 'string',
      deductMeasure: 'number',
      region: 'string',
      deductQuantity: 'number',
      deductFactorTotal: 'number',
      resCode: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDPUtilizationDetailResponseBodyDataDetailList extends $tea.Model {
  detailList?: QueryDPUtilizationDetailResponseBodyDataDetailListDetailList[];
  static names(): { [key: string]: string } {
    return {
      detailList: 'DetailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailList: { 'type': 'array', 'itemType': QueryDPUtilizationDetailResponseBodyDataDetailListDetailList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDPUtilizationDetailResponseBodyData extends $tea.Model {
  nextToken?: string;
  detailList?: QueryDPUtilizationDetailResponseBodyDataDetailList;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      detailList: 'DetailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      detailList: QueryDPUtilizationDetailResponseBodyDataDetailList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEvaluateListResponseBodyDataEvaluateListEvaluate extends $tea.Model {
  type?: number;
  status?: number;
  billId?: number;
  userId?: number;
  billCycle?: string;
  canInvoiceAmount?: number;
  offsetAcceptAmount?: number;
  itemId?: number;
  outBizId?: string;
  userNick?: string;
  gmtModified?: string;
  opId?: string;
  bizType?: string;
  originalAmount?: number;
  invoicedAmount?: number;
  gmtCreate?: string;
  presentAmount?: number;
  bizTime?: string;
  name?: string;
  offsetCostAmount?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      billId: 'BillId',
      userId: 'UserId',
      billCycle: 'BillCycle',
      canInvoiceAmount: 'CanInvoiceAmount',
      offsetAcceptAmount: 'OffsetAcceptAmount',
      itemId: 'ItemId',
      outBizId: 'OutBizId',
      userNick: 'UserNick',
      gmtModified: 'GmtModified',
      opId: 'OpId',
      bizType: 'BizType',
      originalAmount: 'OriginalAmount',
      invoicedAmount: 'InvoicedAmount',
      gmtCreate: 'GmtCreate',
      presentAmount: 'PresentAmount',
      bizTime: 'BizTime',
      name: 'Name',
      offsetCostAmount: 'OffsetCostAmount',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      status: 'number',
      billId: 'number',
      userId: 'number',
      billCycle: 'string',
      canInvoiceAmount: 'number',
      offsetAcceptAmount: 'number',
      itemId: 'number',
      outBizId: 'string',
      userNick: 'string',
      gmtModified: 'string',
      opId: 'string',
      bizType: 'string',
      originalAmount: 'number',
      invoicedAmount: 'number',
      gmtCreate: 'string',
      presentAmount: 'number',
      bizTime: 'string',
      name: 'string',
      offsetCostAmount: 'number',
      id: 'number',
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
  pageNum?: number;
  totalUnAppliedInvoiceAmount?: number;
  pageSize?: number;
  totalCount?: number;
  totalInvoiceAmount?: number;
  hostId?: string;
  evaluateList?: QueryEvaluateListResponseBodyDataEvaluateList;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      totalUnAppliedInvoiceAmount: 'TotalUnAppliedInvoiceAmount',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalInvoiceAmount: 'TotalInvoiceAmount',
      hostId: 'HostId',
      evaluateList: 'EvaluateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      totalUnAppliedInvoiceAmount: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalInvoiceAmount: 'number',
      hostId: 'string',
      evaluateList: QueryEvaluateListResponseBodyDataEvaluateList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFinancialAccountInfoResponseBodyData extends $tea.Model {
  memberNickName?: string;
  isFinancialAccount?: boolean;
  memberGroupName?: string;
  userName?: string;
  accountType?: string;
  memberGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      memberNickName: 'MemberNickName',
      isFinancialAccount: 'IsFinancialAccount',
      memberGroupName: 'MemberGroupName',
      userName: 'UserName',
      accountType: 'AccountType',
      memberGroupId: 'MemberGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberNickName: 'string',
      isFinancialAccount: 'boolean',
      memberGroupName: 'string',
      userName: 'string',
      accountType: 'string',
      memberGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceBillResponseBodyDataItemsItem extends $tea.Model {
  billingDate?: string;
  instanceConfig?: string;
  internetIP?: string;
  item?: string;
  tag?: string;
  instanceID?: string;
  currency?: string;
  deductedByCashCoupons?: number;
  subscriptionType?: string;
  instanceSpec?: string;
  deductedByCoupons?: number;
  billingItem?: string;
  region?: string;
  outstandingAmount?: number;
  costUnit?: string;
  listPriceUnit?: string;
  resourceGroup?: string;
  pipCode?: string;
  servicePeriodUnit?: string;
  pretaxAmount?: number;
  commodityCode?: string;
  productName?: string;
  nickName?: string;
  productDetail?: string;
  usage?: string;
  intranetIP?: string;
  ownerID?: string;
  deductedByPrepaidCard?: number;
  usageUnit?: string;
  paymentAmount?: number;
  invoiceDiscount?: number;
  deductedByResourcePackage?: string;
  productType?: string;
  servicePeriod?: string;
  zone?: string;
  listPrice?: string;
  pretaxGrossAmount?: number;
  productCode?: string;
  billingType?: string;
  static names(): { [key: string]: string } {
    return {
      billingDate: 'BillingDate',
      instanceConfig: 'InstanceConfig',
      internetIP: 'InternetIP',
      item: 'Item',
      tag: 'Tag',
      instanceID: 'InstanceID',
      currency: 'Currency',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      subscriptionType: 'SubscriptionType',
      instanceSpec: 'InstanceSpec',
      deductedByCoupons: 'DeductedByCoupons',
      billingItem: 'BillingItem',
      region: 'Region',
      outstandingAmount: 'OutstandingAmount',
      costUnit: 'CostUnit',
      listPriceUnit: 'ListPriceUnit',
      resourceGroup: 'ResourceGroup',
      pipCode: 'PipCode',
      servicePeriodUnit: 'ServicePeriodUnit',
      pretaxAmount: 'PretaxAmount',
      commodityCode: 'CommodityCode',
      productName: 'ProductName',
      nickName: 'NickName',
      productDetail: 'ProductDetail',
      usage: 'Usage',
      intranetIP: 'IntranetIP',
      ownerID: 'OwnerID',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      usageUnit: 'UsageUnit',
      paymentAmount: 'PaymentAmount',
      invoiceDiscount: 'InvoiceDiscount',
      deductedByResourcePackage: 'DeductedByResourcePackage',
      productType: 'ProductType',
      servicePeriod: 'ServicePeriod',
      zone: 'Zone',
      listPrice: 'ListPrice',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
      billingType: 'BillingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingDate: 'string',
      instanceConfig: 'string',
      internetIP: 'string',
      item: 'string',
      tag: 'string',
      instanceID: 'string',
      currency: 'string',
      deductedByCashCoupons: 'number',
      subscriptionType: 'string',
      instanceSpec: 'string',
      deductedByCoupons: 'number',
      billingItem: 'string',
      region: 'string',
      outstandingAmount: 'number',
      costUnit: 'string',
      listPriceUnit: 'string',
      resourceGroup: 'string',
      pipCode: 'string',
      servicePeriodUnit: 'string',
      pretaxAmount: 'number',
      commodityCode: 'string',
      productName: 'string',
      nickName: 'string',
      productDetail: 'string',
      usage: 'string',
      intranetIP: 'string',
      ownerID: 'string',
      deductedByPrepaidCard: 'number',
      usageUnit: 'string',
      paymentAmount: 'number',
      invoiceDiscount: 'number',
      deductedByResourcePackage: 'string',
      productType: 'string',
      servicePeriod: 'string',
      zone: 'string',
      listPrice: 'string',
      pretaxGrossAmount: 'number',
      productCode: 'string',
      billingType: 'string',
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
  pageNum?: number;
  billingCycle?: string;
  accountID?: string;
  pageSize?: number;
  totalCount?: number;
  accountName?: string;
  items?: QueryInstanceBillResponseBodyDataItems;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      billingCycle: 'BillingCycle',
      accountID: 'AccountID',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      accountName: 'AccountName',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      billingCycle: 'string',
      accountID: 'string',
      pageSize: 'number',
      totalCount: 'number',
      accountName: 'string',
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
  gaapDeductedByCashCoupons?: string;
  subscriptionType?: string;
  monthGaapPretaxAmount?: string;
  deductedByCoupons?: string;
  subOrderId?: string;
  region?: string;
  orderType?: string;
  monthGaapDeductedByPrepaidCard?: string;
  unallocatedDeductedByCashCoupons?: string;
  pretaxAmountLocal?: string;
  billingCycle?: string;
  payerAccount?: string;
  monthGaapPretaxAmountLocal?: string;
  accountingUnit?: string;
  gaapPretaxAmountLocal?: string;
  unallocatedDeductedByPrepaidCard?: string;
  productType?: string;
  paymentAmount?: string;
  monthGaapPretaxGrossAmount?: string;
  billType?: string;
  payTime?: string;
  pretaxGrossAmount?: string;
  orderId?: string;
  unallocatedPricingDiscount?: string;
  monthGaapDeductedByCashCoupons?: string;
  unallocatedPretaxGrossAmount?: string;
  instanceID?: string;
  tag?: string;
  currency?: string;
  gaapDeductedByCoupons?: string;
  deductedByCashCoupons?: string;
  gaapDeductedByPrepaidCard?: string;
  gaapPaymentAmount?: string;
  unallocatedPretaxAmountLocal?: string;
  monthGaapPricingDiscount?: string;
  pricingDiscount?: string;
  gaapPricingDiscount?: string;
  resourceGroup?: string;
  unallocatedDeductedByCoupons?: string;
  pretaxAmount?: string;
  unallocatedPretaxAmount?: string;
  gaapPretaxGrossAmount?: string;
  unallocatedPaymentAmount?: string;
  paymentCurrency?: string;
  ownerID?: string;
  deductedByPrepaidCard?: string;
  gaapPretaxAmount?: string;
  monthGaapDeductedByCoupons?: string;
  monthGaapPaymentAmount?: string;
  usageEndDate?: string;
  usageStartDate?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      gaapDeductedByCashCoupons: 'GaapDeductedByCashCoupons',
      subscriptionType: 'SubscriptionType',
      monthGaapPretaxAmount: 'MonthGaapPretaxAmount',
      deductedByCoupons: 'DeductedByCoupons',
      subOrderId: 'SubOrderId',
      region: 'Region',
      orderType: 'OrderType',
      monthGaapDeductedByPrepaidCard: 'MonthGaapDeductedByPrepaidCard',
      unallocatedDeductedByCashCoupons: 'UnallocatedDeductedByCashCoupons',
      pretaxAmountLocal: 'PretaxAmountLocal',
      billingCycle: 'BillingCycle',
      payerAccount: 'PayerAccount',
      monthGaapPretaxAmountLocal: 'MonthGaapPretaxAmountLocal',
      accountingUnit: 'AccountingUnit',
      gaapPretaxAmountLocal: 'GaapPretaxAmountLocal',
      unallocatedDeductedByPrepaidCard: 'UnallocatedDeductedByPrepaidCard',
      productType: 'ProductType',
      paymentAmount: 'PaymentAmount',
      monthGaapPretaxGrossAmount: 'MonthGaapPretaxGrossAmount',
      billType: 'BillType',
      payTime: 'PayTime',
      pretaxGrossAmount: 'PretaxGrossAmount',
      orderId: 'OrderId',
      unallocatedPricingDiscount: 'UnallocatedPricingDiscount',
      monthGaapDeductedByCashCoupons: 'MonthGaapDeductedByCashCoupons',
      unallocatedPretaxGrossAmount: 'UnallocatedPretaxGrossAmount',
      instanceID: 'InstanceID',
      tag: 'Tag',
      currency: 'Currency',
      gaapDeductedByCoupons: 'GaapDeductedByCoupons',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      gaapDeductedByPrepaidCard: 'GaapDeductedByPrepaidCard',
      gaapPaymentAmount: 'GaapPaymentAmount',
      unallocatedPretaxAmountLocal: 'UnallocatedPretaxAmountLocal',
      monthGaapPricingDiscount: 'MonthGaapPricingDiscount',
      pricingDiscount: 'PricingDiscount',
      gaapPricingDiscount: 'GaapPricingDiscount',
      resourceGroup: 'ResourceGroup',
      unallocatedDeductedByCoupons: 'UnallocatedDeductedByCoupons',
      pretaxAmount: 'PretaxAmount',
      unallocatedPretaxAmount: 'UnallocatedPretaxAmount',
      gaapPretaxGrossAmount: 'GaapPretaxGrossAmount',
      unallocatedPaymentAmount: 'UnallocatedPaymentAmount',
      paymentCurrency: 'PaymentCurrency',
      ownerID: 'OwnerID',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      gaapPretaxAmount: 'GaapPretaxAmount',
      monthGaapDeductedByCoupons: 'MonthGaapDeductedByCoupons',
      monthGaapPaymentAmount: 'MonthGaapPaymentAmount',
      usageEndDate: 'UsageEndDate',
      usageStartDate: 'UsageStartDate',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gaapDeductedByCashCoupons: 'string',
      subscriptionType: 'string',
      monthGaapPretaxAmount: 'string',
      deductedByCoupons: 'string',
      subOrderId: 'string',
      region: 'string',
      orderType: 'string',
      monthGaapDeductedByPrepaidCard: 'string',
      unallocatedDeductedByCashCoupons: 'string',
      pretaxAmountLocal: 'string',
      billingCycle: 'string',
      payerAccount: 'string',
      monthGaapPretaxAmountLocal: 'string',
      accountingUnit: 'string',
      gaapPretaxAmountLocal: 'string',
      unallocatedDeductedByPrepaidCard: 'string',
      productType: 'string',
      paymentAmount: 'string',
      monthGaapPretaxGrossAmount: 'string',
      billType: 'string',
      payTime: 'string',
      pretaxGrossAmount: 'string',
      orderId: 'string',
      unallocatedPricingDiscount: 'string',
      monthGaapDeductedByCashCoupons: 'string',
      unallocatedPretaxGrossAmount: 'string',
      instanceID: 'string',
      tag: 'string',
      currency: 'string',
      gaapDeductedByCoupons: 'string',
      deductedByCashCoupons: 'string',
      gaapDeductedByPrepaidCard: 'string',
      gaapPaymentAmount: 'string',
      unallocatedPretaxAmountLocal: 'string',
      monthGaapPricingDiscount: 'string',
      pricingDiscount: 'string',
      gaapPricingDiscount: 'string',
      resourceGroup: 'string',
      unallocatedDeductedByCoupons: 'string',
      pretaxAmount: 'string',
      unallocatedPretaxAmount: 'string',
      gaapPretaxGrossAmount: 'string',
      unallocatedPaymentAmount: 'string',
      paymentCurrency: 'string',
      ownerID: 'string',
      deductedByPrepaidCard: 'string',
      gaapPretaxAmount: 'string',
      monthGaapDeductedByCoupons: 'string',
      monthGaapPaymentAmount: 'string',
      usageEndDate: 'string',
      usageStartDate: 'string',
      productCode: 'string',
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
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  hostId?: string;
  modules?: QueryInstanceGaapCostResponseBodyDataModules;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      hostId: 'HostId',
      modules: 'Modules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
      hostId: 'string',
      modules: QueryInstanceGaapCostResponseBodyDataModules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvoicingCustomerListResponseBodyDataCustomerInvoiceListCustomerInvoice extends $tea.Model {
  type?: number;
  status?: number;
  adjustType?: number;
  bank?: string;
  startCycle?: number;
  titleChangeInstructions?: string;
  userId?: number;
  operatingLicenseAddress?: string;
  invoiceTitle?: string;
  userNick?: string;
  operatingLicensePhone?: string;
  endCycle?: number;
  defaultRemark?: string;
  taxationLicense?: string;
  registerNo?: string;
  gmtCreate?: string;
  taxpayerType?: number;
  customerType?: number;
  issueType?: number;
  id?: number;
  bankNo?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      adjustType: 'AdjustType',
      bank: 'Bank',
      startCycle: 'StartCycle',
      titleChangeInstructions: 'TitleChangeInstructions',
      userId: 'UserId',
      operatingLicenseAddress: 'OperatingLicenseAddress',
      invoiceTitle: 'InvoiceTitle',
      userNick: 'UserNick',
      operatingLicensePhone: 'OperatingLicensePhone',
      endCycle: 'EndCycle',
      defaultRemark: 'DefaultRemark',
      taxationLicense: 'TaxationLicense',
      registerNo: 'RegisterNo',
      gmtCreate: 'GmtCreate',
      taxpayerType: 'TaxpayerType',
      customerType: 'CustomerType',
      issueType: 'IssueType',
      id: 'Id',
      bankNo: 'BankNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      status: 'number',
      adjustType: 'number',
      bank: 'string',
      startCycle: 'number',
      titleChangeInstructions: 'string',
      userId: 'number',
      operatingLicenseAddress: 'string',
      invoiceTitle: 'string',
      userNick: 'string',
      operatingLicensePhone: 'string',
      endCycle: 'number',
      defaultRemark: 'string',
      taxationLicense: 'string',
      registerNo: 'string',
      gmtCreate: 'string',
      taxpayerType: 'number',
      customerType: 'number',
      issueType: 'number',
      id: 'number',
      bankNo: 'string',
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
  pretaxAmount?: number;
  solutionCode?: string;
  item?: string;
  currency?: string;
  deductedByCashCoupons?: number;
  subscriptionType?: string;
  paymentCurrency?: string;
  deductedByPrepaidCard?: number;
  deductedByCoupons?: number;
  paymentAmount?: number;
  invoiceDiscount?: number;
  productType?: string;
  outstandingAmount?: number;
  afterTaxAmount?: number;
  pretaxGrossAmount?: number;
  solutionName?: string;
  tax?: number;
  pretaxAmountLocal?: number;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      pretaxAmount: 'PretaxAmount',
      solutionCode: 'SolutionCode',
      item: 'Item',
      currency: 'Currency',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      subscriptionType: 'SubscriptionType',
      paymentCurrency: 'PaymentCurrency',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      deductedByCoupons: 'DeductedByCoupons',
      paymentAmount: 'PaymentAmount',
      invoiceDiscount: 'InvoiceDiscount',
      productType: 'ProductType',
      outstandingAmount: 'OutstandingAmount',
      afterTaxAmount: 'AfterTaxAmount',
      pretaxGrossAmount: 'PretaxGrossAmount',
      solutionName: 'SolutionName',
      tax: 'Tax',
      pretaxAmountLocal: 'PretaxAmountLocal',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pretaxAmount: 'number',
      solutionCode: 'string',
      item: 'string',
      currency: 'string',
      deductedByCashCoupons: 'number',
      subscriptionType: 'string',
      paymentCurrency: 'string',
      deductedByPrepaidCard: 'number',
      deductedByCoupons: 'number',
      paymentAmount: 'number',
      invoiceDiscount: 'number',
      productType: 'string',
      outstandingAmount: 'number',
      afterTaxAmount: 'number',
      pretaxGrossAmount: 'number',
      solutionName: 'string',
      tax: 'number',
      pretaxAmountLocal: 'number',
      productCode: 'string',
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
  billingCycle?: string;
  totalOutstandingAmount?: number;
  newInvoiceAmount?: number;
  items?: QueryMonthlyBillResponseBodyDataItems;
  static names(): { [key: string]: string } {
    return {
      outstandingAmount: 'OutstandingAmount',
      billingCycle: 'BillingCycle',
      totalOutstandingAmount: 'TotalOutstandingAmount',
      newInvoiceAmount: 'NewInvoiceAmount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outstandingAmount: 'number',
      billingCycle: 'string',
      totalOutstandingAmount: 'number',
      newInvoiceAmount: 'number',
      items: QueryMonthlyBillResponseBodyDataItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonthlyInstanceConsumptionResponseBodyDataItemsItem extends $tea.Model {
  pretaxAmount?: number;
  discountAmount?: number;
  payerAccount?: string;
  tag?: string;
  instanceID?: string;
  currency?: string;
  subscriptionType?: string;
  paymentCurrency?: string;
  ownerID?: string;
  productType?: string;
  region?: string;
  afterTaxAmount?: number;
  pretaxGrossAmount?: number;
  resourceGroup?: string;
  tax?: number;
  pretaxAmountLocal?: number;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      pretaxAmount: 'PretaxAmount',
      discountAmount: 'DiscountAmount',
      payerAccount: 'PayerAccount',
      tag: 'Tag',
      instanceID: 'InstanceID',
      currency: 'Currency',
      subscriptionType: 'SubscriptionType',
      paymentCurrency: 'PaymentCurrency',
      ownerID: 'OwnerID',
      productType: 'ProductType',
      region: 'Region',
      afterTaxAmount: 'AfterTaxAmount',
      pretaxGrossAmount: 'PretaxGrossAmount',
      resourceGroup: 'ResourceGroup',
      tax: 'Tax',
      pretaxAmountLocal: 'PretaxAmountLocal',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pretaxAmount: 'number',
      discountAmount: 'number',
      payerAccount: 'string',
      tag: 'string',
      instanceID: 'string',
      currency: 'string',
      subscriptionType: 'string',
      paymentCurrency: 'string',
      ownerID: 'string',
      productType: 'string',
      region: 'string',
      afterTaxAmount: 'number',
      pretaxGrossAmount: 'number',
      resourceGroup: 'string',
      tax: 'number',
      pretaxAmountLocal: 'number',
      productCode: 'string',
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
  billingCycle?: string;
  pageSize?: number;
  totalCount?: number;
  items?: QueryMonthlyInstanceConsumptionResponseBodyDataItems;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      billingCycle: 'BillingCycle',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      billingCycle: 'string',
      pageSize: 'number',
      totalCount: 'number',
      items: QueryMonthlyInstanceConsumptionResponseBodyDataItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrdersResponseBodyDataOrderListOrder extends $tea.Model {
  pretaxAmount?: string;
  commodityCode?: string;
  relatedOrderId?: string;
  createTime?: string;
  currency?: string;
  subscriptionType?: string;
  paymentCurrency?: string;
  productType?: string;
  afterTaxAmount?: string;
  paymentTime?: string;
  pretaxGrossAmount?: string;
  orderType?: string;
  paymentStatus?: string;
  orderId?: string;
  tax?: string;
  pretaxAmountLocal?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      pretaxAmount: 'PretaxAmount',
      commodityCode: 'CommodityCode',
      relatedOrderId: 'RelatedOrderId',
      createTime: 'CreateTime',
      currency: 'Currency',
      subscriptionType: 'SubscriptionType',
      paymentCurrency: 'PaymentCurrency',
      productType: 'ProductType',
      afterTaxAmount: 'AfterTaxAmount',
      paymentTime: 'PaymentTime',
      pretaxGrossAmount: 'PretaxGrossAmount',
      orderType: 'OrderType',
      paymentStatus: 'PaymentStatus',
      orderId: 'OrderId',
      tax: 'Tax',
      pretaxAmountLocal: 'PretaxAmountLocal',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pretaxAmount: 'string',
      commodityCode: 'string',
      relatedOrderId: 'string',
      createTime: 'string',
      currency: 'string',
      subscriptionType: 'string',
      paymentCurrency: 'string',
      productType: 'string',
      afterTaxAmount: 'string',
      paymentTime: 'string',
      pretaxGrossAmount: 'string',
      orderType: 'string',
      paymentStatus: 'string',
      orderId: 'string',
      tax: 'string',
      pretaxAmountLocal: 'string',
      productCode: 'string',
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
  endTime?: string;
  startTime?: string;
  permissionCode?: string;
  permissionName?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      permissionCode: 'PermissionCode',
      permissionName: 'PermissionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      permissionCode: 'string',
      permissionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPermissionListResponseBodyData extends $tea.Model {
  endTime?: string;
  relationType?: string;
  startTime?: string;
  state?: string;
  masterId?: number;
  memberId?: number;
  setupTime?: string;
  permissionList?: QueryPermissionListResponseBodyDataPermissionList[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      relationType: 'RelationType',
      startTime: 'StartTime',
      state: 'State',
      masterId: 'MasterId',
      memberId: 'MemberId',
      setupTime: 'SetupTime',
      permissionList: 'PermissionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      relationType: 'string',
      startTime: 'string',
      state: 'string',
      masterId: 'number',
      memberId: 'number',
      setupTime: 'string',
      permissionList: { 'type': 'array', 'itemType': QueryPermissionListResponseBodyDataPermissionList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPrepaidCardsResponseBodyDataPrepaidCard extends $tea.Model {
  status?: string;
  expiryTime?: string;
  grantedTime?: string;
  nominalValue?: string;
  effectiveTime?: string;
  prepaidCardNo?: string;
  applicableScenarios?: string;
  prepaidCardId?: number;
  applicableProducts?: string;
  balance?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      expiryTime: 'ExpiryTime',
      grantedTime: 'GrantedTime',
      nominalValue: 'NominalValue',
      effectiveTime: 'EffectiveTime',
      prepaidCardNo: 'PrepaidCardNo',
      applicableScenarios: 'ApplicableScenarios',
      prepaidCardId: 'PrepaidCardId',
      applicableProducts: 'ApplicableProducts',
      balance: 'Balance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      expiryTime: 'string',
      grantedTime: 'string',
      nominalValue: 'string',
      effectiveTime: 'string',
      prepaidCardNo: 'string',
      applicableScenarios: 'string',
      prepaidCardId: 'number',
      applicableProducts: 'string',
      balance: 'string',
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
  productName?: string;
  productType?: string;
  subscriptionType?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      productName: 'ProductName',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productName: 'string',
      productType: 'string',
      subscriptionType: 'string',
      productCode: 'string',
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
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  productList?: QueryProductListResponseBodyDataProductList;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      productList: 'ProductList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
      productList: QueryProductListResponseBodyDataProductList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRedeemResponseBodyDataRedeemRedeem extends $tea.Model {
  expiryTime?: string;
  grantedTime?: string;
  status?: string;
  specification?: string;
  nominalValue?: string;
  effectiveTime?: string;
  redeemId?: string;
  redeemNo?: string;
  applicableProducts?: string;
  balance?: string;
  static names(): { [key: string]: string } {
    return {
      expiryTime: 'ExpiryTime',
      grantedTime: 'GrantedTime',
      status: 'Status',
      specification: 'Specification',
      nominalValue: 'NominalValue',
      effectiveTime: 'EffectiveTime',
      redeemId: 'RedeemId',
      redeemNo: 'RedeemNo',
      applicableProducts: 'ApplicableProducts',
      balance: 'Balance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiryTime: 'string',
      grantedTime: 'string',
      status: 'string',
      specification: 'string',
      nominalValue: 'string',
      effectiveTime: 'string',
      redeemId: 'string',
      redeemNo: 'string',
      applicableProducts: 'string',
      balance: 'string',
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
  endTime?: string;
  relationType?: string;
  accountNickName?: string;
  startTime?: string;
  state?: string;
  accountId?: number;
  setupTime?: string;
  accountType?: string;
  accountName?: string;
  relationId?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      relationType: 'RelationType',
      accountNickName: 'AccountNickName',
      startTime: 'StartTime',
      state: 'State',
      accountId: 'AccountId',
      setupTime: 'SetupTime',
      accountType: 'AccountType',
      accountName: 'AccountName',
      relationId: 'RelationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      relationType: 'string',
      accountNickName: 'string',
      startTime: 'string',
      state: 'string',
      accountId: 'number',
      setupTime: 'string',
      accountType: 'string',
      accountName: 'string',
      relationId: 'number',
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
  expiryTime?: string;
  status?: string;
  remark?: string;
  remainingAmountUnit?: string;
  instanceId?: string;
  packageType?: string;
  effectiveTime?: string;
  region?: string;
  totalAmount?: string;
  deductType?: string;
  totalAmountUnit?: string;
  remainingAmount?: string;
  applicableProducts?: QueryResourcePackageInstancesResponseBodyDataInstancesInstanceApplicableProducts;
  static names(): { [key: string]: string } {
    return {
      expiryTime: 'ExpiryTime',
      status: 'Status',
      remark: 'Remark',
      remainingAmountUnit: 'RemainingAmountUnit',
      instanceId: 'InstanceId',
      packageType: 'PackageType',
      effectiveTime: 'EffectiveTime',
      region: 'Region',
      totalAmount: 'TotalAmount',
      deductType: 'DeductType',
      totalAmountUnit: 'TotalAmountUnit',
      remainingAmount: 'RemainingAmount',
      applicableProducts: 'ApplicableProducts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiryTime: 'string',
      status: 'string',
      remark: 'string',
      remainingAmountUnit: 'string',
      instanceId: 'string',
      packageType: 'string',
      effectiveTime: 'string',
      region: 'string',
      totalAmount: 'string',
      deductType: 'string',
      totalAmountUnit: 'string',
      remainingAmount: 'string',
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
  pageNum?: string;
  pageSize?: string;
  totalCount?: string;
  hostId?: string;
  instances?: QueryResourcePackageInstancesResponseBodyDataInstances;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      hostId: 'HostId',
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'string',
      pageSize: 'string',
      totalCount: 'string',
      hostId: 'string',
      instances: QueryResourcePackageInstancesResponseBodyDataInstances,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRIUtilizationDetailResponseBodyDataDetailListDetailList extends $tea.Model {
  deductedCommodityCode?: string;
  deductedProductDetail?: string;
  deductedInstanceId?: string;
  deductFactorTotal?: number;
  deductQuantity?: number;
  deductHours?: string;
  deductDate?: string;
  RIInstanceId?: string;
  instanceSpec?: string;
  static names(): { [key: string]: string } {
    return {
      deductedCommodityCode: 'DeductedCommodityCode',
      deductedProductDetail: 'DeductedProductDetail',
      deductedInstanceId: 'DeductedInstanceId',
      deductFactorTotal: 'DeductFactorTotal',
      deductQuantity: 'DeductQuantity',
      deductHours: 'DeductHours',
      deductDate: 'DeductDate',
      RIInstanceId: 'RIInstanceId',
      instanceSpec: 'InstanceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deductedCommodityCode: 'string',
      deductedProductDetail: 'string',
      deductedInstanceId: 'string',
      deductFactorTotal: 'number',
      deductQuantity: 'number',
      deductHours: 'string',
      deductDate: 'string',
      RIInstanceId: 'string',
      instanceSpec: 'string',
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
  endTime?: string;
  startTime?: string;
  savingsType?: string;
  userId?: number;
  discountRate?: string;
  billModule?: string;
  instanceId?: string;
  deductInstanceId?: string;
  deductCommodity?: string;
  deductRate?: string;
  deductFee?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      savingsType: 'SavingsType',
      userId: 'UserId',
      discountRate: 'DiscountRate',
      billModule: 'BillModule',
      instanceId: 'InstanceId',
      deductInstanceId: 'DeductInstanceId',
      deductCommodity: 'DeductCommodity',
      deductRate: 'DeductRate',
      deductFee: 'DeductFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      savingsType: 'string',
      userId: 'number',
      discountRate: 'string',
      billModule: 'string',
      instanceId: 'string',
      deductInstanceId: 'string',
      deductCommodity: 'string',
      deductRate: 'string',
      deductFee: 'string',
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

export class QuerySavingsPlansInstanceRequestTag extends $tea.Model {
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

export class QuerySavingsPlansInstanceResponseBodyDataItemsTags extends $tea.Model {
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

export class QuerySavingsPlansInstanceResponseBodyDataItems extends $tea.Model {
  status?: string;
  savingsType?: string;
  utilization?: string;
  prepayFee?: string;
  instanceId?: string;
  currency?: string;
  endTime?: string;
  startTime?: string;
  allocationStatus?: string;
  instanceFamily?: string;
  region?: string;
  totalSave?: string;
  poolValue?: string;
  payMode?: string;
  tags?: QuerySavingsPlansInstanceResponseBodyDataItemsTags[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      savingsType: 'SavingsType',
      utilization: 'Utilization',
      prepayFee: 'PrepayFee',
      instanceId: 'InstanceId',
      currency: 'Currency',
      endTime: 'EndTime',
      startTime: 'StartTime',
      allocationStatus: 'AllocationStatus',
      instanceFamily: 'InstanceFamily',
      region: 'Region',
      totalSave: 'TotalSave',
      poolValue: 'PoolValue',
      payMode: 'PayMode',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      savingsType: 'string',
      utilization: 'string',
      prepayFee: 'string',
      instanceId: 'string',
      currency: 'string',
      endTime: 'string',
      startTime: 'string',
      allocationStatus: 'string',
      instanceFamily: 'string',
      region: 'string',
      totalSave: 'string',
      poolValue: 'string',
      payMode: 'string',
      tags: { 'type': 'array', 'itemType': QuerySavingsPlansInstanceResponseBodyDataItemsTags },
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
  status?: string;
  roundDownDiscount?: string;
  item?: string;
  currency?: string;
  billAccountName?: string;
  deductedByCashCoupons?: number;
  subscriptionType?: string;
  usageStartTime?: string;
  bizType?: string;
  usageEndTime?: string;
  deductedByCoupons?: number;
  subOrderId?: string;
  afterTaxAmount?: number;
  outstandingAmount?: number;
  paymentTime?: string;
  tax?: number;
  pretaxAmountLocal?: number;
  pipCode?: string;
  paymentTransactionID?: string;
  pretaxAmount?: number;
  commodityCode?: string;
  productName?: string;
  recordID?: string;
  productDetail?: string;
  paymentCurrency?: string;
  ownerID?: string;
  deductedByPrepaidCard?: number;
  billAccountID?: string;
  paymentAmount?: number;
  invoiceDiscount?: number;
  productType?: string;
  pretaxGrossAmount?: number;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      roundDownDiscount: 'RoundDownDiscount',
      item: 'Item',
      currency: 'Currency',
      billAccountName: 'BillAccountName',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      subscriptionType: 'SubscriptionType',
      usageStartTime: 'UsageStartTime',
      bizType: 'BizType',
      usageEndTime: 'UsageEndTime',
      deductedByCoupons: 'DeductedByCoupons',
      subOrderId: 'SubOrderId',
      afterTaxAmount: 'AfterTaxAmount',
      outstandingAmount: 'OutstandingAmount',
      paymentTime: 'PaymentTime',
      tax: 'Tax',
      pretaxAmountLocal: 'PretaxAmountLocal',
      pipCode: 'PipCode',
      paymentTransactionID: 'PaymentTransactionID',
      pretaxAmount: 'PretaxAmount',
      commodityCode: 'CommodityCode',
      productName: 'ProductName',
      recordID: 'RecordID',
      productDetail: 'ProductDetail',
      paymentCurrency: 'PaymentCurrency',
      ownerID: 'OwnerID',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      billAccountID: 'BillAccountID',
      paymentAmount: 'PaymentAmount',
      invoiceDiscount: 'InvoiceDiscount',
      productType: 'ProductType',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      roundDownDiscount: 'string',
      item: 'string',
      currency: 'string',
      billAccountName: 'string',
      deductedByCashCoupons: 'number',
      subscriptionType: 'string',
      usageStartTime: 'string',
      bizType: 'string',
      usageEndTime: 'string',
      deductedByCoupons: 'number',
      subOrderId: 'string',
      afterTaxAmount: 'number',
      outstandingAmount: 'number',
      paymentTime: 'string',
      tax: 'number',
      pretaxAmountLocal: 'number',
      pipCode: 'string',
      paymentTransactionID: 'string',
      pretaxAmount: 'number',
      commodityCode: 'string',
      productName: 'string',
      recordID: 'string',
      productDetail: 'string',
      paymentCurrency: 'string',
      ownerID: 'string',
      deductedByPrepaidCard: 'number',
      billAccountID: 'string',
      paymentAmount: 'number',
      invoiceDiscount: 'number',
      productType: 'string',
      pretaxGrossAmount: 'number',
      productCode: 'string',
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
  nextToken?: string;
  billingCycle?: string;
  maxResults?: number;
  accountID?: string;
  totalCount?: number;
  accountName?: string;
  items?: QuerySettleBillResponseBodyDataItems;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      billingCycle: 'BillingCycle',
      maxResults: 'MaxResults',
      accountID: 'AccountID',
      totalCount: 'TotalCount',
      accountName: 'AccountName',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      billingCycle: 'string',
      maxResults: 'number',
      accountID: 'string',
      totalCount: 'number',
      accountName: 'string',
      items: QuerySettleBillResponseBodyDataItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySettlementBillResponseBodyDataItemsItem extends $tea.Model {
  status?: string;
  invoiceNo?: string;
  billID?: string;
  createTime?: string;
  item?: string;
  seller?: string;
  currency?: string;
  chargeDiscount?: number;
  deductedByCashCoupons?: number;
  config?: string;
  subscriptionType?: string;
  usageStartTime?: string;
  usageEndTime?: string;
  deductedByCoupons?: number;
  region?: string;
  outstandingAmount?: number;
  afterTaxAmount?: number;
  paymentTime?: string;
  solutionID?: string;
  orderType?: string;
  clearedTime?: string;
  quantity?: string;
  tax?: number;
  pretaxAmountLocal?: number;
  pretaxAmount?: number;
  linkedCustomerOrderID?: string;
  accountDiscount?: number;
  recordID?: string;
  payerAccount?: string;
  promotion?: string;
  originalOrderID?: string;
  previousBillingCycleBalance?: number;
  mybankPaymentAmount?: number;
  paymentCurrency?: string;
  orderID?: string;
  ownerID?: string;
  deductedByPrepaidCard?: number;
  paymentAmount?: number;
  productType?: string;
  pretaxGrossAmount?: number;
  suborderID?: string;
  solutionName?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      invoiceNo: 'InvoiceNo',
      billID: 'BillID',
      createTime: 'CreateTime',
      item: 'Item',
      seller: 'Seller',
      currency: 'Currency',
      chargeDiscount: 'ChargeDiscount',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      config: 'Config',
      subscriptionType: 'SubscriptionType',
      usageStartTime: 'UsageStartTime',
      usageEndTime: 'UsageEndTime',
      deductedByCoupons: 'DeductedByCoupons',
      region: 'Region',
      outstandingAmount: 'OutstandingAmount',
      afterTaxAmount: 'AfterTaxAmount',
      paymentTime: 'PaymentTime',
      solutionID: 'SolutionID',
      orderType: 'OrderType',
      clearedTime: 'ClearedTime',
      quantity: 'Quantity',
      tax: 'Tax',
      pretaxAmountLocal: 'PretaxAmountLocal',
      pretaxAmount: 'PretaxAmount',
      linkedCustomerOrderID: 'LinkedCustomerOrderID',
      accountDiscount: 'AccountDiscount',
      recordID: 'RecordID',
      payerAccount: 'PayerAccount',
      promotion: 'Promotion',
      originalOrderID: 'OriginalOrderID',
      previousBillingCycleBalance: 'PreviousBillingCycleBalance',
      mybankPaymentAmount: 'MybankPaymentAmount',
      paymentCurrency: 'PaymentCurrency',
      orderID: 'OrderID',
      ownerID: 'OwnerID',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      paymentAmount: 'PaymentAmount',
      productType: 'ProductType',
      pretaxGrossAmount: 'PretaxGrossAmount',
      suborderID: 'SuborderID',
      solutionName: 'SolutionName',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      invoiceNo: 'string',
      billID: 'string',
      createTime: 'string',
      item: 'string',
      seller: 'string',
      currency: 'string',
      chargeDiscount: 'number',
      deductedByCashCoupons: 'number',
      config: 'string',
      subscriptionType: 'string',
      usageStartTime: 'string',
      usageEndTime: 'string',
      deductedByCoupons: 'number',
      region: 'string',
      outstandingAmount: 'number',
      afterTaxAmount: 'number',
      paymentTime: 'string',
      solutionID: 'string',
      orderType: 'string',
      clearedTime: 'string',
      quantity: 'string',
      tax: 'number',
      pretaxAmountLocal: 'number',
      pretaxAmount: 'number',
      linkedCustomerOrderID: 'string',
      accountDiscount: 'number',
      recordID: 'string',
      payerAccount: 'string',
      promotion: 'string',
      originalOrderID: 'string',
      previousBillingCycleBalance: 'number',
      mybankPaymentAmount: 'number',
      paymentCurrency: 'string',
      orderID: 'string',
      ownerID: 'string',
      deductedByPrepaidCard: 'number',
      paymentAmount: 'number',
      productType: 'string',
      pretaxGrossAmount: 'number',
      suborderID: 'string',
      solutionName: 'string',
      productCode: 'string',
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
  billingCycle?: string;
  pageSize?: number;
  totalCount?: number;
  items?: QuerySettlementBillResponseBodyDataItems;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      billingCycle: 'BillingCycle',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      billingCycle: 'string',
      pageSize: 'number',
      totalCount: 'number',
      items: QuerySettlementBillResponseBodyDataItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySplitItemBillResponseBodyDataItemsItem extends $tea.Model {
  billingDate?: string;
  instanceConfig?: string;
  internetIP?: string;
  splitItemID?: string;
  item?: string;
  splitAccountID?: string;
  tag?: string;
  instanceID?: string;
  currency?: string;
  deductedByCashCoupons?: number;
  subscriptionType?: string;
  instanceSpec?: string;
  deductedByCoupons?: number;
  billingItem?: string;
  region?: string;
  outstandingAmount?: number;
  costUnit?: string;
  listPriceUnit?: string;
  resourceGroup?: string;
  pipCode?: string;
  servicePeriodUnit?: string;
  pretaxAmount?: number;
  commodityCode?: string;
  productName?: string;
  splitProductDetail?: string;
  nickName?: string;
  productDetail?: string;
  usage?: string;
  intranetIP?: string;
  ownerID?: string;
  splitCommodityCode?: string;
  deductedByPrepaidCard?: number;
  usageUnit?: string;
  paymentAmount?: number;
  invoiceDiscount?: number;
  deductedByResourcePackage?: string;
  productType?: string;
  splitBillingCycle?: string;
  servicePeriod?: string;
  splitItemName?: string;
  zone?: string;
  listPrice?: string;
  pretaxGrossAmount?: number;
  splitAccountName?: string;
  productCode?: string;
  billingType?: string;
  static names(): { [key: string]: string } {
    return {
      billingDate: 'BillingDate',
      instanceConfig: 'InstanceConfig',
      internetIP: 'InternetIP',
      splitItemID: 'SplitItemID',
      item: 'Item',
      splitAccountID: 'SplitAccountID',
      tag: 'Tag',
      instanceID: 'InstanceID',
      currency: 'Currency',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      subscriptionType: 'SubscriptionType',
      instanceSpec: 'InstanceSpec',
      deductedByCoupons: 'DeductedByCoupons',
      billingItem: 'BillingItem',
      region: 'Region',
      outstandingAmount: 'OutstandingAmount',
      costUnit: 'CostUnit',
      listPriceUnit: 'ListPriceUnit',
      resourceGroup: 'ResourceGroup',
      pipCode: 'PipCode',
      servicePeriodUnit: 'ServicePeriodUnit',
      pretaxAmount: 'PretaxAmount',
      commodityCode: 'CommodityCode',
      productName: 'ProductName',
      splitProductDetail: 'SplitProductDetail',
      nickName: 'NickName',
      productDetail: 'ProductDetail',
      usage: 'Usage',
      intranetIP: 'IntranetIP',
      ownerID: 'OwnerID',
      splitCommodityCode: 'SplitCommodityCode',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      usageUnit: 'UsageUnit',
      paymentAmount: 'PaymentAmount',
      invoiceDiscount: 'InvoiceDiscount',
      deductedByResourcePackage: 'DeductedByResourcePackage',
      productType: 'ProductType',
      splitBillingCycle: 'SplitBillingCycle',
      servicePeriod: 'ServicePeriod',
      splitItemName: 'SplitItemName',
      zone: 'Zone',
      listPrice: 'ListPrice',
      pretaxGrossAmount: 'PretaxGrossAmount',
      splitAccountName: 'SplitAccountName',
      productCode: 'ProductCode',
      billingType: 'BillingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingDate: 'string',
      instanceConfig: 'string',
      internetIP: 'string',
      splitItemID: 'string',
      item: 'string',
      splitAccountID: 'string',
      tag: 'string',
      instanceID: 'string',
      currency: 'string',
      deductedByCashCoupons: 'number',
      subscriptionType: 'string',
      instanceSpec: 'string',
      deductedByCoupons: 'number',
      billingItem: 'string',
      region: 'string',
      outstandingAmount: 'number',
      costUnit: 'string',
      listPriceUnit: 'string',
      resourceGroup: 'string',
      pipCode: 'string',
      servicePeriodUnit: 'string',
      pretaxAmount: 'number',
      commodityCode: 'string',
      productName: 'string',
      splitProductDetail: 'string',
      nickName: 'string',
      productDetail: 'string',
      usage: 'string',
      intranetIP: 'string',
      ownerID: 'string',
      splitCommodityCode: 'string',
      deductedByPrepaidCard: 'number',
      usageUnit: 'string',
      paymentAmount: 'number',
      invoiceDiscount: 'number',
      deductedByResourcePackage: 'string',
      productType: 'string',
      splitBillingCycle: 'string',
      servicePeriod: 'string',
      splitItemName: 'string',
      zone: 'string',
      listPrice: 'string',
      pretaxGrossAmount: 'number',
      splitAccountName: 'string',
      productCode: 'string',
      billingType: 'string',
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
  pageNum?: number;
  billingCycle?: string;
  accountID?: string;
  pageSize?: number;
  totalCount?: number;
  accountName?: string;
  items?: QuerySplitItemBillResponseBodyDataItems;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      billingCycle: 'BillingCycle',
      accountID: 'AccountID',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      accountName: 'AccountName',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      billingCycle: 'string',
      accountID: 'string',
      pageSize: 'number',
      totalCount: 'number',
      accountName: 'string',
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
  omsData?: { [key: string]: any }[];
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
      omsData: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RelieveAccountRelationResponseBodyData extends $tea.Model {
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

  async addAccountRelationWithOptions(request: AddAccountRelationRequest, runtime: $Util.RuntimeOptions): Promise<AddAccountRelationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddAccountRelationResponse>(await this.doRPCRequest("AddAccountRelation", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new AddAccountRelationResponse({}));
  }

  async addAccountRelation(request: AddAccountRelationRequest): Promise<AddAccountRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addAccountRelationWithOptions(request, runtime);
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

  async confirmRelationWithOptions(request: ConfirmRelationRequest, runtime: $Util.RuntimeOptions): Promise<ConfirmRelationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfirmRelationResponse>(await this.doRPCRequest("ConfirmRelation", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new ConfirmRelationResponse({}));
  }

  async confirmRelation(request: ConfirmRelationRequest): Promise<ConfirmRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.confirmRelationWithOptions(request, runtime);
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

  async describeInstanceBillWithOptions(request: DescribeInstanceBillRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceBillResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceBillResponse>(await this.doRPCRequest("DescribeInstanceBill", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceBillResponse({}));
  }

  async describeInstanceBill(request: DescribeInstanceBillRequest): Promise<DescribeInstanceBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceBillWithOptions(request, runtime);
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

  async describeResourceCoverageDetailWithOptions(request: DescribeResourceCoverageDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourceCoverageDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeResourceCoverageDetailResponse>(await this.doRPCRequest("DescribeResourceCoverageDetail", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeResourceCoverageDetailResponse({}));
  }

  async describeResourceCoverageDetail(request: DescribeResourceCoverageDetailRequest): Promise<DescribeResourceCoverageDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourceCoverageDetailWithOptions(request, runtime);
  }

  async describeResourceCoverageTotalWithOptions(request: DescribeResourceCoverageTotalRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourceCoverageTotalResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeResourceCoverageTotalResponse>(await this.doRPCRequest("DescribeResourceCoverageTotal", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeResourceCoverageTotalResponse({}));
  }

  async describeResourceCoverageTotal(request: DescribeResourceCoverageTotalRequest): Promise<DescribeResourceCoverageTotalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourceCoverageTotalWithOptions(request, runtime);
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

  async describeResourceUsageDetailWithOptions(request: DescribeResourceUsageDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourceUsageDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeResourceUsageDetailResponse>(await this.doRPCRequest("DescribeResourceUsageDetail", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeResourceUsageDetailResponse({}));
  }

  async describeResourceUsageDetail(request: DescribeResourceUsageDetailRequest): Promise<DescribeResourceUsageDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourceUsageDetailWithOptions(request, runtime);
  }

  async describeResourceUsageTotalWithOptions(request: DescribeResourceUsageTotalRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourceUsageTotalResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeResourceUsageTotalResponse>(await this.doRPCRequest("DescribeResourceUsageTotal", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeResourceUsageTotalResponse({}));
  }

  async describeResourceUsageTotal(request: DescribeResourceUsageTotalRequest): Promise<DescribeResourceUsageTotalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourceUsageTotalWithOptions(request, runtime);
  }

  async describeSavingsPlansCoverageDetailWithOptions(request: DescribeSavingsPlansCoverageDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSavingsPlansCoverageDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSavingsPlansCoverageDetailResponse>(await this.doRPCRequest("DescribeSavingsPlansCoverageDetail", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSavingsPlansCoverageDetailResponse({}));
  }

  async describeSavingsPlansCoverageDetail(request: DescribeSavingsPlansCoverageDetailRequest): Promise<DescribeSavingsPlansCoverageDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSavingsPlansCoverageDetailWithOptions(request, runtime);
  }

  async describeSavingsPlansCoverageTotalWithOptions(request: DescribeSavingsPlansCoverageTotalRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSavingsPlansCoverageTotalResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSavingsPlansCoverageTotalResponse>(await this.doRPCRequest("DescribeSavingsPlansCoverageTotal", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSavingsPlansCoverageTotalResponse({}));
  }

  async describeSavingsPlansCoverageTotal(request: DescribeSavingsPlansCoverageTotalRequest): Promise<DescribeSavingsPlansCoverageTotalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSavingsPlansCoverageTotalWithOptions(request, runtime);
  }

  async describeSavingsPlansUsageDetailWithOptions(request: DescribeSavingsPlansUsageDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSavingsPlansUsageDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSavingsPlansUsageDetailResponse>(await this.doRPCRequest("DescribeSavingsPlansUsageDetail", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSavingsPlansUsageDetailResponse({}));
  }

  async describeSavingsPlansUsageDetail(request: DescribeSavingsPlansUsageDetailRequest): Promise<DescribeSavingsPlansUsageDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSavingsPlansUsageDetailWithOptions(request, runtime);
  }

  async describeSavingsPlansUsageTotalWithOptions(request: DescribeSavingsPlansUsageTotalRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSavingsPlansUsageTotalResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSavingsPlansUsageTotalResponse>(await this.doRPCRequest("DescribeSavingsPlansUsageTotal", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSavingsPlansUsageTotalResponse({}));
  }

  async describeSavingsPlansUsageTotal(request: DescribeSavingsPlansUsageTotalRequest): Promise<DescribeSavingsPlansUsageTotalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSavingsPlansUsageTotalWithOptions(request, runtime);
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

  async modifyAccountRelationWithOptions(request: ModifyAccountRelationRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAccountRelationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyAccountRelationResponse>(await this.doRPCRequest("ModifyAccountRelation", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyAccountRelationResponse({}));
  }

  async modifyAccountRelation(request: ModifyAccountRelationRequest): Promise<ModifyAccountRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountRelationWithOptions(request, runtime);
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

  async queryDPUtilizationDetailWithOptions(request: QueryDPUtilizationDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryDPUtilizationDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDPUtilizationDetailResponse>(await this.doRPCRequest("QueryDPUtilizationDetail", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDPUtilizationDetailResponse({}));
  }

  async queryDPUtilizationDetail(request: QueryDPUtilizationDetailRequest): Promise<QueryDPUtilizationDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDPUtilizationDetailWithOptions(request, runtime);
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

  async relieveAccountRelationWithOptions(request: RelieveAccountRelationRequest, runtime: $Util.RuntimeOptions): Promise<RelieveAccountRelationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RelieveAccountRelationResponse>(await this.doRPCRequest("RelieveAccountRelation", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new RelieveAccountRelationResponse({}));
  }

  async relieveAccountRelation(request: RelieveAccountRelationRequest): Promise<RelieveAccountRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.relieveAccountRelationWithOptions(request, runtime);
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

  async setAllExpirationDayWithOptions(request: SetAllExpirationDayRequest, runtime: $Util.RuntimeOptions): Promise<SetAllExpirationDayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetAllExpirationDayResponse>(await this.doRPCRequest("SetAllExpirationDay", "2017-12-14", "HTTPS", "POST", "AK", "json", req, runtime), new SetAllExpirationDayResponse({}));
  }

  async setAllExpirationDay(request: SetAllExpirationDayRequest): Promise<SetAllExpirationDayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAllExpirationDayWithOptions(request, runtime);
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
