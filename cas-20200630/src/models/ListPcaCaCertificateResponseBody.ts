// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPcaCaCertificateResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The certificate identifier. Use this identifier to query certificate details.
   * 
   * @example
   * 1ef78be5-******-b5ef0f0eba3d
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The common name of the certificate. This value matches the CommonName field in the certificate Subject.
   * 
   * @example
   * Example Co., Ltd.
   */
  commonName?: string;
  /**
   * @remarks
   * The identifier of the issuer certificate. Use this identifier to query the issuer certificate.
   * 
   * @example
   * 1ef78be5-******-b5ef0f0eba3d
   */
  issuerIdentifier?: string;
  /**
   * @remarks
   * The ID of the private CA instance.
   * 
   * @example
   * cas_deposit-cn-******
   */
  privateCaInstanceId?: string;
  /**
   * @remarks
   * The region ID of the private CA instance.
   * 
   * @example
   * cn-hangzhou
   */
  privateCaRegionId?: string;
  /**
   * @remarks
   * The certificate status.
   * 
   * @example
   * ISSUE
   */
  status?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 166********
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      commonName: 'CommonName',
      issuerIdentifier: 'IssuerIdentifier',
      privateCaInstanceId: 'PrivateCaInstanceId',
      privateCaRegionId: 'PrivateCaRegionId',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      commonName: 'string',
      issuerIdentifier: 'string',
      privateCaInstanceId: 'string',
      privateCaRegionId: 'string',
      status: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPcaCaCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of CA certificates.
   */
  list?: ListPcaCaCertificateResponseBodyList[];
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of results. Leave this parameter empty to start the query from the first page. If this parameter is not returned, all results have been returned.
   * 
   * @example
   * 1d2db86sca4384811e0b5e8707e68181f
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 12345678-1234-1234-1234-123456789ABC
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries in the result set.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListPcaCaCertificateResponseBodyList },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
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

