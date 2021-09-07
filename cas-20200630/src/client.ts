// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateClientCertificateRequest extends $tea.Model {
  sanType?: number;
  sanValue?: string;
  commonName?: string;
  algorithm?: string;
  days?: number;
  parentIdentifier?: string;
  beforeTime?: number;
  afterTime?: number;
  static names(): { [key: string]: string } {
    return {
      sanType: 'SanType',
      sanValue: 'SanValue',
      commonName: 'CommonName',
      algorithm: 'Algorithm',
      days: 'Days',
      parentIdentifier: 'ParentIdentifier',
      beforeTime: 'BeforeTime',
      afterTime: 'AfterTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sanType: 'number',
      sanValue: 'string',
      commonName: 'string',
      algorithm: 'string',
      days: 'number',
      parentIdentifier: 'string',
      beforeTime: 'number',
      afterTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientCertificateResponseBody extends $tea.Model {
  identifier?: string;
  rootX509Certificate?: string;
  parentX509Certificate?: string;
  requestId?: string;
  x509Certificate?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
      rootX509Certificate: 'RootX509Certificate',
      parentX509Certificate: 'ParentX509Certificate',
      requestId: 'RequestId',
      x509Certificate: 'X509Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
      rootX509Certificate: 'string',
      parentX509Certificate: 'string',
      requestId: 'string',
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
  csr?: string;
  sanType?: number;
  sanValue?: string;
  days?: number;
  parentIdentifier?: string;
  beforeTime?: number;
  afterTime?: number;
  static names(): { [key: string]: string } {
    return {
      csr: 'Csr',
      sanType: 'SanType',
      sanValue: 'SanValue',
      days: 'Days',
      parentIdentifier: 'ParentIdentifier',
      beforeTime: 'BeforeTime',
      afterTime: 'AfterTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csr: 'string',
      sanType: 'number',
      sanValue: 'string',
      days: 'number',
      parentIdentifier: 'string',
      beforeTime: 'number',
      afterTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientCertificateWithCsrResponseBody extends $tea.Model {
  identifier?: string;
  rootX509Certificate?: string;
  parentX509Certificate?: string;
  requestId?: string;
  x509Certificate?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
      rootX509Certificate: 'RootX509Certificate',
      parentX509Certificate: 'ParentX509Certificate',
      requestId: 'RequestId',
      x509Certificate: 'X509Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
      rootX509Certificate: 'string',
      parentX509Certificate: 'string',
      requestId: 'string',
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
  organization?: string;
  organizationUnit?: string;
  countryCode?: string;
  state?: string;
  locality?: string;
  commonName?: string;
  algorithm?: string;
  years?: number;
  static names(): { [key: string]: string } {
    return {
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      countryCode: 'CountryCode',
      state: 'State',
      locality: 'Locality',
      commonName: 'CommonName',
      algorithm: 'Algorithm',
      years: 'Years',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organization: 'string',
      organizationUnit: 'string',
      countryCode: 'string',
      state: 'string',
      locality: 'string',
      commonName: 'string',
      algorithm: 'string',
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
  domain?: string;
  commonName?: string;
  algorithm?: string;
  days?: number;
  parentIdentifier?: string;
  beforeTime?: number;
  afterTime?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      commonName: 'CommonName',
      algorithm: 'Algorithm',
      days: 'Days',
      parentIdentifier: 'ParentIdentifier',
      beforeTime: 'BeforeTime',
      afterTime: 'AfterTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      commonName: 'string',
      algorithm: 'string',
      days: 'number',
      parentIdentifier: 'string',
      beforeTime: 'number',
      afterTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerCertificateResponseBody extends $tea.Model {
  identifier?: string;
  rootX509Certificate?: string;
  parentX509Certificate?: string;
  requestId?: string;
  x509Certificate?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
      rootX509Certificate: 'RootX509Certificate',
      parentX509Certificate: 'ParentX509Certificate',
      requestId: 'RequestId',
      x509Certificate: 'X509Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
      rootX509Certificate: 'string',
      parentX509Certificate: 'string',
      requestId: 'string',
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
  csr?: string;
  domain?: string;
  days?: number;
  parentIdentifier?: string;
  beforeTime?: number;
  afterTime?: number;
  static names(): { [key: string]: string } {
    return {
      csr: 'Csr',
      domain: 'Domain',
      days: 'Days',
      parentIdentifier: 'ParentIdentifier',
      beforeTime: 'BeforeTime',
      afterTime: 'AfterTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csr: 'string',
      domain: 'string',
      days: 'number',
      parentIdentifier: 'string',
      beforeTime: 'number',
      afterTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerCertificateWithCsrResponseBody extends $tea.Model {
  identifier?: string;
  rootX509Certificate?: string;
  parentX509Certificate?: string;
  requestId?: string;
  x509Certificate?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
      rootX509Certificate: 'RootX509Certificate',
      parentX509Certificate: 'ParentX509Certificate',
      requestId: 'RequestId',
      x509Certificate: 'X509Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
      rootX509Certificate: 'string',
      parentX509Certificate: 'string',
      requestId: 'string',
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
  parentIdentifier?: string;
  organization?: string;
  organizationUnit?: string;
  countryCode?: string;
  state?: string;
  locality?: string;
  commonName?: string;
  algorithm?: string;
  years?: number;
  static names(): { [key: string]: string } {
    return {
      parentIdentifier: 'ParentIdentifier',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      countryCode: 'CountryCode',
      state: 'State',
      locality: 'Locality',
      commonName: 'CommonName',
      algorithm: 'Algorithm',
      years: 'Years',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentIdentifier: 'string',
      organization: 'string',
      organizationUnit: 'string',
      countryCode: 'string',
      state: 'string',
      locality: 'string',
      commonName: 'string',
      algorithm: 'string',
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
  requestId?: string;
  certificate?: DescribeCACertificateResponseBodyCertificate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      certificate: 'Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      certificate: DescribeCACertificateResponseBodyCertificate,
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
  totalCount?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
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
  currentPage?: number;
  requestId?: string;
  totalCount?: number;
  pageCount?: number;
  showSize?: number;
  certificateList?: DescribeCACertificateListResponseBodyCertificateList[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageCount: 'PageCount',
      showSize: 'ShowSize',
      certificateList: 'CertificateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      totalCount: 'number',
      pageCount: 'number',
      showSize: 'number',
      certificateList: { 'type': 'array', 'itemType': DescribeCACertificateListResponseBodyCertificateList },
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
  requestId?: string;
  certificate?: DescribeClientCertificateResponseBodyCertificate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      certificate: 'Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      certificate: DescribeClientCertificateResponseBodyCertificate,
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
  requestId?: string;
  certificateList?: DescribeClientCertificateForSerialNumberResponseBodyCertificateList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      certificateList: 'CertificateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      certificateList: { 'type': 'array', 'itemType': DescribeClientCertificateForSerialNumberResponseBodyCertificateList },
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
  requestId?: string;
  certificateStatus?: DescribeClientCertificateStatusResponseBodyCertificateStatus[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      certificateStatus: 'CertificateStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      certificateStatus: { 'type': 'array', 'itemType': DescribeClientCertificateStatusResponseBodyCertificateStatus },
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
  requestId?: string;
  certificateStatus?: DescribeClientCertificateStatusForSerialNumberResponseBodyCertificateStatus[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      certificateStatus: 'CertificateStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      certificateStatus: { 'type': 'array', 'itemType': DescribeClientCertificateStatusForSerialNumberResponseBodyCertificateStatus },
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
  requestId?: string;
  instanceStatusList?: GetCAInstanceStatusResponseBodyInstanceStatusList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceStatusList: 'InstanceStatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceStatusList: { 'type': 'array', 'itemType': GetCAInstanceStatusResponseBodyInstanceStatusList },
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
  requestId?: string;
  logList?: ListCACertificateLogResponseBodyLogList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      logList: 'LogList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      logList: { 'type': 'array', 'itemType': ListCACertificateLogResponseBodyLogList },
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
  currentPage?: number;
  requestId?: string;
  totalCount?: number;
  pageCount?: number;
  showSize?: number;
  certificateList?: ListClientCertificateResponseBodyCertificateList[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageCount: 'PageCount',
      showSize: 'ShowSize',
      certificateList: 'CertificateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      totalCount: 'number',
      pageCount: 'number',
      showSize: 'number',
      certificateList: { 'type': 'array', 'itemType': ListClientCertificateResponseBodyCertificateList },
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
  currentPage?: number;
  requestId?: string;
  totalCount?: number;
  pageCount?: number;
  showSize?: number;
  certificateList?: ListRevokeCertificateResponseBodyCertificateList[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageCount: 'PageCount',
      showSize: 'ShowSize',
      certificateList: 'CertificateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      totalCount: 'number',
      pageCount: 'number',
      showSize: 'number',
      certificateList: { 'type': 'array', 'itemType': ListRevokeCertificateResponseBodyCertificateList },
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
  years?: number;
  status?: string;
  serialNumber?: string;
  certificateType?: string;
  algorithm?: string;
  state?: string;
  organization?: string;
  parentIdentifier?: string;
  locality?: string;
  identifier?: string;
  sans?: string;
  keySize?: number;
  x509Certificate?: string;
  subjectDN?: string;
  signAlgorithm?: string;
  organizationUnit?: string;
  afterDate?: number;
  sha2?: string;
  commonName?: string;
  md5?: string;
  countryCode?: string;
  beforeDate?: number;
  static names(): { [key: string]: string } {
    return {
      years: 'Years',
      status: 'Status',
      serialNumber: 'SerialNumber',
      certificateType: 'CertificateType',
      algorithm: 'Algorithm',
      state: 'State',
      organization: 'Organization',
      parentIdentifier: 'ParentIdentifier',
      locality: 'Locality',
      identifier: 'Identifier',
      sans: 'Sans',
      keySize: 'KeySize',
      x509Certificate: 'X509Certificate',
      subjectDN: 'SubjectDN',
      signAlgorithm: 'SignAlgorithm',
      organizationUnit: 'OrganizationUnit',
      afterDate: 'AfterDate',
      sha2: 'Sha2',
      commonName: 'CommonName',
      md5: 'Md5',
      countryCode: 'CountryCode',
      beforeDate: 'BeforeDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      years: 'number',
      status: 'string',
      serialNumber: 'string',
      certificateType: 'string',
      algorithm: 'string',
      state: 'string',
      organization: 'string',
      parentIdentifier: 'string',
      locality: 'string',
      identifier: 'string',
      sans: 'string',
      keySize: 'number',
      x509Certificate: 'string',
      subjectDN: 'string',
      signAlgorithm: 'string',
      organizationUnit: 'string',
      afterDate: 'number',
      sha2: 'string',
      commonName: 'string',
      md5: 'string',
      countryCode: 'string',
      beforeDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCACertificateListResponseBodyCertificateList extends $tea.Model {
  years?: number;
  status?: string;
  serialNumber?: string;
  certificateType?: string;
  algorithm?: string;
  state?: string;
  organization?: string;
  parentIdentifier?: string;
  locality?: string;
  identifier?: string;
  sans?: string;
  keySize?: number;
  x509Certificate?: string;
  subjectDN?: string;
  signAlgorithm?: string;
  organizationUnit?: string;
  afterDate?: number;
  sha2?: string;
  commonName?: string;
  md5?: string;
  countryCode?: string;
  beforeDate?: number;
  static names(): { [key: string]: string } {
    return {
      years: 'Years',
      status: 'Status',
      serialNumber: 'SerialNumber',
      certificateType: 'CertificateType',
      algorithm: 'Algorithm',
      state: 'State',
      organization: 'Organization',
      parentIdentifier: 'ParentIdentifier',
      locality: 'Locality',
      identifier: 'Identifier',
      sans: 'Sans',
      keySize: 'KeySize',
      x509Certificate: 'X509Certificate',
      subjectDN: 'SubjectDN',
      signAlgorithm: 'SignAlgorithm',
      organizationUnit: 'OrganizationUnit',
      afterDate: 'AfterDate',
      sha2: 'Sha2',
      commonName: 'CommonName',
      md5: 'Md5',
      countryCode: 'CountryCode',
      beforeDate: 'BeforeDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      years: 'number',
      status: 'string',
      serialNumber: 'string',
      certificateType: 'string',
      algorithm: 'string',
      state: 'string',
      organization: 'string',
      parentIdentifier: 'string',
      locality: 'string',
      identifier: 'string',
      sans: 'string',
      keySize: 'number',
      x509Certificate: 'string',
      subjectDN: 'string',
      signAlgorithm: 'string',
      organizationUnit: 'string',
      afterDate: 'number',
      sha2: 'string',
      commonName: 'string',
      md5: 'string',
      countryCode: 'string',
      beforeDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientCertificateResponseBodyCertificate extends $tea.Model {
  status?: string;
  serialNumber?: string;
  certificateType?: string;
  algorithm?: string;
  state?: string;
  organization?: string;
  parentIdentifier?: string;
  locality?: string;
  identifier?: string;
  sans?: string;
  days?: number;
  keySize?: number;
  x509Certificate?: string;
  subjectDN?: string;
  signAlgorithm?: string;
  organizationUnit?: string;
  afterDate?: number;
  sha2?: string;
  commonName?: string;
  md5?: string;
  countryCode?: string;
  beforeDate?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      serialNumber: 'SerialNumber',
      certificateType: 'CertificateType',
      algorithm: 'Algorithm',
      state: 'State',
      organization: 'Organization',
      parentIdentifier: 'ParentIdentifier',
      locality: 'Locality',
      identifier: 'Identifier',
      sans: 'Sans',
      days: 'Days',
      keySize: 'KeySize',
      x509Certificate: 'X509Certificate',
      subjectDN: 'SubjectDN',
      signAlgorithm: 'SignAlgorithm',
      organizationUnit: 'OrganizationUnit',
      afterDate: 'AfterDate',
      sha2: 'Sha2',
      commonName: 'CommonName',
      md5: 'Md5',
      countryCode: 'CountryCode',
      beforeDate: 'BeforeDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      serialNumber: 'string',
      certificateType: 'string',
      algorithm: 'string',
      state: 'string',
      organization: 'string',
      parentIdentifier: 'string',
      locality: 'string',
      identifier: 'string',
      sans: 'string',
      days: 'number',
      keySize: 'number',
      x509Certificate: 'string',
      subjectDN: 'string',
      signAlgorithm: 'string',
      organizationUnit: 'string',
      afterDate: 'number',
      sha2: 'string',
      commonName: 'string',
      md5: 'string',
      countryCode: 'string',
      beforeDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientCertificateForSerialNumberResponseBodyCertificateList extends $tea.Model {
  years?: number;
  status?: string;
  serialNumber?: string;
  algorithm?: string;
  state?: string;
  organization?: string;
  locality?: string;
  identifier?: string;
  sans?: string;
  keySize?: number;
  x509Certificate?: string;
  subjectDN?: string;
  signAlgorithm?: string;
  organizationUnit?: string;
  afterDate?: string;
  sha2?: string;
  commonName?: string;
  md5?: string;
  countryCode?: string;
  beforeDate?: string;
  static names(): { [key: string]: string } {
    return {
      years: 'Years',
      status: 'Status',
      serialNumber: 'SerialNumber',
      algorithm: 'Algorithm',
      state: 'State',
      organization: 'Organization',
      locality: 'Locality',
      identifier: 'Identifier',
      sans: 'Sans',
      keySize: 'KeySize',
      x509Certificate: 'X509Certificate',
      subjectDN: 'SubjectDN',
      signAlgorithm: 'SignAlgorithm',
      organizationUnit: 'OrganizationUnit',
      afterDate: 'AfterDate',
      sha2: 'Sha2',
      commonName: 'CommonName',
      md5: 'Md5',
      countryCode: 'CountryCode',
      beforeDate: 'BeforeDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      years: 'number',
      status: 'string',
      serialNumber: 'string',
      algorithm: 'string',
      state: 'string',
      organization: 'string',
      locality: 'string',
      identifier: 'string',
      sans: 'string',
      keySize: 'number',
      x509Certificate: 'string',
      subjectDN: 'string',
      signAlgorithm: 'string',
      organizationUnit: 'string',
      afterDate: 'string',
      sha2: 'string',
      commonName: 'string',
      md5: 'string',
      countryCode: 'string',
      beforeDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientCertificateStatusResponseBodyCertificateStatus extends $tea.Model {
  serialNumber?: string;
  status?: string;
  revokeTime?: number;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
      status: 'Status',
      revokeTime: 'RevokeTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
      status: 'string',
      revokeTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientCertificateStatusForSerialNumberResponseBodyCertificateStatus extends $tea.Model {
  serialNumber?: string;
  status?: string;
  revokeTime?: number;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
      status: 'Status',
      revokeTime: 'RevokeTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
      status: 'string',
      revokeTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCAInstanceStatusResponseBodyInstanceStatusList extends $tea.Model {
  certTotalCount?: number;
  status?: string;
  type?: string;
  certIssuedCount?: number;
  beforeTime?: number;
  identifier?: string;
  afterTime?: number;
  instanceId?: string;
  useExpireTime?: number;
  static names(): { [key: string]: string } {
    return {
      certTotalCount: 'CertTotalCount',
      status: 'Status',
      type: 'Type',
      certIssuedCount: 'CertIssuedCount',
      beforeTime: 'BeforeTime',
      identifier: 'Identifier',
      afterTime: 'AfterTime',
      instanceId: 'InstanceId',
      useExpireTime: 'UseExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certTotalCount: 'number',
      status: 'string',
      type: 'string',
      certIssuedCount: 'number',
      beforeTime: 'number',
      identifier: 'string',
      afterTime: 'number',
      instanceId: 'string',
      useExpireTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCACertificateLogResponseBodyLogList extends $tea.Model {
  identifier?: string;
  content?: string;
  createTime?: number;
  opType?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
      content: 'Content',
      createTime: 'CreateTime',
      opType: 'OpType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
      content: 'string',
      createTime: 'number',
      opType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientCertificateResponseBodyCertificateList extends $tea.Model {
  status?: string;
  serialNumber?: string;
  certificateType?: string;
  algorithm?: string;
  state?: string;
  organization?: string;
  parentIdentifier?: string;
  locality?: string;
  identifier?: string;
  sans?: string;
  days?: number;
  keySize?: number;
  x509Certificate?: string;
  subjectDN?: string;
  signAlgorithm?: string;
  organizationUnit?: string;
  afterDate?: number;
  sha2?: string;
  commonName?: string;
  md5?: string;
  countryCode?: string;
  beforeDate?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      serialNumber: 'SerialNumber',
      certificateType: 'CertificateType',
      algorithm: 'Algorithm',
      state: 'State',
      organization: 'Organization',
      parentIdentifier: 'ParentIdentifier',
      locality: 'Locality',
      identifier: 'Identifier',
      sans: 'Sans',
      days: 'Days',
      keySize: 'KeySize',
      x509Certificate: 'X509Certificate',
      subjectDN: 'SubjectDN',
      signAlgorithm: 'SignAlgorithm',
      organizationUnit: 'OrganizationUnit',
      afterDate: 'AfterDate',
      sha2: 'Sha2',
      commonName: 'CommonName',
      md5: 'Md5',
      countryCode: 'CountryCode',
      beforeDate: 'BeforeDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      serialNumber: 'string',
      certificateType: 'string',
      algorithm: 'string',
      state: 'string',
      organization: 'string',
      parentIdentifier: 'string',
      locality: 'string',
      identifier: 'string',
      sans: 'string',
      days: 'number',
      keySize: 'number',
      x509Certificate: 'string',
      subjectDN: 'string',
      signAlgorithm: 'string',
      organizationUnit: 'string',
      afterDate: 'number',
      sha2: 'string',
      commonName: 'string',
      md5: 'string',
      countryCode: 'string',
      beforeDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRevokeCertificateResponseBodyCertificateList extends $tea.Model {
  serialNumber?: string;
  algorithm?: string;
  state?: string;
  organization?: string;
  locality?: string;
  revokeDate?: string;
  identifier?: string;
  sans?: string;
  keySize?: number;
  subjectDN?: string;
  signAlgorithm?: string;
  organizationUnit?: string;
  afterDate?: string;
  sha2?: string;
  commonName?: string;
  md5?: string;
  countryCode?: string;
  beforeDate?: string;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
      algorithm: 'Algorithm',
      state: 'State',
      organization: 'Organization',
      locality: 'Locality',
      revokeDate: 'RevokeDate',
      identifier: 'Identifier',
      sans: 'Sans',
      keySize: 'KeySize',
      subjectDN: 'SubjectDN',
      signAlgorithm: 'SignAlgorithm',
      organizationUnit: 'OrganizationUnit',
      afterDate: 'AfterDate',
      sha2: 'Sha2',
      commonName: 'CommonName',
      md5: 'Md5',
      countryCode: 'CountryCode',
      beforeDate: 'BeforeDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
      algorithm: 'string',
      state: 'string',
      organization: 'string',
      locality: 'string',
      revokeDate: 'string',
      identifier: 'string',
      sans: 'string',
      keySize: 'number',
      subjectDN: 'string',
      signAlgorithm: 'string',
      organizationUnit: 'string',
      afterDate: 'string',
      sha2: 'string',
      commonName: 'string',
      md5: 'string',
      countryCode: 'string',
      beforeDate: 'string',
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

  async createClientCertificateWithOptions(request: CreateClientCertificateRequest, runtime: $Util.RuntimeOptions): Promise<CreateClientCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateClientCertificateResponse>(await this.doRPCRequest("CreateClientCertificate", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateClientCertificateResponse({}));
  }

  async createClientCertificate(request: CreateClientCertificateRequest): Promise<CreateClientCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClientCertificateWithOptions(request, runtime);
  }

  async createClientCertificateWithCsrWithOptions(request: CreateClientCertificateWithCsrRequest, runtime: $Util.RuntimeOptions): Promise<CreateClientCertificateWithCsrResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateClientCertificateWithCsrResponse>(await this.doRPCRequest("CreateClientCertificateWithCsr", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateClientCertificateWithCsrResponse({}));
  }

  async createClientCertificateWithCsr(request: CreateClientCertificateWithCsrRequest): Promise<CreateClientCertificateWithCsrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClientCertificateWithCsrWithOptions(request, runtime);
  }

  async createRevokeClientCertificateWithOptions(request: CreateRevokeClientCertificateRequest, runtime: $Util.RuntimeOptions): Promise<CreateRevokeClientCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRevokeClientCertificateResponse>(await this.doRPCRequest("CreateRevokeClientCertificate", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRevokeClientCertificateResponse({}));
  }

  async createRevokeClientCertificate(request: CreateRevokeClientCertificateRequest): Promise<CreateRevokeClientCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRevokeClientCertificateWithOptions(request, runtime);
  }

  async createRootCACertificateWithOptions(request: CreateRootCACertificateRequest, runtime: $Util.RuntimeOptions): Promise<CreateRootCACertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRootCACertificateResponse>(await this.doRPCRequest("CreateRootCACertificate", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRootCACertificateResponse({}));
  }

  async createRootCACertificate(request: CreateRootCACertificateRequest): Promise<CreateRootCACertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRootCACertificateWithOptions(request, runtime);
  }

  async createServerCertificateWithOptions(request: CreateServerCertificateRequest, runtime: $Util.RuntimeOptions): Promise<CreateServerCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateServerCertificateResponse>(await this.doRPCRequest("CreateServerCertificate", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateServerCertificateResponse({}));
  }

  async createServerCertificate(request: CreateServerCertificateRequest): Promise<CreateServerCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServerCertificateWithOptions(request, runtime);
  }

  async createServerCertificateWithCsrWithOptions(request: CreateServerCertificateWithCsrRequest, runtime: $Util.RuntimeOptions): Promise<CreateServerCertificateWithCsrResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateServerCertificateWithCsrResponse>(await this.doRPCRequest("CreateServerCertificateWithCsr", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateServerCertificateWithCsrResponse({}));
  }

  async createServerCertificateWithCsr(request: CreateServerCertificateWithCsrRequest): Promise<CreateServerCertificateWithCsrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServerCertificateWithCsrWithOptions(request, runtime);
  }

  async createSubCACertificateWithOptions(request: CreateSubCACertificateRequest, runtime: $Util.RuntimeOptions): Promise<CreateSubCACertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSubCACertificateResponse>(await this.doRPCRequest("CreateSubCACertificate", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSubCACertificateResponse({}));
  }

  async createSubCACertificate(request: CreateSubCACertificateRequest): Promise<CreateSubCACertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSubCACertificateWithOptions(request, runtime);
  }

  async deleteClientCertificateWithOptions(request: DeleteClientCertificateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteClientCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteClientCertificateResponse>(await this.doRPCRequest("DeleteClientCertificate", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteClientCertificateResponse({}));
  }

  async deleteClientCertificate(request: DeleteClientCertificateRequest): Promise<DeleteClientCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteClientCertificateWithOptions(request, runtime);
  }

  async describeCACertificateWithOptions(request: DescribeCACertificateRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCACertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCACertificateResponse>(await this.doRPCRequest("DescribeCACertificate", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCACertificateResponse({}));
  }

  async describeCACertificate(request: DescribeCACertificateRequest): Promise<DescribeCACertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCACertificateWithOptions(request, runtime);
  }

  async describeCACertificateCountWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeCACertificateCountResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeCACertificateCountResponse>(await this.doRPCRequest("DescribeCACertificateCount", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCACertificateCountResponse({}));
  }

  async describeCACertificateCount(): Promise<DescribeCACertificateCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCACertificateCountWithOptions(runtime);
  }

  async describeCACertificateListWithOptions(request: DescribeCACertificateListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCACertificateListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCACertificateListResponse>(await this.doRPCRequest("DescribeCACertificateList", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCACertificateListResponse({}));
  }

  async describeCACertificateList(request: DescribeCACertificateListRequest): Promise<DescribeCACertificateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCACertificateListWithOptions(request, runtime);
  }

  async describeClientCertificateWithOptions(request: DescribeClientCertificateRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClientCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeClientCertificateResponse>(await this.doRPCRequest("DescribeClientCertificate", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeClientCertificateResponse({}));
  }

  async describeClientCertificate(request: DescribeClientCertificateRequest): Promise<DescribeClientCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClientCertificateWithOptions(request, runtime);
  }

  async describeClientCertificateForSerialNumberWithOptions(request: DescribeClientCertificateForSerialNumberRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClientCertificateForSerialNumberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeClientCertificateForSerialNumberResponse>(await this.doRPCRequest("DescribeClientCertificateForSerialNumber", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeClientCertificateForSerialNumberResponse({}));
  }

  async describeClientCertificateForSerialNumber(request: DescribeClientCertificateForSerialNumberRequest): Promise<DescribeClientCertificateForSerialNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClientCertificateForSerialNumberWithOptions(request, runtime);
  }

  async describeClientCertificateStatusWithOptions(request: DescribeClientCertificateStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClientCertificateStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeClientCertificateStatusResponse>(await this.doRPCRequest("DescribeClientCertificateStatus", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeClientCertificateStatusResponse({}));
  }

  async describeClientCertificateStatus(request: DescribeClientCertificateStatusRequest): Promise<DescribeClientCertificateStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClientCertificateStatusWithOptions(request, runtime);
  }

  async describeClientCertificateStatusForSerialNumberWithOptions(request: DescribeClientCertificateStatusForSerialNumberRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClientCertificateStatusForSerialNumberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeClientCertificateStatusForSerialNumberResponse>(await this.doRPCRequest("DescribeClientCertificateStatusForSerialNumber", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeClientCertificateStatusForSerialNumberResponse({}));
  }

  async describeClientCertificateStatusForSerialNumber(request: DescribeClientCertificateStatusForSerialNumberRequest): Promise<DescribeClientCertificateStatusForSerialNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClientCertificateStatusForSerialNumberWithOptions(request, runtime);
  }

  async getCAInstanceStatusWithOptions(request: GetCAInstanceStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetCAInstanceStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetCAInstanceStatusResponse>(await this.doRPCRequest("GetCAInstanceStatus", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetCAInstanceStatusResponse({}));
  }

  async getCAInstanceStatus(request: GetCAInstanceStatusRequest): Promise<GetCAInstanceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCAInstanceStatusWithOptions(request, runtime);
  }

  async listCACertificateLogWithOptions(request: ListCACertificateLogRequest, runtime: $Util.RuntimeOptions): Promise<ListCACertificateLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListCACertificateLogResponse>(await this.doRPCRequest("ListCACertificateLog", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListCACertificateLogResponse({}));
  }

  async listCACertificateLog(request: ListCACertificateLogRequest): Promise<ListCACertificateLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCACertificateLogWithOptions(request, runtime);
  }

  async listClientCertificateWithOptions(request: ListClientCertificateRequest, runtime: $Util.RuntimeOptions): Promise<ListClientCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClientCertificateResponse>(await this.doRPCRequest("ListClientCertificate", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListClientCertificateResponse({}));
  }

  async listClientCertificate(request: ListClientCertificateRequest): Promise<ListClientCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClientCertificateWithOptions(request, runtime);
  }

  async listRevokeCertificateWithOptions(request: ListRevokeCertificateRequest, runtime: $Util.RuntimeOptions): Promise<ListRevokeCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRevokeCertificateResponse>(await this.doRPCRequest("ListRevokeCertificate", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListRevokeCertificateResponse({}));
  }

  async listRevokeCertificate(request: ListRevokeCertificateRequest): Promise<ListRevokeCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRevokeCertificateWithOptions(request, runtime);
  }

  async updateCACertificateStatusWithOptions(request: UpdateCACertificateStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCACertificateStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateCACertificateStatusResponse>(await this.doRPCRequest("UpdateCACertificateStatus", "2020-06-30", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateCACertificateStatusResponse({}));
  }

  async updateCACertificateStatus(request: UpdateCACertificateStatusRequest): Promise<UpdateCACertificateStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCACertificateStatusWithOptions(request, runtime);
  }

}
