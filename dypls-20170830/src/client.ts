// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ApplyArInvoiceWithSourceRequest extends $tea.Model {
  address?: ApplyArInvoiceWithSourceRequestAddress;
  amount?: number;
  appCode?: string;
  applier?: string;
  applyDate?: string;
  currencyCode?: string;
  customer?: ApplyArInvoiceWithSourceRequestCustomer;
  encryptProps?: { [key: string]: string };
  excludingTaxAmount?: number;
  inputType?: string;
  invoiceType?: string;
  isMerged?: boolean;
  language?: string;
  materialType?: string;
  memo?: string;
  ouCode?: string;
  purchaserBankInfo?: string;
  purchaserContactInfo?: string;
  purchaserName?: string;
  purchaserTaxNo?: string;
  requestNo?: string;
  sign?: string;
  siteId?: string;
  sourceList?: ApplyArInvoiceWithSourceRequestSourceList[];
  taxAmount?: number;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      amount: 'Amount',
      appCode: 'AppCode',
      applier: 'Applier',
      applyDate: 'ApplyDate',
      currencyCode: 'CurrencyCode',
      customer: 'Customer',
      encryptProps: 'EncryptProps',
      excludingTaxAmount: 'ExcludingTaxAmount',
      inputType: 'InputType',
      invoiceType: 'InvoiceType',
      isMerged: 'IsMerged',
      language: 'Language',
      materialType: 'MaterialType',
      memo: 'Memo',
      ouCode: 'OuCode',
      purchaserBankInfo: 'PurchaserBankInfo',
      purchaserContactInfo: 'PurchaserContactInfo',
      purchaserName: 'PurchaserName',
      purchaserTaxNo: 'PurchaserTaxNo',
      requestNo: 'RequestNo',
      sign: 'Sign',
      siteId: 'SiteId',
      sourceList: 'SourceList',
      taxAmount: 'TaxAmount',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: ApplyArInvoiceWithSourceRequestAddress,
      amount: 'number',
      appCode: 'string',
      applier: 'string',
      applyDate: 'string',
      currencyCode: 'string',
      customer: ApplyArInvoiceWithSourceRequestCustomer,
      encryptProps: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      excludingTaxAmount: 'number',
      inputType: 'string',
      invoiceType: 'string',
      isMerged: 'boolean',
      language: 'string',
      materialType: 'string',
      memo: 'string',
      ouCode: 'string',
      purchaserBankInfo: 'string',
      purchaserContactInfo: 'string',
      purchaserName: 'string',
      purchaserTaxNo: 'string',
      requestNo: 'string',
      sign: 'string',
      siteId: 'string',
      sourceList: { 'type': 'array', 'itemType': ApplyArInvoiceWithSourceRequestSourceList },
      taxAmount: 'number',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyArInvoiceWithSourceResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  isSuccess?: boolean;
  returnValue?: ApplyArInvoiceWithSourceResponseBodyReturnValue;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      isSuccess: 'IsSuccess',
      returnValue: 'ReturnValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      isSuccess: 'boolean',
      returnValue: ApplyArInvoiceWithSourceResponseBodyReturnValue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyArInvoiceWithSourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ApplyArInvoiceWithSourceResponseBody;
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
      body: ApplyArInvoiceWithSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyBlackInfoExportRequest extends $tea.Model {
  billId?: string;
  blackType?: string;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      blackType: 'BlackType',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      blackType: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyBlackInfoExportResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyBlackInfoExportResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ApplyBlackInfoExportResponseBody;
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
      body: ApplyBlackInfoExportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyCallRecordExportRequest extends $tea.Model {
  billId?: string;
  callDate?: string;
  callId?: string;
  ownerId?: number;
  phoneNoA?: string;
  phoneNoB?: string;
  prodCode?: string;
  resType?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  secretNo?: string;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      callDate: 'CallDate',
      callId: 'CallId',
      ownerId: 'OwnerId',
      phoneNoA: 'PhoneNoA',
      phoneNoB: 'PhoneNoB',
      prodCode: 'ProdCode',
      resType: 'ResType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secretNo: 'SecretNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      callDate: 'string',
      callId: 'string',
      ownerId: 'number',
      phoneNoA: 'string',
      phoneNoB: 'string',
      prodCode: 'string',
      resType: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secretNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyCallRecordExportResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyCallRecordExportResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ApplyCallRecordExportResponseBody;
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
      body: ApplyCallRecordExportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyGroupNumberExportRequest extends $tea.Model {
  groupId?: string;
  ownerId?: number;
  poolKey?: string;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      ownerId: 'number',
      poolKey: 'string',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyGroupNumberExportResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyGroupNumberExportResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ApplyGroupNumberExportResponseBody;
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
      body: ApplyGroupNumberExportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyRingToneRequest extends $tea.Model {
  billId?: string;
  id?: string;
  ownerId?: number;
  playType?: string;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      id: 'Id',
      ownerId: 'OwnerId',
      playType: 'PlayType',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      id: 'string',
      ownerId: 'number',
      playType: 'string',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyRingToneResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyRingToneResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ApplyRingToneResponseBody;
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
      body: ApplyRingToneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchOccupySecretResRequest extends $tea.Model {
  batchOccupyList?: BatchOccupySecretResRequestBatchOccupyList[];
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      batchOccupyList: 'BatchOccupyList',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchOccupyList: { 'type': 'array', 'itemType': BatchOccupySecretResRequestBatchOccupyList },
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchOccupySecretResShrinkRequest extends $tea.Model {
  batchOccupyListShrink?: string;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      batchOccupyListShrink: 'BatchOccupyList',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchOccupyListShrink: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchOccupySecretResResponseBody extends $tea.Model {
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

export class BatchOccupySecretResResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchOccupySecretResResponseBody;
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
      body: BatchOccupySecretResResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindResourceRequest extends $tea.Model {
  asrModelId?: string;
  asrStatus?: boolean;
  axnExtensionB?: string;
  billId?: string;
  expTime?: string;
  isRecord?: boolean;
  ownerId?: number;
  phoneNoA?: string;
  phoneNoB?: string;
  prodCode?: string;
  resType?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  secretNo?: string;
  static names(): { [key: string]: string } {
    return {
      asrModelId: 'AsrModelId',
      asrStatus: 'AsrStatus',
      axnExtensionB: 'AxnExtensionB',
      billId: 'BillId',
      expTime: 'ExpTime',
      isRecord: 'IsRecord',
      ownerId: 'OwnerId',
      phoneNoA: 'PhoneNoA',
      phoneNoB: 'PhoneNoB',
      prodCode: 'ProdCode',
      resType: 'ResType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secretNo: 'SecretNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrModelId: 'string',
      asrStatus: 'boolean',
      axnExtensionB: 'string',
      billId: 'string',
      expTime: 'string',
      isRecord: 'boolean',
      ownerId: 'number',
      phoneNoA: 'string',
      phoneNoB: 'string',
      prodCode: 'string',
      resType: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secretNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindResourceResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BindResourceResponseBody;
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
      body: BindResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BlackOperateRequest extends $tea.Model {
  billId?: string;
  blackMap?: string;
  blackType?: string;
  operateType?: string;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      blackMap: 'BlackMap',
      blackType: 'BlackType',
      operateType: 'OperateType',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      blackMap: 'string',
      blackType: 'string',
      operateType: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BlackOperateResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BlackOperateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BlackOperateResponseBody;
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
      body: BlackOperateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertifyInfoRequest extends $tea.Model {
  ownerId?: number;
  phoneNo?: string;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      phoneNo: 'PhoneNo',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      phoneNo: 'string',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertifyInfoResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertifyInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateCertifyInfoResponseBody;
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
      body: CreateCertifyInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContactsRequest extends $tea.Model {
  billId?: string;
  name?: string;
  ownerId?: number;
  phoneNumber?: string;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      name: 'Name',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      name: 'string',
      ownerId: 'number',
      phoneNumber: 'string',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContactsResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateContactsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateContactsResponseBody;
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
      body: CreateContactsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupDetailRequest extends $tea.Model {
  groupId?: string;
  numberList?: string;
  ownerId?: number;
  poolKey?: string;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      numberList: 'NumberList',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      numberList: 'string',
      ownerId: 'number',
      poolKey: 'string',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupDetailResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateGroupDetailResponseBody;
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
      body: CreateGroupDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupInfoRequest extends $tea.Model {
  name?: string;
  numberList?: string;
  ownerId?: number;
  poolKey?: string;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      numberList: 'NumberList',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      numberList: 'string',
      ownerId: 'number',
      poolKey: 'string',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupInfoResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateGroupInfoResponseBody;
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
      body: CreateGroupInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLogicalDeleteRequest extends $tea.Model {
  bid?: string;
  country?: string;
  gmtWakeup?: string;
  hid?: number;
  interrupt?: boolean;
  invoker?: string;
  message?: string;
  pk?: string;
  prodCode?: string;
  success?: boolean;
  taskExtraData?: string;
  taskIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      country: 'Country',
      gmtWakeup: 'GmtWakeup',
      hid: 'Hid',
      interrupt: 'Interrupt',
      invoker: 'Invoker',
      message: 'Message',
      pk: 'Pk',
      prodCode: 'ProdCode',
      success: 'Success',
      taskExtraData: 'TaskExtraData',
      taskIdentifier: 'TaskIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'string',
      country: 'string',
      gmtWakeup: 'string',
      hid: 'number',
      interrupt: 'boolean',
      invoker: 'string',
      message: 'string',
      pk: 'string',
      prodCode: 'string',
      success: 'boolean',
      taskExtraData: 'string',
      taskIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLogicalDeleteResponseBody extends $tea.Model {
  bid?: string;
  country?: string;
  gmtWakeup?: string;
  hid?: number;
  interrupt?: boolean;
  invoker?: string;
  message?: string;
  pk?: string;
  success?: boolean;
  taskExtraData?: string;
  taskIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      country: 'Country',
      gmtWakeup: 'GmtWakeup',
      hid: 'Hid',
      interrupt: 'Interrupt',
      invoker: 'Invoker',
      message: 'Message',
      pk: 'Pk',
      success: 'Success',
      taskExtraData: 'TaskExtraData',
      taskIdentifier: 'TaskIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'string',
      country: 'string',
      gmtWakeup: 'string',
      hid: 'number',
      interrupt: 'boolean',
      invoker: 'string',
      message: 'string',
      pk: 'string',
      success: 'boolean',
      taskExtraData: 'string',
      taskIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLogicalDeleteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateLogicalDeleteResponseBody;
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
      body: CreateLogicalDeleteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMessageCallbackRequest extends $tea.Model {
  bizType?: string;
  callbackUrl?: string;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      callbackUrl: 'CallbackUrl',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      callbackUrl: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMessageCallbackResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMessageCallbackResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMessageCallbackResponseBody;
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
      body: CreateMessageCallbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMessageQueueRequest extends $tea.Model {
  billIds?: string;
  bizType?: string;
  ownerId?: number;
  prodCode?: string;
  queueName?: string;
  queueTitle?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      billIds: 'BillIds',
      bizType: 'BizType',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      queueName: 'QueueName',
      queueTitle: 'QueueTitle',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billIds: 'string',
      bizType: 'string',
      ownerId: 'number',
      prodCode: 'string',
      queueName: 'string',
      queueTitle: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMessageQueueResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMessageQueueResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMessageQueueResponseBody;
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
      body: CreateMessageQueueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePhysicalDeleteRequest extends $tea.Model {
  bid?: string;
  country?: string;
  gmtWakeup?: string;
  hid?: number;
  interrupt?: boolean;
  invoker?: string;
  message?: string;
  pk?: string;
  prodCode?: string;
  success?: boolean;
  taskExtraData?: string;
  taskIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      country: 'Country',
      gmtWakeup: 'GmtWakeup',
      hid: 'Hid',
      interrupt: 'Interrupt',
      invoker: 'Invoker',
      message: 'Message',
      pk: 'Pk',
      prodCode: 'ProdCode',
      success: 'Success',
      taskExtraData: 'TaskExtraData',
      taskIdentifier: 'TaskIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'string',
      country: 'string',
      gmtWakeup: 'string',
      hid: 'number',
      interrupt: 'boolean',
      invoker: 'string',
      message: 'string',
      pk: 'string',
      prodCode: 'string',
      success: 'boolean',
      taskExtraData: 'string',
      taskIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePhysicalDeleteResponseBody extends $tea.Model {
  bid?: string;
  country?: string;
  gmtWakeup?: string;
  hid?: number;
  interrupt?: boolean;
  invoker?: string;
  message?: string;
  pk?: string;
  success?: boolean;
  taskExtraData?: string;
  taskIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      country: 'Country',
      gmtWakeup: 'GmtWakeup',
      hid: 'Hid',
      interrupt: 'Interrupt',
      invoker: 'Invoker',
      message: 'Message',
      pk: 'Pk',
      success: 'Success',
      taskExtraData: 'TaskExtraData',
      taskIdentifier: 'TaskIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'string',
      country: 'string',
      gmtWakeup: 'string',
      hid: 'number',
      interrupt: 'boolean',
      invoker: 'string',
      message: 'string',
      pk: 'string',
      success: 'boolean',
      taskExtraData: 'string',
      taskIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePhysicalDeleteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreatePhysicalDeleteResponseBody;
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
      body: CreatePhysicalDeleteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePoolInfoRequest extends $tea.Model {
  ownerId?: number;
  poolName?: string;
  prodCode?: string;
  resType?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      poolName: 'PoolName',
      prodCode: 'ProdCode',
      resType: 'ResType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      poolName: 'string',
      prodCode: 'string',
      resType: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePoolInfoResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePoolInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreatePoolInfoResponseBody;
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
      body: CreatePoolInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductRequest extends $tea.Model {
  ownerId?: number;
  prodCode?: string;
  prodId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      prodId: 'ProdId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      prodCode: 'string',
      prodId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateProductResponseBody;
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
      body: CreateProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRingToneRequest extends $tea.Model {
  billId?: string;
  fileKey?: string;
  ownerId?: number;
  playType?: string;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  ringName?: string;
  tts?: string;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      fileKey: 'FileKey',
      ownerId: 'OwnerId',
      playType: 'PlayType',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ringName: 'RingName',
      tts: 'Tts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      fileKey: 'string',
      ownerId: 'number',
      playType: 'string',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ringName: 'string',
      tts: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRingToneResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRingToneResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateRingToneResponseBody;
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
      body: CreateRingToneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubsTrialRequest extends $tea.Model {
  ownerId?: number;
  phoneA?: string;
  phoneB?: string;
  prodCode?: string;
  resType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      phoneA: 'PhoneA',
      phoneB: 'PhoneB',
      prodCode: 'ProdCode',
      resType: 'ResType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      phoneA: 'string',
      phoneB: 'string',
      prodCode: 'string',
      resType: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubsTrialResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubsTrialResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSubsTrialResponseBody;
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
      body: CreateSubsTrialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransferRecordRequest extends $tea.Model {
  city?: string;
  numberList?: string;
  originBillId?: string;
  originName?: string;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  targetBillId?: string;
  targetName?: string;
  total?: number;
  transferType?: number;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      numberList: 'NumberList',
      originBillId: 'OriginBillId',
      originName: 'OriginName',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      targetBillId: 'TargetBillId',
      targetName: 'TargetName',
      total: 'Total',
      transferType: 'TransferType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      numberList: 'string',
      originBillId: 'string',
      originName: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      targetBillId: 'string',
      targetName: 'string',
      total: 'number',
      transferType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransferRecordResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransferRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTransferRecordResponseBody;
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
      body: CreateTransferRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCertifyInfoRequest extends $tea.Model {
  certifyId?: string;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCertifyInfoResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCertifyInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteCertifyInfoResponseBody;
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
      body: DeleteCertifyInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContactsRequest extends $tea.Model {
  billId?: string;
  id?: number;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      id: 'Id',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      id: 'number',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContactsResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContactsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteContactsResponseBody;
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
      body: DeleteContactsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupDetailRequest extends $tea.Model {
  groupId?: string;
  idList?: string;
  ownerId?: number;
  poolKey?: string;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      idList: 'IdList',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      idList: 'string',
      ownerId: 'number',
      poolKey: 'string',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupDetailResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteGroupDetailResponseBody;
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
      body: DeleteGroupDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMessageCallbackRequest extends $tea.Model {
  bizType?: string;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMessageCallbackResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMessageCallbackResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteMessageCallbackResponseBody;
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
      body: DeleteMessageCallbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRingToneRequest extends $tea.Model {
  billId?: string;
  id?: string;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      id: 'Id',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      id: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRingToneResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRingToneResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteRingToneResponseBody;
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
      body: DeleteRingToneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadCompleteRequest extends $tea.Model {
  bizType?: string;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadCompleteResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadCompleteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DownloadCompleteResponseBody;
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
      body: DownloadCompleteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportResRequest extends $tea.Model {
  billId?: string;
  ownerId?: number;
  prodCode?: string;
  resBindStatus?: number;
  resType?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  secretNo?: string;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resBindStatus: 'ResBindStatus',
      resType: 'ResType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secretNo: 'SecretNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resBindStatus: 'number',
      resType: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secretNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportResResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportResResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ExportResResponseBody;
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
      body: ExportResResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEinvoicePdfDataRequest extends $tea.Model {
  appCode?: string;
  customer?: GetEinvoicePdfDataRequestCustomer;
  encryptProps?: { [key: string]: string };
  invoiceCode?: string;
  invoiceNo?: string;
  language?: string;
  sign?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      customer: 'Customer',
      encryptProps: 'EncryptProps',
      invoiceCode: 'InvoiceCode',
      invoiceNo: 'InvoiceNo',
      language: 'Language',
      sign: 'Sign',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      customer: GetEinvoicePdfDataRequestCustomer,
      encryptProps: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      invoiceCode: 'string',
      invoiceNo: 'string',
      language: 'string',
      sign: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEinvoicePdfDataResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  isSuccess?: boolean;
  returnValue?: GetEinvoicePdfDataResponseBodyReturnValue;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      isSuccess: 'IsSuccess',
      returnValue: 'ReturnValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      isSuccess: 'boolean',
      returnValue: GetEinvoicePdfDataResponseBodyReturnValue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEinvoicePdfDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetEinvoicePdfDataResponseBody;
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
      body: GetEinvoicePdfDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretAsrInfoRequest extends $tea.Model {
  callId?: string;
  callTime?: string;
  poolKey?: string;
  prodCode?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      callTime: 'CallTime',
      poolKey: 'PoolKey',
      prodCode: 'ProdCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      callTime: 'string',
      poolKey: 'string',
      prodCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretAsrInfoResponseBody extends $tea.Model {
  code?: string;
  data?: GetSecretAsrInfoResponseBodyData[];
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetSecretAsrInfoResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretAsrInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSecretAsrInfoResponseBody;
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
      body: GetSecretAsrInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResourceTagStatusRequest extends $tea.Model {
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceType?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResourceTagStatusResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResourceTagStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUserResourceTagStatusResponseBody;
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
      body: GetUserResourceTagStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsrLanguageModelsRequest extends $tea.Model {
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsrLanguageModelsResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsrLanguageModelsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAsrLanguageModelsResponseBody;
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
      body: ListAsrLanguageModelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockResourceRequest extends $tea.Model {
  billId?: string;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  secretNo?: string;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secretNo: 'SecretNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secretNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockResourceResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: LockResourceResponseBody;
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
      body: LockResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OccupySecretResRequest extends $tea.Model {
  city?: string;
  isDisplayPool?: boolean;
  noLike?: string;
  orderDetailId?: number;
  orderId?: number;
  ownerId?: number;
  partnerKey?: string;
  prodCode?: string;
  resType?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  secretNoType?: number;
  totalCount?: number;
  secretNo?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      isDisplayPool: 'IsDisplayPool',
      noLike: 'NoLike',
      orderDetailId: 'OrderDetailId',
      orderId: 'OrderId',
      ownerId: 'OwnerId',
      partnerKey: 'PartnerKey',
      prodCode: 'ProdCode',
      resType: 'ResType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secretNoType: 'SecretNoType',
      totalCount: 'TotalCount',
      secretNo: 'secretNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      isDisplayPool: 'boolean',
      noLike: 'string',
      orderDetailId: 'number',
      orderId: 'number',
      ownerId: 'number',
      partnerKey: 'string',
      prodCode: 'string',
      resType: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secretNoType: 'number',
      totalCount: 'number',
      secretNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OccupySecretResResponseBody extends $tea.Model {
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

export class OccupySecretResResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OccupySecretResResponseBody;
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
      body: OccupySecretResResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderSucceededCallbackRequest extends $tea.Model {
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderSucceededCallbackResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: string;
  synchro?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      synchro: 'Synchro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
      synchro: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderSucceededCallbackResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OrderSucceededCallbackResponseBody;
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
      body: OrderSucceededCallbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PoolConfigRequest extends $tea.Model {
  billId?: string;
  callbackType?: number;
  frozenDay?: number;
  needAllCallRecords?: boolean;
  openSmsWhite?: boolean;
  ownerId?: number;
  poolWarningLimit?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  selectXMode?: string;
  smartSmsWhitelist?: string;
  smsChannel?: string;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      callbackType: 'CallbackType',
      frozenDay: 'FrozenDay',
      needAllCallRecords: 'NeedAllCallRecords',
      openSmsWhite: 'OpenSmsWhite',
      ownerId: 'OwnerId',
      poolWarningLimit: 'PoolWarningLimit',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      selectXMode: 'SelectXMode',
      smartSmsWhitelist: 'SmartSmsWhitelist',
      smsChannel: 'SmsChannel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      callbackType: 'number',
      frozenDay: 'number',
      needAllCallRecords: 'boolean',
      openSmsWhite: 'boolean',
      ownerId: 'number',
      poolWarningLimit: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      selectXMode: 'string',
      smartSmsWhitelist: 'string',
      smsChannel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PoolConfigResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PoolConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PoolConfigResponseBody;
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
      body: PoolConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurchaseResourcesRequest extends $tea.Model {
  billId?: string;
  buyNumber?: number;
  isDisplayPool?: boolean;
  noLike?: string;
  ownerId?: number;
  prodCode?: string;
  regionName?: string;
  resType?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  specId?: number;
  usageScenarios?: string;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      buyNumber: 'BuyNumber',
      isDisplayPool: 'IsDisplayPool',
      noLike: 'NoLike',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      regionName: 'RegionName',
      resType: 'ResType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      specId: 'SpecId',
      usageScenarios: 'UsageScenarios',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      buyNumber: 'number',
      isDisplayPool: 'boolean',
      noLike: 'string',
      ownerId: 'number',
      prodCode: 'string',
      regionName: 'string',
      resType: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      specId: 'number',
      usageScenarios: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurchaseResourcesResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PurchaseResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PurchaseResourcesResponseBody;
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
      body: PurchaseResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBindingDetailsRequest extends $tea.Model {
  billId?: string;
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  phoneNoA?: string;
  phoneNoB?: string;
  prodCode?: string;
  resType?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  secretNo?: string;
  subId?: string;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      phoneNoA: 'PhoneNoA',
      phoneNoB: 'PhoneNoB',
      prodCode: 'ProdCode',
      resType: 'ResType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secretNo: 'SecretNo',
      subId: 'SubId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      phoneNoA: 'string',
      phoneNoB: 'string',
      prodCode: 'string',
      resType: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secretNo: 'string',
      subId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBindingDetailsResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBindingDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryBindingDetailsResponseBody;
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
      body: QueryBindingDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBlackListRequest extends $tea.Model {
  billId?: string;
  blackPrefix?: string;
  blackType?: string;
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      blackPrefix: 'BlackPrefix',
      blackType: 'BlackType',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      blackPrefix: 'string',
      blackType: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBlackListResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBlackListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryBlackListResponseBody;
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
      body: QueryBlackListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBuyPageInitDataRequest extends $tea.Model {
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBuyPageInitDataResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBuyPageInitDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryBuyPageInitDataResponseBody;
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
      body: QueryBuyPageInitDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBuyPageResCountRequest extends $tea.Model {
  city?: string;
  like?: string;
  ownerId?: number;
  prodCode?: string;
  resType?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  specId?: number;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      like: 'Like',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resType: 'ResType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      specId: 'SpecId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      like: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resType: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      specId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBuyPageResCountResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBuyPageResCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryBuyPageResCountResponseBody;
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
      body: QueryBuyPageResCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBuyPageResInfoRequest extends $tea.Model {
  like?: string;
  ownerId?: number;
  prodCode?: string;
  resType?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  specId?: number;
  static names(): { [key: string]: string } {
    return {
      like: 'Like',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resType: 'ResType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      specId: 'SpecId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      like: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resType: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      specId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBuyPageResInfoResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBuyPageResInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryBuyPageResInfoResponseBody;
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
      body: QueryBuyPageResInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBuyResInfoRequest extends $tea.Model {
  like?: string;
  ownerId?: number;
  prodCode?: string;
  resType?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  specId?: number;
  static names(): { [key: string]: string } {
    return {
      like: 'Like',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resType: 'ResType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      specId: 'SpecId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      like: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resType: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      specId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBuyResInfoResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBuyResInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryBuyResInfoResponseBody;
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
      body: QueryBuyResInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallRecordingListRequest extends $tea.Model {
  billId?: string;
  callDate?: string;
  callId?: string;
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  phoneNoA?: string;
  phoneNoB?: string;
  prodCode?: string;
  resType?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  secretNo?: string;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      callDate: 'CallDate',
      callId: 'CallId',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      phoneNoA: 'PhoneNoA',
      phoneNoB: 'PhoneNoB',
      prodCode: 'ProdCode',
      resType: 'ResType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secretNo: 'SecretNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      callDate: 'string',
      callId: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      phoneNoA: 'string',
      phoneNoB: 'string',
      prodCode: 'string',
      resType: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secretNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallRecordingListResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCallRecordingListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryCallRecordingListResponseBody;
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
      body: QueryCallRecordingListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCertifyInfoListRequest extends $tea.Model {
  certifyStatus?: string;
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  phoneNo?: string;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      certifyStatus: 'CertifyStatus',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      phoneNo: 'PhoneNo',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyStatus: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      phoneNo: 'string',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCertifyInfoListResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCertifyInfoListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryCertifyInfoListResponseBody;
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
      body: QueryCertifyInfoListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCertifyOverviewInfoRequest extends $tea.Model {
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCertifyOverviewInfoResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCertifyOverviewInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryCertifyOverviewInfoResponseBody;
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
      body: QueryCertifyOverviewInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContactsListRequest extends $tea.Model {
  billId?: string;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContactsListResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContactsListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryContactsListResponseBody;
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
      body: QueryContactsListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustInfoRequest extends $tea.Model {
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustInfoResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: QueryCustInfoResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: QueryCustInfoResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryCustInfoResponseBody;
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
      body: QueryCustInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDownloadUrlRequest extends $tea.Model {
  bizType?: string;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDownloadUrlResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDownloadUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryDownloadUrlResponseBody;
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
      body: QueryDownloadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEffectiveInvoiceListByBillNosRequest extends $tea.Model {
  appCode?: string;
  billNo?: string;
  encryptProps?: { [key: string]: string };
  language?: string;
  majorBillNo?: string;
  ouCode?: string;
  relatedSystem?: string;
  sign?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      billNo: 'BillNo',
      encryptProps: 'EncryptProps',
      language: 'Language',
      majorBillNo: 'MajorBillNo',
      ouCode: 'OuCode',
      relatedSystem: 'RelatedSystem',
      sign: 'Sign',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      billNo: 'string',
      encryptProps: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      language: 'string',
      majorBillNo: 'string',
      ouCode: 'string',
      relatedSystem: 'string',
      sign: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEffectiveInvoiceListByBillNosResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  isSuccess?: boolean;
  returnValue?: QueryEffectiveInvoiceListByBillNosResponseBodyReturnValue;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      isSuccess: 'IsSuccess',
      returnValue: 'ReturnValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      isSuccess: 'boolean',
      returnValue: QueryEffectiveInvoiceListByBillNosResponseBodyReturnValue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEffectiveInvoiceListByBillNosResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryEffectiveInvoiceListByBillNosResponseBody;
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
      body: QueryEffectiveInvoiceListByBillNosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExportResUrlRequest extends $tea.Model {
  billId?: string;
  ownerId?: number;
  prodCode?: string;
  resType?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resType: 'ResType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resType: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExportResUrlResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExportResUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryExportResUrlResponseBody;
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
      body: QueryExportResUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGroupDetailListRequest extends $tea.Model {
  groupId?: string;
  number?: string;
  ownerId?: number;
  pageNo?: string;
  pageSize?: string;
  poolKey?: string;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      number: 'Number',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      poolKey: 'PoolKey',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      number: 'string',
      ownerId: 'number',
      pageNo: 'string',
      pageSize: 'string',
      poolKey: 'string',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGroupDetailListResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGroupDetailListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryGroupDetailListResponseBody;
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
      body: QueryGroupDetailListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGroupInfoListRequest extends $tea.Model {
  ownerId?: number;
  pageNo?: string;
  pageSize?: string;
  poolKey?: string;
  prodCode?: string;
  queryKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      poolKey: 'PoolKey',
      prodCode: 'ProdCode',
      queryKey: 'QueryKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      pageNo: 'string',
      pageSize: 'string',
      poolKey: 'string',
      prodCode: 'string',
      queryKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGroupInfoListResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGroupInfoListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryGroupInfoListResponseBody;
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
      body: QueryGroupInfoListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvoiceInfoByRequestNoRequest extends $tea.Model {
  appCode?: string;
  encryptProps?: { [key: string]: string };
  language?: string;
  relatedSystem?: string;
  requestNo?: string;
  sign?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      encryptProps: 'EncryptProps',
      language: 'Language',
      relatedSystem: 'RelatedSystem',
      requestNo: 'RequestNo',
      sign: 'Sign',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      encryptProps: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      language: 'string',
      relatedSystem: 'string',
      requestNo: 'string',
      sign: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvoiceInfoByRequestNoResponseBody extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  isSuccess?: boolean;
  returnValue?: QueryInvoiceInfoByRequestNoResponseBodyReturnValue;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      isSuccess: 'IsSuccess',
      returnValue: 'ReturnValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      isSuccess: 'boolean',
      returnValue: QueryInvoiceInfoByRequestNoResponseBodyReturnValue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvoiceInfoByRequestNoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryInvoiceInfoByRequestNoResponseBody;
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
      body: QueryInvoiceInfoByRequestNoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMessageCallbackInfoRequest extends $tea.Model {
  bizType?: string;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMessageCallbackInfoResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMessageCallbackInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMessageCallbackInfoResponseBody;
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
      body: QueryMessageCallbackInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMessageQueueListRequest extends $tea.Model {
  bizType?: string;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMessageQueueListResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMessageQueueListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMessageQueueListResponseBody;
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
      body: QueryMessageQueueListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonthlyBillInfoRequest extends $tea.Model {
  billCycle?: string;
  itemId?: string;
  itemName?: string;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  subjectItemId?: string;
  static names(): { [key: string]: string } {
    return {
      billCycle: 'BillCycle',
      itemId: 'ItemId',
      itemName: 'ItemName',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subjectItemId: 'SubjectItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billCycle: 'string',
      itemId: 'string',
      itemName: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subjectItemId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonthlyBillInfoResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonthlyBillInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMonthlyBillInfoResponseBody;
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
      body: QueryMonthlyBillInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonthlyStatisticsInfoRequest extends $tea.Model {
  billId?: string;
  endDate?: string;
  ownerId?: number;
  prodCode?: string;
  resType?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      endDate: 'EndDate',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resType: 'ResType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      endDate: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resType: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonthlyStatisticsInfoResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonthlyStatisticsInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMonthlyStatisticsInfoResponseBody;
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
      body: QueryMonthlyStatisticsInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNoBuyTasksRequest extends $tea.Model {
  billId?: string;
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNoBuyTasksResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNoBuyTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryNoBuyTasksResponseBody;
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
      body: QueryNoBuyTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNoDistributeRequest extends $tea.Model {
  billId?: string;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNoDistributeResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNoDistributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryNoDistributeResponseBody;
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
      body: QueryNoDistributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOpenStatusRequest extends $tea.Model {
  busOffer?: number;
  ownerId?: number;
  prodCode?: string;
  prodId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      busOffer: 'BusOffer',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      prodId: 'ProdId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      busOffer: 'number',
      ownerId: 'number',
      prodCode: 'string',
      prodId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOpenStatusResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOpenStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryOpenStatusResponseBody;
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
      body: QueryOpenStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPackageDetailRequest extends $tea.Model {
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPackageDetailResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPackageDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryPackageDetailResponseBody;
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
      body: QueryPackageDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPackageListRequest extends $tea.Model {
  billCycle?: string;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      billCycle: 'BillCycle',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billCycle: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPackageListResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPackageListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryPackageListResponseBody;
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
      body: QueryPackageListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPackageStatisticsRequest extends $tea.Model {
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPackageStatisticsResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPackageStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryPackageStatisticsResponseBody;
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
      body: QueryPackageStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPoolCityListRequest extends $tea.Model {
  billId?: string;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPoolCityListResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPoolCityListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryPoolCityListResponseBody;
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
      body: QueryPoolCityListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPoolInfoListRequest extends $tea.Model {
  isFuzzyQuery?: boolean;
  ownerId?: number;
  pageNo?: string;
  pageSize?: string;
  poolName?: string;
  prodCode?: string;
  resType?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  searchParam?: string;
  static names(): { [key: string]: string } {
    return {
      isFuzzyQuery: 'IsFuzzyQuery',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      poolName: 'PoolName',
      prodCode: 'ProdCode',
      resType: 'ResType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      searchParam: 'SearchParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isFuzzyQuery: 'boolean',
      ownerId: 'number',
      pageNo: 'string',
      pageSize: 'string',
      poolName: 'string',
      prodCode: 'string',
      resType: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      searchParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPoolInfoListResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPoolInfoListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryPoolInfoListResponseBody;
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
      body: QueryPoolInfoListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPoolMonthlyBillInfoRequest extends $tea.Model {
  billCycle?: string;
  billId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      billCycle: 'BillCycle',
      billId: 'BillId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billCycle: 'string',
      billId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPoolMonthlyBillInfoResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPoolMonthlyBillInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryPoolMonthlyBillInfoResponseBody;
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
      body: QueryPoolMonthlyBillInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPoolStatisticsInfoRequest extends $tea.Model {
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPoolStatisticsInfoResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPoolStatisticsInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryPoolStatisticsInfoResponseBody;
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
      body: QueryPoolStatisticsInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPoolSummaryInfoRequest extends $tea.Model {
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPoolSummaryInfoResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPoolSummaryInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryPoolSummaryInfoResponseBody;
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
      body: QueryPoolSummaryInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPurchasedInfoRequest extends $tea.Model {
  billId?: string;
  ownerId?: number;
  prodCode?: string;
  resType?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resType: 'ResType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resType: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPurchasedInfoResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPurchasedInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryPurchasedInfoResponseBody;
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
      body: QueryPurchasedInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPurchasedResListRequest extends $tea.Model {
  billId?: string;
  city?: string;
  isDisplayPool?: boolean;
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  prodCode?: string;
  resBindStatus?: number;
  resType?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  secretNo?: string;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      city: 'City',
      isDisplayPool: 'IsDisplayPool',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      prodCode: 'ProdCode',
      resBindStatus: 'ResBindStatus',
      resType: 'ResType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secretNo: 'SecretNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      city: 'string',
      isDisplayPool: 'boolean',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      prodCode: 'string',
      resBindStatus: 'number',
      resType: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secretNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPurchasedResListResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPurchasedResListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryPurchasedResListResponseBody;
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
      body: QueryPurchasedResListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryQRCodeInfoRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  secretNumber?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secretNumber: 'SecretNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secretNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryQRCodeInfoResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryQRCodeInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryQRCodeInfoResponseBody;
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
      body: QueryQRCodeInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordingUrlRequest extends $tea.Model {
  billId?: string;
  callDate?: string;
  callId?: string;
  ownerId?: number;
  prodCode?: string;
  resType?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      callDate: 'CallDate',
      callId: 'CallId',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resType: 'ResType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      callDate: 'string',
      callId: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resType: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordingUrlResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordingUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryRecordingUrlResponseBody;
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
      body: QueryRecordingUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResSummaryInfoRequest extends $tea.Model {
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResSummaryInfoResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResSummaryInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryResSummaryInfoResponseBody;
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
      body: QueryResSummaryInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRingToneUrlRequest extends $tea.Model {
  billId?: string;
  fileKey?: string;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      fileKey: 'FileKey',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      fileKey: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRingToneUrlResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRingToneUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryRingToneUrlResponseBody;
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
      body: QueryRingToneUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRingTonesRequest extends $tea.Model {
  billId?: string;
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  playType?: string;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      playType: 'PlayType',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      playType: 'string',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRingTonesResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRingTonesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryRingTonesResponseBody;
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
      body: QueryRingTonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySimplePoolInfoListRequest extends $tea.Model {
  ownerId?: number;
  poolName?: string;
  prodCode?: string;
  resType?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      poolName: 'PoolName',
      prodCode: 'ProdCode',
      resType: 'ResType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      poolName: 'string',
      prodCode: 'string',
      resType: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySimplePoolInfoListResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySimplePoolInfoListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QuerySimplePoolInfoListResponseBody;
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
      body: QuerySimplePoolInfoListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStatisticsInfoRequest extends $tea.Model {
  billId?: string;
  endDate?: string;
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  prodCode?: string;
  resType?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      endDate: 'EndDate',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      prodCode: 'ProdCode',
      resType: 'ResType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      endDate: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      prodCode: 'string',
      resType: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStatisticsInfoResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStatisticsInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryStatisticsInfoResponseBody;
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
      body: QueryStatisticsInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagOpenStatusRequest extends $tea.Model {
  attributeKey?: string;
  bizType?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  subAttributeKey?: string;
  static names(): { [key: string]: string } {
    return {
      attributeKey: 'AttributeKey',
      bizType: 'BizType',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subAttributeKey: 'SubAttributeKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeKey: 'string',
      bizType: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subAttributeKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagOpenStatusResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagOpenStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTagOpenStatusResponseBody;
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
      body: QueryTagOpenStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTransferDetailsRequest extends $tea.Model {
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  prodCode?: string;
  recordId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      prodCode: 'ProdCode',
      recordId: 'RecordId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      prodCode: 'string',
      recordId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTransferDetailsResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTransferDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTransferDetailsResponseBody;
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
      body: QueryTransferDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTransferRecordRequest extends $tea.Model {
  ownerId?: number;
  prodCode?: string;
  recordId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      recordId: 'RecordId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      prodCode: 'string',
      recordId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTransferRecordResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTransferRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTransferRecordResponseBody;
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
      body: QueryTransferRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTransferRecordsRequest extends $tea.Model {
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  prodCode?: string;
  recordId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      prodCode: 'ProdCode',
      recordId: 'RecordId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      prodCode: 'string',
      recordId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTransferRecordsResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTransferRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTransferRecordsResponseBody;
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
      body: QueryTransferRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserDeleteStatusRequest extends $tea.Model {
  bid?: string;
  country?: string;
  gmtWakeup?: string;
  hid?: number;
  interrupt?: boolean;
  invoker?: string;
  level?: number;
  message?: string;
  pk?: string;
  prodCode?: string;
  prompt?: string;
  success?: boolean;
  taskExtraData?: string;
  taskIdentifier?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      country: 'Country',
      gmtWakeup: 'GmtWakeup',
      hid: 'Hid',
      interrupt: 'Interrupt',
      invoker: 'Invoker',
      level: 'Level',
      message: 'Message',
      pk: 'Pk',
      prodCode: 'ProdCode',
      prompt: 'Prompt',
      success: 'Success',
      taskExtraData: 'TaskExtraData',
      taskIdentifier: 'TaskIdentifier',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'string',
      country: 'string',
      gmtWakeup: 'string',
      hid: 'number',
      interrupt: 'boolean',
      invoker: 'string',
      level: 'number',
      message: 'string',
      pk: 'string',
      prodCode: 'string',
      prompt: 'string',
      success: 'boolean',
      taskExtraData: 'string',
      taskIdentifier: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserDeleteStatusResponseBody extends $tea.Model {
  bid?: string;
  country?: string;
  gmtWakeup?: string;
  hid?: number;
  interrupt?: boolean;
  invoker?: string;
  level?: number;
  message?: string;
  pk?: string;
  prompt?: string;
  success?: boolean;
  taskExtraData?: string;
  taskIdentifier?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      country: 'Country',
      gmtWakeup: 'GmtWakeup',
      hid: 'Hid',
      interrupt: 'Interrupt',
      invoker: 'Invoker',
      level: 'Level',
      message: 'Message',
      pk: 'Pk',
      prompt: 'Prompt',
      success: 'Success',
      taskExtraData: 'TaskExtraData',
      taskIdentifier: 'TaskIdentifier',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'string',
      country: 'string',
      gmtWakeup: 'string',
      hid: 'number',
      interrupt: 'boolean',
      invoker: 'string',
      level: 'number',
      message: 'string',
      pk: 'string',
      prompt: 'string',
      success: 'boolean',
      taskExtraData: 'string',
      taskIdentifier: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserDeleteStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryUserDeleteStatusResponseBody;
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
      body: QueryUserDeleteStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserInfoRequest extends $tea.Model {
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserInfoResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryUserInfoResponseBody;
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
      body: QueryUserInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserResPoolInfoRequest extends $tea.Model {
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserResPoolInfoResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserResPoolInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryUserResPoolInfoResponseBody;
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
      body: QueryUserResPoolInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVirtualOperationShowRequest extends $tea.Model {
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVirtualOperationShowResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVirtualOperationShowResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryVirtualOperationShowResponseBody;
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
      body: QueryVirtualOperationShowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWarningListRequest extends $tea.Model {
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWarningListResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWarningListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryWarningListResponseBody;
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
      body: QueryWarningListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWaybillOrderInfoRequest extends $tea.Model {
  outerOrderCode?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      outerOrderCode: 'OuterOrderCode',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outerOrderCode: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWaybillOrderInfoResponseBody extends $tea.Model {
  code?: string;
  data?: QueryWaybillOrderInfoResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryWaybillOrderInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWaybillOrderInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryWaybillOrderInfoResponseBody;
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
      body: QueryWaybillOrderInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWaybillOrderStatisticsInfoRequest extends $tea.Model {
  endTime?: string;
  granularity?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      granularity: 'Granularity',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      granularity: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWaybillOrderStatisticsInfoResponseBody extends $tea.Model {
  code?: string;
  data?: QueryWaybillOrderStatisticsInfoResponseBodyData[];
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': QueryWaybillOrderStatisticsInfoResponseBodyData },
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWaybillOrderStatisticsInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryWaybillOrderStatisticsInfoResponseBody;
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
      body: QueryWaybillOrderStatisticsInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseResourceRequest extends $tea.Model {
  billId?: string;
  isDisplayPool?: boolean;
  ownerId?: number;
  prodCode?: string;
  resType?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  secretNo?: string;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      isDisplayPool: 'IsDisplayPool',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resType: 'ResType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secretNo: 'SecretNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      isDisplayPool: 'boolean',
      ownerId: 'number',
      prodCode: 'string',
      resType: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secretNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseResourceResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReleaseResourceResponseBody;
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
      body: ReleaseResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestTtsRingToneRequest extends $tea.Model {
  billId?: string;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tts?: string;
  voiceSpeed?: string;
  voiceStyle?: string;
  voiceType?: string;
  voiceVolume?: string;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tts: 'Tts',
      voiceSpeed: 'VoiceSpeed',
      voiceStyle: 'VoiceStyle',
      voiceType: 'VoiceType',
      voiceVolume: 'VoiceVolume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tts: 'string',
      voiceSpeed: 'string',
      voiceStyle: 'string',
      voiceType: 'string',
      voiceVolume: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestTtsRingToneResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestTtsRingToneResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TestTtsRingToneResponseBody;
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
      body: TestTtsRingToneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindResourceRequest extends $tea.Model {
  billId?: string;
  bindIds?: string;
  ownerId?: number;
  prodCode?: string;
  resType?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  secretNo?: string;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      bindIds: 'BindIds',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resType: 'ResType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secretNo: 'SecretNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      bindIds: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resType: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secretNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindResourceResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnbindResourceResponseBody;
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
      body: UnbindResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockResourceRequest extends $tea.Model {
  billId?: string;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  secretNo?: string;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secretNo: 'SecretNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secretNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockResourceResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnlockResourceResponseBody;
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
      body: UnlockResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContactsRequest extends $tea.Model {
  billId?: string;
  id?: number;
  name?: string;
  ownerId?: number;
  phoneNumber?: string;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      id: 'Id',
      name: 'Name',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      id: 'number',
      name: 'string',
      ownerId: 'number',
      phoneNumber: 'string',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContactsResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContactsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateContactsResponseBody;
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
      body: UpdateContactsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupDetailRequest extends $tea.Model {
  groupId?: string;
  id?: string;
  ownerId?: number;
  poolKey?: string;
  prodCode?: string;
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      id: 'Id',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      prodCode: 'ProdCode',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      id: 'string',
      ownerId: 'number',
      poolKey: 'string',
      prodCode: 'string',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupDetailResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateGroupDetailResponseBody;
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
      body: UpdateGroupDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupInfoRequest extends $tea.Model {
  id?: string;
  name?: string;
  ownerId?: number;
  poolKey?: string;
  prodCode?: string;
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      prodCode: 'ProdCode',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      ownerId: 'number',
      poolKey: 'string',
      prodCode: 'string',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupInfoResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateGroupInfoResponseBody;
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
      body: UpdateGroupInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePoolNameRequest extends $tea.Model {
  billId?: string;
  ownerId?: number;
  poolName?: string;
  prodCode?: string;
  resType?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      ownerId: 'OwnerId',
      poolName: 'PoolName',
      prodCode: 'ProdCode',
      resType: 'ResType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      ownerId: 'number',
      poolName: 'string',
      prodCode: 'string',
      resType: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePoolNameResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePoolNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdatePoolNameResponseBody;
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
      body: UpdatePoolNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResRemarkRequest extends $tea.Model {
  billId?: string;
  ownerId?: number;
  prodCode?: string;
  remark?: string;
  resType?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  secretNo?: string;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      remark: 'Remark',
      resType: 'ResType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secretNo: 'SecretNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      ownerId: 'number',
      prodCode: 'string',
      remark: 'string',
      resType: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secretNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResRemarkResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResRemarkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateResRemarkResponseBody;
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
      body: UpdateResRemarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateOrderRequest extends $tea.Model {
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateOrderResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: string;
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
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ValidateOrderResponseBody;
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
      body: ValidateOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyArInvoiceWithSourceRequestAddressCustomer extends $tea.Model {
  appCode?: string;
  customerId?: string;
  customerSite?: string;
  customerSystem?: string;
  encryptProps?: { [key: string]: string };
  language?: string;
  sign?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      customerId: 'CustomerId',
      customerSite: 'CustomerSite',
      customerSystem: 'CustomerSystem',
      encryptProps: 'EncryptProps',
      language: 'Language',
      sign: 'Sign',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      customerId: 'string',
      customerSite: 'string',
      customerSystem: 'string',
      encryptProps: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      language: 'string',
      sign: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyArInvoiceWithSourceRequestAddress extends $tea.Model {
  addressId?: string;
  appCode?: string;
  city?: string;
  country?: string;
  creator?: string;
  customer?: ApplyArInvoiceWithSourceRequestAddressCustomer;
  detailedAddress?: string;
  district?: string;
  encryptProps?: { [key: string]: string };
  fixedNumber?: string;
  fullAddress?: string;
  isDefault?: boolean;
  isEffective?: boolean;
  language?: string;
  mobileNumber?: string;
  province?: string;
  recipientName?: string;
  relatedId?: string;
  relatedSystem?: string;
  sign?: string;
  street?: string;
  uuid?: string;
  zipCode?: string;
  static names(): { [key: string]: string } {
    return {
      addressId: 'AddressId',
      appCode: 'AppCode',
      city: 'City',
      country: 'Country',
      creator: 'Creator',
      customer: 'Customer',
      detailedAddress: 'DetailedAddress',
      district: 'District',
      encryptProps: 'EncryptProps',
      fixedNumber: 'FixedNumber',
      fullAddress: 'FullAddress',
      isDefault: 'IsDefault',
      isEffective: 'IsEffective',
      language: 'Language',
      mobileNumber: 'MobileNumber',
      province: 'Province',
      recipientName: 'RecipientName',
      relatedId: 'RelatedId',
      relatedSystem: 'RelatedSystem',
      sign: 'Sign',
      street: 'Street',
      uuid: 'Uuid',
      zipCode: 'ZipCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressId: 'string',
      appCode: 'string',
      city: 'string',
      country: 'string',
      creator: 'string',
      customer: ApplyArInvoiceWithSourceRequestAddressCustomer,
      detailedAddress: 'string',
      district: 'string',
      encryptProps: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      fixedNumber: 'string',
      fullAddress: 'string',
      isDefault: 'boolean',
      isEffective: 'boolean',
      language: 'string',
      mobileNumber: 'string',
      province: 'string',
      recipientName: 'string',
      relatedId: 'string',
      relatedSystem: 'string',
      sign: 'string',
      street: 'string',
      uuid: 'string',
      zipCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyArInvoiceWithSourceRequestCustomer extends $tea.Model {
  appCode?: string;
  customerId?: string;
  customerSite?: string;
  customerSystem?: string;
  encryptProps?: { [key: string]: string };
  language?: string;
  sign?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      customerId: 'CustomerId',
      customerSite: 'CustomerSite',
      customerSystem: 'CustomerSystem',
      encryptProps: 'EncryptProps',
      language: 'Language',
      sign: 'Sign',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      customerId: 'string',
      customerSite: 'string',
      customerSystem: 'string',
      encryptProps: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      language: 'string',
      sign: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyArInvoiceWithSourceRequestSourceListCustomer extends $tea.Model {
  appCode?: string;
  customerId?: string;
  customerSite?: string;
  customerSystem?: string;
  encryptProps?: { [key: string]: string };
  language?: string;
  sign?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      customerId: 'CustomerId',
      customerSite: 'CustomerSite',
      customerSystem: 'CustomerSystem',
      encryptProps: 'EncryptProps',
      language: 'Language',
      sign: 'Sign',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      customerId: 'string',
      customerSite: 'string',
      customerSystem: 'string',
      encryptProps: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      language: 'string',
      sign: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyArInvoiceWithSourceRequestSourceList extends $tea.Model {
  amount?: number;
  appCode?: string;
  billAmount?: number;
  billDomain?: string;
  billNo?: string;
  billType?: string;
  blueSourceId?: number;
  canMerge?: boolean;
  cargoName?: string;
  category?: string;
  companyName?: string;
  currencyCode?: string;
  customer?: ApplyArInvoiceWithSourceRequestSourceListCustomer;
  discountAmount?: number;
  discountTaxAmount?: number;
  encryptProps?: { [key: string]: string };
  excludingTaxAmount?: number;
  excludingTaxDiscountAmount?: number;
  excludingTaxRedAmount?: number;
  excludingTaxRemainAmount?: number;
  gmtBill?: string;
  gmtBillEnd?: string;
  gmtBillStart?: string;
  gmtBuild?: string;
  isApply?: string;
  language?: string;
  majorBillNo?: string;
  model?: string;
  ouCode?: string;
  parentCategory?: string;
  productDomain?: string;
  productId?: string;
  productName?: string;
  quantity?: number;
  quantityUnit?: string;
  redAmount?: number;
  relatedId?: string;
  remainAmount?: number;
  revenueType?: string;
  serviceName?: string;
  sign?: string;
  siteId?: string;
  sourceId?: number;
  taxAmount?: number;
  taxRate?: number;
  unitPrice?: number;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      appCode: 'AppCode',
      billAmount: 'BillAmount',
      billDomain: 'BillDomain',
      billNo: 'BillNo',
      billType: 'BillType',
      blueSourceId: 'BlueSourceId',
      canMerge: 'CanMerge',
      cargoName: 'CargoName',
      category: 'Category',
      companyName: 'CompanyName',
      currencyCode: 'CurrencyCode',
      customer: 'Customer',
      discountAmount: 'DiscountAmount',
      discountTaxAmount: 'DiscountTaxAmount',
      encryptProps: 'EncryptProps',
      excludingTaxAmount: 'ExcludingTaxAmount',
      excludingTaxDiscountAmount: 'ExcludingTaxDiscountAmount',
      excludingTaxRedAmount: 'ExcludingTaxRedAmount',
      excludingTaxRemainAmount: 'ExcludingTaxRemainAmount',
      gmtBill: 'GmtBill',
      gmtBillEnd: 'GmtBillEnd',
      gmtBillStart: 'GmtBillStart',
      gmtBuild: 'GmtBuild',
      isApply: 'IsApply',
      language: 'Language',
      majorBillNo: 'MajorBillNo',
      model: 'Model',
      ouCode: 'OuCode',
      parentCategory: 'ParentCategory',
      productDomain: 'ProductDomain',
      productId: 'ProductId',
      productName: 'ProductName',
      quantity: 'Quantity',
      quantityUnit: 'QuantityUnit',
      redAmount: 'RedAmount',
      relatedId: 'RelatedId',
      remainAmount: 'RemainAmount',
      revenueType: 'RevenueType',
      serviceName: 'ServiceName',
      sign: 'Sign',
      siteId: 'SiteId',
      sourceId: 'SourceId',
      taxAmount: 'TaxAmount',
      taxRate: 'TaxRate',
      unitPrice: 'UnitPrice',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      appCode: 'string',
      billAmount: 'number',
      billDomain: 'string',
      billNo: 'string',
      billType: 'string',
      blueSourceId: 'number',
      canMerge: 'boolean',
      cargoName: 'string',
      category: 'string',
      companyName: 'string',
      currencyCode: 'string',
      customer: ApplyArInvoiceWithSourceRequestSourceListCustomer,
      discountAmount: 'number',
      discountTaxAmount: 'number',
      encryptProps: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      excludingTaxAmount: 'number',
      excludingTaxDiscountAmount: 'number',
      excludingTaxRedAmount: 'number',
      excludingTaxRemainAmount: 'number',
      gmtBill: 'string',
      gmtBillEnd: 'string',
      gmtBillStart: 'string',
      gmtBuild: 'string',
      isApply: 'string',
      language: 'string',
      majorBillNo: 'string',
      model: 'string',
      ouCode: 'string',
      parentCategory: 'string',
      productDomain: 'string',
      productId: 'string',
      productName: 'string',
      quantity: 'number',
      quantityUnit: 'string',
      redAmount: 'number',
      relatedId: 'string',
      remainAmount: 'number',
      revenueType: 'string',
      serviceName: 'string',
      sign: 'string',
      siteId: 'string',
      sourceId: 'number',
      taxAmount: 'number',
      taxRate: 'number',
      unitPrice: 'number',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyArInvoiceWithSourceResponseBodyReturnValue extends $tea.Model {
  encryptProps?: { [key: string]: string };
  outerSystemEncryptStr?: string;
  outerSystemSignStr?: string;
  sign?: string;
  static names(): { [key: string]: string } {
    return {
      encryptProps: 'EncryptProps',
      outerSystemEncryptStr: 'OuterSystemEncryptStr',
      outerSystemSignStr: 'OuterSystemSignStr',
      sign: 'Sign',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptProps: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      outerSystemEncryptStr: 'string',
      outerSystemSignStr: 'string',
      sign: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchOccupySecretResRequestBatchOccupyList extends $tea.Model {
  count?: number;
  orderDetailId?: number;
  orderId?: number;
  partnerKey?: string;
  resType?: number;
  secretNoType?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      orderDetailId: 'OrderDetailId',
      orderId: 'OrderId',
      partnerKey: 'PartnerKey',
      resType: 'ResType',
      secretNoType: 'SecretNoType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      orderDetailId: 'number',
      orderId: 'number',
      partnerKey: 'string',
      resType: 'number',
      secretNoType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEinvoicePdfDataRequestCustomer extends $tea.Model {
  appCode?: string;
  customerId?: string;
  customerSite?: string;
  customerSystem?: string;
  encryptProps?: { [key: string]: string };
  language?: string;
  sign?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      customerId: 'CustomerId',
      customerSite: 'CustomerSite',
      customerSystem: 'CustomerSystem',
      encryptProps: 'EncryptProps',
      language: 'Language',
      sign: 'Sign',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      customerId: 'string',
      customerSite: 'string',
      customerSystem: 'string',
      encryptProps: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      language: 'string',
      sign: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEinvoicePdfDataResponseBodyReturnValue extends $tea.Model {
  appCode?: string;
  EInvoiceData?: number[];
  encryptProps?: { [key: string]: string };
  invoiceCode?: string;
  invoiceNo?: string;
  language?: string;
  sign?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      EInvoiceData: 'EInvoiceData',
      encryptProps: 'EncryptProps',
      invoiceCode: 'InvoiceCode',
      invoiceNo: 'InvoiceNo',
      language: 'Language',
      sign: 'Sign',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      EInvoiceData: { 'type': 'array', 'itemType': 'number' },
      encryptProps: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      invoiceCode: 'string',
      invoiceNo: 'string',
      language: 'string',
      sign: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretAsrInfoResponseBodyData extends $tea.Model {
  channel?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustInfoResponseBodyData extends $tea.Model {
  certifyType?: number;
  contactPhone?: string;
  custId?: number;
  custName?: string;
  isDayuCustomer?: boolean;
  osStatus?: number;
  partnerId?: number;
  userTag?: number;
  userTag2?: number;
  static names(): { [key: string]: string } {
    return {
      certifyType: 'CertifyType',
      contactPhone: 'ContactPhone',
      custId: 'CustId',
      custName: 'CustName',
      isDayuCustomer: 'IsDayuCustomer',
      osStatus: 'OsStatus',
      partnerId: 'PartnerId',
      userTag: 'UserTag',
      userTag2: 'UserTag2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyType: 'number',
      contactPhone: 'string',
      custId: 'number',
      custName: 'string',
      isDayuCustomer: 'boolean',
      osStatus: 'number',
      partnerId: 'number',
      userTag: 'number',
      userTag2: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEffectiveInvoiceListByBillNosResponseBodyReturnValueList extends $tea.Model {
  aliCompany?: string;
  aliId?: number;
  amount?: number;
  appCode?: string;
  buildAmount?: number;
  category?: string;
  encryptProps?: { [key: string]: string };
  invoiceNo?: string;
  invoiceStatus?: string;
  invoiceTitle?: string;
  language?: string;
  orderItemNo?: string;
  parentContractNo?: string;
  sign?: string;
  site?: string;
  taxRegisgerNo?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      aliCompany: 'AliCompany',
      aliId: 'AliId',
      amount: 'Amount',
      appCode: 'AppCode',
      buildAmount: 'BuildAmount',
      category: 'Category',
      encryptProps: 'EncryptProps',
      invoiceNo: 'InvoiceNo',
      invoiceStatus: 'InvoiceStatus',
      invoiceTitle: 'InvoiceTitle',
      language: 'Language',
      orderItemNo: 'OrderItemNo',
      parentContractNo: 'ParentContractNo',
      sign: 'Sign',
      site: 'Site',
      taxRegisgerNo: 'TaxRegisgerNo',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliCompany: 'string',
      aliId: 'number',
      amount: 'number',
      appCode: 'string',
      buildAmount: 'number',
      category: 'string',
      encryptProps: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      invoiceNo: 'string',
      invoiceStatus: 'string',
      invoiceTitle: 'string',
      language: 'string',
      orderItemNo: 'string',
      parentContractNo: 'string',
      sign: 'string',
      site: 'string',
      taxRegisgerNo: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEffectiveInvoiceListByBillNosResponseBodyReturnValue extends $tea.Model {
  encryptProps?: { [key: string]: string };
  list?: QueryEffectiveInvoiceListByBillNosResponseBodyReturnValueList[];
  sign?: string;
  static names(): { [key: string]: string } {
    return {
      encryptProps: 'EncryptProps',
      list: 'List',
      sign: 'Sign',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptProps: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      list: { 'type': 'array', 'itemType': QueryEffectiveInvoiceListByBillNosResponseBodyReturnValueList },
      sign: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvoiceInfoByRequestNoResponseBodyReturnValueListCustomer extends $tea.Model {
  appCode?: string;
  customerId?: string;
  customerSite?: string;
  customerSystem?: string;
  encryptProps?: { [key: string]: string };
  language?: string;
  sign?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      customerId: 'CustomerId',
      customerSite: 'CustomerSite',
      customerSystem: 'CustomerSystem',
      encryptProps: 'EncryptProps',
      language: 'Language',
      sign: 'Sign',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      customerId: 'string',
      customerSite: 'string',
      customerSystem: 'string',
      encryptProps: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      language: 'string',
      sign: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvoiceInfoByRequestNoResponseBodyReturnValueListDetailListSourceListCustomer extends $tea.Model {
  appCode?: string;
  customerId?: string;
  customerSite?: string;
  customerSystem?: string;
  encryptProps?: { [key: string]: string };
  language?: string;
  sign?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      customerId: 'CustomerId',
      customerSite: 'CustomerSite',
      customerSystem: 'CustomerSystem',
      encryptProps: 'EncryptProps',
      language: 'Language',
      sign: 'Sign',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      customerId: 'string',
      customerSite: 'string',
      customerSystem: 'string',
      encryptProps: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      language: 'string',
      sign: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvoiceInfoByRequestNoResponseBodyReturnValueListDetailListSourceList extends $tea.Model {
  amount?: number;
  appCode?: string;
  billAmount?: number;
  billDomain?: string;
  billNo?: string;
  billType?: string;
  blueSourceId?: number;
  canMerge?: boolean;
  cargoName?: string;
  category?: string;
  companyName?: string;
  currencyCode?: string;
  customer?: QueryInvoiceInfoByRequestNoResponseBodyReturnValueListDetailListSourceListCustomer;
  discountAmount?: number;
  discountTaxAmount?: number;
  encryptProps?: { [key: string]: string };
  excludingTaxAmount?: number;
  excludingTaxDiscountAmount?: number;
  excludingTaxRedAmount?: number;
  excludingTaxRemainAmount?: number;
  gmtBill?: string;
  gmtBillEnd?: string;
  gmtBillStart?: string;
  gmtBuild?: string;
  isApply?: string;
  language?: string;
  majorBillNo?: string;
  model?: string;
  ouCode?: string;
  parentCategory?: string;
  productDomain?: string;
  productId?: string;
  productName?: string;
  quantity?: number;
  quantityUnit?: string;
  redAmount?: number;
  relatedId?: string;
  remainAmount?: number;
  revenueType?: string;
  serviceName?: string;
  sign?: string;
  siteId?: string;
  sourceId?: number;
  taxAmount?: number;
  taxRate?: number;
  unitPrice?: number;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      appCode: 'AppCode',
      billAmount: 'BillAmount',
      billDomain: 'BillDomain',
      billNo: 'BillNo',
      billType: 'BillType',
      blueSourceId: 'BlueSourceId',
      canMerge: 'CanMerge',
      cargoName: 'CargoName',
      category: 'Category',
      companyName: 'CompanyName',
      currencyCode: 'CurrencyCode',
      customer: 'Customer',
      discountAmount: 'DiscountAmount',
      discountTaxAmount: 'DiscountTaxAmount',
      encryptProps: 'EncryptProps',
      excludingTaxAmount: 'ExcludingTaxAmount',
      excludingTaxDiscountAmount: 'ExcludingTaxDiscountAmount',
      excludingTaxRedAmount: 'ExcludingTaxRedAmount',
      excludingTaxRemainAmount: 'ExcludingTaxRemainAmount',
      gmtBill: 'GmtBill',
      gmtBillEnd: 'GmtBillEnd',
      gmtBillStart: 'GmtBillStart',
      gmtBuild: 'GmtBuild',
      isApply: 'IsApply',
      language: 'Language',
      majorBillNo: 'MajorBillNo',
      model: 'Model',
      ouCode: 'OuCode',
      parentCategory: 'ParentCategory',
      productDomain: 'ProductDomain',
      productId: 'ProductId',
      productName: 'ProductName',
      quantity: 'Quantity',
      quantityUnit: 'QuantityUnit',
      redAmount: 'RedAmount',
      relatedId: 'RelatedId',
      remainAmount: 'RemainAmount',
      revenueType: 'RevenueType',
      serviceName: 'ServiceName',
      sign: 'Sign',
      siteId: 'SiteId',
      sourceId: 'SourceId',
      taxAmount: 'TaxAmount',
      taxRate: 'TaxRate',
      unitPrice: 'UnitPrice',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      appCode: 'string',
      billAmount: 'number',
      billDomain: 'string',
      billNo: 'string',
      billType: 'string',
      blueSourceId: 'number',
      canMerge: 'boolean',
      cargoName: 'string',
      category: 'string',
      companyName: 'string',
      currencyCode: 'string',
      customer: QueryInvoiceInfoByRequestNoResponseBodyReturnValueListDetailListSourceListCustomer,
      discountAmount: 'number',
      discountTaxAmount: 'number',
      encryptProps: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      excludingTaxAmount: 'number',
      excludingTaxDiscountAmount: 'number',
      excludingTaxRedAmount: 'number',
      excludingTaxRemainAmount: 'number',
      gmtBill: 'string',
      gmtBillEnd: 'string',
      gmtBillStart: 'string',
      gmtBuild: 'string',
      isApply: 'string',
      language: 'string',
      majorBillNo: 'string',
      model: 'string',
      ouCode: 'string',
      parentCategory: 'string',
      productDomain: 'string',
      productId: 'string',
      productName: 'string',
      quantity: 'number',
      quantityUnit: 'string',
      redAmount: 'number',
      relatedId: 'string',
      remainAmount: 'number',
      revenueType: 'string',
      serviceName: 'string',
      sign: 'string',
      siteId: 'string',
      sourceId: 'number',
      taxAmount: 'number',
      taxRate: 'number',
      unitPrice: 'number',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvoiceInfoByRequestNoResponseBodyReturnValueListDetailList extends $tea.Model {
  amount?: number;
  appCode?: string;
  cargoName?: string;
  discountAmount?: number;
  discountTaxAmount?: number;
  encryptProps?: { [key: string]: string };
  excludingTaxAmount?: number;
  excludingTaxDiscountAmount?: number;
  excludingTaxRedAmount?: number;
  excludingTaxRemainAmount?: number;
  excludingTaxUnitPrice?: number;
  invoiceDetailId?: number;
  language?: string;
  model?: string;
  quantity?: number;
  quantityUnit?: string;
  redAmount?: number;
  relatedId?: string;
  remainAmount?: number;
  sign?: string;
  sourceList?: QueryInvoiceInfoByRequestNoResponseBodyReturnValueListDetailListSourceList[];
  taxAmount?: number;
  taxRate?: number;
  unitPrice?: number;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      appCode: 'AppCode',
      cargoName: 'CargoName',
      discountAmount: 'DiscountAmount',
      discountTaxAmount: 'DiscountTaxAmount',
      encryptProps: 'EncryptProps',
      excludingTaxAmount: 'ExcludingTaxAmount',
      excludingTaxDiscountAmount: 'ExcludingTaxDiscountAmount',
      excludingTaxRedAmount: 'ExcludingTaxRedAmount',
      excludingTaxRemainAmount: 'ExcludingTaxRemainAmount',
      excludingTaxUnitPrice: 'ExcludingTaxUnitPrice',
      invoiceDetailId: 'InvoiceDetailId',
      language: 'Language',
      model: 'Model',
      quantity: 'Quantity',
      quantityUnit: 'QuantityUnit',
      redAmount: 'RedAmount',
      relatedId: 'RelatedId',
      remainAmount: 'RemainAmount',
      sign: 'Sign',
      sourceList: 'SourceList',
      taxAmount: 'TaxAmount',
      taxRate: 'TaxRate',
      unitPrice: 'UnitPrice',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      appCode: 'string',
      cargoName: 'string',
      discountAmount: 'number',
      discountTaxAmount: 'number',
      encryptProps: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      excludingTaxAmount: 'number',
      excludingTaxDiscountAmount: 'number',
      excludingTaxRedAmount: 'number',
      excludingTaxRemainAmount: 'number',
      excludingTaxUnitPrice: 'number',
      invoiceDetailId: 'number',
      language: 'string',
      model: 'string',
      quantity: 'number',
      quantityUnit: 'string',
      redAmount: 'number',
      relatedId: 'string',
      remainAmount: 'number',
      sign: 'string',
      sourceList: { 'type': 'array', 'itemType': QueryInvoiceInfoByRequestNoResponseBodyReturnValueListDetailListSourceList },
      taxAmount: 'number',
      taxRate: 'number',
      unitPrice: 'number',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvoiceInfoByRequestNoResponseBodyReturnValueListLogisticsInfoCustomer extends $tea.Model {
  appCode?: string;
  customerId?: string;
  customerSite?: string;
  customerSystem?: string;
  encryptProps?: { [key: string]: string };
  language?: string;
  sign?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      customerId: 'CustomerId',
      customerSite: 'CustomerSite',
      customerSystem: 'CustomerSystem',
      encryptProps: 'EncryptProps',
      language: 'Language',
      sign: 'Sign',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      customerId: 'string',
      customerSite: 'string',
      customerSystem: 'string',
      encryptProps: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      language: 'string',
      sign: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvoiceInfoByRequestNoResponseBodyReturnValueListLogisticsInfo extends $tea.Model {
  appCode?: string;
  customer?: QueryInvoiceInfoByRequestNoResponseBodyReturnValueListLogisticsInfoCustomer;
  encryptProps?: { [key: string]: string };
  gmtSend?: string;
  invoiceCode?: string;
  invoiceDate?: string;
  invoiceId?: number;
  invoiceNo?: string;
  invoiceNos?: string;
  language?: string;
  logisticsCompanies?: string;
  relatedId?: string;
  sender?: string;
  sign?: string;
  timestamp?: number;
  trackingNumber?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      customer: 'Customer',
      encryptProps: 'EncryptProps',
      gmtSend: 'GmtSend',
      invoiceCode: 'InvoiceCode',
      invoiceDate: 'InvoiceDate',
      invoiceId: 'InvoiceId',
      invoiceNo: 'InvoiceNo',
      invoiceNos: 'InvoiceNos',
      language: 'Language',
      logisticsCompanies: 'LogisticsCompanies',
      relatedId: 'RelatedId',
      sender: 'Sender',
      sign: 'Sign',
      timestamp: 'Timestamp',
      trackingNumber: 'TrackingNumber',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      customer: QueryInvoiceInfoByRequestNoResponseBodyReturnValueListLogisticsInfoCustomer,
      encryptProps: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gmtSend: 'string',
      invoiceCode: 'string',
      invoiceDate: 'string',
      invoiceId: 'number',
      invoiceNo: 'string',
      invoiceNos: 'string',
      language: 'string',
      logisticsCompanies: 'string',
      relatedId: 'string',
      sender: 'string',
      sign: 'string',
      timestamp: 'number',
      trackingNumber: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvoiceInfoByRequestNoResponseBodyReturnValueList extends $tea.Model {
  amount?: number;
  appCode?: string;
  currencyCode?: string;
  customer?: QueryInvoiceInfoByRequestNoResponseBodyReturnValueListCustomer;
  detailList?: QueryInvoiceInfoByRequestNoResponseBodyReturnValueListDetailList[];
  encryptProps?: { [key: string]: string };
  excludingTaxAmount?: number;
  excludingTaxRedAmount?: number;
  excludingTaxRemainAmount?: number;
  invoiceCode?: string;
  invoiceDate?: string;
  invoiceId?: number;
  invoiceNo?: string;
  invoiceStatus?: string;
  invoiceType?: string;
  isRed?: boolean;
  isReissue?: boolean;
  language?: string;
  linkInvoiceCode?: string;
  linkInvoiceNo?: string;
  logisticsInfo?: QueryInvoiceInfoByRequestNoResponseBodyReturnValueListLogisticsInfo;
  materialType?: string;
  memo?: string;
  ouCode?: string;
  purchaserBankInfo?: string;
  purchaserContactInfo?: string;
  purchaserName?: string;
  purchaserTaxNo?: string;
  redAmount?: number;
  relatedId?: string;
  remainAmount?: number;
  sign?: string;
  siteId?: string;
  taxAmount?: number;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      appCode: 'AppCode',
      currencyCode: 'CurrencyCode',
      customer: 'Customer',
      detailList: 'DetailList',
      encryptProps: 'EncryptProps',
      excludingTaxAmount: 'ExcludingTaxAmount',
      excludingTaxRedAmount: 'ExcludingTaxRedAmount',
      excludingTaxRemainAmount: 'ExcludingTaxRemainAmount',
      invoiceCode: 'InvoiceCode',
      invoiceDate: 'InvoiceDate',
      invoiceId: 'InvoiceId',
      invoiceNo: 'InvoiceNo',
      invoiceStatus: 'InvoiceStatus',
      invoiceType: 'InvoiceType',
      isRed: 'IsRed',
      isReissue: 'IsReissue',
      language: 'Language',
      linkInvoiceCode: 'LinkInvoiceCode',
      linkInvoiceNo: 'LinkInvoiceNo',
      logisticsInfo: 'LogisticsInfo',
      materialType: 'MaterialType',
      memo: 'Memo',
      ouCode: 'OuCode',
      purchaserBankInfo: 'PurchaserBankInfo',
      purchaserContactInfo: 'PurchaserContactInfo',
      purchaserName: 'PurchaserName',
      purchaserTaxNo: 'PurchaserTaxNo',
      redAmount: 'RedAmount',
      relatedId: 'RelatedId',
      remainAmount: 'RemainAmount',
      sign: 'Sign',
      siteId: 'SiteId',
      taxAmount: 'TaxAmount',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      appCode: 'string',
      currencyCode: 'string',
      customer: QueryInvoiceInfoByRequestNoResponseBodyReturnValueListCustomer,
      detailList: { 'type': 'array', 'itemType': QueryInvoiceInfoByRequestNoResponseBodyReturnValueListDetailList },
      encryptProps: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      excludingTaxAmount: 'number',
      excludingTaxRedAmount: 'number',
      excludingTaxRemainAmount: 'number',
      invoiceCode: 'string',
      invoiceDate: 'string',
      invoiceId: 'number',
      invoiceNo: 'string',
      invoiceStatus: 'string',
      invoiceType: 'string',
      isRed: 'boolean',
      isReissue: 'boolean',
      language: 'string',
      linkInvoiceCode: 'string',
      linkInvoiceNo: 'string',
      logisticsInfo: QueryInvoiceInfoByRequestNoResponseBodyReturnValueListLogisticsInfo,
      materialType: 'string',
      memo: 'string',
      ouCode: 'string',
      purchaserBankInfo: 'string',
      purchaserContactInfo: 'string',
      purchaserName: 'string',
      purchaserTaxNo: 'string',
      redAmount: 'number',
      relatedId: 'string',
      remainAmount: 'number',
      sign: 'string',
      siteId: 'string',
      taxAmount: 'number',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvoiceInfoByRequestNoResponseBodyReturnValue extends $tea.Model {
  encryptProps?: { [key: string]: string };
  list?: QueryInvoiceInfoByRequestNoResponseBodyReturnValueList[];
  sign?: string;
  static names(): { [key: string]: string } {
    return {
      encryptProps: 'EncryptProps',
      list: 'List',
      sign: 'Sign',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptProps: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      list: { 'type': 'array', 'itemType': QueryInvoiceInfoByRequestNoResponseBodyReturnValueList },
      sign: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWaybillOrderInfoResponseBodyData extends $tea.Model {
  aliyunprice?: string;
  appointGotEndTime?: string;
  appointGotStartTime?: string;
  bizType?: number;
  city?: string;
  cpCode?: string;
  gotCode?: string;
  lastLogisticDetail?: string;
  logisticsGmtModified?: string;
  logisticsStatus?: string;
  logisticsStatusDesc?: string;
  mailNo?: string;
  outerOrderCode?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunprice: 'Aliyunprice',
      appointGotEndTime: 'AppointGotEndTime',
      appointGotStartTime: 'AppointGotStartTime',
      bizType: 'BizType',
      city: 'City',
      cpCode: 'CpCode',
      gotCode: 'GotCode',
      lastLogisticDetail: 'LastLogisticDetail',
      logisticsGmtModified: 'LogisticsGmtModified',
      logisticsStatus: 'LogisticsStatus',
      logisticsStatusDesc: 'LogisticsStatusDesc',
      mailNo: 'MailNo',
      outerOrderCode: 'OuterOrderCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunprice: 'string',
      appointGotEndTime: 'string',
      appointGotStartTime: 'string',
      bizType: 'number',
      city: 'string',
      cpCode: 'string',
      gotCode: 'string',
      lastLogisticDetail: 'string',
      logisticsGmtModified: 'string',
      logisticsStatus: 'string',
      logisticsStatusDesc: 'string',
      mailNo: 'string',
      outerOrderCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWaybillOrderStatisticsInfoResponseBodyData extends $tea.Model {
  aliyunpriceAmount?: number;
  cancelCount?: number;
  gmtCreate?: string;
  gotCount?: number;
  orderTotal?: number;
  static names(): { [key: string]: string } {
    return {
      aliyunpriceAmount: 'AliyunpriceAmount',
      cancelCount: 'CancelCount',
      gmtCreate: 'GmtCreate',
      gotCount: 'GotCount',
      orderTotal: 'OrderTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunpriceAmount: 'number',
      cancelCount: 'number',
      gmtCreate: 'string',
      gotCount: 'number',
      orderTotal: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dypls", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async applyArInvoiceWithSourceWithOptions(request: ApplyArInvoiceWithSourceRequest, runtime: $Util.RuntimeOptions): Promise<ApplyArInvoiceWithSourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.address)) {
      bodyFlat["Address"] = request.address;
    }

    if (!Util.isUnset(request.amount)) {
      body["Amount"] = request.amount;
    }

    if (!Util.isUnset(request.appCode)) {
      body["AppCode"] = request.appCode;
    }

    if (!Util.isUnset(request.applier)) {
      body["Applier"] = request.applier;
    }

    if (!Util.isUnset(request.applyDate)) {
      body["ApplyDate"] = request.applyDate;
    }

    if (!Util.isUnset(request.currencyCode)) {
      body["CurrencyCode"] = request.currencyCode;
    }

    if (!Util.isUnset(request.customer)) {
      bodyFlat["Customer"] = request.customer;
    }

    if (!Util.isUnset(request.encryptProps)) {
      bodyFlat["EncryptProps"] = request.encryptProps;
    }

    if (!Util.isUnset(request.excludingTaxAmount)) {
      body["ExcludingTaxAmount"] = request.excludingTaxAmount;
    }

    if (!Util.isUnset(request.inputType)) {
      body["InputType"] = request.inputType;
    }

    if (!Util.isUnset(request.invoiceType)) {
      body["InvoiceType"] = request.invoiceType;
    }

    if (!Util.isUnset(request.isMerged)) {
      body["IsMerged"] = request.isMerged;
    }

    if (!Util.isUnset(request.language)) {
      body["Language"] = request.language;
    }

    if (!Util.isUnset(request.materialType)) {
      body["MaterialType"] = request.materialType;
    }

    if (!Util.isUnset(request.memo)) {
      body["Memo"] = request.memo;
    }

    if (!Util.isUnset(request.ouCode)) {
      body["OuCode"] = request.ouCode;
    }

    if (!Util.isUnset(request.purchaserBankInfo)) {
      body["PurchaserBankInfo"] = request.purchaserBankInfo;
    }

    if (!Util.isUnset(request.purchaserContactInfo)) {
      body["PurchaserContactInfo"] = request.purchaserContactInfo;
    }

    if (!Util.isUnset(request.purchaserName)) {
      body["PurchaserName"] = request.purchaserName;
    }

    if (!Util.isUnset(request.purchaserTaxNo)) {
      body["PurchaserTaxNo"] = request.purchaserTaxNo;
    }

    if (!Util.isUnset(request.requestNo)) {
      body["RequestNo"] = request.requestNo;
    }

    if (!Util.isUnset(request.sign)) {
      body["Sign"] = request.sign;
    }

    if (!Util.isUnset(request.siteId)) {
      body["SiteId"] = request.siteId;
    }

    if (!Util.isUnset(request.sourceList)) {
      body["SourceList"] = request.sourceList;
    }

    if (!Util.isUnset(request.taxAmount)) {
      body["TaxAmount"] = request.taxAmount;
    }

    if (!Util.isUnset(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ApplyArInvoiceWithSource",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyArInvoiceWithSourceResponse>(await this.callApi(params, req, runtime), new ApplyArInvoiceWithSourceResponse({}));
  }

  async applyArInvoiceWithSource(request: ApplyArInvoiceWithSourceRequest): Promise<ApplyArInvoiceWithSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyArInvoiceWithSourceWithOptions(request, runtime);
  }

  async applyBlackInfoExportWithOptions(request: ApplyBlackInfoExportRequest, runtime: $Util.RuntimeOptions): Promise<ApplyBlackInfoExportResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.blackType)) {
      query["BlackType"] = request.blackType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApplyBlackInfoExport",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyBlackInfoExportResponse>(await this.callApi(params, req, runtime), new ApplyBlackInfoExportResponse({}));
  }

  async applyBlackInfoExport(request: ApplyBlackInfoExportRequest): Promise<ApplyBlackInfoExportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyBlackInfoExportWithOptions(request, runtime);
  }

  async applyCallRecordExportWithOptions(request: ApplyCallRecordExportRequest, runtime: $Util.RuntimeOptions): Promise<ApplyCallRecordExportResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.callDate)) {
      query["CallDate"] = request.callDate;
    }

    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNoA)) {
      query["PhoneNoA"] = request.phoneNoA;
    }

    if (!Util.isUnset(request.phoneNoB)) {
      query["PhoneNoB"] = request.phoneNoB;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resType)) {
      query["ResType"] = request.resType;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.secretNo)) {
      query["SecretNo"] = request.secretNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApplyCallRecordExport",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyCallRecordExportResponse>(await this.callApi(params, req, runtime), new ApplyCallRecordExportResponse({}));
  }

  async applyCallRecordExport(request: ApplyCallRecordExportRequest): Promise<ApplyCallRecordExportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyCallRecordExportWithOptions(request, runtime);
  }

  async applyGroupNumberExportWithOptions(request: ApplyGroupNumberExportRequest, runtime: $Util.RuntimeOptions): Promise<ApplyGroupNumberExportResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApplyGroupNumberExport",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyGroupNumberExportResponse>(await this.callApi(params, req, runtime), new ApplyGroupNumberExportResponse({}));
  }

  async applyGroupNumberExport(request: ApplyGroupNumberExportRequest): Promise<ApplyGroupNumberExportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyGroupNumberExportWithOptions(request, runtime);
  }

  async applyRingToneWithOptions(request: ApplyRingToneRequest, runtime: $Util.RuntimeOptions): Promise<ApplyRingToneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.playType)) {
      query["PlayType"] = request.playType;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApplyRingTone",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyRingToneResponse>(await this.callApi(params, req, runtime), new ApplyRingToneResponse({}));
  }

  async applyRingTone(request: ApplyRingToneRequest): Promise<ApplyRingToneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyRingToneWithOptions(request, runtime);
  }

  async batchOccupySecretResWithOptions(tmpReq: BatchOccupySecretResRequest, runtime: $Util.RuntimeOptions): Promise<BatchOccupySecretResResponse> {
    Util.validateModel(tmpReq);
    let request = new BatchOccupySecretResShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.batchOccupyList)) {
      request.batchOccupyListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.batchOccupyList, "BatchOccupyList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.batchOccupyListShrink)) {
      query["BatchOccupyList"] = request.batchOccupyListShrink;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchOccupySecretRes",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchOccupySecretResResponse>(await this.callApi(params, req, runtime), new BatchOccupySecretResResponse({}));
  }

  async batchOccupySecretRes(request: BatchOccupySecretResRequest): Promise<BatchOccupySecretResResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchOccupySecretResWithOptions(request, runtime);
  }

  async bindResourceWithOptions(request: BindResourceRequest, runtime: $Util.RuntimeOptions): Promise<BindResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.asrModelId)) {
      query["AsrModelId"] = request.asrModelId;
    }

    if (!Util.isUnset(request.asrStatus)) {
      query["AsrStatus"] = request.asrStatus;
    }

    if (!Util.isUnset(request.axnExtensionB)) {
      query["AxnExtensionB"] = request.axnExtensionB;
    }

    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.expTime)) {
      query["ExpTime"] = request.expTime;
    }

    if (!Util.isUnset(request.isRecord)) {
      query["IsRecord"] = request.isRecord;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNoA)) {
      query["PhoneNoA"] = request.phoneNoA;
    }

    if (!Util.isUnset(request.phoneNoB)) {
      query["PhoneNoB"] = request.phoneNoB;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resType)) {
      query["ResType"] = request.resType;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.secretNo)) {
      query["SecretNo"] = request.secretNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindResource",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindResourceResponse>(await this.callApi(params, req, runtime), new BindResourceResponse({}));
  }

  async bindResource(request: BindResourceRequest): Promise<BindResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindResourceWithOptions(request, runtime);
  }

  async blackOperateWithOptions(request: BlackOperateRequest, runtime: $Util.RuntimeOptions): Promise<BlackOperateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.blackMap)) {
      query["BlackMap"] = request.blackMap;
    }

    if (!Util.isUnset(request.blackType)) {
      query["BlackType"] = request.blackType;
    }

    if (!Util.isUnset(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BlackOperate",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BlackOperateResponse>(await this.callApi(params, req, runtime), new BlackOperateResponse({}));
  }

  async blackOperate(request: BlackOperateRequest): Promise<BlackOperateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.blackOperateWithOptions(request, runtime);
  }

  async createCertifyInfoWithOptions(request: CreateCertifyInfoRequest, runtime: $Util.RuntimeOptions): Promise<CreateCertifyInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNo)) {
      query["PhoneNo"] = request.phoneNo;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCertifyInfo",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCertifyInfoResponse>(await this.callApi(params, req, runtime), new CreateCertifyInfoResponse({}));
  }

  async createCertifyInfo(request: CreateCertifyInfoRequest): Promise<CreateCertifyInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCertifyInfoWithOptions(request, runtime);
  }

  async createContactsWithOptions(request: CreateContactsRequest, runtime: $Util.RuntimeOptions): Promise<CreateContactsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateContacts",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateContactsResponse>(await this.callApi(params, req, runtime), new CreateContactsResponse({}));
  }

  async createContacts(request: CreateContactsRequest): Promise<CreateContactsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createContactsWithOptions(request, runtime);
  }

  async createGroupDetailWithOptions(request: CreateGroupDetailRequest, runtime: $Util.RuntimeOptions): Promise<CreateGroupDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.numberList)) {
      query["NumberList"] = request.numberList;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateGroupDetail",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGroupDetailResponse>(await this.callApi(params, req, runtime), new CreateGroupDetailResponse({}));
  }

  async createGroupDetail(request: CreateGroupDetailRequest): Promise<CreateGroupDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGroupDetailWithOptions(request, runtime);
  }

  async createGroupInfoWithOptions(request: CreateGroupInfoRequest, runtime: $Util.RuntimeOptions): Promise<CreateGroupInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.numberList)) {
      query["NumberList"] = request.numberList;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateGroupInfo",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGroupInfoResponse>(await this.callApi(params, req, runtime), new CreateGroupInfoResponse({}));
  }

  async createGroupInfo(request: CreateGroupInfoRequest): Promise<CreateGroupInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGroupInfoWithOptions(request, runtime);
  }

  async createLogicalDeleteWithOptions(request: CreateLogicalDeleteRequest, runtime: $Util.RuntimeOptions): Promise<CreateLogicalDeleteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bid)) {
      query["Bid"] = request.bid;
    }

    if (!Util.isUnset(request.country)) {
      query["Country"] = request.country;
    }

    if (!Util.isUnset(request.gmtWakeup)) {
      query["GmtWakeup"] = request.gmtWakeup;
    }

    if (!Util.isUnset(request.hid)) {
      query["Hid"] = request.hid;
    }

    if (!Util.isUnset(request.interrupt)) {
      query["Interrupt"] = request.interrupt;
    }

    if (!Util.isUnset(request.invoker)) {
      query["Invoker"] = request.invoker;
    }

    if (!Util.isUnset(request.message)) {
      query["Message"] = request.message;
    }

    if (!Util.isUnset(request.pk)) {
      query["Pk"] = request.pk;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.success)) {
      query["Success"] = request.success;
    }

    if (!Util.isUnset(request.taskExtraData)) {
      query["TaskExtraData"] = request.taskExtraData;
    }

    if (!Util.isUnset(request.taskIdentifier)) {
      query["TaskIdentifier"] = request.taskIdentifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateLogicalDelete",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLogicalDeleteResponse>(await this.callApi(params, req, runtime), new CreateLogicalDeleteResponse({}));
  }

  async createLogicalDelete(request: CreateLogicalDeleteRequest): Promise<CreateLogicalDeleteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLogicalDeleteWithOptions(request, runtime);
  }

  async createMessageCallbackWithOptions(request: CreateMessageCallbackRequest, runtime: $Util.RuntimeOptions): Promise<CreateMessageCallbackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.callbackUrl)) {
      query["CallbackUrl"] = request.callbackUrl;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMessageCallback",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMessageCallbackResponse>(await this.callApi(params, req, runtime), new CreateMessageCallbackResponse({}));
  }

  async createMessageCallback(request: CreateMessageCallbackRequest): Promise<CreateMessageCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMessageCallbackWithOptions(request, runtime);
  }

  async createMessageQueueWithOptions(request: CreateMessageQueueRequest, runtime: $Util.RuntimeOptions): Promise<CreateMessageQueueResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billIds)) {
      query["BillIds"] = request.billIds;
    }

    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    if (!Util.isUnset(request.queueTitle)) {
      query["QueueTitle"] = request.queueTitle;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMessageQueue",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMessageQueueResponse>(await this.callApi(params, req, runtime), new CreateMessageQueueResponse({}));
  }

  async createMessageQueue(request: CreateMessageQueueRequest): Promise<CreateMessageQueueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMessageQueueWithOptions(request, runtime);
  }

  async createPhysicalDeleteWithOptions(request: CreatePhysicalDeleteRequest, runtime: $Util.RuntimeOptions): Promise<CreatePhysicalDeleteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bid)) {
      query["Bid"] = request.bid;
    }

    if (!Util.isUnset(request.country)) {
      query["Country"] = request.country;
    }

    if (!Util.isUnset(request.gmtWakeup)) {
      query["GmtWakeup"] = request.gmtWakeup;
    }

    if (!Util.isUnset(request.hid)) {
      query["Hid"] = request.hid;
    }

    if (!Util.isUnset(request.interrupt)) {
      query["Interrupt"] = request.interrupt;
    }

    if (!Util.isUnset(request.invoker)) {
      query["Invoker"] = request.invoker;
    }

    if (!Util.isUnset(request.message)) {
      query["Message"] = request.message;
    }

    if (!Util.isUnset(request.pk)) {
      query["Pk"] = request.pk;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.success)) {
      query["Success"] = request.success;
    }

    if (!Util.isUnset(request.taskExtraData)) {
      query["TaskExtraData"] = request.taskExtraData;
    }

    if (!Util.isUnset(request.taskIdentifier)) {
      query["TaskIdentifier"] = request.taskIdentifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePhysicalDelete",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePhysicalDeleteResponse>(await this.callApi(params, req, runtime), new CreatePhysicalDeleteResponse({}));
  }

  async createPhysicalDelete(request: CreatePhysicalDeleteRequest): Promise<CreatePhysicalDeleteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPhysicalDeleteWithOptions(request, runtime);
  }

  async createPoolInfoWithOptions(request: CreatePoolInfoRequest, runtime: $Util.RuntimeOptions): Promise<CreatePoolInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolName)) {
      query["PoolName"] = request.poolName;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resType)) {
      query["ResType"] = request.resType;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePoolInfo",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePoolInfoResponse>(await this.callApi(params, req, runtime), new CreatePoolInfoResponse({}));
  }

  async createPoolInfo(request: CreatePoolInfoRequest): Promise<CreatePoolInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPoolInfoWithOptions(request, runtime);
  }

  async createProductWithOptions(request: CreateProductRequest, runtime: $Util.RuntimeOptions): Promise<CreateProductResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.prodId)) {
      query["ProdId"] = request.prodId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateProduct",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateProductResponse>(await this.callApi(params, req, runtime), new CreateProductResponse({}));
  }

  async createProduct(request: CreateProductRequest): Promise<CreateProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProductWithOptions(request, runtime);
  }

  async createRingToneWithOptions(request: CreateRingToneRequest, runtime: $Util.RuntimeOptions): Promise<CreateRingToneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.fileKey)) {
      query["FileKey"] = request.fileKey;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.playType)) {
      query["PlayType"] = request.playType;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.ringName)) {
      query["RingName"] = request.ringName;
    }

    if (!Util.isUnset(request.tts)) {
      query["Tts"] = request.tts;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRingTone",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRingToneResponse>(await this.callApi(params, req, runtime), new CreateRingToneResponse({}));
  }

  async createRingTone(request: CreateRingToneRequest): Promise<CreateRingToneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRingToneWithOptions(request, runtime);
  }

  async createSubsTrialWithOptions(request: CreateSubsTrialRequest, runtime: $Util.RuntimeOptions): Promise<CreateSubsTrialResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneA)) {
      query["PhoneA"] = request.phoneA;
    }

    if (!Util.isUnset(request.phoneB)) {
      query["PhoneB"] = request.phoneB;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resType)) {
      query["ResType"] = request.resType;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSubsTrial",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSubsTrialResponse>(await this.callApi(params, req, runtime), new CreateSubsTrialResponse({}));
  }

  async createSubsTrial(request: CreateSubsTrialRequest): Promise<CreateSubsTrialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSubsTrialWithOptions(request, runtime);
  }

  async createTransferRecordWithOptions(request: CreateTransferRecordRequest, runtime: $Util.RuntimeOptions): Promise<CreateTransferRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.city)) {
      query["City"] = request.city;
    }

    if (!Util.isUnset(request.numberList)) {
      query["NumberList"] = request.numberList;
    }

    if (!Util.isUnset(request.originBillId)) {
      query["OriginBillId"] = request.originBillId;
    }

    if (!Util.isUnset(request.originName)) {
      query["OriginName"] = request.originName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.targetBillId)) {
      query["TargetBillId"] = request.targetBillId;
    }

    if (!Util.isUnset(request.targetName)) {
      query["TargetName"] = request.targetName;
    }

    if (!Util.isUnset(request.total)) {
      query["Total"] = request.total;
    }

    if (!Util.isUnset(request.transferType)) {
      query["TransferType"] = request.transferType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTransferRecord",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTransferRecordResponse>(await this.callApi(params, req, runtime), new CreateTransferRecordResponse({}));
  }

  async createTransferRecord(request: CreateTransferRecordRequest): Promise<CreateTransferRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTransferRecordWithOptions(request, runtime);
  }

  async deleteCertifyInfoWithOptions(request: DeleteCertifyInfoRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCertifyInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certifyId)) {
      query["CertifyId"] = request.certifyId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCertifyInfo",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCertifyInfoResponse>(await this.callApi(params, req, runtime), new DeleteCertifyInfoResponse({}));
  }

  async deleteCertifyInfo(request: DeleteCertifyInfoRequest): Promise<DeleteCertifyInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCertifyInfoWithOptions(request, runtime);
  }

  async deleteContactsWithOptions(request: DeleteContactsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteContactsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteContacts",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteContactsResponse>(await this.callApi(params, req, runtime), new DeleteContactsResponse({}));
  }

  async deleteContacts(request: DeleteContactsRequest): Promise<DeleteContactsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteContactsWithOptions(request, runtime);
  }

  async deleteGroupDetailWithOptions(request: DeleteGroupDetailRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGroupDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.idList)) {
      query["IdList"] = request.idList;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGroupDetail",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGroupDetailResponse>(await this.callApi(params, req, runtime), new DeleteGroupDetailResponse({}));
  }

  async deleteGroupDetail(request: DeleteGroupDetailRequest): Promise<DeleteGroupDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGroupDetailWithOptions(request, runtime);
  }

  async deleteMessageCallbackWithOptions(request: DeleteMessageCallbackRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMessageCallbackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMessageCallback",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMessageCallbackResponse>(await this.callApi(params, req, runtime), new DeleteMessageCallbackResponse({}));
  }

  async deleteMessageCallback(request: DeleteMessageCallbackRequest): Promise<DeleteMessageCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMessageCallbackWithOptions(request, runtime);
  }

  async deleteRingToneWithOptions(request: DeleteRingToneRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRingToneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRingTone",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRingToneResponse>(await this.callApi(params, req, runtime), new DeleteRingToneResponse({}));
  }

  async deleteRingTone(request: DeleteRingToneRequest): Promise<DeleteRingToneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRingToneWithOptions(request, runtime);
  }

  async downloadCompleteWithOptions(request: DownloadCompleteRequest, runtime: $Util.RuntimeOptions): Promise<DownloadCompleteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DownloadComplete",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DownloadCompleteResponse>(await this.callApi(params, req, runtime), new DownloadCompleteResponse({}));
  }

  async downloadComplete(request: DownloadCompleteRequest): Promise<DownloadCompleteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadCompleteWithOptions(request, runtime);
  }

  async exportResWithOptions(request: ExportResRequest, runtime: $Util.RuntimeOptions): Promise<ExportResResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resBindStatus)) {
      query["ResBindStatus"] = request.resBindStatus;
    }

    if (!Util.isUnset(request.resType)) {
      query["ResType"] = request.resType;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.secretNo)) {
      query["SecretNo"] = request.secretNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExportRes",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportResResponse>(await this.callApi(params, req, runtime), new ExportResResponse({}));
  }

  async exportRes(request: ExportResRequest): Promise<ExportResResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportResWithOptions(request, runtime);
  }

  async getEinvoicePdfDataWithOptions(request: GetEinvoicePdfDataRequest, runtime: $Util.RuntimeOptions): Promise<GetEinvoicePdfDataResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appCode)) {
      body["AppCode"] = request.appCode;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.customer)) {
      bodyFlat["Customer"] = request.customer;
    }

    if (!Util.isUnset(request.encryptProps)) {
      bodyFlat["EncryptProps"] = request.encryptProps;
    }

    if (!Util.isUnset(request.invoiceCode)) {
      body["InvoiceCode"] = request.invoiceCode;
    }

    if (!Util.isUnset(request.invoiceNo)) {
      body["InvoiceNo"] = request.invoiceNo;
    }

    if (!Util.isUnset(request.language)) {
      body["Language"] = request.language;
    }

    if (!Util.isUnset(request.sign)) {
      body["Sign"] = request.sign;
    }

    if (!Util.isUnset(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetEinvoicePdfData",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEinvoicePdfDataResponse>(await this.callApi(params, req, runtime), new GetEinvoicePdfDataResponse({}));
  }

  async getEinvoicePdfData(request: GetEinvoicePdfDataRequest): Promise<GetEinvoicePdfDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEinvoicePdfDataWithOptions(request, runtime);
  }

  async getSecretAsrInfoWithOptions(request: GetSecretAsrInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetSecretAsrInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.callTime)) {
      query["CallTime"] = request.callTime;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSecretAsrInfo",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSecretAsrInfoResponse>(await this.callApi(params, req, runtime), new GetSecretAsrInfoResponse({}));
  }

  async getSecretAsrInfo(request: GetSecretAsrInfoRequest): Promise<GetSecretAsrInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSecretAsrInfoWithOptions(request, runtime);
  }

  async getUserResourceTagStatusWithOptions(request: GetUserResourceTagStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetUserResourceTagStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUserResourceTagStatus",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserResourceTagStatusResponse>(await this.callApi(params, req, runtime), new GetUserResourceTagStatusResponse({}));
  }

  async getUserResourceTagStatus(request: GetUserResourceTagStatusRequest): Promise<GetUserResourceTagStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserResourceTagStatusWithOptions(request, runtime);
  }

  async listAsrLanguageModelsWithOptions(request: ListAsrLanguageModelsRequest, runtime: $Util.RuntimeOptions): Promise<ListAsrLanguageModelsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAsrLanguageModels",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAsrLanguageModelsResponse>(await this.callApi(params, req, runtime), new ListAsrLanguageModelsResponse({}));
  }

  async listAsrLanguageModels(request: ListAsrLanguageModelsRequest): Promise<ListAsrLanguageModelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAsrLanguageModelsWithOptions(request, runtime);
  }

  async lockResourceWithOptions(request: LockResourceRequest, runtime: $Util.RuntimeOptions): Promise<LockResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.secretNo)) {
      query["SecretNo"] = request.secretNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "LockResource",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LockResourceResponse>(await this.callApi(params, req, runtime), new LockResourceResponse({}));
  }

  async lockResource(request: LockResourceRequest): Promise<LockResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.lockResourceWithOptions(request, runtime);
  }

  async occupySecretResWithOptions(request: OccupySecretResRequest, runtime: $Util.RuntimeOptions): Promise<OccupySecretResResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.city)) {
      query["City"] = request.city;
    }

    if (!Util.isUnset(request.isDisplayPool)) {
      query["IsDisplayPool"] = request.isDisplayPool;
    }

    if (!Util.isUnset(request.noLike)) {
      query["NoLike"] = request.noLike;
    }

    if (!Util.isUnset(request.orderDetailId)) {
      query["OrderDetailId"] = request.orderDetailId;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.partnerKey)) {
      query["PartnerKey"] = request.partnerKey;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resType)) {
      query["ResType"] = request.resType;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.secretNoType)) {
      query["SecretNoType"] = request.secretNoType;
    }

    if (!Util.isUnset(request.totalCount)) {
      query["TotalCount"] = request.totalCount;
    }

    if (!Util.isUnset(request.secretNo)) {
      query["secretNo"] = request.secretNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OccupySecretRes",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OccupySecretResResponse>(await this.callApi(params, req, runtime), new OccupySecretResResponse({}));
  }

  async occupySecretRes(request: OccupySecretResRequest): Promise<OccupySecretResResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.occupySecretResWithOptions(request, runtime);
  }

  async orderSucceededCallbackWithOptions(request: OrderSucceededCallbackRequest, runtime: $Util.RuntimeOptions): Promise<OrderSucceededCallbackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.data)) {
      query["data"] = request.data;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OrderSucceededCallback",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OrderSucceededCallbackResponse>(await this.callApi(params, req, runtime), new OrderSucceededCallbackResponse({}));
  }

  async orderSucceededCallback(request: OrderSucceededCallbackRequest): Promise<OrderSucceededCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.orderSucceededCallbackWithOptions(request, runtime);
  }

  async poolConfigWithOptions(request: PoolConfigRequest, runtime: $Util.RuntimeOptions): Promise<PoolConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.callbackType)) {
      query["CallbackType"] = request.callbackType;
    }

    if (!Util.isUnset(request.frozenDay)) {
      query["FrozenDay"] = request.frozenDay;
    }

    if (!Util.isUnset(request.needAllCallRecords)) {
      query["NeedAllCallRecords"] = request.needAllCallRecords;
    }

    if (!Util.isUnset(request.openSmsWhite)) {
      query["OpenSmsWhite"] = request.openSmsWhite;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolWarningLimit)) {
      query["PoolWarningLimit"] = request.poolWarningLimit;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.selectXMode)) {
      query["SelectXMode"] = request.selectXMode;
    }

    if (!Util.isUnset(request.smartSmsWhitelist)) {
      query["SmartSmsWhitelist"] = request.smartSmsWhitelist;
    }

    if (!Util.isUnset(request.smsChannel)) {
      query["SmsChannel"] = request.smsChannel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PoolConfig",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PoolConfigResponse>(await this.callApi(params, req, runtime), new PoolConfigResponse({}));
  }

  async poolConfig(request: PoolConfigRequest): Promise<PoolConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.poolConfigWithOptions(request, runtime);
  }

  async purchaseResourcesWithOptions(request: PurchaseResourcesRequest, runtime: $Util.RuntimeOptions): Promise<PurchaseResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.buyNumber)) {
      query["BuyNumber"] = request.buyNumber;
    }

    if (!Util.isUnset(request.isDisplayPool)) {
      query["IsDisplayPool"] = request.isDisplayPool;
    }

    if (!Util.isUnset(request.noLike)) {
      query["NoLike"] = request.noLike;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.regionName)) {
      query["RegionName"] = request.regionName;
    }

    if (!Util.isUnset(request.resType)) {
      query["ResType"] = request.resType;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.specId)) {
      query["SpecId"] = request.specId;
    }

    if (!Util.isUnset(request.usageScenarios)) {
      query["UsageScenarios"] = request.usageScenarios;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PurchaseResources",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PurchaseResourcesResponse>(await this.callApi(params, req, runtime), new PurchaseResourcesResponse({}));
  }

  async purchaseResources(request: PurchaseResourcesRequest): Promise<PurchaseResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.purchaseResourcesWithOptions(request, runtime);
  }

  async queryBindingDetailsWithOptions(request: QueryBindingDetailsRequest, runtime: $Util.RuntimeOptions): Promise<QueryBindingDetailsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.phoneNoA)) {
      query["PhoneNoA"] = request.phoneNoA;
    }

    if (!Util.isUnset(request.phoneNoB)) {
      query["PhoneNoB"] = request.phoneNoB;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resType)) {
      query["ResType"] = request.resType;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.secretNo)) {
      query["SecretNo"] = request.secretNo;
    }

    if (!Util.isUnset(request.subId)) {
      query["SubId"] = request.subId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryBindingDetails",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryBindingDetailsResponse>(await this.callApi(params, req, runtime), new QueryBindingDetailsResponse({}));
  }

  async queryBindingDetails(request: QueryBindingDetailsRequest): Promise<QueryBindingDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBindingDetailsWithOptions(request, runtime);
  }

  async queryBlackListWithOptions(request: QueryBlackListRequest, runtime: $Util.RuntimeOptions): Promise<QueryBlackListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.blackPrefix)) {
      query["BlackPrefix"] = request.blackPrefix;
    }

    if (!Util.isUnset(request.blackType)) {
      query["BlackType"] = request.blackType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryBlackList",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryBlackListResponse>(await this.callApi(params, req, runtime), new QueryBlackListResponse({}));
  }

  async queryBlackList(request: QueryBlackListRequest): Promise<QueryBlackListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBlackListWithOptions(request, runtime);
  }

  async queryBuyPageInitDataWithOptions(request: QueryBuyPageInitDataRequest, runtime: $Util.RuntimeOptions): Promise<QueryBuyPageInitDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryBuyPageInitData",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryBuyPageInitDataResponse>(await this.callApi(params, req, runtime), new QueryBuyPageInitDataResponse({}));
  }

  async queryBuyPageInitData(request: QueryBuyPageInitDataRequest): Promise<QueryBuyPageInitDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBuyPageInitDataWithOptions(request, runtime);
  }

  async queryBuyPageResCountWithOptions(request: QueryBuyPageResCountRequest, runtime: $Util.RuntimeOptions): Promise<QueryBuyPageResCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.city)) {
      query["City"] = request.city;
    }

    if (!Util.isUnset(request.like)) {
      query["Like"] = request.like;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resType)) {
      query["ResType"] = request.resType;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.specId)) {
      query["SpecId"] = request.specId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryBuyPageResCount",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryBuyPageResCountResponse>(await this.callApi(params, req, runtime), new QueryBuyPageResCountResponse({}));
  }

  async queryBuyPageResCount(request: QueryBuyPageResCountRequest): Promise<QueryBuyPageResCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBuyPageResCountWithOptions(request, runtime);
  }

  async queryBuyPageResInfoWithOptions(request: QueryBuyPageResInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryBuyPageResInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.like)) {
      query["Like"] = request.like;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resType)) {
      query["ResType"] = request.resType;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.specId)) {
      query["SpecId"] = request.specId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryBuyPageResInfo",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryBuyPageResInfoResponse>(await this.callApi(params, req, runtime), new QueryBuyPageResInfoResponse({}));
  }

  async queryBuyPageResInfo(request: QueryBuyPageResInfoRequest): Promise<QueryBuyPageResInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBuyPageResInfoWithOptions(request, runtime);
  }

  async queryBuyResInfoWithOptions(request: QueryBuyResInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryBuyResInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.like)) {
      query["Like"] = request.like;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resType)) {
      query["ResType"] = request.resType;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.specId)) {
      query["SpecId"] = request.specId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryBuyResInfo",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryBuyResInfoResponse>(await this.callApi(params, req, runtime), new QueryBuyResInfoResponse({}));
  }

  async queryBuyResInfo(request: QueryBuyResInfoRequest): Promise<QueryBuyResInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBuyResInfoWithOptions(request, runtime);
  }

  async queryCallRecordingListWithOptions(request: QueryCallRecordingListRequest, runtime: $Util.RuntimeOptions): Promise<QueryCallRecordingListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.callDate)) {
      query["CallDate"] = request.callDate;
    }

    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.phoneNoA)) {
      query["PhoneNoA"] = request.phoneNoA;
    }

    if (!Util.isUnset(request.phoneNoB)) {
      query["PhoneNoB"] = request.phoneNoB;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resType)) {
      query["ResType"] = request.resType;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.secretNo)) {
      query["SecretNo"] = request.secretNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryCallRecordingList",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryCallRecordingListResponse>(await this.callApi(params, req, runtime), new QueryCallRecordingListResponse({}));
  }

  async queryCallRecordingList(request: QueryCallRecordingListRequest): Promise<QueryCallRecordingListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCallRecordingListWithOptions(request, runtime);
  }

  async queryCertifyInfoListWithOptions(request: QueryCertifyInfoListRequest, runtime: $Util.RuntimeOptions): Promise<QueryCertifyInfoListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certifyStatus)) {
      query["CertifyStatus"] = request.certifyStatus;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.phoneNo)) {
      query["PhoneNo"] = request.phoneNo;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryCertifyInfoList",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryCertifyInfoListResponse>(await this.callApi(params, req, runtime), new QueryCertifyInfoListResponse({}));
  }

  async queryCertifyInfoList(request: QueryCertifyInfoListRequest): Promise<QueryCertifyInfoListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCertifyInfoListWithOptions(request, runtime);
  }

  async queryCertifyOverviewInfoWithOptions(request: QueryCertifyOverviewInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryCertifyOverviewInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryCertifyOverviewInfo",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryCertifyOverviewInfoResponse>(await this.callApi(params, req, runtime), new QueryCertifyOverviewInfoResponse({}));
  }

  async queryCertifyOverviewInfo(request: QueryCertifyOverviewInfoRequest): Promise<QueryCertifyOverviewInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCertifyOverviewInfoWithOptions(request, runtime);
  }

  async queryContactsListWithOptions(request: QueryContactsListRequest, runtime: $Util.RuntimeOptions): Promise<QueryContactsListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryContactsList",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryContactsListResponse>(await this.callApi(params, req, runtime), new QueryContactsListResponse({}));
  }

  async queryContactsList(request: QueryContactsListRequest): Promise<QueryContactsListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryContactsListWithOptions(request, runtime);
  }

  async queryCustInfoWithOptions(request: QueryCustInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryCustInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryCustInfo",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryCustInfoResponse>(await this.callApi(params, req, runtime), new QueryCustInfoResponse({}));
  }

  async queryCustInfo(request: QueryCustInfoRequest): Promise<QueryCustInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCustInfoWithOptions(request, runtime);
  }

  async queryDownloadUrlWithOptions(request: QueryDownloadUrlRequest, runtime: $Util.RuntimeOptions): Promise<QueryDownloadUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryDownloadUrl",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDownloadUrlResponse>(await this.callApi(params, req, runtime), new QueryDownloadUrlResponse({}));
  }

  async queryDownloadUrl(request: QueryDownloadUrlRequest): Promise<QueryDownloadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDownloadUrlWithOptions(request, runtime);
  }

  async queryEffectiveInvoiceListByBillNosWithOptions(request: QueryEffectiveInvoiceListByBillNosRequest, runtime: $Util.RuntimeOptions): Promise<QueryEffectiveInvoiceListByBillNosResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appCode)) {
      body["AppCode"] = request.appCode;
    }

    if (!Util.isUnset(request.billNo)) {
      body["BillNo"] = request.billNo;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.encryptProps)) {
      bodyFlat["EncryptProps"] = request.encryptProps;
    }

    if (!Util.isUnset(request.language)) {
      body["Language"] = request.language;
    }

    if (!Util.isUnset(request.majorBillNo)) {
      body["MajorBillNo"] = request.majorBillNo;
    }

    if (!Util.isUnset(request.ouCode)) {
      body["OuCode"] = request.ouCode;
    }

    if (!Util.isUnset(request.relatedSystem)) {
      body["RelatedSystem"] = request.relatedSystem;
    }

    if (!Util.isUnset(request.sign)) {
      body["Sign"] = request.sign;
    }

    if (!Util.isUnset(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryEffectiveInvoiceListByBillNos",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryEffectiveInvoiceListByBillNosResponse>(await this.callApi(params, req, runtime), new QueryEffectiveInvoiceListByBillNosResponse({}));
  }

  async queryEffectiveInvoiceListByBillNos(request: QueryEffectiveInvoiceListByBillNosRequest): Promise<QueryEffectiveInvoiceListByBillNosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEffectiveInvoiceListByBillNosWithOptions(request, runtime);
  }

  async queryExportResUrlWithOptions(request: QueryExportResUrlRequest, runtime: $Util.RuntimeOptions): Promise<QueryExportResUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resType)) {
      query["ResType"] = request.resType;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryExportResUrl",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryExportResUrlResponse>(await this.callApi(params, req, runtime), new QueryExportResUrlResponse({}));
  }

  async queryExportResUrl(request: QueryExportResUrlRequest): Promise<QueryExportResUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryExportResUrlWithOptions(request, runtime);
  }

  async queryGroupDetailListWithOptions(request: QueryGroupDetailListRequest, runtime: $Util.RuntimeOptions): Promise<QueryGroupDetailListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.number)) {
      query["Number"] = request.number;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryGroupDetailList",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryGroupDetailListResponse>(await this.callApi(params, req, runtime), new QueryGroupDetailListResponse({}));
  }

  async queryGroupDetailList(request: QueryGroupDetailListRequest): Promise<QueryGroupDetailListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryGroupDetailListWithOptions(request, runtime);
  }

  async queryGroupInfoListWithOptions(request: QueryGroupInfoListRequest, runtime: $Util.RuntimeOptions): Promise<QueryGroupInfoListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.queryKey)) {
      query["QueryKey"] = request.queryKey;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryGroupInfoList",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryGroupInfoListResponse>(await this.callApi(params, req, runtime), new QueryGroupInfoListResponse({}));
  }

  async queryGroupInfoList(request: QueryGroupInfoListRequest): Promise<QueryGroupInfoListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryGroupInfoListWithOptions(request, runtime);
  }

  async queryInvoiceInfoByRequestNoWithOptions(request: QueryInvoiceInfoByRequestNoRequest, runtime: $Util.RuntimeOptions): Promise<QueryInvoiceInfoByRequestNoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appCode)) {
      body["AppCode"] = request.appCode;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.encryptProps)) {
      bodyFlat["EncryptProps"] = request.encryptProps;
    }

    if (!Util.isUnset(request.language)) {
      body["Language"] = request.language;
    }

    if (!Util.isUnset(request.relatedSystem)) {
      body["RelatedSystem"] = request.relatedSystem;
    }

    if (!Util.isUnset(request.requestNo)) {
      body["RequestNo"] = request.requestNo;
    }

    if (!Util.isUnset(request.sign)) {
      body["Sign"] = request.sign;
    }

    if (!Util.isUnset(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryInvoiceInfoByRequestNo",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryInvoiceInfoByRequestNoResponse>(await this.callApi(params, req, runtime), new QueryInvoiceInfoByRequestNoResponse({}));
  }

  async queryInvoiceInfoByRequestNo(request: QueryInvoiceInfoByRequestNoRequest): Promise<QueryInvoiceInfoByRequestNoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryInvoiceInfoByRequestNoWithOptions(request, runtime);
  }

  async queryMessageCallbackInfoWithOptions(request: QueryMessageCallbackInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryMessageCallbackInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryMessageCallbackInfo",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMessageCallbackInfoResponse>(await this.callApi(params, req, runtime), new QueryMessageCallbackInfoResponse({}));
  }

  async queryMessageCallbackInfo(request: QueryMessageCallbackInfoRequest): Promise<QueryMessageCallbackInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMessageCallbackInfoWithOptions(request, runtime);
  }

  async queryMessageQueueListWithOptions(request: QueryMessageQueueListRequest, runtime: $Util.RuntimeOptions): Promise<QueryMessageQueueListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryMessageQueueList",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMessageQueueListResponse>(await this.callApi(params, req, runtime), new QueryMessageQueueListResponse({}));
  }

  async queryMessageQueueList(request: QueryMessageQueueListRequest): Promise<QueryMessageQueueListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMessageQueueListWithOptions(request, runtime);
  }

  async queryMonthlyBillInfoWithOptions(request: QueryMonthlyBillInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryMonthlyBillInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billCycle)) {
      query["BillCycle"] = request.billCycle;
    }

    if (!Util.isUnset(request.itemId)) {
      query["ItemId"] = request.itemId;
    }

    if (!Util.isUnset(request.itemName)) {
      query["ItemName"] = request.itemName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.subjectItemId)) {
      query["SubjectItemId"] = request.subjectItemId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryMonthlyBillInfo",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMonthlyBillInfoResponse>(await this.callApi(params, req, runtime), new QueryMonthlyBillInfoResponse({}));
  }

  async queryMonthlyBillInfo(request: QueryMonthlyBillInfoRequest): Promise<QueryMonthlyBillInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMonthlyBillInfoWithOptions(request, runtime);
  }

  async queryMonthlyStatisticsInfoWithOptions(request: QueryMonthlyStatisticsInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryMonthlyStatisticsInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resType)) {
      query["ResType"] = request.resType;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryMonthlyStatisticsInfo",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMonthlyStatisticsInfoResponse>(await this.callApi(params, req, runtime), new QueryMonthlyStatisticsInfoResponse({}));
  }

  async queryMonthlyStatisticsInfo(request: QueryMonthlyStatisticsInfoRequest): Promise<QueryMonthlyStatisticsInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMonthlyStatisticsInfoWithOptions(request, runtime);
  }

  async queryNoBuyTasksWithOptions(request: QueryNoBuyTasksRequest, runtime: $Util.RuntimeOptions): Promise<QueryNoBuyTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryNoBuyTasks",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryNoBuyTasksResponse>(await this.callApi(params, req, runtime), new QueryNoBuyTasksResponse({}));
  }

  async queryNoBuyTasks(request: QueryNoBuyTasksRequest): Promise<QueryNoBuyTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryNoBuyTasksWithOptions(request, runtime);
  }

  async queryNoDistributeWithOptions(request: QueryNoDistributeRequest, runtime: $Util.RuntimeOptions): Promise<QueryNoDistributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryNoDistribute",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryNoDistributeResponse>(await this.callApi(params, req, runtime), new QueryNoDistributeResponse({}));
  }

  async queryNoDistribute(request: QueryNoDistributeRequest): Promise<QueryNoDistributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryNoDistributeWithOptions(request, runtime);
  }

  async queryOpenStatusWithOptions(request: QueryOpenStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryOpenStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.busOffer)) {
      query["BusOffer"] = request.busOffer;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.prodId)) {
      query["ProdId"] = request.prodId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryOpenStatus",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryOpenStatusResponse>(await this.callApi(params, req, runtime), new QueryOpenStatusResponse({}));
  }

  async queryOpenStatus(request: QueryOpenStatusRequest): Promise<QueryOpenStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOpenStatusWithOptions(request, runtime);
  }

  async queryPackageDetailWithOptions(request: QueryPackageDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryPackageDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryPackageDetail",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPackageDetailResponse>(await this.callApi(params, req, runtime), new QueryPackageDetailResponse({}));
  }

  async queryPackageDetail(request: QueryPackageDetailRequest): Promise<QueryPackageDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPackageDetailWithOptions(request, runtime);
  }

  async queryPackageListWithOptions(request: QueryPackageListRequest, runtime: $Util.RuntimeOptions): Promise<QueryPackageListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billCycle)) {
      query["BillCycle"] = request.billCycle;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryPackageList",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPackageListResponse>(await this.callApi(params, req, runtime), new QueryPackageListResponse({}));
  }

  async queryPackageList(request: QueryPackageListRequest): Promise<QueryPackageListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPackageListWithOptions(request, runtime);
  }

  async queryPackageStatisticsWithOptions(request: QueryPackageStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<QueryPackageStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryPackageStatistics",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPackageStatisticsResponse>(await this.callApi(params, req, runtime), new QueryPackageStatisticsResponse({}));
  }

  async queryPackageStatistics(request: QueryPackageStatisticsRequest): Promise<QueryPackageStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPackageStatisticsWithOptions(request, runtime);
  }

  async queryPoolCityListWithOptions(request: QueryPoolCityListRequest, runtime: $Util.RuntimeOptions): Promise<QueryPoolCityListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryPoolCityList",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPoolCityListResponse>(await this.callApi(params, req, runtime), new QueryPoolCityListResponse({}));
  }

  async queryPoolCityList(request: QueryPoolCityListRequest): Promise<QueryPoolCityListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPoolCityListWithOptions(request, runtime);
  }

  async queryPoolInfoListWithOptions(request: QueryPoolInfoListRequest, runtime: $Util.RuntimeOptions): Promise<QueryPoolInfoListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.isFuzzyQuery)) {
      query["IsFuzzyQuery"] = request.isFuzzyQuery;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.poolName)) {
      query["PoolName"] = request.poolName;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resType)) {
      query["ResType"] = request.resType;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.searchParam)) {
      query["SearchParam"] = request.searchParam;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryPoolInfoList",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPoolInfoListResponse>(await this.callApi(params, req, runtime), new QueryPoolInfoListResponse({}));
  }

  async queryPoolInfoList(request: QueryPoolInfoListRequest): Promise<QueryPoolInfoListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPoolInfoListWithOptions(request, runtime);
  }

  async queryPoolMonthlyBillInfoWithOptions(request: QueryPoolMonthlyBillInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryPoolMonthlyBillInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billCycle)) {
      query["BillCycle"] = request.billCycle;
    }

    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryPoolMonthlyBillInfo",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPoolMonthlyBillInfoResponse>(await this.callApi(params, req, runtime), new QueryPoolMonthlyBillInfoResponse({}));
  }

  async queryPoolMonthlyBillInfo(request: QueryPoolMonthlyBillInfoRequest): Promise<QueryPoolMonthlyBillInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPoolMonthlyBillInfoWithOptions(request, runtime);
  }

  async queryPoolStatisticsInfoWithOptions(request: QueryPoolStatisticsInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryPoolStatisticsInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryPoolStatisticsInfo",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPoolStatisticsInfoResponse>(await this.callApi(params, req, runtime), new QueryPoolStatisticsInfoResponse({}));
  }

  async queryPoolStatisticsInfo(request: QueryPoolStatisticsInfoRequest): Promise<QueryPoolStatisticsInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPoolStatisticsInfoWithOptions(request, runtime);
  }

  async queryPoolSummaryInfoWithOptions(request: QueryPoolSummaryInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryPoolSummaryInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryPoolSummaryInfo",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPoolSummaryInfoResponse>(await this.callApi(params, req, runtime), new QueryPoolSummaryInfoResponse({}));
  }

  async queryPoolSummaryInfo(request: QueryPoolSummaryInfoRequest): Promise<QueryPoolSummaryInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPoolSummaryInfoWithOptions(request, runtime);
  }

  async queryPurchasedInfoWithOptions(request: QueryPurchasedInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryPurchasedInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resType)) {
      query["ResType"] = request.resType;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryPurchasedInfo",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPurchasedInfoResponse>(await this.callApi(params, req, runtime), new QueryPurchasedInfoResponse({}));
  }

  async queryPurchasedInfo(request: QueryPurchasedInfoRequest): Promise<QueryPurchasedInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPurchasedInfoWithOptions(request, runtime);
  }

  async queryPurchasedResListWithOptions(request: QueryPurchasedResListRequest, runtime: $Util.RuntimeOptions): Promise<QueryPurchasedResListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.city)) {
      query["City"] = request.city;
    }

    if (!Util.isUnset(request.isDisplayPool)) {
      query["IsDisplayPool"] = request.isDisplayPool;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resBindStatus)) {
      query["ResBindStatus"] = request.resBindStatus;
    }

    if (!Util.isUnset(request.resType)) {
      query["ResType"] = request.resType;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.secretNo)) {
      query["SecretNo"] = request.secretNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryPurchasedResList",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPurchasedResListResponse>(await this.callApi(params, req, runtime), new QueryPurchasedResListResponse({}));
  }

  async queryPurchasedResList(request: QueryPurchasedResListRequest): Promise<QueryPurchasedResListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPurchasedResListWithOptions(request, runtime);
  }

  async queryQRCodeInfoWithOptions(request: QueryQRCodeInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryQRCodeInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.secretNumber)) {
      query["SecretNumber"] = request.secretNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryQRCodeInfo",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryQRCodeInfoResponse>(await this.callApi(params, req, runtime), new QueryQRCodeInfoResponse({}));
  }

  async queryQRCodeInfo(request: QueryQRCodeInfoRequest): Promise<QueryQRCodeInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryQRCodeInfoWithOptions(request, runtime);
  }

  async queryRecordingUrlWithOptions(request: QueryRecordingUrlRequest, runtime: $Util.RuntimeOptions): Promise<QueryRecordingUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.callDate)) {
      query["CallDate"] = request.callDate;
    }

    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resType)) {
      query["ResType"] = request.resType;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRecordingUrl",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRecordingUrlResponse>(await this.callApi(params, req, runtime), new QueryRecordingUrlResponse({}));
  }

  async queryRecordingUrl(request: QueryRecordingUrlRequest): Promise<QueryRecordingUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRecordingUrlWithOptions(request, runtime);
  }

  async queryResSummaryInfoWithOptions(request: QueryResSummaryInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryResSummaryInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryResSummaryInfo",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryResSummaryInfoResponse>(await this.callApi(params, req, runtime), new QueryResSummaryInfoResponse({}));
  }

  async queryResSummaryInfo(request: QueryResSummaryInfoRequest): Promise<QueryResSummaryInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryResSummaryInfoWithOptions(request, runtime);
  }

  async queryRingToneUrlWithOptions(request: QueryRingToneUrlRequest, runtime: $Util.RuntimeOptions): Promise<QueryRingToneUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.fileKey)) {
      query["FileKey"] = request.fileKey;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRingToneUrl",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRingToneUrlResponse>(await this.callApi(params, req, runtime), new QueryRingToneUrlResponse({}));
  }

  async queryRingToneUrl(request: QueryRingToneUrlRequest): Promise<QueryRingToneUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRingToneUrlWithOptions(request, runtime);
  }

  async queryRingTonesWithOptions(request: QueryRingTonesRequest, runtime: $Util.RuntimeOptions): Promise<QueryRingTonesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.playType)) {
      query["PlayType"] = request.playType;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRingTones",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRingTonesResponse>(await this.callApi(params, req, runtime), new QueryRingTonesResponse({}));
  }

  async queryRingTones(request: QueryRingTonesRequest): Promise<QueryRingTonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRingTonesWithOptions(request, runtime);
  }

  async querySimplePoolInfoListWithOptions(request: QuerySimplePoolInfoListRequest, runtime: $Util.RuntimeOptions): Promise<QuerySimplePoolInfoListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolName)) {
      query["PoolName"] = request.poolName;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resType)) {
      query["ResType"] = request.resType;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySimplePoolInfoList",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySimplePoolInfoListResponse>(await this.callApi(params, req, runtime), new QuerySimplePoolInfoListResponse({}));
  }

  async querySimplePoolInfoList(request: QuerySimplePoolInfoListRequest): Promise<QuerySimplePoolInfoListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySimplePoolInfoListWithOptions(request, runtime);
  }

  async queryStatisticsInfoWithOptions(request: QueryStatisticsInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryStatisticsInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resType)) {
      query["ResType"] = request.resType;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryStatisticsInfo",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryStatisticsInfoResponse>(await this.callApi(params, req, runtime), new QueryStatisticsInfoResponse({}));
  }

  async queryStatisticsInfo(request: QueryStatisticsInfoRequest): Promise<QueryStatisticsInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryStatisticsInfoWithOptions(request, runtime);
  }

  async queryTagOpenStatusWithOptions(request: QueryTagOpenStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryTagOpenStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.attributeKey)) {
      query["AttributeKey"] = request.attributeKey;
    }

    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.subAttributeKey)) {
      query["SubAttributeKey"] = request.subAttributeKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTagOpenStatus",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTagOpenStatusResponse>(await this.callApi(params, req, runtime), new QueryTagOpenStatusResponse({}));
  }

  async queryTagOpenStatus(request: QueryTagOpenStatusRequest): Promise<QueryTagOpenStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTagOpenStatusWithOptions(request, runtime);
  }

  async queryTransferDetailsWithOptions(request: QueryTransferDetailsRequest, runtime: $Util.RuntimeOptions): Promise<QueryTransferDetailsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTransferDetails",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTransferDetailsResponse>(await this.callApi(params, req, runtime), new QueryTransferDetailsResponse({}));
  }

  async queryTransferDetails(request: QueryTransferDetailsRequest): Promise<QueryTransferDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTransferDetailsWithOptions(request, runtime);
  }

  async queryTransferRecordWithOptions(request: QueryTransferRecordRequest, runtime: $Util.RuntimeOptions): Promise<QueryTransferRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTransferRecord",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTransferRecordResponse>(await this.callApi(params, req, runtime), new QueryTransferRecordResponse({}));
  }

  async queryTransferRecord(request: QueryTransferRecordRequest): Promise<QueryTransferRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTransferRecordWithOptions(request, runtime);
  }

  async queryTransferRecordsWithOptions(request: QueryTransferRecordsRequest, runtime: $Util.RuntimeOptions): Promise<QueryTransferRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTransferRecords",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTransferRecordsResponse>(await this.callApi(params, req, runtime), new QueryTransferRecordsResponse({}));
  }

  async queryTransferRecords(request: QueryTransferRecordsRequest): Promise<QueryTransferRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTransferRecordsWithOptions(request, runtime);
  }

  async queryUserDeleteStatusWithOptions(request: QueryUserDeleteStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryUserDeleteStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bid)) {
      query["Bid"] = request.bid;
    }

    if (!Util.isUnset(request.country)) {
      query["Country"] = request.country;
    }

    if (!Util.isUnset(request.gmtWakeup)) {
      query["GmtWakeup"] = request.gmtWakeup;
    }

    if (!Util.isUnset(request.hid)) {
      query["Hid"] = request.hid;
    }

    if (!Util.isUnset(request.interrupt)) {
      query["Interrupt"] = request.interrupt;
    }

    if (!Util.isUnset(request.invoker)) {
      query["Invoker"] = request.invoker;
    }

    if (!Util.isUnset(request.level)) {
      query["Level"] = request.level;
    }

    if (!Util.isUnset(request.message)) {
      query["Message"] = request.message;
    }

    if (!Util.isUnset(request.pk)) {
      query["Pk"] = request.pk;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.prompt)) {
      query["Prompt"] = request.prompt;
    }

    if (!Util.isUnset(request.success)) {
      query["Success"] = request.success;
    }

    if (!Util.isUnset(request.taskExtraData)) {
      query["TaskExtraData"] = request.taskExtraData;
    }

    if (!Util.isUnset(request.taskIdentifier)) {
      query["TaskIdentifier"] = request.taskIdentifier;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryUserDeleteStatus",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryUserDeleteStatusResponse>(await this.callApi(params, req, runtime), new QueryUserDeleteStatusResponse({}));
  }

  async queryUserDeleteStatus(request: QueryUserDeleteStatusRequest): Promise<QueryUserDeleteStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUserDeleteStatusWithOptions(request, runtime);
  }

  async queryUserInfoWithOptions(request: QueryUserInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryUserInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryUserInfo",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryUserInfoResponse>(await this.callApi(params, req, runtime), new QueryUserInfoResponse({}));
  }

  async queryUserInfo(request: QueryUserInfoRequest): Promise<QueryUserInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUserInfoWithOptions(request, runtime);
  }

  async queryUserResPoolInfoWithOptions(request: QueryUserResPoolInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryUserResPoolInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryUserResPoolInfo",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryUserResPoolInfoResponse>(await this.callApi(params, req, runtime), new QueryUserResPoolInfoResponse({}));
  }

  async queryUserResPoolInfo(request: QueryUserResPoolInfoRequest): Promise<QueryUserResPoolInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUserResPoolInfoWithOptions(request, runtime);
  }

  async queryVirtualOperationShowWithOptions(request: QueryVirtualOperationShowRequest, runtime: $Util.RuntimeOptions): Promise<QueryVirtualOperationShowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryVirtualOperationShow",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryVirtualOperationShowResponse>(await this.callApi(params, req, runtime), new QueryVirtualOperationShowResponse({}));
  }

  async queryVirtualOperationShow(request: QueryVirtualOperationShowRequest): Promise<QueryVirtualOperationShowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryVirtualOperationShowWithOptions(request, runtime);
  }

  async queryWarningListWithOptions(request: QueryWarningListRequest, runtime: $Util.RuntimeOptions): Promise<QueryWarningListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryWarningList",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryWarningListResponse>(await this.callApi(params, req, runtime), new QueryWarningListResponse({}));
  }

  async queryWarningList(request: QueryWarningListRequest): Promise<QueryWarningListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryWarningListWithOptions(request, runtime);
  }

  async queryWaybillOrderInfoWithOptions(request: QueryWaybillOrderInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryWaybillOrderInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.outerOrderCode)) {
      query["OuterOrderCode"] = request.outerOrderCode;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryWaybillOrderInfo",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryWaybillOrderInfoResponse>(await this.callApi(params, req, runtime), new QueryWaybillOrderInfoResponse({}));
  }

  async queryWaybillOrderInfo(request: QueryWaybillOrderInfoRequest): Promise<QueryWaybillOrderInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryWaybillOrderInfoWithOptions(request, runtime);
  }

  async queryWaybillOrderStatisticsInfoWithOptions(request: QueryWaybillOrderStatisticsInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryWaybillOrderStatisticsInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.granularity)) {
      query["Granularity"] = request.granularity;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryWaybillOrderStatisticsInfo",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryWaybillOrderStatisticsInfoResponse>(await this.callApi(params, req, runtime), new QueryWaybillOrderStatisticsInfoResponse({}));
  }

  async queryWaybillOrderStatisticsInfo(request: QueryWaybillOrderStatisticsInfoRequest): Promise<QueryWaybillOrderStatisticsInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryWaybillOrderStatisticsInfoWithOptions(request, runtime);
  }

  async releaseResourceWithOptions(request: ReleaseResourceRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.isDisplayPool)) {
      query["IsDisplayPool"] = request.isDisplayPool;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resType)) {
      query["ResType"] = request.resType;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.secretNo)) {
      query["SecretNo"] = request.secretNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseResource",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseResourceResponse>(await this.callApi(params, req, runtime), new ReleaseResourceResponse({}));
  }

  async releaseResource(request: ReleaseResourceRequest): Promise<ReleaseResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseResourceWithOptions(request, runtime);
  }

  async testTtsRingToneWithOptions(request: TestTtsRingToneRequest, runtime: $Util.RuntimeOptions): Promise<TestTtsRingToneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tts)) {
      query["Tts"] = request.tts;
    }

    if (!Util.isUnset(request.voiceSpeed)) {
      query["VoiceSpeed"] = request.voiceSpeed;
    }

    if (!Util.isUnset(request.voiceStyle)) {
      query["VoiceStyle"] = request.voiceStyle;
    }

    if (!Util.isUnset(request.voiceType)) {
      query["VoiceType"] = request.voiceType;
    }

    if (!Util.isUnset(request.voiceVolume)) {
      query["VoiceVolume"] = request.voiceVolume;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TestTtsRingTone",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TestTtsRingToneResponse>(await this.callApi(params, req, runtime), new TestTtsRingToneResponse({}));
  }

  async testTtsRingTone(request: TestTtsRingToneRequest): Promise<TestTtsRingToneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.testTtsRingToneWithOptions(request, runtime);
  }

  async unbindResourceWithOptions(request: UnbindResourceRequest, runtime: $Util.RuntimeOptions): Promise<UnbindResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.bindIds)) {
      query["BindIds"] = request.bindIds;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resType)) {
      query["ResType"] = request.resType;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.secretNo)) {
      query["SecretNo"] = request.secretNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnbindResource",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindResourceResponse>(await this.callApi(params, req, runtime), new UnbindResourceResponse({}));
  }

  async unbindResource(request: UnbindResourceRequest): Promise<UnbindResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindResourceWithOptions(request, runtime);
  }

  async unlockResourceWithOptions(request: UnlockResourceRequest, runtime: $Util.RuntimeOptions): Promise<UnlockResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.secretNo)) {
      query["SecretNo"] = request.secretNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnlockResource",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnlockResourceResponse>(await this.callApi(params, req, runtime), new UnlockResourceResponse({}));
  }

  async unlockResource(request: UnlockResourceRequest): Promise<UnlockResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unlockResourceWithOptions(request, runtime);
  }

  async updateContactsWithOptions(request: UpdateContactsRequest, runtime: $Util.RuntimeOptions): Promise<UpdateContactsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateContacts",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateContactsResponse>(await this.callApi(params, req, runtime), new UpdateContactsResponse({}));
  }

  async updateContacts(request: UpdateContactsRequest): Promise<UpdateContactsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateContactsWithOptions(request, runtime);
  }

  async updateGroupDetailWithOptions(request: UpdateGroupDetailRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGroupDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGroupDetail",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGroupDetailResponse>(await this.callApi(params, req, runtime), new UpdateGroupDetailResponse({}));
  }

  async updateGroupDetail(request: UpdateGroupDetailRequest): Promise<UpdateGroupDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGroupDetailWithOptions(request, runtime);
  }

  async updateGroupInfoWithOptions(request: UpdateGroupInfoRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGroupInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGroupInfo",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGroupInfoResponse>(await this.callApi(params, req, runtime), new UpdateGroupInfoResponse({}));
  }

  async updateGroupInfo(request: UpdateGroupInfoRequest): Promise<UpdateGroupInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGroupInfoWithOptions(request, runtime);
  }

  async updatePoolNameWithOptions(request: UpdatePoolNameRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePoolNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.poolName)) {
      query["PoolName"] = request.poolName;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resType)) {
      query["ResType"] = request.resType;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePoolName",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdatePoolNameResponse>(await this.callApi(params, req, runtime), new UpdatePoolNameResponse({}));
  }

  async updatePoolName(request: UpdatePoolNameRequest): Promise<UpdatePoolNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePoolNameWithOptions(request, runtime);
  }

  async updateResRemarkWithOptions(request: UpdateResRemarkRequest, runtime: $Util.RuntimeOptions): Promise<UpdateResRemarkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.billId)) {
      query["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.resType)) {
      query["ResType"] = request.resType;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.secretNo)) {
      query["SecretNo"] = request.secretNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateResRemark",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateResRemarkResponse>(await this.callApi(params, req, runtime), new UpdateResRemarkResponse({}));
  }

  async updateResRemark(request: UpdateResRemarkRequest): Promise<UpdateResRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateResRemarkWithOptions(request, runtime);
  }

  async validateOrderWithOptions(request: ValidateOrderRequest, runtime: $Util.RuntimeOptions): Promise<ValidateOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.data)) {
      query["data"] = request.data;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ValidateOrder",
      version: "2017-08-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ValidateOrderResponse>(await this.callApi(params, req, runtime), new ValidateOrderResponse({}));
  }

  async validateOrder(request: ValidateOrderRequest): Promise<ValidateOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.validateOrderWithOptions(request, runtime);
  }

}
