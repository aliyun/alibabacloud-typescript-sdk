// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the certificate.
   * 
   * @example
   * 2024-05-13 12:59:45
   */
  afterDate?: string;
  /**
   * @remarks
   * The expiration time of the client certificate. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * > The **BeforeTime** and **AfterTime** parameters must be both left empty or both specified.
   * 
   * @example
   * 1728921600000
   */
  afterTime?: number;
  /**
   * @remarks
   * The public key algorithm.
   * 
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @remarks
   * The alias of the certificate.
   * 
   * @example
   * test
   */
  aliasName?: string;
  /**
   * @remarks
   * The issuance time of the certificate.
   * 
   * @example
   * 2026-05-19
   */
  beforeDate?: string;
  /**
   * @remarks
   * The issuance time of the client certificate. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * > The **BeforeTime** and **AfterTime** parameters must be both left empty or both specified.
   * 
   * @example
   * 1728921600000
   */
  beforeTime?: number;
  /**
   * @remarks
   * The type of the certificate. Valid values:
   * 
   * - `free`: Free certificate.
   * 
   * - `cas`: Alibaba Cloud Security certificate.
   * 
   * - `upload`: A user-uploaded certificate.
   * 
   * @example
   * Server
   */
  certificateType?: string;
  /**
   * @remarks
   * The primary domain name of the certificate.
   * 
   * @example
   * www.kfsjn.xyz
   */
  commonName?: string;
  /**
   * @remarks
   * A unique, user-defined identifier for the certificate.
   * 
   * @example
   * ***b86sca4384811e0b5e8707e68***
   */
  customIdentifier?: string;
  /**
   * @remarks
   * A JSON string containing extended attributes.
   * 
   * @example
   * {"appId":"APP_PFHMIGUHKDUW6S3N7ZL2"}
   */
  extra?: string;
  /**
   * @remarks
   * The ID of the data source to which the certificate order belongs.
   * 
   * @example
   * 1806958
   */
  id?: number;
  /**
   * @remarks
   * The unique identifier of the certificate.
   * 
   * @example
   * 1ef539a8-1e1f-6b88-8c11-21cf01a203e9
   */
  identifier?: string;
  /**
   * @remarks
   * Specifies if the private key is exportable. Valid values:
   * 
   * - `true`: The private key is exportable.
   * 
   * - `false`: The private key is not exportable.
   * 
   * @example
   * true
   */
  keyExportable?: boolean;
  /**
   * @remarks
   * The organization specified in the certificate.
   * 
   * @example
   * test
   */
  organization?: string;
  /**
   * @remarks
   * The organizational unit (OU) specified in the certificate.
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
   * The status of the certificate. Valid values:
   * 
   * - `ISSUE`: Issued.
   * 
   * - `REVOKE`: Revoked.
   * 
   * @example
   * complete
   */
  status?: string;
  /**
   * @remarks
   * The distinguished name (DN) of the certificate subject.
   * 
   * @example
   * SubjectDn
   */
  subjectDn?: string;
  /**
   * @remarks
   * The tags of the certificate.
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
   * The list of certificates.
   */
  list?: ListCertResponseBodyList[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A token to retrieve the next page of results. If this value is empty, all results have been returned.
   * 
   * @example
   * 1d2db86sca4384811e0b5e8707e68181f
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of pages.
   * 
   * @example
   * 1
   */
  pageCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * The page size.
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

