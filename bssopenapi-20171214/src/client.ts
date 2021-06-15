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
  data?: AllocateCostUnitResourceResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AllocateCostUnitResourceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
      selectedIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyInvoiceResponseBody extends $tea.Model {
  code?: string;
  data?: ApplyInvoiceResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ApplyInvoiceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: CancelOrderResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CancelOrderResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
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
  data?: ConvertChargeTypeResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ConvertChargeTypeResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  agRelationDto?: CreateAgAccountResponseBodyAgRelationDto;
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      agRelationDto: 'AgRelationDto',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agRelationDto: CreateAgAccountResponseBodyAgRelationDto,
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
  data?: CreateCostUnitResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateCostUnitResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
      parameter: { 'type': 'array', 'itemType': CreateInstanceRequestParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
  code?: string;
  data?: CreateInstanceResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: boolean;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
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
  data?: CreateResourcePackageResponseBodyData;
  message?: string;
  orderId?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateResourcePackageResponseBodyData,
      message: 'string',
      orderId: 'number',
      requestId: 'string',
      success: 'boolean',
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
  data?: DeleteCostUnitResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DeleteCostUnitResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: DescribeResourcePackageProductResponseBodyData;
  message?: string;
  orderId?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeResourcePackageProductResponseBodyData,
      message: 'string',
      orderId: 'number',
      requestId: 'string',
      success: 'boolean',
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
  data?: EnableBillGenerationResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: EnableBillGenerationResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: GetCustomerAccountInfoResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCustomerAccountInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: GetCustomerListResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCustomerListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: GetOrderDetailResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetOrderDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: GetPayAsYouGoPriceResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetPayAsYouGoPriceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: GetResourcePackagePriceResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetResourcePackagePriceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: GetSubscriptionPriceResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSubscriptionPriceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: ModifyCostUnitResponseBodyData[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ModifyCostUnitResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: ModifyInstanceResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ModifyInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: QueryAccountBalanceResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryAccountBalanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  static names(): { [key: string]: string } {
    return {
      billingCycle: 'BillingCycle',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      ownerID: 'OwnerID',
      isGroupByProduct: 'IsGroupByProduct',
      productCode: 'ProductCode',
      billOwnerId: 'BillOwnerId',
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountBillResponseBody extends $tea.Model {
  code?: string;
  data?: QueryAccountBillResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryAccountBillResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: QueryAccountTransactionDetailsResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryAccountTransactionDetailsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: QueryAccountTransactionsResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryAccountTransactionsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: QueryAvailableInstancesResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryAvailableInstancesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: QueryBillResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryBillResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: QueryBillOverviewResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryBillOverviewResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: QueryBillToOSSSubscriptionResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryBillToOSSSubscriptionResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: QueryCashCouponsResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryCashCouponsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: QueryCostUnitResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryCostUnitResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: QueryCostUnitResourceResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryCostUnitResourceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: QueryCustomerAddressListResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryCustomerAddressListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: QueryEvaluateListResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryEvaluateListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: QueryInstanceBillResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryInstanceBillResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: QueryInstanceGaapCostResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryInstanceGaapCostResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: QueryInvoicingCustomerListResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryInvoicingCustomerListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: QueryMonthlyBillResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryMonthlyBillResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: QueryMonthlyInstanceConsumptionResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryMonthlyInstanceConsumptionResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: QueryOrdersResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryOrdersResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: QueryPrepaidCardsResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryPrepaidCardsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: QueryProductListResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryProductListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: QueryRedeemResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryRedeemResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
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
  data?: QueryRIUtilizationDetailResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryRIUtilizationDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  code?: string;
  data?: QuerySettleBillResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QuerySettleBillResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: QuerySettlementBillResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QuerySettlementBillResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: QuerySplitItemBillResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QuerySplitItemBillResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: QueryUserOmsDataResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryUserOmsDataResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: RenewInstanceResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RenewInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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
  data?: RenewResourcePackageResponseBodyData;
  message?: string;
  orderId?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RenewResourcePackageResponseBodyData,
      message: 'string',
      orderId: 'number',
      requestId: 'string',
      success: 'boolean',
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
  data?: boolean;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
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
  data?: boolean;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
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
  data?: boolean;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
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
  data?: UpgradeResourcePackageResponseBodyData;
  message?: string;
  orderId?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpgradeResourcePackageResponseBodyData,
      message: 'string',
      orderId: 'number',
      requestId: 'string',
      success: 'boolean',
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
  toUnitId?: number;
  toUnitUserId?: number;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      toUnitId: 'ToUnitId',
      toUnitUserId: 'ToUnitUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      toUnitId: 'number',
      toUnitUserId: 'number',
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
  mpk?: string;
  pk?: string;
  ramAdminRoleName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      mpk: 'Mpk',
      pk: 'Pk',
      ramAdminRoleName: 'RamAdminRoleName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mpk: 'string',
      pk: 'string',
      ramAdminRoleName: 'string',
      type: 'string',
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
  ownerUid?: number;
  parentUnitId?: number;
  unitId?: number;
  unitName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerUid: 'OwnerUid',
      parentUnitId: 'ParentUnitId',
      unitId: 'UnitId',
      unitName: 'UnitName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerUid: 'number',
      parentUnitId: 'number',
      unitId: 'number',
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
  instanceId?: string;
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCostUnitResponseBodyData extends $tea.Model {
  isSuccess?: boolean;
  ownerUid?: number;
  unitId?: number;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      ownerUid: 'OwnerUid',
      unitId: 'UnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      ownerUid: 'number',
      unitId: 'number',
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
  name?: string;
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      unit: 'string',
      value: 'number',
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
  availableDurations?: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecificationsSpecificationAvailableDurations;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      availableDurations: 'AvailableDurations',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableDurations: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypesPackageTypeSpecificationsSpecificationAvailableDurations,
      name: 'string',
      value: 'string',
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
  name?: string;
  packageTypes?: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypes;
  productCode?: string;
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      packageTypes: 'PackageTypes',
      productCode: 'ProductCode',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      packageTypes: DescribeResourcePackageProductResponseBodyDataResourcePackagesResourcePackagePackageTypes,
      productCode: 'string',
      productType: 'string',
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
  accountType?: string;
  creditLimitStatus?: string;
  hostingStatus?: string;
  isCertified?: boolean;
  loginEmail?: string;
  mpk?: number;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      creditLimitStatus: 'CreditLimitStatus',
      hostingStatus: 'HostingStatus',
      isCertified: 'IsCertified',
      loginEmail: 'LoginEmail',
      mpk: 'Mpk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      creditLimitStatus: 'string',
      hostingStatus: 'string',
      isCertified: 'boolean',
      loginEmail: 'string',
      mpk: 'number',
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
  afterTaxAmount?: string;
  config?: string;
  createTime?: string;
  currency?: string;
  instanceIDs?: string;
  operator?: string;
  orderId?: string;
  orderSubType?: string;
  orderType?: string;
  originalConfig?: string;
  paymentCurrency?: string;
  paymentStatus?: string;
  paymentTime?: string;
  pretaxAmount?: string;
  pretaxAmountLocal?: string;
  pretaxGrossAmount?: string;
  productCode?: string;
  productType?: string;
  quantity?: string;
  region?: string;
  relatedOrderId?: string;
  subOrderId?: string;
  subscriptionType?: string;
  tax?: string;
  usageEndTime?: string;
  usageStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      afterTaxAmount: 'AfterTaxAmount',
      config: 'Config',
      createTime: 'CreateTime',
      currency: 'Currency',
      instanceIDs: 'InstanceIDs',
      operator: 'Operator',
      orderId: 'OrderId',
      orderSubType: 'OrderSubType',
      orderType: 'OrderType',
      originalConfig: 'OriginalConfig',
      paymentCurrency: 'PaymentCurrency',
      paymentStatus: 'PaymentStatus',
      paymentTime: 'PaymentTime',
      pretaxAmount: 'PretaxAmount',
      pretaxAmountLocal: 'PretaxAmountLocal',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
      productType: 'ProductType',
      quantity: 'Quantity',
      region: 'Region',
      relatedOrderId: 'RelatedOrderId',
      subOrderId: 'SubOrderId',
      subscriptionType: 'SubscriptionType',
      tax: 'Tax',
      usageEndTime: 'UsageEndTime',
      usageStartTime: 'UsageStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterTaxAmount: 'string',
      config: 'string',
      createTime: 'string',
      currency: 'string',
      instanceIDs: 'string',
      operator: 'string',
      orderId: 'string',
      orderSubType: 'string',
      orderType: 'string',
      originalConfig: 'string',
      paymentCurrency: 'string',
      paymentStatus: 'string',
      paymentTime: 'string',
      pretaxAmount: 'string',
      pretaxAmountLocal: 'string',
      pretaxGrossAmount: 'string',
      productCode: 'string',
      productType: 'string',
      quantity: 'string',
      region: 'string',
      relatedOrderId: 'string',
      subOrderId: 'string',
      subscriptionType: 'string',
      tax: 'string',
      usageEndTime: 'string',
      usageStartTime: 'string',
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
  orderList?: GetOrderDetailResponseBodyDataOrderList;
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostName: 'HostName',
      orderList: 'OrderList',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostName: 'string',
      orderList: GetOrderDetailResponseBodyDataOrderList,
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayAsYouGoPriceRequestModuleList extends $tea.Model {
  config?: string;
  moduleCode?: string;
  priceType?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      moduleCode: 'ModuleCode',
      priceType: 'PriceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      moduleCode: 'string',
      priceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayAsYouGoPriceResponseBodyDataModuleDetailsModuleDetail extends $tea.Model {
  costAfterDiscount?: number;
  invoiceDiscount?: number;
  moduleCode?: string;
  originalCost?: number;
  unitPrice?: number;
  static names(): { [key: string]: string } {
    return {
      costAfterDiscount: 'CostAfterDiscount',
      invoiceDiscount: 'InvoiceDiscount',
      moduleCode: 'ModuleCode',
      originalCost: 'OriginalCost',
      unitPrice: 'UnitPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costAfterDiscount: 'number',
      invoiceDiscount: 'number',
      moduleCode: 'string',
      originalCost: 'number',
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
  discountPrice?: number;
  originalPrice?: number;
  promotions?: GetResourcePackagePriceResponseBodyDataPromotions;
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      promotions: 'Promotions',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'number',
      originalPrice: 'number',
      promotions: GetResourcePackagePriceResponseBodyDataPromotions,
      tradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionPriceRequestModuleList extends $tea.Model {
  config?: string;
  moduleCode?: string;
  moduleStatus?: number;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      moduleCode: 'ModuleCode',
      moduleStatus: 'ModuleStatus',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      moduleCode: 'string',
      moduleStatus: 'number',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionPriceResponseBodyDataModuleDetailsModuleDetail extends $tea.Model {
  costAfterDiscount?: number;
  invoiceDiscount?: number;
  moduleCode?: string;
  originalCost?: number;
  unitPrice?: number;
  static names(): { [key: string]: string } {
    return {
      costAfterDiscount: 'CostAfterDiscount',
      invoiceDiscount: 'InvoiceDiscount',
      moduleCode: 'ModuleCode',
      originalCost: 'OriginalCost',
      unitPrice: 'UnitPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costAfterDiscount: 'number',
      invoiceDiscount: 'number',
      moduleCode: 'string',
      originalCost: 'number',
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
  currency?: string;
  discountPrice?: number;
  moduleDetails?: GetSubscriptionPriceResponseBodyDataModuleDetails;
  originalPrice?: number;
  promotionDetails?: GetSubscriptionPriceResponseBodyDataPromotionDetails;
  quantity?: number;
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      moduleDetails: 'ModuleDetails',
      originalPrice: 'OriginalPrice',
      promotionDetails: 'PromotionDetails',
      quantity: 'Quantity',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'number',
      moduleDetails: GetSubscriptionPriceResponseBodyDataModuleDetails,
      originalPrice: 'number',
      promotionDetails: GetSubscriptionPriceResponseBodyDataPromotionDetails,
      quantity: 'number',
      tradePrice: 'number',
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
  ownerUid?: number;
  unitId?: number;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      ownerUid: 'OwnerUid',
      unitId: 'UnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      ownerUid: 'number',
      unitId: 'number',
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
  currency?: string;
  mybankCreditAmount?: string;
  static names(): { [key: string]: string } {
    return {
      availableAmount: 'AvailableAmount',
      availableCashAmount: 'AvailableCashAmount',
      creditAmount: 'CreditAmount',
      currency: 'Currency',
      mybankCreditAmount: 'MybankCreditAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAmount: 'string',
      availableCashAmount: 'string',
      creditAmount: 'string',
      currency: 'string',
      mybankCreditAmount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountBillResponseBodyDataItemsItem extends $tea.Model {
  costUnit?: string;
  currency?: string;
  deductedByCashCoupons?: number;
  deductedByCoupons?: number;
  deductedByPrepaidCard?: number;
  invoiceDiscount?: number;
  outstandingAmount?: number;
  ownerID?: string;
  ownerName?: string;
  paymentAmount?: number;
  pipCode?: string;
  pretaxAmount?: number;
  pretaxGrossAmount?: number;
  productCode?: string;
  productName?: string;
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      costUnit: 'CostUnit',
      currency: 'Currency',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByCoupons: 'DeductedByCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      invoiceDiscount: 'InvoiceDiscount',
      outstandingAmount: 'OutstandingAmount',
      ownerID: 'OwnerID',
      ownerName: 'OwnerName',
      paymentAmount: 'PaymentAmount',
      pipCode: 'PipCode',
      pretaxAmount: 'PretaxAmount',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
      productName: 'ProductName',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costUnit: 'string',
      currency: 'string',
      deductedByCashCoupons: 'number',
      deductedByCoupons: 'number',
      deductedByPrepaidCard: 'number',
      invoiceDiscount: 'number',
      outstandingAmount: 'number',
      ownerID: 'string',
      ownerName: 'string',
      paymentAmount: 'number',
      pipCode: 'string',
      pretaxAmount: 'number',
      pretaxGrossAmount: 'number',
      productCode: 'string',
      productName: 'string',
      subscriptionType: 'string',
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
  accountID?: string;
  accountName?: string;
  billingCycle?: string;
  items?: QueryAccountBillResponseBodyDataItems;
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountID: 'AccountID',
      accountName: 'AccountName',
      billingCycle: 'BillingCycle',
      items: 'Items',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountID: 'string',
      accountName: 'string',
      billingCycle: 'string',
      items: QueryAccountBillResponseBodyDataItems,
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTransactionDetailsResponseBodyDataAccountTransactionsListAccountTransactionsList extends $tea.Model {
  amount?: string;
  balance?: string;
  billingCycle?: string;
  fundType?: string;
  recordID?: string;
  remarks?: string;
  transactionAccount?: string;
  transactionChannel?: string;
  transactionChannelSN?: string;
  transactionFlow?: string;
  transactionNumber?: string;
  transactionTime?: string;
  transactionType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      balance: 'Balance',
      billingCycle: 'BillingCycle',
      fundType: 'FundType',
      recordID: 'RecordID',
      remarks: 'Remarks',
      transactionAccount: 'TransactionAccount',
      transactionChannel: 'TransactionChannel',
      transactionChannelSN: 'TransactionChannelSN',
      transactionFlow: 'TransactionFlow',
      transactionNumber: 'TransactionNumber',
      transactionTime: 'TransactionTime',
      transactionType: 'TransactionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      balance: 'string',
      billingCycle: 'string',
      fundType: 'string',
      recordID: 'string',
      remarks: 'string',
      transactionAccount: 'string',
      transactionChannel: 'string',
      transactionChannelSN: 'string',
      transactionFlow: 'string',
      transactionNumber: 'string',
      transactionTime: 'string',
      transactionType: 'string',
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
  accountTransactionsList?: QueryAccountTransactionDetailsResponseBodyDataAccountTransactionsList;
  maxResults?: number;
  nextToken?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountTransactionsList: 'AccountTransactionsList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountTransactionsList: QueryAccountTransactionDetailsResponseBodyDataAccountTransactionsList,
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTransactionsResponseBodyDataAccountTransactionsListAccountTransactionsList extends $tea.Model {
  amount?: string;
  balance?: string;
  billingCycle?: string;
  fundType?: string;
  recordID?: string;
  remarks?: string;
  transactionAccount?: string;
  transactionChannel?: string;
  transactionChannelSN?: string;
  transactionFlow?: string;
  transactionNumber?: string;
  transactionTime?: string;
  transactionType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      balance: 'Balance',
      billingCycle: 'BillingCycle',
      fundType: 'FundType',
      recordID: 'RecordID',
      remarks: 'Remarks',
      transactionAccount: 'TransactionAccount',
      transactionChannel: 'TransactionChannel',
      transactionChannelSN: 'TransactionChannelSN',
      transactionFlow: 'TransactionFlow',
      transactionNumber: 'TransactionNumber',
      transactionTime: 'TransactionTime',
      transactionType: 'TransactionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      balance: 'string',
      billingCycle: 'string',
      fundType: 'string',
      recordID: 'string',
      remarks: 'string',
      transactionAccount: 'string',
      transactionChannel: 'string',
      transactionChannelSN: 'string',
      transactionFlow: 'string',
      transactionNumber: 'string',
      transactionTime: 'string',
      transactionType: 'string',
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
  accountTransactionsList?: QueryAccountTransactionsResponseBodyDataAccountTransactionsList;
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountTransactionsList: 'AccountTransactionsList',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountTransactionsList: QueryAccountTransactionsResponseBodyDataAccountTransactionsList,
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvailableInstancesResponseBodyDataInstanceList extends $tea.Model {
  createTime?: string;
  endTime?: string;
  expectedReleaseTime?: string;
  instanceID?: string;
  ownerId?: number;
  productCode?: string;
  productType?: string;
  region?: string;
  releaseTime?: string;
  renewStatus?: string;
  renewalDuration?: number;
  renewalDurationUnit?: string;
  seller?: string;
  sellerId?: number;
  status?: string;
  stopTime?: string;
  subStatus?: string;
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      endTime: 'EndTime',
      expectedReleaseTime: 'ExpectedReleaseTime',
      instanceID: 'InstanceID',
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      productType: 'ProductType',
      region: 'Region',
      releaseTime: 'ReleaseTime',
      renewStatus: 'RenewStatus',
      renewalDuration: 'RenewalDuration',
      renewalDurationUnit: 'RenewalDurationUnit',
      seller: 'Seller',
      sellerId: 'SellerId',
      status: 'Status',
      stopTime: 'StopTime',
      subStatus: 'SubStatus',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      endTime: 'string',
      expectedReleaseTime: 'string',
      instanceID: 'string',
      ownerId: 'number',
      productCode: 'string',
      productType: 'string',
      region: 'string',
      releaseTime: 'string',
      renewStatus: 'string',
      renewalDuration: 'number',
      renewalDurationUnit: 'string',
      seller: 'string',
      sellerId: 'number',
      status: 'string',
      stopTime: 'string',
      subStatus: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvailableInstancesResponseBodyData extends $tea.Model {
  instanceList?: QueryAvailableInstancesResponseBodyDataInstanceList[];
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceList: 'InstanceList',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceList: { 'type': 'array', 'itemType': QueryAvailableInstancesResponseBodyDataInstanceList },
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillResponseBodyDataItemsItem extends $tea.Model {
  afterTaxAmount?: number;
  commodityCode?: string;
  currency?: string;
  deductedByCashCoupons?: number;
  deductedByCoupons?: number;
  deductedByPrepaidCard?: number;
  invoiceDiscount?: number;
  item?: string;
  outstandingAmount?: number;
  ownerID?: string;
  paymentAmount?: number;
  paymentCurrency?: string;
  paymentTime?: string;
  paymentTransactionID?: string;
  pipCode?: string;
  pretaxAmount?: number;
  pretaxAmountLocal?: number;
  pretaxGrossAmount?: number;
  productCode?: string;
  productDetail?: string;
  productName?: string;
  productType?: string;
  recordID?: string;
  roundDownDiscount?: string;
  status?: string;
  subOrderId?: string;
  subscriptionType?: string;
  tax?: number;
  usageEndTime?: string;
  usageStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      afterTaxAmount: 'AfterTaxAmount',
      commodityCode: 'CommodityCode',
      currency: 'Currency',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByCoupons: 'DeductedByCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      invoiceDiscount: 'InvoiceDiscount',
      item: 'Item',
      outstandingAmount: 'OutstandingAmount',
      ownerID: 'OwnerID',
      paymentAmount: 'PaymentAmount',
      paymentCurrency: 'PaymentCurrency',
      paymentTime: 'PaymentTime',
      paymentTransactionID: 'PaymentTransactionID',
      pipCode: 'PipCode',
      pretaxAmount: 'PretaxAmount',
      pretaxAmountLocal: 'PretaxAmountLocal',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      productName: 'ProductName',
      productType: 'ProductType',
      recordID: 'RecordID',
      roundDownDiscount: 'RoundDownDiscount',
      status: 'Status',
      subOrderId: 'SubOrderId',
      subscriptionType: 'SubscriptionType',
      tax: 'Tax',
      usageEndTime: 'UsageEndTime',
      usageStartTime: 'UsageStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterTaxAmount: 'number',
      commodityCode: 'string',
      currency: 'string',
      deductedByCashCoupons: 'number',
      deductedByCoupons: 'number',
      deductedByPrepaidCard: 'number',
      invoiceDiscount: 'number',
      item: 'string',
      outstandingAmount: 'number',
      ownerID: 'string',
      paymentAmount: 'number',
      paymentCurrency: 'string',
      paymentTime: 'string',
      paymentTransactionID: 'string',
      pipCode: 'string',
      pretaxAmount: 'number',
      pretaxAmountLocal: 'number',
      pretaxGrossAmount: 'number',
      productCode: 'string',
      productDetail: 'string',
      productName: 'string',
      productType: 'string',
      recordID: 'string',
      roundDownDiscount: 'string',
      status: 'string',
      subOrderId: 'string',
      subscriptionType: 'string',
      tax: 'number',
      usageEndTime: 'string',
      usageStartTime: 'string',
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
  accountID?: string;
  accountName?: string;
  billingCycle?: string;
  items?: QueryBillResponseBodyDataItems;
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountID: 'AccountID',
      accountName: 'AccountName',
      billingCycle: 'BillingCycle',
      items: 'Items',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountID: 'string',
      accountName: 'string',
      billingCycle: 'string',
      items: QueryBillResponseBodyDataItems,
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillOverviewResponseBodyDataItemsItem extends $tea.Model {
  afterTaxAmount?: number;
  commodityCode?: string;
  currency?: string;
  deductedByCashCoupons?: number;
  deductedByCoupons?: number;
  deductedByPrepaidCard?: number;
  invoiceDiscount?: number;
  item?: string;
  outstandingAmount?: number;
  paymentAmount?: number;
  paymentCurrency?: string;
  pipCode?: string;
  pretaxAmount?: number;
  pretaxAmountLocal?: number;
  pretaxGrossAmount?: number;
  productCode?: string;
  productDetail?: string;
  productName?: string;
  productType?: string;
  roundDownDiscount?: string;
  subscriptionType?: string;
  tax?: number;
  static names(): { [key: string]: string } {
    return {
      afterTaxAmount: 'AfterTaxAmount',
      commodityCode: 'CommodityCode',
      currency: 'Currency',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByCoupons: 'DeductedByCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      invoiceDiscount: 'InvoiceDiscount',
      item: 'Item',
      outstandingAmount: 'OutstandingAmount',
      paymentAmount: 'PaymentAmount',
      paymentCurrency: 'PaymentCurrency',
      pipCode: 'PipCode',
      pretaxAmount: 'PretaxAmount',
      pretaxAmountLocal: 'PretaxAmountLocal',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      productName: 'ProductName',
      productType: 'ProductType',
      roundDownDiscount: 'RoundDownDiscount',
      subscriptionType: 'SubscriptionType',
      tax: 'Tax',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterTaxAmount: 'number',
      commodityCode: 'string',
      currency: 'string',
      deductedByCashCoupons: 'number',
      deductedByCoupons: 'number',
      deductedByPrepaidCard: 'number',
      invoiceDiscount: 'number',
      item: 'string',
      outstandingAmount: 'number',
      paymentAmount: 'number',
      paymentCurrency: 'string',
      pipCode: 'string',
      pretaxAmount: 'number',
      pretaxAmountLocal: 'number',
      pretaxGrossAmount: 'number',
      productCode: 'string',
      productDetail: 'string',
      productName: 'string',
      productType: 'string',
      roundDownDiscount: 'string',
      subscriptionType: 'string',
      tax: 'number',
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
  accountID?: string;
  accountName?: string;
  billingCycle?: string;
  items?: QueryBillOverviewResponseBodyDataItems;
  static names(): { [key: string]: string } {
    return {
      accountID: 'AccountID',
      accountName: 'AccountName',
      billingCycle: 'BillingCycle',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountID: 'string',
      accountName: 'string',
      billingCycle: 'string',
      items: QueryBillOverviewResponseBodyDataItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillToOSSSubscriptionResponseBodyDataItemsItem extends $tea.Model {
  bucketOwnerId?: number;
  subscribeBucket?: string;
  subscribeLanguage?: string;
  subscribeTime?: string;
  subscribeType?: string;
  static names(): { [key: string]: string } {
    return {
      bucketOwnerId: 'BucketOwnerId',
      subscribeBucket: 'SubscribeBucket',
      subscribeLanguage: 'SubscribeLanguage',
      subscribeTime: 'SubscribeTime',
      subscribeType: 'SubscribeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketOwnerId: 'number',
      subscribeBucket: 'string',
      subscribeLanguage: 'string',
      subscribeTime: 'string',
      subscribeType: 'string',
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
  applicableProducts?: string;
  applicableScenarios?: string;
  balance?: string;
  cashCouponId?: number;
  cashCouponNo?: string;
  effectiveTime?: string;
  expiryTime?: string;
  grantedTime?: string;
  nominalValue?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicableProducts: 'ApplicableProducts',
      applicableScenarios: 'ApplicableScenarios',
      balance: 'Balance',
      cashCouponId: 'CashCouponId',
      cashCouponNo: 'CashCouponNo',
      effectiveTime: 'EffectiveTime',
      expiryTime: 'ExpiryTime',
      grantedTime: 'GrantedTime',
      nominalValue: 'NominalValue',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicableProducts: 'string',
      applicableScenarios: 'string',
      balance: 'string',
      cashCouponId: 'number',
      cashCouponNo: 'string',
      effectiveTime: 'string',
      expiryTime: 'string',
      grantedTime: 'string',
      nominalValue: 'string',
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
  ownerUid?: number;
  parentUnitId?: number;
  unitId?: number;
  unitName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerUid: 'OwnerUid',
      parentUnitId: 'ParentUnitId',
      unitId: 'UnitId',
      unitName: 'UnitName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerUid: 'number',
      parentUnitId: 'number',
      unitId: 'number',
      unitName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResponseBodyData extends $tea.Model {
  costUnitDtoList?: QueryCostUnitResponseBodyDataCostUnitDtoList[];
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      costUnitDtoList: 'CostUnitDtoList',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costUnitDtoList: { 'type': 'array', 'itemType': QueryCostUnitResponseBodyDataCostUnitDtoList },
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResourceResponseBodyDataCostUnit extends $tea.Model {
  ownerUid?: number;
  parentUnitId?: number;
  unitId?: number;
  unitName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerUid: 'OwnerUid',
      parentUnitId: 'ParentUnitId',
      unitId: 'UnitId',
      unitName: 'UnitName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerUid: 'number',
      parentUnitId: 'number',
      unitId: 'number',
      unitName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResourceResponseBodyDataCostUnitStatisInfo extends $tea.Model {
  resourceCount?: number;
  resourceGroupCount?: number;
  subUnitCount?: number;
  totalResourceCount?: number;
  totalResourceGroupCount?: number;
  totalUserCount?: number;
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      resourceCount: 'ResourceCount',
      resourceGroupCount: 'ResourceGroupCount',
      subUnitCount: 'SubUnitCount',
      totalResourceCount: 'TotalResourceCount',
      totalResourceGroupCount: 'TotalResourceGroupCount',
      totalUserCount: 'TotalUserCount',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCount: 'number',
      resourceGroupCount: 'number',
      subUnitCount: 'number',
      totalResourceCount: 'number',
      totalResourceGroupCount: 'number',
      totalUserCount: 'number',
      userCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResourceResponseBodyDataResourceInstanceDtoList extends $tea.Model {
  apportionCode?: string;
  apportionName?: string;
  commodityCode?: string;
  commodityName?: string;
  relatedResources?: string;
  resourceGroup?: string;
  resourceId?: string;
  resourceNick?: string;
  resourceStatus?: string;
  resourceTag?: string;
  resourceType?: string;
  resourceUserId?: number;
  resourceUserName?: string;
  static names(): { [key: string]: string } {
    return {
      apportionCode: 'ApportionCode',
      apportionName: 'ApportionName',
      commodityCode: 'CommodityCode',
      commodityName: 'CommodityName',
      relatedResources: 'RelatedResources',
      resourceGroup: 'ResourceGroup',
      resourceId: 'ResourceId',
      resourceNick: 'ResourceNick',
      resourceStatus: 'ResourceStatus',
      resourceTag: 'ResourceTag',
      resourceType: 'ResourceType',
      resourceUserId: 'ResourceUserId',
      resourceUserName: 'ResourceUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apportionCode: 'string',
      apportionName: 'string',
      commodityCode: 'string',
      commodityName: 'string',
      relatedResources: 'string',
      resourceGroup: 'string',
      resourceId: 'string',
      resourceNick: 'string',
      resourceStatus: 'string',
      resourceTag: 'string',
      resourceType: 'string',
      resourceUserId: 'number',
      resourceUserName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResourceResponseBodyData extends $tea.Model {
  costUnit?: QueryCostUnitResourceResponseBodyDataCostUnit;
  costUnitStatisInfo?: QueryCostUnitResourceResponseBodyDataCostUnitStatisInfo;
  pageNum?: number;
  pageSize?: number;
  resourceInstanceDtoList?: QueryCostUnitResourceResponseBodyDataResourceInstanceDtoList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      costUnit: 'CostUnit',
      costUnitStatisInfo: 'CostUnitStatisInfo',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      resourceInstanceDtoList: 'ResourceInstanceDtoList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costUnit: QueryCostUnitResourceResponseBodyDataCostUnit,
      costUnitStatisInfo: QueryCostUnitResourceResponseBodyDataCostUnitStatisInfo,
      pageNum: 'number',
      pageSize: 'number',
      resourceInstanceDtoList: { 'type': 'array', 'itemType': QueryCostUnitResourceResponseBodyDataResourceInstanceDtoList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomerAddressListResponseBodyDataCustomerInvoiceAddressListCustomerInvoiceAddress extends $tea.Model {
  addressee?: string;
  bizType?: string;
  city?: string;
  county?: string;
  deliveryAddress?: string;
  id?: number;
  phone?: string;
  postalCode?: string;
  province?: string;
  street?: string;
  userId?: number;
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      addressee: 'Addressee',
      bizType: 'BizType',
      city: 'City',
      county: 'County',
      deliveryAddress: 'DeliveryAddress',
      id: 'Id',
      phone: 'Phone',
      postalCode: 'PostalCode',
      province: 'Province',
      street: 'Street',
      userId: 'UserId',
      userNick: 'UserNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressee: 'string',
      bizType: 'string',
      city: 'string',
      county: 'string',
      deliveryAddress: 'string',
      id: 'number',
      phone: 'string',
      postalCode: 'string',
      province: 'string',
      street: 'string',
      userId: 'number',
      userNick: 'string',
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
  billCycle?: string;
  billId?: number;
  bizTime?: string;
  bizType?: string;
  canInvoiceAmount?: number;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  invoicedAmount?: number;
  itemId?: number;
  name?: string;
  offsetAcceptAmount?: number;
  offsetCostAmount?: number;
  opId?: string;
  originalAmount?: number;
  outBizId?: string;
  presentAmount?: number;
  status?: number;
  type?: number;
  userId?: number;
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      billCycle: 'BillCycle',
      billId: 'BillId',
      bizTime: 'BizTime',
      bizType: 'BizType',
      canInvoiceAmount: 'CanInvoiceAmount',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      invoicedAmount: 'InvoicedAmount',
      itemId: 'ItemId',
      name: 'Name',
      offsetAcceptAmount: 'OffsetAcceptAmount',
      offsetCostAmount: 'OffsetCostAmount',
      opId: 'OpId',
      originalAmount: 'OriginalAmount',
      outBizId: 'OutBizId',
      presentAmount: 'PresentAmount',
      status: 'Status',
      type: 'Type',
      userId: 'UserId',
      userNick: 'UserNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billCycle: 'string',
      billId: 'number',
      bizTime: 'string',
      bizType: 'string',
      canInvoiceAmount: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      invoicedAmount: 'number',
      itemId: 'number',
      name: 'string',
      offsetAcceptAmount: 'number',
      offsetCostAmount: 'number',
      opId: 'string',
      originalAmount: 'number',
      outBizId: 'string',
      presentAmount: 'number',
      status: 'number',
      type: 'number',
      userId: 'number',
      userNick: 'string',
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
  evaluateList?: QueryEvaluateListResponseBodyDataEvaluateList;
  hostId?: string;
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  totalInvoiceAmount?: number;
  totalUnAppliedInvoiceAmount?: number;
  static names(): { [key: string]: string } {
    return {
      evaluateList: 'EvaluateList',
      hostId: 'HostId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalInvoiceAmount: 'TotalInvoiceAmount',
      totalUnAppliedInvoiceAmount: 'TotalUnAppliedInvoiceAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluateList: QueryEvaluateListResponseBodyDataEvaluateList,
      hostId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalInvoiceAmount: 'number',
      totalUnAppliedInvoiceAmount: 'number',
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
  billingItem?: string;
  billingType?: string;
  commodityCode?: string;
  costUnit?: string;
  currency?: string;
  deductedByCashCoupons?: number;
  deductedByCoupons?: number;
  deductedByPrepaidCard?: number;
  deductedByResourcePackage?: string;
  instanceConfig?: string;
  instanceID?: string;
  instanceSpec?: string;
  internetIP?: string;
  intranetIP?: string;
  invoiceDiscount?: number;
  item?: string;
  listPrice?: string;
  listPriceUnit?: string;
  nickName?: string;
  outstandingAmount?: number;
  ownerID?: string;
  paymentAmount?: number;
  pipCode?: string;
  pretaxAmount?: number;
  pretaxGrossAmount?: number;
  productCode?: string;
  productDetail?: string;
  productName?: string;
  productType?: string;
  region?: string;
  resourceGroup?: string;
  servicePeriod?: string;
  servicePeriodUnit?: string;
  subscriptionType?: string;
  tag?: string;
  usage?: string;
  usageUnit?: string;
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      billingDate: 'BillingDate',
      billingItem: 'BillingItem',
      billingType: 'BillingType',
      commodityCode: 'CommodityCode',
      costUnit: 'CostUnit',
      currency: 'Currency',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByCoupons: 'DeductedByCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      deductedByResourcePackage: 'DeductedByResourcePackage',
      instanceConfig: 'InstanceConfig',
      instanceID: 'InstanceID',
      instanceSpec: 'InstanceSpec',
      internetIP: 'InternetIP',
      intranetIP: 'IntranetIP',
      invoiceDiscount: 'InvoiceDiscount',
      item: 'Item',
      listPrice: 'ListPrice',
      listPriceUnit: 'ListPriceUnit',
      nickName: 'NickName',
      outstandingAmount: 'OutstandingAmount',
      ownerID: 'OwnerID',
      paymentAmount: 'PaymentAmount',
      pipCode: 'PipCode',
      pretaxAmount: 'PretaxAmount',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      productName: 'ProductName',
      productType: 'ProductType',
      region: 'Region',
      resourceGroup: 'ResourceGroup',
      servicePeriod: 'ServicePeriod',
      servicePeriodUnit: 'ServicePeriodUnit',
      subscriptionType: 'SubscriptionType',
      tag: 'Tag',
      usage: 'Usage',
      usageUnit: 'UsageUnit',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingDate: 'string',
      billingItem: 'string',
      billingType: 'string',
      commodityCode: 'string',
      costUnit: 'string',
      currency: 'string',
      deductedByCashCoupons: 'number',
      deductedByCoupons: 'number',
      deductedByPrepaidCard: 'number',
      deductedByResourcePackage: 'string',
      instanceConfig: 'string',
      instanceID: 'string',
      instanceSpec: 'string',
      internetIP: 'string',
      intranetIP: 'string',
      invoiceDiscount: 'number',
      item: 'string',
      listPrice: 'string',
      listPriceUnit: 'string',
      nickName: 'string',
      outstandingAmount: 'number',
      ownerID: 'string',
      paymentAmount: 'number',
      pipCode: 'string',
      pretaxAmount: 'number',
      pretaxGrossAmount: 'number',
      productCode: 'string',
      productDetail: 'string',
      productName: 'string',
      productType: 'string',
      region: 'string',
      resourceGroup: 'string',
      servicePeriod: 'string',
      servicePeriodUnit: 'string',
      subscriptionType: 'string',
      tag: 'string',
      usage: 'string',
      usageUnit: 'string',
      zone: 'string',
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
  accountID?: string;
  accountName?: string;
  billingCycle?: string;
  items?: QueryInstanceBillResponseBodyDataItems;
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountID: 'AccountID',
      accountName: 'AccountName',
      billingCycle: 'BillingCycle',
      items: 'Items',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountID: 'string',
      accountName: 'string',
      billingCycle: 'string',
      items: QueryInstanceBillResponseBodyDataItems,
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
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
  accountingUnit?: string;
  billType?: string;
  billingCycle?: string;
  currency?: string;
  deductedByCashCoupons?: string;
  deductedByCoupons?: string;
  deductedByPrepaidCard?: string;
  gaapDeductedByCashCoupons?: string;
  gaapDeductedByCoupons?: string;
  gaapDeductedByPrepaidCard?: string;
  gaapPaymentAmount?: string;
  gaapPretaxAmount?: string;
  gaapPretaxAmountLocal?: string;
  gaapPretaxGrossAmount?: string;
  gaapPricingDiscount?: string;
  instanceID?: string;
  monthGaapDeductedByCashCoupons?: string;
  monthGaapDeductedByCoupons?: string;
  monthGaapDeductedByPrepaidCard?: string;
  monthGaapPaymentAmount?: string;
  monthGaapPretaxAmount?: string;
  monthGaapPretaxAmountLocal?: string;
  monthGaapPretaxGrossAmount?: string;
  monthGaapPricingDiscount?: string;
  orderId?: string;
  orderType?: string;
  ownerID?: string;
  payTime?: string;
  payerAccount?: string;
  paymentAmount?: string;
  paymentCurrency?: string;
  pretaxAmount?: string;
  pretaxAmountLocal?: string;
  pretaxGrossAmount?: string;
  pricingDiscount?: string;
  productCode?: string;
  productType?: string;
  region?: string;
  resourceGroup?: string;
  subOrderId?: string;
  subscriptionType?: string;
  tag?: string;
  unallocatedDeductedByCashCoupons?: string;
  unallocatedDeductedByCoupons?: string;
  unallocatedDeductedByPrepaidCard?: string;
  unallocatedPaymentAmount?: string;
  unallocatedPretaxAmount?: string;
  unallocatedPretaxAmountLocal?: string;
  unallocatedPretaxGrossAmount?: string;
  unallocatedPricingDiscount?: string;
  usageEndDate?: string;
  usageStartDate?: string;
  static names(): { [key: string]: string } {
    return {
      accountingUnit: 'AccountingUnit',
      billType: 'BillType',
      billingCycle: 'BillingCycle',
      currency: 'Currency',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByCoupons: 'DeductedByCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      gaapDeductedByCashCoupons: 'GaapDeductedByCashCoupons',
      gaapDeductedByCoupons: 'GaapDeductedByCoupons',
      gaapDeductedByPrepaidCard: 'GaapDeductedByPrepaidCard',
      gaapPaymentAmount: 'GaapPaymentAmount',
      gaapPretaxAmount: 'GaapPretaxAmount',
      gaapPretaxAmountLocal: 'GaapPretaxAmountLocal',
      gaapPretaxGrossAmount: 'GaapPretaxGrossAmount',
      gaapPricingDiscount: 'GaapPricingDiscount',
      instanceID: 'InstanceID',
      monthGaapDeductedByCashCoupons: 'MonthGaapDeductedByCashCoupons',
      monthGaapDeductedByCoupons: 'MonthGaapDeductedByCoupons',
      monthGaapDeductedByPrepaidCard: 'MonthGaapDeductedByPrepaidCard',
      monthGaapPaymentAmount: 'MonthGaapPaymentAmount',
      monthGaapPretaxAmount: 'MonthGaapPretaxAmount',
      monthGaapPretaxAmountLocal: 'MonthGaapPretaxAmountLocal',
      monthGaapPretaxGrossAmount: 'MonthGaapPretaxGrossAmount',
      monthGaapPricingDiscount: 'MonthGaapPricingDiscount',
      orderId: 'OrderId',
      orderType: 'OrderType',
      ownerID: 'OwnerID',
      payTime: 'PayTime',
      payerAccount: 'PayerAccount',
      paymentAmount: 'PaymentAmount',
      paymentCurrency: 'PaymentCurrency',
      pretaxAmount: 'PretaxAmount',
      pretaxAmountLocal: 'PretaxAmountLocal',
      pretaxGrossAmount: 'PretaxGrossAmount',
      pricingDiscount: 'PricingDiscount',
      productCode: 'ProductCode',
      productType: 'ProductType',
      region: 'Region',
      resourceGroup: 'ResourceGroup',
      subOrderId: 'SubOrderId',
      subscriptionType: 'SubscriptionType',
      tag: 'Tag',
      unallocatedDeductedByCashCoupons: 'UnallocatedDeductedByCashCoupons',
      unallocatedDeductedByCoupons: 'UnallocatedDeductedByCoupons',
      unallocatedDeductedByPrepaidCard: 'UnallocatedDeductedByPrepaidCard',
      unallocatedPaymentAmount: 'UnallocatedPaymentAmount',
      unallocatedPretaxAmount: 'UnallocatedPretaxAmount',
      unallocatedPretaxAmountLocal: 'UnallocatedPretaxAmountLocal',
      unallocatedPretaxGrossAmount: 'UnallocatedPretaxGrossAmount',
      unallocatedPricingDiscount: 'UnallocatedPricingDiscount',
      usageEndDate: 'UsageEndDate',
      usageStartDate: 'UsageStartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountingUnit: 'string',
      billType: 'string',
      billingCycle: 'string',
      currency: 'string',
      deductedByCashCoupons: 'string',
      deductedByCoupons: 'string',
      deductedByPrepaidCard: 'string',
      gaapDeductedByCashCoupons: 'string',
      gaapDeductedByCoupons: 'string',
      gaapDeductedByPrepaidCard: 'string',
      gaapPaymentAmount: 'string',
      gaapPretaxAmount: 'string',
      gaapPretaxAmountLocal: 'string',
      gaapPretaxGrossAmount: 'string',
      gaapPricingDiscount: 'string',
      instanceID: 'string',
      monthGaapDeductedByCashCoupons: 'string',
      monthGaapDeductedByCoupons: 'string',
      monthGaapDeductedByPrepaidCard: 'string',
      monthGaapPaymentAmount: 'string',
      monthGaapPretaxAmount: 'string',
      monthGaapPretaxAmountLocal: 'string',
      monthGaapPretaxGrossAmount: 'string',
      monthGaapPricingDiscount: 'string',
      orderId: 'string',
      orderType: 'string',
      ownerID: 'string',
      payTime: 'string',
      payerAccount: 'string',
      paymentAmount: 'string',
      paymentCurrency: 'string',
      pretaxAmount: 'string',
      pretaxAmountLocal: 'string',
      pretaxGrossAmount: 'string',
      pricingDiscount: 'string',
      productCode: 'string',
      productType: 'string',
      region: 'string',
      resourceGroup: 'string',
      subOrderId: 'string',
      subscriptionType: 'string',
      tag: 'string',
      unallocatedDeductedByCashCoupons: 'string',
      unallocatedDeductedByCoupons: 'string',
      unallocatedDeductedByPrepaidCard: 'string',
      unallocatedPaymentAmount: 'string',
      unallocatedPretaxAmount: 'string',
      unallocatedPretaxAmountLocal: 'string',
      unallocatedPretaxGrossAmount: 'string',
      unallocatedPricingDiscount: 'string',
      usageEndDate: 'string',
      usageStartDate: 'string',
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
  modules?: QueryInstanceGaapCostResponseBodyDataModules;
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      modules: 'Modules',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      modules: QueryInstanceGaapCostResponseBodyDataModules,
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvoicingCustomerListResponseBodyDataCustomerInvoiceListCustomerInvoice extends $tea.Model {
  adjustType?: number;
  bank?: string;
  bankNo?: string;
  customerType?: number;
  defaultRemark?: string;
  endCycle?: number;
  gmtCreate?: string;
  id?: number;
  invoiceTitle?: string;
  issueType?: number;
  operatingLicenseAddress?: string;
  operatingLicensePhone?: string;
  registerNo?: string;
  startCycle?: number;
  status?: number;
  taxationLicense?: string;
  taxpayerType?: number;
  titleChangeInstructions?: string;
  type?: number;
  userId?: number;
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      adjustType: 'AdjustType',
      bank: 'Bank',
      bankNo: 'BankNo',
      customerType: 'CustomerType',
      defaultRemark: 'DefaultRemark',
      endCycle: 'EndCycle',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      invoiceTitle: 'InvoiceTitle',
      issueType: 'IssueType',
      operatingLicenseAddress: 'OperatingLicenseAddress',
      operatingLicensePhone: 'OperatingLicensePhone',
      registerNo: 'RegisterNo',
      startCycle: 'StartCycle',
      status: 'Status',
      taxationLicense: 'TaxationLicense',
      taxpayerType: 'TaxpayerType',
      titleChangeInstructions: 'TitleChangeInstructions',
      type: 'Type',
      userId: 'UserId',
      userNick: 'UserNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustType: 'number',
      bank: 'string',
      bankNo: 'string',
      customerType: 'number',
      defaultRemark: 'string',
      endCycle: 'number',
      gmtCreate: 'string',
      id: 'number',
      invoiceTitle: 'string',
      issueType: 'number',
      operatingLicenseAddress: 'string',
      operatingLicensePhone: 'string',
      registerNo: 'string',
      startCycle: 'number',
      status: 'number',
      taxationLicense: 'string',
      taxpayerType: 'number',
      titleChangeInstructions: 'string',
      type: 'number',
      userId: 'number',
      userNick: 'string',
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
  afterTaxAmount?: number;
  currency?: string;
  deductedByCashCoupons?: number;
  deductedByCoupons?: number;
  deductedByPrepaidCard?: number;
  invoiceDiscount?: number;
  item?: string;
  outstandingAmount?: number;
  paymentAmount?: number;
  paymentCurrency?: string;
  pretaxAmount?: number;
  pretaxAmountLocal?: number;
  pretaxGrossAmount?: number;
  productCode?: string;
  productType?: string;
  solutionCode?: string;
  solutionName?: string;
  subscriptionType?: string;
  tax?: number;
  static names(): { [key: string]: string } {
    return {
      afterTaxAmount: 'AfterTaxAmount',
      currency: 'Currency',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByCoupons: 'DeductedByCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      invoiceDiscount: 'InvoiceDiscount',
      item: 'Item',
      outstandingAmount: 'OutstandingAmount',
      paymentAmount: 'PaymentAmount',
      paymentCurrency: 'PaymentCurrency',
      pretaxAmount: 'PretaxAmount',
      pretaxAmountLocal: 'PretaxAmountLocal',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
      productType: 'ProductType',
      solutionCode: 'SolutionCode',
      solutionName: 'SolutionName',
      subscriptionType: 'SubscriptionType',
      tax: 'Tax',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterTaxAmount: 'number',
      currency: 'string',
      deductedByCashCoupons: 'number',
      deductedByCoupons: 'number',
      deductedByPrepaidCard: 'number',
      invoiceDiscount: 'number',
      item: 'string',
      outstandingAmount: 'number',
      paymentAmount: 'number',
      paymentCurrency: 'string',
      pretaxAmount: 'number',
      pretaxAmountLocal: 'number',
      pretaxGrossAmount: 'number',
      productCode: 'string',
      productType: 'string',
      solutionCode: 'string',
      solutionName: 'string',
      subscriptionType: 'string',
      tax: 'number',
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
  billingCycle?: string;
  items?: QueryMonthlyBillResponseBodyDataItems;
  newInvoiceAmount?: number;
  outstandingAmount?: number;
  totalOutstandingAmount?: number;
  static names(): { [key: string]: string } {
    return {
      billingCycle: 'BillingCycle',
      items: 'Items',
      newInvoiceAmount: 'NewInvoiceAmount',
      outstandingAmount: 'OutstandingAmount',
      totalOutstandingAmount: 'TotalOutstandingAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingCycle: 'string',
      items: QueryMonthlyBillResponseBodyDataItems,
      newInvoiceAmount: 'number',
      outstandingAmount: 'number',
      totalOutstandingAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonthlyInstanceConsumptionResponseBodyDataItemsItem extends $tea.Model {
  afterTaxAmount?: number;
  currency?: string;
  discountAmount?: number;
  instanceID?: string;
  ownerID?: string;
  payerAccount?: string;
  paymentCurrency?: string;
  pretaxAmount?: number;
  pretaxAmountLocal?: number;
  pretaxGrossAmount?: number;
  productCode?: string;
  productType?: string;
  region?: string;
  resourceGroup?: string;
  subscriptionType?: string;
  tag?: string;
  tax?: number;
  static names(): { [key: string]: string } {
    return {
      afterTaxAmount: 'AfterTaxAmount',
      currency: 'Currency',
      discountAmount: 'DiscountAmount',
      instanceID: 'InstanceID',
      ownerID: 'OwnerID',
      payerAccount: 'PayerAccount',
      paymentCurrency: 'PaymentCurrency',
      pretaxAmount: 'PretaxAmount',
      pretaxAmountLocal: 'PretaxAmountLocal',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
      productType: 'ProductType',
      region: 'Region',
      resourceGroup: 'ResourceGroup',
      subscriptionType: 'SubscriptionType',
      tag: 'Tag',
      tax: 'Tax',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterTaxAmount: 'number',
      currency: 'string',
      discountAmount: 'number',
      instanceID: 'string',
      ownerID: 'string',
      payerAccount: 'string',
      paymentCurrency: 'string',
      pretaxAmount: 'number',
      pretaxAmountLocal: 'number',
      pretaxGrossAmount: 'number',
      productCode: 'string',
      productType: 'string',
      region: 'string',
      resourceGroup: 'string',
      subscriptionType: 'string',
      tag: 'string',
      tax: 'number',
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
  billingCycle?: string;
  items?: QueryMonthlyInstanceConsumptionResponseBodyDataItems;
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      billingCycle: 'BillingCycle',
      items: 'Items',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingCycle: 'string',
      items: QueryMonthlyInstanceConsumptionResponseBodyDataItems,
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrdersResponseBodyDataOrderListOrder extends $tea.Model {
  afterTaxAmount?: string;
  createTime?: string;
  currency?: string;
  orderId?: string;
  orderType?: string;
  paymentCurrency?: string;
  paymentStatus?: string;
  paymentTime?: string;
  pretaxAmount?: string;
  pretaxAmountLocal?: string;
  pretaxGrossAmount?: string;
  productCode?: string;
  productType?: string;
  relatedOrderId?: string;
  subscriptionType?: string;
  tax?: string;
  static names(): { [key: string]: string } {
    return {
      afterTaxAmount: 'AfterTaxAmount',
      createTime: 'CreateTime',
      currency: 'Currency',
      orderId: 'OrderId',
      orderType: 'OrderType',
      paymentCurrency: 'PaymentCurrency',
      paymentStatus: 'PaymentStatus',
      paymentTime: 'PaymentTime',
      pretaxAmount: 'PretaxAmount',
      pretaxAmountLocal: 'PretaxAmountLocal',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
      productType: 'ProductType',
      relatedOrderId: 'RelatedOrderId',
      subscriptionType: 'SubscriptionType',
      tax: 'Tax',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterTaxAmount: 'string',
      createTime: 'string',
      currency: 'string',
      orderId: 'string',
      orderType: 'string',
      paymentCurrency: 'string',
      paymentStatus: 'string',
      paymentTime: 'string',
      pretaxAmount: 'string',
      pretaxAmountLocal: 'string',
      pretaxGrossAmount: 'string',
      productCode: 'string',
      productType: 'string',
      relatedOrderId: 'string',
      subscriptionType: 'string',
      tax: 'string',
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
  orderList?: QueryOrdersResponseBodyDataOrderList;
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostName: 'HostName',
      orderList: 'OrderList',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostName: 'string',
      orderList: QueryOrdersResponseBodyDataOrderList,
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
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
  applicableProducts?: string;
  applicableScenarios?: string;
  balance?: string;
  effectiveTime?: string;
  expiryTime?: string;
  grantedTime?: string;
  nominalValue?: string;
  prepaidCardId?: number;
  prepaidCardNo?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicableProducts: 'ApplicableProducts',
      applicableScenarios: 'ApplicableScenarios',
      balance: 'Balance',
      effectiveTime: 'EffectiveTime',
      expiryTime: 'ExpiryTime',
      grantedTime: 'GrantedTime',
      nominalValue: 'NominalValue',
      prepaidCardId: 'PrepaidCardId',
      prepaidCardNo: 'PrepaidCardNo',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicableProducts: 'string',
      applicableScenarios: 'string',
      balance: 'string',
      effectiveTime: 'string',
      expiryTime: 'string',
      grantedTime: 'string',
      nominalValue: 'string',
      prepaidCardId: 'number',
      prepaidCardNo: 'string',
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
  pageNum?: number;
  pageSize?: number;
  productList?: QueryProductListResponseBodyDataProductList;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productList: 'ProductList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      productList: QueryProductListResponseBodyDataProductList,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRedeemResponseBodyDataRedeemRedeem extends $tea.Model {
  applicableProducts?: string;
  balance?: string;
  effectiveTime?: string;
  expiryTime?: string;
  grantedTime?: string;
  nominalValue?: string;
  redeemId?: string;
  redeemNo?: string;
  specification?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicableProducts: 'ApplicableProducts',
      balance: 'Balance',
      effectiveTime: 'EffectiveTime',
      expiryTime: 'ExpiryTime',
      grantedTime: 'GrantedTime',
      nominalValue: 'NominalValue',
      redeemId: 'RedeemId',
      redeemNo: 'RedeemNo',
      specification: 'Specification',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicableProducts: 'string',
      balance: 'string',
      effectiveTime: 'string',
      expiryTime: 'string',
      grantedTime: 'string',
      nominalValue: 'string',
      redeemId: 'string',
      redeemNo: 'string',
      specification: 'string',
      status: 'string',
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
  redeem?: QueryRedeemResponseBodyDataRedeem;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      redeem: 'Redeem',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      redeem: QueryRedeemResponseBodyDataRedeem,
      totalCount: 'number',
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

export class QueryRIUtilizationDetailResponseBodyDataDetailListDetailList extends $tea.Model {
  deductDate?: string;
  deductFactorTotal?: number;
  deductHours?: string;
  deductQuantity?: number;
  deductedCommodityCode?: string;
  deductedInstanceId?: string;
  deductedProductDetail?: string;
  instanceSpec?: string;
  RIInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      deductDate: 'DeductDate',
      deductFactorTotal: 'DeductFactorTotal',
      deductHours: 'DeductHours',
      deductQuantity: 'DeductQuantity',
      deductedCommodityCode: 'DeductedCommodityCode',
      deductedInstanceId: 'DeductedInstanceId',
      deductedProductDetail: 'DeductedProductDetail',
      instanceSpec: 'InstanceSpec',
      RIInstanceId: 'RIInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deductDate: 'string',
      deductFactorTotal: 'number',
      deductHours: 'string',
      deductQuantity: 'number',
      deductedCommodityCode: 'string',
      deductedInstanceId: 'string',
      deductedProductDetail: 'string',
      instanceSpec: 'string',
      RIInstanceId: 'string',
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
  detailList?: QueryRIUtilizationDetailResponseBodyDataDetailList;
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      detailList: 'DetailList',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailList: QueryRIUtilizationDetailResponseBodyDataDetailList,
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
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
  afterTaxAmount?: number;
  commodityCode?: string;
  currency?: string;
  deductedByCashCoupons?: number;
  deductedByCoupons?: number;
  deductedByPrepaidCard?: number;
  invoiceDiscount?: number;
  item?: string;
  outstandingAmount?: number;
  ownerID?: string;
  paymentAmount?: number;
  paymentCurrency?: string;
  paymentTime?: string;
  paymentTransactionID?: string;
  pipCode?: string;
  pretaxAmount?: number;
  pretaxAmountLocal?: number;
  pretaxGrossAmount?: number;
  productCode?: string;
  productDetail?: string;
  productName?: string;
  productType?: string;
  recordID?: string;
  roundDownDiscount?: string;
  status?: string;
  subOrderId?: string;
  subscriptionType?: string;
  tax?: number;
  usageEndTime?: string;
  usageStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      afterTaxAmount: 'AfterTaxAmount',
      commodityCode: 'CommodityCode',
      currency: 'Currency',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByCoupons: 'DeductedByCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      invoiceDiscount: 'InvoiceDiscount',
      item: 'Item',
      outstandingAmount: 'OutstandingAmount',
      ownerID: 'OwnerID',
      paymentAmount: 'PaymentAmount',
      paymentCurrency: 'PaymentCurrency',
      paymentTime: 'PaymentTime',
      paymentTransactionID: 'PaymentTransactionID',
      pipCode: 'PipCode',
      pretaxAmount: 'PretaxAmount',
      pretaxAmountLocal: 'PretaxAmountLocal',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      productName: 'ProductName',
      productType: 'ProductType',
      recordID: 'RecordID',
      roundDownDiscount: 'RoundDownDiscount',
      status: 'Status',
      subOrderId: 'SubOrderId',
      subscriptionType: 'SubscriptionType',
      tax: 'Tax',
      usageEndTime: 'UsageEndTime',
      usageStartTime: 'UsageStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterTaxAmount: 'number',
      commodityCode: 'string',
      currency: 'string',
      deductedByCashCoupons: 'number',
      deductedByCoupons: 'number',
      deductedByPrepaidCard: 'number',
      invoiceDiscount: 'number',
      item: 'string',
      outstandingAmount: 'number',
      ownerID: 'string',
      paymentAmount: 'number',
      paymentCurrency: 'string',
      paymentTime: 'string',
      paymentTransactionID: 'string',
      pipCode: 'string',
      pretaxAmount: 'number',
      pretaxAmountLocal: 'number',
      pretaxGrossAmount: 'number',
      productCode: 'string',
      productDetail: 'string',
      productName: 'string',
      productType: 'string',
      recordID: 'string',
      roundDownDiscount: 'string',
      status: 'string',
      subOrderId: 'string',
      subscriptionType: 'string',
      tax: 'number',
      usageEndTime: 'string',
      usageStartTime: 'string',
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
  accountID?: string;
  accountName?: string;
  billingCycle?: string;
  items?: QuerySettleBillResponseBodyDataItems;
  maxResults?: number;
  nextToken?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountID: 'AccountID',
      accountName: 'AccountName',
      billingCycle: 'BillingCycle',
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountID: 'string',
      accountName: 'string',
      billingCycle: 'string',
      items: QuerySettleBillResponseBodyDataItems,
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySettlementBillResponseBodyDataItemsItem extends $tea.Model {
  accountDiscount?: number;
  afterTaxAmount?: number;
  billID?: string;
  chargeDiscount?: number;
  clearedTime?: string;
  config?: string;
  createTime?: string;
  currency?: string;
  deductedByCashCoupons?: number;
  deductedByCoupons?: number;
  deductedByPrepaidCard?: number;
  invoiceNo?: string;
  item?: string;
  linkedCustomerOrderID?: string;
  mybankPaymentAmount?: number;
  orderID?: string;
  orderType?: string;
  originalOrderID?: string;
  outstandingAmount?: number;
  ownerID?: string;
  payerAccount?: string;
  paymentAmount?: number;
  paymentCurrency?: string;
  paymentTime?: string;
  pretaxAmount?: number;
  pretaxAmountLocal?: number;
  pretaxGrossAmount?: number;
  previousBillingCycleBalance?: number;
  productCode?: string;
  productType?: string;
  promotion?: string;
  quantity?: string;
  recordID?: string;
  region?: string;
  seller?: string;
  solutionID?: string;
  solutionName?: string;
  status?: string;
  suborderID?: string;
  subscriptionType?: string;
  tax?: number;
  usageEndTime?: string;
  usageStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      accountDiscount: 'AccountDiscount',
      afterTaxAmount: 'AfterTaxAmount',
      billID: 'BillID',
      chargeDiscount: 'ChargeDiscount',
      clearedTime: 'ClearedTime',
      config: 'Config',
      createTime: 'CreateTime',
      currency: 'Currency',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByCoupons: 'DeductedByCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      invoiceNo: 'InvoiceNo',
      item: 'Item',
      linkedCustomerOrderID: 'LinkedCustomerOrderID',
      mybankPaymentAmount: 'MybankPaymentAmount',
      orderID: 'OrderID',
      orderType: 'OrderType',
      originalOrderID: 'OriginalOrderID',
      outstandingAmount: 'OutstandingAmount',
      ownerID: 'OwnerID',
      payerAccount: 'PayerAccount',
      paymentAmount: 'PaymentAmount',
      paymentCurrency: 'PaymentCurrency',
      paymentTime: 'PaymentTime',
      pretaxAmount: 'PretaxAmount',
      pretaxAmountLocal: 'PretaxAmountLocal',
      pretaxGrossAmount: 'PretaxGrossAmount',
      previousBillingCycleBalance: 'PreviousBillingCycleBalance',
      productCode: 'ProductCode',
      productType: 'ProductType',
      promotion: 'Promotion',
      quantity: 'Quantity',
      recordID: 'RecordID',
      region: 'Region',
      seller: 'Seller',
      solutionID: 'SolutionID',
      solutionName: 'SolutionName',
      status: 'Status',
      suborderID: 'SuborderID',
      subscriptionType: 'SubscriptionType',
      tax: 'Tax',
      usageEndTime: 'UsageEndTime',
      usageStartTime: 'UsageStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDiscount: 'number',
      afterTaxAmount: 'number',
      billID: 'string',
      chargeDiscount: 'number',
      clearedTime: 'string',
      config: 'string',
      createTime: 'string',
      currency: 'string',
      deductedByCashCoupons: 'number',
      deductedByCoupons: 'number',
      deductedByPrepaidCard: 'number',
      invoiceNo: 'string',
      item: 'string',
      linkedCustomerOrderID: 'string',
      mybankPaymentAmount: 'number',
      orderID: 'string',
      orderType: 'string',
      originalOrderID: 'string',
      outstandingAmount: 'number',
      ownerID: 'string',
      payerAccount: 'string',
      paymentAmount: 'number',
      paymentCurrency: 'string',
      paymentTime: 'string',
      pretaxAmount: 'number',
      pretaxAmountLocal: 'number',
      pretaxGrossAmount: 'number',
      previousBillingCycleBalance: 'number',
      productCode: 'string',
      productType: 'string',
      promotion: 'string',
      quantity: 'string',
      recordID: 'string',
      region: 'string',
      seller: 'string',
      solutionID: 'string',
      solutionName: 'string',
      status: 'string',
      suborderID: 'string',
      subscriptionType: 'string',
      tax: 'number',
      usageEndTime: 'string',
      usageStartTime: 'string',
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
  billingCycle?: string;
  items?: QuerySettlementBillResponseBodyDataItems;
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      billingCycle: 'BillingCycle',
      items: 'Items',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingCycle: 'string',
      items: QuerySettlementBillResponseBodyDataItems,
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySplitItemBillResponseBodyDataItemsItem extends $tea.Model {
  billingDate?: string;
  billingItem?: string;
  billingType?: string;
  commodityCode?: string;
  costUnit?: string;
  currency?: string;
  deductedByCashCoupons?: number;
  deductedByCoupons?: number;
  deductedByPrepaidCard?: number;
  deductedByResourcePackage?: string;
  instanceConfig?: string;
  instanceID?: string;
  instanceSpec?: string;
  internetIP?: string;
  intranetIP?: string;
  invoiceDiscount?: number;
  item?: string;
  listPrice?: string;
  listPriceUnit?: string;
  nickName?: string;
  outstandingAmount?: number;
  ownerID?: string;
  paymentAmount?: number;
  pipCode?: string;
  pretaxAmount?: number;
  pretaxGrossAmount?: number;
  productCode?: string;
  productDetail?: string;
  productName?: string;
  productType?: string;
  region?: string;
  resourceGroup?: string;
  servicePeriod?: string;
  splitItemID?: string;
  splitItemName?: string;
  subscriptionType?: string;
  tag?: string;
  usage?: string;
  usageUnit?: string;
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      billingDate: 'BillingDate',
      billingItem: 'BillingItem',
      billingType: 'BillingType',
      commodityCode: 'CommodityCode',
      costUnit: 'CostUnit',
      currency: 'Currency',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByCoupons: 'DeductedByCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      deductedByResourcePackage: 'DeductedByResourcePackage',
      instanceConfig: 'InstanceConfig',
      instanceID: 'InstanceID',
      instanceSpec: 'InstanceSpec',
      internetIP: 'InternetIP',
      intranetIP: 'IntranetIP',
      invoiceDiscount: 'InvoiceDiscount',
      item: 'Item',
      listPrice: 'ListPrice',
      listPriceUnit: 'ListPriceUnit',
      nickName: 'NickName',
      outstandingAmount: 'OutstandingAmount',
      ownerID: 'OwnerID',
      paymentAmount: 'PaymentAmount',
      pipCode: 'PipCode',
      pretaxAmount: 'PretaxAmount',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      productName: 'ProductName',
      productType: 'ProductType',
      region: 'Region',
      resourceGroup: 'ResourceGroup',
      servicePeriod: 'ServicePeriod',
      splitItemID: 'SplitItemID',
      splitItemName: 'SplitItemName',
      subscriptionType: 'SubscriptionType',
      tag: 'Tag',
      usage: 'Usage',
      usageUnit: 'UsageUnit',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingDate: 'string',
      billingItem: 'string',
      billingType: 'string',
      commodityCode: 'string',
      costUnit: 'string',
      currency: 'string',
      deductedByCashCoupons: 'number',
      deductedByCoupons: 'number',
      deductedByPrepaidCard: 'number',
      deductedByResourcePackage: 'string',
      instanceConfig: 'string',
      instanceID: 'string',
      instanceSpec: 'string',
      internetIP: 'string',
      intranetIP: 'string',
      invoiceDiscount: 'number',
      item: 'string',
      listPrice: 'string',
      listPriceUnit: 'string',
      nickName: 'string',
      outstandingAmount: 'number',
      ownerID: 'string',
      paymentAmount: 'number',
      pipCode: 'string',
      pretaxAmount: 'number',
      pretaxGrossAmount: 'number',
      productCode: 'string',
      productDetail: 'string',
      productName: 'string',
      productType: 'string',
      region: 'string',
      resourceGroup: 'string',
      servicePeriod: 'string',
      splitItemID: 'string',
      splitItemName: 'string',
      subscriptionType: 'string',
      tag: 'string',
      usage: 'string',
      usageUnit: 'string',
      zone: 'string',
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
  accountID?: string;
  accountName?: string;
  billingCycle?: string;
  items?: QuerySplitItemBillResponseBodyDataItems;
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountID: 'AccountID',
      accountName: 'AccountName',
      billingCycle: 'BillingCycle',
      items: 'Items',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountID: 'string',
      accountName: 'string',
      billingCycle: 'string',
      items: QuerySplitItemBillResponseBodyDataItems,
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserOmsDataResponseBodyData extends $tea.Model {
  hostId?: string;
  marker?: string;
  omsData?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      marker: 'Marker',
      omsData: 'OmsData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      marker: 'string',
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
  instanceId?: string;
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      orderId: 'number',
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
  instanceId?: string;
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      orderId: 'number',
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
