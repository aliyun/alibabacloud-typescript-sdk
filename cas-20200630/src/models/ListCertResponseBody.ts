// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertResponseBodyList extends $dara.Model {
  /**
   * @example
   * 2024-05-13 12:59:45
   */
  afterDate?: string;
  /**
   * @example
   * 1728921600000
   */
  afterTime?: number;
  /**
   * @example
   * RSA
   */
  algorithm?: string;
  aliasName?: string;
  /**
   * @example
   * 2026-05-19
   */
  beforeDate?: string;
  /**
   * @example
   * 1728921600000
   */
  beforeTime?: number;
  /**
   * @example
   * Server
   */
  certificateType?: string;
  /**
   * @example
   * www.kfsjn.xyz
   */
  commonName?: string;
  customIdentifier?: string;
  /**
   * @example
   * {\\"appId\\":\\"APP_PFHMIGUHKDUW6S3N7ZL2\\"}
   */
  extra?: string;
  /**
   * @example
   * 1806958
   */
  id?: number;
  /**
   * @example
   * 1ef539a8-1e1f-6b88-8c11-21cf01a203e9
   */
  identifier?: string;
  keyExportable?: boolean;
  organization?: string;
  /**
   * @example
   * IT
   */
  organizationUnit?: string;
  /**
   * @example
   * 3a3ee3c3597d675e
   */
  serialNumber?: string;
  /**
   * @example
   * complete
   */
  status?: string;
  /**
   * @example
   * SubjectDn
   */
  subjectDn?: string;
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
   * @example
   * 1
   */
  currentPage?: number;
  list?: ListCertResponseBodyList[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 1d2db86sca4384811e0b5e8707e68181f
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageCount?: number;
  /**
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @example
   * 50
   */
  showSize?: number;
  /**
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

