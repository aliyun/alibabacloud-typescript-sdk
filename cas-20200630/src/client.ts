// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateClientCertificateRequest extends $tea.Model {
  afterTime?: number;
  algorithm?: string;
  beforeTime?: number;
  commonName?: string;
  country?: string;
  days?: number;
  enableCrl?: number;
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
      days: 'Days',
      enableCrl: 'EnableCrl',
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
      days: 'number',
      enableCrl: 'number',
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

export class CreateClientCertificateResponseBody extends $tea.Model {
  certificateChain?: string;
  identifier?: string;
  requestId?: string;
  serialNumber?: string;
  x509Certificate?: string;
  static names(): { [key: string]: string } {
    return {
      certificateChain: 'CertificateChain',
      identifier: 'Identifier',
      requestId: 'RequestId',
      serialNumber: 'SerialNumber',
      x509Certificate: 'X509Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateChain: 'string',
      identifier: 'string',
      requestId: 'string',
      serialNumber: 'string',
      x509Certificate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateClientCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateClientCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientCertificateWithCsrRequest extends $tea.Model {
  afterTime?: number;
  algorithm?: string;
  beforeTime?: number;
  commonName?: string;
  country?: string;
  csr?: string;
  days?: number;
  enableCrl?: number;
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
      enableCrl: 'EnableCrl',
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
      enableCrl: 'number',
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

export class CreateClientCertificateWithCsrResponseBody extends $tea.Model {
  certificateChain?: string;
  identifier?: string;
  requestId?: string;
  serialNumber?: string;
  x509Certificate?: string;
  static names(): { [key: string]: string } {
    return {
      certificateChain: 'CertificateChain',
      identifier: 'Identifier',
      requestId: 'RequestId',
      serialNumber: 'SerialNumber',
      x509Certificate: 'X509Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateChain: 'string',
      identifier: 'string',
      requestId: 'string',
      serialNumber: 'string',
      x509Certificate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientCertificateWithCsrResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateClientCertificateWithCsrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateClientCertificateWithCsrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomCertificateRequest extends $tea.Model {
  apiPassthrough?: CreateCustomCertificateRequestApiPassthrough;
  csr?: string;
  enableCrl?: number;
  immediately?: number;
  parentIdentifier?: string;
  validity?: string;
  static names(): { [key: string]: string } {
    return {
      apiPassthrough: 'ApiPassthrough',
      csr: 'Csr',
      enableCrl: 'EnableCrl',
      immediately: 'Immediately',
      parentIdentifier: 'ParentIdentifier',
      validity: 'Validity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiPassthrough: CreateCustomCertificateRequestApiPassthrough,
      csr: 'string',
      enableCrl: 'number',
      immediately: 'number',
      parentIdentifier: 'string',
      validity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomCertificateResponseBody extends $tea.Model {
  certificate?: string;
  certificateChain?: string;
  identifier?: string;
  requestId?: string;
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      certificateChain: 'CertificateChain',
      identifier: 'Identifier',
      requestId: 'RequestId',
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: 'string',
      certificateChain: 'string',
      identifier: 'string',
      requestId: 'string',
      serialNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateCustomCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCustomCertificateResponseBody,
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
  statusCode: number;
  body: CreateRevokeClientCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  certificate?: string;
  certificateChain?: string;
  identifier?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      certificateChain: 'CertificateChain',
      identifier: 'Identifier',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: 'string',
      certificateChain: 'string',
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
  statusCode: number;
  body: CreateRootCACertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  country?: string;
  days?: number;
  domain?: string;
  enableCrl?: number;
  immediately?: number;
  locality?: string;
  months?: number;
  organization?: string;
  organizationUnit?: string;
  parentIdentifier?: string;
  state?: string;
  years?: number;
  static names(): { [key: string]: string } {
    return {
      afterTime: 'AfterTime',
      algorithm: 'Algorithm',
      beforeTime: 'BeforeTime',
      commonName: 'CommonName',
      country: 'Country',
      days: 'Days',
      domain: 'Domain',
      enableCrl: 'EnableCrl',
      immediately: 'Immediately',
      locality: 'Locality',
      months: 'Months',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      parentIdentifier: 'ParentIdentifier',
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
      days: 'number',
      domain: 'string',
      enableCrl: 'number',
      immediately: 'number',
      locality: 'string',
      months: 'number',
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

export class CreateServerCertificateResponseBody extends $tea.Model {
  certificateChain?: string;
  identifier?: string;
  requestId?: string;
  serialNumber?: string;
  x509Certificate?: string;
  static names(): { [key: string]: string } {
    return {
      certificateChain: 'CertificateChain',
      identifier: 'Identifier',
      requestId: 'RequestId',
      serialNumber: 'SerialNumber',
      x509Certificate: 'X509Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateChain: 'string',
      identifier: 'string',
      requestId: 'string',
      serialNumber: 'string',
      x509Certificate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateServerCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateServerCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerCertificateWithCsrRequest extends $tea.Model {
  afterTime?: number;
  algorithm?: string;
  beforeTime?: number;
  commonName?: string;
  country?: string;
  csr?: string;
  days?: number;
  domain?: string;
  enableCrl?: number;
  immediately?: number;
  locality?: string;
  months?: number;
  organization?: string;
  organizationUnit?: string;
  parentIdentifier?: string;
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
      domain: 'Domain',
      enableCrl: 'EnableCrl',
      immediately: 'Immediately',
      locality: 'Locality',
      months: 'Months',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      parentIdentifier: 'ParentIdentifier',
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
      domain: 'string',
      enableCrl: 'number',
      immediately: 'number',
      locality: 'string',
      months: 'number',
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

export class CreateServerCertificateWithCsrResponseBody extends $tea.Model {
  certificateChain?: string;
  identifier?: string;
  requestId?: string;
  serialNumber?: string;
  x509Certificate?: string;
  static names(): { [key: string]: string } {
    return {
      certificateChain: 'CertificateChain',
      identifier: 'Identifier',
      requestId: 'RequestId',
      serialNumber: 'SerialNumber',
      x509Certificate: 'X509Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateChain: 'string',
      identifier: 'string',
      requestId: 'string',
      serialNumber: 'string',
      x509Certificate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerCertificateWithCsrResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateServerCertificateWithCsrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  crlDay?: number;
  enableCrl?: boolean;
  extendedKeyUsages?: string[];
  locality?: string;
  organization?: string;
  organizationUnit?: string;
  parentIdentifier?: string;
  pathLenConstraint?: number;
  state?: string;
  years?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      commonName: 'CommonName',
      countryCode: 'CountryCode',
      crlDay: 'CrlDay',
      enableCrl: 'EnableCrl',
      extendedKeyUsages: 'ExtendedKeyUsages',
      locality: 'Locality',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      parentIdentifier: 'ParentIdentifier',
      pathLenConstraint: 'PathLenConstraint',
      state: 'State',
      years: 'Years',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      commonName: 'string',
      countryCode: 'string',
      crlDay: 'number',
      enableCrl: 'boolean',
      extendedKeyUsages: { 'type': 'array', 'itemType': 'string' },
      locality: 'string',
      organization: 'string',
      organizationUnit: 'string',
      parentIdentifier: 'string',
      pathLenConstraint: 'number',
      state: 'string',
      years: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubCACertificateResponseBody extends $tea.Model {
  certificate?: string;
  certificateChain?: string;
  identifier?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      certificateChain: 'CertificateChain',
      identifier: 'Identifier',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: 'string',
      certificateChain: 'string',
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
  statusCode: number;
  body: CreateSubCACertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: DeleteClientCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  years?: number;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      requestId: 'RequestId',
      years: 'Years',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: DescribeCACertificateResponseBodyCertificate,
      requestId: 'string',
      years: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCACertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCACertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: DescribeCACertificateCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCACertificateCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCACertificateListRequest extends $tea.Model {
  currentPage?: number;
  identifier?: string;
  showSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      identifier: 'Identifier',
      showSize: 'ShowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      identifier: 'string',
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
  statusCode: number;
  body: DescribeCACertificateListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: DescribeCertificatePrivateKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: DescribeClientCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClientCertificateResponseBody,
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
  statusCode: number;
  body: DescribeClientCertificateStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClientCertificateStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCAInstanceStatusRequest extends $tea.Model {
  identifier?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
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
  statusCode: number;
  body: GetCAInstanceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCAInstanceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientCertificateRequest extends $tea.Model {
  currentPage?: number;
  identifier?: string;
  showSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      identifier: 'Identifier',
      showSize: 'ShowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      identifier: 'string',
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
  statusCode: number;
  body: ListClientCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: ListRevokeCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: UpdateCACertificateStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCACertificateStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomCertificateRequestApiPassthroughExtensionsKeyUsage extends $tea.Model {
  contentCommitment?: boolean;
  dataEncipherment?: boolean;
  decipherOnly?: boolean;
  digitalSignature?: boolean;
  encipherOnly?: boolean;
  keyAgreement?: boolean;
  keyEncipherment?: boolean;
  nonRepudiation?: boolean;
  static names(): { [key: string]: string } {
    return {
      contentCommitment: 'ContentCommitment',
      dataEncipherment: 'DataEncipherment',
      decipherOnly: 'DecipherOnly',
      digitalSignature: 'DigitalSignature',
      encipherOnly: 'EncipherOnly',
      keyAgreement: 'KeyAgreement',
      keyEncipherment: 'KeyEncipherment',
      nonRepudiation: 'NonRepudiation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentCommitment: 'boolean',
      dataEncipherment: 'boolean',
      decipherOnly: 'boolean',
      digitalSignature: 'boolean',
      encipherOnly: 'boolean',
      keyAgreement: 'boolean',
      keyEncipherment: 'boolean',
      nonRepudiation: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomCertificateRequestApiPassthroughExtensionsSubjectAlternativeNames extends $tea.Model {
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomCertificateRequestApiPassthroughExtensions extends $tea.Model {
  criticals?: string[];
  extendedKeyUsages?: string[];
  keyUsage?: CreateCustomCertificateRequestApiPassthroughExtensionsKeyUsage;
  subjectAlternativeNames?: CreateCustomCertificateRequestApiPassthroughExtensionsSubjectAlternativeNames[];
  static names(): { [key: string]: string } {
    return {
      criticals: 'Criticals',
      extendedKeyUsages: 'ExtendedKeyUsages',
      keyUsage: 'KeyUsage',
      subjectAlternativeNames: 'SubjectAlternativeNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criticals: { 'type': 'array', 'itemType': 'string' },
      extendedKeyUsages: { 'type': 'array', 'itemType': 'string' },
      keyUsage: CreateCustomCertificateRequestApiPassthroughExtensionsKeyUsage,
      subjectAlternativeNames: { 'type': 'array', 'itemType': CreateCustomCertificateRequestApiPassthroughExtensionsSubjectAlternativeNames },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomCertificateRequestApiPassthroughSubjectCustomAttributes extends $tea.Model {
  objectIdentifier?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      objectIdentifier: 'ObjectIdentifier',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectIdentifier: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomCertificateRequestApiPassthroughSubject extends $tea.Model {
  commonName?: string;
  country?: string;
  customAttributes?: CreateCustomCertificateRequestApiPassthroughSubjectCustomAttributes[];
  locality?: string;
  organization?: string;
  organizationUnit?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      commonName: 'CommonName',
      country: 'Country',
      customAttributes: 'CustomAttributes',
      locality: 'Locality',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonName: 'string',
      country: 'string',
      customAttributes: { 'type': 'array', 'itemType': CreateCustomCertificateRequestApiPassthroughSubjectCustomAttributes },
      locality: 'string',
      organization: 'string',
      organizationUnit: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomCertificateRequestApiPassthrough extends $tea.Model {
  extensions?: CreateCustomCertificateRequestApiPassthroughExtensions;
  serialNumber?: string;
  subject?: CreateCustomCertificateRequestApiPassthroughSubject;
  static names(): { [key: string]: string } {
    return {
      extensions: 'Extensions',
      serialNumber: 'SerialNumber',
      subject: 'Subject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extensions: CreateCustomCertificateRequestApiPassthroughExtensions,
      serialNumber: 'string',
      subject: CreateCustomCertificateRequestApiPassthroughSubject,
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
  certIssuedCount?: number;
  certRemainingCount?: number;
  certTotalCount?: number;
  certificateType?: string;
  commonName?: string;
  countryCode?: string;
  crlStatus?: string;
  crlUrl?: string;
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
      certIssuedCount: 'CertIssuedCount',
      certRemainingCount: 'CertRemainingCount',
      certTotalCount: 'CertTotalCount',
      certificateType: 'CertificateType',
      commonName: 'CommonName',
      countryCode: 'CountryCode',
      crlStatus: 'CrlStatus',
      crlUrl: 'CrlUrl',
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
      certIssuedCount: 'number',
      certRemainingCount: 'number',
      certTotalCount: 'number',
      certificateType: 'string',
      commonName: 'string',
      countryCode: 'string',
      crlStatus: 'string',
      crlUrl: 'string',
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
  revokeDate?: string;
  sans?: string;
  serialNumber?: string;
  sha2?: string;
  signAlgorithm?: string;
  state?: string;
  status?: string;
  subjectDN?: string;
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
      revokeDate: 'RevokeDate',
      sans: 'Sans',
      serialNumber: 'SerialNumber',
      sha2: 'Sha2',
      signAlgorithm: 'SignAlgorithm',
      state: 'State',
      status: 'Status',
      subjectDN: 'SubjectDN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDate: 'string',
      algorithm: 'string',
      beforeDate: 'string',
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
      revokeDate: 'string',
      sans: 'string',
      serialNumber: 'string',
      sha2: 'string',
      signAlgorithm: 'string',
      state: 'string',
      status: 'string',
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
    * Before you call this operation, make sure that you have created a root certificate authority (CA) certificate by calling the [CreateRootCACertificate](~~328093~~) operation and an intermediate CA certificate by calling the [CreateSubCACertificate](~~328094~~) operation. Only intermediate CA certificates can be used to issue client certificates.
    * ## Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request CreateClientCertificateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateClientCertificateResponse
   */
  async createClientCertificateWithOptions(request: CreateClientCertificateRequest, runtime: $Util.RuntimeOptions): Promise<CreateClientCertificateResponse> {
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

    if (!Util.isUnset(request.days)) {
      query["Days"] = request.days;
    }

    if (!Util.isUnset(request.enableCrl)) {
      query["EnableCrl"] = request.enableCrl;
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
      action: "CreateClientCertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateClientCertificateResponse>(await this.callApi(params, req, runtime), new CreateClientCertificateResponse({}));
  }

  /**
    * Before you call this operation, make sure that you have created a root certificate authority (CA) certificate by calling the [CreateRootCACertificate](~~328093~~) operation and an intermediate CA certificate by calling the [CreateSubCACertificate](~~328094~~) operation. Only intermediate CA certificates can be used to issue client certificates.
    * ## Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request CreateClientCertificateRequest
    * @return CreateClientCertificateResponse
   */
  async createClientCertificate(request: CreateClientCertificateRequest): Promise<CreateClientCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClientCertificateWithOptions(request, runtime);
  }

  /**
    * The content of the CSR file. You can generate a CSR file by using the OpenSSL tool or Keytool. For more information, see [How do I create a CSR file?](~~42218~~) You can also create a CSR file in the Certificate Management Service console. For more information, see [Create a CSR](~~313297~~).
    *
    * @param request CreateClientCertificateWithCsrRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateClientCertificateWithCsrResponse
   */
  async createClientCertificateWithCsrWithOptions(request: CreateClientCertificateWithCsrRequest, runtime: $Util.RuntimeOptions): Promise<CreateClientCertificateWithCsrResponse> {
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

    if (!Util.isUnset(request.enableCrl)) {
      query["EnableCrl"] = request.enableCrl;
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
      action: "CreateClientCertificateWithCsr",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateClientCertificateWithCsrResponse>(await this.callApi(params, req, runtime), new CreateClientCertificateWithCsrResponse({}));
  }

  /**
    * The content of the CSR file. You can generate a CSR file by using the OpenSSL tool or Keytool. For more information, see [How do I create a CSR file?](~~42218~~) You can also create a CSR file in the Certificate Management Service console. For more information, see [Create a CSR](~~313297~~).
    *
    * @param request CreateClientCertificateWithCsrRequest
    * @return CreateClientCertificateWithCsrResponse
   */
  async createClientCertificateWithCsr(request: CreateClientCertificateWithCsrRequest): Promise<CreateClientCertificateWithCsrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClientCertificateWithCsrWithOptions(request, runtime);
  }

  /**
    * By default, the name of the entity is obtained from the certificate signing request (CSR) of the certificate that you want to issue. If you specify a different name for the entity, the name of the entity in the CSR becomes invalid. The specified name is used to issue the certificate.
    * You must specify the key usage and extended key usage based on the certificate type. The following list describes common certificate types:
    * *   Server certificate
    * Key usage: digitalSignature or keyEncipherment
    * Extended key usage: serverAuth
    * *   Client certificate
    * Key usage: digitalSignature or keyEncipherment
    * Extended key usage: clientAuth
    * *   Mutual Transport Layer Security (TLS) authentication certificate
    * Key usage: digitalSignature or keyEncipherment
    * Extended key usage: serverAuth or clientAuth
    * *   Email certificate
    * Key usage: digitalSignature or contentCommitment
    * Extended key usage: emailProtection
    * Note: Compliant certificate authorities (CAs) are managed by third-party authorities. This operation is not supported for compliant CAs.
    *
    * @param request CreateCustomCertificateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateCustomCertificateResponse
   */
  async createCustomCertificateWithOptions(request: CreateCustomCertificateRequest, runtime: $Util.RuntimeOptions): Promise<CreateCustomCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiPassthrough)) {
      query["ApiPassthrough"] = request.apiPassthrough;
    }

    if (!Util.isUnset(request.csr)) {
      query["Csr"] = request.csr;
    }

    if (!Util.isUnset(request.enableCrl)) {
      query["EnableCrl"] = request.enableCrl;
    }

    if (!Util.isUnset(request.immediately)) {
      query["Immediately"] = request.immediately;
    }

    if (!Util.isUnset(request.parentIdentifier)) {
      query["ParentIdentifier"] = request.parentIdentifier;
    }

    if (!Util.isUnset(request.validity)) {
      query["Validity"] = request.validity;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCustomCertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCustomCertificateResponse>(await this.callApi(params, req, runtime), new CreateCustomCertificateResponse({}));
  }

  /**
    * By default, the name of the entity is obtained from the certificate signing request (CSR) of the certificate that you want to issue. If you specify a different name for the entity, the name of the entity in the CSR becomes invalid. The specified name is used to issue the certificate.
    * You must specify the key usage and extended key usage based on the certificate type. The following list describes common certificate types:
    * *   Server certificate
    * Key usage: digitalSignature or keyEncipherment
    * Extended key usage: serverAuth
    * *   Client certificate
    * Key usage: digitalSignature or keyEncipherment
    * Extended key usage: clientAuth
    * *   Mutual Transport Layer Security (TLS) authentication certificate
    * Key usage: digitalSignature or keyEncipherment
    * Extended key usage: serverAuth or clientAuth
    * *   Email certificate
    * Key usage: digitalSignature or contentCommitment
    * Extended key usage: emailProtection
    * Note: Compliant certificate authorities (CAs) are managed by third-party authorities. This operation is not supported for compliant CAs.
    *
    * @param request CreateCustomCertificateRequest
    * @return CreateCustomCertificateResponse
   */
  async createCustomCertificate(request: CreateCustomCertificateRequest): Promise<CreateCustomCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCustomCertificateWithOptions(request, runtime);
  }

  async createRevokeClientCertificateWithOptions(request: CreateRevokeClientCertificateRequest, runtime: $Util.RuntimeOptions): Promise<CreateRevokeClientCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRevokeClientCertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRevokeClientCertificateResponse>(await this.callApi(params, req, runtime), new CreateRevokeClientCertificateResponse({}));
  }

  async createRevokeClientCertificate(request: CreateRevokeClientCertificateRequest): Promise<CreateRevokeClientCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRevokeClientCertificateWithOptions(request, runtime);
  }

  /**
    * The root CA certificate in the PEM format.
    *
    * @param request CreateRootCACertificateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateRootCACertificateResponse
   */
  async createRootCACertificateWithOptions(request: CreateRootCACertificateRequest, runtime: $Util.RuntimeOptions): Promise<CreateRootCACertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.commonName)) {
      query["CommonName"] = request.commonName;
    }

    if (!Util.isUnset(request.countryCode)) {
      query["CountryCode"] = request.countryCode;
    }

    if (!Util.isUnset(request.locality)) {
      query["Locality"] = request.locality;
    }

    if (!Util.isUnset(request.organization)) {
      query["Organization"] = request.organization;
    }

    if (!Util.isUnset(request.organizationUnit)) {
      query["OrganizationUnit"] = request.organizationUnit;
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
      action: "CreateRootCACertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRootCACertificateResponse>(await this.callApi(params, req, runtime), new CreateRootCACertificateResponse({}));
  }

  /**
    * The root CA certificate in the PEM format.
    *
    * @param request CreateRootCACertificateRequest
    * @return CreateRootCACertificateResponse
   */
  async createRootCACertificate(request: CreateRootCACertificateRequest): Promise<CreateRootCACertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRootCACertificateWithOptions(request, runtime);
  }

  /**
    * The additional domain names and additional IP addresses of the server certificate. After you add additional domain names and additional IP addresses to a certificate, you can apply the certificate to the domain names and IP addresses.
    * Separate multiple domain names and multiple IP addresses with commas (,).
    *
    * @param request CreateServerCertificateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateServerCertificateResponse
   */
  async createServerCertificateWithOptions(request: CreateServerCertificateRequest, runtime: $Util.RuntimeOptions): Promise<CreateServerCertificateResponse> {
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

    if (!Util.isUnset(request.days)) {
      query["Days"] = request.days;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.enableCrl)) {
      query["EnableCrl"] = request.enableCrl;
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
      action: "CreateServerCertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateServerCertificateResponse>(await this.callApi(params, req, runtime), new CreateServerCertificateResponse({}));
  }

  /**
    * The additional domain names and additional IP addresses of the server certificate. After you add additional domain names and additional IP addresses to a certificate, you can apply the certificate to the domain names and IP addresses.
    * Separate multiple domain names and multiple IP addresses with commas (,).
    *
    * @param request CreateServerCertificateRequest
    * @return CreateServerCertificateResponse
   */
  async createServerCertificate(request: CreateServerCertificateRequest): Promise<CreateServerCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServerCertificateWithOptions(request, runtime);
  }

  /**
    * The content of the CSR file. You can generate a CSR file by using the OpenSSL tool or Keytool. For more information, see [How do I create a CSR file?](~~42218~~) You can also create a CSR file in the Certificate Management Service console. For more information, see [Create a CSR](~~313297~~).
    *
    * @param request CreateServerCertificateWithCsrRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateServerCertificateWithCsrResponse
   */
  async createServerCertificateWithCsrWithOptions(request: CreateServerCertificateWithCsrRequest, runtime: $Util.RuntimeOptions): Promise<CreateServerCertificateWithCsrResponse> {
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

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.enableCrl)) {
      query["EnableCrl"] = request.enableCrl;
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
      action: "CreateServerCertificateWithCsr",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateServerCertificateWithCsrResponse>(await this.callApi(params, req, runtime), new CreateServerCertificateWithCsrResponse({}));
  }

  /**
    * The content of the CSR file. You can generate a CSR file by using the OpenSSL tool or Keytool. For more information, see [How do I create a CSR file?](~~42218~~) You can also create a CSR file in the Certificate Management Service console. For more information, see [Create a CSR](~~313297~~).
    *
    * @param request CreateServerCertificateWithCsrRequest
    * @return CreateServerCertificateWithCsrResponse
   */
  async createServerCertificateWithCsr(request: CreateServerCertificateWithCsrRequest): Promise<CreateServerCertificateWithCsrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServerCertificateWithCsrWithOptions(request, runtime);
  }

  /**
    * You can call this operation to issue an intermediate certificate authority (CA) certificate by using an existing root CA certificate. Intermediate CA certificates can be used to issue client certificates and server certificates.
    * Before you call this operation, make sure that you have issued a root CA certificate by calling the [CreateRootCACertificate](~~465962~~) operation.
    * ## Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request CreateSubCACertificateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateSubCACertificateResponse
   */
  async createSubCACertificateWithOptions(request: CreateSubCACertificateRequest, runtime: $Util.RuntimeOptions): Promise<CreateSubCACertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.commonName)) {
      query["CommonName"] = request.commonName;
    }

    if (!Util.isUnset(request.countryCode)) {
      query["CountryCode"] = request.countryCode;
    }

    if (!Util.isUnset(request.crlDay)) {
      query["CrlDay"] = request.crlDay;
    }

    if (!Util.isUnset(request.enableCrl)) {
      query["EnableCrl"] = request.enableCrl;
    }

    if (!Util.isUnset(request.extendedKeyUsages)) {
      query["ExtendedKeyUsages"] = request.extendedKeyUsages;
    }

    if (!Util.isUnset(request.locality)) {
      query["Locality"] = request.locality;
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

    if (!Util.isUnset(request.pathLenConstraint)) {
      query["PathLenConstraint"] = request.pathLenConstraint;
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
      action: "CreateSubCACertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSubCACertificateResponse>(await this.callApi(params, req, runtime), new CreateSubCACertificateResponse({}));
  }

  /**
    * You can call this operation to issue an intermediate certificate authority (CA) certificate by using an existing root CA certificate. Intermediate CA certificates can be used to issue client certificates and server certificates.
    * Before you call this operation, make sure that you have issued a root CA certificate by calling the [CreateRootCACertificate](~~465962~~) operation.
    * ## Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request CreateSubCACertificateRequest
    * @return CreateSubCACertificateResponse
   */
  async createSubCACertificate(request: CreateSubCACertificateRequest): Promise<CreateSubCACertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSubCACertificateWithOptions(request, runtime);
  }

  async deleteClientCertificateWithOptions(request: DeleteClientCertificateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteClientCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteClientCertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteClientCertificateResponse>(await this.callApi(params, req, runtime), new DeleteClientCertificateResponse({}));
  }

  async deleteClientCertificate(request: DeleteClientCertificateRequest): Promise<DeleteClientCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteClientCertificateWithOptions(request, runtime);
  }

  /**
    * You can call the DescribeCACertificate operation to query the details about a root CA certificate or an intermediate CA certificate by using the unique identifier of the root CA certificate or intermediate CA certificate. The details include the serial number, user information, and content of a CA certificate.
    * Before you call this operation, make sure that you have created a root CA by calling the [CreateRootCACertificate](~~328093~~) operation or an intermediate CA certificate by calling the [CreateSubCACertificate](~~328094~~) operation.
    * ## Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeCACertificateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCACertificateResponse
   */
  async describeCACertificateWithOptions(request: DescribeCACertificateRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCACertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCACertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCACertificateResponse>(await this.callApi(params, req, runtime), new DescribeCACertificateResponse({}));
  }

  /**
    * You can call the DescribeCACertificate operation to query the details about a root CA certificate or an intermediate CA certificate by using the unique identifier of the root CA certificate or intermediate CA certificate. The details include the serial number, user information, and content of a CA certificate.
    * Before you call this operation, make sure that you have created a root CA by calling the [CreateRootCACertificate](~~328093~~) operation or an intermediate CA certificate by calling the [CreateSubCACertificate](~~328094~~) operation.
    * ## Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeCACertificateRequest
    * @return DescribeCACertificateResponse
   */
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
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCACertificateCountResponse>(await this.callApi(params, req, runtime), new DescribeCACertificateCountResponse({}));
  }

  async describeCACertificateCount(): Promise<DescribeCACertificateCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCACertificateCountWithOptions(runtime);
  }

  /**
    * You can call the DescribeCACertificateList operation to perform a paged query of the details about all CA certificates that you create. The details include the unique identifier, serial number, user information, and content of each root CA certificate or intermediate CA certificate.
    * ## Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeCACertificateListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCACertificateListResponse
   */
  async describeCACertificateListWithOptions(request: DescribeCACertificateListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCACertificateListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    if (!Util.isUnset(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCACertificateList",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCACertificateListResponse>(await this.callApi(params, req, runtime), new DescribeCACertificateListResponse({}));
  }

  /**
    * You can call the DescribeCACertificateList operation to perform a paged query of the details about all CA certificates that you create. The details include the unique identifier, serial number, user information, and content of each root CA certificate or intermediate CA certificate.
    * ## Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeCACertificateListRequest
    * @return DescribeCACertificateListResponse
   */
  async describeCACertificateList(request: DescribeCACertificateListRequest): Promise<DescribeCACertificateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCACertificateListWithOptions(request, runtime);
  }

  /**
    * ## Usage notes
    * You can call the DescribeCertificatePrivateKey operation to obtain the encrypted private key of a client certificate or a server certificate. The certificate is issued based on a system-generated certificate signing request (CSR). Before you call this operation, make sure that you have issued a client certificate or a server certificate by calling the following operation:
    * *   [CreateClientCertificate](~~330873~~)
    * *   [CreateServerCertificate](~~330877~~)
    * To ensure the security of private key transmission, the DescribeCertificatePrivateKey operation encrypts the private key by using the private key password that you specify and returns the encrypted private key. The private key password is a string that is used to encrypt the private key. After you obtain the encrypted private key of the certificate, you can use the following methods to decrypt the private key:
    * *   If the encryption algorithm of the certificate is RSA, you must run the `openssl rsa -in <Encrypted private key file> -passin pass:<Private key password> -out <Decrypted private key file>` command in the computer on which [OpenSSL](https://www.openssl.org/source/) or [BabaSSL](https://github.com/BabaSSL/BabaSSL) is installed.
    * *   If the encryption algorithm of the certificate is ECC, you must run the `openssl ec -in <Encrypted private key file> -passin pass:<Private key password> -out <Decrypted private key file>` command in the computer on which [OpenSSL](https://www.openssl.org/source/) or [BabaSSL](https://github.com/BabaSSL/BabaSSL) is installed.
    * *   If the encryption algorithm of the certificate is SM2, you must run the `openssl ec -in <Encrypted private key file> -passin pass:<Private key password> -out <Decrypted private key file>` command in the computer on which [BabaSSL](https://github.com/BabaSSL/BabaSSL) is installed.
    * >  You can call the [DescribeClientCertificate](~~329929~~) operation to query the encryption algorithm type of a client certificate or a server certificate.
    * ## Limits
    * You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeCertificatePrivateKeyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCertificatePrivateKeyResponse
   */
  async describeCertificatePrivateKeyWithOptions(request: DescribeCertificatePrivateKeyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCertificatePrivateKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.encryptedCode)) {
      query["EncryptedCode"] = request.encryptedCode;
    }

    if (!Util.isUnset(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCertificatePrivateKey",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCertificatePrivateKeyResponse>(await this.callApi(params, req, runtime), new DescribeCertificatePrivateKeyResponse({}));
  }

  /**
    * ## Usage notes
    * You can call the DescribeCertificatePrivateKey operation to obtain the encrypted private key of a client certificate or a server certificate. The certificate is issued based on a system-generated certificate signing request (CSR). Before you call this operation, make sure that you have issued a client certificate or a server certificate by calling the following operation:
    * *   [CreateClientCertificate](~~330873~~)
    * *   [CreateServerCertificate](~~330877~~)
    * To ensure the security of private key transmission, the DescribeCertificatePrivateKey operation encrypts the private key by using the private key password that you specify and returns the encrypted private key. The private key password is a string that is used to encrypt the private key. After you obtain the encrypted private key of the certificate, you can use the following methods to decrypt the private key:
    * *   If the encryption algorithm of the certificate is RSA, you must run the `openssl rsa -in <Encrypted private key file> -passin pass:<Private key password> -out <Decrypted private key file>` command in the computer on which [OpenSSL](https://www.openssl.org/source/) or [BabaSSL](https://github.com/BabaSSL/BabaSSL) is installed.
    * *   If the encryption algorithm of the certificate is ECC, you must run the `openssl ec -in <Encrypted private key file> -passin pass:<Private key password> -out <Decrypted private key file>` command in the computer on which [OpenSSL](https://www.openssl.org/source/) or [BabaSSL](https://github.com/BabaSSL/BabaSSL) is installed.
    * *   If the encryption algorithm of the certificate is SM2, you must run the `openssl ec -in <Encrypted private key file> -passin pass:<Private key password> -out <Decrypted private key file>` command in the computer on which [BabaSSL](https://github.com/BabaSSL/BabaSSL) is installed.
    * >  You can call the [DescribeClientCertificate](~~329929~~) operation to query the encryption algorithm type of a client certificate or a server certificate.
    * ## Limits
    * You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeCertificatePrivateKeyRequest
    * @return DescribeCertificatePrivateKeyResponse
   */
  async describeCertificatePrivateKey(request: DescribeCertificatePrivateKeyRequest): Promise<DescribeCertificatePrivateKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCertificatePrivateKeyWithOptions(request, runtime);
  }

  /**
    * The name of the organization. The organization is associated with the intermediate certificate from which the certificate is issued.
    *
    * @param request DescribeClientCertificateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeClientCertificateResponse
   */
  async describeClientCertificateWithOptions(request: DescribeClientCertificateRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClientCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClientCertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeClientCertificateResponse>(await this.callApi(params, req, runtime), new DescribeClientCertificateResponse({}));
  }

  /**
    * The name of the organization. The organization is associated with the intermediate certificate from which the certificate is issued.
    *
    * @param request DescribeClientCertificateRequest
    * @return DescribeClientCertificateResponse
   */
  async describeClientCertificate(request: DescribeClientCertificateRequest): Promise<DescribeClientCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClientCertificateWithOptions(request, runtime);
  }

  async describeClientCertificateStatusWithOptions(request: DescribeClientCertificateStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClientCertificateStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClientCertificateStatus",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeClientCertificateStatusResponse>(await this.callApi(params, req, runtime), new DescribeClientCertificateStatusResponse({}));
  }

  async describeClientCertificateStatus(request: DescribeClientCertificateStatusRequest): Promise<DescribeClientCertificateStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClientCertificateStatusWithOptions(request, runtime);
  }

  /**
    * The unique identifier of the private CA certificate.
    * >  This parameter is returned only when the value of the **Status** parameter is **USED** or **REVOKE**. The value USED indicates that the private CA instance is enabled, and the value REVOKE indicates that the instance is revoked.
    *
    * @param request GetCAInstanceStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetCAInstanceStatusResponse
   */
  async getCAInstanceStatusWithOptions(request: GetCAInstanceStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetCAInstanceStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCAInstanceStatus",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCAInstanceStatusResponse>(await this.callApi(params, req, runtime), new GetCAInstanceStatusResponse({}));
  }

  /**
    * The unique identifier of the private CA certificate.
    * >  This parameter is returned only when the value of the **Status** parameter is **USED** or **REVOKE**. The value USED indicates that the private CA instance is enabled, and the value REVOKE indicates that the instance is revoked.
    *
    * @param request GetCAInstanceStatusRequest
    * @return GetCAInstanceStatusResponse
   */
  async getCAInstanceStatus(request: GetCAInstanceStatusRequest): Promise<GetCAInstanceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCAInstanceStatusWithOptions(request, runtime);
  }

  /**
    * You can call the ListClientCertificate operation to perform a paged query of the details about all client certificates and server certificates that you create. The details include the unique identifier, serial number, user information, content, and status of each certificate.
    * ## Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request ListClientCertificateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListClientCertificateResponse
   */
  async listClientCertificateWithOptions(request: ListClientCertificateRequest, runtime: $Util.RuntimeOptions): Promise<ListClientCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    if (!Util.isUnset(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListClientCertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListClientCertificateResponse>(await this.callApi(params, req, runtime), new ListClientCertificateResponse({}));
  }

  /**
    * You can call the ListClientCertificate operation to perform a paged query of the details about all client certificates and server certificates that you create. The details include the unique identifier, serial number, user information, content, and status of each certificate.
    * ## Limits
    * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request ListClientCertificateRequest
    * @return ListClientCertificateResponse
   */
  async listClientCertificate(request: ListClientCertificateRequest): Promise<ListClientCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClientCertificateWithOptions(request, runtime);
  }

  /**
    * The total number of revoked client certificates and server certificates that are returned.
    *
    * @param request ListRevokeCertificateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListRevokeCertificateResponse
   */
  async listRevokeCertificateWithOptions(request: ListRevokeCertificateRequest, runtime: $Util.RuntimeOptions): Promise<ListRevokeCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.showSize)) {
      query["ShowSize"] = request.showSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRevokeCertificate",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRevokeCertificateResponse>(await this.callApi(params, req, runtime), new ListRevokeCertificateResponse({}));
  }

  /**
    * The total number of revoked client certificates and server certificates that are returned.
    *
    * @param request ListRevokeCertificateRequest
    * @return ListRevokeCertificateResponse
   */
  async listRevokeCertificate(request: ListRevokeCertificateRequest): Promise<ListRevokeCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRevokeCertificateWithOptions(request, runtime);
  }

  async updateCACertificateStatusWithOptions(request: UpdateCACertificateStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCACertificateStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCACertificateStatus",
      version: "2020-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateCACertificateStatusResponse>(await this.callApi(params, req, runtime), new UpdateCACertificateStatusResponse({}));
  }

  async updateCACertificateStatus(request: UpdateCACertificateStatusRequest): Promise<UpdateCACertificateStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCACertificateStatusWithOptions(request, runtime);
  }

}
