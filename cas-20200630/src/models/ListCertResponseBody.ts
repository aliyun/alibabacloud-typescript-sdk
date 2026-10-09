// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the certificate in UTC/GMT.
   * 
   * @example
   * Mon Nov 05 16:33:52 CST 2035
   */
  afterDate?: string;
  /**
   * @remarks
   * The service expiration time of the client certificate, in timestamp format. Unit: milliseconds.
   * >The **BeforeTime** and **AfterTime** parameters must both be empty or both be specified.
   * 
   * @example
   * 1728921600000
   */
  afterTime?: number;
  /**
   * @remarks
   * The algorithm type.
   * 
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @remarks
   * The name of the issued certificate.
   * 
   * @example
   * test
   */
  aliasName?: string;
  /**
   * @remarks
   * The issuance time of the certificate in UTC/GMT.
   * 
   * @example
   * Wed Nov 05 16:33:52 CST 2025
   */
  beforeDate?: string;
  /**
   * @remarks
   * The issuance time of the client certificate, in timestamp format. The default value is the time when you call this operation. Unit: milliseconds.
   * 
   * >The **BeforeTime** and **AfterTime** parameters must both be empty or both be specified.
   * 
   * @example
   * 1728921600000
   */
  beforeTime?: number;
  /**
   * @remarks
   * The certificate type. Valid values:
   * 
   * - free: free certificate.
   * - cas: China Security certificate.
   * - upload: custom upload.
   * 
   * @example
   * Server
   */
  certificateType?: string;
  /**
   * @remarks
   * The primary domain name bound to the certificate.
   * 
   * @example
   * www.kfsjn.xyz
   */
  commonName?: string;
  /**
   * @remarks
   * The user-defined identifier, which serves as a unique key.
   * 
   * @example
   * ***b86sca4384811e0b5e8707e68***
   */
  customIdentifier?: string;
  /**
   * @remarks
   * The extended field.
   * 
   * @example
   * {"appId":"APP_PFHMIGUHKDUW6S3N7ZL2"}
   */
  extra?: string;
  /**
   * @remarks
   * The data source ID of the certificate order.
   * 
   * @example
   * 1806958
   */
  id?: number;
  /**
   * @remarks
   * The certificate identifier.
   * 
   * @example
   * 1ef539a8-1e1f-6b88-8c11-21cf01a203e9
   */
  identifier?: string;
  /**
   * @remarks
   * Indicates whether the certificate can be used. Valid values:
   * 
   * - true: The certificate can be used.
   * - false: The certificate cannot be used.
   * 
   * @example
   * true
   */
  keyExportable?: boolean;
  /**
   * @remarks
   * The organization of the certificate.
   * 
   * @example
   * test
   */
  organization?: string;
  /**
   * @remarks
   * The name of the company or organization to which the certificate purchaser belongs.
   * 
   * @example
   * IT
   */
  organizationUnit?: string;
  /**
   * @remarks
   * The certificate serial number.
   * 
   * @example
   * 3a3ee3c3597d675e
   */
  serialNumber?: string;
  /**
   * @remarks
   * The certificate status. Valid values:
   * 
   * - ISSUE: Normal.
   * - REVOKE: Revoked.
   * 
   * @example
   * complete
   */
  status?: string;
  /**
   * @remarks
   * The subscription relationship ID.
   * 
   * @example
   * SubjectDn
   */
  subjectDn?: string;
  /**
   * @remarks
   * The certificate tags.
   */
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      afterTime: 'AfterTime',
      algorithm: 'Algorithm',
      aliasName: 'AliasName',
      beforeDate: 'BeforeDate',
      beforeTime: 'BeforeTime',
      certificateType: 'CertificateType',
      commonName: 'CommonName',
      customIdentifier: 'CustomIdentifier',
      extra: 'Extra',
      id: 'Id',
      identifier: 'Identifier',
      keyExportable: 'KeyExportable',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      serialNumber: 'SerialNumber',
      status: 'Status',
      subjectDn: 'SubjectDn',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDate: 'string',
      afterTime: 'number',
      algorithm: 'string',
      aliasName: 'string',
      beforeDate: 'string',
      beforeTime: 'number',
      certificateType: 'string',
      commonName: 'string',
      customIdentifier: 'string',
      extra: 'string',
      id: 'number',
      identifier: 'string',
      keyExportable: 'boolean',
      organization: 'string',
      organizationUnit: 'string',
      serialNumber: 'string',
      status: 'string',
      subjectDn: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCertResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The data source ID to which the certificates belong.
   */
  list?: ListCertResponseBodyList[];
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. If this parameter is empty, no more results exist.
   * 
   * @example
   * 1d2db86sca4384811e0b5e8707e68181f
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  pageCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * The total size of the certificate. Unit: bytes.
   * 
   * @example
   * 50
   */
  showSize?: number;
  /**
   * @remarks
   * The total number of certificates.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      list: 'List',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageCount: 'PageCount',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      list: { 'type': 'array', 'itemType': ListCertResponseBodyList },
      maxResults: 'number',
      nextToken: 'string',
      pageCount: 'number',
      requestId: 'string',
      showSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

