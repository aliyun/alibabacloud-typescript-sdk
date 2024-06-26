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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelCertificateForPackageRequestResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelOrderRequestResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCertificateForPackageRequestResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCertificateRequestResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCertificateWithCsrRequestResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class CreateCsrRequest extends $tea.Model {
  algorithm?: string;
  commonName?: string;
  corpName?: string;
  countryCode?: string;
  department?: string;
  keySize?: number;
  locality?: string;
  name?: string;
  province?: string;
  sans?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      commonName: 'CommonName',
      corpName: 'CorpName',
      countryCode: 'CountryCode',
      department: 'Department',
      keySize: 'KeySize',
      locality: 'Locality',
      name: 'Name',
      province: 'Province',
      sans: 'Sans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      commonName: 'string',
      corpName: 'string',
      countryCode: 'string',
      department: 'string',
      keySize: 'number',
      locality: 'string',
      name: 'string',
      province: 'string',
      sans: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCsrResponseBody extends $tea.Model {
  csr?: string;
  csrId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      csr: 'Csr',
      csrId: 'CsrId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csr: 'string',
      csrId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCsrResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCsrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCsrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentJobRequest extends $tea.Model {
  certIds?: string;
  contactIds?: string;
  jobType?: string;
  name?: string;
  resourceIds?: string;
  scheduleTime?: number;
  static names(): { [key: string]: string } {
    return {
      certIds: 'CertIds',
      contactIds: 'ContactIds',
      jobType: 'JobType',
      name: 'Name',
      resourceIds: 'ResourceIds',
      scheduleTime: 'ScheduleTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIds: 'string',
      contactIds: 'string',
      jobType: 'string',
      name: 'string',
      resourceIds: 'string',
      scheduleTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentJobResponseBody extends $tea.Model {
  jobId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDeploymentJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDeploymentJobResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateWHClientCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DecryptResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCertificateRequestResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DeleteCsrRequest extends $tea.Model {
  csrId?: number;
  static names(): { [key: string]: string } {
    return {
      csrId: 'CsrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csrId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCsrResponseBody extends $tea.Model {
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

export class DeleteCsrResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCsrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCsrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeploymentJobRequest extends $tea.Model {
  jobId?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeploymentJobResponseBody extends $tea.Model {
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

export class DeleteDeploymentJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDeploymentJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDeploymentJobResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePCACertResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DeleteWorkerResourceRequest extends $tea.Model {
  jobId?: number;
  workerId?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      workerId: 'WorkerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
      workerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkerResourceResponseBody extends $tea.Model {
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

export class DeleteWorkerResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteWorkerResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteWorkerResourceResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCertificateStateResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DescribeCloudResourceStatusRequest extends $tea.Model {
  secretId?: string;
  static names(): { [key: string]: string } {
    return {
      secretId: 'SecretId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudResourceStatusResponseBody extends $tea.Model {
  data?: DescribeCloudResourceStatusResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeCloudResourceStatusResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudResourceStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCloudResourceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCloudResourceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeploymentJobRequest extends $tea.Model {
  jobId?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeploymentJobResponseBody extends $tea.Model {
  casContacts?: DescribeDeploymentJobResponseBodyCasContacts[];
  certDomain?: string;
  certType?: string;
  config?: string;
  del?: number;
  endTime?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  instanceId?: string;
  jobType?: string;
  name?: string;
  productName?: string;
  requestId?: string;
  rollback?: number;
  scheduleTime?: string;
  startTime?: string;
  status?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      casContacts: 'CasContacts',
      certDomain: 'CertDomain',
      certType: 'CertType',
      config: 'Config',
      del: 'Del',
      endTime: 'EndTime',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      instanceId: 'InstanceId',
      jobType: 'JobType',
      name: 'Name',
      productName: 'ProductName',
      requestId: 'RequestId',
      rollback: 'Rollback',
      scheduleTime: 'ScheduleTime',
      startTime: 'StartTime',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casContacts: { 'type': 'array', 'itemType': DescribeDeploymentJobResponseBodyCasContacts },
      certDomain: 'string',
      certType: 'string',
      config: 'string',
      del: 'number',
      endTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      instanceId: 'string',
      jobType: 'string',
      name: 'string',
      productName: 'string',
      requestId: 'string',
      rollback: 'number',
      scheduleTime: 'string',
      startTime: 'string',
      status: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeploymentJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDeploymentJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDeploymentJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeploymentJobStatusRequest extends $tea.Model {
  jobId?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeploymentJobStatusResponseBody extends $tea.Model {
  buyCount?: number;
  certCount?: number;
  costCount?: number;
  failedCount?: number;
  matchWorkerCount?: number;
  productWorkerCount?: DescribeDeploymentJobStatusResponseBodyProductWorkerCount[];
  requestId?: string;
  resourceCount?: number;
  rollbackCount?: number;
  rollbackFailedCount?: number;
  rollbackSuccessCount?: number;
  successCount?: number;
  useCount?: number;
  workerCount?: number;
  static names(): { [key: string]: string } {
    return {
      buyCount: 'BuyCount',
      certCount: 'CertCount',
      costCount: 'CostCount',
      failedCount: 'FailedCount',
      matchWorkerCount: 'MatchWorkerCount',
      productWorkerCount: 'ProductWorkerCount',
      requestId: 'RequestId',
      resourceCount: 'ResourceCount',
      rollbackCount: 'RollbackCount',
      rollbackFailedCount: 'RollbackFailedCount',
      rollbackSuccessCount: 'RollbackSuccessCount',
      successCount: 'SuccessCount',
      useCount: 'UseCount',
      workerCount: 'WorkerCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyCount: 'number',
      certCount: 'number',
      costCount: 'number',
      failedCount: 'number',
      matchWorkerCount: 'number',
      productWorkerCount: { 'type': 'array', 'itemType': DescribeDeploymentJobStatusResponseBodyProductWorkerCount },
      requestId: 'string',
      resourceCount: 'number',
      rollbackCount: 'number',
      rollbackFailedCount: 'number',
      rollbackSuccessCount: 'number',
      successCount: 'number',
      useCount: 'number',
      workerCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeploymentJobStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDeploymentJobStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDeploymentJobStatusResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePackageStateResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EncryptResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCertWarehouseQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class GetCsrDetailRequest extends $tea.Model {
  csrId?: number;
  static names(): { [key: string]: string } {
    return {
      csrId: 'CsrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csrId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCsrDetailResponseBody extends $tea.Model {
  csr?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      csr: 'Csr',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csr: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCsrDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCsrDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCsrDetailResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserCertificateDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCertResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCertWarehouseResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ListCloudAccessRequest extends $tea.Model {
  cloudName?: string;
  currentPage?: number;
  secretId?: string;
  showSize?: number;
  static names(): { [key: string]: string } {
    return {
      cloudName: 'CloudName',
      currentPage: 'CurrentPage',
      secretId: 'SecretId',
      showSize: 'ShowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudName: 'string',
      currentPage: 'number',
      secretId: 'string',
      showSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudAccessResponseBody extends $tea.Model {
  cloudAccessList?: ListCloudAccessResponseBodyCloudAccessList[];
  currentPage?: number;
  requestId?: string;
  showSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cloudAccessList: 'CloudAccessList',
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAccessList: { 'type': 'array', 'itemType': ListCloudAccessResponseBodyCloudAccessList },
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

export class ListCloudAccessResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCloudAccessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCloudAccessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudResourcesRequest extends $tea.Model {
  cloudName?: string;
  cloudProduct?: string;
  currentPage?: number;
  keyword?: string;
  secretId?: string;
  showSize?: number;
  static names(): { [key: string]: string } {
    return {
      cloudName: 'CloudName',
      cloudProduct: 'CloudProduct',
      currentPage: 'CurrentPage',
      keyword: 'Keyword',
      secretId: 'SecretId',
      showSize: 'ShowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudName: 'string',
      cloudProduct: 'string',
      currentPage: 'number',
      keyword: 'string',
      secretId: 'string',
      showSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudResourcesResponseBody extends $tea.Model {
  currentPage?: number;
  data?: ListCloudResourcesResponseBodyData[];
  requestId?: string;
  showSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': ListCloudResourcesResponseBodyData },
      requestId: 'string',
      showSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCloudResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCloudResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactRequest extends $tea.Model {
  currentPage?: number;
  keyword?: string;
  showSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      keyword: 'Keyword',
      showSize: 'ShowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      keyword: 'string',
      showSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactResponseBody extends $tea.Model {
  contactList?: ListContactResponseBodyContactList[];
  currentPage?: number;
  keyword?: string;
  requestId?: string;
  showSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      contactList: 'ContactList',
      currentPage: 'CurrentPage',
      keyword: 'Keyword',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactList: { 'type': 'array', 'itemType': ListContactResponseBodyContactList },
      currentPage: 'number',
      keyword: 'string',
      requestId: 'string',
      showSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListContactResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListContactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCsrRequest extends $tea.Model {
  algorithm?: string;
  currentPage?: number;
  keyWord?: string;
  showSize?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      currentPage: 'CurrentPage',
      keyWord: 'KeyWord',
      showSize: 'ShowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      currentPage: 'number',
      keyWord: 'string',
      showSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCsrResponseBody extends $tea.Model {
  csrList?: ListCsrResponseBodyCsrList[];
  currentPage?: number;
  requestId?: string;
  showSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      csrList: 'CsrList',
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csrList: { 'type': 'array', 'itemType': ListCsrResponseBodyCsrList },
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

export class ListCsrResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCsrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCsrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentJobRequest extends $tea.Model {
  currentPage?: number;
  jobType?: string;
  showSize?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      jobType: 'JobType',
      showSize: 'ShowSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      jobType: 'string',
      showSize: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentJobResponseBody extends $tea.Model {
  currentPage?: number;
  data?: ListDeploymentJobResponseBodyData[];
  requestId?: string;
  showSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': ListDeploymentJobResponseBodyData },
      requestId: 'string',
      showSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDeploymentJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDeploymentJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentJobCertRequest extends $tea.Model {
  jobId?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentJobCertResponseBody extends $tea.Model {
  data?: ListDeploymentJobCertResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDeploymentJobCertResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentJobCertResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDeploymentJobCertResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDeploymentJobCertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentJobResourceRequest extends $tea.Model {
  jobId?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentJobResourceResponseBody extends $tea.Model {
  data?: ListDeploymentJobResourceResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDeploymentJobResourceResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentJobResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDeploymentJobResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDeploymentJobResourceResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserCertificateOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ListWorkerResourceRequest extends $tea.Model {
  cloudProduct?: string;
  currentPage?: number;
  jobId?: number;
  showSize?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cloudProduct: 'CloudProduct',
      currentPage: 'CurrentPage',
      jobId: 'JobId',
      showSize: 'ShowSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudProduct: 'string',
      currentPage: 'number',
      jobId: 'number',
      showSize: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkerResourceResponseBody extends $tea.Model {
  currentPage?: number;
  data?: ListWorkerResourceResponseBodyData[];
  requestId?: string;
  showSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': ListWorkerResourceResponseBodyData },
      requestId: 'string',
      showSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkerResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWorkerResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListWorkerResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupRequest extends $tea.Model {
  regionId?: string;
  resourceGroupId?: string;
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBody extends $tea.Model {
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

export class MoveResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MoveResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MoveResourceGroupResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenewCertificateOrderForPackageRequestResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevokeWHClientCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SignResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class UpdateCsrRequest extends $tea.Model {
  csrId?: number;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      csrId: 'CsrId',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csrId: 'number',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCsrResponseBody extends $tea.Model {
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

export class UpdateCsrResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCsrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCsrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentJobRequest extends $tea.Model {
  certIds?: string;
  contactIds?: string;
  jobId?: number;
  name?: string;
  resourceIds?: string;
  scheduleTime?: number;
  static names(): { [key: string]: string } {
    return {
      certIds: 'CertIds',
      contactIds: 'ContactIds',
      jobId: 'JobId',
      name: 'Name',
      resourceIds: 'ResourceIds',
      scheduleTime: 'ScheduleTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIds: 'string',
      contactIds: 'string',
      jobId: 'number',
      name: 'string',
      resourceIds: 'string',
      scheduleTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentJobResponseBody extends $tea.Model {
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

export class UpdateDeploymentJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDeploymentJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDeploymentJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentJobStatusRequest extends $tea.Model {
  jobId?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentJobStatusResponseBody extends $tea.Model {
  data?: any;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentJobStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDeploymentJobStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDeploymentJobStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkerResourceStatusRequest extends $tea.Model {
  jobId?: number;
  status?: string;
  workerId?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      status: 'Status',
      workerId: 'WorkerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
      status: 'string',
      workerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkerResourceStatusResponseBody extends $tea.Model {
  data?: any;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkerResourceStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateWorkerResourceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateWorkerResourceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCsrRequest extends $tea.Model {
  csr?: string;
  key?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      csr: 'Csr',
      key: 'Key',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csr: 'string',
      key: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCsrResponseBody extends $tea.Model {
  csrId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      csrId: 'CsrId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csrId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCsrResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadCsrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UploadCsrResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadPCACertResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadUserCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DescribeCloudResourceStatusResponseBodyData extends $tea.Model {
  cloudName?: string;
  cloudProduct?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cloudName: 'CloudName',
      cloudProduct: 'CloudProduct',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudName: 'string',
      cloudProduct: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeploymentJobResponseBodyCasContacts extends $tea.Model {
  email?: string;
  id?: string;
  mobile?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      id: 'Id',
      mobile: 'Mobile',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      id: 'string',
      mobile: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeploymentJobStatusResponseBodyProductWorkerCount extends $tea.Model {
  count?: number;
  productName?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      productName: 'ProductName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      productName: 'string',
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

export class ListCloudAccessResponseBodyCloudAccessList extends $tea.Model {
  accessId?: number;
  cloudName?: string;
  secretId?: string;
  serviceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      cloudName: 'CloudName',
      secretId: 'SecretId',
      serviceStatus: 'ServiceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'number',
      cloudName: 'string',
      secretId: 'string',
      serviceStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudResourcesResponseBodyData extends $tea.Model {
  certEndTime?: string;
  certId?: number;
  certName?: string;
  certStartTime?: string;
  cloudAccessId?: string;
  cloudName?: string;
  cloudProduct?: string;
  cloudRegion?: string;
  defaultResource?: number;
  domain?: string;
  enableHttps?: number;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  instanceId?: string;
  listenerId?: string;
  listenerPort?: string;
  regionId?: string;
  status?: string;
  useSsl?: number;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      certEndTime: 'CertEndTime',
      certId: 'CertId',
      certName: 'CertName',
      certStartTime: 'CertStartTime',
      cloudAccessId: 'CloudAccessId',
      cloudName: 'CloudName',
      cloudProduct: 'CloudProduct',
      cloudRegion: 'CloudRegion',
      defaultResource: 'DefaultResource',
      domain: 'Domain',
      enableHttps: 'EnableHttps',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      instanceId: 'InstanceId',
      listenerId: 'ListenerId',
      listenerPort: 'ListenerPort',
      regionId: 'RegionId',
      status: 'Status',
      useSsl: 'UseSsl',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certEndTime: 'string',
      certId: 'number',
      certName: 'string',
      certStartTime: 'string',
      cloudAccessId: 'string',
      cloudName: 'string',
      cloudProduct: 'string',
      cloudRegion: 'string',
      defaultResource: 'number',
      domain: 'string',
      enableHttps: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      instanceId: 'string',
      listenerId: 'string',
      listenerPort: 'string',
      regionId: 'string',
      status: 'string',
      useSsl: 'number',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactResponseBodyContactList extends $tea.Model {
  contactId?: number;
  email?: string;
  emailStatus?: number;
  mobile?: string;
  mobileStatus?: number;
  name?: string;
  webhooks?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      email: 'Email',
      emailStatus: 'EmailStatus',
      mobile: 'Mobile',
      mobileStatus: 'MobileStatus',
      name: 'Name',
      webhooks: 'Webhooks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'number',
      email: 'string',
      emailStatus: 'number',
      mobile: 'string',
      mobileStatus: 'number',
      name: 'string',
      webhooks: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCsrResponseBodyCsrList extends $tea.Model {
  algorithm?: string;
  commonName?: string;
  corpName?: string;
  countryCode?: string;
  csrId?: number;
  department?: string;
  hasPrivateKey?: boolean;
  keySha2?: string;
  keySize?: number;
  locality?: string;
  name?: string;
  province?: string;
  sans?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      commonName: 'CommonName',
      corpName: 'CorpName',
      countryCode: 'CountryCode',
      csrId: 'CsrId',
      department: 'Department',
      hasPrivateKey: 'HasPrivateKey',
      keySha2: 'KeySha2',
      keySize: 'KeySize',
      locality: 'Locality',
      name: 'Name',
      province: 'Province',
      sans: 'Sans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      commonName: 'string',
      corpName: 'string',
      countryCode: 'string',
      csrId: 'number',
      department: 'string',
      hasPrivateKey: 'boolean',
      keySha2: 'string',
      keySize: 'number',
      locality: 'string',
      name: 'string',
      province: 'string',
      sans: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentJobResponseBodyData extends $tea.Model {
  certDomain?: string;
  certType?: string;
  del?: number;
  endTime?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  instanceId?: string;
  jobType?: string;
  name?: string;
  productName?: string;
  rollback?: number;
  scheduleTime?: string;
  startTime?: string;
  status?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      certDomain: 'CertDomain',
      certType: 'CertType',
      del: 'Del',
      endTime: 'EndTime',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      instanceId: 'InstanceId',
      jobType: 'JobType',
      name: 'Name',
      productName: 'ProductName',
      rollback: 'Rollback',
      scheduleTime: 'ScheduleTime',
      startTime: 'StartTime',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certDomain: 'string',
      certType: 'string',
      del: 'number',
      endTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      instanceId: 'string',
      jobType: 'string',
      name: 'string',
      productName: 'string',
      rollback: 'number',
      scheduleTime: 'string',
      startTime: 'string',
      status: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentJobCertResponseBodyData extends $tea.Model {
  algorithm?: string;
  certId?: number;
  certInstanceId?: string;
  certName?: string;
  certOrderType?: string;
  certType?: string;
  commonName?: string;
  isTrustee?: boolean;
  month?: number;
  notAfterTime?: number;
  notBeforeTime?: number;
  orderId?: number;
  sans?: string[];
  statusCode?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      certId: 'CertId',
      certInstanceId: 'CertInstanceId',
      certName: 'CertName',
      certOrderType: 'CertOrderType',
      certType: 'CertType',
      commonName: 'CommonName',
      isTrustee: 'IsTrustee',
      month: 'Month',
      notAfterTime: 'NotAfterTime',
      notBeforeTime: 'NotBeforeTime',
      orderId: 'OrderId',
      sans: 'Sans',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      certId: 'number',
      certInstanceId: 'string',
      certName: 'string',
      certOrderType: 'string',
      certType: 'string',
      commonName: 'string',
      isTrustee: 'boolean',
      month: 'number',
      notAfterTime: 'number',
      notBeforeTime: 'number',
      orderId: 'number',
      sans: { 'type': 'array', 'itemType': 'string' },
      statusCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentJobResourceResponseBodyData extends $tea.Model {
  certEndTime?: string;
  certId?: number;
  certName?: string;
  certStartTime?: string;
  cloudAccessId?: string;
  cloudName?: string;
  cloudProduct?: string;
  cloudRegion?: string;
  defaultResource?: number;
  domain?: string;
  enableHttps?: number;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  instanceId?: string;
  listenerId?: string;
  listenerPort?: string;
  regionId?: string;
  remark?: string;
  status?: string;
  useSsl?: number;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      certEndTime: 'CertEndTime',
      certId: 'CertId',
      certName: 'CertName',
      certStartTime: 'CertStartTime',
      cloudAccessId: 'CloudAccessId',
      cloudName: 'CloudName',
      cloudProduct: 'CloudProduct',
      cloudRegion: 'CloudRegion',
      defaultResource: 'DefaultResource',
      domain: 'Domain',
      enableHttps: 'EnableHttps',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      instanceId: 'InstanceId',
      listenerId: 'ListenerId',
      listenerPort: 'ListenerPort',
      regionId: 'RegionId',
      remark: 'Remark',
      status: 'Status',
      useSsl: 'UseSsl',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certEndTime: 'string',
      certId: 'number',
      certName: 'string',
      certStartTime: 'string',
      cloudAccessId: 'string',
      cloudName: 'string',
      cloudProduct: 'string',
      cloudRegion: 'string',
      defaultResource: 'number',
      domain: 'string',
      enableHttps: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      instanceId: 'string',
      listenerId: 'string',
      listenerPort: 'string',
      regionId: 'string',
      remark: 'string',
      status: 'string',
      useSsl: 'number',
      userId: 'number',
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

export class ListWorkerResourceResponseBodyData extends $tea.Model {
  certDomain?: string;
  certId?: number;
  certInstanceId?: string;
  certName?: string;
  cloudName?: string;
  cloudProduct?: string;
  cloudRegion?: string;
  defaultResource?: boolean;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  instanceId?: string;
  jobId?: number;
  listenerId?: string;
  namespaceId?: string;
  orderId?: number;
  port?: number;
  regionId?: string;
  resourceCertId?: number;
  resourceDomain?: string;
  resourceId?: number;
  status?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      certDomain: 'CertDomain',
      certId: 'CertId',
      certInstanceId: 'CertInstanceId',
      certName: 'CertName',
      cloudName: 'CloudName',
      cloudProduct: 'CloudProduct',
      cloudRegion: 'CloudRegion',
      defaultResource: 'DefaultResource',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      listenerId: 'ListenerId',
      namespaceId: 'NamespaceId',
      orderId: 'OrderId',
      port: 'Port',
      regionId: 'RegionId',
      resourceCertId: 'ResourceCertId',
      resourceDomain: 'ResourceDomain',
      resourceId: 'ResourceId',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certDomain: 'string',
      certId: 'number',
      certInstanceId: 'string',
      certName: 'string',
      cloudName: 'string',
      cloudProduct: 'string',
      cloudRegion: 'string',
      defaultResource: 'boolean',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      instanceId: 'string',
      jobId: 'number',
      listenerId: 'string',
      namespaceId: 'string',
      orderId: 'number',
      port: 'number',
      regionId: 'string',
      resourceCertId: 'number',
      resourceDomain: 'string',
      resourceId: 'number',
      status: 'string',
      userId: 'number',
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
   * @summary You can call the CancelCertificateForPackageRequest operation to cancel a certificate application order and revoke the issued certificate in the order. You can call this operation only when the certificate application order is in the **issued** state.
   * >  You can call the [DescribeCertificateState](https://help.aliyun.com/document_detail/164111.html) operation to query the status of a certificate application order. If the value of the **Type** response parameter is **certificate**, the certificate is issued.
   * If a certificate is revoked within 30 calendar days after the issuance date, the consumed certificate quota is returned to you. Otherwise, the consumed certificate quota is not returned.
   *
   * @description Revokes an issued certificate and cancels the application order of the certificate.
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
   * @summary You can call the CancelCertificateForPackageRequest operation to cancel a certificate application order and revoke the issued certificate in the order. You can call this operation only when the certificate application order is in the **issued** state.
   * >  You can call the [DescribeCertificateState](https://help.aliyun.com/document_detail/164111.html) operation to query the status of a certificate application order. If the value of the **Type** response parameter is **certificate**, the certificate is issued.
   * If a certificate is revoked within 30 calendar days after the issuance date, the consumed certificate quota is returned to you. Otherwise, the consumed certificate quota is not returned.
   *
   * @description Revokes an issued certificate and cancels the application order of the certificate.
   *
   * @param request CancelCertificateForPackageRequestRequest
   * @return CancelCertificateForPackageRequestResponse
   */
  async cancelCertificateForPackageRequest(request: CancelCertificateForPackageRequestRequest): Promise<CancelCertificateForPackageRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelCertificateForPackageRequestWithOptions(request, runtime);
  }

  /**
   * @summary Cancels a certificate application order that is in the pending validation or being reviewed state.
   *
   * @description You can call the CancelOrderRequest operation to cancel a certificate application order only in the following scenarios:
   * *   The order is in the **pending validation** state. You have submitted a certificate application but the verification of the domain name ownership is not complete.
   * *   The order is in the **being reviewed** state. You have submitted a certificate application and the verification of the domain name ownership is complete, but the certificate authority (CA) does not complete the review of the certificate application.
   * After a certificate application order is canceled, the status of the order changes to the **pending application** state. In this case, you can call the [DeleteCertificateRequest](https://help.aliyun.com/document_detail/164109.html) operation to delete the certificate application order. Then, the consumed certificate quota is returned to you.
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
   * @summary Cancels a certificate application order that is in the pending validation or being reviewed state.
   *
   * @description You can call the CancelOrderRequest operation to cancel a certificate application order only in the following scenarios:
   * *   The order is in the **pending validation** state. You have submitted a certificate application but the verification of the domain name ownership is not complete.
   * *   The order is in the **being reviewed** state. You have submitted a certificate application and the verification of the domain name ownership is complete, but the certificate authority (CA) does not complete the review of the certificate application.
   * After a certificate application order is canceled, the status of the order changes to the **pending application** state. In this case, you can call the [DeleteCertificateRequest](https://help.aliyun.com/document_detail/164109.html) operation to delete the certificate application order. Then, the consumed certificate quota is returned to you.
   *
   * @param request CancelOrderRequestRequest
   * @return CancelOrderRequestResponse
   */
  async cancelOrderRequest(request: CancelOrderRequestRequest): Promise<CancelOrderRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelOrderRequestWithOptions(request, runtime);
  }

  /**
   * @summary Submits a certificate application.
   *
   * @description *   Before you call this operation, make sure that you have purchased a certificate resource plan of the required specifications. For more information about how to purchase a certificate resource plan, see [Purchase a certificate resource plan](https://help.aliyun.com/document_detail/28542.html). You can call the [DescribePackageState](https://help.aliyun.com/document_detail/455800.html) operation to query the usage of certificate resource plans of specified specifications, including the total number of certificate resource plans that you purchase, the number of certificate applications that are submitted, and the number of certificates that are issued.
   * *   After you call this operation to submit a certificate application and the certificate is issued, the certificate quota provided by the resource plan that you purchased is consumed. When you call this operation, you can use the **ProductCode** parameter to specify the specifications of the certificate that you want to apply for.
   * *   After you call this operation to submit a certificate application, you also need to call the [DescribeCertificateState](https://help.aliyun.com/document_detail/455800.html) operation to obtain the information that is required to complete the verification of the domain name ownership, and complete the verification. If you use the DNS verification method, you must complete the verification in the management platform of the domain name. If you use the file verification method, you must complete the verification in the DNS server. Then, the certificate application order will be reviewed by the certificate authority (CA).
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
   * @summary Submits a certificate application.
   *
   * @description *   Before you call this operation, make sure that you have purchased a certificate resource plan of the required specifications. For more information about how to purchase a certificate resource plan, see [Purchase a certificate resource plan](https://help.aliyun.com/document_detail/28542.html). You can call the [DescribePackageState](https://help.aliyun.com/document_detail/455800.html) operation to query the usage of certificate resource plans of specified specifications, including the total number of certificate resource plans that you purchase, the number of certificate applications that are submitted, and the number of certificates that are issued.
   * *   After you call this operation to submit a certificate application and the certificate is issued, the certificate quota provided by the resource plan that you purchased is consumed. When you call this operation, you can use the **ProductCode** parameter to specify the specifications of the certificate that you want to apply for.
   * *   After you call this operation to submit a certificate application, you also need to call the [DescribeCertificateState](https://help.aliyun.com/document_detail/455800.html) operation to obtain the information that is required to complete the verification of the domain name ownership, and complete the verification. If you use the DNS verification method, you must complete the verification in the management platform of the domain name. If you use the file verification method, you must complete the verification in the DNS server. Then, the certificate application order will be reviewed by the certificate authority (CA).
   *
   * @param request CreateCertificateForPackageRequestRequest
   * @return CreateCertificateForPackageRequestResponse
   */
  async createCertificateForPackageRequest(request: CreateCertificateForPackageRequestRequest): Promise<CreateCertificateForPackageRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCertificateForPackageRequestWithOptions(request, runtime);
  }

  /**
   * @summary Purchases, applies for, and issues a domain validated (DV) certificate by using extended certificate services.
   *
   * @description *   You can call this operation to apply for only DV certificates. If you want to apply for an organization validated (OV) or extended validation (EV) certificate, we recommend that you call the [CreateCertificateForPackageRequest](https://help.aliyun.com/document_detail/455296.html) operation. This operation allows you to apply for certificates of all specifications and specify the method to generate a certificate signing request (CSR) file.
   * *   Before you call this operation, make sure that you have purchased a certificate resource plan of the required specifications. For more information about how to purchase a certificate resource plan, see [Purchase a certificate resource plan](https://help.aliyun.com/document_detail/28542.html). You can call the [DescribePackageState](https://help.aliyun.com/document_detail/455803.html) operation to query the usage of certificate resource plans of specified specifications, including the total number of purchased certificate resource plans of the specified specifications, the number of times that certificate applications have been submitted, and the number of times that certificates have been issued.
   * *   When you call this operation, you can use the **ProductCode** parameter to specify the specifications of the certificate.
   * *   After you call this operation to submit a certificate application, Certificate Management Service automatically creates a CSR file for your application and consumes the certificate quota in the certificate resource plans of the specified specifications that you purchased. After you call this operation, you also need to call the [DescribeCertificateState](https://help.aliyun.com/document_detail/455800.html) operation to obtain the information that is required to complete domain name verification, and manually complete the verification. If you use the DNS verification method, you must complete the verification on the management platform of the domain name. If you use the file verification method, you must complete the verification on your DNS server. Then, the certificate authority (CA) will review your certificate application.
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
   * @summary Purchases, applies for, and issues a domain validated (DV) certificate by using extended certificate services.
   *
   * @description *   You can call this operation to apply for only DV certificates. If you want to apply for an organization validated (OV) or extended validation (EV) certificate, we recommend that you call the [CreateCertificateForPackageRequest](https://help.aliyun.com/document_detail/455296.html) operation. This operation allows you to apply for certificates of all specifications and specify the method to generate a certificate signing request (CSR) file.
   * *   Before you call this operation, make sure that you have purchased a certificate resource plan of the required specifications. For more information about how to purchase a certificate resource plan, see [Purchase a certificate resource plan](https://help.aliyun.com/document_detail/28542.html). You can call the [DescribePackageState](https://help.aliyun.com/document_detail/455803.html) operation to query the usage of certificate resource plans of specified specifications, including the total number of purchased certificate resource plans of the specified specifications, the number of times that certificate applications have been submitted, and the number of times that certificates have been issued.
   * *   When you call this operation, you can use the **ProductCode** parameter to specify the specifications of the certificate.
   * *   After you call this operation to submit a certificate application, Certificate Management Service automatically creates a CSR file for your application and consumes the certificate quota in the certificate resource plans of the specified specifications that you purchased. After you call this operation, you also need to call the [DescribeCertificateState](https://help.aliyun.com/document_detail/455800.html) operation to obtain the information that is required to complete domain name verification, and manually complete the verification. If you use the DNS verification method, you must complete the verification on the management platform of the domain name. If you use the file verification method, you must complete the verification on your DNS server. Then, the certificate authority (CA) will review your certificate application.
   *
   * @param request CreateCertificateRequestRequest
   * @return CreateCertificateRequestResponse
   */
  async createCertificateRequest(request: CreateCertificateRequestRequest): Promise<CreateCertificateRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCertificateRequestWithOptions(request, runtime);
  }

  /**
   * @summary Purchases, applies for, and issues a domain validated (DV) certificate by using a custom certificate signing request (CSR) file. You can use extended certificate services to purchase and apply for a DV certificate with a few clicks.
   *
   * @description *   You can call the CreateCertificateWithCsrRequest operation to apply only for DV certificates. We recommend that you call the [CreateCertificateForPackageRequest](https://help.aliyun.com/document_detail/455296.html) operation to submit a certificate application. This operation allows you to apply for certificates of all specifications and specify the method to generate a CSR file.
   * *   Before you call this operation, make sure that you have purchased a certificate resource plan of the required specifications. For more information about how to purchase a certificate resource plan, see [Purchase a certificate resource plan](https://help.aliyun.com/document_detail/28542.html). You can call the [DescribePackageState](https://help.aliyun.com/document_detail/164110.html) operation to query the usage of certificate resource plans of specified specifications. The usage information includes the total number of purchased certificate resource plans of the specified specifications, the number of times that certificate applications are submitted, and the number of times that certificates are issued.
   * *   When you call this operation, you can use the **ProductCode** parameter to specify the specifications of the certificate.
   * *   After you call this operation to submit a certificate application, the certificate quota of the required specifications that you purchased is consumed. After you call this operation, you also need to call the [DescribeCertificateState](https://help.aliyun.com/document_detail/164111.html) operation to obtain the information that is required to complete domain name verification, and manually complete the verification. If you use the DNS verification method, you must complete the verification on the management platform of the domain name. If you use the file verification method, you must complete the verification on your DNS server. The certificate authority (CA) starts to review your certificate application only after the domain name verification is complete.
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
   * @summary Purchases, applies for, and issues a domain validated (DV) certificate by using a custom certificate signing request (CSR) file. You can use extended certificate services to purchase and apply for a DV certificate with a few clicks.
   *
   * @description *   You can call the CreateCertificateWithCsrRequest operation to apply only for DV certificates. We recommend that you call the [CreateCertificateForPackageRequest](https://help.aliyun.com/document_detail/455296.html) operation to submit a certificate application. This operation allows you to apply for certificates of all specifications and specify the method to generate a CSR file.
   * *   Before you call this operation, make sure that you have purchased a certificate resource plan of the required specifications. For more information about how to purchase a certificate resource plan, see [Purchase a certificate resource plan](https://help.aliyun.com/document_detail/28542.html). You can call the [DescribePackageState](https://help.aliyun.com/document_detail/164110.html) operation to query the usage of certificate resource plans of specified specifications. The usage information includes the total number of purchased certificate resource plans of the specified specifications, the number of times that certificate applications are submitted, and the number of times that certificates are issued.
   * *   When you call this operation, you can use the **ProductCode** parameter to specify the specifications of the certificate.
   * *   After you call this operation to submit a certificate application, the certificate quota of the required specifications that you purchased is consumed. After you call this operation, you also need to call the [DescribeCertificateState](https://help.aliyun.com/document_detail/164111.html) operation to obtain the information that is required to complete domain name verification, and manually complete the verification. If you use the DNS verification method, you must complete the verification on the management platform of the domain name. If you use the file verification method, you must complete the verification on your DNS server. The certificate authority (CA) starts to review your certificate application only after the domain name verification is complete.
   *
   * @param request CreateCertificateWithCsrRequestRequest
   * @return CreateCertificateWithCsrRequestResponse
   */
  async createCertificateWithCsrRequest(request: CreateCertificateWithCsrRequestRequest): Promise<CreateCertificateWithCsrRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCertificateWithCsrRequestWithOptions(request, runtime);
  }

  /**
   * @param request CreateCsrRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateCsrResponse
   */
  async createCsrWithOptions(request: CreateCsrRequest, runtime: $Util.RuntimeOptions): Promise<CreateCsrResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.commonName)) {
      query["CommonName"] = request.commonName;
    }

    if (!Util.isUnset(request.corpName)) {
      query["CorpName"] = request.corpName;
    }

    if (!Util.isUnset(request.countryCode)) {
      query["CountryCode"] = request.countryCode;
    }

    if (!Util.isUnset(request.department)) {
      query["Department"] = request.department;
    }

    if (!Util.isUnset(request.keySize)) {
      query["KeySize"] = request.keySize;
    }

    if (!Util.isUnset(request.locality)) {
      query["Locality"] = request.locality;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.province)) {
      query["Province"] = request.province;
    }

    if (!Util.isUnset(request.sans)) {
      query["Sans"] = request.sans;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCsr",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCsrResponse>(await this.callApi(params, req, runtime), new CreateCsrResponse({}));
  }

  /**
   * @param request CreateCsrRequest
   * @return CreateCsrResponse
   */
  async createCsr(request: CreateCsrRequest): Promise<CreateCsrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCsrWithOptions(request, runtime);
  }

  /**
   * @summary 创建部署任务
   *
   * @param request CreateDeploymentJobRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateDeploymentJobResponse
   */
  async createDeploymentJobWithOptions(request: CreateDeploymentJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateDeploymentJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certIds)) {
      query["CertIds"] = request.certIds;
    }

    if (!Util.isUnset(request.contactIds)) {
      query["ContactIds"] = request.contactIds;
    }

    if (!Util.isUnset(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!Util.isUnset(request.scheduleTime)) {
      query["ScheduleTime"] = request.scheduleTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDeploymentJob",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDeploymentJobResponse>(await this.callApi(params, req, runtime), new CreateDeploymentJobResponse({}));
  }

  /**
   * @summary 创建部署任务
   *
   * @param request CreateDeploymentJobRequest
   * @return CreateDeploymentJobResponse
   */
  async createDeploymentJob(request: CreateDeploymentJobRequest): Promise<CreateDeploymentJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDeploymentJobWithOptions(request, runtime);
  }

  /**
   * @param request CreateWHClientCertificateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateWHClientCertificateResponse
   */
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

  /**
   * @param request CreateWHClientCertificateRequest
   * @return CreateWHClientCertificateResponse
   */
  async createWHClientCertificate(request: CreateWHClientCertificateRequest): Promise<CreateWHClientCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWHClientCertificateWithOptions(request, runtime);
  }

  /**
   * @param request DecryptRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DecryptResponse
   */
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

  /**
   * @param request DecryptRequest
   * @return DecryptResponse
   */
  async decrypt(request: DecryptRequest): Promise<DecryptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.decryptWithOptions(request, runtime);
  }

  /**
   * @summary Deletes an order in which the application for a domain validated (DV) certificate failed.
   *
   * @description You can call this operation to delete a certificate application order only in the following scenarios:
   * *   The status of the order is review failed. You have called the [DescribeCertificateState](https://help.aliyun.com/document_detail/455800.html)  operation to query the status of the certificate application order and the value of the **Type** parameter is **verify_fail**.
   * *   The status of the order is **pending application**. You have called the [CancelOrderRequest](https://help.aliyun.com/document_detail/455299.html) operation to cancel a certificate application order whose status is pending review or being reviewed. The status of the certificate application order that is canceled in this case changes to **pending application**.
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
   * @summary Deletes an order in which the application for a domain validated (DV) certificate failed.
   *
   * @description You can call this operation to delete a certificate application order only in the following scenarios:
   * *   The status of the order is review failed. You have called the [DescribeCertificateState](https://help.aliyun.com/document_detail/455800.html)  operation to query the status of the certificate application order and the value of the **Type** parameter is **verify_fail**.
   * *   The status of the order is **pending application**. You have called the [CancelOrderRequest](https://help.aliyun.com/document_detail/455299.html) operation to cancel a certificate application order whose status is pending review or being reviewed. The status of the certificate application order that is canceled in this case changes to **pending application**.
   *
   * @param request DeleteCertificateRequestRequest
   * @return DeleteCertificateRequestResponse
   */
  async deleteCertificateRequest(request: DeleteCertificateRequestRequest): Promise<DeleteCertificateRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCertificateRequestWithOptions(request, runtime);
  }

  /**
   * @param request DeleteCsrRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteCsrResponse
   */
  async deleteCsrWithOptions(request: DeleteCsrRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCsrResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.csrId)) {
      query["CsrId"] = request.csrId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCsr",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCsrResponse>(await this.callApi(params, req, runtime), new DeleteCsrResponse({}));
  }

  /**
   * @param request DeleteCsrRequest
   * @return DeleteCsrResponse
   */
  async deleteCsr(request: DeleteCsrRequest): Promise<DeleteCsrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCsrWithOptions(request, runtime);
  }

  /**
   * @summary 删除部署任务
   *
   * @param request DeleteDeploymentJobRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteDeploymentJobResponse
   */
  async deleteDeploymentJobWithOptions(request: DeleteDeploymentJobRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDeploymentJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDeploymentJob",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDeploymentJobResponse>(await this.callApi(params, req, runtime), new DeleteDeploymentJobResponse({}));
  }

  /**
   * @summary 删除部署任务
   *
   * @param request DeleteDeploymentJobRequest
   * @return DeleteDeploymentJobResponse
   */
  async deleteDeploymentJob(request: DeleteDeploymentJobRequest): Promise<DeleteDeploymentJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDeploymentJobWithOptions(request, runtime);
  }

  /**
   * @param request DeletePCACertRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeletePCACertResponse
   */
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

  /**
   * @param request DeletePCACertRequest
   * @return DeletePCACertResponse
   */
  async deletePCACert(request: DeletePCACertRequest): Promise<DeletePCACertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePCACertWithOptions(request, runtime);
  }

  /**
   * @summary Deletes an expired or uploaded certificate.
   *
   * @description You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
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
   * @summary Deletes an expired or uploaded certificate.
   *
   * @description You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request DeleteUserCertificateRequest
   * @return DeleteUserCertificateResponse
   */
  async deleteUserCertificate(request: DeleteUserCertificateRequest): Promise<DeleteUserCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserCertificateWithOptions(request, runtime);
  }

  /**
   * @summary 删除部署任务worker
   *
   * @param request DeleteWorkerResourceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteWorkerResourceResponse
   */
  async deleteWorkerResourceWithOptions(request: DeleteWorkerResourceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWorkerResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.workerId)) {
      query["WorkerId"] = request.workerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWorkerResource",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteWorkerResourceResponse>(await this.callApi(params, req, runtime), new DeleteWorkerResourceResponse({}));
  }

  /**
   * @summary 删除部署任务worker
   *
   * @param request DeleteWorkerResourceRequest
   * @return DeleteWorkerResourceResponse
   */
  async deleteWorkerResource(request: DeleteWorkerResourceRequest): Promise<DeleteWorkerResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWorkerResourceWithOptions(request, runtime);
  }

  /**
   * @summary Queries the status of a specified certificate application order.
   *
   * @description If you do not complete the verification of the domain name ownership after you submit a certificate application, you can call this operation to obtain the information that is required to complete the verification. You can complete the verification of the domain name ownership based on the data returned. If you use the DNS verification method, you must complete the verification on the management platform of the domain name. If you use the file verification method, you must complete the verification on the DNS server.
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
   * @summary Queries the status of a specified certificate application order.
   *
   * @description If you do not complete the verification of the domain name ownership after you submit a certificate application, you can call this operation to obtain the information that is required to complete the verification. You can complete the verification of the domain name ownership based on the data returned. If you use the DNS verification method, you must complete the verification on the management platform of the domain name. If you use the file verification method, you must complete the verification on the DNS server.
   * The certificate authority (CA) reviews your certificate application only after you complete the verification of the domain name ownership. After the CA approves your certificate application, the CA issues the certificate. If a certificate is issued, you can call this operation to obtain the CA certificate and private key of the certificate.
   *
   * @param request DescribeCertificateStateRequest
   * @return DescribeCertificateStateResponse
   */
  async describeCertificateState(request: DescribeCertificateStateRequest): Promise<DescribeCertificateStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCertificateStateWithOptions(request, runtime);
  }

  /**
   * @summary 云产品分组-获取用户资源计数 
   *
   * @param request DescribeCloudResourceStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeCloudResourceStatusResponse
   */
  async describeCloudResourceStatusWithOptions(request: DescribeCloudResourceStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCloudResourceStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.secretId)) {
      query["SecretId"] = request.secretId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCloudResourceStatus",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCloudResourceStatusResponse>(await this.callApi(params, req, runtime), new DescribeCloudResourceStatusResponse({}));
  }

  /**
   * @summary 云产品分组-获取用户资源计数 
   *
   * @param request DescribeCloudResourceStatusRequest
   * @return DescribeCloudResourceStatusResponse
   */
  async describeCloudResourceStatus(request: DescribeCloudResourceStatusRequest): Promise<DescribeCloudResourceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCloudResourceStatusWithOptions(request, runtime);
  }

  /**
   * @summary 获取部署任务详情
   *
   * @param request DescribeDeploymentJobRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDeploymentJobResponse
   */
  async describeDeploymentJobWithOptions(request: DescribeDeploymentJobRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeploymentJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDeploymentJob",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDeploymentJobResponse>(await this.callApi(params, req, runtime), new DescribeDeploymentJobResponse({}));
  }

  /**
   * @summary 获取部署任务详情
   *
   * @param request DescribeDeploymentJobRequest
   * @return DescribeDeploymentJobResponse
   */
  async describeDeploymentJob(request: DescribeDeploymentJobRequest): Promise<DescribeDeploymentJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeploymentJobWithOptions(request, runtime);
  }

  /**
   * @summary 查询任务状态
   *
   * @param request DescribeDeploymentJobStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDeploymentJobStatusResponse
   */
  async describeDeploymentJobStatusWithOptions(request: DescribeDeploymentJobStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeploymentJobStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDeploymentJobStatus",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDeploymentJobStatusResponse>(await this.callApi(params, req, runtime), new DescribeDeploymentJobStatusResponse({}));
  }

  /**
   * @summary 查询任务状态
   *
   * @param request DescribeDeploymentJobStatusRequest
   * @return DescribeDeploymentJobStatusResponse
   */
  async describeDeploymentJobStatus(request: DescribeDeploymentJobStatusRequest): Promise<DescribeDeploymentJobStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeploymentJobStatusWithOptions(request, runtime);
  }

  /**
   * @summary Queries the number and usage of purchased domain validated (DV) certificates.
   *
   * @param request DescribePackageStateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribePackageStateResponse
   */
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

  /**
   * @summary Queries the number and usage of purchased domain validated (DV) certificates.
   *
   * @param request DescribePackageStateRequest
   * @return DescribePackageStateResponse
   */
  async describePackageState(request: DescribePackageStateRequest): Promise<DescribePackageStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePackageStateWithOptions(request, runtime);
  }

  /**
   * @param request EncryptRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return EncryptResponse
   */
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

  /**
   * @param request EncryptRequest
   * @return EncryptResponse
   */
  async encrypt(request: EncryptRequest): Promise<EncryptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.encryptWithOptions(request, runtime);
  }

  /**
   * @param request GetCertWarehouseQuotaRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetCertWarehouseQuotaResponse
   */
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

  /**
   * @return GetCertWarehouseQuotaResponse
   */
  async getCertWarehouseQuota(): Promise<GetCertWarehouseQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCertWarehouseQuotaWithOptions(runtime);
  }

  /**
   * @param request GetCsrDetailRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetCsrDetailResponse
   */
  async getCsrDetailWithOptions(request: GetCsrDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetCsrDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.csrId)) {
      query["CsrId"] = request.csrId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCsrDetail",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCsrDetailResponse>(await this.callApi(params, req, runtime), new GetCsrDetailResponse({}));
  }

  /**
   * @param request GetCsrDetailRequest
   * @return GetCsrDetailResponse
   */
  async getCsrDetail(request: GetCsrDetailRequest): Promise<GetCsrDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCsrDetailWithOptions(request, runtime);
  }

  /**
   * @summary Queries the details of a certificate.
   *
   * @description You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
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
   * @summary Queries the details of a certificate.
   *
   * @description You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request GetUserCertificateDetailRequest
   * @return GetUserCertificateDetailResponse
   */
  async getUserCertificateDetail(request: GetUserCertificateDetailRequest): Promise<GetUserCertificateDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserCertificateDetailWithOptions(request, runtime);
  }

  /**
   * @summary Queries the certificates in a certificate repository.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
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
   * @summary Queries the certificates in a certificate repository.
   *
   * @description You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request ListCertRequest
   * @return ListCertResponse
   */
  async listCert(request: ListCertRequest): Promise<ListCertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCertWithOptions(request, runtime);
  }

  /**
   * @param request ListCertWarehouseRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListCertWarehouseResponse
   */
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

  /**
   * @param request ListCertWarehouseRequest
   * @return ListCertWarehouseResponse
   */
  async listCertWarehouse(request: ListCertWarehouseRequest): Promise<ListCertWarehouseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCertWarehouseWithOptions(request, runtime);
  }

  /**
   * @summary 云授权ak查询
   *
   * @param request ListCloudAccessRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListCloudAccessResponse
   */
  async listCloudAccessWithOptions(request: ListCloudAccessRequest, runtime: $Util.RuntimeOptions): Promise<ListCloudAccessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cloudName)) {
      query["CloudName"] = request.cloudName;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.secretId)) {
      query["SecretId"] = request.secretId;
    }

    if (!Util.isUnset(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCloudAccess",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCloudAccessResponse>(await this.callApi(params, req, runtime), new ListCloudAccessResponse({}));
  }

  /**
   * @summary 云授权ak查询
   *
   * @param request ListCloudAccessRequest
   * @return ListCloudAccessResponse
   */
  async listCloudAccess(request: ListCloudAccessRequest): Promise<ListCloudAccessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCloudAccessWithOptions(request, runtime);
  }

  /**
   * @summary 可选择的资源-查询云资源列表
   *
   * @param request ListCloudResourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListCloudResourcesResponse
   */
  async listCloudResourcesWithOptions(request: ListCloudResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListCloudResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cloudName)) {
      query["CloudName"] = request.cloudName;
    }

    if (!Util.isUnset(request.cloudProduct)) {
      query["CloudProduct"] = request.cloudProduct;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.secretId)) {
      query["SecretId"] = request.secretId;
    }

    if (!Util.isUnset(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCloudResources",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCloudResourcesResponse>(await this.callApi(params, req, runtime), new ListCloudResourcesResponse({}));
  }

  /**
   * @summary 可选择的资源-查询云资源列表
   *
   * @param request ListCloudResourcesRequest
   * @return ListCloudResourcesResponse
   */
  async listCloudResources(request: ListCloudResourcesRequest): Promise<ListCloudResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCloudResourcesWithOptions(request, runtime);
  }

  /**
   * @summary 获取联系人列表
   *
   * @param request ListContactRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListContactResponse
   */
  async listContactWithOptions(request: ListContactRequest, runtime: $Util.RuntimeOptions): Promise<ListContactResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListContact",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListContactResponse>(await this.callApi(params, req, runtime), new ListContactResponse({}));
  }

  /**
   * @summary 获取联系人列表
   *
   * @param request ListContactRequest
   * @return ListContactResponse
   */
  async listContact(request: ListContactRequest): Promise<ListContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listContactWithOptions(request, runtime);
  }

  /**
   * @param request ListCsrRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListCsrResponse
   */
  async listCsrWithOptions(request: ListCsrRequest, runtime: $Util.RuntimeOptions): Promise<ListCsrResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCsr",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCsrResponse>(await this.callApi(params, req, runtime), new ListCsrResponse({}));
  }

  /**
   * @param request ListCsrRequest
   * @return ListCsrResponse
   */
  async listCsr(request: ListCsrRequest): Promise<ListCsrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCsrWithOptions(request, runtime);
  }

  /**
   * @summary 获取部署任务列表
   *
   * @param request ListDeploymentJobRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListDeploymentJobResponse
   */
  async listDeploymentJobWithOptions(request: ListDeploymentJobRequest, runtime: $Util.RuntimeOptions): Promise<ListDeploymentJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.jobType)) {
      query["JobType"] = request.jobType;
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
      action: "ListDeploymentJob",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDeploymentJobResponse>(await this.callApi(params, req, runtime), new ListDeploymentJobResponse({}));
  }

  /**
   * @summary 获取部署任务列表
   *
   * @param request ListDeploymentJobRequest
   * @return ListDeploymentJobResponse
   */
  async listDeploymentJob(request: ListDeploymentJobRequest): Promise<ListDeploymentJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeploymentJobWithOptions(request, runtime);
  }

  /**
   * @summary 获取部署任务的证书列表
   *
   * @param request ListDeploymentJobCertRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListDeploymentJobCertResponse
   */
  async listDeploymentJobCertWithOptions(request: ListDeploymentJobCertRequest, runtime: $Util.RuntimeOptions): Promise<ListDeploymentJobCertResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDeploymentJobCert",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDeploymentJobCertResponse>(await this.callApi(params, req, runtime), new ListDeploymentJobCertResponse({}));
  }

  /**
   * @summary 获取部署任务的证书列表
   *
   * @param request ListDeploymentJobCertRequest
   * @return ListDeploymentJobCertResponse
   */
  async listDeploymentJobCert(request: ListDeploymentJobCertRequest): Promise<ListDeploymentJobCertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeploymentJobCertWithOptions(request, runtime);
  }

  /**
   * @summary 部署任务的资源列表
   *
   * @param request ListDeploymentJobResourceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListDeploymentJobResourceResponse
   */
  async listDeploymentJobResourceWithOptions(request: ListDeploymentJobResourceRequest, runtime: $Util.RuntimeOptions): Promise<ListDeploymentJobResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDeploymentJobResource",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDeploymentJobResourceResponse>(await this.callApi(params, req, runtime), new ListDeploymentJobResourceResponse({}));
  }

  /**
   * @summary 部署任务的资源列表
   *
   * @param request ListDeploymentJobResourceRequest
   * @return ListDeploymentJobResourceResponse
   */
  async listDeploymentJobResource(request: ListDeploymentJobResourceRequest): Promise<ListDeploymentJobResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeploymentJobResourceWithOptions(request, runtime);
  }

  /**
   * @summary Queries the certificates or certificate orders of users.
   *
   * @description You can call the ListUserCertificateOrder operation to query the certificates or certificate orders of users. If you set OrderType to CERT or UPLOAD, certificates are returned. If you set OrderType to CPACK or BUY, certificate orders are returned.
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
   * @summary Queries the certificates or certificate orders of users.
   *
   * @description You can call the ListUserCertificateOrder operation to query the certificates or certificate orders of users. If you set OrderType to CERT or UPLOAD, certificates are returned. If you set OrderType to CPACK or BUY, certificate orders are returned.
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
   * @summary 查询部署任务worker
   *
   * @param request ListWorkerResourceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListWorkerResourceResponse
   */
  async listWorkerResourceWithOptions(request: ListWorkerResourceRequest, runtime: $Util.RuntimeOptions): Promise<ListWorkerResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cloudProduct)) {
      query["CloudProduct"] = request.cloudProduct;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
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
      action: "ListWorkerResource",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListWorkerResourceResponse>(await this.callApi(params, req, runtime), new ListWorkerResourceResponse({}));
  }

  /**
   * @summary 查询部署任务worker
   *
   * @param request ListWorkerResourceRequest
   * @return ListWorkerResourceResponse
   */
  async listWorkerResource(request: ListWorkerResourceRequest): Promise<ListWorkerResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWorkerResourceWithOptions(request, runtime);
  }

  /**
   * @summary Move Resource Group
   *
   * @param request MoveResourceGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return MoveResourceGroupResponse
   */
  async moveResourceGroupWithOptions(request: MoveResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<MoveResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MoveResourceGroup",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MoveResourceGroupResponse>(await this.callApi(params, req, runtime), new MoveResourceGroupResponse({}));
  }

  /**
   * @summary Move Resource Group
   *
   * @param request MoveResourceGroupRequest
   * @return MoveResourceGroupResponse
   */
  async moveResourceGroup(request: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  /**
   * @summary Submits a renewal application for the certificate order of an issued certificate.
   *
   * @description You can call this operation to submit a renewal application for a certificate only when the order of the certificate is in the expiring state. After the renewal is complete, a new certificate order whose status is pending application is generated. You must submit a certificate application for the new certificate order and install the new certificate after the new certificate is issued.
   * > You can call the [DescribeCertificateState](https://help.aliyun.com/document_detail/455800.html) operation to query the status of a certificate application order. If the value of the **Type** response parameter is **certificate**, the certificate is issued.
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
   * @summary Submits a renewal application for the certificate order of an issued certificate.
   *
   * @description You can call this operation to submit a renewal application for a certificate only when the order of the certificate is in the expiring state. After the renewal is complete, a new certificate order whose status is pending application is generated. You must submit a certificate application for the new certificate order and install the new certificate after the new certificate is issued.
   * > You can call the [DescribeCertificateState](https://help.aliyun.com/document_detail/455800.html) operation to query the status of a certificate application order. If the value of the **Type** response parameter is **certificate**, the certificate is issued.
   *
   * @param request RenewCertificateOrderForPackageRequestRequest
   * @return RenewCertificateOrderForPackageRequestResponse
   */
  async renewCertificateOrderForPackageRequest(request: RenewCertificateOrderForPackageRequestRequest): Promise<RenewCertificateOrderForPackageRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewCertificateOrderForPackageRequestWithOptions(request, runtime);
  }

  /**
   * @param request RevokeWHClientCertificateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RevokeWHClientCertificateResponse
   */
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

  /**
   * @param request RevokeWHClientCertificateRequest
   * @return RevokeWHClientCertificateResponse
   */
  async revokeWHClientCertificate(request: RevokeWHClientCertificateRequest): Promise<RevokeWHClientCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeWHClientCertificateWithOptions(request, runtime);
  }

  /**
   * @param request SignRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SignResponse
   */
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

  /**
   * @param request SignRequest
   * @return SignResponse
   */
  async sign(request: SignRequest): Promise<SignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.signWithOptions(request, runtime);
  }

  /**
   * @param request UpdateCsrRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateCsrResponse
   */
  async updateCsrWithOptions(request: UpdateCsrRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCsrResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.csrId)) {
      query["CsrId"] = request.csrId;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCsr",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateCsrResponse>(await this.callApi(params, req, runtime), new UpdateCsrResponse({}));
  }

  /**
   * @param request UpdateCsrRequest
   * @return UpdateCsrResponse
   */
  async updateCsr(request: UpdateCsrRequest): Promise<UpdateCsrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCsrWithOptions(request, runtime);
  }

  /**
   * @summary 更新部署任务
   *
   * @param request UpdateDeploymentJobRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateDeploymentJobResponse
   */
  async updateDeploymentJobWithOptions(request: UpdateDeploymentJobRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDeploymentJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certIds)) {
      query["CertIds"] = request.certIds;
    }

    if (!Util.isUnset(request.contactIds)) {
      query["ContactIds"] = request.contactIds;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!Util.isUnset(request.scheduleTime)) {
      query["ScheduleTime"] = request.scheduleTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDeploymentJob",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDeploymentJobResponse>(await this.callApi(params, req, runtime), new UpdateDeploymentJobResponse({}));
  }

  /**
   * @summary 更新部署任务
   *
   * @param request UpdateDeploymentJobRequest
   * @return UpdateDeploymentJobResponse
   */
  async updateDeploymentJob(request: UpdateDeploymentJobRequest): Promise<UpdateDeploymentJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDeploymentJobWithOptions(request, runtime);
  }

  /**
   * @summary 更新任务部署任务状态
   *
   * @param request UpdateDeploymentJobStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateDeploymentJobStatusResponse
   */
  async updateDeploymentJobStatusWithOptions(request: UpdateDeploymentJobStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDeploymentJobStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDeploymentJobStatus",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDeploymentJobStatusResponse>(await this.callApi(params, req, runtime), new UpdateDeploymentJobStatusResponse({}));
  }

  /**
   * @summary 更新任务部署任务状态
   *
   * @param request UpdateDeploymentJobStatusRequest
   * @return UpdateDeploymentJobStatusResponse
   */
  async updateDeploymentJobStatus(request: UpdateDeploymentJobStatusRequest): Promise<UpdateDeploymentJobStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDeploymentJobStatusWithOptions(request, runtime);
  }

  /**
   * @summary 更新部署任务worker状态
   *
   * @param request UpdateWorkerResourceStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateWorkerResourceStatusResponse
   */
  async updateWorkerResourceStatusWithOptions(request: UpdateWorkerResourceStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWorkerResourceStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.workerId)) {
      query["WorkerId"] = request.workerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWorkerResourceStatus",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateWorkerResourceStatusResponse>(await this.callApi(params, req, runtime), new UpdateWorkerResourceStatusResponse({}));
  }

  /**
   * @summary 更新部署任务worker状态
   *
   * @param request UpdateWorkerResourceStatusRequest
   * @return UpdateWorkerResourceStatusResponse
   */
  async updateWorkerResourceStatus(request: UpdateWorkerResourceStatusRequest): Promise<UpdateWorkerResourceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWorkerResourceStatusWithOptions(request, runtime);
  }

  /**
   * @param request UploadCsrRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UploadCsrResponse
   */
  async uploadCsrWithOptions(request: UploadCsrRequest, runtime: $Util.RuntimeOptions): Promise<UploadCsrResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.csr)) {
      query["Csr"] = request.csr;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadCsr",
      version: "2020-04-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadCsrResponse>(await this.callApi(params, req, runtime), new UploadCsrResponse({}));
  }

  /**
   * @param request UploadCsrRequest
   * @return UploadCsrResponse
   */
  async uploadCsr(request: UploadCsrRequest): Promise<UploadCsrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadCsrWithOptions(request, runtime);
  }

  /**
   * @summary The private key of the certificate.
   *
   * @description The unique identifier of the certificate.
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
   * @summary The private key of the certificate.
   *
   * @description The unique identifier of the certificate.
   *
   * @param request UploadPCACertRequest
   * @return UploadPCACertResponse
   */
  async uploadPCACert(request: UploadPCACertRequest): Promise<UploadPCACertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadPCACertWithOptions(request, runtime);
  }

  /**
   * @summary Uploads a certificate.
   *
   * @description You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
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
   * @summary Uploads a certificate.
   *
   * @description You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   *
   * @param request UploadUserCertificateRequest
   * @return UploadUserCertificateResponse
   */
  async uploadUserCertificate(request: UploadUserCertificateRequest): Promise<UploadUserCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadUserCertificateWithOptions(request, runtime);
  }

  /**
   * @param request VerifyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return VerifyResponse
   */
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

  /**
   * @param request VerifyRequest
   * @return VerifyResponse
   */
  async verify(request: VerifyRequest): Promise<VerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyWithOptions(request, runtime);
  }

}
