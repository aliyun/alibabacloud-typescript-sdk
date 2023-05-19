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
  childNick?: string;
  childUserId?: number;
  parentUserId?: number;
  permissionCodes?: string[];
  relationType?: string;
  requestId?: string;
  roleCodes?: string[];
  static names(): { [key: string]: string } {
    return {
      childNick: 'ChildNick',
      childUserId: 'ChildUserId',
      parentUserId: 'ParentUserId',
      permissionCodes: 'PermissionCodes',
      relationType: 'RelationType',
      requestId: 'RequestId',
      roleCodes: 'RoleCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childNick: 'string',
      childUserId: 'number',
      parentUserId: 'number',
      permissionCodes: { 'type': 'array', 'itemType': 'string' },
      relationType: 'string',
      requestId: 'string',
      roleCodes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAccountRelationResponseBody extends $tea.Model {
  code?: string;
  data?: AddAccountRelationResponseBodyData;
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
      data: AddAccountRelationResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAccountRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddAccountRelationResponseBody;
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
      body: AddAccountRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateCostUnitResourceRequest extends $tea.Model {
  fromUnitId?: number;
  fromUnitUserId?: number;
  resourceInstanceList?: AllocateCostUnitResourceRequestResourceInstanceList[];
  toUnitId?: number;
  toUnitUserId?: number;
  static names(): { [key: string]: string } {
    return {
      fromUnitId: 'FromUnitId',
      fromUnitUserId: 'FromUnitUserId',
      resourceInstanceList: 'ResourceInstanceList',
      toUnitId: 'ToUnitId',
      toUnitUserId: 'ToUnitUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromUnitId: 'number',
      fromUnitUserId: 'number',
      resourceInstanceList: { 'type': 'array', 'itemType': AllocateCostUnitResourceRequestResourceInstanceList },
      toUnitId: 'number',
      toUnitUserId: 'number',
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
  statusCode: number;
  body: AllocateCostUnitResourceResponseBody;
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
      body: AllocateCostUnitResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyInvoiceRequest extends $tea.Model {
  addressId?: number;
  applyUserNick?: string;
  customerId?: number;
  invoiceAmount?: number;
  invoiceByAmount?: boolean;
  invoicingType?: number;
  ownerId?: number;
  processWay?: number;
  selectedIds?: number[];
  userRemark?: string;
  static names(): { [key: string]: string } {
    return {
      addressId: 'AddressId',
      applyUserNick: 'ApplyUserNick',
      customerId: 'CustomerId',
      invoiceAmount: 'InvoiceAmount',
      invoiceByAmount: 'InvoiceByAmount',
      invoicingType: 'InvoicingType',
      ownerId: 'OwnerId',
      processWay: 'ProcessWay',
      selectedIds: 'SelectedIds',
      userRemark: 'UserRemark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressId: 'number',
      applyUserNick: 'string',
      customerId: 'number',
      invoiceAmount: 'number',
      invoiceByAmount: 'boolean',
      invoicingType: 'number',
      ownerId: 'number',
      processWay: 'number',
      selectedIds: { 'type': 'array', 'itemType': 'number' },
      userRemark: 'string',
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
  statusCode: number;
  body: ApplyInvoiceResponseBody;
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
  statusCode: number;
  body: CancelOrderResponseBody;
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
      body: CancelOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResellerConsumeAmountRequest extends $tea.Model {
  adjustType?: string;
  amount?: string;
  businessType?: string;
  currency?: string;
  extendMap?: string;
  outBizId?: string;
  ownerId?: number;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      adjustType: 'AdjustType',
      amount: 'Amount',
      businessType: 'BusinessType',
      currency: 'Currency',
      extendMap: 'ExtendMap',
      outBizId: 'OutBizId',
      ownerId: 'OwnerId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustType: 'string',
      amount: 'string',
      businessType: 'string',
      currency: 'string',
      extendMap: 'string',
      outBizId: 'string',
      ownerId: 'number',
      source: 'string',
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
  statusCode: number;
  body: ChangeResellerConsumeAmountResponseBody;
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
      body: ChangeResellerConsumeAmountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmRelationRequest extends $tea.Model {
  childUserId?: number;
  confirmCode?: string;
  parentUserId?: number;
  permissionCodes?: string[];
  relationId?: number;
  relationType?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      childUserId: 'ChildUserId',
      confirmCode: 'ConfirmCode',
      parentUserId: 'ParentUserId',
      permissionCodes: 'PermissionCodes',
      relationId: 'RelationId',
      relationType: 'RelationType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childUserId: 'number',
      confirmCode: 'string',
      parentUserId: 'number',
      permissionCodes: { 'type': 'array', 'itemType': 'string' },
      relationId: 'number',
      relationType: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmRelationResponseBody extends $tea.Model {
  code?: string;
  data?: ConfirmRelationResponseBodyData;
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
      data: ConfirmRelationResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ConfirmRelationResponseBody;
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
      body: ConfirmRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertChargeTypeRequest extends $tea.Model {
  instanceId?: string;
  ownerId?: number;
  period?: number;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      period: 'Period',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerId: 'number',
      period: 'number',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
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
  statusCode: number;
  body: ConvertChargeTypeResponseBody;
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
      body: ConvertChargeTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgAccountRequest extends $tea.Model {
  accountAttr?: string;
  cityName?: string;
  enterpriseName?: string;
  firstName?: string;
  lastName?: string;
  loginEmail?: string;
  nationCode?: string;
  postcode?: string;
  provinceName?: string;
  static names(): { [key: string]: string } {
    return {
      accountAttr: 'AccountAttr',
      cityName: 'CityName',
      enterpriseName: 'EnterpriseName',
      firstName: 'FirstName',
      lastName: 'LastName',
      loginEmail: 'LoginEmail',
      nationCode: 'NationCode',
      postcode: 'Postcode',
      provinceName: 'ProvinceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountAttr: 'string',
      cityName: 'string',
      enterpriseName: 'string',
      firstName: 'string',
      lastName: 'string',
      loginEmail: 'string',
      nationCode: 'string',
      postcode: 'string',
      provinceName: 'string',
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
  statusCode: number;
  body: CreateAgAccountResponseBody;
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
  statusCode: number;
  body: CreateCostUnitResponseBody;
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
      body: CreateCostUnitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $tea.Model {
  clientToken?: string;
  logistics?: string;
  ownerId?: number;
  parameter?: CreateInstanceRequestParameter[];
  period?: number;
  productCode?: string;
  productType?: string;
  renewPeriod?: number;
  renewalStatus?: string;
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      logistics: 'Logistics',
      ownerId: 'OwnerId',
      parameter: 'Parameter',
      period: 'Period',
      productCode: 'ProductCode',
      productType: 'ProductType',
      renewPeriod: 'RenewPeriod',
      renewalStatus: 'RenewalStatus',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      logistics: 'string',
      ownerId: 'number',
      parameter: { 'type': 'array', 'itemType': CreateInstanceRequestParameter },
      period: 'number',
      productCode: 'string',
      productType: 'string',
      renewPeriod: 'number',
      renewalStatus: 'string',
      subscriptionType: 'string',
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
  statusCode: number;
  body: CreateInstanceResponseBody;
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
      body: CreateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResellerUserQuotaRequest extends $tea.Model {
  amount?: string;
  currency?: string;
  outBizId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      currency: 'Currency',
      outBizId: 'OutBizId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      currency: 'string',
      outBizId: 'string',
      ownerId: 'number',
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
  statusCode: number;
  body: CreateResellerUserQuotaResponseBody;
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
      body: CreateResellerUserQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourcePackageRequest extends $tea.Model {
  duration?: number;
  effectiveDate?: string;
  ownerId?: number;
  packageType?: string;
  pricingCycle?: string;
  productCode?: string;
  specification?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      effectiveDate: 'EffectiveDate',
      ownerId: 'OwnerId',
      packageType: 'PackageType',
      pricingCycle: 'PricingCycle',
      productCode: 'ProductCode',
      specification: 'Specification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      effectiveDate: 'string',
      ownerId: 'number',
      packageType: 'string',
      pricingCycle: 'string',
      productCode: 'string',
      specification: 'string',
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
  statusCode: number;
  body: CreateResourcePackageResponseBody;
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
      body: CreateResourcePackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSavingsPlansInstanceRequest extends $tea.Model {
  commodityCode?: string;
  duration?: string;
  effectiveDate?: string;
  extendMap?: { [key: string]: string };
  payMode?: string;
  poolValue?: string;
  pricingCycle?: string;
  region?: string;
  specType?: string;
  specification?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      duration: 'Duration',
      effectiveDate: 'EffectiveDate',
      extendMap: 'ExtendMap',
      payMode: 'PayMode',
      poolValue: 'PoolValue',
      pricingCycle: 'PricingCycle',
      region: 'Region',
      specType: 'SpecType',
      specification: 'Specification',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      duration: 'string',
      effectiveDate: 'string',
      extendMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      payMode: 'string',
      poolValue: 'string',
      pricingCycle: 'string',
      region: 'string',
      specType: 'string',
      specification: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSavingsPlansInstanceShrinkRequest extends $tea.Model {
  commodityCode?: string;
  duration?: string;
  effectiveDate?: string;
  extendMapShrink?: string;
  payMode?: string;
  poolValue?: string;
  pricingCycle?: string;
  region?: string;
  specType?: string;
  specification?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      duration: 'Duration',
      effectiveDate: 'EffectiveDate',
      extendMapShrink: 'ExtendMap',
      payMode: 'PayMode',
      poolValue: 'PoolValue',
      pricingCycle: 'PricingCycle',
      region: 'Region',
      specType: 'SpecType',
      specification: 'Specification',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      duration: 'string',
      effectiveDate: 'string',
      extendMapShrink: 'string',
      payMode: 'string',
      poolValue: 'string',
      pricingCycle: 'string',
      region: 'string',
      specType: 'string',
      specification: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSavingsPlansInstanceResponseBody extends $tea.Model {
  code?: string;
  data?: CreateSavingsPlansInstanceResponseBodyData;
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
      data: CreateSavingsPlansInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSavingsPlansInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSavingsPlansInstanceResponseBody;
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
      body: CreateSavingsPlansInstanceResponseBody,
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
  statusCode: number;
  body: DeleteCostUnitResponseBody;
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
      body: DeleteCostUnitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostBudgetsSummaryRequest extends $tea.Model {
  budgetName?: string;
  budgetStatus?: string;
  budgetType?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      budgetName: 'BudgetName',
      budgetStatus: 'BudgetStatus',
      budgetType: 'BudgetType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      budgetName: 'string',
      budgetStatus: 'string',
      budgetType: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostBudgetsSummaryResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeCostBudgetsSummaryResponseBodyData;
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
      data: DescribeCostBudgetsSummaryResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostBudgetsSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCostBudgetsSummaryResponseBody;
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
      body: DescribeCostBudgetsSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAmortizedCostByAmortizationPeriodRequest extends $tea.Model {
  billOwnerIdList?: string[];
  billUserIdList?: string[];
  billingCycle?: string;
  consumePeriodFilter?: string[];
  costUnitCode?: string;
  instanceIdList?: string[];
  maxResults?: number;
  nextToken?: string;
  productCode?: string;
  productDetail?: string;
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerIdList: 'BillOwnerIdList',
      billUserIdList: 'BillUserIdList',
      billingCycle: 'BillingCycle',
      consumePeriodFilter: 'ConsumePeriodFilter',
      costUnitCode: 'CostUnitCode',
      instanceIdList: 'InstanceIdList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerIdList: { 'type': 'array', 'itemType': 'string' },
      billUserIdList: { 'type': 'array', 'itemType': 'string' },
      billingCycle: 'string',
      consumePeriodFilter: { 'type': 'array', 'itemType': 'string' },
      costUnitCode: 'string',
      instanceIdList: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      productCode: 'string',
      productDetail: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAmortizedCostByAmortizationPeriodResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeInstanceAmortizedCostByAmortizationPeriodResponseBodyData;
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
      data: DescribeInstanceAmortizedCostByAmortizationPeriodResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAmortizedCostByAmortizationPeriodResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceAmortizedCostByAmortizationPeriodResponseBody;
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
      body: DescribeInstanceAmortizedCostByAmortizationPeriodResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAmortizedCostByAmortizationPeriodDateRequest extends $tea.Model {
  amortizationDateEnd?: string;
  amortizationDateStart?: string;
  billOwnerIdList?: string[];
  billUserIdList?: string[];
  billingCycle?: string;
  costUnitCode?: string;
  instanceIdList?: string[];
  maxResults?: number;
  nextToken?: string;
  productCode?: string;
  productDetail?: string;
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      amortizationDateEnd: 'AmortizationDateEnd',
      amortizationDateStart: 'AmortizationDateStart',
      billOwnerIdList: 'BillOwnerIdList',
      billUserIdList: 'BillUserIdList',
      billingCycle: 'BillingCycle',
      costUnitCode: 'CostUnitCode',
      instanceIdList: 'InstanceIdList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amortizationDateEnd: 'string',
      amortizationDateStart: 'string',
      billOwnerIdList: { 'type': 'array', 'itemType': 'string' },
      billUserIdList: { 'type': 'array', 'itemType': 'string' },
      billingCycle: 'string',
      costUnitCode: 'string',
      instanceIdList: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      productCode: 'string',
      productDetail: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAmortizedCostByAmortizationPeriodDateResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeInstanceAmortizedCostByAmortizationPeriodDateResponseBodyData;
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
      data: DescribeInstanceAmortizedCostByAmortizationPeriodDateResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAmortizedCostByAmortizationPeriodDateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceAmortizedCostByAmortizationPeriodDateResponseBody;
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
      body: DescribeInstanceAmortizedCostByAmortizationPeriodDateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAmortizedCostByConsumePeriodRequest extends $tea.Model {
  amortizationPeriodFilter?: string[];
  billOwnerIdList?: string[];
  billUserIdList?: string[];
  billingCycle?: string;
  costUnitCode?: string;
  instanceIdList?: string[];
  maxResults?: number;
  nextToken?: string;
  productCode?: string;
  productDetail?: string;
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      amortizationPeriodFilter: 'AmortizationPeriodFilter',
      billOwnerIdList: 'BillOwnerIdList',
      billUserIdList: 'BillUserIdList',
      billingCycle: 'BillingCycle',
      costUnitCode: 'CostUnitCode',
      instanceIdList: 'InstanceIdList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amortizationPeriodFilter: { 'type': 'array', 'itemType': 'string' },
      billOwnerIdList: { 'type': 'array', 'itemType': 'string' },
      billUserIdList: { 'type': 'array', 'itemType': 'string' },
      billingCycle: 'string',
      costUnitCode: 'string',
      instanceIdList: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      productCode: 'string',
      productDetail: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAmortizedCostByConsumePeriodResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeInstanceAmortizedCostByConsumePeriodResponseBodyData;
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
      data: DescribeInstanceAmortizedCostByConsumePeriodResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAmortizedCostByConsumePeriodResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceAmortizedCostByConsumePeriodResponseBody;
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
      body: DescribeInstanceAmortizedCostByConsumePeriodResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceBillRequest extends $tea.Model {
  billOwnerId?: number;
  billingCycle?: string;
  billingDate?: string;
  granularity?: string;
  instanceID?: string;
  isBillingItem?: boolean;
  isHideZeroCharge?: boolean;
  maxResults?: number;
  nextToken?: string;
  ownerId?: number;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      billingCycle: 'BillingCycle',
      billingDate: 'BillingDate',
      granularity: 'Granularity',
      instanceID: 'InstanceID',
      isBillingItem: 'IsBillingItem',
      isHideZeroCharge: 'IsHideZeroCharge',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      billingCycle: 'string',
      billingDate: 'string',
      granularity: 'string',
      instanceID: 'string',
      isBillingItem: 'boolean',
      isHideZeroCharge: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
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

export class DescribeInstanceBillResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeInstanceBillResponseBodyData;
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
      data: DescribeInstanceBillResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceBillResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceBillResponseBody;
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
  data?: DescribePricingModuleResponseBodyData;
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
      data: DescribePricingModuleResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePricingModuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePricingModuleResponseBody;
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
      body: DescribePricingModuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductAmortizedCostByAmortizationPeriodRequest extends $tea.Model {
  billOwnerIdList?: string[];
  billUserIdList?: string[];
  billingCycle?: string;
  consumePeriodFilter?: string[];
  costUnitCode?: string;
  maxResults?: number;
  nextToken?: string;
  productCode?: string;
  productDetail?: string;
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerIdList: 'BillOwnerIdList',
      billUserIdList: 'BillUserIdList',
      billingCycle: 'BillingCycle',
      consumePeriodFilter: 'ConsumePeriodFilter',
      costUnitCode: 'CostUnitCode',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerIdList: { 'type': 'array', 'itemType': 'string' },
      billUserIdList: { 'type': 'array', 'itemType': 'string' },
      billingCycle: 'string',
      consumePeriodFilter: { 'type': 'array', 'itemType': 'string' },
      costUnitCode: 'string',
      maxResults: 'number',
      nextToken: 'string',
      productCode: 'string',
      productDetail: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductAmortizedCostByAmortizationPeriodResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeProductAmortizedCostByAmortizationPeriodResponseBodyData;
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
      data: DescribeProductAmortizedCostByAmortizationPeriodResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductAmortizedCostByAmortizationPeriodResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeProductAmortizedCostByAmortizationPeriodResponseBody;
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
      body: DescribeProductAmortizedCostByAmortizationPeriodResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductAmortizedCostByConsumePeriodRequest extends $tea.Model {
  amortizationPeriodFilter?: string[];
  billOwnerIdList?: string[];
  billUserIdList?: string[];
  billingCycle?: string;
  costUnitCode?: string;
  maxResults?: number;
  nextToken?: string;
  productCode?: string;
  productDetail?: string;
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      amortizationPeriodFilter: 'AmortizationPeriodFilter',
      billOwnerIdList: 'BillOwnerIdList',
      billUserIdList: 'BillUserIdList',
      billingCycle: 'BillingCycle',
      costUnitCode: 'CostUnitCode',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amortizationPeriodFilter: { 'type': 'array', 'itemType': 'string' },
      billOwnerIdList: { 'type': 'array', 'itemType': 'string' },
      billUserIdList: { 'type': 'array', 'itemType': 'string' },
      billingCycle: 'string',
      costUnitCode: 'string',
      maxResults: 'number',
      nextToken: 'string',
      productCode: 'string',
      productDetail: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductAmortizedCostByConsumePeriodResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeProductAmortizedCostByConsumePeriodResponseBodyData;
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
      data: DescribeProductAmortizedCostByConsumePeriodResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductAmortizedCostByConsumePeriodResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeProductAmortizedCostByConsumePeriodResponseBody;
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
      body: DescribeProductAmortizedCostByConsumePeriodResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceCoverageDetailRequest extends $tea.Model {
  billOwnerId?: number;
  endPeriod?: string;
  maxResults?: number;
  nextToken?: string;
  periodType?: string;
  resourceType?: string;
  startPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      endPeriod: 'EndPeriod',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      periodType: 'PeriodType',
      resourceType: 'ResourceType',
      startPeriod: 'StartPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      endPeriod: 'string',
      maxResults: 'number',
      nextToken: 'string',
      periodType: 'string',
      resourceType: 'string',
      startPeriod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceCoverageDetailResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeResourceCoverageDetailResponseBodyData;
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
      data: DescribeResourceCoverageDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceCoverageDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeResourceCoverageDetailResponseBody;
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
      body: DescribeResourceCoverageDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceCoverageTotalRequest extends $tea.Model {
  billOwnerId?: number;
  endPeriod?: string;
  periodType?: string;
  resourceType?: string;
  startPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      endPeriod: 'EndPeriod',
      periodType: 'PeriodType',
      resourceType: 'ResourceType',
      startPeriod: 'StartPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      endPeriod: 'string',
      periodType: 'string',
      resourceType: 'string',
      startPeriod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceCoverageTotalResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeResourceCoverageTotalResponseBodyData;
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
      data: DescribeResourceCoverageTotalResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceCoverageTotalResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeResourceCoverageTotalResponseBody;
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
  statusCode: number;
  body: DescribeResourcePackageProductResponseBody;
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
      body: DescribeResourcePackageProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageDetailRequest extends $tea.Model {
  billOwnerId?: number;
  endPeriod?: string;
  maxResults?: number;
  nextToken?: string;
  periodType?: string;
  resourceType?: string;
  startPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      endPeriod: 'EndPeriod',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      periodType: 'PeriodType',
      resourceType: 'ResourceType',
      startPeriod: 'StartPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      endPeriod: 'string',
      maxResults: 'number',
      nextToken: 'string',
      periodType: 'string',
      resourceType: 'string',
      startPeriod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageDetailResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeResourceUsageDetailResponseBodyData;
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
      data: DescribeResourceUsageDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeResourceUsageDetailResponseBody;
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
      body: DescribeResourceUsageDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageTotalRequest extends $tea.Model {
  billOwnerId?: number;
  endPeriod?: string;
  periodType?: string;
  resourceType?: string;
  startPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      endPeriod: 'EndPeriod',
      periodType: 'PeriodType',
      resourceType: 'ResourceType',
      startPeriod: 'StartPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      endPeriod: 'string',
      periodType: 'string',
      resourceType: 'string',
      startPeriod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageTotalResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeResourceUsageTotalResponseBodyData;
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
      data: DescribeResourceUsageTotalResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageTotalResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeResourceUsageTotalResponseBody;
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
      body: DescribeResourceUsageTotalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansCoverageDetailRequest extends $tea.Model {
  billOwnerId?: number;
  endPeriod?: string;
  maxResults?: number;
  periodType?: string;
  startPeriod?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      endPeriod: 'EndPeriod',
      maxResults: 'MaxResults',
      periodType: 'PeriodType',
      startPeriod: 'StartPeriod',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      endPeriod: 'string',
      maxResults: 'number',
      periodType: 'string',
      startPeriod: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansCoverageDetailResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeSavingsPlansCoverageDetailResponseBodyData;
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
      data: DescribeSavingsPlansCoverageDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansCoverageDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSavingsPlansCoverageDetailResponseBody;
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
      body: DescribeSavingsPlansCoverageDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansCoverageTotalRequest extends $tea.Model {
  billOwnerId?: number;
  endPeriod?: string;
  periodType?: string;
  startPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      endPeriod: 'EndPeriod',
      periodType: 'PeriodType',
      startPeriod: 'StartPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      endPeriod: 'string',
      periodType: 'string',
      startPeriod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansCoverageTotalResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeSavingsPlansCoverageTotalResponseBodyData;
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
      data: DescribeSavingsPlansCoverageTotalResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansCoverageTotalResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSavingsPlansCoverageTotalResponseBody;
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
      body: DescribeSavingsPlansCoverageTotalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansUsageDetailRequest extends $tea.Model {
  billOwnerId?: number;
  endPeriod?: string;
  maxResults?: number;
  periodType?: string;
  startPeriod?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      endPeriod: 'EndPeriod',
      maxResults: 'MaxResults',
      periodType: 'PeriodType',
      startPeriod: 'StartPeriod',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      endPeriod: 'string',
      maxResults: 'number',
      periodType: 'string',
      startPeriod: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansUsageDetailResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeSavingsPlansUsageDetailResponseBodyData;
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
      data: DescribeSavingsPlansUsageDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansUsageDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSavingsPlansUsageDetailResponseBody;
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
      body: DescribeSavingsPlansUsageDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansUsageTotalRequest extends $tea.Model {
  billOwnerId?: number;
  endPeriod?: string;
  periodType?: string;
  startPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      endPeriod: 'EndPeriod',
      periodType: 'PeriodType',
      startPeriod: 'StartPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      endPeriod: 'string',
      periodType: 'string',
      startPeriod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansUsageTotalResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeSavingsPlansUsageTotalResponseBodyData;
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
      data: DescribeSavingsPlansUsageTotalResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansUsageTotalResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSavingsPlansUsageTotalResponseBody;
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
      body: DescribeSavingsPlansUsageTotalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSplitItemBillRequest extends $tea.Model {
  billOwnerId?: number;
  billingCycle?: string;
  billingDate?: string;
  granularity?: string;
  instanceID?: string;
  maxResults?: number;
  nextToken?: string;
  ownerId?: number;
  productCode?: string;
  productType?: string;
  splitItemID?: string;
  subscriptionType?: string;
  tagFilter?: DescribeSplitItemBillRequestTagFilter[];
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      billingCycle: 'BillingCycle',
      billingDate: 'BillingDate',
      granularity: 'Granularity',
      instanceID: 'InstanceID',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      productType: 'ProductType',
      splitItemID: 'SplitItemID',
      subscriptionType: 'SubscriptionType',
      tagFilter: 'TagFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      billingCycle: 'string',
      billingDate: 'string',
      granularity: 'string',
      instanceID: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerId: 'number',
      productCode: 'string',
      productType: 'string',
      splitItemID: 'string',
      subscriptionType: 'string',
      tagFilter: { 'type': 'array', 'itemType': DescribeSplitItemBillRequestTagFilter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSplitItemBillResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeSplitItemBillResponseBodyData;
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
      data: DescribeSplitItemBillResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSplitItemBillResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSplitItemBillResponseBody;
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
      body: DescribeSplitItemBillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableBillGenerationRequest extends $tea.Model {
  ownerId?: number;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      productCode: 'string',
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
  statusCode: number;
  body: EnableBillGenerationResponseBody;
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
      body: EnableBillGenerationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountRelationRequest extends $tea.Model {
  relationId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      relationId: 'RelationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relationId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountRelationResponseBody extends $tea.Model {
  code?: string;
  data?: GetAccountRelationResponseBodyData;
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
      data: GetAccountRelationResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAccountRelationResponseBody;
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
      body: GetAccountRelationResponseBody,
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
  statusCode: number;
  body: GetCustomerAccountInfoResponseBody;
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
  statusCode: number;
  body: GetCustomerListResponseBody;
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
  statusCode: number;
  body: GetOrderDetailResponseBody;
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
      body: GetOrderDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayAsYouGoPriceRequest extends $tea.Model {
  moduleList?: GetPayAsYouGoPriceRequestModuleList[];
  ownerId?: number;
  productCode?: string;
  productType?: string;
  region?: string;
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      moduleList: 'ModuleList',
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      productType: 'ProductType',
      region: 'Region',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleList: { 'type': 'array', 'itemType': GetPayAsYouGoPriceRequestModuleList },
      ownerId: 'number',
      productCode: 'string',
      productType: 'string',
      region: 'string',
      subscriptionType: 'string',
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
  statusCode: number;
  body: GetPayAsYouGoPriceResponseBody;
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
      body: GetPayAsYouGoPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePackagePriceRequest extends $tea.Model {
  duration?: number;
  effectiveDate?: string;
  instanceId?: string;
  orderType?: string;
  ownerId?: number;
  packageType?: string;
  pricingCycle?: string;
  productCode?: string;
  specification?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      effectiveDate: 'EffectiveDate',
      instanceId: 'InstanceId',
      orderType: 'OrderType',
      ownerId: 'OwnerId',
      packageType: 'PackageType',
      pricingCycle: 'PricingCycle',
      productCode: 'ProductCode',
      specification: 'Specification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      effectiveDate: 'string',
      instanceId: 'string',
      orderType: 'string',
      ownerId: 'number',
      packageType: 'string',
      pricingCycle: 'string',
      productCode: 'string',
      specification: 'string',
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
  statusCode: number;
  body: GetResourcePackagePriceResponseBody;
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
      body: GetResourcePackagePriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionPriceRequest extends $tea.Model {
  instanceId?: string;
  moduleList?: GetSubscriptionPriceRequestModuleList[];
  orderType?: string;
  ownerId?: number;
  productCode?: string;
  productType?: string;
  quantity?: number;
  region?: string;
  servicePeriodQuantity?: number;
  servicePeriodUnit?: string;
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      moduleList: 'ModuleList',
      orderType: 'OrderType',
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      productType: 'ProductType',
      quantity: 'Quantity',
      region: 'Region',
      servicePeriodQuantity: 'ServicePeriodQuantity',
      servicePeriodUnit: 'ServicePeriodUnit',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      moduleList: { 'type': 'array', 'itemType': GetSubscriptionPriceRequestModuleList },
      orderType: 'string',
      ownerId: 'number',
      productCode: 'string',
      productType: 'string',
      quantity: 'number',
      region: 'string',
      servicePeriodQuantity: 'number',
      servicePeriodUnit: 'string',
      subscriptionType: 'string',
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
  statusCode: number;
  body: GetSubscriptionPriceResponseBody;
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
      body: GetSubscriptionPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InquiryPriceRefundInstanceRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  productCode?: string;
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      productCode: 'ProductCode',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      productCode: 'string',
      productType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InquiryPriceRefundInstanceResponseBody extends $tea.Model {
  code?: string;
  data?: InquiryPriceRefundInstanceResponseBodyData;
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
      data: InquiryPriceRefundInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InquiryPriceRefundInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InquiryPriceRefundInstanceResponseBody;
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
      body: InquiryPriceRefundInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountRelationRequest extends $tea.Model {
  childNick?: string;
  childUserId?: number;
  parentUserId?: number;
  permissionCodes?: string[];
  relationId?: number;
  relationOperation?: string;
  relationType?: string;
  requestId?: string;
  roleCodes?: string[];
  static names(): { [key: string]: string } {
    return {
      childNick: 'ChildNick',
      childUserId: 'ChildUserId',
      parentUserId: 'ParentUserId',
      permissionCodes: 'PermissionCodes',
      relationId: 'RelationId',
      relationOperation: 'RelationOperation',
      relationType: 'RelationType',
      requestId: 'RequestId',
      roleCodes: 'RoleCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childNick: 'string',
      childUserId: 'number',
      parentUserId: 'number',
      permissionCodes: { 'type': 'array', 'itemType': 'string' },
      relationId: 'number',
      relationOperation: 'string',
      relationType: 'string',
      requestId: 'string',
      roleCodes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountRelationResponseBody extends $tea.Model {
  code?: string;
  data?: ModifyAccountRelationResponseBodyData;
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
      data: ModifyAccountRelationResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyAccountRelationResponseBody;
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
  statusCode: number;
  body: ModifyCostUnitResponseBody;
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
      body: ModifyCostUnitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  modifyType?: string;
  ownerId?: number;
  parameter?: ModifyInstanceRequestParameter[];
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      modifyType: 'ModifyType',
      ownerId: 'OwnerId',
      parameter: 'Parameter',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      modifyType: 'string',
      ownerId: 'number',
      parameter: { 'type': 'array', 'itemType': ModifyInstanceRequestParameter },
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
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
  statusCode: number;
  body: ModifyInstanceResponseBody;
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
  statusCode: number;
  body: QueryAccountBalanceResponseBody;
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
      body: QueryAccountBalanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountBillRequest extends $tea.Model {
  billOwnerId?: number;
  billingCycle?: string;
  billingDate?: string;
  granularity?: string;
  isGroupByProduct?: boolean;
  ownerID?: number;
  pageNum?: number;
  pageSize?: number;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      billingCycle: 'BillingCycle',
      billingDate: 'BillingDate',
      granularity: 'Granularity',
      isGroupByProduct: 'IsGroupByProduct',
      ownerID: 'OwnerID',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      billingCycle: 'string',
      billingDate: 'string',
      granularity: 'string',
      isGroupByProduct: 'boolean',
      ownerID: 'number',
      pageNum: 'number',
      pageSize: 'number',
      productCode: 'string',
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
  statusCode: number;
  body: QueryAccountBillResponseBody;
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
      body: QueryAccountBillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTransactionDetailsRequest extends $tea.Model {
  createTimeEnd?: string;
  createTimeStart?: string;
  maxResults?: number;
  nextToken?: string;
  recordID?: string;
  transactionChannel?: string;
  transactionChannelSN?: string;
  transactionNumber?: string;
  transactionType?: string;
  static names(): { [key: string]: string } {
    return {
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      recordID: 'RecordID',
      transactionChannel: 'TransactionChannel',
      transactionChannelSN: 'TransactionChannelSN',
      transactionNumber: 'TransactionNumber',
      transactionType: 'TransactionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeEnd: 'string',
      createTimeStart: 'string',
      maxResults: 'number',
      nextToken: 'string',
      recordID: 'string',
      transactionChannel: 'string',
      transactionChannelSN: 'string',
      transactionNumber: 'string',
      transactionType: 'string',
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
  statusCode: number;
  body: QueryAccountTransactionDetailsResponseBody;
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
      body: QueryAccountTransactionDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountTransactionsRequest extends $tea.Model {
  createTimeEnd?: string;
  createTimeStart?: string;
  pageNum?: number;
  pageSize?: number;
  recordID?: string;
  transactionChannel?: string;
  transactionChannelSN?: string;
  transactionFlow?: string;
  transactionNumber?: string;
  transactionType?: string;
  static names(): { [key: string]: string } {
    return {
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      recordID: 'RecordID',
      transactionChannel: 'TransactionChannel',
      transactionChannelSN: 'TransactionChannelSN',
      transactionFlow: 'TransactionFlow',
      transactionNumber: 'TransactionNumber',
      transactionType: 'TransactionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeEnd: 'string',
      createTimeStart: 'string',
      pageNum: 'number',
      pageSize: 'number',
      recordID: 'string',
      transactionChannel: 'string',
      transactionChannelSN: 'string',
      transactionFlow: 'string',
      transactionNumber: 'string',
      transactionType: 'string',
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
  statusCode: number;
  body: QueryAccountTransactionsResponseBody;
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
      body: QueryAccountTransactionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAvailableInstancesRequest extends $tea.Model {
  createTimeEnd?: string;
  createTimeStart?: string;
  endTimeEnd?: string;
  endTimeStart?: string;
  instanceIDs?: string;
  ownerId?: number;
  pageNum?: number;
  pageSize?: number;
  productCode?: string;
  productType?: string;
  region?: string;
  renewStatus?: string;
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      endTimeEnd: 'EndTimeEnd',
      endTimeStart: 'EndTimeStart',
      instanceIDs: 'InstanceIDs',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      productType: 'ProductType',
      region: 'Region',
      renewStatus: 'RenewStatus',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeEnd: 'string',
      createTimeStart: 'string',
      endTimeEnd: 'string',
      endTimeStart: 'string',
      instanceIDs: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      productCode: 'string',
      productType: 'string',
      region: 'string',
      renewStatus: 'string',
      subscriptionType: 'string',
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
  statusCode: number;
  body: QueryAvailableInstancesResponseBody;
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
      body: QueryAvailableInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillRequest extends $tea.Model {
  billOwnerId?: number;
  billingCycle?: string;
  isDisplayLocalCurrency?: boolean;
  isHideZeroCharge?: boolean;
  ownerId?: number;
  pageNum?: number;
  pageSize?: number;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      billingCycle: 'BillingCycle',
      isDisplayLocalCurrency: 'IsDisplayLocalCurrency',
      isHideZeroCharge: 'IsHideZeroCharge',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      billingCycle: 'string',
      isDisplayLocalCurrency: 'boolean',
      isHideZeroCharge: 'boolean',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
      type: 'string',
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
  statusCode: number;
  body: QueryBillResponseBody;
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
      body: QueryBillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillOverviewRequest extends $tea.Model {
  billOwnerId?: number;
  billingCycle?: string;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      billingCycle: 'BillingCycle',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
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
  statusCode: number;
  body: QueryBillOverviewResponseBody;
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
  statusCode: number;
  body: QueryBillToOSSSubscriptionResponseBody;
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
      body: QueryBillToOSSSubscriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCashCouponsRequest extends $tea.Model {
  effectiveOrNot?: boolean;
  expiryTimeEnd?: string;
  expiryTimeStart?: string;
  static names(): { [key: string]: string } {
    return {
      effectiveOrNot: 'EffectiveOrNot',
      expiryTimeEnd: 'ExpiryTimeEnd',
      expiryTimeStart: 'ExpiryTimeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveOrNot: 'boolean',
      expiryTimeEnd: 'string',
      expiryTimeStart: 'string',
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
  statusCode: number;
  body: QueryCashCouponsResponseBody;
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
      body: QueryCashCouponsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCommodityListRequest extends $tea.Model {
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

export class QueryCommodityListResponseBody extends $tea.Model {
  code?: string;
  data?: QueryCommodityListResponseBodyData;
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
      data: QueryCommodityListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCommodityListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryCommodityListResponseBody;
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
      body: QueryCommodityListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitRequest extends $tea.Model {
  ownerUid?: number;
  pageNum?: number;
  pageSize?: number;
  parentUnitId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerUid: 'OwnerUid',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      parentUnitId: 'ParentUnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerUid: 'number',
      pageNum: 'number',
      pageSize: 'number',
      parentUnitId: 'number',
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
  statusCode: number;
  body: QueryCostUnitResponseBody;
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
      body: QueryCostUnitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResourceRequest extends $tea.Model {
  ownerUid?: number;
  pageNum?: number;
  pageSize?: number;
  unitId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerUid: 'OwnerUid',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      unitId: 'UnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerUid: 'number',
      pageNum: 'number',
      pageSize: 'number',
      unitId: 'number',
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
  statusCode: number;
  body: QueryCostUnitResourceResponseBody;
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
  statusCode: number;
  body: QueryCustomerAddressListResponseBody;
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
      body: QueryCustomerAddressListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDPUtilizationDetailRequest extends $tea.Model {
  commodityCode?: string;
  deductedInstanceId?: string;
  endTime?: string;
  includeShare?: boolean;
  instanceId?: string;
  instanceSpec?: string;
  lastToken?: string;
  limit?: number;
  prodCode?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      deductedInstanceId: 'DeductedInstanceId',
      endTime: 'EndTime',
      includeShare: 'IncludeShare',
      instanceId: 'InstanceId',
      instanceSpec: 'InstanceSpec',
      lastToken: 'LastToken',
      limit: 'Limit',
      prodCode: 'ProdCode',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      deductedInstanceId: 'string',
      endTime: 'string',
      includeShare: 'boolean',
      instanceId: 'string',
      instanceSpec: 'string',
      lastToken: 'string',
      limit: 'number',
      prodCode: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDPUtilizationDetailResponseBody extends $tea.Model {
  code?: string;
  data?: QueryDPUtilizationDetailResponseBodyData;
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
      data: QueryDPUtilizationDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDPUtilizationDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryDPUtilizationDetailResponseBody;
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
      body: QueryDPUtilizationDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEvaluateListRequest extends $tea.Model {
  billCycle?: string;
  bizTypeList?: string[];
  endAmount?: number;
  endBizTime?: string;
  endSearchTime?: string;
  outBizId?: string;
  ownerId?: number;
  pageNum?: number;
  pageSize?: number;
  sortType?: number;
  startAmount?: number;
  startBizTime?: string;
  startSearchTime?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      billCycle: 'BillCycle',
      bizTypeList: 'BizTypeList',
      endAmount: 'EndAmount',
      endBizTime: 'EndBizTime',
      endSearchTime: 'EndSearchTime',
      outBizId: 'OutBizId',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      sortType: 'SortType',
      startAmount: 'StartAmount',
      startBizTime: 'StartBizTime',
      startSearchTime: 'StartSearchTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billCycle: 'string',
      bizTypeList: { 'type': 'array', 'itemType': 'string' },
      endAmount: 'number',
      endBizTime: 'string',
      endSearchTime: 'string',
      outBizId: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      sortType: 'number',
      startAmount: 'number',
      startBizTime: 'string',
      startSearchTime: 'string',
      type: 'number',
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
  statusCode: number;
  body: QueryEvaluateListResponseBody;
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
  data?: QueryFinancialAccountInfoResponseBodyData;
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
      data: QueryFinancialAccountInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFinancialAccountInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryFinancialAccountInfoResponseBody;
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
      body: QueryFinancialAccountInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceBillRequest extends $tea.Model {
  billOwnerId?: number;
  billingCycle?: string;
  billingDate?: string;
  granularity?: string;
  isBillingItem?: boolean;
  isHideZeroCharge?: boolean;
  ownerId?: number;
  pageNum?: number;
  pageSize?: number;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      billingCycle: 'BillingCycle',
      billingDate: 'BillingDate',
      granularity: 'Granularity',
      isBillingItem: 'IsBillingItem',
      isHideZeroCharge: 'IsHideZeroCharge',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      billingCycle: 'string',
      billingDate: 'string',
      granularity: 'string',
      isBillingItem: 'boolean',
      isHideZeroCharge: 'boolean',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
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
  statusCode: number;
  body: QueryInstanceBillResponseBody;
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
      body: QueryInstanceBillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceByTagRequest extends $tea.Model {
  resourceId?: string[];
  resourceType?: string;
  tag?: QueryInstanceByTagRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
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
  statusCode: number;
  body: QueryInstanceByTagResponseBody;
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
      body: QueryInstanceByTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceGaapCostRequest extends $tea.Model {
  billingCycle?: string;
  pageNum?: number;
  pageSize?: number;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      billingCycle: 'BillingCycle',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingCycle: 'string',
      pageNum: 'number',
      pageSize: 'number',
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
  statusCode: number;
  body: QueryInstanceGaapCostResponseBody;
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
  statusCode: number;
  body: QueryInvoicingCustomerListResponseBody;
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
      body: QueryInvoicingCustomerListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrdersRequest extends $tea.Model {
  createTimeEnd?: string;
  createTimeStart?: string;
  orderType?: string;
  ownerId?: number;
  pageNum?: number;
  pageSize?: number;
  paymentStatus?: string;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      orderType: 'OrderType',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      paymentStatus: 'PaymentStatus',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeEnd: 'string',
      createTimeStart: 'string',
      orderType: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      paymentStatus: 'string',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
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
  statusCode: number;
  body: QueryOrdersResponseBody;
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
  data?: QueryPermissionListResponseBodyData;
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
      data: QueryPermissionListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPermissionListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryPermissionListResponseBody;
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
      body: QueryPermissionListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPrepaidCardsRequest extends $tea.Model {
  effectiveOrNot?: boolean;
  expiryTimeEnd?: string;
  expiryTimeStart?: string;
  static names(): { [key: string]: string } {
    return {
      effectiveOrNot: 'EffectiveOrNot',
      expiryTimeEnd: 'ExpiryTimeEnd',
      expiryTimeStart: 'ExpiryTimeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveOrNot: 'boolean',
      expiryTimeEnd: 'string',
      expiryTimeStart: 'string',
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
  statusCode: number;
  body: QueryPrepaidCardsResponseBody;
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
      body: QueryPrepaidCardsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPriceEntityListRequest extends $tea.Model {
  commodityCode?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPriceEntityListResponseBody extends $tea.Model {
  code?: string;
  data?: QueryPriceEntityListResponseBodyData;
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
      data: QueryPriceEntityListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPriceEntityListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryPriceEntityListResponseBody;
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
      body: QueryPriceEntityListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductListRequest extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  queryTotalCount?: boolean;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      queryTotalCount: 'QueryTotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      queryTotalCount: 'boolean',
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
  statusCode: number;
  body: QueryProductListResponseBody;
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
      body: QueryProductListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRIUtilizationDetailRequest extends $tea.Model {
  deductedInstanceId?: string;
  endTime?: string;
  instanceSpec?: string;
  pageNum?: number;
  pageSize?: number;
  RICommodityCode?: string;
  RIInstanceId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      deductedInstanceId: 'DeductedInstanceId',
      endTime: 'EndTime',
      instanceSpec: 'InstanceSpec',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      RICommodityCode: 'RICommodityCode',
      RIInstanceId: 'RIInstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deductedInstanceId: 'string',
      endTime: 'string',
      instanceSpec: 'string',
      pageNum: 'number',
      pageSize: 'number',
      RICommodityCode: 'string',
      RIInstanceId: 'string',
      startTime: 'string',
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
  statusCode: number;
  body: QueryRIUtilizationDetailResponseBody;
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
      body: QueryRIUtilizationDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRedeemRequest extends $tea.Model {
  effectiveOrNot?: boolean;
  expiryTimeEnd?: string;
  expiryTimeStart?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      effectiveOrNot: 'EffectiveOrNot',
      expiryTimeEnd: 'ExpiryTimeEnd',
      expiryTimeStart: 'ExpiryTimeStart',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveOrNot: 'boolean',
      expiryTimeEnd: 'string',
      expiryTimeStart: 'string',
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
  statusCode: number;
  body: QueryRedeemResponseBody;
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
      body: QueryRedeemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRelationListRequest extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  statusList?: string[];
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      statusList: 'StatusList',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      statusList: { 'type': 'array', 'itemType': 'string' },
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRelationListResponseBody extends $tea.Model {
  code?: string;
  data?: QueryRelationListResponseBodyData;
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
      data: QueryRelationListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRelationListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryRelationListResponseBody;
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
      body: QueryRelationListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResellerAvailableQuotaRequest extends $tea.Model {
  itemCodes?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      itemCodes: 'ItemCodes',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemCodes: 'string',
      ownerId: 'number',
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
  statusCode: number;
  body: QueryResellerAvailableQuotaResponseBody;
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
      body: QueryResellerAvailableQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResellerUserAlarmThresholdRequest extends $tea.Model {
  alarmType?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      alarmType: 'AlarmType',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmType: 'string',
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResellerUserAlarmThresholdResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  data?: QueryResellerUserAlarmThresholdResponseBodyData[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: { 'type': 'array', 'itemType': QueryResellerUserAlarmThresholdResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResellerUserAlarmThresholdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryResellerUserAlarmThresholdResponseBody;
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
      body: QueryResellerUserAlarmThresholdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourcePackageInstancesRequest extends $tea.Model {
  expiryTimeEnd?: string;
  expiryTimeStart?: string;
  includePartner?: boolean;
  ownerId?: number;
  pageNum?: number;
  pageSize?: number;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      expiryTimeEnd: 'ExpiryTimeEnd',
      expiryTimeStart: 'ExpiryTimeStart',
      includePartner: 'IncludePartner',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiryTimeEnd: 'string',
      expiryTimeStart: 'string',
      includePartner: 'boolean',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourcePackageInstancesResponseBody extends $tea.Model {
  code?: string;
  data?: QueryResourcePackageInstancesResponseBodyData;
  message?: string;
  page?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      page: 'Page',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryResourcePackageInstancesResponseBodyData,
      message: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourcePackageInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryResourcePackageInstancesResponseBody;
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
      body: QueryResourcePackageInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansDeductLogRequest extends $tea.Model {
  endTime?: string;
  instanceId?: string;
  instanceType?: string;
  locale?: string;
  pageNum?: number;
  pageSize?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      locale: 'Locale',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      instanceType: 'string',
      locale: 'string',
      pageNum: 'number',
      pageSize: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansDeductLogResponseBody extends $tea.Model {
  code?: string;
  data?: QuerySavingsPlansDeductLogResponseBodyData;
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
      data: QuerySavingsPlansDeductLogResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansDeductLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QuerySavingsPlansDeductLogResponseBody;
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
      body: QuerySavingsPlansDeductLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansDiscountRequest extends $tea.Model {
  commodityCode?: string;
  cycle?: string;
  locale?: string;
  moduleCode?: string;
  pageNum?: number;
  pageSize?: number;
  payMode?: string;
  region?: string;
  spec?: string;
  spnType?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      cycle: 'Cycle',
      locale: 'Locale',
      moduleCode: 'ModuleCode',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      payMode: 'PayMode',
      region: 'Region',
      spec: 'Spec',
      spnType: 'SpnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      cycle: 'string',
      locale: 'string',
      moduleCode: 'string',
      pageNum: 'number',
      pageSize: 'number',
      payMode: 'string',
      region: 'string',
      spec: 'string',
      spnType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansDiscountResponseBody extends $tea.Model {
  code?: string;
  data?: QuerySavingsPlansDiscountResponseBodyData;
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
      data: QuerySavingsPlansDiscountResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansDiscountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QuerySavingsPlansDiscountResponseBody;
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
      body: QuerySavingsPlansDiscountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansInstanceRequest extends $tea.Model {
  endTime?: string;
  instanceId?: string;
  locale?: string;
  pageNum?: number;
  pageSize?: number;
  startTime?: string;
  status?: string;
  tag?: QuerySavingsPlansInstanceRequestTag[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      locale: 'Locale',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      locale: 'string',
      pageNum: 'number',
      pageSize: 'number',
      startTime: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': QuerySavingsPlansInstanceRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansInstanceResponseBody extends $tea.Model {
  code?: string;
  data?: QuerySavingsPlansInstanceResponseBodyData;
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
      data: QuerySavingsPlansInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QuerySavingsPlansInstanceResponseBody;
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
      body: QuerySavingsPlansInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySettleBillRequest extends $tea.Model {
  billOwnerId?: number;
  billingCycle?: string;
  isDisplayLocalCurrency?: boolean;
  isHideZeroCharge?: boolean;
  maxResults?: number;
  nextToken?: string;
  ownerId?: number;
  productCode?: string;
  productType?: string;
  recordID?: string;
  subscriptionType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      billingCycle: 'BillingCycle',
      isDisplayLocalCurrency: 'IsDisplayLocalCurrency',
      isHideZeroCharge: 'IsHideZeroCharge',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      productType: 'ProductType',
      recordID: 'RecordID',
      subscriptionType: 'SubscriptionType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      billingCycle: 'string',
      isDisplayLocalCurrency: 'boolean',
      isHideZeroCharge: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      ownerId: 'number',
      productCode: 'string',
      productType: 'string',
      recordID: 'string',
      subscriptionType: 'string',
      type: 'string',
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
  statusCode: number;
  body: QuerySettleBillResponseBody;
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
      body: QuerySettleBillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySkuPriceListRequest extends $tea.Model {
  commodityCode?: string;
  nextPageToken?: string;
  pageSize?: number;
  priceEntityCode?: string;
  priceFactorConditionMap?: { [key: string]: string[] };
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      nextPageToken: 'NextPageToken',
      pageSize: 'PageSize',
      priceEntityCode: 'PriceEntityCode',
      priceFactorConditionMap: 'PriceFactorConditionMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      nextPageToken: 'string',
      pageSize: 'number',
      priceEntityCode: 'string',
      priceFactorConditionMap: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySkuPriceListShrinkRequest extends $tea.Model {
  commodityCode?: string;
  nextPageToken?: string;
  pageSize?: number;
  priceEntityCode?: string;
  priceFactorConditionMapShrink?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      nextPageToken: 'NextPageToken',
      pageSize: 'PageSize',
      priceEntityCode: 'PriceEntityCode',
      priceFactorConditionMapShrink: 'PriceFactorConditionMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      nextPageToken: 'string',
      pageSize: 'number',
      priceEntityCode: 'string',
      priceFactorConditionMapShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySkuPriceListResponseBody extends $tea.Model {
  code?: string;
  data?: QuerySkuPriceListResponseBodyData;
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
      data: QuerySkuPriceListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySkuPriceListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QuerySkuPriceListResponseBody;
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
      body: QuerySkuPriceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySplitItemBillRequest extends $tea.Model {
  billOwnerId?: number;
  billingCycle?: string;
  ownerId?: number;
  pageNum?: number;
  pageSize?: number;
  productCode?: string;
  productType?: string;
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      billingCycle: 'BillingCycle',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      billingCycle: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
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
  statusCode: number;
  body: QuerySplitItemBillResponseBody;
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
      body: QuerySplitItemBillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserOmsDataRequest extends $tea.Model {
  dataType?: string;
  endTime?: string;
  marker?: string;
  ownerId?: number;
  pageSize?: number;
  startTime?: string;
  table?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      endTime: 'EndTime',
      marker: 'Marker',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      endTime: 'string',
      marker: 'string',
      ownerId: 'number',
      pageSize: 'number',
      startTime: 'string',
      table: 'string',
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
  statusCode: number;
  body: QueryUserOmsDataResponseBody;
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
      body: QueryUserOmsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundInstanceRequest extends $tea.Model {
  clientToken?: string;
  immediatelyRelease?: string;
  instanceId?: string;
  productCode?: string;
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      immediatelyRelease: 'ImmediatelyRelease',
      instanceId: 'InstanceId',
      productCode: 'ProductCode',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      immediatelyRelease: 'string',
      instanceId: 'string',
      productCode: 'string',
      productType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundInstanceResponseBody extends $tea.Model {
  code?: string;
  data?: RefundInstanceResponseBodyData;
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
      data: RefundInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RefundInstanceResponseBody;
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
      body: RefundInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceRequest extends $tea.Model {
  instanceIds?: string;
  ownerId?: number;
  productCode?: string;
  productType?: string;
  region?: string;
  renewStatus?: string;
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      productType: 'ProductType',
      region: 'Region',
      renewStatus: 'RenewStatus',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      ownerId: 'number',
      productCode: 'string',
      productType: 'string',
      region: 'string',
      renewStatus: 'string',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceResponseBody extends $tea.Model {
  code?: string;
  data?: ReleaseInstanceResponseBodyData;
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
      data: ReleaseInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReleaseInstanceResponseBody;
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
      body: ReleaseInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RelieveAccountRelationRequest extends $tea.Model {
  childUserId?: number;
  parentUserId?: number;
  relationId?: number;
  relationType?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      childUserId: 'ChildUserId',
      parentUserId: 'ParentUserId',
      relationId: 'RelationId',
      relationType: 'RelationType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childUserId: 'number',
      parentUserId: 'number',
      relationId: 'number',
      relationType: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RelieveAccountRelationResponseBody extends $tea.Model {
  code?: string;
  data?: RelieveAccountRelationResponseBodyData;
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
      data: RelieveAccountRelationResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RelieveAccountRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RelieveAccountRelationResponseBody;
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
      body: RelieveAccountRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  ownerId?: number;
  productCode?: string;
  productType?: string;
  renewPeriod?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      productType: 'ProductType',
      renewPeriod: 'RenewPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      ownerId: 'number',
      productCode: 'string',
      productType: 'string',
      renewPeriod: 'number',
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
  statusCode: number;
  body: RenewInstanceResponseBody;
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
      body: RenewInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewResourcePackageRequest extends $tea.Model {
  duration?: number;
  effectiveDate?: string;
  instanceId?: string;
  ownerId?: number;
  pricingCycle?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      effectiveDate: 'EffectiveDate',
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      pricingCycle: 'PricingCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      effectiveDate: 'string',
      instanceId: 'string',
      ownerId: 'number',
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
  statusCode: number;
  body: RenewResourcePackageResponseBody;
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
      body: RenewResourcePackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveUserCreditRequest extends $tea.Model {
  avoidExpiration?: boolean;
  avoidNotification?: boolean;
  avoidPrepaidExpiration?: boolean;
  avoidPrepaidNotification?: boolean;
  creditType?: string;
  creditValue?: string;
  description?: string;
  operator?: string;
  static names(): { [key: string]: string } {
    return {
      avoidExpiration: 'AvoidExpiration',
      avoidNotification: 'AvoidNotification',
      avoidPrepaidExpiration: 'AvoidPrepaidExpiration',
      avoidPrepaidNotification: 'AvoidPrepaidNotification',
      creditType: 'CreditType',
      creditValue: 'CreditValue',
      description: 'Description',
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avoidExpiration: 'boolean',
      avoidNotification: 'boolean',
      avoidPrepaidExpiration: 'boolean',
      avoidPrepaidNotification: 'boolean',
      creditType: 'string',
      creditValue: 'string',
      description: 'string',
      operator: 'string',
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
  statusCode: number;
  body: SaveUserCreditResponseBody;
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
  statusCode: number;
  body: SetAllExpirationDayResponseBody;
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
      body: SetAllExpirationDayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCreditLabelActionRequest extends $tea.Model {
  actionType?: string;
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
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
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
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
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
      uid: 'string',
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

export class SetCreditLabelActionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetCreditLabelActionResponseBody;
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
      body: SetCreditLabelActionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetRenewalRequest extends $tea.Model {
  instanceIDs?: string;
  ownerId?: number;
  productCode?: string;
  productType?: string;
  renewalPeriod?: number;
  renewalPeriodUnit?: string;
  renewalStatus?: string;
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIDs: 'InstanceIDs',
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      productType: 'ProductType',
      renewalPeriod: 'RenewalPeriod',
      renewalPeriodUnit: 'RenewalPeriodUnit',
      renewalStatus: 'RenewalStatus',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIDs: 'string',
      ownerId: 'number',
      productCode: 'string',
      productType: 'string',
      renewalPeriod: 'number',
      renewalPeriodUnit: 'string',
      renewalStatus: 'string',
      subscriptionType: 'string',
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
  statusCode: number;
  body: SetRenewalResponseBody;
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
      body: SetRenewalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetResellerUserAlarmThresholdRequest extends $tea.Model {
  alarmThresholds?: string;
  alarmType?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      alarmThresholds: 'AlarmThresholds',
      alarmType: 'AlarmType',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmThresholds: 'string',
      alarmType: 'string',
      ownerId: 'number',
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
  statusCode: number;
  body: SetResellerUserAlarmThresholdResponseBody;
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
      body: SetResellerUserAlarmThresholdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetResellerUserQuotaRequest extends $tea.Model {
  amount?: string;
  currency?: string;
  outBizId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      currency: 'Currency',
      outBizId: 'OutBizId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      currency: 'string',
      outBizId: 'string',
      ownerId: 'number',
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
  statusCode: number;
  body: SetResellerUserQuotaResponseBody;
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
      body: SetResellerUserQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetResellerUserStatusRequest extends $tea.Model {
  businessType?: string;
  ownerId?: string;
  status?: string;
  stopMode?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      ownerId: 'OwnerId',
      status: 'Status',
      stopMode: 'StopMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      ownerId: 'string',
      status: 'string',
      stopMode: 'string',
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
  statusCode: number;
  body: SetResellerUserStatusResponseBody;
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
      body: SetResellerUserStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscribeBillToOSSRequest extends $tea.Model {
  beginBillingCycle?: string;
  bucketOwnerId?: number;
  bucketPath?: string;
  multAccountRelSubscribe?: string;
  rowLimitPerFile?: number;
  subscribeBucket?: string;
  subscribeType?: string;
  static names(): { [key: string]: string } {
    return {
      beginBillingCycle: 'BeginBillingCycle',
      bucketOwnerId: 'BucketOwnerId',
      bucketPath: 'BucketPath',
      multAccountRelSubscribe: 'MultAccountRelSubscribe',
      rowLimitPerFile: 'RowLimitPerFile',
      subscribeBucket: 'SubscribeBucket',
      subscribeType: 'SubscribeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginBillingCycle: 'string',
      bucketOwnerId: 'number',
      bucketPath: 'string',
      multAccountRelSubscribe: 'string',
      rowLimitPerFile: 'number',
      subscribeBucket: 'string',
      subscribeType: 'string',
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
  statusCode: number;
  body: SubscribeBillToOSSResponseBody;
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
      body: SubscribeBillToOSSResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  resourceId?: string[];
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
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

export class TagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TagResourcesResponseBody;
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
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnsubscribeBillToOSSRequest extends $tea.Model {
  multAccountRelSubscribe?: string;
  subscribeType?: string;
  static names(): { [key: string]: string } {
    return {
      multAccountRelSubscribe: 'MultAccountRelSubscribe',
      subscribeType: 'SubscribeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multAccountRelSubscribe: 'string',
      subscribeType: 'string',
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
  statusCode: number;
  body: UnsubscribeBillToOSSResponseBody;
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
      body: UnsubscribeBillToOSSResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  all?: boolean;
  resourceId?: string[];
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
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

export class UntagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UntagResourcesResponseBody;
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
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeResourcePackageRequest extends $tea.Model {
  effectiveDate?: string;
  instanceId?: string;
  ownerId?: number;
  specification?: string;
  static names(): { [key: string]: string } {
    return {
      effectiveDate: 'EffectiveDate',
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      specification: 'Specification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveDate: 'string',
      instanceId: 'string',
      ownerId: 'number',
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
  statusCode: number;
  body: UpgradeResourcePackageResponseBody;
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
      body: UpgradeResourcePackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAccountRelationResponseBodyData extends $tea.Model {
  hostId?: string;
  relationId?: number;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      relationId: 'RelationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      relationId: 'number',
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

export class CreateSavingsPlansInstanceResponseBodyData extends $tea.Model {
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeCostBudgetsSummaryResponseBodyDataItems extends $tea.Model {
  budget?: { [key: string]: any };
  budgetName?: string;
  budgetStatus?: string;
  budgetType?: string;
  calculatedValues?: { [key: string]: any };
  consumePeriod?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      budget: 'Budget',
      budgetName: 'BudgetName',
      budgetStatus: 'BudgetStatus',
      budgetType: 'BudgetType',
      calculatedValues: 'CalculatedValues',
      consumePeriod: 'ConsumePeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      budget: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      budgetName: 'string',
      budgetStatus: 'string',
      budgetType: 'string',
      calculatedValues: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      consumePeriod: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCostBudgetsSummaryResponseBodyData extends $tea.Model {
  hostId?: string;
  items?: DescribeCostBudgetsSummaryResponseBodyDataItems[];
  maxResults?: number;
  nextToken?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      items: { 'type': 'array', 'itemType': DescribeCostBudgetsSummaryResponseBodyDataItems },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAmortizedCostByAmortizationPeriodResponseBodyDataItems extends $tea.Model {
  amortizationPeriod?: string;
  amortizationStatus?: string;
  billAccountID?: number;
  billAccountName?: string;
  billOwnerID?: number;
  billOwnerName?: string;
  bizType?: string;
  consumePeriod?: string;
  costUnit?: string;
  costUnitCode?: string;
  currentAmortizationDeductedByCashCoupons?: number;
  currentAmortizationDeductedByCoupons?: number;
  currentAmortizationDeductedByPrepaidCard?: number;
  currentAmortizationExpenditureAmount?: number;
  currentAmortizationInvoiceDiscount?: number;
  currentAmortizationPretaxAmount?: number;
  currentAmortizationPretaxGrossAmount?: number;
  currentAmortizationRoundDownDiscount?: number;
  deductedByCashCoupons?: number;
  deductedByCoupons?: number;
  deductedByPrepaidCard?: number;
  expenditureAmount?: number;
  instanceID?: string;
  internetIP?: string;
  intranetIP?: string;
  invoiceDiscount?: number;
  pretaxAmount?: number;
  pretaxGrossAmount?: number;
  previouslyAmortizedDeductedByCashCoupons?: number;
  previouslyAmortizedDeductedByCoupons?: number;
  previouslyAmortizedDeductedByPrepaidCard?: number;
  previouslyAmortizedExpenditureAmount?: number;
  previouslyAmortizedInvoiceDiscount?: number;
  previouslyAmortizedPretaxAmount?: number;
  previouslyAmortizedPretaxGrossAmount?: number;
  previouslyAmortizedRoundDownDiscount?: number;
  productCode?: string;
  productDetail?: string;
  productDetailCode?: string;
  productName?: string;
  region?: string;
  remainingAmortizationDeductedByCashCoupons?: number;
  remainingAmortizationDeductedByCoupons?: number;
  remainingAmortizationDeductedByPrepaidCard?: number;
  remainingAmortizationExpenditureAmount?: number;
  remainingAmortizationInvoiceDiscount?: number;
  remainingAmortizationPretaxAmount?: number;
  remainingAmortizationPretaxGrossAmount?: number;
  remainingAmortizationRoundDownDiscount?: number;
  resourceGroup?: string;
  roundDownDiscount?: number;
  splitAccountName?: string;
  splitItemID?: string;
  splitItemName?: string;
  splitProductDetail?: string;
  subscriptionType?: string;
  tag?: string;
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      amortizationPeriod: 'AmortizationPeriod',
      amortizationStatus: 'AmortizationStatus',
      billAccountID: 'BillAccountID',
      billAccountName: 'BillAccountName',
      billOwnerID: 'BillOwnerID',
      billOwnerName: 'BillOwnerName',
      bizType: 'BizType',
      consumePeriod: 'ConsumePeriod',
      costUnit: 'CostUnit',
      costUnitCode: 'CostUnitCode',
      currentAmortizationDeductedByCashCoupons: 'CurrentAmortizationDeductedByCashCoupons',
      currentAmortizationDeductedByCoupons: 'CurrentAmortizationDeductedByCoupons',
      currentAmortizationDeductedByPrepaidCard: 'CurrentAmortizationDeductedByPrepaidCard',
      currentAmortizationExpenditureAmount: 'CurrentAmortizationExpenditureAmount',
      currentAmortizationInvoiceDiscount: 'CurrentAmortizationInvoiceDiscount',
      currentAmortizationPretaxAmount: 'CurrentAmortizationPretaxAmount',
      currentAmortizationPretaxGrossAmount: 'CurrentAmortizationPretaxGrossAmount',
      currentAmortizationRoundDownDiscount: 'CurrentAmortizationRoundDownDiscount',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByCoupons: 'DeductedByCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      expenditureAmount: 'ExpenditureAmount',
      instanceID: 'InstanceID',
      internetIP: 'InternetIP',
      intranetIP: 'IntranetIP',
      invoiceDiscount: 'InvoiceDiscount',
      pretaxAmount: 'PretaxAmount',
      pretaxGrossAmount: 'PretaxGrossAmount',
      previouslyAmortizedDeductedByCashCoupons: 'PreviouslyAmortizedDeductedByCashCoupons',
      previouslyAmortizedDeductedByCoupons: 'PreviouslyAmortizedDeductedByCoupons',
      previouslyAmortizedDeductedByPrepaidCard: 'PreviouslyAmortizedDeductedByPrepaidCard',
      previouslyAmortizedExpenditureAmount: 'PreviouslyAmortizedExpenditureAmount',
      previouslyAmortizedInvoiceDiscount: 'PreviouslyAmortizedInvoiceDiscount',
      previouslyAmortizedPretaxAmount: 'PreviouslyAmortizedPretaxAmount',
      previouslyAmortizedPretaxGrossAmount: 'PreviouslyAmortizedPretaxGrossAmount',
      previouslyAmortizedRoundDownDiscount: 'PreviouslyAmortizedRoundDownDiscount',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      productDetailCode: 'ProductDetailCode',
      productName: 'ProductName',
      region: 'Region',
      remainingAmortizationDeductedByCashCoupons: 'RemainingAmortizationDeductedByCashCoupons',
      remainingAmortizationDeductedByCoupons: 'RemainingAmortizationDeductedByCoupons',
      remainingAmortizationDeductedByPrepaidCard: 'RemainingAmortizationDeductedByPrepaidCard',
      remainingAmortizationExpenditureAmount: 'RemainingAmortizationExpenditureAmount',
      remainingAmortizationInvoiceDiscount: 'RemainingAmortizationInvoiceDiscount',
      remainingAmortizationPretaxAmount: 'RemainingAmortizationPretaxAmount',
      remainingAmortizationPretaxGrossAmount: 'RemainingAmortizationPretaxGrossAmount',
      remainingAmortizationRoundDownDiscount: 'RemainingAmortizationRoundDownDiscount',
      resourceGroup: 'ResourceGroup',
      roundDownDiscount: 'RoundDownDiscount',
      splitAccountName: 'SplitAccountName',
      splitItemID: 'SplitItemID',
      splitItemName: 'SplitItemName',
      splitProductDetail: 'SplitProductDetail',
      subscriptionType: 'SubscriptionType',
      tag: 'Tag',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amortizationPeriod: 'string',
      amortizationStatus: 'string',
      billAccountID: 'number',
      billAccountName: 'string',
      billOwnerID: 'number',
      billOwnerName: 'string',
      bizType: 'string',
      consumePeriod: 'string',
      costUnit: 'string',
      costUnitCode: 'string',
      currentAmortizationDeductedByCashCoupons: 'number',
      currentAmortizationDeductedByCoupons: 'number',
      currentAmortizationDeductedByPrepaidCard: 'number',
      currentAmortizationExpenditureAmount: 'number',
      currentAmortizationInvoiceDiscount: 'number',
      currentAmortizationPretaxAmount: 'number',
      currentAmortizationPretaxGrossAmount: 'number',
      currentAmortizationRoundDownDiscount: 'number',
      deductedByCashCoupons: 'number',
      deductedByCoupons: 'number',
      deductedByPrepaidCard: 'number',
      expenditureAmount: 'number',
      instanceID: 'string',
      internetIP: 'string',
      intranetIP: 'string',
      invoiceDiscount: 'number',
      pretaxAmount: 'number',
      pretaxGrossAmount: 'number',
      previouslyAmortizedDeductedByCashCoupons: 'number',
      previouslyAmortizedDeductedByCoupons: 'number',
      previouslyAmortizedDeductedByPrepaidCard: 'number',
      previouslyAmortizedExpenditureAmount: 'number',
      previouslyAmortizedInvoiceDiscount: 'number',
      previouslyAmortizedPretaxAmount: 'number',
      previouslyAmortizedPretaxGrossAmount: 'number',
      previouslyAmortizedRoundDownDiscount: 'number',
      productCode: 'string',
      productDetail: 'string',
      productDetailCode: 'string',
      productName: 'string',
      region: 'string',
      remainingAmortizationDeductedByCashCoupons: 'number',
      remainingAmortizationDeductedByCoupons: 'number',
      remainingAmortizationDeductedByPrepaidCard: 'number',
      remainingAmortizationExpenditureAmount: 'number',
      remainingAmortizationInvoiceDiscount: 'number',
      remainingAmortizationPretaxAmount: 'number',
      remainingAmortizationPretaxGrossAmount: 'number',
      remainingAmortizationRoundDownDiscount: 'number',
      resourceGroup: 'string',
      roundDownDiscount: 'number',
      splitAccountName: 'string',
      splitItemID: 'string',
      splitItemName: 'string',
      splitProductDetail: 'string',
      subscriptionType: 'string',
      tag: 'string',
      zone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAmortizedCostByAmortizationPeriodResponseBodyData extends $tea.Model {
  accountID?: string;
  accountName?: string;
  items?: DescribeInstanceAmortizedCostByAmortizationPeriodResponseBodyDataItems[];
  maxResults?: number;
  nextToken?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountID: 'AccountID',
      accountName: 'AccountName',
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
      items: { 'type': 'array', 'itemType': DescribeInstanceAmortizedCostByAmortizationPeriodResponseBodyDataItems },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAmortizedCostByAmortizationPeriodDateResponseBodyDataItems extends $tea.Model {
  amortizationPeriod?: string;
  amortizationPeriodDay?: string;
  amortizationStatus?: string;
  billAccountID?: number;
  billAccountName?: string;
  billOwnerID?: number;
  billOwnerName?: string;
  bizType?: string;
  consumePeriod?: string;
  consumePeriodDay?: string;
  costUnit?: string;
  costUnitCode?: string;
  currentAmortizationDeductedByCashCoupons?: number;
  currentAmortizationDeductedByCoupons?: number;
  currentAmortizationDeductedByPrepaidCard?: number;
  currentAmortizationExpenditureAmount?: number;
  currentAmortizationInvoiceDiscount?: number;
  currentAmortizationPretaxAmount?: number;
  currentAmortizationPretaxGrossAmount?: number;
  currentAmortizationRoundDownDiscount?: number;
  deductedByCashCoupons?: number;
  deductedByCoupons?: number;
  deductedByPrepaidCard?: number;
  expenditureAmount?: number;
  instanceID?: string;
  internetIP?: string;
  intranetIP?: string;
  invoiceDiscount?: number;
  pretaxAmount?: number;
  pretaxGrossAmount?: number;
  previouslyAmortizedDeductedByCashCoupons?: number;
  previouslyAmortizedDeductedByCoupons?: number;
  previouslyAmortizedDeductedByPrepaidCard?: number;
  previouslyAmortizedExpenditureAmount?: number;
  previouslyAmortizedInvoiceDiscount?: number;
  previouslyAmortizedPretaxAmount?: number;
  previouslyAmortizedPretaxGrossAmount?: number;
  previouslyAmortizedRoundDownDiscount?: number;
  productCode?: string;
  productDetail?: string;
  productDetailCode?: string;
  productName?: string;
  region?: string;
  remainingAmortizationDeductedByCashCoupons?: number;
  remainingAmortizationDeductedByCoupons?: number;
  remainingAmortizationDeductedByPrepaidCard?: number;
  remainingAmortizationExpenditureAmount?: number;
  remainingAmortizationInvoiceDiscount?: number;
  remainingAmortizationPretaxAmount?: number;
  remainingAmortizationPretaxGrossAmount?: number;
  remainingAmortizationRoundDownDiscount?: number;
  resourceGroup?: string;
  roundDownDiscount?: number;
  splitAccountName?: string;
  splitItemID?: string;
  splitItemName?: string;
  splitProductDetail?: string;
  subscriptionType?: string;
  tag?: string;
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      amortizationPeriod: 'AmortizationPeriod',
      amortizationPeriodDay: 'AmortizationPeriodDay',
      amortizationStatus: 'AmortizationStatus',
      billAccountID: 'BillAccountID',
      billAccountName: 'BillAccountName',
      billOwnerID: 'BillOwnerID',
      billOwnerName: 'BillOwnerName',
      bizType: 'BizType',
      consumePeriod: 'ConsumePeriod',
      consumePeriodDay: 'ConsumePeriodDay',
      costUnit: 'CostUnit',
      costUnitCode: 'CostUnitCode',
      currentAmortizationDeductedByCashCoupons: 'CurrentAmortizationDeductedByCashCoupons',
      currentAmortizationDeductedByCoupons: 'CurrentAmortizationDeductedByCoupons',
      currentAmortizationDeductedByPrepaidCard: 'CurrentAmortizationDeductedByPrepaidCard',
      currentAmortizationExpenditureAmount: 'CurrentAmortizationExpenditureAmount',
      currentAmortizationInvoiceDiscount: 'CurrentAmortizationInvoiceDiscount',
      currentAmortizationPretaxAmount: 'CurrentAmortizationPretaxAmount',
      currentAmortizationPretaxGrossAmount: 'CurrentAmortizationPretaxGrossAmount',
      currentAmortizationRoundDownDiscount: 'CurrentAmortizationRoundDownDiscount',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByCoupons: 'DeductedByCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      expenditureAmount: 'ExpenditureAmount',
      instanceID: 'InstanceID',
      internetIP: 'InternetIP',
      intranetIP: 'IntranetIP',
      invoiceDiscount: 'InvoiceDiscount',
      pretaxAmount: 'PretaxAmount',
      pretaxGrossAmount: 'PretaxGrossAmount',
      previouslyAmortizedDeductedByCashCoupons: 'PreviouslyAmortizedDeductedByCashCoupons',
      previouslyAmortizedDeductedByCoupons: 'PreviouslyAmortizedDeductedByCoupons',
      previouslyAmortizedDeductedByPrepaidCard: 'PreviouslyAmortizedDeductedByPrepaidCard',
      previouslyAmortizedExpenditureAmount: 'PreviouslyAmortizedExpenditureAmount',
      previouslyAmortizedInvoiceDiscount: 'PreviouslyAmortizedInvoiceDiscount',
      previouslyAmortizedPretaxAmount: 'PreviouslyAmortizedPretaxAmount',
      previouslyAmortizedPretaxGrossAmount: 'PreviouslyAmortizedPretaxGrossAmount',
      previouslyAmortizedRoundDownDiscount: 'PreviouslyAmortizedRoundDownDiscount',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      productDetailCode: 'ProductDetailCode',
      productName: 'ProductName',
      region: 'Region',
      remainingAmortizationDeductedByCashCoupons: 'RemainingAmortizationDeductedByCashCoupons',
      remainingAmortizationDeductedByCoupons: 'RemainingAmortizationDeductedByCoupons',
      remainingAmortizationDeductedByPrepaidCard: 'RemainingAmortizationDeductedByPrepaidCard',
      remainingAmortizationExpenditureAmount: 'RemainingAmortizationExpenditureAmount',
      remainingAmortizationInvoiceDiscount: 'RemainingAmortizationInvoiceDiscount',
      remainingAmortizationPretaxAmount: 'RemainingAmortizationPretaxAmount',
      remainingAmortizationPretaxGrossAmount: 'RemainingAmortizationPretaxGrossAmount',
      remainingAmortizationRoundDownDiscount: 'RemainingAmortizationRoundDownDiscount',
      resourceGroup: 'ResourceGroup',
      roundDownDiscount: 'RoundDownDiscount',
      splitAccountName: 'SplitAccountName',
      splitItemID: 'SplitItemID',
      splitItemName: 'SplitItemName',
      splitProductDetail: 'SplitProductDetail',
      subscriptionType: 'SubscriptionType',
      tag: 'Tag',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amortizationPeriod: 'string',
      amortizationPeriodDay: 'string',
      amortizationStatus: 'string',
      billAccountID: 'number',
      billAccountName: 'string',
      billOwnerID: 'number',
      billOwnerName: 'string',
      bizType: 'string',
      consumePeriod: 'string',
      consumePeriodDay: 'string',
      costUnit: 'string',
      costUnitCode: 'string',
      currentAmortizationDeductedByCashCoupons: 'number',
      currentAmortizationDeductedByCoupons: 'number',
      currentAmortizationDeductedByPrepaidCard: 'number',
      currentAmortizationExpenditureAmount: 'number',
      currentAmortizationInvoiceDiscount: 'number',
      currentAmortizationPretaxAmount: 'number',
      currentAmortizationPretaxGrossAmount: 'number',
      currentAmortizationRoundDownDiscount: 'number',
      deductedByCashCoupons: 'number',
      deductedByCoupons: 'number',
      deductedByPrepaidCard: 'number',
      expenditureAmount: 'number',
      instanceID: 'string',
      internetIP: 'string',
      intranetIP: 'string',
      invoiceDiscount: 'number',
      pretaxAmount: 'number',
      pretaxGrossAmount: 'number',
      previouslyAmortizedDeductedByCashCoupons: 'number',
      previouslyAmortizedDeductedByCoupons: 'number',
      previouslyAmortizedDeductedByPrepaidCard: 'number',
      previouslyAmortizedExpenditureAmount: 'number',
      previouslyAmortizedInvoiceDiscount: 'number',
      previouslyAmortizedPretaxAmount: 'number',
      previouslyAmortizedPretaxGrossAmount: 'number',
      previouslyAmortizedRoundDownDiscount: 'number',
      productCode: 'string',
      productDetail: 'string',
      productDetailCode: 'string',
      productName: 'string',
      region: 'string',
      remainingAmortizationDeductedByCashCoupons: 'number',
      remainingAmortizationDeductedByCoupons: 'number',
      remainingAmortizationDeductedByPrepaidCard: 'number',
      remainingAmortizationExpenditureAmount: 'number',
      remainingAmortizationInvoiceDiscount: 'number',
      remainingAmortizationPretaxAmount: 'number',
      remainingAmortizationPretaxGrossAmount: 'number',
      remainingAmortizationRoundDownDiscount: 'number',
      resourceGroup: 'string',
      roundDownDiscount: 'number',
      splitAccountName: 'string',
      splitItemID: 'string',
      splitItemName: 'string',
      splitProductDetail: 'string',
      subscriptionType: 'string',
      tag: 'string',
      zone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAmortizedCostByAmortizationPeriodDateResponseBodyData extends $tea.Model {
  accountID?: string;
  accountName?: string;
  hostId?: string;
  items?: DescribeInstanceAmortizedCostByAmortizationPeriodDateResponseBodyDataItems[];
  maxResults?: number;
  nextToken?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountID: 'AccountID',
      accountName: 'AccountName',
      hostId: 'HostId',
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
      hostId: 'string',
      items: { 'type': 'array', 'itemType': DescribeInstanceAmortizedCostByAmortizationPeriodDateResponseBodyDataItems },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAmortizedCostByConsumePeriodResponseBodyDataItems extends $tea.Model {
  amortizationPeriod?: string;
  amortizationStatus?: string;
  billAccountID?: number;
  billAccountName?: string;
  billOwnerID?: number;
  billOwnerName?: string;
  bizType?: string;
  consumePeriod?: string;
  costUnit?: string;
  costUnitCode?: string;
  currentAmortizationDeductedByCashCoupons?: number;
  currentAmortizationDeductedByCoupons?: number;
  currentAmortizationDeductedByPrepaidCard?: number;
  currentAmortizationExpenditureAmount?: number;
  currentAmortizationInvoiceDiscount?: number;
  currentAmortizationPretaxAmount?: number;
  currentAmortizationPretaxGrossAmount?: number;
  currentAmortizationRoundDownDiscount?: number;
  deductedByCashCoupons?: number;
  deductedByCoupons?: number;
  deductedByPrepaidCard?: number;
  expenditureAmount?: number;
  instanceID?: string;
  internetIP?: string;
  intranetIP?: string;
  invoiceDiscount?: number;
  pretaxAmount?: number;
  pretaxGrossAmount?: number;
  previouslyAmortizedDeductedByCashCoupons?: number;
  previouslyAmortizedDeductedByCoupons?: number;
  previouslyAmortizedDeductedByPrepaidCard?: number;
  previouslyAmortizedExpenditureAmount?: number;
  previouslyAmortizedInvoiceDiscount?: number;
  previouslyAmortizedPretaxAmount?: number;
  previouslyAmortizedPretaxGrossAmount?: number;
  previouslyAmortizedRoundDownDiscount?: number;
  productCode?: string;
  productDetail?: string;
  productDetailCode?: string;
  productName?: string;
  region?: string;
  remainingAmortizationDeductedByCashCoupons?: number;
  remainingAmortizationDeductedByCoupons?: number;
  remainingAmortizationDeductedByPrepaidCard?: number;
  remainingAmortizationExpenditureAmount?: number;
  remainingAmortizationInvoiceDiscount?: number;
  remainingAmortizationPretaxAmount?: number;
  remainingAmortizationPretaxGrossAmount?: number;
  remainingAmortizationRoundDownDiscount?: number;
  resourceGroup?: string;
  roundDownDiscount?: number;
  splitAccountName?: string;
  splitItemID?: string;
  splitItemName?: string;
  splitProductDetail?: string;
  subscriptionType?: string;
  tag?: string;
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      amortizationPeriod: 'AmortizationPeriod',
      amortizationStatus: 'AmortizationStatus',
      billAccountID: 'BillAccountID',
      billAccountName: 'BillAccountName',
      billOwnerID: 'BillOwnerID',
      billOwnerName: 'BillOwnerName',
      bizType: 'BizType',
      consumePeriod: 'ConsumePeriod',
      costUnit: 'CostUnit',
      costUnitCode: 'CostUnitCode',
      currentAmortizationDeductedByCashCoupons: 'CurrentAmortizationDeductedByCashCoupons',
      currentAmortizationDeductedByCoupons: 'CurrentAmortizationDeductedByCoupons',
      currentAmortizationDeductedByPrepaidCard: 'CurrentAmortizationDeductedByPrepaidCard',
      currentAmortizationExpenditureAmount: 'CurrentAmortizationExpenditureAmount',
      currentAmortizationInvoiceDiscount: 'CurrentAmortizationInvoiceDiscount',
      currentAmortizationPretaxAmount: 'CurrentAmortizationPretaxAmount',
      currentAmortizationPretaxGrossAmount: 'CurrentAmortizationPretaxGrossAmount',
      currentAmortizationRoundDownDiscount: 'CurrentAmortizationRoundDownDiscount',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByCoupons: 'DeductedByCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      expenditureAmount: 'ExpenditureAmount',
      instanceID: 'InstanceID',
      internetIP: 'InternetIP',
      intranetIP: 'IntranetIP',
      invoiceDiscount: 'InvoiceDiscount',
      pretaxAmount: 'PretaxAmount',
      pretaxGrossAmount: 'PretaxGrossAmount',
      previouslyAmortizedDeductedByCashCoupons: 'PreviouslyAmortizedDeductedByCashCoupons',
      previouslyAmortizedDeductedByCoupons: 'PreviouslyAmortizedDeductedByCoupons',
      previouslyAmortizedDeductedByPrepaidCard: 'PreviouslyAmortizedDeductedByPrepaidCard',
      previouslyAmortizedExpenditureAmount: 'PreviouslyAmortizedExpenditureAmount',
      previouslyAmortizedInvoiceDiscount: 'PreviouslyAmortizedInvoiceDiscount',
      previouslyAmortizedPretaxAmount: 'PreviouslyAmortizedPretaxAmount',
      previouslyAmortizedPretaxGrossAmount: 'PreviouslyAmortizedPretaxGrossAmount',
      previouslyAmortizedRoundDownDiscount: 'PreviouslyAmortizedRoundDownDiscount',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      productDetailCode: 'ProductDetailCode',
      productName: 'ProductName',
      region: 'Region',
      remainingAmortizationDeductedByCashCoupons: 'RemainingAmortizationDeductedByCashCoupons',
      remainingAmortizationDeductedByCoupons: 'RemainingAmortizationDeductedByCoupons',
      remainingAmortizationDeductedByPrepaidCard: 'RemainingAmortizationDeductedByPrepaidCard',
      remainingAmortizationExpenditureAmount: 'RemainingAmortizationExpenditureAmount',
      remainingAmortizationInvoiceDiscount: 'RemainingAmortizationInvoiceDiscount',
      remainingAmortizationPretaxAmount: 'RemainingAmortizationPretaxAmount',
      remainingAmortizationPretaxGrossAmount: 'RemainingAmortizationPretaxGrossAmount',
      remainingAmortizationRoundDownDiscount: 'RemainingAmortizationRoundDownDiscount',
      resourceGroup: 'ResourceGroup',
      roundDownDiscount: 'RoundDownDiscount',
      splitAccountName: 'SplitAccountName',
      splitItemID: 'SplitItemID',
      splitItemName: 'SplitItemName',
      splitProductDetail: 'SplitProductDetail',
      subscriptionType: 'SubscriptionType',
      tag: 'Tag',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amortizationPeriod: 'string',
      amortizationStatus: 'string',
      billAccountID: 'number',
      billAccountName: 'string',
      billOwnerID: 'number',
      billOwnerName: 'string',
      bizType: 'string',
      consumePeriod: 'string',
      costUnit: 'string',
      costUnitCode: 'string',
      currentAmortizationDeductedByCashCoupons: 'number',
      currentAmortizationDeductedByCoupons: 'number',
      currentAmortizationDeductedByPrepaidCard: 'number',
      currentAmortizationExpenditureAmount: 'number',
      currentAmortizationInvoiceDiscount: 'number',
      currentAmortizationPretaxAmount: 'number',
      currentAmortizationPretaxGrossAmount: 'number',
      currentAmortizationRoundDownDiscount: 'number',
      deductedByCashCoupons: 'number',
      deductedByCoupons: 'number',
      deductedByPrepaidCard: 'number',
      expenditureAmount: 'number',
      instanceID: 'string',
      internetIP: 'string',
      intranetIP: 'string',
      invoiceDiscount: 'number',
      pretaxAmount: 'number',
      pretaxGrossAmount: 'number',
      previouslyAmortizedDeductedByCashCoupons: 'number',
      previouslyAmortizedDeductedByCoupons: 'number',
      previouslyAmortizedDeductedByPrepaidCard: 'number',
      previouslyAmortizedExpenditureAmount: 'number',
      previouslyAmortizedInvoiceDiscount: 'number',
      previouslyAmortizedPretaxAmount: 'number',
      previouslyAmortizedPretaxGrossAmount: 'number',
      previouslyAmortizedRoundDownDiscount: 'number',
      productCode: 'string',
      productDetail: 'string',
      productDetailCode: 'string',
      productName: 'string',
      region: 'string',
      remainingAmortizationDeductedByCashCoupons: 'number',
      remainingAmortizationDeductedByCoupons: 'number',
      remainingAmortizationDeductedByPrepaidCard: 'number',
      remainingAmortizationExpenditureAmount: 'number',
      remainingAmortizationInvoiceDiscount: 'number',
      remainingAmortizationPretaxAmount: 'number',
      remainingAmortizationPretaxGrossAmount: 'number',
      remainingAmortizationRoundDownDiscount: 'number',
      resourceGroup: 'string',
      roundDownDiscount: 'number',
      splitAccountName: 'string',
      splitItemID: 'string',
      splitItemName: 'string',
      splitProductDetail: 'string',
      subscriptionType: 'string',
      tag: 'string',
      zone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAmortizedCostByConsumePeriodResponseBodyData extends $tea.Model {
  accountID?: string;
  accountName?: string;
  items?: DescribeInstanceAmortizedCostByConsumePeriodResponseBodyDataItems[];
  maxResults?: number;
  nextToken?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountID: 'AccountID',
      accountName: 'AccountName',
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
      items: { 'type': 'array', 'itemType': DescribeInstanceAmortizedCostByConsumePeriodResponseBodyDataItems },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceBillResponseBodyDataItems extends $tea.Model {
  adjustAmount?: number;
  billAccountID?: string;
  billAccountName?: string;
  billingDate?: string;
  billingItem?: string;
  billingItemCode?: string;
  billingType?: string;
  bizType?: string;
  cashAmount?: number;
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
  itemName?: string;
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
      adjustAmount: 'AdjustAmount',
      billAccountID: 'BillAccountID',
      billAccountName: 'BillAccountName',
      billingDate: 'BillingDate',
      billingItem: 'BillingItem',
      billingItemCode: 'BillingItemCode',
      billingType: 'BillingType',
      bizType: 'BizType',
      cashAmount: 'CashAmount',
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
      itemName: 'ItemName',
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
      adjustAmount: 'number',
      billAccountID: 'string',
      billAccountName: 'string',
      billingDate: 'string',
      billingItem: 'string',
      billingItemCode: 'string',
      billingType: 'string',
      bizType: 'string',
      cashAmount: 'number',
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
      itemName: 'string',
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

export class DescribeInstanceBillResponseBodyData extends $tea.Model {
  accountID?: string;
  accountName?: string;
  billingCycle?: string;
  items?: DescribeInstanceBillResponseBodyDataItems[];
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
      items: { 'type': 'array', 'itemType': DescribeInstanceBillResponseBodyDataItems },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePricingModuleResponseBodyDataAttributeListAttributeValuesAttributeValue extends $tea.Model {
  name?: string;
  remark?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      remark: 'Remark',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      remark: 'string',
      type: 'string',
      value: 'string',
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
  configList?: DescribePricingModuleResponseBodyDataModuleListModuleConfigList;
  currency?: string;
  moduleCode?: string;
  moduleName?: string;
  priceType?: string;
  static names(): { [key: string]: string } {
    return {
      configList: 'ConfigList',
      currency: 'Currency',
      moduleCode: 'ModuleCode',
      moduleName: 'ModuleName',
      priceType: 'PriceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configList: DescribePricingModuleResponseBodyDataModuleListModuleConfigList,
      currency: 'string',
      moduleCode: 'string',
      moduleName: 'string',
      priceType: 'string',
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

export class DescribePricingModuleResponseBodyData extends $tea.Model {
  attributeList?: DescribePricingModuleResponseBodyDataAttributeList;
  moduleList?: DescribePricingModuleResponseBodyDataModuleList;
  static names(): { [key: string]: string } {
    return {
      attributeList: 'AttributeList',
      moduleList: 'ModuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeList: DescribePricingModuleResponseBodyDataAttributeList,
      moduleList: DescribePricingModuleResponseBodyDataModuleList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductAmortizedCostByAmortizationPeriodResponseBodyDataItems extends $tea.Model {
  amortizationPeriod?: string;
  amortizationStatus?: string;
  billAccountID?: number;
  billAccountName?: string;
  billOwnerID?: number;
  billOwnerName?: string;
  bizType?: string;
  consumePeriod?: string;
  currentAmortizationDeductedByCashCoupons?: number;
  currentAmortizationDeductedByCoupons?: number;
  currentAmortizationDeductedByPrepaidCard?: number;
  currentAmortizationExpenditureAmount?: number;
  currentAmortizationInvoiceDiscount?: number;
  currentAmortizationPretaxAmount?: number;
  currentAmortizationPretaxGrossAmount?: number;
  currentAmortizationRoundDownDiscount?: number;
  deductedByCashCoupons?: number;
  deductedByCoupons?: number;
  deductedByPrepaidCard?: number;
  expenditureAmount?: number;
  invoiceDiscount?: number;
  pretaxAmount?: number;
  pretaxGrossAmount?: number;
  previouslyAmortizedDeductedByCashCoupons?: number;
  previouslyAmortizedDeductedByCoupons?: number;
  previouslyAmortizedDeductedByPrepaidCard?: number;
  previouslyAmortizedExpenditureAmount?: number;
  previouslyAmortizedInvoiceDiscount?: number;
  previouslyAmortizedPretaxAmount?: number;
  previouslyAmortizedPretaxGrossAmount?: number;
  previouslyAmortizedRoundDownDiscount?: number;
  productCode?: string;
  productDetail?: string;
  productDetailCode?: string;
  productName?: string;
  remainingAmortizationDeductedByCashCoupons?: number;
  remainingAmortizationDeductedByCoupons?: number;
  remainingAmortizationDeductedByPrepaidCard?: number;
  remainingAmortizationExpenditureAmount?: number;
  remainingAmortizationInvoiceDiscount?: number;
  remainingAmortizationPretaxAmount?: number;
  remainingAmortizationPretaxGrossAmount?: number;
  remainingAmortizationRoundDownDiscount?: number;
  roundDownDiscount?: number;
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      amortizationPeriod: 'AmortizationPeriod',
      amortizationStatus: 'AmortizationStatus',
      billAccountID: 'BillAccountID',
      billAccountName: 'BillAccountName',
      billOwnerID: 'BillOwnerID',
      billOwnerName: 'BillOwnerName',
      bizType: 'BizType',
      consumePeriod: 'ConsumePeriod',
      currentAmortizationDeductedByCashCoupons: 'CurrentAmortizationDeductedByCashCoupons',
      currentAmortizationDeductedByCoupons: 'CurrentAmortizationDeductedByCoupons',
      currentAmortizationDeductedByPrepaidCard: 'CurrentAmortizationDeductedByPrepaidCard',
      currentAmortizationExpenditureAmount: 'CurrentAmortizationExpenditureAmount',
      currentAmortizationInvoiceDiscount: 'CurrentAmortizationInvoiceDiscount',
      currentAmortizationPretaxAmount: 'CurrentAmortizationPretaxAmount',
      currentAmortizationPretaxGrossAmount: 'CurrentAmortizationPretaxGrossAmount',
      currentAmortizationRoundDownDiscount: 'CurrentAmortizationRoundDownDiscount',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByCoupons: 'DeductedByCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      expenditureAmount: 'ExpenditureAmount',
      invoiceDiscount: 'InvoiceDiscount',
      pretaxAmount: 'PretaxAmount',
      pretaxGrossAmount: 'PretaxGrossAmount',
      previouslyAmortizedDeductedByCashCoupons: 'PreviouslyAmortizedDeductedByCashCoupons',
      previouslyAmortizedDeductedByCoupons: 'PreviouslyAmortizedDeductedByCoupons',
      previouslyAmortizedDeductedByPrepaidCard: 'PreviouslyAmortizedDeductedByPrepaidCard',
      previouslyAmortizedExpenditureAmount: 'PreviouslyAmortizedExpenditureAmount',
      previouslyAmortizedInvoiceDiscount: 'PreviouslyAmortizedInvoiceDiscount',
      previouslyAmortizedPretaxAmount: 'PreviouslyAmortizedPretaxAmount',
      previouslyAmortizedPretaxGrossAmount: 'PreviouslyAmortizedPretaxGrossAmount',
      previouslyAmortizedRoundDownDiscount: 'PreviouslyAmortizedRoundDownDiscount',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      productDetailCode: 'ProductDetailCode',
      productName: 'ProductName',
      remainingAmortizationDeductedByCashCoupons: 'RemainingAmortizationDeductedByCashCoupons',
      remainingAmortizationDeductedByCoupons: 'RemainingAmortizationDeductedByCoupons',
      remainingAmortizationDeductedByPrepaidCard: 'RemainingAmortizationDeductedByPrepaidCard',
      remainingAmortizationExpenditureAmount: 'RemainingAmortizationExpenditureAmount',
      remainingAmortizationInvoiceDiscount: 'RemainingAmortizationInvoiceDiscount',
      remainingAmortizationPretaxAmount: 'RemainingAmortizationPretaxAmount',
      remainingAmortizationPretaxGrossAmount: 'RemainingAmortizationPretaxGrossAmount',
      remainingAmortizationRoundDownDiscount: 'RemainingAmortizationRoundDownDiscount',
      roundDownDiscount: 'RoundDownDiscount',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amortizationPeriod: 'string',
      amortizationStatus: 'string',
      billAccountID: 'number',
      billAccountName: 'string',
      billOwnerID: 'number',
      billOwnerName: 'string',
      bizType: 'string',
      consumePeriod: 'string',
      currentAmortizationDeductedByCashCoupons: 'number',
      currentAmortizationDeductedByCoupons: 'number',
      currentAmortizationDeductedByPrepaidCard: 'number',
      currentAmortizationExpenditureAmount: 'number',
      currentAmortizationInvoiceDiscount: 'number',
      currentAmortizationPretaxAmount: 'number',
      currentAmortizationPretaxGrossAmount: 'number',
      currentAmortizationRoundDownDiscount: 'number',
      deductedByCashCoupons: 'number',
      deductedByCoupons: 'number',
      deductedByPrepaidCard: 'number',
      expenditureAmount: 'number',
      invoiceDiscount: 'number',
      pretaxAmount: 'number',
      pretaxGrossAmount: 'number',
      previouslyAmortizedDeductedByCashCoupons: 'number',
      previouslyAmortizedDeductedByCoupons: 'number',
      previouslyAmortizedDeductedByPrepaidCard: 'number',
      previouslyAmortizedExpenditureAmount: 'number',
      previouslyAmortizedInvoiceDiscount: 'number',
      previouslyAmortizedPretaxAmount: 'number',
      previouslyAmortizedPretaxGrossAmount: 'number',
      previouslyAmortizedRoundDownDiscount: 'number',
      productCode: 'string',
      productDetail: 'string',
      productDetailCode: 'string',
      productName: 'string',
      remainingAmortizationDeductedByCashCoupons: 'number',
      remainingAmortizationDeductedByCoupons: 'number',
      remainingAmortizationDeductedByPrepaidCard: 'number',
      remainingAmortizationExpenditureAmount: 'number',
      remainingAmortizationInvoiceDiscount: 'number',
      remainingAmortizationPretaxAmount: 'number',
      remainingAmortizationPretaxGrossAmount: 'number',
      remainingAmortizationRoundDownDiscount: 'number',
      roundDownDiscount: 'number',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductAmortizedCostByAmortizationPeriodResponseBodyData extends $tea.Model {
  accountID?: string;
  accountName?: string;
  items?: DescribeProductAmortizedCostByAmortizationPeriodResponseBodyDataItems[];
  maxResults?: number;
  nextToken?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountID: 'AccountID',
      accountName: 'AccountName',
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
      items: { 'type': 'array', 'itemType': DescribeProductAmortizedCostByAmortizationPeriodResponseBodyDataItems },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductAmortizedCostByConsumePeriodResponseBodyDataItems extends $tea.Model {
  amortizationPeriod?: string;
  amortizationStatus?: string;
  billAccountID?: number;
  billAccountName?: string;
  billOwnerID?: number;
  billOwnerName?: string;
  bizType?: string;
  consumePeriod?: string;
  currentAmortizationDeductedByCashCoupons?: number;
  currentAmortizationDeductedByCoupons?: number;
  currentAmortizationDeductedByPrepaidCard?: number;
  currentAmortizationExpenditureAmount?: number;
  currentAmortizationInvoiceDiscount?: number;
  currentAmortizationPretaxAmount?: number;
  currentAmortizationPretaxGrossAmount?: number;
  currentAmortizationRoundDownDiscount?: number;
  deductedByCashCoupons?: number;
  deductedByCoupons?: number;
  deductedByPrepaidCard?: number;
  expenditureAmount?: number;
  invoiceDiscount?: number;
  pretaxAmount?: number;
  pretaxGrossAmount?: number;
  previouslyAmortizedDeductedByCashCoupons?: number;
  previouslyAmortizedDeductedByCoupons?: number;
  previouslyAmortizedDeductedByPrepaidCard?: number;
  previouslyAmortizedExpenditureAmount?: number;
  previouslyAmortizedInvoiceDiscount?: number;
  previouslyAmortizedPretaxAmount?: number;
  previouslyAmortizedPretaxGrossAmount?: number;
  previouslyAmortizedRoundDownDiscount?: number;
  productCode?: string;
  productDetail?: string;
  productDetailCode?: string;
  productName?: string;
  remainingAmortizationDeductedByCashCoupons?: number;
  remainingAmortizationDeductedByCoupons?: number;
  remainingAmortizationDeductedByPrepaidCard?: number;
  remainingAmortizationExpenditureAmount?: number;
  remainingAmortizationInvoiceDiscount?: number;
  remainingAmortizationPretaxAmount?: number;
  remainingAmortizationPretaxGrossAmount?: number;
  remainingAmortizationRoundDownDiscount?: number;
  roundDownDiscount?: number;
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      amortizationPeriod: 'AmortizationPeriod',
      amortizationStatus: 'AmortizationStatus',
      billAccountID: 'BillAccountID',
      billAccountName: 'BillAccountName',
      billOwnerID: 'BillOwnerID',
      billOwnerName: 'BillOwnerName',
      bizType: 'BizType',
      consumePeriod: 'ConsumePeriod',
      currentAmortizationDeductedByCashCoupons: 'CurrentAmortizationDeductedByCashCoupons',
      currentAmortizationDeductedByCoupons: 'CurrentAmortizationDeductedByCoupons',
      currentAmortizationDeductedByPrepaidCard: 'CurrentAmortizationDeductedByPrepaidCard',
      currentAmortizationExpenditureAmount: 'CurrentAmortizationExpenditureAmount',
      currentAmortizationInvoiceDiscount: 'CurrentAmortizationInvoiceDiscount',
      currentAmortizationPretaxAmount: 'CurrentAmortizationPretaxAmount',
      currentAmortizationPretaxGrossAmount: 'CurrentAmortizationPretaxGrossAmount',
      currentAmortizationRoundDownDiscount: 'CurrentAmortizationRoundDownDiscount',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByCoupons: 'DeductedByCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      expenditureAmount: 'ExpenditureAmount',
      invoiceDiscount: 'InvoiceDiscount',
      pretaxAmount: 'PretaxAmount',
      pretaxGrossAmount: 'PretaxGrossAmount',
      previouslyAmortizedDeductedByCashCoupons: 'PreviouslyAmortizedDeductedByCashCoupons',
      previouslyAmortizedDeductedByCoupons: 'PreviouslyAmortizedDeductedByCoupons',
      previouslyAmortizedDeductedByPrepaidCard: 'PreviouslyAmortizedDeductedByPrepaidCard',
      previouslyAmortizedExpenditureAmount: 'PreviouslyAmortizedExpenditureAmount',
      previouslyAmortizedInvoiceDiscount: 'PreviouslyAmortizedInvoiceDiscount',
      previouslyAmortizedPretaxAmount: 'PreviouslyAmortizedPretaxAmount',
      previouslyAmortizedPretaxGrossAmount: 'PreviouslyAmortizedPretaxGrossAmount',
      previouslyAmortizedRoundDownDiscount: 'PreviouslyAmortizedRoundDownDiscount',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      productDetailCode: 'ProductDetailCode',
      productName: 'ProductName',
      remainingAmortizationDeductedByCashCoupons: 'RemainingAmortizationDeductedByCashCoupons',
      remainingAmortizationDeductedByCoupons: 'RemainingAmortizationDeductedByCoupons',
      remainingAmortizationDeductedByPrepaidCard: 'RemainingAmortizationDeductedByPrepaidCard',
      remainingAmortizationExpenditureAmount: 'RemainingAmortizationExpenditureAmount',
      remainingAmortizationInvoiceDiscount: 'RemainingAmortizationInvoiceDiscount',
      remainingAmortizationPretaxAmount: 'RemainingAmortizationPretaxAmount',
      remainingAmortizationPretaxGrossAmount: 'RemainingAmortizationPretaxGrossAmount',
      remainingAmortizationRoundDownDiscount: 'RemainingAmortizationRoundDownDiscount',
      roundDownDiscount: 'RoundDownDiscount',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amortizationPeriod: 'string',
      amortizationStatus: 'string',
      billAccountID: 'number',
      billAccountName: 'string',
      billOwnerID: 'number',
      billOwnerName: 'string',
      bizType: 'string',
      consumePeriod: 'string',
      currentAmortizationDeductedByCashCoupons: 'number',
      currentAmortizationDeductedByCoupons: 'number',
      currentAmortizationDeductedByPrepaidCard: 'number',
      currentAmortizationExpenditureAmount: 'number',
      currentAmortizationInvoiceDiscount: 'number',
      currentAmortizationPretaxAmount: 'number',
      currentAmortizationPretaxGrossAmount: 'number',
      currentAmortizationRoundDownDiscount: 'number',
      deductedByCashCoupons: 'number',
      deductedByCoupons: 'number',
      deductedByPrepaidCard: 'number',
      expenditureAmount: 'number',
      invoiceDiscount: 'number',
      pretaxAmount: 'number',
      pretaxGrossAmount: 'number',
      previouslyAmortizedDeductedByCashCoupons: 'number',
      previouslyAmortizedDeductedByCoupons: 'number',
      previouslyAmortizedDeductedByPrepaidCard: 'number',
      previouslyAmortizedExpenditureAmount: 'number',
      previouslyAmortizedInvoiceDiscount: 'number',
      previouslyAmortizedPretaxAmount: 'number',
      previouslyAmortizedPretaxGrossAmount: 'number',
      previouslyAmortizedRoundDownDiscount: 'number',
      productCode: 'string',
      productDetail: 'string',
      productDetailCode: 'string',
      productName: 'string',
      remainingAmortizationDeductedByCashCoupons: 'number',
      remainingAmortizationDeductedByCoupons: 'number',
      remainingAmortizationDeductedByPrepaidCard: 'number',
      remainingAmortizationExpenditureAmount: 'number',
      remainingAmortizationInvoiceDiscount: 'number',
      remainingAmortizationPretaxAmount: 'number',
      remainingAmortizationPretaxGrossAmount: 'number',
      remainingAmortizationRoundDownDiscount: 'number',
      roundDownDiscount: 'number',
      subscriptionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductAmortizedCostByConsumePeriodResponseBodyData extends $tea.Model {
  accountID?: string;
  accountName?: string;
  items?: DescribeProductAmortizedCostByConsumePeriodResponseBodyDataItems[];
  maxResults?: number;
  nextToken?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountID: 'AccountID',
      accountName: 'AccountName',
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
      items: { 'type': 'array', 'itemType': DescribeProductAmortizedCostByConsumePeriodResponseBodyDataItems },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceCoverageDetailResponseBodyDataItems extends $tea.Model {
  capacityUnit?: string;
  commodityCode?: string;
  commodityName?: string;
  coveragePercentage?: number;
  currency?: string;
  deductQuantity?: number;
  endTime?: string;
  instanceId?: string;
  instanceSpec?: string;
  paymentAmount?: number;
  productCode?: string;
  productName?: string;
  region?: string;
  regionNo?: string;
  startTime?: string;
  totalQuantity?: number;
  userId?: string;
  userName?: string;
  zone?: string;
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      capacityUnit: 'CapacityUnit',
      commodityCode: 'CommodityCode',
      commodityName: 'CommodityName',
      coveragePercentage: 'CoveragePercentage',
      currency: 'Currency',
      deductQuantity: 'DeductQuantity',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      instanceSpec: 'InstanceSpec',
      paymentAmount: 'PaymentAmount',
      productCode: 'ProductCode',
      productName: 'ProductName',
      region: 'Region',
      regionNo: 'RegionNo',
      startTime: 'StartTime',
      totalQuantity: 'TotalQuantity',
      userId: 'UserId',
      userName: 'UserName',
      zone: 'Zone',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityUnit: 'string',
      commodityCode: 'string',
      commodityName: 'string',
      coveragePercentage: 'number',
      currency: 'string',
      deductQuantity: 'number',
      endTime: 'string',
      instanceId: 'string',
      instanceSpec: 'string',
      paymentAmount: 'number',
      productCode: 'string',
      productName: 'string',
      region: 'string',
      regionNo: 'string',
      startTime: 'string',
      totalQuantity: 'number',
      userId: 'string',
      userName: 'string',
      zone: 'string',
      zoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceCoverageDetailResponseBodyData extends $tea.Model {
  items?: DescribeResourceCoverageDetailResponseBodyDataItems[];
  maxResults?: number;
  nextToken?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeResourceCoverageDetailResponseBodyDataItems },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
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
  coveragePercentage?: number;
  deductQuantity?: number;
  totalQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      capacityUnit: 'CapacityUnit',
      coveragePercentage: 'CoveragePercentage',
      deductQuantity: 'DeductQuantity',
      totalQuantity: 'TotalQuantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityUnit: 'string',
      coveragePercentage: 'number',
      deductQuantity: 'number',
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
  capacityUnit?: string;
  currency?: string;
  deductQuantity?: number;
  endTime?: string;
  imageType?: string;
  instanceSpec?: string;
  postpaidCost?: string;
  potentialSavedCost?: string;
  quantity?: number;
  region?: string;
  regionNo?: string;
  reservationCost?: string;
  resourceInstanceId?: string;
  savedCost?: string;
  startTime?: string;
  status?: string;
  statusName?: string;
  totalQuantity?: number;
  usagePercentage?: number;
  userId?: string;
  userName?: string;
  zone?: string;
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      capacityUnit: 'CapacityUnit',
      currency: 'Currency',
      deductQuantity: 'DeductQuantity',
      endTime: 'EndTime',
      imageType: 'ImageType',
      instanceSpec: 'InstanceSpec',
      postpaidCost: 'PostpaidCost',
      potentialSavedCost: 'PotentialSavedCost',
      quantity: 'Quantity',
      region: 'Region',
      regionNo: 'RegionNo',
      reservationCost: 'ReservationCost',
      resourceInstanceId: 'ResourceInstanceId',
      savedCost: 'SavedCost',
      startTime: 'StartTime',
      status: 'Status',
      statusName: 'StatusName',
      totalQuantity: 'TotalQuantity',
      usagePercentage: 'UsagePercentage',
      userId: 'UserId',
      userName: 'UserName',
      zone: 'Zone',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityUnit: 'string',
      currency: 'string',
      deductQuantity: 'number',
      endTime: 'string',
      imageType: 'string',
      instanceSpec: 'string',
      postpaidCost: 'string',
      potentialSavedCost: 'string',
      quantity: 'number',
      region: 'string',
      regionNo: 'string',
      reservationCost: 'string',
      resourceInstanceId: 'string',
      savedCost: 'string',
      startTime: 'string',
      status: 'string',
      statusName: 'string',
      totalQuantity: 'number',
      usagePercentage: 'number',
      userId: 'string',
      userName: 'string',
      zone: 'string',
      zoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageDetailResponseBodyData extends $tea.Model {
  items?: DescribeResourceUsageDetailResponseBodyDataItems[];
  maxResults?: number;
  nextToken?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeResourceUsageDetailResponseBodyDataItems },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageTotalResponseBodyDataPeriodCoverage extends $tea.Model {
  period?: string;
  usagePercentage?: number;
  static names(): { [key: string]: string } {
    return {
      period: 'Period',
      usagePercentage: 'UsagePercentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      period: 'string',
      usagePercentage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceUsageTotalResponseBodyDataTotalUsage extends $tea.Model {
  postpaidCost?: number;
  potentialSavedCost?: number;
  reservationCost?: number;
  savedCost?: number;
  usagePercentage?: number;
  static names(): { [key: string]: string } {
    return {
      postpaidCost: 'PostpaidCost',
      potentialSavedCost: 'PotentialSavedCost',
      reservationCost: 'ReservationCost',
      savedCost: 'SavedCost',
      usagePercentage: 'UsagePercentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      postpaidCost: 'number',
      potentialSavedCost: 'number',
      reservationCost: 'number',
      savedCost: 'number',
      usagePercentage: 'number',
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
  coveragePercentage?: number;
  currency?: string;
  deductAmount?: number;
  endPeriod?: string;
  instanceId?: string;
  instanceSpec?: string;
  postpaidCost?: number;
  region?: string;
  startPeriod?: string;
  totalAmount?: number;
  userId?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      coveragePercentage: 'CoveragePercentage',
      currency: 'Currency',
      deductAmount: 'DeductAmount',
      endPeriod: 'EndPeriod',
      instanceId: 'InstanceId',
      instanceSpec: 'InstanceSpec',
      postpaidCost: 'PostpaidCost',
      region: 'Region',
      startPeriod: 'StartPeriod',
      totalAmount: 'TotalAmount',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coveragePercentage: 'number',
      currency: 'string',
      deductAmount: 'number',
      endPeriod: 'string',
      instanceId: 'string',
      instanceSpec: 'string',
      postpaidCost: 'number',
      region: 'string',
      startPeriod: 'string',
      totalAmount: 'number',
      userId: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansCoverageDetailResponseBodyData extends $tea.Model {
  items?: DescribeSavingsPlansCoverageDetailResponseBodyDataItems[];
  nextToken?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeSavingsPlansCoverageDetailResponseBodyDataItems },
      nextToken: 'string',
      totalCount: 'number',
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
  currency?: string;
  deductValue?: number;
  endPeriod?: string;
  instanceId?: string;
  poolValue?: number;
  postpaidCost?: number;
  savedCost?: number;
  startPeriod?: string;
  status?: string;
  type?: string;
  usagePercentage?: number;
  userId?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      deductValue: 'DeductValue',
      endPeriod: 'EndPeriod',
      instanceId: 'InstanceId',
      poolValue: 'PoolValue',
      postpaidCost: 'PostpaidCost',
      savedCost: 'SavedCost',
      startPeriod: 'StartPeriod',
      status: 'Status',
      type: 'Type',
      usagePercentage: 'UsagePercentage',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      deductValue: 'number',
      endPeriod: 'string',
      instanceId: 'string',
      poolValue: 'number',
      postpaidCost: 'number',
      savedCost: 'number',
      startPeriod: 'string',
      status: 'string',
      type: 'string',
      usagePercentage: 'number',
      userId: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSavingsPlansUsageDetailResponseBodyData extends $tea.Model {
  items?: DescribeSavingsPlansUsageDetailResponseBodyDataItems[];
  nextToken?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeSavingsPlansUsageDetailResponseBodyDataItems },
      nextToken: 'string',
      totalCount: 'number',
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
  poolValue?: number;
  postpaidCost?: number;
  savedCost?: number;
  usagePercentage?: number;
  static names(): { [key: string]: string } {
    return {
      poolValue: 'PoolValue',
      postpaidCost: 'PostpaidCost',
      savedCost: 'SavedCost',
      usagePercentage: 'UsagePercentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolValue: 'number',
      postpaidCost: 'number',
      savedCost: 'number',
      usagePercentage: 'number',
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
  adjustAmount?: number;
  billAccountID?: string;
  billAccountName?: string;
  billingDate?: string;
  billingItem?: string;
  billingItemCode?: string;
  billingType?: string;
  bizType?: string;
  cashAmount?: number;
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
  itemName?: string;
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
  splitAccountID?: string;
  splitAccountName?: string;
  splitBillingCycle?: string;
  splitBillingDate?: string;
  splitCommodityCode?: string;
  splitItemID?: string;
  splitItemName?: string;
  splitProductDetail?: string;
  subscriptionType?: string;
  tag?: string;
  usage?: string;
  usageUnit?: string;
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      adjustAmount: 'AdjustAmount',
      billAccountID: 'BillAccountID',
      billAccountName: 'BillAccountName',
      billingDate: 'BillingDate',
      billingItem: 'BillingItem',
      billingItemCode: 'BillingItemCode',
      billingType: 'BillingType',
      bizType: 'BizType',
      cashAmount: 'CashAmount',
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
      itemName: 'ItemName',
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
      splitAccountID: 'SplitAccountID',
      splitAccountName: 'SplitAccountName',
      splitBillingCycle: 'SplitBillingCycle',
      splitBillingDate: 'SplitBillingDate',
      splitCommodityCode: 'SplitCommodityCode',
      splitItemID: 'SplitItemID',
      splitItemName: 'SplitItemName',
      splitProductDetail: 'SplitProductDetail',
      subscriptionType: 'SubscriptionType',
      tag: 'Tag',
      usage: 'Usage',
      usageUnit: 'UsageUnit',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustAmount: 'number',
      billAccountID: 'string',
      billAccountName: 'string',
      billingDate: 'string',
      billingItem: 'string',
      billingItemCode: 'string',
      billingType: 'string',
      bizType: 'string',
      cashAmount: 'number',
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
      itemName: 'string',
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
      splitAccountID: 'string',
      splitAccountName: 'string',
      splitBillingCycle: 'string',
      splitBillingDate: 'string',
      splitCommodityCode: 'string',
      splitItemID: 'string',
      splitItemName: 'string',
      splitProductDetail: 'string',
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

export class DescribeSplitItemBillResponseBodyData extends $tea.Model {
  accountID?: string;
  accountName?: string;
  billingCycle?: string;
  items?: DescribeSplitItemBillResponseBodyDataItems[];
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
      items: { 'type': 'array', 'itemType': DescribeSplitItemBillResponseBodyDataItems },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
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

export class GetAccountRelationResponseBodyData extends $tea.Model {
  childUserId?: number;
  endTime?: number;
  gmtModified?: number;
  id?: number;
  parentUserId?: number;
  startTime?: number;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      childUserId: 'ChildUserId',
      endTime: 'EndTime',
      gmtModified: 'GmtModified',
      id: 'Id',
      parentUserId: 'ParentUserId',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childUserId: 'number',
      endTime: 'number',
      gmtModified: 'number',
      id: 'number',
      parentUserId: 'number',
      startTime: 'number',
      status: 'string',
      type: 'string',
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
  commodityCode?: string;
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
      commodityCode: 'CommodityCode',
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
      commodityCode: 'string',
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

export class InquiryPriceRefundInstanceResponseBodyData extends $tea.Model {
  currency?: string;
  hostId?: string;
  instanceId?: string;
  refundAmount?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      hostId: 'HostId',
      instanceId: 'InstanceId',
      refundAmount: 'RefundAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      hostId: 'string',
      instanceId: 'string',
      refundAmount: 'number',
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
  adjustAmount?: number;
  billAccountID?: string;
  billAccountName?: string;
  billingDate?: string;
  bizType?: string;
  cashAmount?: number;
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
      adjustAmount: 'AdjustAmount',
      billAccountID: 'BillAccountID',
      billAccountName: 'BillAccountName',
      billingDate: 'BillingDate',
      bizType: 'BizType',
      cashAmount: 'CashAmount',
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
      adjustAmount: 'number',
      billAccountID: 'string',
      billAccountName: 'string',
      billingDate: 'string',
      bizType: 'string',
      cashAmount: 'number',
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
  adjustAmount?: number;
  afterTaxAmount?: number;
  cashAmount?: number;
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
      adjustAmount: 'AdjustAmount',
      afterTaxAmount: 'AfterTaxAmount',
      cashAmount: 'CashAmount',
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
      adjustAmount: 'number',
      afterTaxAmount: 'number',
      cashAmount: 'number',
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
  adjustAmount?: number;
  afterTaxAmount?: number;
  billAccountID?: string;
  billAccountName?: string;
  bizType?: string;
  cashAmount?: number;
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
      adjustAmount: 'AdjustAmount',
      afterTaxAmount: 'AfterTaxAmount',
      billAccountID: 'BillAccountID',
      billAccountName: 'BillAccountName',
      bizType: 'BizType',
      cashAmount: 'CashAmount',
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
      adjustAmount: 'number',
      afterTaxAmount: 'number',
      billAccountID: 'string',
      billAccountName: 'string',
      bizType: 'string',
      cashAmount: 'number',
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
  bucketPath?: string;
  rowLimitPerFile?: number;
  subscribeBucket?: string;
  subscribeLanguage?: string;
  subscribeTime?: string;
  subscribeType?: string;
  static names(): { [key: string]: string } {
    return {
      bucketOwnerId: 'BucketOwnerId',
      bucketPath: 'BucketPath',
      rowLimitPerFile: 'RowLimitPerFile',
      subscribeBucket: 'SubscribeBucket',
      subscribeLanguage: 'SubscribeLanguage',
      subscribeTime: 'SubscribeTime',
      subscribeType: 'SubscribeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketOwnerId: 'number',
      bucketPath: 'string',
      rowLimitPerFile: 'number',
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

export class QueryCommodityListResponseBodyDataCommodityList extends $tea.Model {
  chargeType?: string;
  commodityCode?: string;
  commodityName?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      commodityCode: 'CommodityCode',
      commodityName: 'CommodityName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      commodityName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCommodityListResponseBodyData extends $tea.Model {
  commodityList?: QueryCommodityListResponseBodyDataCommodityList[];
  static names(): { [key: string]: string } {
    return {
      commodityList: 'CommodityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityList: { 'type': 'array', 'itemType': QueryCommodityListResponseBodyDataCommodityList },
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
  deductDate?: string;
  deductFactorTotal?: number;
  deductHours?: number;
  deductMeasure?: number;
  deductQuantity?: number;
  deductedCommodityCode?: string;
  deductedInstanceId?: string;
  deductedProductDetail?: string;
  instanceId?: string;
  instanceSpec?: string;
  region?: string;
  resCode?: string;
  shareUid?: number;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      deductDate: 'DeductDate',
      deductFactorTotal: 'DeductFactorTotal',
      deductHours: 'DeductHours',
      deductMeasure: 'DeductMeasure',
      deductQuantity: 'DeductQuantity',
      deductedCommodityCode: 'DeductedCommodityCode',
      deductedInstanceId: 'DeductedInstanceId',
      deductedProductDetail: 'DeductedProductDetail',
      instanceId: 'InstanceId',
      instanceSpec: 'InstanceSpec',
      region: 'Region',
      resCode: 'ResCode',
      shareUid: 'ShareUid',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deductDate: 'string',
      deductFactorTotal: 'number',
      deductHours: 'number',
      deductMeasure: 'number',
      deductQuantity: 'number',
      deductedCommodityCode: 'string',
      deductedInstanceId: 'string',
      deductedProductDetail: 'string',
      instanceId: 'string',
      instanceSpec: 'string',
      region: 'string',
      resCode: 'string',
      shareUid: 'number',
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
  detailList?: QueryDPUtilizationDetailResponseBodyDataDetailList;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      detailList: 'DetailList',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailList: QueryDPUtilizationDetailResponseBodyDataDetailList,
      nextToken: 'string',
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
  accountType?: string;
  isFinancialAccount?: boolean;
  memberGroupId?: number;
  memberGroupName?: string;
  memberNickName?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      isFinancialAccount: 'IsFinancialAccount',
      memberGroupId: 'MemberGroupId',
      memberGroupName: 'MemberGroupName',
      memberNickName: 'MemberNickName',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      isFinancialAccount: 'boolean',
      memberGroupId: 'number',
      memberGroupName: 'string',
      memberNickName: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceBillResponseBodyDataItemsItem extends $tea.Model {
  adjustAmount?: number;
  billingDate?: string;
  billingItem?: string;
  billingType?: string;
  cashAmount?: number;
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
      adjustAmount: 'AdjustAmount',
      billingDate: 'BillingDate',
      billingItem: 'BillingItem',
      billingType: 'BillingType',
      cashAmount: 'CashAmount',
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
      adjustAmount: 'number',
      billingDate: 'string',
      billingItem: 'string',
      billingType: 'string',
      cashAmount: 'number',
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

export class QueryOrdersResponseBodyDataOrderListOrder extends $tea.Model {
  afterTaxAmount?: string;
  commodityCode?: string;
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
      commodityCode: 'CommodityCode',
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
      commodityCode: 'string',
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
  permissionCode?: string;
  permissionName?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      permissionCode: 'PermissionCode',
      permissionName: 'PermissionName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      permissionCode: 'string',
      permissionName: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPermissionListResponseBodyData extends $tea.Model {
  endTime?: string;
  masterId?: number;
  memberId?: number;
  permissionList?: QueryPermissionListResponseBodyDataPermissionList[];
  relationType?: string;
  setupTime?: string;
  startTime?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      masterId: 'MasterId',
      memberId: 'MemberId',
      permissionList: 'PermissionList',
      relationType: 'RelationType',
      setupTime: 'SetupTime',
      startTime: 'StartTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      masterId: 'number',
      memberId: 'number',
      permissionList: { 'type': 'array', 'itemType': QueryPermissionListResponseBodyDataPermissionList },
      relationType: 'string',
      setupTime: 'string',
      startTime: 'string',
      state: 'string',
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

export class QueryPriceEntityListResponseBodyDataPriceEntityInfoListPriceFactorList extends $tea.Model {
  priceFactorCode?: string;
  priceFactorName?: string;
  priceFactorValueList?: string[];
  static names(): { [key: string]: string } {
    return {
      priceFactorCode: 'PriceFactorCode',
      priceFactorName: 'PriceFactorName',
      priceFactorValueList: 'PriceFactorValueList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceFactorCode: 'string',
      priceFactorName: 'string',
      priceFactorValueList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPriceEntityListResponseBodyDataPriceEntityInfoList extends $tea.Model {
  priceEntityCode?: string;
  priceEntityName?: string;
  priceFactorList?: QueryPriceEntityListResponseBodyDataPriceEntityInfoListPriceFactorList[];
  static names(): { [key: string]: string } {
    return {
      priceEntityCode: 'PriceEntityCode',
      priceEntityName: 'PriceEntityName',
      priceFactorList: 'PriceFactorList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceEntityCode: 'string',
      priceEntityName: 'string',
      priceFactorList: { 'type': 'array', 'itemType': QueryPriceEntityListResponseBodyDataPriceEntityInfoListPriceFactorList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPriceEntityListResponseBodyData extends $tea.Model {
  priceEntityInfoList?: QueryPriceEntityListResponseBodyDataPriceEntityInfoList[];
  static names(): { [key: string]: string } {
    return {
      priceEntityInfoList: 'PriceEntityInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceEntityInfoList: { 'type': 'array', 'itemType': QueryPriceEntityListResponseBodyDataPriceEntityInfoList },
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
  accountId?: number;
  accountName?: string;
  accountNickName?: string;
  accountType?: string;
  endTime?: string;
  relationId?: number;
  relationType?: string;
  setupTime?: string;
  startTime?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      accountNickName: 'AccountNickName',
      accountType: 'AccountType',
      endTime: 'EndTime',
      relationId: 'RelationId',
      relationType: 'RelationType',
      setupTime: 'SetupTime',
      startTime: 'StartTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      accountName: 'string',
      accountNickName: 'string',
      accountType: 'string',
      endTime: 'string',
      relationId: 'number',
      relationType: 'string',
      setupTime: 'string',
      startTime: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRelationListResponseBodyData extends $tea.Model {
  financialRelationInfoList?: QueryRelationListResponseBodyDataFinancialRelationInfoList[];
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      financialRelationInfoList: 'FinancialRelationInfoList',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      financialRelationInfoList: { 'type': 'array', 'itemType': QueryRelationListResponseBodyDataFinancialRelationInfoList },
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResellerUserAlarmThresholdResponseBodyData extends $tea.Model {
  denominator?: number;
  numerator?: number;
  thresholdAmount?: string;
  thresholdType?: number;
  static names(): { [key: string]: string } {
    return {
      denominator: 'Denominator',
      numerator: 'Numerator',
      thresholdAmount: 'ThresholdAmount',
      thresholdType: 'ThresholdType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      denominator: 'number',
      numerator: 'number',
      thresholdAmount: 'string',
      thresholdType: 'number',
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
  applicableProducts?: QueryResourcePackageInstancesResponseBodyDataInstancesInstanceApplicableProducts;
  commodityCode?: string;
  deductType?: string;
  effectiveTime?: string;
  expiryTime?: string;
  instanceId?: string;
  packageType?: string;
  region?: string;
  remainingAmount?: string;
  remainingAmountUnit?: string;
  remark?: string;
  status?: string;
  totalAmount?: string;
  totalAmountUnit?: string;
  static names(): { [key: string]: string } {
    return {
      applicableProducts: 'ApplicableProducts',
      commodityCode: 'CommodityCode',
      deductType: 'DeductType',
      effectiveTime: 'EffectiveTime',
      expiryTime: 'ExpiryTime',
      instanceId: 'InstanceId',
      packageType: 'PackageType',
      region: 'Region',
      remainingAmount: 'RemainingAmount',
      remainingAmountUnit: 'RemainingAmountUnit',
      remark: 'Remark',
      status: 'Status',
      totalAmount: 'TotalAmount',
      totalAmountUnit: 'TotalAmountUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicableProducts: QueryResourcePackageInstancesResponseBodyDataInstancesInstanceApplicableProducts,
      commodityCode: 'string',
      deductType: 'string',
      effectiveTime: 'string',
      expiryTime: 'string',
      instanceId: 'string',
      packageType: 'string',
      region: 'string',
      remainingAmount: 'string',
      remainingAmountUnit: 'string',
      remark: 'string',
      status: 'string',
      totalAmount: 'string',
      totalAmountUnit: 'string',
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
  instances?: QueryResourcePackageInstancesResponseBodyDataInstances;
  pageNum?: string;
  pageSize?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      instances: 'Instances',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      instances: QueryResourcePackageInstancesResponseBodyDataInstances,
      pageNum: 'string',
      pageSize: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansDeductLogResponseBodyDataItems extends $tea.Model {
  billModule?: string;
  deductCommodity?: string;
  deductFee?: string;
  deductInstanceId?: string;
  deductRate?: string;
  discountRate?: string;
  endTime?: string;
  instanceId?: string;
  ownerId?: number;
  savingsType?: string;
  startTime?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      billModule: 'BillModule',
      deductCommodity: 'DeductCommodity',
      deductFee: 'DeductFee',
      deductInstanceId: 'DeductInstanceId',
      deductRate: 'DeductRate',
      discountRate: 'DiscountRate',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      savingsType: 'SavingsType',
      startTime: 'StartTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billModule: 'string',
      deductCommodity: 'string',
      deductFee: 'string',
      deductInstanceId: 'string',
      deductRate: 'string',
      discountRate: 'string',
      endTime: 'string',
      instanceId: 'string',
      ownerId: 'number',
      savingsType: 'string',
      startTime: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansDeductLogResponseBodyData extends $tea.Model {
  items?: QuerySavingsPlansDeductLogResponseBodyDataItems[];
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': QuerySavingsPlansDeductLogResponseBodyDataItems },
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansDiscountResponseBodyDataItems extends $tea.Model {
  commodityName?: string;
  contractDiscountRate?: string;
  cycle?: string;
  discountRate?: string;
  moduleName?: string;
  payMode?: string;
  region?: string;
  spec?: string;
  spnType?: string;
  static names(): { [key: string]: string } {
    return {
      commodityName: 'CommodityName',
      contractDiscountRate: 'ContractDiscountRate',
      cycle: 'Cycle',
      discountRate: 'DiscountRate',
      moduleName: 'ModuleName',
      payMode: 'PayMode',
      region: 'Region',
      spec: 'Spec',
      spnType: 'SpnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityName: 'string',
      contractDiscountRate: 'string',
      cycle: 'string',
      discountRate: 'string',
      moduleName: 'string',
      payMode: 'string',
      region: 'string',
      spec: 'string',
      spnType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansDiscountResponseBodyData extends $tea.Model {
  hostId?: string;
  items?: QuerySavingsPlansDiscountResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      items: { 'type': 'array', 'itemType': QuerySavingsPlansDiscountResponseBodyDataItems },
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
  allocationStatus?: string;
  currency?: string;
  cycle?: string;
  deductCycleType?: string;
  endTime?: string;
  endTimestamp?: number;
  instanceFamily?: string;
  instanceId?: string;
  lastBillTotalUsage?: string;
  lastBillUtilization?: string;
  payMode?: string;
  poolValue?: string;
  prepayFee?: string;
  region?: string;
  restPoolValue?: string;
  savingsType?: string;
  startTime?: string;
  startTimestamp?: number;
  status?: string;
  tags?: QuerySavingsPlansInstanceResponseBodyDataItemsTags[];
  totalSave?: string;
  utilization?: string;
  static names(): { [key: string]: string } {
    return {
      allocationStatus: 'AllocationStatus',
      currency: 'Currency',
      cycle: 'Cycle',
      deductCycleType: 'DeductCycleType',
      endTime: 'EndTime',
      endTimestamp: 'EndTimestamp',
      instanceFamily: 'InstanceFamily',
      instanceId: 'InstanceId',
      lastBillTotalUsage: 'LastBillTotalUsage',
      lastBillUtilization: 'LastBillUtilization',
      payMode: 'PayMode',
      poolValue: 'PoolValue',
      prepayFee: 'PrepayFee',
      region: 'Region',
      restPoolValue: 'RestPoolValue',
      savingsType: 'SavingsType',
      startTime: 'StartTime',
      startTimestamp: 'StartTimestamp',
      status: 'Status',
      tags: 'Tags',
      totalSave: 'TotalSave',
      utilization: 'Utilization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationStatus: 'string',
      currency: 'string',
      cycle: 'string',
      deductCycleType: 'string',
      endTime: 'string',
      endTimestamp: 'number',
      instanceFamily: 'string',
      instanceId: 'string',
      lastBillTotalUsage: 'string',
      lastBillUtilization: 'string',
      payMode: 'string',
      poolValue: 'string',
      prepayFee: 'string',
      region: 'string',
      restPoolValue: 'string',
      savingsType: 'string',
      startTime: 'string',
      startTimestamp: 'number',
      status: 'string',
      tags: { 'type': 'array', 'itemType': QuerySavingsPlansInstanceResponseBodyDataItemsTags },
      totalSave: 'string',
      utilization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansInstanceResponseBodyData extends $tea.Model {
  items?: QuerySavingsPlansInstanceResponseBodyDataItems[];
  pageNum?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': QuerySavingsPlansInstanceResponseBodyDataItems },
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySettleBillResponseBodyDataItemsItem extends $tea.Model {
  adjustAmount?: number;
  afterTaxAmount?: number;
  billAccountID?: string;
  billAccountName?: string;
  bizType?: string;
  cashAmount?: number;
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
      adjustAmount: 'AdjustAmount',
      afterTaxAmount: 'AfterTaxAmount',
      billAccountID: 'BillAccountID',
      billAccountName: 'BillAccountName',
      bizType: 'BizType',
      cashAmount: 'CashAmount',
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
      adjustAmount: 'number',
      afterTaxAmount: 'number',
      billAccountID: 'string',
      billAccountName: 'string',
      bizType: 'string',
      cashAmount: 'number',
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

export class QuerySkuPriceListResponseBodyDataSkuPricePageSkuPriceListCskuPriceListRangeList extends $tea.Model {
  factorCode?: string;
  max?: string;
  min?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      factorCode: 'FactorCode',
      max: 'Max',
      min: 'Min',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      factorCode: 'string',
      max: 'string',
      min: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySkuPriceListResponseBodyDataSkuPricePageSkuPriceListCskuPriceList extends $tea.Model {
  cskuCode?: string;
  currency?: string;
  price?: string;
  priceMode?: string;
  priceType?: string;
  priceUnit?: string;
  rangeList?: QuerySkuPriceListResponseBodyDataSkuPricePageSkuPriceListCskuPriceListRangeList[];
  usageUnit?: string;
  static names(): { [key: string]: string } {
    return {
      cskuCode: 'CskuCode',
      currency: 'Currency',
      price: 'Price',
      priceMode: 'PriceMode',
      priceType: 'PriceType',
      priceUnit: 'PriceUnit',
      rangeList: 'RangeList',
      usageUnit: 'UsageUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cskuCode: 'string',
      currency: 'string',
      price: 'string',
      priceMode: 'string',
      priceType: 'string',
      priceUnit: 'string',
      rangeList: { 'type': 'array', 'itemType': QuerySkuPriceListResponseBodyDataSkuPricePageSkuPriceListCskuPriceListRangeList },
      usageUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySkuPriceListResponseBodyDataSkuPricePageSkuPriceList extends $tea.Model {
  cskuPriceList?: QuerySkuPriceListResponseBodyDataSkuPricePageSkuPriceListCskuPriceList[];
  skuCode?: string;
  skuFactorMap?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      cskuPriceList: 'CskuPriceList',
      skuCode: 'SkuCode',
      skuFactorMap: 'SkuFactorMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cskuPriceList: { 'type': 'array', 'itemType': QuerySkuPriceListResponseBodyDataSkuPricePageSkuPriceListCskuPriceList },
      skuCode: 'string',
      skuFactorMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySkuPriceListResponseBodyDataSkuPricePage extends $tea.Model {
  nextPageToken?: string;
  skuPriceList?: QuerySkuPriceListResponseBodyDataSkuPricePageSkuPriceList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'NextPageToken',
      skuPriceList: 'SkuPriceList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'string',
      skuPriceList: { 'type': 'array', 'itemType': QuerySkuPriceListResponseBodyDataSkuPricePageSkuPriceList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySkuPriceListResponseBodyData extends $tea.Model {
  skuPricePage?: QuerySkuPriceListResponseBodyDataSkuPricePage;
  static names(): { [key: string]: string } {
    return {
      skuPricePage: 'SkuPricePage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skuPricePage: QuerySkuPriceListResponseBodyDataSkuPricePage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySplitItemBillResponseBodyDataItemsItem extends $tea.Model {
  adjustAmount?: number;
  billingDate?: string;
  billingItem?: string;
  billingType?: string;
  cashAmount?: number;
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
  splitAccountID?: string;
  splitAccountName?: string;
  splitBillingCycle?: string;
  splitCommodityCode?: string;
  splitItemID?: string;
  splitItemName?: string;
  splitProductDetail?: string;
  subscriptionType?: string;
  tag?: string;
  usage?: string;
  usageUnit?: string;
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      adjustAmount: 'AdjustAmount',
      billingDate: 'BillingDate',
      billingItem: 'BillingItem',
      billingType: 'BillingType',
      cashAmount: 'CashAmount',
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
      splitAccountID: 'SplitAccountID',
      splitAccountName: 'SplitAccountName',
      splitBillingCycle: 'SplitBillingCycle',
      splitCommodityCode: 'SplitCommodityCode',
      splitItemID: 'SplitItemID',
      splitItemName: 'SplitItemName',
      splitProductDetail: 'SplitProductDetail',
      subscriptionType: 'SubscriptionType',
      tag: 'Tag',
      usage: 'Usage',
      usageUnit: 'UsageUnit',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustAmount: 'number',
      billingDate: 'string',
      billingItem: 'string',
      billingType: 'string',
      cashAmount: 'number',
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
      splitAccountID: 'string',
      splitAccountName: 'string',
      splitBillingCycle: 'string',
      splitCommodityCode: 'string',
      splitItemID: 'string',
      splitItemName: 'string',
      splitProductDetail: 'string',
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

export class RefundInstanceResponseBodyData extends $tea.Model {
  hostId?: string;
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceResponseBodyData extends $tea.Model {
  hostId?: string;
  releaseResult?: boolean;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      releaseResult: 'ReleaseResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      releaseResult: 'boolean',
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
      'cn-hangzhou': "business.aliyuncs.com",
      'cn-shanghai': "business.aliyuncs.com",
      'ap-southeast-1': "business.ap-southeast-1.aliyuncs.com",
      'ap-northeast-1': "business.ap-southeast-1.aliyuncs.com",
      'ap-northeast-2': "business.ap-southeast-1.aliyuncs.com",
      'ap-northeast-2-pop': "business.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "business.ap-southeast-1.aliyuncs.com",
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
      'cn-huhehaote-nebula-1': "business.aliyuncs.com",
      'cn-north-2-gov-1': "business.aliyuncs.com",
      'cn-qingdao': "business.aliyuncs.com",
      'cn-qingdao-nebula': "business.aliyuncs.com",
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
      'cn-wulanchabu': "business.aliyuncs.com",
      'cn-yushanfang': "business.aliyuncs.com",
      'cn-zhangbei': "business.aliyuncs.com",
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

  /**
    * 1\\. For more information about a financial relationship, see [Financial relationships](https://help.aliyun.com/document_detail/100376.html?spm=a2c4g.11186623.6.563.52a83908ypl4yE) or [Financial relationships](https://www.alibabacloud.com/help/en/doc-detail/116383.html). 2. If enterprise names used by the management account and a member for real-name verification are the same, you do not need to call an API operation for confirmation. Otherwise, you must call the ConfirmRelation operation for confirmation.
    *
    * @param request AddAccountRelationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AddAccountRelationResponse
   */
  async addAccountRelationWithOptions(request: AddAccountRelationRequest, runtime: $Util.RuntimeOptions): Promise<AddAccountRelationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.childNick)) {
      query["ChildNick"] = request.childNick;
    }

    if (!Util.isUnset(request.childUserId)) {
      query["ChildUserId"] = request.childUserId;
    }

    if (!Util.isUnset(request.parentUserId)) {
      query["ParentUserId"] = request.parentUserId;
    }

    if (!Util.isUnset(request.permissionCodes)) {
      query["PermissionCodes"] = request.permissionCodes;
    }

    if (!Util.isUnset(request.relationType)) {
      query["RelationType"] = request.relationType;
    }

    if (!Util.isUnset(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    if (!Util.isUnset(request.roleCodes)) {
      query["RoleCodes"] = request.roleCodes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddAccountRelation",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddAccountRelationResponse>(await this.callApi(params, req, runtime), new AddAccountRelationResponse({}));
  }

  /**
    * 1\\. For more information about a financial relationship, see [Financial relationships](https://help.aliyun.com/document_detail/100376.html?spm=a2c4g.11186623.6.563.52a83908ypl4yE) or [Financial relationships](https://www.alibabacloud.com/help/en/doc-detail/116383.html). 2. If enterprise names used by the management account and a member for real-name verification are the same, you do not need to call an API operation for confirmation. Otherwise, you must call the ConfirmRelation operation for confirmation.
    *
    * @param request AddAccountRelationRequest
    * @return AddAccountRelationResponse
   */
  async addAccountRelation(request: AddAccountRelationRequest): Promise<AddAccountRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addAccountRelationWithOptions(request, runtime);
  }

  async allocateCostUnitResourceWithOptions(request: AllocateCostUnitResourceRequest, runtime: $Util.RuntimeOptions): Promise<AllocateCostUnitResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fromUnitId)) {
      query["FromUnitId"] = request.fromUnitId;
    }

    if (!Util.isUnset(request.fromUnitUserId)) {
      query["FromUnitUserId"] = request.fromUnitUserId;
    }

    if (!Util.isUnset(request.resourceInstanceList)) {
      query["ResourceInstanceList"] = request.resourceInstanceList;
    }

    if (!Util.isUnset(request.toUnitId)) {
      query["ToUnitId"] = request.toUnitId;
    }

    if (!Util.isUnset(request.toUnitUserId)) {
      query["ToUnitUserId"] = request.toUnitUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AllocateCostUnitResource",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AllocateCostUnitResourceResponse>(await this.callApi(params, req, runtime), new AllocateCostUnitResourceResponse({}));
  }

  async allocateCostUnitResource(request: AllocateCostUnitResourceRequest): Promise<AllocateCostUnitResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocateCostUnitResourceWithOptions(request, runtime);
  }

  async applyInvoiceWithOptions(request: ApplyInvoiceRequest, runtime: $Util.RuntimeOptions): Promise<ApplyInvoiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addressId)) {
      query["AddressId"] = request.addressId;
    }

    if (!Util.isUnset(request.applyUserNick)) {
      query["ApplyUserNick"] = request.applyUserNick;
    }

    if (!Util.isUnset(request.customerId)) {
      query["CustomerId"] = request.customerId;
    }

    if (!Util.isUnset(request.invoiceAmount)) {
      query["InvoiceAmount"] = request.invoiceAmount;
    }

    if (!Util.isUnset(request.invoiceByAmount)) {
      query["InvoiceByAmount"] = request.invoiceByAmount;
    }

    if (!Util.isUnset(request.invoicingType)) {
      query["InvoicingType"] = request.invoicingType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.processWay)) {
      query["ProcessWay"] = request.processWay;
    }

    if (!Util.isUnset(request.selectedIds)) {
      query["SelectedIds"] = request.selectedIds;
    }

    if (!Util.isUnset(request.userRemark)) {
      query["UserRemark"] = request.userRemark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApplyInvoice",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyInvoiceResponse>(await this.callApi(params, req, runtime), new ApplyInvoiceResponse({}));
  }

  async applyInvoice(request: ApplyInvoiceRequest): Promise<ApplyInvoiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyInvoiceWithOptions(request, runtime);
  }

  async cancelOrderWithOptions(request: CancelOrderRequest, runtime: $Util.RuntimeOptions): Promise<CancelOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelOrder",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelOrderResponse>(await this.callApi(params, req, runtime), new CancelOrderResponse({}));
  }

  async cancelOrder(request: CancelOrderRequest): Promise<CancelOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelOrderWithOptions(request, runtime);
  }

  async changeResellerConsumeAmountWithOptions(request: ChangeResellerConsumeAmountRequest, runtime: $Util.RuntimeOptions): Promise<ChangeResellerConsumeAmountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adjustType)) {
      query["AdjustType"] = request.adjustType;
    }

    if (!Util.isUnset(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!Util.isUnset(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!Util.isUnset(request.currency)) {
      query["Currency"] = request.currency;
    }

    if (!Util.isUnset(request.extendMap)) {
      query["ExtendMap"] = request.extendMap;
    }

    if (!Util.isUnset(request.outBizId)) {
      query["OutBizId"] = request.outBizId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeResellerConsumeAmount",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeResellerConsumeAmountResponse>(await this.callApi(params, req, runtime), new ChangeResellerConsumeAmountResponse({}));
  }

  async changeResellerConsumeAmount(request: ChangeResellerConsumeAmountRequest): Promise<ChangeResellerConsumeAmountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeResellerConsumeAmountWithOptions(request, runtime);
  }

  /**
    * 1\\. A member needs to confirm an invitation only if a financial management relationship is established between the management account and the member and enterprise names used by the management account and the member for real-name verification are different. 2. The permissions to be confirmed must be the same as those granted to the member when the management account initiates the invitation.
    *
    * @param request ConfirmRelationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ConfirmRelationResponse
   */
  async confirmRelationWithOptions(request: ConfirmRelationRequest, runtime: $Util.RuntimeOptions): Promise<ConfirmRelationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.childUserId)) {
      query["ChildUserId"] = request.childUserId;
    }

    if (!Util.isUnset(request.confirmCode)) {
      query["ConfirmCode"] = request.confirmCode;
    }

    if (!Util.isUnset(request.parentUserId)) {
      query["ParentUserId"] = request.parentUserId;
    }

    if (!Util.isUnset(request.permissionCodes)) {
      query["PermissionCodes"] = request.permissionCodes;
    }

    if (!Util.isUnset(request.relationId)) {
      query["RelationId"] = request.relationId;
    }

    if (!Util.isUnset(request.relationType)) {
      query["RelationType"] = request.relationType;
    }

    if (!Util.isUnset(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfirmRelation",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfirmRelationResponse>(await this.callApi(params, req, runtime), new ConfirmRelationResponse({}));
  }

  /**
    * 1\\. A member needs to confirm an invitation only if a financial management relationship is established between the management account and the member and enterprise names used by the management account and the member for real-name verification are different. 2. The permissions to be confirmed must be the same as those granted to the member when the management account initiates the invitation.
    *
    * @param request ConfirmRelationRequest
    * @return ConfirmRelationResponse
   */
  async confirmRelation(request: ConfirmRelationRequest): Promise<ConfirmRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.confirmRelationWithOptions(request, runtime);
  }

  async convertChargeTypeWithOptions(request: ConvertChargeTypeRequest, runtime: $Util.RuntimeOptions): Promise<ConvertChargeTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConvertChargeType",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConvertChargeTypeResponse>(await this.callApi(params, req, runtime), new ConvertChargeTypeResponse({}));
  }

  async convertChargeType(request: ConvertChargeTypeRequest): Promise<ConvertChargeTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.convertChargeTypeWithOptions(request, runtime);
  }

  /**
    * You can call this operation to create an account so as to establish a master-member financial relationship.
    *
    * @param request CreateAgAccountRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateAgAccountResponse
   */
  async createAgAccountWithOptions(request: CreateAgAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateAgAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountAttr)) {
      query["AccountAttr"] = request.accountAttr;
    }

    if (!Util.isUnset(request.cityName)) {
      query["CityName"] = request.cityName;
    }

    if (!Util.isUnset(request.enterpriseName)) {
      query["EnterpriseName"] = request.enterpriseName;
    }

    if (!Util.isUnset(request.firstName)) {
      query["FirstName"] = request.firstName;
    }

    if (!Util.isUnset(request.lastName)) {
      query["LastName"] = request.lastName;
    }

    if (!Util.isUnset(request.loginEmail)) {
      query["LoginEmail"] = request.loginEmail;
    }

    if (!Util.isUnset(request.nationCode)) {
      query["NationCode"] = request.nationCode;
    }

    if (!Util.isUnset(request.postcode)) {
      query["Postcode"] = request.postcode;
    }

    if (!Util.isUnset(request.provinceName)) {
      query["ProvinceName"] = request.provinceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAgAccount",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAgAccountResponse>(await this.callApi(params, req, runtime), new CreateAgAccountResponse({}));
  }

  /**
    * You can call this operation to create an account so as to establish a master-member financial relationship.
    *
    * @param request CreateAgAccountRequest
    * @return CreateAgAccountResponse
   */
  async createAgAccount(request: CreateAgAccountRequest): Promise<CreateAgAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAgAccountWithOptions(request, runtime);
  }

  async createCostUnitWithOptions(request: CreateCostUnitRequest, runtime: $Util.RuntimeOptions): Promise<CreateCostUnitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.unitEntityList)) {
      query["UnitEntityList"] = request.unitEntityList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCostUnit",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCostUnitResponse>(await this.callApi(params, req, runtime), new CreateCostUnitResponse({}));
  }

  async createCostUnit(request: CreateCostUnitRequest): Promise<CreateCostUnitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCostUnitWithOptions(request, runtime);
  }

  async createInstanceWithOptions(request: CreateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.logistics)) {
      query["Logistics"] = request.logistics;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.parameter)) {
      query["Parameter"] = request.parameter;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.renewPeriod)) {
      query["RenewPeriod"] = request.renewPeriod;
    }

    if (!Util.isUnset(request.renewalStatus)) {
      query["RenewalStatus"] = request.renewalStatus;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstance",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceResponse>(await this.callApi(params, req, runtime), new CreateInstanceResponse({}));
  }

  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  async createResellerUserQuotaWithOptions(request: CreateResellerUserQuotaRequest, runtime: $Util.RuntimeOptions): Promise<CreateResellerUserQuotaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!Util.isUnset(request.currency)) {
      query["Currency"] = request.currency;
    }

    if (!Util.isUnset(request.outBizId)) {
      query["OutBizId"] = request.outBizId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateResellerUserQuota",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateResellerUserQuotaResponse>(await this.callApi(params, req, runtime), new CreateResellerUserQuotaResponse({}));
  }

  async createResellerUserQuota(request: CreateResellerUserQuotaRequest): Promise<CreateResellerUserQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createResellerUserQuotaWithOptions(request, runtime);
  }

  async createResourcePackageWithOptions(request: CreateResourcePackageRequest, runtime: $Util.RuntimeOptions): Promise<CreateResourcePackageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.effectiveDate)) {
      query["EffectiveDate"] = request.effectiveDate;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.packageType)) {
      query["PackageType"] = request.packageType;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.specification)) {
      query["Specification"] = request.specification;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateResourcePackage",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateResourcePackageResponse>(await this.callApi(params, req, runtime), new CreateResourcePackageResponse({}));
  }

  async createResourcePackage(request: CreateResourcePackageRequest): Promise<CreateResourcePackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createResourcePackageWithOptions(request, runtime);
  }

  async createSavingsPlansInstanceWithOptions(tmpReq: CreateSavingsPlansInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateSavingsPlansInstanceResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateSavingsPlansInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extendMap)) {
      request.extendMapShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extendMap, "ExtendMap", "json");
    }

    let query = { };
    if (!Util.isUnset(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.effectiveDate)) {
      query["EffectiveDate"] = request.effectiveDate;
    }

    if (!Util.isUnset(request.extendMapShrink)) {
      query["ExtendMap"] = request.extendMapShrink;
    }

    if (!Util.isUnset(request.payMode)) {
      query["PayMode"] = request.payMode;
    }

    if (!Util.isUnset(request.poolValue)) {
      query["PoolValue"] = request.poolValue;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.specType)) {
      query["SpecType"] = request.specType;
    }

    if (!Util.isUnset(request.specification)) {
      query["Specification"] = request.specification;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSavingsPlansInstance",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSavingsPlansInstanceResponse>(await this.callApi(params, req, runtime), new CreateSavingsPlansInstanceResponse({}));
  }

  async createSavingsPlansInstance(request: CreateSavingsPlansInstanceRequest): Promise<CreateSavingsPlansInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSavingsPlansInstanceWithOptions(request, runtime);
  }

  async deleteCostUnitWithOptions(request: DeleteCostUnitRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCostUnitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerUid)) {
      query["OwnerUid"] = request.ownerUid;
    }

    if (!Util.isUnset(request.unitId)) {
      query["UnitId"] = request.unitId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCostUnit",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCostUnitResponse>(await this.callApi(params, req, runtime), new DeleteCostUnitResponse({}));
  }

  async deleteCostUnit(request: DeleteCostUnitRequest): Promise<DeleteCostUnitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCostUnitWithOptions(request, runtime);
  }

  /**
    * This operation is in beta testing and is only available for specific users in the whitelist. Excessive calls may result in performance issues. For example, the response times out.
    *
    * @param request DescribeCostBudgetsSummaryRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCostBudgetsSummaryResponse
   */
  async describeCostBudgetsSummaryWithOptions(request: DescribeCostBudgetsSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCostBudgetsSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.budgetName)) {
      query["BudgetName"] = request.budgetName;
    }

    if (!Util.isUnset(request.budgetStatus)) {
      query["BudgetStatus"] = request.budgetStatus;
    }

    if (!Util.isUnset(request.budgetType)) {
      query["BudgetType"] = request.budgetType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCostBudgetsSummary",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCostBudgetsSummaryResponse>(await this.callApi(params, req, runtime), new DescribeCostBudgetsSummaryResponse({}));
  }

  /**
    * This operation is in beta testing and is only available for specific users in the whitelist. Excessive calls may result in performance issues. For example, the response times out.
    *
    * @param request DescribeCostBudgetsSummaryRequest
    * @return DescribeCostBudgetsSummaryResponse
   */
  async describeCostBudgetsSummary(request: DescribeCostBudgetsSummaryRequest): Promise<DescribeCostBudgetsSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCostBudgetsSummaryWithOptions(request, runtime);
  }

  /**
    * You can view and export the allocated costs of the current month after 10:00 on the fourth day of the next month. The allocated costs of a single allocation month may involve orders or bills in different billing cycles. If a historical allocated amount is incorrect, the historical allocated costs need to be adjusted. As a result, the allocated costs displayed for a single allocation month may be different at different time points.
    *
    * @param request DescribeInstanceAmortizedCostByAmortizationPeriodRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeInstanceAmortizedCostByAmortizationPeriodResponse
   */
  async describeInstanceAmortizedCostByAmortizationPeriodWithOptions(request: DescribeInstanceAmortizedCostByAmortizationPeriodRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceAmortizedCostByAmortizationPeriodResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.billOwnerIdList)) {
      body["BillOwnerIdList"] = request.billOwnerIdList;
    }

    if (!Util.isUnset(request.billUserIdList)) {
      body["BillUserIdList"] = request.billUserIdList;
    }

    if (!Util.isUnset(request.billingCycle)) {
      body["BillingCycle"] = request.billingCycle;
    }

    if (!Util.isUnset(request.consumePeriodFilter)) {
      body["ConsumePeriodFilter"] = request.consumePeriodFilter;
    }

    if (!Util.isUnset(request.costUnitCode)) {
      body["CostUnitCode"] = request.costUnitCode;
    }

    if (!Util.isUnset(request.instanceIdList)) {
      body["InstanceIdList"] = request.instanceIdList;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productDetail)) {
      body["ProductDetail"] = request.productDetail;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      body["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceAmortizedCostByAmortizationPeriod",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceAmortizedCostByAmortizationPeriodResponse>(await this.callApi(params, req, runtime), new DescribeInstanceAmortizedCostByAmortizationPeriodResponse({}));
  }

  /**
    * You can view and export the allocated costs of the current month after 10:00 on the fourth day of the next month. The allocated costs of a single allocation month may involve orders or bills in different billing cycles. If a historical allocated amount is incorrect, the historical allocated costs need to be adjusted. As a result, the allocated costs displayed for a single allocation month may be different at different time points.
    *
    * @param request DescribeInstanceAmortizedCostByAmortizationPeriodRequest
    * @return DescribeInstanceAmortizedCostByAmortizationPeriodResponse
   */
  async describeInstanceAmortizedCostByAmortizationPeriod(request: DescribeInstanceAmortizedCostByAmortizationPeriodRequest): Promise<DescribeInstanceAmortizedCostByAmortizationPeriodResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceAmortizedCostByAmortizationPeriodWithOptions(request, runtime);
  }

  async describeInstanceAmortizedCostByAmortizationPeriodDateWithOptions(request: DescribeInstanceAmortizedCostByAmortizationPeriodDateRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceAmortizedCostByAmortizationPeriodDateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.amortizationDateEnd)) {
      body["AmortizationDateEnd"] = request.amortizationDateEnd;
    }

    if (!Util.isUnset(request.amortizationDateStart)) {
      body["AmortizationDateStart"] = request.amortizationDateStart;
    }

    if (!Util.isUnset(request.billOwnerIdList)) {
      body["BillOwnerIdList"] = request.billOwnerIdList;
    }

    if (!Util.isUnset(request.billUserIdList)) {
      body["BillUserIdList"] = request.billUserIdList;
    }

    if (!Util.isUnset(request.billingCycle)) {
      body["BillingCycle"] = request.billingCycle;
    }

    if (!Util.isUnset(request.costUnitCode)) {
      body["CostUnitCode"] = request.costUnitCode;
    }

    if (!Util.isUnset(request.instanceIdList)) {
      body["InstanceIdList"] = request.instanceIdList;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productDetail)) {
      body["ProductDetail"] = request.productDetail;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      body["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceAmortizedCostByAmortizationPeriodDate",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceAmortizedCostByAmortizationPeriodDateResponse>(await this.callApi(params, req, runtime), new DescribeInstanceAmortizedCostByAmortizationPeriodDateResponse({}));
  }

  async describeInstanceAmortizedCostByAmortizationPeriodDate(request: DescribeInstanceAmortizedCostByAmortizationPeriodDateRequest): Promise<DescribeInstanceAmortizedCostByAmortizationPeriodDateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceAmortizedCostByAmortizationPeriodDateWithOptions(request, runtime);
  }

  async describeInstanceAmortizedCostByConsumePeriodWithOptions(request: DescribeInstanceAmortizedCostByConsumePeriodRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceAmortizedCostByConsumePeriodResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.amortizationPeriodFilter)) {
      body["AmortizationPeriodFilter"] = request.amortizationPeriodFilter;
    }

    if (!Util.isUnset(request.billOwnerIdList)) {
      body["BillOwnerIdList"] = request.billOwnerIdList;
    }

    if (!Util.isUnset(request.billUserIdList)) {
      body["BillUserIdList"] = request.billUserIdList;
    }

    if (!Util.isUnset(request.billingCycle)) {
      body["BillingCycle"] = request.billingCycle;
    }

    if (!Util.isUnset(request.costUnitCode)) {
      body["CostUnitCode"] = request.costUnitCode;
    }

    if (!Util.isUnset(request.instanceIdList)) {
      body["InstanceIdList"] = request.instanceIdList;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productDetail)) {
      body["ProductDetail"] = request.productDetail;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      body["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceAmortizedCostByConsumePeriod",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceAmortizedCostByConsumePeriodResponse>(await this.callApi(params, req, runtime), new DescribeInstanceAmortizedCostByConsumePeriodResponse({}));
  }

  async describeInstanceAmortizedCostByConsumePeriod(request: DescribeInstanceAmortizedCostByConsumePeriodRequest): Promise<DescribeInstanceAmortizedCostByConsumePeriodResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceAmortizedCostByConsumePeriodWithOptions(request, runtime);
  }

  /**
    * *   Instance bills are generated after the total bill is split. In most cases, the instance bills do not include data generated on the last day of the specified billing cycle.
    * *   The instance information may change during the billing cycle. The instance configurations and types in monthly bills are subject to the point in time when you query bills. For more information, see the corresponding bill details.
    * *   You can query data generated after June 2020 for Cloud Communications services. You can query data generated after November 2020 for Alibaba Cloud Domains.
    *
    * @param request DescribeInstanceBillRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeInstanceBillResponse
   */
  async describeInstanceBillWithOptions(request: DescribeInstanceBillRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceBillResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!Util.isUnset(request.billingCycle)) {
      query["BillingCycle"] = request.billingCycle;
    }

    if (!Util.isUnset(request.billingDate)) {
      query["BillingDate"] = request.billingDate;
    }

    if (!Util.isUnset(request.granularity)) {
      query["Granularity"] = request.granularity;
    }

    if (!Util.isUnset(request.instanceID)) {
      query["InstanceID"] = request.instanceID;
    }

    if (!Util.isUnset(request.isBillingItem)) {
      query["IsBillingItem"] = request.isBillingItem;
    }

    if (!Util.isUnset(request.isHideZeroCharge)) {
      query["IsHideZeroCharge"] = request.isHideZeroCharge;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceBill",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceBillResponse>(await this.callApi(params, req, runtime), new DescribeInstanceBillResponse({}));
  }

  /**
    * *   Instance bills are generated after the total bill is split. In most cases, the instance bills do not include data generated on the last day of the specified billing cycle.
    * *   The instance information may change during the billing cycle. The instance configurations and types in monthly bills are subject to the point in time when you query bills. For more information, see the corresponding bill details.
    * *   You can query data generated after June 2020 for Cloud Communications services. You can query data generated after November 2020 for Alibaba Cloud Domains.
    *
    * @param request DescribeInstanceBillRequest
    * @return DescribeInstanceBillResponse
   */
  async describeInstanceBill(request: DescribeInstanceBillRequest): Promise<DescribeInstanceBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceBillWithOptions(request, runtime);
  }

  async describePricingModuleWithOptions(request: DescribePricingModuleRequest, runtime: $Util.RuntimeOptions): Promise<DescribePricingModuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePricingModule",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePricingModuleResponse>(await this.callApi(params, req, runtime), new DescribePricingModuleResponse({}));
  }

  async describePricingModule(request: DescribePricingModuleRequest): Promise<DescribePricingModuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePricingModuleWithOptions(request, runtime);
  }

  /**
    * You can view and export the allocated costs of the current month after 10:00 on the fourth day of the next month. The allocated costs of a single allocation month may involve orders or bills in different billing cycles. If a historical allocated amount is incorrect, the historical allocated costs need to be adjusted. As a result, the allocated costs displayed for a single allocation month may be different at different time points.
    *
    * @param request DescribeProductAmortizedCostByAmortizationPeriodRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeProductAmortizedCostByAmortizationPeriodResponse
   */
  async describeProductAmortizedCostByAmortizationPeriodWithOptions(request: DescribeProductAmortizedCostByAmortizationPeriodRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProductAmortizedCostByAmortizationPeriodResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.billOwnerIdList)) {
      body["BillOwnerIdList"] = request.billOwnerIdList;
    }

    if (!Util.isUnset(request.billUserIdList)) {
      body["BillUserIdList"] = request.billUserIdList;
    }

    if (!Util.isUnset(request.billingCycle)) {
      body["BillingCycle"] = request.billingCycle;
    }

    if (!Util.isUnset(request.consumePeriodFilter)) {
      body["ConsumePeriodFilter"] = request.consumePeriodFilter;
    }

    if (!Util.isUnset(request.costUnitCode)) {
      body["CostUnitCode"] = request.costUnitCode;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productDetail)) {
      body["ProductDetail"] = request.productDetail;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      body["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProductAmortizedCostByAmortizationPeriod",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProductAmortizedCostByAmortizationPeriodResponse>(await this.callApi(params, req, runtime), new DescribeProductAmortizedCostByAmortizationPeriodResponse({}));
  }

  /**
    * You can view and export the allocated costs of the current month after 10:00 on the fourth day of the next month. The allocated costs of a single allocation month may involve orders or bills in different billing cycles. If a historical allocated amount is incorrect, the historical allocated costs need to be adjusted. As a result, the allocated costs displayed for a single allocation month may be different at different time points.
    *
    * @param request DescribeProductAmortizedCostByAmortizationPeriodRequest
    * @return DescribeProductAmortizedCostByAmortizationPeriodResponse
   */
  async describeProductAmortizedCostByAmortizationPeriod(request: DescribeProductAmortizedCostByAmortizationPeriodRequest): Promise<DescribeProductAmortizedCostByAmortizationPeriodResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProductAmortizedCostByAmortizationPeriodWithOptions(request, runtime);
  }

  async describeProductAmortizedCostByConsumePeriodWithOptions(request: DescribeProductAmortizedCostByConsumePeriodRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProductAmortizedCostByConsumePeriodResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.amortizationPeriodFilter)) {
      body["AmortizationPeriodFilter"] = request.amortizationPeriodFilter;
    }

    if (!Util.isUnset(request.billOwnerIdList)) {
      body["BillOwnerIdList"] = request.billOwnerIdList;
    }

    if (!Util.isUnset(request.billUserIdList)) {
      body["BillUserIdList"] = request.billUserIdList;
    }

    if (!Util.isUnset(request.billingCycle)) {
      body["BillingCycle"] = request.billingCycle;
    }

    if (!Util.isUnset(request.costUnitCode)) {
      body["CostUnitCode"] = request.costUnitCode;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productDetail)) {
      body["ProductDetail"] = request.productDetail;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      body["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProductAmortizedCostByConsumePeriod",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProductAmortizedCostByConsumePeriodResponse>(await this.callApi(params, req, runtime), new DescribeProductAmortizedCostByConsumePeriodResponse({}));
  }

  async describeProductAmortizedCostByConsumePeriod(request: DescribeProductAmortizedCostByConsumePeriodRequest): Promise<DescribeProductAmortizedCostByConsumePeriodResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProductAmortizedCostByConsumePeriodWithOptions(request, runtime);
  }

  /**
    * The amount of the resources deducted from a deduction plan.
    *
    * @param request DescribeResourceCoverageDetailRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeResourceCoverageDetailResponse
   */
  async describeResourceCoverageDetailWithOptions(request: DescribeResourceCoverageDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourceCoverageDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!Util.isUnset(request.endPeriod)) {
      query["EndPeriod"] = request.endPeriod;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.periodType)) {
      query["PeriodType"] = request.periodType;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.startPeriod)) {
      query["StartPeriod"] = request.startPeriod;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResourceCoverageDetail",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResourceCoverageDetailResponse>(await this.callApi(params, req, runtime), new DescribeResourceCoverageDetailResponse({}));
  }

  /**
    * The amount of the resources deducted from a deduction plan.
    *
    * @param request DescribeResourceCoverageDetailRequest
    * @return DescribeResourceCoverageDetailResponse
   */
  async describeResourceCoverageDetail(request: DescribeResourceCoverageDetailRequest): Promise<DescribeResourceCoverageDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourceCoverageDetailWithOptions(request, runtime);
  }

  /**
    * Indicates whether the operation was successful.
    *
    * @param request DescribeResourceCoverageTotalRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeResourceCoverageTotalResponse
   */
  async describeResourceCoverageTotalWithOptions(request: DescribeResourceCoverageTotalRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourceCoverageTotalResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!Util.isUnset(request.endPeriod)) {
      query["EndPeriod"] = request.endPeriod;
    }

    if (!Util.isUnset(request.periodType)) {
      query["PeriodType"] = request.periodType;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.startPeriod)) {
      query["StartPeriod"] = request.startPeriod;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResourceCoverageTotal",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResourceCoverageTotalResponse>(await this.callApi(params, req, runtime), new DescribeResourceCoverageTotalResponse({}));
  }

  /**
    * Indicates whether the operation was successful.
    *
    * @param request DescribeResourceCoverageTotalRequest
    * @return DescribeResourceCoverageTotalResponse
   */
  async describeResourceCoverageTotal(request: DescribeResourceCoverageTotalRequest): Promise<DescribeResourceCoverageTotalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourceCoverageTotalWithOptions(request, runtime);
  }

  async describeResourcePackageProductWithOptions(request: DescribeResourcePackageProductRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourcePackageProductResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResourcePackageProduct",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResourcePackageProductResponse>(await this.callApi(params, req, runtime), new DescribeResourcePackageProductResponse({}));
  }

  async describeResourcePackageProduct(request: DescribeResourcePackageProductRequest): Promise<DescribeResourcePackageProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourcePackageProductWithOptions(request, runtime);
  }

  async describeResourceUsageDetailWithOptions(request: DescribeResourceUsageDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourceUsageDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!Util.isUnset(request.endPeriod)) {
      query["EndPeriod"] = request.endPeriod;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.periodType)) {
      query["PeriodType"] = request.periodType;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.startPeriod)) {
      query["StartPeriod"] = request.startPeriod;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResourceUsageDetail",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResourceUsageDetailResponse>(await this.callApi(params, req, runtime), new DescribeResourceUsageDetailResponse({}));
  }

  async describeResourceUsageDetail(request: DescribeResourceUsageDetailRequest): Promise<DescribeResourceUsageDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourceUsageDetailWithOptions(request, runtime);
  }

  async describeResourceUsageTotalWithOptions(request: DescribeResourceUsageTotalRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourceUsageTotalResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!Util.isUnset(request.endPeriod)) {
      query["EndPeriod"] = request.endPeriod;
    }

    if (!Util.isUnset(request.periodType)) {
      query["PeriodType"] = request.periodType;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.startPeriod)) {
      query["StartPeriod"] = request.startPeriod;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResourceUsageTotal",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResourceUsageTotalResponse>(await this.callApi(params, req, runtime), new DescribeResourceUsageTotalResponse({}));
  }

  async describeResourceUsageTotal(request: DescribeResourceUsageTotalRequest): Promise<DescribeResourceUsageTotalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourceUsageTotalWithOptions(request, runtime);
  }

  async describeSavingsPlansCoverageDetailWithOptions(request: DescribeSavingsPlansCoverageDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSavingsPlansCoverageDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!Util.isUnset(request.endPeriod)) {
      query["EndPeriod"] = request.endPeriod;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.periodType)) {
      query["PeriodType"] = request.periodType;
    }

    if (!Util.isUnset(request.startPeriod)) {
      query["StartPeriod"] = request.startPeriod;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSavingsPlansCoverageDetail",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSavingsPlansCoverageDetailResponse>(await this.callApi(params, req, runtime), new DescribeSavingsPlansCoverageDetailResponse({}));
  }

  async describeSavingsPlansCoverageDetail(request: DescribeSavingsPlansCoverageDetailRequest): Promise<DescribeSavingsPlansCoverageDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSavingsPlansCoverageDetailWithOptions(request, runtime);
  }

  async describeSavingsPlansCoverageTotalWithOptions(request: DescribeSavingsPlansCoverageTotalRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSavingsPlansCoverageTotalResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!Util.isUnset(request.endPeriod)) {
      query["EndPeriod"] = request.endPeriod;
    }

    if (!Util.isUnset(request.periodType)) {
      query["PeriodType"] = request.periodType;
    }

    if (!Util.isUnset(request.startPeriod)) {
      query["StartPeriod"] = request.startPeriod;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSavingsPlansCoverageTotal",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSavingsPlansCoverageTotalResponse>(await this.callApi(params, req, runtime), new DescribeSavingsPlansCoverageTotalResponse({}));
  }

  async describeSavingsPlansCoverageTotal(request: DescribeSavingsPlansCoverageTotalRequest): Promise<DescribeSavingsPlansCoverageTotalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSavingsPlansCoverageTotalWithOptions(request, runtime);
  }

  async describeSavingsPlansUsageDetailWithOptions(request: DescribeSavingsPlansUsageDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSavingsPlansUsageDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!Util.isUnset(request.endPeriod)) {
      query["EndPeriod"] = request.endPeriod;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.periodType)) {
      query["PeriodType"] = request.periodType;
    }

    if (!Util.isUnset(request.startPeriod)) {
      query["StartPeriod"] = request.startPeriod;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSavingsPlansUsageDetail",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSavingsPlansUsageDetailResponse>(await this.callApi(params, req, runtime), new DescribeSavingsPlansUsageDetailResponse({}));
  }

  async describeSavingsPlansUsageDetail(request: DescribeSavingsPlansUsageDetailRequest): Promise<DescribeSavingsPlansUsageDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSavingsPlansUsageDetailWithOptions(request, runtime);
  }

  async describeSavingsPlansUsageTotalWithOptions(request: DescribeSavingsPlansUsageTotalRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSavingsPlansUsageTotalResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!Util.isUnset(request.endPeriod)) {
      query["EndPeriod"] = request.endPeriod;
    }

    if (!Util.isUnset(request.periodType)) {
      query["PeriodType"] = request.periodType;
    }

    if (!Util.isUnset(request.startPeriod)) {
      query["StartPeriod"] = request.startPeriod;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSavingsPlansUsageTotal",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSavingsPlansUsageTotalResponse>(await this.callApi(params, req, runtime), new DescribeSavingsPlansUsageTotalResponse({}));
  }

  async describeSavingsPlansUsageTotal(request: DescribeSavingsPlansUsageTotalRequest): Promise<DescribeSavingsPlansUsageTotalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSavingsPlansUsageTotalWithOptions(request, runtime);
  }

  /**
    * The code of the service.
    *
    * @param request DescribeSplitItemBillRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeSplitItemBillResponse
   */
  async describeSplitItemBillWithOptions(request: DescribeSplitItemBillRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSplitItemBillResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!Util.isUnset(request.billingCycle)) {
      query["BillingCycle"] = request.billingCycle;
    }

    if (!Util.isUnset(request.billingDate)) {
      query["BillingDate"] = request.billingDate;
    }

    if (!Util.isUnset(request.granularity)) {
      query["Granularity"] = request.granularity;
    }

    if (!Util.isUnset(request.instanceID)) {
      query["InstanceID"] = request.instanceID;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.splitItemID)) {
      query["SplitItemID"] = request.splitItemID;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    if (!Util.isUnset(request.tagFilter)) {
      query["TagFilter"] = request.tagFilter;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSplitItemBill",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSplitItemBillResponse>(await this.callApi(params, req, runtime), new DescribeSplitItemBillResponse({}));
  }

  /**
    * The code of the service.
    *
    * @param request DescribeSplitItemBillRequest
    * @return DescribeSplitItemBillResponse
   */
  async describeSplitItemBill(request: DescribeSplitItemBillRequest): Promise<DescribeSplitItemBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSplitItemBillWithOptions(request, runtime);
  }

  async enableBillGenerationWithOptions(request: EnableBillGenerationRequest, runtime: $Util.RuntimeOptions): Promise<EnableBillGenerationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableBillGeneration",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableBillGenerationResponse>(await this.callApi(params, req, runtime), new EnableBillGenerationResponse({}));
  }

  async enableBillGeneration(request: EnableBillGenerationRequest): Promise<EnableBillGenerationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableBillGenerationWithOptions(request, runtime);
  }

  async getAccountRelationWithOptions(request: GetAccountRelationRequest, runtime: $Util.RuntimeOptions): Promise<GetAccountRelationResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAccountRelation",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAccountRelationResponse>(await this.callApi(params, req, runtime), new GetAccountRelationResponse({}));
  }

  async getAccountRelation(request: GetAccountRelationRequest): Promise<GetAccountRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccountRelationWithOptions(request, runtime);
  }

  async getCustomerAccountInfoWithOptions(request: GetCustomerAccountInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetCustomerAccountInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCustomerAccountInfo",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCustomerAccountInfoResponse>(await this.callApi(params, req, runtime), new GetCustomerAccountInfoResponse({}));
  }

  async getCustomerAccountInfo(request: GetCustomerAccountInfoRequest): Promise<GetCustomerAccountInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCustomerAccountInfoWithOptions(request, runtime);
  }

  /**
    * The ID of the customer.
    *
    * @param request GetCustomerListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetCustomerListResponse
   */
  async getCustomerListWithOptions(runtime: $Util.RuntimeOptions): Promise<GetCustomerListResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetCustomerList",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCustomerListResponse>(await this.callApi(params, req, runtime), new GetCustomerListResponse({}));
  }

  /**
    * The ID of the customer.
    *
    * @return GetCustomerListResponse
   */
  async getCustomerList(): Promise<GetCustomerListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCustomerListWithOptions(runtime);
  }

  async getOrderDetailWithOptions(request: GetOrderDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetOrderDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOrderDetail",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOrderDetailResponse>(await this.callApi(params, req, runtime), new GetOrderDetailResponse({}));
  }

  async getOrderDetail(request: GetOrderDetailRequest): Promise<GetOrderDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOrderDetailWithOptions(request, runtime);
  }

  /**
    * ### Usage notes
    * 1.  Call the QueryProductList operation to obtain the code of the service. For more information, see [QueryProductList](~~95984~~).
    * 2.  Call the DescribePricingModule operation to obtain the configuration parameters of the service. For more information, see [DescribePricingModule](~~96469~~).
    * 3.  Call the GetPayAsYouGoPrice operation to obtain the pay-as-you-go price of the service based on the returned configuration parameters.
    *
    * @param request GetPayAsYouGoPriceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetPayAsYouGoPriceResponse
   */
  async getPayAsYouGoPriceWithOptions(request: GetPayAsYouGoPriceRequest, runtime: $Util.RuntimeOptions): Promise<GetPayAsYouGoPriceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.moduleList)) {
      query["ModuleList"] = request.moduleList;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPayAsYouGoPrice",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPayAsYouGoPriceResponse>(await this.callApi(params, req, runtime), new GetPayAsYouGoPriceResponse({}));
  }

  /**
    * ### Usage notes
    * 1.  Call the QueryProductList operation to obtain the code of the service. For more information, see [QueryProductList](~~95984~~).
    * 2.  Call the DescribePricingModule operation to obtain the configuration parameters of the service. For more information, see [DescribePricingModule](~~96469~~).
    * 3.  Call the GetPayAsYouGoPrice operation to obtain the pay-as-you-go price of the service based on the returned configuration parameters.
    *
    * @param request GetPayAsYouGoPriceRequest
    * @return GetPayAsYouGoPriceResponse
   */
  async getPayAsYouGoPrice(request: GetPayAsYouGoPriceRequest): Promise<GetPayAsYouGoPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPayAsYouGoPriceWithOptions(request, runtime);
  }

  async getResourcePackagePriceWithOptions(request: GetResourcePackagePriceRequest, runtime: $Util.RuntimeOptions): Promise<GetResourcePackagePriceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.effectiveDate)) {
      query["EffectiveDate"] = request.effectiveDate;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.packageType)) {
      query["PackageType"] = request.packageType;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.specification)) {
      query["Specification"] = request.specification;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResourcePackagePrice",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResourcePackagePriceResponse>(await this.callApi(params, req, runtime), new GetResourcePackagePriceResponse({}));
  }

  async getResourcePackagePrice(request: GetResourcePackagePriceRequest): Promise<GetResourcePackagePriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourcePackagePriceWithOptions(request, runtime);
  }

  /**
    * 1.  Call the QueryProductList operation to obtain the code of the service. For more information, see [QueryProductList](~~95984~~).
    * 2.  Call the DescribePricingModule operation to obtain the configuration parameters of the service. For more information, see [DescribePricingModule](~~96469~~).
    * 3.  Call the GetSubscriptionPrice operation to obtain the pricing of the service based on the returned configuration parameters.
    *
    * @param request GetSubscriptionPriceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetSubscriptionPriceResponse
   */
  async getSubscriptionPriceWithOptions(request: GetSubscriptionPriceRequest, runtime: $Util.RuntimeOptions): Promise<GetSubscriptionPriceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.moduleList)) {
      query["ModuleList"] = request.moduleList;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.quantity)) {
      query["Quantity"] = request.quantity;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.servicePeriodQuantity)) {
      query["ServicePeriodQuantity"] = request.servicePeriodQuantity;
    }

    if (!Util.isUnset(request.servicePeriodUnit)) {
      query["ServicePeriodUnit"] = request.servicePeriodUnit;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSubscriptionPrice",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSubscriptionPriceResponse>(await this.callApi(params, req, runtime), new GetSubscriptionPriceResponse({}));
  }

  /**
    * 1.  Call the QueryProductList operation to obtain the code of the service. For more information, see [QueryProductList](~~95984~~).
    * 2.  Call the DescribePricingModule operation to obtain the configuration parameters of the service. For more information, see [DescribePricingModule](~~96469~~).
    * 3.  Call the GetSubscriptionPrice operation to obtain the pricing of the service based on the returned configuration parameters.
    *
    * @param request GetSubscriptionPriceRequest
    * @return GetSubscriptionPriceResponse
   */
  async getSubscriptionPrice(request: GetSubscriptionPriceRequest): Promise<GetSubscriptionPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSubscriptionPriceWithOptions(request, runtime);
  }

  /**
    * 1.  **Check the information about unsubscription and confirm the unsubscription terms and refundable amount. The resource that is unsubscribed cannot be restored.**
    * 2.  Refunds are applicable only for the actual paid amount. Vouchers used for the purchase are non-refundable.
    * 3.  For more information, see [Rules for unsubscribing from resources](https://help.aliyun.com/knowledge_detail/116043.html?spm=a2c81.e1d666e.app.2.62ae11271Kd6iM).
    *
    * @param request InquiryPriceRefundInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return InquiryPriceRefundInstanceResponse
   */
  async inquiryPriceRefundInstanceWithOptions(request: InquiryPriceRefundInstanceRequest, runtime: $Util.RuntimeOptions): Promise<InquiryPriceRefundInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InquiryPriceRefundInstance",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InquiryPriceRefundInstanceResponse>(await this.callApi(params, req, runtime), new InquiryPriceRefundInstanceResponse({}));
  }

  /**
    * 1.  **Check the information about unsubscription and confirm the unsubscription terms and refundable amount. The resource that is unsubscribed cannot be restored.**
    * 2.  Refunds are applicable only for the actual paid amount. Vouchers used for the purchase are non-refundable.
    * 3.  For more information, see [Rules for unsubscribing from resources](https://help.aliyun.com/knowledge_detail/116043.html?spm=a2c81.e1d666e.app.2.62ae11271Kd6iM).
    *
    * @param request InquiryPriceRefundInstanceRequest
    * @return InquiryPriceRefundInstanceResponse
   */
  async inquiryPriceRefundInstance(request: InquiryPriceRefundInstanceRequest): Promise<InquiryPriceRefundInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.inquiryPriceRefundInstanceWithOptions(request, runtime);
  }

  async modifyAccountRelationWithOptions(request: ModifyAccountRelationRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAccountRelationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.childNick)) {
      query["ChildNick"] = request.childNick;
    }

    if (!Util.isUnset(request.childUserId)) {
      query["ChildUserId"] = request.childUserId;
    }

    if (!Util.isUnset(request.parentUserId)) {
      query["ParentUserId"] = request.parentUserId;
    }

    if (!Util.isUnset(request.permissionCodes)) {
      query["PermissionCodes"] = request.permissionCodes;
    }

    if (!Util.isUnset(request.relationId)) {
      query["RelationId"] = request.relationId;
    }

    if (!Util.isUnset(request.relationOperation)) {
      query["RelationOperation"] = request.relationOperation;
    }

    if (!Util.isUnset(request.relationType)) {
      query["RelationType"] = request.relationType;
    }

    if (!Util.isUnset(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    if (!Util.isUnset(request.roleCodes)) {
      query["RoleCodes"] = request.roleCodes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAccountRelation",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAccountRelationResponse>(await this.callApi(params, req, runtime), new ModifyAccountRelationResponse({}));
  }

  async modifyAccountRelation(request: ModifyAccountRelationRequest): Promise<ModifyAccountRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountRelationWithOptions(request, runtime);
  }

  async modifyCostUnitWithOptions(request: ModifyCostUnitRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCostUnitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.unitEntityList)) {
      query["UnitEntityList"] = request.unitEntityList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyCostUnit",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyCostUnitResponse>(await this.callApi(params, req, runtime), new ModifyCostUnitResponse({}));
  }

  async modifyCostUnit(request: ModifyCostUnitRequest): Promise<ModifyCostUnitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCostUnitWithOptions(request, runtime);
  }

  async modifyInstanceWithOptions(request: ModifyInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.modifyType)) {
      query["ModifyType"] = request.modifyType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.parameter)) {
      query["Parameter"] = request.parameter;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyInstance",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyInstanceResponse>(await this.callApi(params, req, runtime), new ModifyInstanceResponse({}));
  }

  async modifyInstance(request: ModifyInstanceRequest): Promise<ModifyInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceWithOptions(request, runtime);
  }

  async queryAccountBalanceWithOptions(runtime: $Util.RuntimeOptions): Promise<QueryAccountBalanceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "QueryAccountBalance",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAccountBalanceResponse>(await this.callApi(params, req, runtime), new QueryAccountBalanceResponse({}));
  }

  async queryAccountBalance(): Promise<QueryAccountBalanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAccountBalanceWithOptions(runtime);
  }

  /**
    * ##
    * Before you call this operation, take note of the following items:
    * *   Account bills are summarized based on instance bills. In most cases, the account bills do not include the data generated on the last day of the specified period.
    * *   You can query the data generated in June 2020 or later for Cloud Communications services. However, the query results do not include the data of Alibaba Cloud Domains.
    *
    * @param request QueryAccountBillRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return QueryAccountBillResponse
   */
  async queryAccountBillWithOptions(request: QueryAccountBillRequest, runtime: $Util.RuntimeOptions): Promise<QueryAccountBillResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!Util.isUnset(request.billingCycle)) {
      query["BillingCycle"] = request.billingCycle;
    }

    if (!Util.isUnset(request.billingDate)) {
      query["BillingDate"] = request.billingDate;
    }

    if (!Util.isUnset(request.granularity)) {
      query["Granularity"] = request.granularity;
    }

    if (!Util.isUnset(request.isGroupByProduct)) {
      query["IsGroupByProduct"] = request.isGroupByProduct;
    }

    if (!Util.isUnset(request.ownerID)) {
      query["OwnerID"] = request.ownerID;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryAccountBill",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAccountBillResponse>(await this.callApi(params, req, runtime), new QueryAccountBillResponse({}));
  }

  /**
    * ##
    * Before you call this operation, take note of the following items:
    * *   Account bills are summarized based on instance bills. In most cases, the account bills do not include the data generated on the last day of the specified period.
    * *   You can query the data generated in June 2020 or later for Cloud Communications services. However, the query results do not include the data of Alibaba Cloud Domains.
    *
    * @param request QueryAccountBillRequest
    * @return QueryAccountBillResponse
   */
  async queryAccountBill(request: QueryAccountBillRequest): Promise<QueryAccountBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAccountBillWithOptions(request, runtime);
  }

  async queryAccountTransactionDetailsWithOptions(request: QueryAccountTransactionDetailsRequest, runtime: $Util.RuntimeOptions): Promise<QueryAccountTransactionDetailsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.createTimeEnd)) {
      query["CreateTimeEnd"] = request.createTimeEnd;
    }

    if (!Util.isUnset(request.createTimeStart)) {
      query["CreateTimeStart"] = request.createTimeStart;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.recordID)) {
      query["RecordID"] = request.recordID;
    }

    if (!Util.isUnset(request.transactionChannel)) {
      query["TransactionChannel"] = request.transactionChannel;
    }

    if (!Util.isUnset(request.transactionChannelSN)) {
      query["TransactionChannelSN"] = request.transactionChannelSN;
    }

    if (!Util.isUnset(request.transactionNumber)) {
      query["TransactionNumber"] = request.transactionNumber;
    }

    if (!Util.isUnset(request.transactionType)) {
      query["TransactionType"] = request.transactionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryAccountTransactionDetails",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAccountTransactionDetailsResponse>(await this.callApi(params, req, runtime), new QueryAccountTransactionDetailsResponse({}));
  }

  async queryAccountTransactionDetails(request: QueryAccountTransactionDetailsRequest): Promise<QueryAccountTransactionDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAccountTransactionDetailsWithOptions(request, runtime);
  }

  async queryAccountTransactionsWithOptions(request: QueryAccountTransactionsRequest, runtime: $Util.RuntimeOptions): Promise<QueryAccountTransactionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.createTimeEnd)) {
      query["CreateTimeEnd"] = request.createTimeEnd;
    }

    if (!Util.isUnset(request.createTimeStart)) {
      query["CreateTimeStart"] = request.createTimeStart;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.recordID)) {
      query["RecordID"] = request.recordID;
    }

    if (!Util.isUnset(request.transactionChannel)) {
      query["TransactionChannel"] = request.transactionChannel;
    }

    if (!Util.isUnset(request.transactionChannelSN)) {
      query["TransactionChannelSN"] = request.transactionChannelSN;
    }

    if (!Util.isUnset(request.transactionFlow)) {
      query["TransactionFlow"] = request.transactionFlow;
    }

    if (!Util.isUnset(request.transactionNumber)) {
      query["TransactionNumber"] = request.transactionNumber;
    }

    if (!Util.isUnset(request.transactionType)) {
      query["TransactionType"] = request.transactionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryAccountTransactions",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAccountTransactionsResponse>(await this.callApi(params, req, runtime), new QueryAccountTransactionsResponse({}));
  }

  async queryAccountTransactions(request: QueryAccountTransactionsRequest): Promise<QueryAccountTransactionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAccountTransactionsWithOptions(request, runtime);
  }

  async queryAvailableInstancesWithOptions(request: QueryAvailableInstancesRequest, runtime: $Util.RuntimeOptions): Promise<QueryAvailableInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.createTimeEnd)) {
      query["CreateTimeEnd"] = request.createTimeEnd;
    }

    if (!Util.isUnset(request.createTimeStart)) {
      query["CreateTimeStart"] = request.createTimeStart;
    }

    if (!Util.isUnset(request.endTimeEnd)) {
      query["EndTimeEnd"] = request.endTimeEnd;
    }

    if (!Util.isUnset(request.endTimeStart)) {
      query["EndTimeStart"] = request.endTimeStart;
    }

    if (!Util.isUnset(request.instanceIDs)) {
      query["InstanceIDs"] = request.instanceIDs;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.renewStatus)) {
      query["RenewStatus"] = request.renewStatus;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryAvailableInstances",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAvailableInstancesResponse>(await this.callApi(params, req, runtime), new QueryAvailableInstancesResponse({}));
  }

  async queryAvailableInstances(request: QueryAvailableInstancesRequest): Promise<QueryAvailableInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAvailableInstancesWithOptions(request, runtime);
  }

  async queryBillWithOptions(request: QueryBillRequest, runtime: $Util.RuntimeOptions): Promise<QueryBillResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!Util.isUnset(request.billingCycle)) {
      query["BillingCycle"] = request.billingCycle;
    }

    if (!Util.isUnset(request.isDisplayLocalCurrency)) {
      query["IsDisplayLocalCurrency"] = request.isDisplayLocalCurrency;
    }

    if (!Util.isUnset(request.isHideZeroCharge)) {
      query["IsHideZeroCharge"] = request.isHideZeroCharge;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryBill",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryBillResponse>(await this.callApi(params, req, runtime), new QueryBillResponse({}));
  }

  async queryBill(request: QueryBillRequest): Promise<QueryBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBillWithOptions(request, runtime);
  }

  async queryBillOverviewWithOptions(request: QueryBillOverviewRequest, runtime: $Util.RuntimeOptions): Promise<QueryBillOverviewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!Util.isUnset(request.billingCycle)) {
      query["BillingCycle"] = request.billingCycle;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryBillOverview",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryBillOverviewResponse>(await this.callApi(params, req, runtime), new QueryBillOverviewResponse({}));
  }

  async queryBillOverview(request: QueryBillOverviewRequest): Promise<QueryBillOverviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBillOverviewWithOptions(request, runtime);
  }

  async queryBillToOSSSubscriptionWithOptions(runtime: $Util.RuntimeOptions): Promise<QueryBillToOSSSubscriptionResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "QueryBillToOSSSubscription",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryBillToOSSSubscriptionResponse>(await this.callApi(params, req, runtime), new QueryBillToOSSSubscriptionResponse({}));
  }

  async queryBillToOSSSubscription(): Promise<QueryBillToOSSSubscriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBillToOSSSubscriptionWithOptions(runtime);
  }

  async queryCashCouponsWithOptions(request: QueryCashCouponsRequest, runtime: $Util.RuntimeOptions): Promise<QueryCashCouponsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.effectiveOrNot)) {
      query["EffectiveOrNot"] = request.effectiveOrNot;
    }

    if (!Util.isUnset(request.expiryTimeEnd)) {
      query["ExpiryTimeEnd"] = request.expiryTimeEnd;
    }

    if (!Util.isUnset(request.expiryTimeStart)) {
      query["ExpiryTimeStart"] = request.expiryTimeStart;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryCashCoupons",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryCashCouponsResponse>(await this.callApi(params, req, runtime), new QueryCashCouponsResponse({}));
  }

  async queryCashCoupons(request: QueryCashCouponsRequest): Promise<QueryCashCouponsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCashCouponsWithOptions(request, runtime);
  }

  /**
    * You can call this operation to query the information about a service based on the service code.
    *
    * @param request QueryCommodityListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return QueryCommodityListResponse
   */
  async queryCommodityListWithOptions(request: QueryCommodityListRequest, runtime: $Util.RuntimeOptions): Promise<QueryCommodityListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryCommodityList",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryCommodityListResponse>(await this.callApi(params, req, runtime), new QueryCommodityListResponse({}));
  }

  /**
    * You can call this operation to query the information about a service based on the service code.
    *
    * @param request QueryCommodityListRequest
    * @return QueryCommodityListResponse
   */
  async queryCommodityList(request: QueryCommodityListRequest): Promise<QueryCommodityListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCommodityListWithOptions(request, runtime);
  }

  async queryCostUnitWithOptions(request: QueryCostUnitRequest, runtime: $Util.RuntimeOptions): Promise<QueryCostUnitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerUid)) {
      query["OwnerUid"] = request.ownerUid;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.parentUnitId)) {
      query["ParentUnitId"] = request.parentUnitId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryCostUnit",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryCostUnitResponse>(await this.callApi(params, req, runtime), new QueryCostUnitResponse({}));
  }

  async queryCostUnit(request: QueryCostUnitRequest): Promise<QueryCostUnitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCostUnitWithOptions(request, runtime);
  }

  async queryCostUnitResourceWithOptions(request: QueryCostUnitResourceRequest, runtime: $Util.RuntimeOptions): Promise<QueryCostUnitResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerUid)) {
      query["OwnerUid"] = request.ownerUid;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.unitId)) {
      query["UnitId"] = request.unitId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryCostUnitResource",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryCostUnitResourceResponse>(await this.callApi(params, req, runtime), new QueryCostUnitResourceResponse({}));
  }

  async queryCostUnitResource(request: QueryCostUnitResourceRequest): Promise<QueryCostUnitResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCostUnitResourceWithOptions(request, runtime);
  }

  async queryCustomerAddressListWithOptions(request: QueryCustomerAddressListRequest, runtime: $Util.RuntimeOptions): Promise<QueryCustomerAddressListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryCustomerAddressList",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryCustomerAddressListResponse>(await this.callApi(params, req, runtime), new QueryCustomerAddressListResponse({}));
  }

  async queryCustomerAddressList(request: QueryCustomerAddressListRequest): Promise<QueryCustomerAddressListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCustomerAddressListWithOptions(request, runtime);
  }

  /**
    * The UID of the deducted instance.
    *
    * @param request QueryDPUtilizationDetailRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return QueryDPUtilizationDetailResponse
   */
  async queryDPUtilizationDetailWithOptions(request: QueryDPUtilizationDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryDPUtilizationDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!Util.isUnset(request.deductedInstanceId)) {
      query["DeductedInstanceId"] = request.deductedInstanceId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.includeShare)) {
      query["IncludeShare"] = request.includeShare;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceSpec)) {
      query["InstanceSpec"] = request.instanceSpec;
    }

    if (!Util.isUnset(request.lastToken)) {
      query["LastToken"] = request.lastToken;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryDPUtilizationDetail",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDPUtilizationDetailResponse>(await this.callApi(params, req, runtime), new QueryDPUtilizationDetailResponse({}));
  }

  /**
    * The UID of the deducted instance.
    *
    * @param request QueryDPUtilizationDetailRequest
    * @return QueryDPUtilizationDetailResponse
   */
  async queryDPUtilizationDetail(request: QueryDPUtilizationDetailRequest): Promise<QueryDPUtilizationDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDPUtilizationDetailWithOptions(request, runtime);
  }

  async queryEvaluateListWithOptions(request: QueryEvaluateListRequest, runtime: $Util.RuntimeOptions): Promise<QueryEvaluateListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billCycle)) {
      query["BillCycle"] = request.billCycle;
    }

    if (!Util.isUnset(request.bizTypeList)) {
      query["BizTypeList"] = request.bizTypeList;
    }

    if (!Util.isUnset(request.endAmount)) {
      query["EndAmount"] = request.endAmount;
    }

    if (!Util.isUnset(request.endBizTime)) {
      query["EndBizTime"] = request.endBizTime;
    }

    if (!Util.isUnset(request.endSearchTime)) {
      query["EndSearchTime"] = request.endSearchTime;
    }

    if (!Util.isUnset(request.outBizId)) {
      query["OutBizId"] = request.outBizId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortType)) {
      query["SortType"] = request.sortType;
    }

    if (!Util.isUnset(request.startAmount)) {
      query["StartAmount"] = request.startAmount;
    }

    if (!Util.isUnset(request.startBizTime)) {
      query["StartBizTime"] = request.startBizTime;
    }

    if (!Util.isUnset(request.startSearchTime)) {
      query["StartSearchTime"] = request.startSearchTime;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryEvaluateList",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryEvaluateListResponse>(await this.callApi(params, req, runtime), new QueryEvaluateListResponse({}));
  }

  async queryEvaluateList(request: QueryEvaluateListRequest): Promise<QueryEvaluateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEvaluateListWithOptions(request, runtime);
  }

  async queryFinancialAccountInfoWithOptions(request: QueryFinancialAccountInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryFinancialAccountInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryFinancialAccountInfo",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryFinancialAccountInfoResponse>(await this.callApi(params, req, runtime), new QueryFinancialAccountInfoResponse({}));
  }

  async queryFinancialAccountInfo(request: QueryFinancialAccountInfoRequest): Promise<QueryFinancialAccountInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFinancialAccountInfoWithOptions(request, runtime);
  }

  /**
    * ##
    * *   This API operation has been upgraded to DescribeInstanceBill. We recommend that you call the [DescribeInstanceBill](~~209402~~) operation to query the bills of instances or billable items in a billing cycle. You can call the QueryInstanceBill operation to query a maximum of 50,000 data rows in a bill.
    * *   Instance bills are generated after bills are split. In most cases, the instance bills do not include data generated on the last day of the specified period.
    * *   The instance information changes within a billing cycle. The instance configurations and specifications and the time when the instance was used in the billing cycle are all recorded. For more information, see the corresponding bill details.
    * *   You can query the data generated in June 2020 or later for Cloud Communications services, and the data generated in November 2020 or later for Alibaba Cloud Domains.
    *
    * @param request QueryInstanceBillRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return QueryInstanceBillResponse
   */
  async queryInstanceBillWithOptions(request: QueryInstanceBillRequest, runtime: $Util.RuntimeOptions): Promise<QueryInstanceBillResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!Util.isUnset(request.billingCycle)) {
      query["BillingCycle"] = request.billingCycle;
    }

    if (!Util.isUnset(request.billingDate)) {
      query["BillingDate"] = request.billingDate;
    }

    if (!Util.isUnset(request.granularity)) {
      query["Granularity"] = request.granularity;
    }

    if (!Util.isUnset(request.isBillingItem)) {
      query["IsBillingItem"] = request.isBillingItem;
    }

    if (!Util.isUnset(request.isHideZeroCharge)) {
      query["IsHideZeroCharge"] = request.isHideZeroCharge;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryInstanceBill",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryInstanceBillResponse>(await this.callApi(params, req, runtime), new QueryInstanceBillResponse({}));
  }

  /**
    * ##
    * *   This API operation has been upgraded to DescribeInstanceBill. We recommend that you call the [DescribeInstanceBill](~~209402~~) operation to query the bills of instances or billable items in a billing cycle. You can call the QueryInstanceBill operation to query a maximum of 50,000 data rows in a bill.
    * *   Instance bills are generated after bills are split. In most cases, the instance bills do not include data generated on the last day of the specified period.
    * *   The instance information changes within a billing cycle. The instance configurations and specifications and the time when the instance was used in the billing cycle are all recorded. For more information, see the corresponding bill details.
    * *   You can query the data generated in June 2020 or later for Cloud Communications services, and the data generated in November 2020 or later for Alibaba Cloud Domains.
    *
    * @param request QueryInstanceBillRequest
    * @return QueryInstanceBillResponse
   */
  async queryInstanceBill(request: QueryInstanceBillRequest): Promise<QueryInstanceBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryInstanceBillWithOptions(request, runtime);
  }

  async queryInstanceByTagWithOptions(request: QueryInstanceByTagRequest, runtime: $Util.RuntimeOptions): Promise<QueryInstanceByTagResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryInstanceByTag",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryInstanceByTagResponse>(await this.callApi(params, req, runtime), new QueryInstanceByTagResponse({}));
  }

  async queryInstanceByTag(request: QueryInstanceByTagRequest): Promise<QueryInstanceByTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryInstanceByTagWithOptions(request, runtime);
  }

  async queryInstanceGaapCostWithOptions(request: QueryInstanceGaapCostRequest, runtime: $Util.RuntimeOptions): Promise<QueryInstanceGaapCostResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billingCycle)) {
      query["BillingCycle"] = request.billingCycle;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryInstanceGaapCost",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryInstanceGaapCostResponse>(await this.callApi(params, req, runtime), new QueryInstanceGaapCostResponse({}));
  }

  async queryInstanceGaapCost(request: QueryInstanceGaapCostRequest): Promise<QueryInstanceGaapCostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryInstanceGaapCostWithOptions(request, runtime);
  }

  async queryInvoicingCustomerListWithOptions(request: QueryInvoicingCustomerListRequest, runtime: $Util.RuntimeOptions): Promise<QueryInvoicingCustomerListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryInvoicingCustomerList",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryInvoicingCustomerListResponse>(await this.callApi(params, req, runtime), new QueryInvoicingCustomerListResponse({}));
  }

  async queryInvoicingCustomerList(request: QueryInvoicingCustomerListRequest): Promise<QueryInvoicingCustomerListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryInvoicingCustomerListWithOptions(request, runtime);
  }

  async queryOrdersWithOptions(request: QueryOrdersRequest, runtime: $Util.RuntimeOptions): Promise<QueryOrdersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.createTimeEnd)) {
      query["CreateTimeEnd"] = request.createTimeEnd;
    }

    if (!Util.isUnset(request.createTimeStart)) {
      query["CreateTimeStart"] = request.createTimeStart;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.paymentStatus)) {
      query["PaymentStatus"] = request.paymentStatus;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryOrders",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryOrdersResponse>(await this.callApi(params, req, runtime), new QueryOrdersResponse({}));
  }

  async queryOrders(request: QueryOrdersRequest): Promise<QueryOrdersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOrdersWithOptions(request, runtime);
  }

  async queryPermissionListWithOptions(request: QueryPermissionListRequest, runtime: $Util.RuntimeOptions): Promise<QueryPermissionListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.relationId)) {
      query["RelationId"] = request.relationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryPermissionList",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPermissionListResponse>(await this.callApi(params, req, runtime), new QueryPermissionListResponse({}));
  }

  async queryPermissionList(request: QueryPermissionListRequest): Promise<QueryPermissionListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPermissionListWithOptions(request, runtime);
  }

  async queryPrepaidCardsWithOptions(request: QueryPrepaidCardsRequest, runtime: $Util.RuntimeOptions): Promise<QueryPrepaidCardsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.effectiveOrNot)) {
      query["EffectiveOrNot"] = request.effectiveOrNot;
    }

    if (!Util.isUnset(request.expiryTimeEnd)) {
      query["ExpiryTimeEnd"] = request.expiryTimeEnd;
    }

    if (!Util.isUnset(request.expiryTimeStart)) {
      query["ExpiryTimeStart"] = request.expiryTimeStart;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryPrepaidCards",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPrepaidCardsResponse>(await this.callApi(params, req, runtime), new QueryPrepaidCardsResponse({}));
  }

  async queryPrepaidCards(request: QueryPrepaidCardsRequest): Promise<QueryPrepaidCardsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPrepaidCardsWithOptions(request, runtime);
  }

  /**
    * You can call this operation to query the billable items of a service. A billable item is the minimum unit used to calculate costs.
    *
    * @param request QueryPriceEntityListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return QueryPriceEntityListResponse
   */
  async queryPriceEntityListWithOptions(request: QueryPriceEntityListRequest, runtime: $Util.RuntimeOptions): Promise<QueryPriceEntityListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryPriceEntityList",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPriceEntityListResponse>(await this.callApi(params, req, runtime), new QueryPriceEntityListResponse({}));
  }

  /**
    * You can call this operation to query the billable items of a service. A billable item is the minimum unit used to calculate costs.
    *
    * @param request QueryPriceEntityListRequest
    * @return QueryPriceEntityListResponse
   */
  async queryPriceEntityList(request: QueryPriceEntityListRequest): Promise<QueryPriceEntityListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPriceEntityListWithOptions(request, runtime);
  }

  async queryProductListWithOptions(request: QueryProductListRequest, runtime: $Util.RuntimeOptions): Promise<QueryProductListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryTotalCount)) {
      query["QueryTotalCount"] = request.queryTotalCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryProductList",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryProductListResponse>(await this.callApi(params, req, runtime), new QueryProductListResponse({}));
  }

  async queryProductList(request: QueryProductListRequest): Promise<QueryProductListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryProductListWithOptions(request, runtime);
  }

  async queryRIUtilizationDetailWithOptions(request: QueryRIUtilizationDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryRIUtilizationDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deductedInstanceId)) {
      query["DeductedInstanceId"] = request.deductedInstanceId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceSpec)) {
      query["InstanceSpec"] = request.instanceSpec;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.RICommodityCode)) {
      query["RICommodityCode"] = request.RICommodityCode;
    }

    if (!Util.isUnset(request.RIInstanceId)) {
      query["RIInstanceId"] = request.RIInstanceId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRIUtilizationDetail",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRIUtilizationDetailResponse>(await this.callApi(params, req, runtime), new QueryRIUtilizationDetailResponse({}));
  }

  async queryRIUtilizationDetail(request: QueryRIUtilizationDetailRequest): Promise<QueryRIUtilizationDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRIUtilizationDetailWithOptions(request, runtime);
  }

  async queryRedeemWithOptions(request: QueryRedeemRequest, runtime: $Util.RuntimeOptions): Promise<QueryRedeemResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRedeem",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRedeemResponse>(await this.callApi(params, req, runtime), new QueryRedeemResponse({}));
  }

  async queryRedeem(request: QueryRedeemRequest): Promise<QueryRedeemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRedeemWithOptions(request, runtime);
  }

  async queryRelationListWithOptions(request: QueryRelationListRequest, runtime: $Util.RuntimeOptions): Promise<QueryRelationListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.statusList)) {
      query["StatusList"] = request.statusList;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRelationList",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRelationListResponse>(await this.callApi(params, req, runtime), new QueryRelationListResponse({}));
  }

  async queryRelationList(request: QueryRelationListRequest): Promise<QueryRelationListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRelationListWithOptions(request, runtime);
  }

  async queryResellerAvailableQuotaWithOptions(request: QueryResellerAvailableQuotaRequest, runtime: $Util.RuntimeOptions): Promise<QueryResellerAvailableQuotaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.itemCodes)) {
      query["ItemCodes"] = request.itemCodes;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryResellerAvailableQuota",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryResellerAvailableQuotaResponse>(await this.callApi(params, req, runtime), new QueryResellerAvailableQuotaResponse({}));
  }

  async queryResellerAvailableQuota(request: QueryResellerAvailableQuotaRequest): Promise<QueryResellerAvailableQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryResellerAvailableQuotaWithOptions(request, runtime);
  }

  async queryResellerUserAlarmThresholdWithOptions(request: QueryResellerUserAlarmThresholdRequest, runtime: $Util.RuntimeOptions): Promise<QueryResellerUserAlarmThresholdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alarmType)) {
      query["AlarmType"] = request.alarmType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryResellerUserAlarmThreshold",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryResellerUserAlarmThresholdResponse>(await this.callApi(params, req, runtime), new QueryResellerUserAlarmThresholdResponse({}));
  }

  async queryResellerUserAlarmThreshold(request: QueryResellerUserAlarmThresholdRequest): Promise<QueryResellerUserAlarmThresholdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryResellerUserAlarmThresholdWithOptions(request, runtime);
  }

  async queryResourcePackageInstancesWithOptions(request: QueryResourcePackageInstancesRequest, runtime: $Util.RuntimeOptions): Promise<QueryResourcePackageInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.expiryTimeEnd)) {
      query["ExpiryTimeEnd"] = request.expiryTimeEnd;
    }

    if (!Util.isUnset(request.expiryTimeStart)) {
      query["ExpiryTimeStart"] = request.expiryTimeStart;
    }

    if (!Util.isUnset(request.includePartner)) {
      query["IncludePartner"] = request.includePartner;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryResourcePackageInstances",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryResourcePackageInstancesResponse>(await this.callApi(params, req, runtime), new QueryResourcePackageInstancesResponse({}));
  }

  async queryResourcePackageInstances(request: QueryResourcePackageInstancesRequest): Promise<QueryResourcePackageInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryResourcePackageInstancesWithOptions(request, runtime);
  }

  async querySavingsPlansDeductLogWithOptions(request: QuerySavingsPlansDeductLogRequest, runtime: $Util.RuntimeOptions): Promise<QuerySavingsPlansDeductLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.locale)) {
      query["Locale"] = request.locale;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySavingsPlansDeductLog",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySavingsPlansDeductLogResponse>(await this.callApi(params, req, runtime), new QuerySavingsPlansDeductLogResponse({}));
  }

  async querySavingsPlansDeductLog(request: QuerySavingsPlansDeductLogRequest): Promise<QuerySavingsPlansDeductLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySavingsPlansDeductLogWithOptions(request, runtime);
  }

  async querySavingsPlansDiscountWithOptions(request: QuerySavingsPlansDiscountRequest, runtime: $Util.RuntimeOptions): Promise<QuerySavingsPlansDiscountResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySavingsPlansDiscount",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySavingsPlansDiscountResponse>(await this.callApi(params, req, runtime), new QuerySavingsPlansDiscountResponse({}));
  }

  async querySavingsPlansDiscount(request: QuerySavingsPlansDiscountRequest): Promise<QuerySavingsPlansDiscountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySavingsPlansDiscountWithOptions(request, runtime);
  }

  async querySavingsPlansInstanceWithOptions(request: QuerySavingsPlansInstanceRequest, runtime: $Util.RuntimeOptions): Promise<QuerySavingsPlansInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.locale)) {
      query["Locale"] = request.locale;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySavingsPlansInstance",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySavingsPlansInstanceResponse>(await this.callApi(params, req, runtime), new QuerySavingsPlansInstanceResponse({}));
  }

  async querySavingsPlansInstance(request: QuerySavingsPlansInstanceRequest): Promise<QuerySavingsPlansInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySavingsPlansInstanceWithOptions(request, runtime);
  }

  async querySettleBillWithOptions(request: QuerySettleBillRequest, runtime: $Util.RuntimeOptions): Promise<QuerySettleBillResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!Util.isUnset(request.billingCycle)) {
      query["BillingCycle"] = request.billingCycle;
    }

    if (!Util.isUnset(request.isDisplayLocalCurrency)) {
      query["IsDisplayLocalCurrency"] = request.isDisplayLocalCurrency;
    }

    if (!Util.isUnset(request.isHideZeroCharge)) {
      query["IsHideZeroCharge"] = request.isHideZeroCharge;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.recordID)) {
      query["RecordID"] = request.recordID;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySettleBill",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySettleBillResponse>(await this.callApi(params, req, runtime), new QuerySettleBillResponse({}));
  }

  async querySettleBill(request: QuerySettleBillRequest): Promise<QuerySettleBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySettleBillWithOptions(request, runtime);
  }

  async querySkuPriceListWithOptions(tmpReq: QuerySkuPriceListRequest, runtime: $Util.RuntimeOptions): Promise<QuerySkuPriceListResponse> {
    Util.validateModel(tmpReq);
    let request = new QuerySkuPriceListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.priceFactorConditionMap)) {
      request.priceFactorConditionMapShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.priceFactorConditionMap, "PriceFactorConditionMap", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySkuPriceList",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySkuPriceListResponse>(await this.callApi(params, req, runtime), new QuerySkuPriceListResponse({}));
  }

  async querySkuPriceList(request: QuerySkuPriceListRequest): Promise<QuerySkuPriceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySkuPriceListWithOptions(request, runtime);
  }

  /**
    * *   This API operation has been upgraded to DescribeSplitItemBill. We recommend that you call the [DescribeSplitItemBill](~~208169~~) operation to query split bills. You can call the QuerySplitItemBill operation to query a maximum of 50,000 data rows in a bill.
    * *   The data queried by calling the QuerySplitItemBill operation is consistent with the data that is displayed for the specified billing cycle on the Split Bill page in User Center.
    * *   You can call this operation to query split bills generated within the last 12 months.
    * *   This operation returns split bills only after you activate the [Split Bill](https://usercenter2.aliyun.com/finance/split-bill) service in User Center.
    *
    * @param request QuerySplitItemBillRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return QuerySplitItemBillResponse
   */
  async querySplitItemBillWithOptions(request: QuerySplitItemBillRequest, runtime: $Util.RuntimeOptions): Promise<QuerySplitItemBillResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billOwnerId)) {
      query["BillOwnerId"] = request.billOwnerId;
    }

    if (!Util.isUnset(request.billingCycle)) {
      query["BillingCycle"] = request.billingCycle;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySplitItemBill",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySplitItemBillResponse>(await this.callApi(params, req, runtime), new QuerySplitItemBillResponse({}));
  }

  /**
    * *   This API operation has been upgraded to DescribeSplitItemBill. We recommend that you call the [DescribeSplitItemBill](~~208169~~) operation to query split bills. You can call the QuerySplitItemBill operation to query a maximum of 50,000 data rows in a bill.
    * *   The data queried by calling the QuerySplitItemBill operation is consistent with the data that is displayed for the specified billing cycle on the Split Bill page in User Center.
    * *   You can call this operation to query split bills generated within the last 12 months.
    * *   This operation returns split bills only after you activate the [Split Bill](https://usercenter2.aliyun.com/finance/split-bill) service in User Center.
    *
    * @param request QuerySplitItemBillRequest
    * @return QuerySplitItemBillResponse
   */
  async querySplitItemBill(request: QuerySplitItemBillRequest): Promise<QuerySplitItemBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySplitItemBillWithOptions(request, runtime);
  }

  /**
    * You can call this operation to query the usage data of an Alibaba Cloud service. Take note of the following items:
    * *   The service code that you specify for querying the usage data of a specific Alibaba Cloud service must be valid. You can query the usage data by hour or by day.
    * *   The time that you specify must follow the ISO8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
    *     *   Latency exists in data pushes. Therefore, if you set the DataType parameter to Hour, the integrity of usage data recorded in the last 24 hours can be ensured. If you set the DataType parameter to Day, the integrity of usage data recorded in the last two days can be ensured.
    *     *   You can query the usage data that is recorded in the last quarter.
    *
    * @param request QueryUserOmsDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return QueryUserOmsDataResponse
   */
  async queryUserOmsDataWithOptions(request: QueryUserOmsDataRequest, runtime: $Util.RuntimeOptions): Promise<QueryUserOmsDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.marker)) {
      query["Marker"] = request.marker;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.table)) {
      query["Table"] = request.table;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryUserOmsData",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryUserOmsDataResponse>(await this.callApi(params, req, runtime), new QueryUserOmsDataResponse({}));
  }

  /**
    * You can call this operation to query the usage data of an Alibaba Cloud service. Take note of the following items:
    * *   The service code that you specify for querying the usage data of a specific Alibaba Cloud service must be valid. You can query the usage data by hour or by day.
    * *   The time that you specify must follow the ISO8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
    *     *   Latency exists in data pushes. Therefore, if you set the DataType parameter to Hour, the integrity of usage data recorded in the last 24 hours can be ensured. If you set the DataType parameter to Day, the integrity of usage data recorded in the last two days can be ensured.
    *     *   You can query the usage data that is recorded in the last quarter.
    *
    * @param request QueryUserOmsDataRequest
    * @return QueryUserOmsDataResponse
   */
  async queryUserOmsData(request: QueryUserOmsDataRequest): Promise<QueryUserOmsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUserOmsDataWithOptions(request, runtime);
  }

  /**
    * 1.  Refunds are applicable only for the actual paid amount. Vouchers used for the purchase are non-refundable.
    * 2.  Check the information about unsubscription and confirm the unsubscription terms and refundable amount. The resource that is unsubscribed cannot be restored.
    * 3.  For more information, see [Rules for unsubscribing from resources](https://help.aliyun.com/knowledge_detail/116043.html?spm=a2c81.e1d666e.app.2.62ae11271Kd6iM).
    *
    * @param request RefundInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RefundInstanceResponse
   */
  async refundInstanceWithOptions(request: RefundInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RefundInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.immediatelyRelease)) {
      query["ImmediatelyRelease"] = request.immediatelyRelease;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefundInstance",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefundInstanceResponse>(await this.callApi(params, req, runtime), new RefundInstanceResponse({}));
  }

  /**
    * 1.  Refunds are applicable only for the actual paid amount. Vouchers used for the purchase are non-refundable.
    * 2.  Check the information about unsubscription and confirm the unsubscription terms and refundable amount. The resource that is unsubscribed cannot be restored.
    * 3.  For more information, see [Rules for unsubscribing from resources](https://help.aliyun.com/knowledge_detail/116043.html?spm=a2c81.e1d666e.app.2.62ae11271Kd6iM).
    *
    * @param request RefundInstanceRequest
    * @return RefundInstanceResponse
   */
  async refundInstance(request: RefundInstanceRequest): Promise<RefundInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refundInstanceWithOptions(request, runtime);
  }

  /**
    * A value of true indicates that the execution is complete.
    * A value of false indicates that an error occurs during the execution.
    *
    * @param request ReleaseInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ReleaseInstanceResponse
   */
  async releaseInstanceWithOptions(request: ReleaseInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.renewStatus)) {
      query["RenewStatus"] = request.renewStatus;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseInstance",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseInstanceResponse>(await this.callApi(params, req, runtime), new ReleaseInstanceResponse({}));
  }

  /**
    * A value of true indicates that the execution is complete.
    * A value of false indicates that an error occurs during the execution.
    *
    * @param request ReleaseInstanceRequest
    * @return ReleaseInstanceResponse
   */
  async releaseInstance(request: ReleaseInstanceRequest): Promise<ReleaseInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseInstanceWithOptions(request, runtime);
  }

  async relieveAccountRelationWithOptions(request: RelieveAccountRelationRequest, runtime: $Util.RuntimeOptions): Promise<RelieveAccountRelationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.childUserId)) {
      query["ChildUserId"] = request.childUserId;
    }

    if (!Util.isUnset(request.parentUserId)) {
      query["ParentUserId"] = request.parentUserId;
    }

    if (!Util.isUnset(request.relationId)) {
      query["RelationId"] = request.relationId;
    }

    if (!Util.isUnset(request.relationType)) {
      query["RelationType"] = request.relationType;
    }

    if (!Util.isUnset(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RelieveAccountRelation",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RelieveAccountRelationResponse>(await this.callApi(params, req, runtime), new RelieveAccountRelationResponse({}));
  }

  async relieveAccountRelation(request: RelieveAccountRelationRequest): Promise<RelieveAccountRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.relieveAccountRelationWithOptions(request, runtime);
  }

  async renewInstanceWithOptions(request: RenewInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RenewInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.renewPeriod)) {
      query["RenewPeriod"] = request.renewPeriod;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RenewInstance",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenewInstanceResponse>(await this.callApi(params, req, runtime), new RenewInstanceResponse({}));
  }

  async renewInstance(request: RenewInstanceRequest): Promise<RenewInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewInstanceWithOptions(request, runtime);
  }

  async renewResourcePackageWithOptions(request: RenewResourcePackageRequest, runtime: $Util.RuntimeOptions): Promise<RenewResourcePackageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.effectiveDate)) {
      query["EffectiveDate"] = request.effectiveDate;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RenewResourcePackage",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenewResourcePackageResponse>(await this.callApi(params, req, runtime), new RenewResourcePackageResponse({}));
  }

  async renewResourcePackage(request: RenewResourcePackageRequest): Promise<RenewResourcePackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewResourcePackageWithOptions(request, runtime);
  }

  async saveUserCreditWithOptions(request: SaveUserCreditRequest, runtime: $Util.RuntimeOptions): Promise<SaveUserCreditResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.avoidExpiration)) {
      query["AvoidExpiration"] = request.avoidExpiration;
    }

    if (!Util.isUnset(request.avoidNotification)) {
      query["AvoidNotification"] = request.avoidNotification;
    }

    if (!Util.isUnset(request.avoidPrepaidExpiration)) {
      query["AvoidPrepaidExpiration"] = request.avoidPrepaidExpiration;
    }

    if (!Util.isUnset(request.avoidPrepaidNotification)) {
      query["AvoidPrepaidNotification"] = request.avoidPrepaidNotification;
    }

    if (!Util.isUnset(request.creditType)) {
      query["CreditType"] = request.creditType;
    }

    if (!Util.isUnset(request.creditValue)) {
      query["CreditValue"] = request.creditValue;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.operator)) {
      query["Operator"] = request.operator;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveUserCredit",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveUserCreditResponse>(await this.callApi(params, req, runtime), new SaveUserCreditResponse({}));
  }

  async saveUserCredit(request: SaveUserCreditRequest): Promise<SaveUserCreditResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveUserCreditWithOptions(request, runtime);
  }

  async setAllExpirationDayWithOptions(request: SetAllExpirationDayRequest, runtime: $Util.RuntimeOptions): Promise<SetAllExpirationDayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.unifyExpireDay)) {
      query["UnifyExpireDay"] = request.unifyExpireDay;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetAllExpirationDay",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetAllExpirationDayResponse>(await this.callApi(params, req, runtime), new SetAllExpirationDayResponse({}));
  }

  async setAllExpirationDay(request: SetAllExpirationDayRequest): Promise<SetAllExpirationDayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAllExpirationDayWithOptions(request, runtime);
  }

  async setCreditLabelActionWithOptions(request: SetCreditLabelActionRequest, runtime: $Util.RuntimeOptions): Promise<SetCreditLabelActionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.actionType)) {
      query["ActionType"] = request.actionType;
    }

    if (!Util.isUnset(request.clearCycle)) {
      query["ClearCycle"] = request.clearCycle;
    }

    if (!Util.isUnset(request.creditAmount)) {
      query["CreditAmount"] = request.creditAmount;
    }

    if (!Util.isUnset(request.currencyCode)) {
      query["CurrencyCode"] = request.currencyCode;
    }

    if (!Util.isUnset(request.dailyCycle)) {
      query["DailyCycle"] = request.dailyCycle;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.isNeedAddSettleLabel)) {
      query["IsNeedAddSettleLabel"] = request.isNeedAddSettleLabel;
    }

    if (!Util.isUnset(request.isNeedAdjustCreditAccount)) {
      query["IsNeedAdjustCreditAccount"] = request.isNeedAdjustCreditAccount;
    }

    if (!Util.isUnset(request.isNeedSaveNotifyRule)) {
      query["IsNeedSaveNotifyRule"] = request.isNeedSaveNotifyRule;
    }

    if (!Util.isUnset(request.isNeedSetCreditAmount)) {
      query["IsNeedSetCreditAmount"] = request.isNeedSetCreditAmount;
    }

    if (!Util.isUnset(request.needNotice)) {
      query["NeedNotice"] = request.needNotice;
    }

    if (!Util.isUnset(request.newCreateMode)) {
      query["NewCreateMode"] = request.newCreateMode;
    }

    if (!Util.isUnset(request.operator)) {
      query["Operator"] = request.operator;
    }

    if (!Util.isUnset(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    if (!Util.isUnset(request.siteCode)) {
      query["SiteCode"] = request.siteCode;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetCreditLabelAction",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetCreditLabelActionResponse>(await this.callApi(params, req, runtime), new SetCreditLabelActionResponse({}));
  }

  async setCreditLabelAction(request: SetCreditLabelActionRequest): Promise<SetCreditLabelActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setCreditLabelActionWithOptions(request, runtime);
  }

  async setRenewalWithOptions(request: SetRenewalRequest, runtime: $Util.RuntimeOptions): Promise<SetRenewalResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIDs)) {
      query["InstanceIDs"] = request.instanceIDs;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.renewalPeriod)) {
      query["RenewalPeriod"] = request.renewalPeriod;
    }

    if (!Util.isUnset(request.renewalPeriodUnit)) {
      query["RenewalPeriodUnit"] = request.renewalPeriodUnit;
    }

    if (!Util.isUnset(request.renewalStatus)) {
      query["RenewalStatus"] = request.renewalStatus;
    }

    if (!Util.isUnset(request.subscriptionType)) {
      query["SubscriptionType"] = request.subscriptionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetRenewal",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetRenewalResponse>(await this.callApi(params, req, runtime), new SetRenewalResponse({}));
  }

  async setRenewal(request: SetRenewalRequest): Promise<SetRenewalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setRenewalWithOptions(request, runtime);
  }

  async setResellerUserAlarmThresholdWithOptions(request: SetResellerUserAlarmThresholdRequest, runtime: $Util.RuntimeOptions): Promise<SetResellerUserAlarmThresholdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alarmThresholds)) {
      query["AlarmThresholds"] = request.alarmThresholds;
    }

    if (!Util.isUnset(request.alarmType)) {
      query["AlarmType"] = request.alarmType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetResellerUserAlarmThreshold",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetResellerUserAlarmThresholdResponse>(await this.callApi(params, req, runtime), new SetResellerUserAlarmThresholdResponse({}));
  }

  async setResellerUserAlarmThreshold(request: SetResellerUserAlarmThresholdRequest): Promise<SetResellerUserAlarmThresholdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setResellerUserAlarmThresholdWithOptions(request, runtime);
  }

  async setResellerUserQuotaWithOptions(request: SetResellerUserQuotaRequest, runtime: $Util.RuntimeOptions): Promise<SetResellerUserQuotaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!Util.isUnset(request.currency)) {
      query["Currency"] = request.currency;
    }

    if (!Util.isUnset(request.outBizId)) {
      query["OutBizId"] = request.outBizId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetResellerUserQuota",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetResellerUserQuotaResponse>(await this.callApi(params, req, runtime), new SetResellerUserQuotaResponse({}));
  }

  async setResellerUserQuota(request: SetResellerUserQuotaRequest): Promise<SetResellerUserQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setResellerUserQuotaWithOptions(request, runtime);
  }

  async setResellerUserStatusWithOptions(request: SetResellerUserStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetResellerUserStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.stopMode)) {
      query["StopMode"] = request.stopMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetResellerUserStatus",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetResellerUserStatusResponse>(await this.callApi(params, req, runtime), new SetResellerUserStatusResponse({}));
  }

  async setResellerUserStatus(request: SetResellerUserStatusRequest): Promise<SetResellerUserStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setResellerUserStatusWithOptions(request, runtime);
  }

  async subscribeBillToOSSWithOptions(request: SubscribeBillToOSSRequest, runtime: $Util.RuntimeOptions): Promise<SubscribeBillToOSSResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginBillingCycle)) {
      query["BeginBillingCycle"] = request.beginBillingCycle;
    }

    if (!Util.isUnset(request.bucketOwnerId)) {
      query["BucketOwnerId"] = request.bucketOwnerId;
    }

    if (!Util.isUnset(request.bucketPath)) {
      query["BucketPath"] = request.bucketPath;
    }

    if (!Util.isUnset(request.multAccountRelSubscribe)) {
      query["MultAccountRelSubscribe"] = request.multAccountRelSubscribe;
    }

    if (!Util.isUnset(request.rowLimitPerFile)) {
      query["RowLimitPerFile"] = request.rowLimitPerFile;
    }

    if (!Util.isUnset(request.subscribeBucket)) {
      query["SubscribeBucket"] = request.subscribeBucket;
    }

    if (!Util.isUnset(request.subscribeType)) {
      query["SubscribeType"] = request.subscribeType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubscribeBillToOSS",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubscribeBillToOSSResponse>(await this.callApi(params, req, runtime), new SubscribeBillToOSSResponse({}));
  }

  async subscribeBillToOSS(request: SubscribeBillToOSSRequest): Promise<SubscribeBillToOSSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.subscribeBillToOSSWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async unsubscribeBillToOSSWithOptions(request: UnsubscribeBillToOSSRequest, runtime: $Util.RuntimeOptions): Promise<UnsubscribeBillToOSSResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.multAccountRelSubscribe)) {
      query["MultAccountRelSubscribe"] = request.multAccountRelSubscribe;
    }

    if (!Util.isUnset(request.subscribeType)) {
      query["SubscribeType"] = request.subscribeType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnsubscribeBillToOSS",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnsubscribeBillToOSSResponse>(await this.callApi(params, req, runtime), new UnsubscribeBillToOSSResponse({}));
  }

  async unsubscribeBillToOSS(request: UnsubscribeBillToOSSRequest): Promise<UnsubscribeBillToOSSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unsubscribeBillToOSSWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async upgradeResourcePackageWithOptions(request: UpgradeResourcePackageRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeResourcePackageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.effectiveDate)) {
      query["EffectiveDate"] = request.effectiveDate;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.specification)) {
      query["Specification"] = request.specification;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeResourcePackage",
      version: "2017-12-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeResourcePackageResponse>(await this.callApi(params, req, runtime), new UpgradeResourcePackageResponse({}));
  }

  async upgradeResourcePackage(request: UpgradeResourcePackageRequest): Promise<UpgradeResourcePackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeResourcePackageWithOptions(request, runtime);
  }

}
