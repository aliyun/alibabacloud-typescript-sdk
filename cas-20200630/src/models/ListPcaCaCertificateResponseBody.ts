// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPcaCaCertificateResponseBodyList extends $dara.Model {
  /**
   * @example
   * 1ef78be5-******-b5ef0f0eba3d
   */
  certIdentifier?: string;
  /**
   * @example
   * Example Co., Ltd.
   */
  commonName?: string;
  /**
   * @example
   * 1ef78be5-******-b5ef0f0eba3d
   */
  issuerIdentifier?: string;
  /**
   * @example
   * cas_deposit-cn-******
   */
  privateCaInstanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  privateCaRegionId?: string;
  /**
   * @example
   * ISSUE
   */
  status?: string;
  /**
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
  list?: ListPcaCaCertificateResponseBodyList[];
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
   * 12345678-1234-1234-1234-123456789ABC
   */
  requestId?: string;
  /**
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

