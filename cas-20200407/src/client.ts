// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CancelCertificateForPackageRequestRequest extends $tea.Model {
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

export class CancelCertificateForPackageRequestResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelCertificateForPackageRequestResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelCertificateForPackageRequestResponseBody;
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
      body: CancelCertificateForPackageRequestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderRequestRequest extends $tea.Model {
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

export class CancelOrderRequestResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderRequestResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelOrderRequestResponseBody;
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
      body: CancelOrderRequestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateForPackageRequestRequest extends $tea.Model {
  companyName?: string;
  csr?: string;
  domain?: string;
  email?: string;
  phone?: string;
  productCode?: string;
  username?: string;
  validateType?: string;
  static names(): { [key: string]: string } {
    return {
      companyName: 'CompanyName',
      csr: 'Csr',
      domain: 'Domain',
      email: 'Email',
      phone: 'Phone',
      productCode: 'ProductCode',
      username: 'Username',
      validateType: 'ValidateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyName: 'string',
      csr: 'string',
      domain: 'string',
      email: 'string',
      phone: 'string',
      productCode: 'string',
      username: 'string',
      validateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateForPackageRequestResponseBody extends $tea.Model {
  orderId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateForPackageRequestResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateCertificateForPackageRequestResponseBody;
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
      body: CreateCertificateForPackageRequestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateRequestRequest extends $tea.Model {
  domain?: string;
  email?: string;
  phone?: string;
  productCode?: string;
  username?: string;
  validateType?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      email: 'Email',
      phone: 'Phone',
      productCode: 'ProductCode',
      username: 'Username',
      validateType: 'ValidateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      email: 'string',
      phone: 'string',
      productCode: 'string',
      username: 'string',
      validateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateRequestResponseBody extends $tea.Model {
  orderId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateRequestResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateCertificateRequestResponseBody;
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
      body: CreateCertificateRequestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateWithCsrRequestRequest extends $tea.Model {
  csr?: string;
  email?: string;
  phone?: string;
  productCode?: string;
  username?: string;
  validateType?: string;
  static names(): { [key: string]: string } {
    return {
      csr: 'Csr',
      email: 'Email',
      phone: 'Phone',
      productCode: 'ProductCode',
      username: 'Username',
      validateType: 'ValidateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csr: 'string',
      email: 'string',
      phone: 'string',
      productCode: 'string',
      username: 'string',
      validateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateWithCsrRequestResponseBody extends $tea.Model {
  orderId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateWithCsrRequestResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateCertificateWithCsrRequestResponseBody;
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
      body: CreateCertificateWithCsrRequestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCertificateRequestRequest extends $tea.Model {
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

export class DeleteCertificateRequestResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCertificateRequestResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteCertificateRequestResponseBody;
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
      body: DeleteCertificateRequestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePCACertRequest extends $tea.Model {
  identifier?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePCACertResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePCACertResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeletePCACertResponseBody;
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
      body: DeletePCACertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificateStateRequest extends $tea.Model {
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

export class DescribeCertificateStateResponseBody extends $tea.Model {
  certificate?: string;
  content?: string;
  domain?: string;
  privateKey?: string;
  recordDomain?: string;
  recordType?: string;
  recordValue?: string;
  requestId?: string;
  type?: string;
  uri?: string;
  validateType?: string;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      content: 'Content',
      domain: 'Domain',
      privateKey: 'PrivateKey',
      recordDomain: 'RecordDomain',
      recordType: 'RecordType',
      recordValue: 'RecordValue',
      requestId: 'RequestId',
      type: 'Type',
      uri: 'Uri',
      validateType: 'ValidateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: 'string',
      content: 'string',
      domain: 'string',
      privateKey: 'string',
      recordDomain: 'string',
      recordType: 'string',
      recordValue: 'string',
      requestId: 'string',
      type: 'string',
      uri: 'string',
      validateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificateStateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCertificateStateResponseBody;
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
      body: DescribeCertificateStateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackageStateRequest extends $tea.Model {
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

export class DescribePackageStateResponseBody extends $tea.Model {
  issuedCount?: number;
  productCode?: string;
  requestId?: string;
  totalCount?: number;
  usedCount?: number;
  static names(): { [key: string]: string } {
    return {
      issuedCount: 'IssuedCount',
      productCode: 'ProductCode',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      usedCount: 'UsedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issuedCount: 'number',
      productCode: 'string',
      requestId: 'string',
      totalCount: 'number',
      usedCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackageStateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePackageStateResponseBody;
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
      body: DescribePackageStateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCertRequest extends $tea.Model {
  currentPage?: number;
  keyWord?: string;
  showSize?: number;
  status?: string;
  warehouseId?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      keyWord: 'KeyWord',
      showSize: 'ShowSize',
      status: 'Status',
      warehouseId: 'WarehouseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      keyWord: 'string',
      showSize: 'number',
      status: 'string',
      warehouseId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCertResponseBody extends $tea.Model {
  certList?: ListCertResponseBodyCertList[];
  currentPage?: number;
  requestId?: string;
  showSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      certList: 'CertList',
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certList: { 'type': 'array', 'itemType': ListCertResponseBodyCertList },
      currentPage: 'number',
      requestId: 'string',
      showSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCertResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCertResponseBody;
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
      body: ListCertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCertWarehouseRequest extends $tea.Model {
  currentPage?: number;
  instanceId?: string;
  name?: string;
  showSize?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      name: 'Name',
      showSize: 'ShowSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      instanceId: 'string',
      name: 'string',
      showSize: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCertWarehouseResponseBody extends $tea.Model {
  certWarehouseList?: ListCertWarehouseResponseBodyCertWarehouseList[];
  currentPage?: number;
  requestId?: string;
  showSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      certWarehouseList: 'CertWarehouseList',
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certWarehouseList: { 'type': 'array', 'itemType': ListCertWarehouseResponseBodyCertWarehouseList },
      currentPage: 'number',
      requestId: 'string',
      showSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCertWarehouseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCertWarehouseResponseBody;
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
      body: ListCertWarehouseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserCertificateOrderRequest extends $tea.Model {
  currentPage?: number;
  keyword?: string;
  orderType?: string;
  showSize?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      keyword: 'Keyword',
      orderType: 'OrderType',
      showSize: 'ShowSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      keyword: 'string',
      orderType: 'string',
      showSize: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserCertificateOrderResponseBody extends $tea.Model {
  certificateOrderList?: ListUserCertificateOrderResponseBodyCertificateOrderList[];
  currentPage?: number;
  requestId?: string;
  showSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      certificateOrderList: 'CertificateOrderList',
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateOrderList: { 'type': 'array', 'itemType': ListUserCertificateOrderResponseBodyCertificateOrderList },
      currentPage: 'number',
      requestId: 'string',
      showSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserCertificateOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListUserCertificateOrderResponseBody;
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
      body: ListUserCertificateOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewCertificateOrderForPackageRequestRequest extends $tea.Model {
  csr?: string;
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      csr: 'Csr',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csr: 'string',
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewCertificateOrderForPackageRequestResponseBody extends $tea.Model {
  orderId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewCertificateOrderForPackageRequestResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RenewCertificateOrderForPackageRequestResponseBody;
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
      body: RenewCertificateOrderForPackageRequestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignRequest extends $tea.Model {
  certIdentifier?: string;
  message?: string;
  messageType?: string;
  signingAlgorithm?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      message: 'Message',
      messageType: 'MessageType',
      signingAlgorithm: 'SigningAlgorithm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      message: 'string',
      messageType: 'string',
      signingAlgorithm: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignResponseBody extends $tea.Model {
  requestId?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SignResponseBody;
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
      body: SignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadPCACertRequest extends $tea.Model {
  cert?: string;
  name?: string;
  privateKey?: string;
  warehouseId?: number;
  static names(): { [key: string]: string } {
    return {
      cert: 'Cert',
      name: 'Name',
      privateKey: 'PrivateKey',
      warehouseId: 'WarehouseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cert: 'string',
      name: 'string',
      privateKey: 'string',
      warehouseId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadPCACertResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadPCACertResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UploadPCACertResponseBody;
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
      body: UploadPCACertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyRequest extends $tea.Model {
  identifier?: string;
  message?: string;
  messageType?: string;
  signatureValue?: string;
  signingAlgorithm?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
      message: 'Message',
      messageType: 'MessageType',
      signatureValue: 'SignatureValue',
      signingAlgorithm: 'SigningAlgorithm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
      message: 'string',
      messageType: 'string',
      signatureValue: 'string',
      signingAlgorithm: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyResponseBody extends $tea.Model {
  requestId?: string;
  signatureValid?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      signatureValid: 'SignatureValid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      signatureValid: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: VerifyResponseBody;
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
      body: VerifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCertResponseBodyCertList extends $tea.Model {
  afterDate?: number;
  beforeDate?: number;
  commonName?: string;
  existPrivateKey?: boolean;
  identifier?: string;
  issuer?: string;
  sans?: string;
  sourceType?: string;
  status?: string;
  whId?: number;
  whInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      beforeDate: 'BeforeDate',
      commonName: 'CommonName',
      existPrivateKey: 'ExistPrivateKey',
      identifier: 'Identifier',
      issuer: 'Issuer',
      sans: 'Sans',
      sourceType: 'SourceType',
      status: 'Status',
      whId: 'WhId',
      whInstanceId: 'WhInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDate: 'number',
      beforeDate: 'number',
      commonName: 'string',
      existPrivateKey: 'boolean',
      identifier: 'string',
      issuer: 'string',
      sans: 'string',
      sourceType: 'string',
      status: 'string',
      whId: 'number',
      whInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCertWarehouseResponseBodyCertWarehouseList extends $tea.Model {
  endTime?: number;
  instanceId?: string;
  isExpired?: boolean;
  name?: string;
  pcaInstanceId?: string;
  qps?: number;
  type?: string;
  whId?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      isExpired: 'IsExpired',
      name: 'Name',
      pcaInstanceId: 'PcaInstanceId',
      qps: 'Qps',
      type: 'Type',
      whId: 'WhId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      isExpired: 'boolean',
      name: 'string',
      pcaInstanceId: 'string',
      qps: 'number',
      type: 'string',
      whId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserCertificateOrderResponseBodyCertificateOrderList extends $tea.Model {
  algorithm?: string;
  aliyunOrderId?: number;
  buyDate?: number;
  certEndTime?: number;
  certStartTime?: number;
  certType?: string;
  domain?: string;
  domainCount?: number;
  domainType?: string;
  instanceId?: string;
  orderId?: number;
  partnerOrderId?: string;
  productCode?: string;
  productName?: string;
  rootBrand?: string;
  sourceType?: string;
  status?: string;
  trusteeStatus?: string;
  wildDomainCount?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      aliyunOrderId: 'AliyunOrderId',
      buyDate: 'BuyDate',
      certEndTime: 'CertEndTime',
      certStartTime: 'CertStartTime',
      certType: 'CertType',
      domain: 'Domain',
      domainCount: 'DomainCount',
      domainType: 'DomainType',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      partnerOrderId: 'PartnerOrderId',
      productCode: 'ProductCode',
      productName: 'ProductName',
      rootBrand: 'RootBrand',
      sourceType: 'SourceType',
      status: 'Status',
      trusteeStatus: 'TrusteeStatus',
      wildDomainCount: 'WildDomainCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      aliyunOrderId: 'number',
      buyDate: 'number',
      certEndTime: 'number',
      certStartTime: 'number',
      certType: 'string',
      domain: 'string',
      domainCount: 'number',
      domainType: 'string',
      instanceId: 'string',
      orderId: 'number',
      partnerOrderId: 'string',
      productCode: 'string',
      productName: 'string',
      rootBrand: 'string',
      sourceType: 'string',
      status: 'string',
      trusteeStatus: 'string',
      wildDomainCount: 'number',
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
      'cn-hangzhou': "cas.aliyuncs.com",
      'ap-northeast-2-pop': "cas.aliyuncs.com",
      'ap-southeast-1': "cas.aliyuncs.com",
      'ap-southeast-3': "cas.aliyuncs.com",
      'ap-southeast-5': "cas.aliyuncs.com",
      'cn-beijing': "cas.aliyuncs.com",
      'cn-beijing-finance-1': "cas.aliyuncs.com",
      'cn-beijing-finance-pop': "cas.aliyuncs.com",
      'cn-beijing-gov-1': "cas.aliyuncs.com",
      'cn-beijing-nu16-b01': "cas.aliyuncs.com",
      'cn-chengdu': "cas.aliyuncs.com",
      'cn-edge-1': "cas.aliyuncs.com",
      'cn-fujian': "cas.aliyuncs.com",
      'cn-haidian-cm12-c01': "cas.aliyuncs.com",
      'cn-hangzhou-bj-b01': "cas.aliyuncs.com",
      'cn-hangzhou-finance': "cas.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "cas.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "cas.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "cas.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "cas.aliyuncs.com",
      'cn-hangzhou-test-306': "cas.aliyuncs.com",
      'cn-hongkong': "cas.aliyuncs.com",
      'cn-hongkong-finance-pop': "cas.aliyuncs.com",
      'cn-huhehaote': "cas.aliyuncs.com",
      'cn-north-2-gov-1': "cas.aliyuncs.com",
      'cn-qingdao': "cas.aliyuncs.com",
      'cn-qingdao-nebula': "cas.aliyuncs.com",
      'cn-shanghai': "cas.aliyuncs.com",
      'cn-shanghai-et15-b01': "cas.aliyuncs.com",
      'cn-shanghai-et2-b01': "cas.aliyuncs.com",
      'cn-shanghai-finance-1': "cas.aliyuncs.com",
      'cn-shanghai-inner': "cas.aliyuncs.com",
      'cn-shanghai-internal-test-1': "cas.aliyuncs.com",
      'cn-shenzhen': "cas.aliyuncs.com",
      'cn-shenzhen-finance-1': "cas.aliyuncs.com",
      'cn-shenzhen-inner': "cas.aliyuncs.com",
      'cn-shenzhen-st4-d01': "cas.aliyuncs.com",
      'cn-shenzhen-su18-b01': "cas.aliyuncs.com",
      'cn-wuhan': "cas.aliyuncs.com",
      'cn-yushanfang': "cas.aliyuncs.com",
      'cn-zhangbei-na61-b01': "cas.aliyuncs.com",
      'cn-zhangjiakou': "cas.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "cas.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "cas.aliyuncs.com",
      'eu-west-1': "cas.aliyuncs.com",
      'eu-west-1-oxs': "cas.aliyuncs.com",
      'rus-west-1-pop': "cas.aliyuncs.com",
      'us-east-1': "cas.aliyuncs.com",
      'us-west-1': "cas.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cas", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async cancelCertificateForPackageRequestWithOptions(request: CancelCertificateForPackageRequestRequest, runtime: $Util.RuntimeOptions): Promise<CancelCertificateForPackageRequestResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelCertificateForPackageRequest",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelCertificateForPackageRequestResponse>(await this.callApi(params, req, runtime), new CancelCertificateForPackageRequestResponse({}));
  }

  async cancelCertificateForPackageRequest(request: CancelCertificateForPackageRequestRequest): Promise<CancelCertificateForPackageRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelCertificateForPackageRequestWithOptions(request, runtime);
  }

  async cancelOrderRequestWithOptions(request: CancelOrderRequestRequest, runtime: $Util.RuntimeOptions): Promise<CancelOrderRequestResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelOrderRequest",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelOrderRequestResponse>(await this.callApi(params, req, runtime), new CancelOrderRequestResponse({}));
  }

  async cancelOrderRequest(request: CancelOrderRequestRequest): Promise<CancelOrderRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelOrderRequestWithOptions(request, runtime);
  }

  async createCertificateForPackageRequestWithOptions(request: CreateCertificateForPackageRequestRequest, runtime: $Util.RuntimeOptions): Promise<CreateCertificateForPackageRequestResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.companyName)) {
      query["CompanyName"] = request.companyName;
    }

    if (!Util.isUnset(request.csr)) {
      query["Csr"] = request.csr;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.phone)) {
      query["Phone"] = request.phone;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.username)) {
      query["Username"] = request.username;
    }

    if (!Util.isUnset(request.validateType)) {
      query["ValidateType"] = request.validateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCertificateForPackageRequest",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCertificateForPackageRequestResponse>(await this.callApi(params, req, runtime), new CreateCertificateForPackageRequestResponse({}));
  }

  async createCertificateForPackageRequest(request: CreateCertificateForPackageRequestRequest): Promise<CreateCertificateForPackageRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCertificateForPackageRequestWithOptions(request, runtime);
  }

  async createCertificateRequestWithOptions(request: CreateCertificateRequestRequest, runtime: $Util.RuntimeOptions): Promise<CreateCertificateRequestResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.phone)) {
      query["Phone"] = request.phone;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.username)) {
      query["Username"] = request.username;
    }

    if (!Util.isUnset(request.validateType)) {
      query["ValidateType"] = request.validateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCertificateRequest",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCertificateRequestResponse>(await this.callApi(params, req, runtime), new CreateCertificateRequestResponse({}));
  }

  async createCertificateRequest(request: CreateCertificateRequestRequest): Promise<CreateCertificateRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCertificateRequestWithOptions(request, runtime);
  }

  async createCertificateWithCsrRequestWithOptions(request: CreateCertificateWithCsrRequestRequest, runtime: $Util.RuntimeOptions): Promise<CreateCertificateWithCsrRequestResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.csr)) {
      query["Csr"] = request.csr;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.phone)) {
      query["Phone"] = request.phone;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.username)) {
      query["Username"] = request.username;
    }

    if (!Util.isUnset(request.validateType)) {
      query["ValidateType"] = request.validateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCertificateWithCsrRequest",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCertificateWithCsrRequestResponse>(await this.callApi(params, req, runtime), new CreateCertificateWithCsrRequestResponse({}));
  }

  async createCertificateWithCsrRequest(request: CreateCertificateWithCsrRequestRequest): Promise<CreateCertificateWithCsrRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCertificateWithCsrRequestWithOptions(request, runtime);
  }

  async deleteCertificateRequestWithOptions(request: DeleteCertificateRequestRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCertificateRequestResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCertificateRequest",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCertificateRequestResponse>(await this.callApi(params, req, runtime), new DeleteCertificateRequestResponse({}));
  }

  async deleteCertificateRequest(request: DeleteCertificateRequestRequest): Promise<DeleteCertificateRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCertificateRequestWithOptions(request, runtime);
  }

  async deletePCACertWithOptions(request: DeletePCACertRequest, runtime: $Util.RuntimeOptions): Promise<DeletePCACertResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeletePCACert",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePCACertResponse>(await this.callApi(params, req, runtime), new DeletePCACertResponse({}));
  }

  async deletePCACert(request: DeletePCACertRequest): Promise<DeletePCACertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePCACertWithOptions(request, runtime);
  }

  async describeCertificateStateWithOptions(request: DescribeCertificateStateRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCertificateStateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCertificateState",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCertificateStateResponse>(await this.callApi(params, req, runtime), new DescribeCertificateStateResponse({}));
  }

  async describeCertificateState(request: DescribeCertificateStateRequest): Promise<DescribeCertificateStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCertificateStateWithOptions(request, runtime);
  }

  async describePackageStateWithOptions(request: DescribePackageStateRequest, runtime: $Util.RuntimeOptions): Promise<DescribePackageStateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePackageState",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePackageStateResponse>(await this.callApi(params, req, runtime), new DescribePackageStateResponse({}));
  }

  async describePackageState(request: DescribePackageStateRequest): Promise<DescribePackageStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePackageStateWithOptions(request, runtime);
  }

  async listCertWithOptions(request: ListCertRequest, runtime: $Util.RuntimeOptions): Promise<ListCertResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!Util.isUnset(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.warehouseId)) {
      query["WarehouseId"] = request.warehouseId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCert",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCertResponse>(await this.callApi(params, req, runtime), new ListCertResponse({}));
  }

  async listCert(request: ListCertRequest): Promise<ListCertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCertWithOptions(request, runtime);
  }

  async listCertWarehouseWithOptions(request: ListCertWarehouseRequest, runtime: $Util.RuntimeOptions): Promise<ListCertWarehouseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCertWarehouse",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCertWarehouseResponse>(await this.callApi(params, req, runtime), new ListCertWarehouseResponse({}));
  }

  async listCertWarehouse(request: ListCertWarehouseRequest): Promise<ListCertWarehouseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCertWarehouseWithOptions(request, runtime);
  }

  async listUserCertificateOrderWithOptions(request: ListUserCertificateOrderRequest, runtime: $Util.RuntimeOptions): Promise<ListUserCertificateOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserCertificateOrder",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserCertificateOrderResponse>(await this.callApi(params, req, runtime), new ListUserCertificateOrderResponse({}));
  }

  async listUserCertificateOrder(request: ListUserCertificateOrderRequest): Promise<ListUserCertificateOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserCertificateOrderWithOptions(request, runtime);
  }

  async renewCertificateOrderForPackageRequestWithOptions(request: RenewCertificateOrderForPackageRequestRequest, runtime: $Util.RuntimeOptions): Promise<RenewCertificateOrderForPackageRequestResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.csr)) {
      query["Csr"] = request.csr;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RenewCertificateOrderForPackageRequest",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenewCertificateOrderForPackageRequestResponse>(await this.callApi(params, req, runtime), new RenewCertificateOrderForPackageRequestResponse({}));
  }

  async renewCertificateOrderForPackageRequest(request: RenewCertificateOrderForPackageRequestRequest): Promise<RenewCertificateOrderForPackageRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewCertificateOrderForPackageRequestWithOptions(request, runtime);
  }

  async signWithOptions(request: SignRequest, runtime: $Util.RuntimeOptions): Promise<SignResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    if (!Util.isUnset(request.message)) {
      query["Message"] = request.message;
    }

    if (!Util.isUnset(request.messageType)) {
      query["MessageType"] = request.messageType;
    }

    if (!Util.isUnset(request.signingAlgorithm)) {
      query["SigningAlgorithm"] = request.signingAlgorithm;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Sign",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SignResponse>(await this.callApi(params, req, runtime), new SignResponse({}));
  }

  async sign(request: SignRequest): Promise<SignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.signWithOptions(request, runtime);
  }

  async uploadPCACertWithOptions(request: UploadPCACertRequest, runtime: $Util.RuntimeOptions): Promise<UploadPCACertResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cert)) {
      query["Cert"] = request.cert;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!Util.isUnset(request.warehouseId)) {
      query["WarehouseId"] = request.warehouseId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadPCACert",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadPCACertResponse>(await this.callApi(params, req, runtime), new UploadPCACertResponse({}));
  }

  async uploadPCACert(request: UploadPCACertRequest): Promise<UploadPCACertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadPCACertWithOptions(request, runtime);
  }

  async verifyWithOptions(request: VerifyRequest, runtime: $Util.RuntimeOptions): Promise<VerifyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    if (!Util.isUnset(request.message)) {
      query["Message"] = request.message;
    }

    if (!Util.isUnset(request.messageType)) {
      query["MessageType"] = request.messageType;
    }

    if (!Util.isUnset(request.signatureValue)) {
      query["SignatureValue"] = request.signatureValue;
    }

    if (!Util.isUnset(request.signingAlgorithm)) {
      query["SigningAlgorithm"] = request.signingAlgorithm;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Verify",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyResponse>(await this.callApi(params, req, runtime), new VerifyResponse({}));
  }

  async verify(request: VerifyRequest): Promise<VerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyWithOptions(request, runtime);
  }

}
