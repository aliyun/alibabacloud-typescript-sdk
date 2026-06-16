// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertRequest extends $dara.Model {
  /**
   * @remarks
   * Filters certificates modified after this date.
   * 
   * @example
   * 2024-05-13 12:59:45
   */
  afterDate?: string;
  /**
   * @remarks
   * Filters certificates modified before this date.
   * 
   * @example
   * 2025-09-04
   */
  beforeDate?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
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
   * The token used to retrieve the next page of results. This is the NextToken value from a previous response. If unspecified, the first page is returned.
   * 
   * @example
   * 1d2db86sca4384811e0b5e8707e68181f
   */
  nextToken?: string;
  /**
   * @remarks
   * The identifier of the intermediate CA that issued the certificate.
   * 
   * @example
   * 273ae6bb538d538c70c01f81jh2****
   */
  parentIdentifier?: string;
  /**
   * @remarks
   * The page size. Default value: 50.
   * 
   * @example
   * 50
   */
  showSize?: number;
  /**
   * @remarks
   * The status of the certificate. Valid values:
   * 
   * - ISSUE: Active
   * 
   * - REVOKE: Revoked
   * 
   * @example
   * ISSUE
   */
  status?: string;
  /**
   * @remarks
   * The certificate type. Valid values:
   * 
   * - SERVER: Server certificate
   * 
   * - CLIENT: Client certificate
   * 
   * - END_ENTITY: End-entity certificate
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

