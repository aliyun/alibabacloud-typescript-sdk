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

export class CreateWHClientCertificateRequest extends $tea.Model {
  afterTime?: number;
  algorithm?: string;
  beforeTime?: number;
  commonName?: string;
  country?: string;
  csr?: string;
  days?: number;
  immediately?: number;
  locality?: string;
  months?: number;
  organization?: string;
  organizationUnit?: string;
  parentIdentifier?: string;
  sanType?: number;
  sanValue?: string;
  state?: string;
  years?: number;
  static names(): { [key: string]: string } {
    return {
      afterTime: 'AfterTime',
      algorithm: 'Algorithm',
      beforeTime: 'BeforeTime',
      commonName: 'CommonName',
      country: 'Country',
      csr: 'Csr',
      days: 'Days',
      immediately: 'Immediately',
      locality: 'Locality',
      months: 'Months',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      parentIdentifier: 'ParentIdentifier',
      sanType: 'SanType',
      sanValue: 'SanValue',
      state: 'State',
      years: 'Years',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterTime: 'number',
      algorithm: 'string',
      beforeTime: 'number',
      commonName: 'string',
      country: 'string',
      csr: 'string',
      days: 'number',
      immediately: 'number',
      locality: 'string',
      months: 'number',
      organization: 'string',
      organizationUnit: 'string',
      parentIdentifier: 'string',
      sanType: 'number',
      sanValue: 'string',
      state: 'string',
      years: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWHClientCertificateResponseBody extends $tea.Model {
  certificateChain?: string;
  identifier?: string;
  parentX509Certificate?: string;
  requestId?: string;
  rootX509Certificate?: string;
  x509Certificate?: string;
  static names(): { [key: string]: string } {
    return {
      certificateChain: 'CertificateChain',
      identifier: 'Identifier',
      parentX509Certificate: 'ParentX509Certificate',
      requestId: 'RequestId',
      rootX509Certificate: 'RootX509Certificate',
      x509Certificate: 'X509Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateChain: 'string',
      identifier: 'string',
      parentX509Certificate: 'string',
      requestId: 'string',
      rootX509Certificate: 'string',
      x509Certificate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWHClientCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateWHClientCertificateResponseBody;
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
      body: CreateWHClientCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecryptRequest extends $tea.Model {
  algorithm?: string;
  certIdentifier?: string;
  ciphertextBlob?: string;
  messageType?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      certIdentifier: 'CertIdentifier',
      ciphertextBlob: 'CiphertextBlob',
      messageType: 'MessageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      certIdentifier: 'string',
      ciphertextBlob: 'string',
      messageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecryptResponseBody extends $tea.Model {
  certIdentifier?: string;
  plaintext?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      plaintext: 'Plaintext',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      plaintext: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecryptResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DecryptResponseBody;
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
      body: DecryptResponseBody,
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

export class DeleteUserCertificateRequest extends $tea.Model {
  certId?: number;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserCertificateResponseBody extends $tea.Model {
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

export class DeleteUserCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteUserCertificateResponseBody;
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
      body: DeleteUserCertificateResponseBody,
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

export class EncryptRequest extends $tea.Model {
  algorithm?: string;
  certIdentifier?: string;
  messageType?: string;
  plaintext?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      certIdentifier: 'CertIdentifier',
      messageType: 'MessageType',
      plaintext: 'Plaintext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      certIdentifier: 'string',
      messageType: 'string',
      plaintext: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncryptResponseBody extends $tea.Model {
  certIdentifier?: string;
  ciphertextBlob?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      ciphertextBlob: 'CiphertextBlob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      ciphertextBlob: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncryptResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EncryptResponseBody;
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
      body: EncryptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCertWarehouseQuotaResponseBody extends $tea.Model {
  requestId?: string;
  totalQuota?: number;
  useCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalQuota: 'TotalQuota',
      useCount: 'UseCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalQuota: 'number',
      useCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCertWarehouseQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCertWarehouseQuotaResponseBody;
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
      body: GetCertWarehouseQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserCertificateDetailRequest extends $tea.Model {
  certFilter?: boolean;
  certId?: number;
  static names(): { [key: string]: string } {
    return {
      certFilter: 'CertFilter',
      certId: 'CertId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certFilter: 'boolean',
      certId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserCertificateDetailResponseBody extends $tea.Model {
  algorithm?: string;
  buyInAliyun?: boolean;
  cert?: string;
  city?: string;
  common?: string;
  country?: string;
  encryptCert?: string;
  encryptPrivateKey?: string;
  endDate?: string;
  expired?: boolean;
  fingerprint?: string;
  id?: number;
  issuer?: string;
  key?: string;
  name?: string;
  orderId?: number;
  orgName?: string;
  province?: string;
  requestId?: string;
  resourceGroupId?: string;
  sans?: string;
  signCert?: string;
  signPrivateKey?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      buyInAliyun: 'BuyInAliyun',
      cert: 'Cert',
      city: 'City',
      common: 'Common',
      country: 'Country',
      encryptCert: 'EncryptCert',
      encryptPrivateKey: 'EncryptPrivateKey',
      endDate: 'EndDate',
      expired: 'Expired',
      fingerprint: 'Fingerprint',
      id: 'Id',
      issuer: 'Issuer',
      key: 'Key',
      name: 'Name',
      orderId: 'OrderId',
      orgName: 'OrgName',
      province: 'Province',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      sans: 'Sans',
      signCert: 'SignCert',
      signPrivateKey: 'SignPrivateKey',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      buyInAliyun: 'boolean',
      cert: 'string',
      city: 'string',
      common: 'string',
      country: 'string',
      encryptCert: 'string',
      encryptPrivateKey: 'string',
      endDate: 'string',
      expired: 'boolean',
      fingerprint: 'string',
      id: 'number',
      issuer: 'string',
      key: 'string',
      name: 'string',
      orderId: 'number',
      orgName: 'string',
      province: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      sans: 'string',
      signCert: 'string',
      signPrivateKey: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserCertificateDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUserCertificateDetailResponseBody;
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
      body: GetUserCertificateDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCertRequest extends $tea.Model {
  certType?: string;
  currentPage?: number;
  keyWord?: string;
  showSize?: number;
  sourceType?: string;
  status?: string;
  warehouseId?: number;
  static names(): { [key: string]: string } {
    return {
      certType: 'CertType',
      currentPage: 'CurrentPage',
      keyWord: 'KeyWord',
      showSize: 'ShowSize',
      sourceType: 'SourceType',
      status: 'Status',
      warehouseId: 'WarehouseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certType: 'string',
      currentPage: 'number',
      keyWord: 'string',
      showSize: 'number',
      sourceType: 'string',
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
  resourceGroupId?: string;
  showSize?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      keyword: 'Keyword',
      orderType: 'OrderType',
      resourceGroupId: 'ResourceGroupId',
      showSize: 'ShowSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      keyword: 'string',
      orderType: 'string',
      resourceGroupId: 'string',
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

export class RevokeWHClientCertificateRequest extends $tea.Model {
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

export class RevokeWHClientCertificateResponseBody extends $tea.Model {
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

export class RevokeWHClientCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RevokeWHClientCertificateResponseBody;
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
      body: RevokeWHClientCertificateResponseBody,
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
  identifier?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
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

export class UploadUserCertificateRequest extends $tea.Model {
  cert?: string;
  encryptCert?: string;
  encryptPrivateKey?: string;
  key?: string;
  name?: string;
  resourceGroupId?: string;
  signCert?: string;
  signPrivateKey?: string;
  static names(): { [key: string]: string } {
    return {
      cert: 'Cert',
      encryptCert: 'EncryptCert',
      encryptPrivateKey: 'EncryptPrivateKey',
      key: 'Key',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      signCert: 'SignCert',
      signPrivateKey: 'SignPrivateKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cert: 'string',
      encryptCert: 'string',
      encryptPrivateKey: 'string',
      key: 'string',
      name: 'string',
      resourceGroupId: 'string',
      signCert: 'string',
      signPrivateKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadUserCertificateResponseBody extends $tea.Model {
  certId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadUserCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UploadUserCertificateResponseBody;
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
      body: UploadUserCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyRequest extends $tea.Model {
  certIdentifier?: string;
  message?: string;
  messageType?: string;
  signatureValue?: string;
  signingAlgorithm?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      message: 'Message',
      messageType: 'MessageType',
      signatureValue: 'SignatureValue',
      signingAlgorithm: 'SigningAlgorithm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
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
  certType?: string;
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
      certType: 'CertType',
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
      certType: 'string',
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
  certificateId?: number;
  city?: string;
  commonName?: string;
  country?: string;
  domain?: string;
  domainCount?: number;
  domainType?: string;
  endDate?: string;
  expired?: boolean;
  fingerprint?: string;
  instanceId?: string;
  issuer?: string;
  name?: string;
  orderId?: number;
  orgName?: string;
  partnerOrderId?: string;
  productCode?: string;
  productName?: string;
  province?: string;
  resourceGroupId?: string;
  rootBrand?: string;
  sans?: string;
  serialNo?: string;
  sha2?: string;
  sourceType?: string;
  startDate?: string;
  status?: string;
  trusteeStatus?: string;
  upload?: boolean;
  wildDomainCount?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      aliyunOrderId: 'AliyunOrderId',
      buyDate: 'BuyDate',
      certEndTime: 'CertEndTime',
      certStartTime: 'CertStartTime',
      certType: 'CertType',
      certificateId: 'CertificateId',
      city: 'City',
      commonName: 'CommonName',
      country: 'Country',
      domain: 'Domain',
      domainCount: 'DomainCount',
      domainType: 'DomainType',
      endDate: 'EndDate',
      expired: 'Expired',
      fingerprint: 'Fingerprint',
      instanceId: 'InstanceId',
      issuer: 'Issuer',
      name: 'Name',
      orderId: 'OrderId',
      orgName: 'OrgName',
      partnerOrderId: 'PartnerOrderId',
      productCode: 'ProductCode',
      productName: 'ProductName',
      province: 'Province',
      resourceGroupId: 'ResourceGroupId',
      rootBrand: 'RootBrand',
      sans: 'Sans',
      serialNo: 'SerialNo',
      sha2: 'Sha2',
      sourceType: 'SourceType',
      startDate: 'StartDate',
      status: 'Status',
      trusteeStatus: 'TrusteeStatus',
      upload: 'Upload',
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
      certificateId: 'number',
      city: 'string',
      commonName: 'string',
      country: 'string',
      domain: 'string',
      domainCount: 'number',
      domainType: 'string',
      endDate: 'string',
      expired: 'boolean',
      fingerprint: 'string',
      instanceId: 'string',
      issuer: 'string',
      name: 'string',
      orderId: 'number',
      orgName: 'string',
      partnerOrderId: 'string',
      productCode: 'string',
      productName: 'string',
      province: 'string',
      resourceGroupId: 'string',
      rootBrand: 'string',
      sans: 'string',
      serialNo: 'string',
      sha2: 'string',
      sourceType: 'string',
      startDate: 'string',
      status: 'string',
      trusteeStatus: 'string',
      upload: 'boolean',
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
      'cn-huhehaote-nebula-1': "cas.aliyuncs.com",
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
      'cn-wulanchabu': "cas.aliyuncs.com",
      'cn-yushanfang': "cas.aliyuncs.com",
      'cn-zhangbei': "cas.aliyuncs.com",
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

  /**
    * Revokes an issued certificate and cancels the application order of the certificate.
    *
    * @param request CancelCertificateForPackageRequestRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CancelCertificateForPackageRequestResponse
   */
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

  /**
    * Revokes an issued certificate and cancels the application order of the certificate.
    *
    * @param request CancelCertificateForPackageRequestRequest
    * @return CancelCertificateForPackageRequestResponse
   */
  async cancelCertificateForPackageRequest(request: CancelCertificateForPackageRequestRequest): Promise<CancelCertificateForPackageRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelCertificateForPackageRequestWithOptions(request, runtime);
  }

  /**
    * You can call the CancelOrderRequest operation to cancel a certificate application order only in the following scenarios:
    * *   The order is in the **pending validation** state. You have submitted a certificate application but the verification of the domain name ownership is not complete.
    * *   The order is in the **being reviewed** state. You have submitted a certificate application and the verification of the domain name ownership is complete, but the certificate authority (CA) does not complete the review of the certificate application.
    * After a certificate application order is canceled, the status of the order changes to the **pending application** state. In this case, you can call the [DeleteCertificateRequest](~~164109~~) operation to delete the certificate application order. Then, the consumed certificate quota is returned to you.
    *
    * @param request CancelOrderRequestRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CancelOrderRequestResponse
   */
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

  /**
    * You can call the CancelOrderRequest operation to cancel a certificate application order only in the following scenarios:
    * *   The order is in the **pending validation** state. You have submitted a certificate application but the verification of the domain name ownership is not complete.
    * *   The order is in the **being reviewed** state. You have submitted a certificate application and the verification of the domain name ownership is complete, but the certificate authority (CA) does not complete the review of the certificate application.
    * After a certificate application order is canceled, the status of the order changes to the **pending application** state. In this case, you can call the [DeleteCertificateRequest](~~164109~~) operation to delete the certificate application order. Then, the consumed certificate quota is returned to you.
    *
    * @param request CancelOrderRequestRequest
    * @return CancelOrderRequestResponse
   */
  async cancelOrderRequest(request: CancelOrderRequestRequest): Promise<CancelOrderRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelOrderRequestWithOptions(request, runtime);
  }

  /**
    * *   Before you call this operation, make sure that you have purchased a certificate resource plan of the required specifications. For more information about how to purchase a certificate resource plan, see [Purchase a certificate resource plan](~~28542~~). You can call the [DescribePackageState](~~455800~~) operation to query the usage of certificate resource plans of specified specifications, including the total number of certificate resource plans that you purchase, the number of certificate applications that are submitted, and the number of certificates that are issued.
    * *   After you call this operation to submit a certificate application and the certificate is issued, the certificate quota provided by the resource plan that you purchased is consumed. When you call this operation, you can use the **ProductCode** parameter to specify the specifications of the certificate that you want to apply for.
    * *   After you call this operation to submit a certificate application, you also need to call the [DescribeCertificateState](~~455800~~) operation to obtain the information that is required to complete the verification of the domain name ownership, and complete the verification. If you use the DNS verification method, you must complete the verification in the management platform of the domain name. If you use the file verification method, you must complete the verification in the DNS server. Then, the certificate application order will be reviewed by the certificate authority (CA).
    *
    * @param request CreateCertificateForPackageRequestRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateCertificateForPackageRequestResponse
   */
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

  /**
    * *   Before you call this operation, make sure that you have purchased a certificate resource plan of the required specifications. For more information about how to purchase a certificate resource plan, see [Purchase a certificate resource plan](~~28542~~). You can call the [DescribePackageState](~~455800~~) operation to query the usage of certificate resource plans of specified specifications, including the total number of certificate resource plans that you purchase, the number of certificate applications that are submitted, and the number of certificates that are issued.
    * *   After you call this operation to submit a certificate application and the certificate is issued, the certificate quota provided by the resource plan that you purchased is consumed. When you call this operation, you can use the **ProductCode** parameter to specify the specifications of the certificate that you want to apply for.
    * *   After you call this operation to submit a certificate application, you also need to call the [DescribeCertificateState](~~455800~~) operation to obtain the information that is required to complete the verification of the domain name ownership, and complete the verification. If you use the DNS verification method, you must complete the verification in the management platform of the domain name. If you use the file verification method, you must complete the verification in the DNS server. Then, the certificate application order will be reviewed by the certificate authority (CA).
    *
    * @param request CreateCertificateForPackageRequestRequest
    * @return CreateCertificateForPackageRequestResponse
   */
  async createCertificateForPackageRequest(request: CreateCertificateForPackageRequestRequest): Promise<CreateCertificateForPackageRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCertificateForPackageRequestWithOptions(request, runtime);
  }

  /**
    * *   You can call this operation to apply for only DV certificates. If you want to apply for an organization validated (OV) or extended validation (EV) certificate, we recommend that you call the [CreateCertificateForPackageRequest](~~455296~~) operation. This operation allows you to apply for certificates of all specifications and specify the method to generate a certificate signing request (CSR) file.
    * *   Before you call this operation, make sure that you have purchased a certificate resource plan of the required specifications. For more information about how to purchase a certificate resource plan, see [Purchase a certificate resource plan](~~28542~~). You can call the [DescribePackageState](~~455803~~) operation to query the usage of certificate resource plans of specified specifications, including the total number of purchased certificate resource plans of the specified specifications, the number of times that certificate applications have been submitted, and the number of times that certificates have been issued.
    * *   When you call this operation, you can use the **ProductCode** parameter to specify the specifications of the certificate.
    * *   After you call this operation to submit a certificate application, Certificate Management Service automatically creates a CSR file for your application and consumes the certificate quota in the certificate resource plans of the specified specifications that you purchased. After you call this operation, you also need to call the [DescribeCertificateState](~~455800~~) operation to obtain the information that is required to complete domain name verification, and manually complete the verification. If you use the DNS verification method, you must complete the verification on the management platform of the domain name. If you use the file verification method, you must complete the verification on your DNS server. Then, the certificate authority (CA) will review your certificate application.
    *
    * @param request CreateCertificateRequestRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateCertificateRequestResponse
   */
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

  /**
    * *   You can call this operation to apply for only DV certificates. If you want to apply for an organization validated (OV) or extended validation (EV) certificate, we recommend that you call the [CreateCertificateForPackageRequest](~~455296~~) operation. This operation allows you to apply for certificates of all specifications and specify the method to generate a certificate signing request (CSR) file.
    * *   Before you call this operation, make sure that you have purchased a certificate resource plan of the required specifications. For more information about how to purchase a certificate resource plan, see [Purchase a certificate resource plan](~~28542~~). You can call the [DescribePackageState](~~455803~~) operation to query the usage of certificate resource plans of specified specifications, including the total number of purchased certificate resource plans of the specified specifications, the number of times that certificate applications have been submitted, and the number of times that certificates have been issued.
    * *   When you call this operation, you can use the **ProductCode** parameter to specify the specifications of the certificate.
    * *   After you call this operation to submit a certificate application, Certificate Management Service automatically creates a CSR file for your application and consumes the certificate quota in the certificate resource plans of the specified specifications that you purchased. After you call this operation, you also need to call the [DescribeCertificateState](~~455800~~) operation to obtain the information that is required to complete domain name verification, and manually complete the verification. If you use the DNS verification method, you must complete the verification on the management platform of the domain name. If you use the file verification method, you must complete the verification on your DNS server. Then, the certificate authority (CA) will review your certificate application.
    *
    * @param request CreateCertificateRequestRequest
    * @return CreateCertificateRequestResponse
   */
  async createCertificateRequest(request: CreateCertificateRequestRequest): Promise<CreateCertificateRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCertificateRequestWithOptions(request, runtime);
  }

  /**
    * *   You can call the CreateCertificateWithCsrRequest operation to apply only for DV certificates. We recommend that you call the [CreateCertificateForPackageRequest](~~455296~~) operation to submit a certificate application. This operation allows you to apply for certificates of all specifications and specify the method to generate a CSR file.
    * *   Before you call this operation, make sure that you have purchased a certificate resource plan of the required specifications. For more information about how to purchase a certificate resource plan, see [Purchase a certificate resource plan](~~28542~~). You can call the [DescribePackageState](~~164110~~) operation to query the usage of certificate resource plans of specified specifications. The usage information includes the total number of purchased certificate resource plans of the specified specifications, the number of times that certificate applications are submitted, and the number of times that certificates are issued.
    * *   When you call this operation, you can use the **ProductCode** parameter to specify the specifications of the certificate.
    * *   After you call this operation to submit a certificate application, the certificate quota of the required specifications that you purchased is consumed. After you call this operation, you also need to call the [DescribeCertificateState](~~164111~~) operation to obtain the information that is required to complete domain name verification, and manually complete the verification. If you use the DNS verification method, you must complete the verification on the management platform of the domain name. If you use the file verification method, you must complete the verification on your DNS server. The certificate authority (CA) starts to review your certificate application only after the domain name verification is complete.
    *
    * @param request CreateCertificateWithCsrRequestRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateCertificateWithCsrRequestResponse
   */
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

  /**
    * *   You can call the CreateCertificateWithCsrRequest operation to apply only for DV certificates. We recommend that you call the [CreateCertificateForPackageRequest](~~455296~~) operation to submit a certificate application. This operation allows you to apply for certificates of all specifications and specify the method to generate a CSR file.
    * *   Before you call this operation, make sure that you have purchased a certificate resource plan of the required specifications. For more information about how to purchase a certificate resource plan, see [Purchase a certificate resource plan](~~28542~~). You can call the [DescribePackageState](~~164110~~) operation to query the usage of certificate resource plans of specified specifications. The usage information includes the total number of purchased certificate resource plans of the specified specifications, the number of times that certificate applications are submitted, and the number of times that certificates are issued.
    * *   When you call this operation, you can use the **ProductCode** parameter to specify the specifications of the certificate.
    * *   After you call this operation to submit a certificate application, the certificate quota of the required specifications that you purchased is consumed. After you call this operation, you also need to call the [DescribeCertificateState](~~164111~~) operation to obtain the information that is required to complete domain name verification, and manually complete the verification. If you use the DNS verification method, you must complete the verification on the management platform of the domain name. If you use the file verification method, you must complete the verification on your DNS server. The certificate authority (CA) starts to review your certificate application only after the domain name verification is complete.
    *
    * @param request CreateCertificateWithCsrRequestRequest
    * @return CreateCertificateWithCsrRequestResponse
   */
  async createCertificateWithCsrRequest(request: CreateCertificateWithCsrRequestRequest): Promise<CreateCertificateWithCsrRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCertificateWithCsrRequestWithOptions(request, runtime);
  }

  async createWHClientCertificateWithOptions(request: CreateWHClientCertificateRequest, runtime: $Util.RuntimeOptions): Promise<CreateWHClientCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.afterTime)) {
      query["AfterTime"] = request.afterTime;
    }

    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.beforeTime)) {
      query["BeforeTime"] = request.beforeTime;
    }

    if (!Util.isUnset(request.commonName)) {
      query["CommonName"] = request.commonName;
    }

    if (!Util.isUnset(request.country)) {
      query["Country"] = request.country;
    }

    if (!Util.isUnset(request.csr)) {
      query["Csr"] = request.csr;
    }

    if (!Util.isUnset(request.days)) {
      query["Days"] = request.days;
    }

    if (!Util.isUnset(request.immediately)) {
      query["Immediately"] = request.immediately;
    }

    if (!Util.isUnset(request.locality)) {
      query["Locality"] = request.locality;
    }

    if (!Util.isUnset(request.months)) {
      query["Months"] = request.months;
    }

    if (!Util.isUnset(request.organization)) {
      query["Organization"] = request.organization;
    }

    if (!Util.isUnset(request.organizationUnit)) {
      query["OrganizationUnit"] = request.organizationUnit;
    }

    if (!Util.isUnset(request.parentIdentifier)) {
      query["ParentIdentifier"] = request.parentIdentifier;
    }

    if (!Util.isUnset(request.sanType)) {
      query["SanType"] = request.sanType;
    }

    if (!Util.isUnset(request.sanValue)) {
      query["SanValue"] = request.sanValue;
    }

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    if (!Util.isUnset(request.years)) {
      query["Years"] = request.years;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateWHClientCertificate",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateWHClientCertificateResponse>(await this.callApi(params, req, runtime), new CreateWHClientCertificateResponse({}));
  }

  async createWHClientCertificate(request: CreateWHClientCertificateRequest): Promise<CreateWHClientCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWHClientCertificateWithOptions(request, runtime);
  }

  async decryptWithOptions(request: DecryptRequest, runtime: $Util.RuntimeOptions): Promise<DecryptResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    if (!Util.isUnset(request.ciphertextBlob)) {
      query["CiphertextBlob"] = request.ciphertextBlob;
    }

    if (!Util.isUnset(request.messageType)) {
      query["MessageType"] = request.messageType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Decrypt",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DecryptResponse>(await this.callApi(params, req, runtime), new DecryptResponse({}));
  }

  async decrypt(request: DecryptRequest): Promise<DecryptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.decryptWithOptions(request, runtime);
  }

  /**
    * You can call this operation to delete a certificate application order only in the following scenarios:
    * *   The status of the order is review failed. You have called the [DescribeCertificateState](~~455800~~)  operation to query the status of the certificate application order and the value of the **Type** parameter is **verify_fail**.
    * *   The status of the order is **pending application**. You have called the [CancelOrderRequest](~~455299~~) operation to cancel a certificate application order whose status is pending review or being reviewed. The status of the certificate application order that is canceled in this case changes to **pending application**.
    *
    * @param request DeleteCertificateRequestRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteCertificateRequestResponse
   */
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

  /**
    * You can call this operation to delete a certificate application order only in the following scenarios:
    * *   The status of the order is review failed. You have called the [DescribeCertificateState](~~455800~~)  operation to query the status of the certificate application order and the value of the **Type** parameter is **verify_fail**.
    * *   The status of the order is **pending application**. You have called the [CancelOrderRequest](~~455299~~) operation to cancel a certificate application order whose status is pending review or being reviewed. The status of the certificate application order that is canceled in this case changes to **pending application**.
    *
    * @param request DeleteCertificateRequestRequest
    * @return DeleteCertificateRequestResponse
   */
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

  /**
    * You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DeleteUserCertificateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteUserCertificateResponse
   */
  async deleteUserCertificateWithOptions(request: DeleteUserCertificateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certId)) {
      query["CertId"] = request.certId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUserCertificate",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteUserCertificateResponse>(await this.callApi(params, req, runtime), new DeleteUserCertificateResponse({}));
  }

  /**
    * You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DeleteUserCertificateRequest
    * @return DeleteUserCertificateResponse
   */
  async deleteUserCertificate(request: DeleteUserCertificateRequest): Promise<DeleteUserCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserCertificateWithOptions(request, runtime);
  }

  /**
    * If you do not complete the verification of the domain name ownership after you submit a certificate application, you can call this operation to obtain the information that is required to complete the verification. You can complete the verification of the domain name ownership based on the data returned. If you use the DNS verification method, you must complete the verification on the management platform of the domain name. If you use the file verification method, you must complete the verification on the DNS server.
    * The certificate authority (CA) reviews your certificate application only after you complete the verification of the domain name ownership. After the CA approves your certificate application, the CA issues the certificate. If a certificate is issued, you can call this operation to obtain the CA certificate and private key of the certificate.
    *
    * @param request DescribeCertificateStateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCertificateStateResponse
   */
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

  /**
    * If you do not complete the verification of the domain name ownership after you submit a certificate application, you can call this operation to obtain the information that is required to complete the verification. You can complete the verification of the domain name ownership based on the data returned. If you use the DNS verification method, you must complete the verification on the management platform of the domain name. If you use the file verification method, you must complete the verification on the DNS server.
    * The certificate authority (CA) reviews your certificate application only after you complete the verification of the domain name ownership. After the CA approves your certificate application, the CA issues the certificate. If a certificate is issued, you can call this operation to obtain the CA certificate and private key of the certificate.
    *
    * @param request DescribeCertificateStateRequest
    * @return DescribeCertificateStateResponse
   */
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

  async encryptWithOptions(request: EncryptRequest, runtime: $Util.RuntimeOptions): Promise<EncryptResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    if (!Util.isUnset(request.messageType)) {
      query["MessageType"] = request.messageType;
    }

    if (!Util.isUnset(request.plaintext)) {
      query["Plaintext"] = request.plaintext;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Encrypt",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EncryptResponse>(await this.callApi(params, req, runtime), new EncryptResponse({}));
  }

  async encrypt(request: EncryptRequest): Promise<EncryptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.encryptWithOptions(request, runtime);
  }

  async getCertWarehouseQuotaWithOptions(runtime: $Util.RuntimeOptions): Promise<GetCertWarehouseQuotaResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetCertWarehouseQuota",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCertWarehouseQuotaResponse>(await this.callApi(params, req, runtime), new GetCertWarehouseQuotaResponse({}));
  }

  async getCertWarehouseQuota(): Promise<GetCertWarehouseQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCertWarehouseQuotaWithOptions(runtime);
  }

  /**
    * You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request GetUserCertificateDetailRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetUserCertificateDetailResponse
   */
  async getUserCertificateDetailWithOptions(request: GetUserCertificateDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetUserCertificateDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certFilter)) {
      query["CertFilter"] = request.certFilter;
    }

    if (!Util.isUnset(request.certId)) {
      query["CertId"] = request.certId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUserCertificateDetail",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserCertificateDetailResponse>(await this.callApi(params, req, runtime), new GetUserCertificateDetailResponse({}));
  }

  /**
    * You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request GetUserCertificateDetailRequest
    * @return GetUserCertificateDetailResponse
   */
  async getUserCertificateDetail(request: GetUserCertificateDetailRequest): Promise<GetUserCertificateDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserCertificateDetailWithOptions(request, runtime);
  }

  /**
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request ListCertRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListCertResponse
   */
  async listCertWithOptions(request: ListCertRequest, runtime: $Util.RuntimeOptions): Promise<ListCertResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certType)) {
      query["CertType"] = request.certType;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!Util.isUnset(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
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

  /**
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request ListCertRequest
    * @return ListCertResponse
   */
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

  /**
    * You can call the ListUserCertificateOrder operation to query the certificates or certificate orders of users. If you set OrderType to CERT or UPLOAD, certificates are returned. If you set OrderType to CPACK or BUY, certificate orders are returned.
    * ## Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request ListUserCertificateOrderRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListUserCertificateOrderResponse
   */
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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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

  /**
    * You can call the ListUserCertificateOrder operation to query the certificates or certificate orders of users. If you set OrderType to CERT or UPLOAD, certificates are returned. If you set OrderType to CPACK or BUY, certificate orders are returned.
    * ## Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request ListUserCertificateOrderRequest
    * @return ListUserCertificateOrderResponse
   */
  async listUserCertificateOrder(request: ListUserCertificateOrderRequest): Promise<ListUserCertificateOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserCertificateOrderWithOptions(request, runtime);
  }

  /**
    * You can call this operation to submit a renewal application for a certificate only when the order of the certificate is in the expiring state. After the renewal is complete, a new certificate order whose status is pending application is generated. You must submit a certificate application for the new certificate order and install the new certificate after the new certificate is issued.
    * > You can call the [DescribeCertificateState](~~455800~~) operation to query the status of a certificate application order. If the value of the **Type** response parameter is **certificate**, the certificate is issued.
    *
    * @param request RenewCertificateOrderForPackageRequestRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RenewCertificateOrderForPackageRequestResponse
   */
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

  /**
    * You can call this operation to submit a renewal application for a certificate only when the order of the certificate is in the expiring state. After the renewal is complete, a new certificate order whose status is pending application is generated. You must submit a certificate application for the new certificate order and install the new certificate after the new certificate is issued.
    * > You can call the [DescribeCertificateState](~~455800~~) operation to query the status of a certificate application order. If the value of the **Type** response parameter is **certificate**, the certificate is issued.
    *
    * @param request RenewCertificateOrderForPackageRequestRequest
    * @return RenewCertificateOrderForPackageRequestResponse
   */
  async renewCertificateOrderForPackageRequest(request: RenewCertificateOrderForPackageRequestRequest): Promise<RenewCertificateOrderForPackageRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewCertificateOrderForPackageRequestWithOptions(request, runtime);
  }

  async revokeWHClientCertificateWithOptions(request: RevokeWHClientCertificateRequest, runtime: $Util.RuntimeOptions): Promise<RevokeWHClientCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RevokeWHClientCertificate",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevokeWHClientCertificateResponse>(await this.callApi(params, req, runtime), new RevokeWHClientCertificateResponse({}));
  }

  async revokeWHClientCertificate(request: RevokeWHClientCertificateRequest): Promise<RevokeWHClientCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeWHClientCertificateWithOptions(request, runtime);
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

  /**
    * The unique identifier of the certificate.
    *
    * @param request UploadPCACertRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UploadPCACertResponse
   */
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

  /**
    * The unique identifier of the certificate.
    *
    * @param request UploadPCACertRequest
    * @return UploadPCACertResponse
   */
  async uploadPCACert(request: UploadPCACertRequest): Promise<UploadPCACertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadPCACertWithOptions(request, runtime);
  }

  /**
    * You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request UploadUserCertificateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UploadUserCertificateResponse
   */
  async uploadUserCertificateWithOptions(request: UploadUserCertificateRequest, runtime: $Util.RuntimeOptions): Promise<UploadUserCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cert)) {
      query["Cert"] = request.cert;
    }

    if (!Util.isUnset(request.encryptCert)) {
      query["EncryptCert"] = request.encryptCert;
    }

    if (!Util.isUnset(request.encryptPrivateKey)) {
      query["EncryptPrivateKey"] = request.encryptPrivateKey;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.signCert)) {
      query["SignCert"] = request.signCert;
    }

    if (!Util.isUnset(request.signPrivateKey)) {
      query["SignPrivateKey"] = request.signPrivateKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadUserCertificate",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadUserCertificateResponse>(await this.callApi(params, req, runtime), new UploadUserCertificateResponse({}));
  }

  /**
    * You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request UploadUserCertificateRequest
    * @return UploadUserCertificateResponse
   */
  async uploadUserCertificate(request: UploadUserCertificateRequest): Promise<UploadUserCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadUserCertificateWithOptions(request, runtime);
  }

  async verifyWithOptions(request: VerifyRequest, runtime: $Util.RuntimeOptions): Promise<VerifyResponse> {
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
