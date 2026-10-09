// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertRequest extends $dara.Model {
  /**
   * @remarks
   * The host record bound to the certificate, in the YYYY-MM-DD format.
   * 
   * @example
   * 2024-05-13
   */
  afterDate?: string;
  /**
   * @remarks
   * The modification time of the certificate, in the YYYY-MM-DD format.
   * 
   * @example
   * 2025-09-04
   */
  beforeDate?: string;
  /**
   * @remarks
   * The page number of the current page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The UUID of the instance.
   * 
   * @example
   * 1ef79512-569b-6a4e-9105-9b91473562f7
   */
  instanceUuid?: string;
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
   * The identifier of the intermediate CA that issued the certificate. You can call [DescribeCACertificateList](https://help.aliyun.com/document_detail/465957.html) to query the unique identifier of a CA certificate.
   * 
   * @example
   * 273ae6bb538d538c70c01f81jh2****
   */
  parentIdentifier?: string;
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
   * The certificate status. Valid values:
   * 
   * - ISSUE: Normal.
   * - REVOKE: Revoked.
   * 
   * @example
   * ISSUE
   */
  status?: string;
  /**
   * @remarks
   * The certificate type. Valid values:
   * 
   * - SERVER: server certificate.
   * - CLIENT: client certificate.
   * - END_ENTITY: end-entity certificate.
   * 
   * @example
   * CLIENT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      beforeDate: 'BeforeDate',
      currentPage: 'CurrentPage',
      instanceUuid: 'InstanceUuid',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      parentIdentifier: 'ParentIdentifier',
      showSize: 'ShowSize',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDate: 'string',
      beforeDate: 'string',
      currentPage: 'number',
      instanceUuid: 'string',
      maxResults: 'number',
      nextToken: 'string',
      parentIdentifier: 'string',
      showSize: 'number',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

