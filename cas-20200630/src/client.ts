// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateCertificateWithExtensionRequest extends $tea.Model {
  afterTime?: number;
  algorithmKeySize?: number;
  aliasName?: string;
  appendCrl?: boolean;
  basicConstraintsCritical?: boolean;
  beforeTime?: number;
  certType?: string;
  commonName?: string;
  countryCode?: string;
  csrPemString?: string;
  locality?: string;
  organization?: string;
  organizationUnit?: string;
  parentIdentifier?: string;
  sans?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      afterTime: 'AfterTime',
      algorithmKeySize: 'AlgorithmKeySize',
      aliasName: 'AliasName',
      appendCrl: 'AppendCrl',
      basicConstraintsCritical: 'BasicConstraintsCritical',
      beforeTime: 'BeforeTime',
      certType: 'CertType',
      commonName: 'CommonName',
      countryCode: 'CountryCode',
      csrPemString: 'CsrPemString',
      locality: 'Locality',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      parentIdentifier: 'ParentIdentifier',
      sans: 'Sans',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterTime: 'number',
      algorithmKeySize: 'number',
      aliasName: 'string',
      appendCrl: 'boolean',
      basicConstraintsCritical: 'boolean',
      beforeTime: 'number',
      certType: 'string',
      commonName: 'string',
      countryCode: 'string',
      csrPemString: 'string',
      locality: 'string',
      organization: 'string',
      organizationUnit: 'string',
      parentIdentifier: 'string',
      sans: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateWithExtensionResponseBody extends $tea.Model {
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

export class CreateCertificateWithExtensionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCertificateWithExtensionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCertificateWithExtensionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientCertificateRequest extends $tea.Model {
  afterTime?: number;
  algorithm?: string;
  beforeTime?: number;
  commonName?: string;
  days?: number;
  parentIdentifier?: string;
  sanType?: number;
  sanValue?: string;
  static names(): { [key: string]: string } {
    return {
      afterTime: 'AfterTime',
      algorithm: 'Algorithm',
      beforeTime: 'BeforeTime',
      commonName: 'CommonName',
      days: 'Days',
      parentIdentifier: 'ParentIdentifier',
      sanType: 'SanType',
      sanValue: 'SanValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterTime: 'number',
      algorithm: 'string',
      beforeTime: 'number',
      commonName: 'string',
      days: 'number',
      parentIdentifier: 'string',
      sanType: 'number',
      sanValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientCertificateResponseBody extends $tea.Model {
  identifier?: string;
  parentX509Certificate?: string;
  requestId?: string;
  rootX509Certificate?: string;
  x509Certificate?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
      parentX509Certificate: 'ParentX509Certificate',
      requestId: 'RequestId',
      rootX509Certificate: 'RootX509Certificate',
      x509Certificate: 'X509Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreateClientCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateClientCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateClientCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientCertificateWithCsrRequest extends $tea.Model {
  afterTime?: number;
  beforeTime?: number;
  csr?: string;
  days?: number;
  parentIdentifier?: string;
  sanType?: number;
  sanValue?: string;
  static names(): { [key: string]: string } {
    return {
      afterTime: 'AfterTime',
      beforeTime: 'BeforeTime',
      csr: 'Csr',
      days: 'Days',
      parentIdentifier: 'ParentIdentifier',
      sanType: 'SanType',
      sanValue: 'SanValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterTime: 'number',
      beforeTime: 'number',
      csr: 'string',
      days: 'number',
      parentIdentifier: 'string',
      sanType: 'number',
      sanValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientCertificateWithCsrResponseBody extends $tea.Model {
  identifier?: string;
  parentX509Certificate?: string;
  requestId?: string;
  rootX509Certificate?: string;
  x509Certificate?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
      parentX509Certificate: 'ParentX509Certificate',
      requestId: 'RequestId',
      rootX509Certificate: 'RootX509Certificate',
      x509Certificate: 'X509Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreateClientCertificateWithCsrResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateClientCertificateWithCsrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateClientCertificateWithCsrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRevokeClientCertificateRequest extends $tea.Model {
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

export class CreateRevokeClientCertificateResponseBody extends $tea.Model {
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

export class CreateRevokeClientCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRevokeClientCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRevokeClientCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRootCACertificateRequest extends $tea.Model {
  algorithm?: string;
  commonName?: string;
  countryCode?: string;
  locality?: string;
  organization?: string;
  organizationUnit?: string;
  state?: string;
  years?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      commonName: 'CommonName',
      countryCode: 'CountryCode',
      locality: 'Locality',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      state: 'State',
      years: 'Years',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      commonName: 'string',
      countryCode: 'string',
      locality: 'string',
      organization: 'string',
      organizationUnit: 'string',
      state: 'string',
      years: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRootCACertificateResponseBody extends $tea.Model {
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

export class CreateRootCACertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRootCACertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRootCACertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerCertificateRequest extends $tea.Model {
  afterTime?: number;
  algorithm?: string;
  beforeTime?: number;
  commonName?: string;
  days?: number;
  domain?: string;
  parentIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      afterTime: 'AfterTime',
      algorithm: 'Algorithm',
      beforeTime: 'BeforeTime',
      commonName: 'CommonName',
      days: 'Days',
      domain: 'Domain',
      parentIdentifier: 'ParentIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterTime: 'number',
      algorithm: 'string',
      beforeTime: 'number',
      commonName: 'string',
      days: 'number',
      domain: 'string',
      parentIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerCertificateResponseBody extends $tea.Model {
  identifier?: string;
  parentX509Certificate?: string;
  requestId?: string;
  rootX509Certificate?: string;
  x509Certificate?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
      parentX509Certificate: 'ParentX509Certificate',
      requestId: 'RequestId',
      rootX509Certificate: 'RootX509Certificate',
      x509Certificate: 'X509Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreateServerCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateServerCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateServerCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerCertificateWithCsrRequest extends $tea.Model {
  afterTime?: number;
  beforeTime?: number;
  csr?: string;
  days?: number;
  domain?: string;
  parentIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      afterTime: 'AfterTime',
      beforeTime: 'BeforeTime',
      csr: 'Csr',
      days: 'Days',
      domain: 'Domain',
      parentIdentifier: 'ParentIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterTime: 'number',
      beforeTime: 'number',
      csr: 'string',
      days: 'number',
      domain: 'string',
      parentIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerCertificateWithCsrResponseBody extends $tea.Model {
  identifier?: string;
  parentX509Certificate?: string;
  requestId?: string;
  rootX509Certificate?: string;
  x509Certificate?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
      parentX509Certificate: 'ParentX509Certificate',
      requestId: 'RequestId',
      rootX509Certificate: 'RootX509Certificate',
      x509Certificate: 'X509Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreateServerCertificateWithCsrResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateServerCertificateWithCsrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateServerCertificateWithCsrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubCACertificateRequest extends $tea.Model {
  algorithm?: string;
  commonName?: string;
  countryCode?: string;
  locality?: string;
  organization?: string;
  organizationUnit?: string;
  parentIdentifier?: string;
  state?: string;
  years?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      commonName: 'CommonName',
      countryCode: 'CountryCode',
      locality: 'Locality',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      parentIdentifier: 'ParentIdentifier',
      state: 'State',
      years: 'Years',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      commonName: 'string',
      countryCode: 'string',
      locality: 'string',
      organization: 'string',
      organizationUnit: 'string',
      parentIdentifier: 'string',
      state: 'string',
      years: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubCACertificateResponseBody extends $tea.Model {
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

export class CreateSubCACertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSubCACertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSubCACertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClientCertificateRequest extends $tea.Model {
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

export class DeleteClientCertificateResponseBody extends $tea.Model {
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

export class DeleteClientCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteClientCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteClientCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCACertificateRequest extends $tea.Model {
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

export class DescribeCACertificateResponseBody extends $tea.Model {
  certificate?: DescribeCACertificateResponseBodyCertificate;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: DescribeCACertificateResponseBodyCertificate,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCACertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCACertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCACertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCACertificateCountResponseBody extends $tea.Model {
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCACertificateCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCACertificateCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCACertificateCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCACertificateListRequest extends $tea.Model {
  currentPage?: number;
  showSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      showSize: 'ShowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      showSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCACertificateListResponseBody extends $tea.Model {
  certificateList?: DescribeCACertificateListResponseBodyCertificateList[];
  currentPage?: number;
  pageCount?: number;
  requestId?: string;
  showSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      certificateList: 'CertificateList',
      currentPage: 'CurrentPage',
      pageCount: 'PageCount',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateList: { 'type': 'array', 'itemType': DescribeCACertificateListResponseBodyCertificateList },
      currentPage: 'number',
      pageCount: 'number',
      requestId: 'string',
      showSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCACertificateListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCACertificateListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCACertificateListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificatePrivateKeyRequest extends $tea.Model {
  encryptedCode?: string;
  identifier?: string;
  static names(): { [key: string]: string } {
    return {
      encryptedCode: 'EncryptedCode',
      identifier: 'Identifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptedCode: 'string',
      identifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificatePrivateKeyResponseBody extends $tea.Model {
  encryptedData?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      encryptedData: 'EncryptedData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptedData: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificatePrivateKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCertificatePrivateKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCertificatePrivateKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientCertificateRequest extends $tea.Model {
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

export class DescribeClientCertificateResponseBody extends $tea.Model {
  certificate?: DescribeClientCertificateResponseBodyCertificate;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: DescribeClientCertificateResponseBodyCertificate,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClientCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClientCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientCertificateForSerialNumberRequest extends $tea.Model {
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientCertificateForSerialNumberResponseBody extends $tea.Model {
  certificateList?: DescribeClientCertificateForSerialNumberResponseBodyCertificateList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateList: 'CertificateList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateList: { 'type': 'array', 'itemType': DescribeClientCertificateForSerialNumberResponseBodyCertificateList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientCertificateForSerialNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClientCertificateForSerialNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClientCertificateForSerialNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientCertificateStatusRequest extends $tea.Model {
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

export class DescribeClientCertificateStatusResponseBody extends $tea.Model {
  certificateStatus?: DescribeClientCertificateStatusResponseBodyCertificateStatus[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateStatus: 'CertificateStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateStatus: { 'type': 'array', 'itemType': DescribeClientCertificateStatusResponseBodyCertificateStatus },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientCertificateStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClientCertificateStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClientCertificateStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientCertificateStatusForSerialNumberRequest extends $tea.Model {
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientCertificateStatusForSerialNumberResponseBody extends $tea.Model {
  certificateStatus?: DescribeClientCertificateStatusForSerialNumberResponseBodyCertificateStatus[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateStatus: 'CertificateStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateStatus: { 'type': 'array', 'itemType': DescribeClientCertificateStatusForSerialNumberResponseBodyCertificateStatus },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientCertificateStatusForSerialNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClientCertificateStatusForSerialNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClientCertificateStatusForSerialNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCAInstanceStatusRequest extends $tea.Model {
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

export class GetCAInstanceStatusResponseBody extends $tea.Model {
  instanceStatusList?: GetCAInstanceStatusResponseBodyInstanceStatusList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceStatusList: 'InstanceStatusList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceStatusList: { 'type': 'array', 'itemType': GetCAInstanceStatusResponseBodyInstanceStatusList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCAInstanceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCAInstanceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCAInstanceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCACertificateLogRequest extends $tea.Model {
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

export class ListCACertificateLogResponseBody extends $tea.Model {
  logList?: ListCACertificateLogResponseBodyLogList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logList: 'LogList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logList: { 'type': 'array', 'itemType': ListCACertificateLogResponseBodyLogList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCACertificateLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCACertificateLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCACertificateLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientCertificateRequest extends $tea.Model {
  currentPage?: number;
  showSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      showSize: 'ShowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      showSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientCertificateResponseBody extends $tea.Model {
  certificateList?: ListClientCertificateResponseBodyCertificateList[];
  currentPage?: number;
  pageCount?: number;
  requestId?: string;
  showSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      certificateList: 'CertificateList',
      currentPage: 'CurrentPage',
      pageCount: 'PageCount',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateList: { 'type': 'array', 'itemType': ListClientCertificateResponseBodyCertificateList },
      currentPage: 'number',
      pageCount: 'number',
      requestId: 'string',
      showSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClientCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClientCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRevokeCertificateRequest extends $tea.Model {
  currentPage?: number;
  showSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      showSize: 'ShowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      showSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRevokeCertificateResponseBody extends $tea.Model {
  certificateList?: ListRevokeCertificateResponseBodyCertificateList[];
  currentPage?: number;
  pageCount?: number;
  requestId?: string;
  showSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      certificateList: 'CertificateList',
      currentPage: 'CurrentPage',
      pageCount: 'PageCount',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateList: { 'type': 'array', 'itemType': ListRevokeCertificateResponseBodyCertificateList },
      currentPage: 'number',
      pageCount: 'number',
      requestId: 'string',
      showSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRevokeCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRevokeCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRevokeCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCACertificateStatusRequest extends $tea.Model {
  identifier?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCACertificateStatusResponseBody extends $tea.Model {
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

export class UpdateCACertificateStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateCACertificateStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateCACertificateStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCACertificateResponseBodyCertificate extends $tea.Model {
  afterDate?: number;
  algorithm?: string;
  beforeDate?: number;
  certificateType?: string;
  commonName?: string;
  countryCode?: string;
  identifier?: string;
  keySize?: number;
  locality?: string;
  md5?: string;
  organization?: string;
  organizationUnit?: string;
  parentIdentifier?: string;
  sans?: string;
  serialNumber?: string;
  sha2?: string;
  signAlgorithm?: string;
  state?: string;
  status?: string;
  subjectDN?: string;
  x509Certificate?: string;
  years?: number;
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      algorithm: 'Algorithm',
      beforeDate: 'BeforeDate',
      certificateType: 'CertificateType',
      commonName: 'CommonName',
      countryCode: 'CountryCode',
      identifier: 'Identifier',
      keySize: 'KeySize',
      locality: 'Locality',
      md5: 'Md5',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      parentIdentifier: 'ParentIdentifier',
      sans: 'Sans',
      serialNumber: 'SerialNumber',
      sha2: 'Sha2',
      signAlgorithm: 'SignAlgorithm',
      state: 'State',
      status: 'Status',
      subjectDN: 'SubjectDN',
      x509Certificate: 'X509Certificate',
      years: 'Years',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDate: 'number',
      algorithm: 'string',
      beforeDate: 'number',
      certificateType: 'string',
      commonName: 'string',
      countryCode: 'string',
      identifier: 'string',
      keySize: 'number',
      locality: 'string',
      md5: 'string',
      organization: 'string',
      organizationUnit: 'string',
      parentIdentifier: 'string',
      sans: 'string',
      serialNumber: 'string',
      sha2: 'string',
      signAlgorithm: 'string',
      state: 'string',
      status: 'string',
      subjectDN: 'string',
      x509Certificate: 'string',
      years: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCACertificateListResponseBodyCertificateList extends $tea.Model {
  afterDate?: number;
  algorithm?: string;
  beforeDate?: number;
  certificateType?: string;
  commonName?: string;
  countryCode?: string;
  identifier?: string;
  keySize?: number;
  locality?: string;
  md5?: string;
  organization?: string;
  organizationUnit?: string;
  parentIdentifier?: string;
  sans?: string;
  serialNumber?: string;
  sha2?: string;
  signAlgorithm?: string;
  state?: string;
  status?: string;
  subjectDN?: string;
  x509Certificate?: string;
  years?: number;
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      algorithm: 'Algorithm',
      beforeDate: 'BeforeDate',
      certificateType: 'CertificateType',
      commonName: 'CommonName',
      countryCode: 'CountryCode',
      identifier: 'Identifier',
      keySize: 'KeySize',
      locality: 'Locality',
      md5: 'Md5',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      parentIdentifier: 'ParentIdentifier',
      sans: 'Sans',
      serialNumber: 'SerialNumber',
      sha2: 'Sha2',
      signAlgorithm: 'SignAlgorithm',
      state: 'State',
      status: 'Status',
      subjectDN: 'SubjectDN',
      x509Certificate: 'X509Certificate',
      years: 'Years',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDate: 'number',
      algorithm: 'string',
      beforeDate: 'number',
      certificateType: 'string',
      commonName: 'string',
      countryCode: 'string',
      identifier: 'string',
      keySize: 'number',
      locality: 'string',
      md5: 'string',
      organization: 'string',
      organizationUnit: 'string',
      parentIdentifier: 'string',
      sans: 'string',
      serialNumber: 'string',
      sha2: 'string',
      signAlgorithm: 'string',
      state: 'string',
      status: 'string',
      subjectDN: 'string',
      x509Certificate: 'string',
      years: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientCertificateResponseBodyCertificate extends $tea.Model {
  afterDate?: number;
  algorithm?: string;
  beforeDate?: number;
  certificateType?: string;
  commonName?: string;
  countryCode?: string;
  days?: number;
  identifier?: string;
  keySize?: number;
  locality?: string;
  md5?: string;
  organization?: string;
  organizationUnit?: string;
  parentIdentifier?: string;
  sans?: string;
  serialNumber?: string;
  sha2?: string;
  signAlgorithm?: string;
  state?: string;
  status?: string;
  subjectDN?: string;
  x509Certificate?: string;
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      algorithm: 'Algorithm',
      beforeDate: 'BeforeDate',
      certificateType: 'CertificateType',
      commonName: 'CommonName',
      countryCode: 'CountryCode',
      days: 'Days',
      identifier: 'Identifier',
      keySize: 'KeySize',
      locality: 'Locality',
      md5: 'Md5',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      parentIdentifier: 'ParentIdentifier',
      sans: 'Sans',
      serialNumber: 'SerialNumber',
      sha2: 'Sha2',
      signAlgorithm: 'SignAlgorithm',
      state: 'State',
      status: 'Status',
      subjectDN: 'SubjectDN',
      x509Certificate: 'X509Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDate: 'number',
      algorithm: 'string',
      beforeDate: 'number',
      certificateType: 'string',
      commonName: 'string',
      countryCode: 'string',
      days: 'number',
      identifier: 'string',
      keySize: 'number',
      locality: 'string',
      md5: 'string',
      organization: 'string',
      organizationUnit: 'string',
      parentIdentifier: 'string',
      sans: 'string',
      serialNumber: 'string',
      sha2: 'string',
      signAlgorithm: 'string',
      state: 'string',
      status: 'string',
      subjectDN: 'string',
      x509Certificate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientCertificateForSerialNumberResponseBodyCertificateList extends $tea.Model {
  afterDate?: string;
  algorithm?: string;
  beforeDate?: string;
  commonName?: string;
  countryCode?: string;
  identifier?: string;
  keySize?: number;
  locality?: string;
  md5?: string;
  organization?: string;
  organizationUnit?: string;
  sans?: string;
  serialNumber?: string;
  sha2?: string;
  signAlgorithm?: string;
  state?: string;
  status?: string;
  subjectDN?: string;
  x509Certificate?: string;
  years?: number;
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      algorithm: 'Algorithm',
      beforeDate: 'BeforeDate',
      commonName: 'CommonName',
      countryCode: 'CountryCode',
      identifier: 'Identifier',
      keySize: 'KeySize',
      locality: 'Locality',
      md5: 'Md5',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      sans: 'Sans',
      serialNumber: 'SerialNumber',
      sha2: 'Sha2',
      signAlgorithm: 'SignAlgorithm',
      state: 'State',
      status: 'Status',
      subjectDN: 'SubjectDN',
      x509Certificate: 'X509Certificate',
      years: 'Years',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDate: 'string',
      algorithm: 'string',
      beforeDate: 'string',
      commonName: 'string',
      countryCode: 'string',
      identifier: 'string',
      keySize: 'number',
      locality: 'string',
      md5: 'string',
      organization: 'string',
      organizationUnit: 'string',
      sans: 'string',
      serialNumber: 'string',
      sha2: 'string',
      signAlgorithm: 'string',
      state: 'string',
      status: 'string',
      subjectDN: 'string',
      x509Certificate: 'string',
      years: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientCertificateStatusResponseBodyCertificateStatus extends $tea.Model {
  revokeTime?: number;
  serialNumber?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      revokeTime: 'RevokeTime',
      serialNumber: 'SerialNumber',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      revokeTime: 'number',
      serialNumber: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientCertificateStatusForSerialNumberResponseBodyCertificateStatus extends $tea.Model {
  revokeTime?: number;
  serialNumber?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      revokeTime: 'RevokeTime',
      serialNumber: 'SerialNumber',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      revokeTime: 'number',
      serialNumber: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCAInstanceStatusResponseBodyInstanceStatusList extends $tea.Model {
  afterTime?: number;
  beforeTime?: number;
  certIssuedCount?: number;
  certTotalCount?: number;
  identifier?: string;
  instanceId?: string;
  status?: string;
  type?: string;
  useExpireTime?: number;
  static names(): { [key: string]: string } {
    return {
      afterTime: 'AfterTime',
      beforeTime: 'BeforeTime',
      certIssuedCount: 'CertIssuedCount',
      certTotalCount: 'CertTotalCount',
      identifier: 'Identifier',
      instanceId: 'InstanceId',
      status: 'Status',
      type: 'Type',
      useExpireTime: 'UseExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterTime: 'number',
      beforeTime: 'number',
      certIssuedCount: 'number',
      certTotalCount: 'number',
      identifier: 'string',
      instanceId: 'string',
      status: 'string',
      type: 'string',
      useExpireTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCACertificateLogResponseBodyLogList extends $tea.Model {
  content?: string;
  createTime?: number;
  identifier?: string;
  opType?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      identifier: 'Identifier',
      opType: 'OpType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'number',
      identifier: 'string',
      opType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientCertificateResponseBodyCertificateList extends $tea.Model {
  afterDate?: number;
  algorithm?: string;
  beforeDate?: number;
  certificateType?: string;
  commonName?: string;
  countryCode?: string;
  days?: number;
  identifier?: string;
  keySize?: number;
  locality?: string;
  md5?: string;
  organization?: string;
  organizationUnit?: string;
  parentIdentifier?: string;
  sans?: string;
  serialNumber?: string;
  sha2?: string;
  signAlgorithm?: string;
  state?: string;
  status?: string;
  subjectDN?: string;
  x509Certificate?: string;
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      algorithm: 'Algorithm',
      beforeDate: 'BeforeDate',
      certificateType: 'CertificateType',
      commonName: 'CommonName',
      countryCode: 'CountryCode',
      days: 'Days',
      identifier: 'Identifier',
      keySize: 'KeySize',
      locality: 'Locality',
      md5: 'Md5',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      parentIdentifier: 'ParentIdentifier',
      sans: 'Sans',
      serialNumber: 'SerialNumber',
      sha2: 'Sha2',
      signAlgorithm: 'SignAlgorithm',
      state: 'State',
      status: 'Status',
      subjectDN: 'SubjectDN',
      x509Certificate: 'X509Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDate: 'number',
      algorithm: 'string',
      beforeDate: 'number',
      certificateType: 'string',
      commonName: 'string',
      countryCode: 'string',
      days: 'number',
      identifier: 'string',
      keySize: 'number',
      locality: 'string',
      md5: 'string',
      organization: 'string',
      organizationUnit: 'string',
      parentIdentifier: 'string',
      sans: 'string',
      serialNumber: 'string',
      sha2: 'string',
      signAlgorithm: 'string',
      state: 'string',
      status: 'string',
      subjectDN: 'string',
      x509Certificate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRevokeCertificateResponseBodyCertificateList extends $tea.Model {
  afterDate?: string;
  algorithm?: string;
  beforeDate?: string;
  commonName?: string;
  countryCode?: string;
  identifier?: string;
  keySize?: number;
  locality?: string;
  md5?: string;
  organization?: string;
  organizationUnit?: string;
  revokeDate?: string;
  sans?: string;
  serialNumber?: string;
  sha2?: string;
  signAlgorithm?: string;
  state?: string;
  subjectDN?: string;
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      algorithm: 'Algorithm',
      beforeDate: 'BeforeDate',
      commonName: 'CommonName',
      countryCode: 'CountryCode',
      identifier: 'Identifier',
      keySize: 'KeySize',
      locality: 'Locality',
      md5: 'Md5',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      revokeDate: 'RevokeDate',
      sans: 'Sans',
      serialNumber: 'SerialNumber',
      sha2: 'Sha2',
      signAlgorithm: 'SignAlgorithm',
      state: 'State',
      subjectDN: 'SubjectDN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDate: 'string',
      algorithm: 'string',
      beforeDate: 'string',
      commonName: 'string',
      countryCode: 'string',
      identifier: 'string',
      keySize: 'number',
      locality: 'string',
      md5: 'string',
      organization: 'string',
      organizationUnit: 'string',
      revokeDate: 'string',
      sans: 'string',
      serialNumber: 'string',
      sha2: 'string',
      signAlgorithm: 'string',
      state: 'string',
      subjectDN: 'string',
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

  async createCertificateWithExtensionWithOptions(request: CreateCertificateWithExtensionRequest, runtime: $Util.RuntimeOptions): Promise<CreateCertificateWithExtensionResponse> {
    Util.validateModel(request);
    let query = { };
    query["AfterTime"] = request.afterTime;
    query["AlgorithmKeySize"] = request.algorithmKeySize;
    query["AliasName"] = request.aliasName;
    query["AppendCrl"] = request.appendCrl;
    query["BasicConstraintsCritical"] = request.basicConstraintsCritical;
    query["BeforeTime"] = request.beforeTime;
    query["CertType"] = request.certType;
    query["CommonName"] = request.commonName;
    query["CountryCode"] = request.countryCode;
    query["CsrPemString"] = request.csrPemString;
    query["Locality"] = request.locality;
    query["Organization"] = request.organization;
    query["OrganizationUnit"] = request.organizationUnit;
    query["ParentIdentifier"] = request.parentIdentifier;
    query["Sans"] = request.sans;
    query["State"] = request.state;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateCertificateWithExtension",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateCertificateWithExtensionResponse>(await this.callApi(params, req, runtime), new CreateCertificateWithExtensionResponse({}));
  }

  async createCertificateWithExtension(request: CreateCertificateWithExtensionRequest): Promise<CreateCertificateWithExtensionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCertificateWithExtensionWithOptions(request, runtime);
  }

  async createClientCertificateWithOptions(request: CreateClientCertificateRequest, runtime: $Util.RuntimeOptions): Promise<CreateClientCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    query["AfterTime"] = request.afterTime;
    query["Algorithm"] = request.algorithm;
    query["BeforeTime"] = request.beforeTime;
    query["CommonName"] = request.commonName;
    query["Days"] = request.days;
    query["ParentIdentifier"] = request.parentIdentifier;
    query["SanType"] = request.sanType;
    query["SanValue"] = request.sanValue;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateClientCertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateClientCertificateResponse>(await this.callApi(params, req, runtime), new CreateClientCertificateResponse({}));
  }

  async createClientCertificate(request: CreateClientCertificateRequest): Promise<CreateClientCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClientCertificateWithOptions(request, runtime);
  }

  async createClientCertificateWithCsrWithOptions(request: CreateClientCertificateWithCsrRequest, runtime: $Util.RuntimeOptions): Promise<CreateClientCertificateWithCsrResponse> {
    Util.validateModel(request);
    let query = { };
    query["AfterTime"] = request.afterTime;
    query["BeforeTime"] = request.beforeTime;
    query["Csr"] = request.csr;
    query["Days"] = request.days;
    query["ParentIdentifier"] = request.parentIdentifier;
    query["SanType"] = request.sanType;
    query["SanValue"] = request.sanValue;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateClientCertificateWithCsr",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateClientCertificateWithCsrResponse>(await this.callApi(params, req, runtime), new CreateClientCertificateWithCsrResponse({}));
  }

  async createClientCertificateWithCsr(request: CreateClientCertificateWithCsrRequest): Promise<CreateClientCertificateWithCsrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClientCertificateWithCsrWithOptions(request, runtime);
  }

  async createRevokeClientCertificateWithOptions(request: CreateRevokeClientCertificateRequest, runtime: $Util.RuntimeOptions): Promise<CreateRevokeClientCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    query["Identifier"] = request.identifier;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateRevokeClientCertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateRevokeClientCertificateResponse>(await this.callApi(params, req, runtime), new CreateRevokeClientCertificateResponse({}));
  }

  async createRevokeClientCertificate(request: CreateRevokeClientCertificateRequest): Promise<CreateRevokeClientCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRevokeClientCertificateWithOptions(request, runtime);
  }

  async createRootCACertificateWithOptions(request: CreateRootCACertificateRequest, runtime: $Util.RuntimeOptions): Promise<CreateRootCACertificateResponse> {
    Util.validateModel(request);
    let query = { };
    query["Algorithm"] = request.algorithm;
    query["CommonName"] = request.commonName;
    query["CountryCode"] = request.countryCode;
    query["Locality"] = request.locality;
    query["Organization"] = request.organization;
    query["OrganizationUnit"] = request.organizationUnit;
    query["State"] = request.state;
    query["Years"] = request.years;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateRootCACertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateRootCACertificateResponse>(await this.callApi(params, req, runtime), new CreateRootCACertificateResponse({}));
  }

  async createRootCACertificate(request: CreateRootCACertificateRequest): Promise<CreateRootCACertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRootCACertificateWithOptions(request, runtime);
  }

  async createServerCertificateWithOptions(request: CreateServerCertificateRequest, runtime: $Util.RuntimeOptions): Promise<CreateServerCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    query["AfterTime"] = request.afterTime;
    query["Algorithm"] = request.algorithm;
    query["BeforeTime"] = request.beforeTime;
    query["CommonName"] = request.commonName;
    query["Days"] = request.days;
    query["Domain"] = request.domain;
    query["ParentIdentifier"] = request.parentIdentifier;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateServerCertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateServerCertificateResponse>(await this.callApi(params, req, runtime), new CreateServerCertificateResponse({}));
  }

  async createServerCertificate(request: CreateServerCertificateRequest): Promise<CreateServerCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServerCertificateWithOptions(request, runtime);
  }

  async createServerCertificateWithCsrWithOptions(request: CreateServerCertificateWithCsrRequest, runtime: $Util.RuntimeOptions): Promise<CreateServerCertificateWithCsrResponse> {
    Util.validateModel(request);
    let query = { };
    query["AfterTime"] = request.afterTime;
    query["BeforeTime"] = request.beforeTime;
    query["Csr"] = request.csr;
    query["Days"] = request.days;
    query["Domain"] = request.domain;
    query["ParentIdentifier"] = request.parentIdentifier;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateServerCertificateWithCsr",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateServerCertificateWithCsrResponse>(await this.callApi(params, req, runtime), new CreateServerCertificateWithCsrResponse({}));
  }

  async createServerCertificateWithCsr(request: CreateServerCertificateWithCsrRequest): Promise<CreateServerCertificateWithCsrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServerCertificateWithCsrWithOptions(request, runtime);
  }

  async createSubCACertificateWithOptions(request: CreateSubCACertificateRequest, runtime: $Util.RuntimeOptions): Promise<CreateSubCACertificateResponse> {
    Util.validateModel(request);
    let query = { };
    query["Algorithm"] = request.algorithm;
    query["CommonName"] = request.commonName;
    query["CountryCode"] = request.countryCode;
    query["Locality"] = request.locality;
    query["Organization"] = request.organization;
    query["OrganizationUnit"] = request.organizationUnit;
    query["ParentIdentifier"] = request.parentIdentifier;
    query["State"] = request.state;
    query["Years"] = request.years;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateSubCACertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateSubCACertificateResponse>(await this.callApi(params, req, runtime), new CreateSubCACertificateResponse({}));
  }

  async createSubCACertificate(request: CreateSubCACertificateRequest): Promise<CreateSubCACertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSubCACertificateWithOptions(request, runtime);
  }

  async deleteClientCertificateWithOptions(request: DeleteClientCertificateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteClientCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    query["Identifier"] = request.identifier;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DeleteClientCertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteClientCertificateResponse>(await this.callApi(params, req, runtime), new DeleteClientCertificateResponse({}));
  }

  async deleteClientCertificate(request: DeleteClientCertificateRequest): Promise<DeleteClientCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteClientCertificateWithOptions(request, runtime);
  }

  async describeCACertificateWithOptions(request: DescribeCACertificateRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCACertificateResponse> {
    Util.validateModel(request);
    let query = { };
    query["Identifier"] = request.identifier;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCACertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeCACertificateResponse>(await this.callApi(params, req, runtime), new DescribeCACertificateResponse({}));
  }

  async describeCACertificate(request: DescribeCACertificateRequest): Promise<DescribeCACertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCACertificateWithOptions(request, runtime);
  }

  async describeCACertificateCountWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeCACertificateCountResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeCACertificateCount",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeCACertificateCountResponse>(await this.callApi(params, req, runtime), new DescribeCACertificateCountResponse({}));
  }

  async describeCACertificateCount(): Promise<DescribeCACertificateCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCACertificateCountWithOptions(runtime);
  }

  async describeCACertificateListWithOptions(request: DescribeCACertificateListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCACertificateListResponse> {
    Util.validateModel(request);
    let query = { };
    query["CurrentPage"] = request.currentPage;
    query["ShowSize"] = request.showSize;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCACertificateList",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeCACertificateListResponse>(await this.callApi(params, req, runtime), new DescribeCACertificateListResponse({}));
  }

  async describeCACertificateList(request: DescribeCACertificateListRequest): Promise<DescribeCACertificateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCACertificateListWithOptions(request, runtime);
  }

  async describeCertificatePrivateKeyWithOptions(request: DescribeCertificatePrivateKeyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCertificatePrivateKeyResponse> {
    Util.validateModel(request);
    let query = { };
    query["EncryptedCode"] = request.encryptedCode;
    query["Identifier"] = request.identifier;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCertificatePrivateKey",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeCertificatePrivateKeyResponse>(await this.callApi(params, req, runtime), new DescribeCertificatePrivateKeyResponse({}));
  }

  async describeCertificatePrivateKey(request: DescribeCertificatePrivateKeyRequest): Promise<DescribeCertificatePrivateKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCertificatePrivateKeyWithOptions(request, runtime);
  }

  async describeClientCertificateWithOptions(request: DescribeClientCertificateRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClientCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    query["Identifier"] = request.identifier;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClientCertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeClientCertificateResponse>(await this.callApi(params, req, runtime), new DescribeClientCertificateResponse({}));
  }

  async describeClientCertificate(request: DescribeClientCertificateRequest): Promise<DescribeClientCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClientCertificateWithOptions(request, runtime);
  }

  async describeClientCertificateForSerialNumberWithOptions(request: DescribeClientCertificateForSerialNumberRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClientCertificateForSerialNumberResponse> {
    Util.validateModel(request);
    let query = { };
    query["SerialNumber"] = request.serialNumber;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClientCertificateForSerialNumber",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeClientCertificateForSerialNumberResponse>(await this.callApi(params, req, runtime), new DescribeClientCertificateForSerialNumberResponse({}));
  }

  async describeClientCertificateForSerialNumber(request: DescribeClientCertificateForSerialNumberRequest): Promise<DescribeClientCertificateForSerialNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClientCertificateForSerialNumberWithOptions(request, runtime);
  }

  async describeClientCertificateStatusWithOptions(request: DescribeClientCertificateStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClientCertificateStatusResponse> {
    Util.validateModel(request);
    let query = { };
    query["Identifier"] = request.identifier;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClientCertificateStatus",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeClientCertificateStatusResponse>(await this.callApi(params, req, runtime), new DescribeClientCertificateStatusResponse({}));
  }

  async describeClientCertificateStatus(request: DescribeClientCertificateStatusRequest): Promise<DescribeClientCertificateStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClientCertificateStatusWithOptions(request, runtime);
  }

  async describeClientCertificateStatusForSerialNumberWithOptions(request: DescribeClientCertificateStatusForSerialNumberRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClientCertificateStatusForSerialNumberResponse> {
    Util.validateModel(request);
    let query = { };
    query["SerialNumber"] = request.serialNumber;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClientCertificateStatusForSerialNumber",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeClientCertificateStatusForSerialNumberResponse>(await this.callApi(params, req, runtime), new DescribeClientCertificateStatusForSerialNumberResponse({}));
  }

  async describeClientCertificateStatusForSerialNumber(request: DescribeClientCertificateStatusForSerialNumberRequest): Promise<DescribeClientCertificateStatusForSerialNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClientCertificateStatusForSerialNumberWithOptions(request, runtime);
  }

  async getCAInstanceStatusWithOptions(request: GetCAInstanceStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetCAInstanceStatusResponse> {
    Util.validateModel(request);
    let query = { };
    query["InstanceId"] = request.instanceId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetCAInstanceStatus",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetCAInstanceStatusResponse>(await this.callApi(params, req, runtime), new GetCAInstanceStatusResponse({}));
  }

  async getCAInstanceStatus(request: GetCAInstanceStatusRequest): Promise<GetCAInstanceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCAInstanceStatusWithOptions(request, runtime);
  }

  async listCACertificateLogWithOptions(request: ListCACertificateLogRequest, runtime: $Util.RuntimeOptions): Promise<ListCACertificateLogResponse> {
    Util.validateModel(request);
    let query = { };
    query["Identifier"] = request.identifier;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ListCACertificateLog",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListCACertificateLogResponse>(await this.callApi(params, req, runtime), new ListCACertificateLogResponse({}));
  }

  async listCACertificateLog(request: ListCACertificateLogRequest): Promise<ListCACertificateLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCACertificateLogWithOptions(request, runtime);
  }

  async listClientCertificateWithOptions(request: ListClientCertificateRequest, runtime: $Util.RuntimeOptions): Promise<ListClientCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    query["CurrentPage"] = request.currentPage;
    query["ShowSize"] = request.showSize;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ListClientCertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListClientCertificateResponse>(await this.callApi(params, req, runtime), new ListClientCertificateResponse({}));
  }

  async listClientCertificate(request: ListClientCertificateRequest): Promise<ListClientCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClientCertificateWithOptions(request, runtime);
  }

  async listRevokeCertificateWithOptions(request: ListRevokeCertificateRequest, runtime: $Util.RuntimeOptions): Promise<ListRevokeCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    query["CurrentPage"] = request.currentPage;
    query["ShowSize"] = request.showSize;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ListRevokeCertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRevokeCertificateResponse>(await this.callApi(params, req, runtime), new ListRevokeCertificateResponse({}));
  }

  async listRevokeCertificate(request: ListRevokeCertificateRequest): Promise<ListRevokeCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRevokeCertificateWithOptions(request, runtime);
  }

  async updateCACertificateStatusWithOptions(request: UpdateCACertificateStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCACertificateStatusResponse> {
    Util.validateModel(request);
    let query = { };
    query["Identifier"] = request.identifier;
    query["Status"] = request.status;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCACertificateStatus",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateCACertificateStatusResponse>(await this.callApi(params, req, runtime), new UpdateCACertificateStatusResponse({}));
  }

  async updateCACertificateStatus(request: UpdateCACertificateStatusRequest): Promise<UpdateCACertificateStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCACertificateStatusWithOptions(request, runtime);
  }

}
