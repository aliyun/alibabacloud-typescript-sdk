// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthConfigByResourceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The array of permissions granted.
   */
  authorities?: string[];
  /**
   * @remarks
   * The ID of the authorized user.
   * 
   * @example
   * 123123**dfsd
   */
  authorizedId?: string;
  /**
   * @remarks
   * The name of the authorized user.
   * 
   * @example
   * sss
   */
  authorizedName?: string;
  /**
   * @remarks
   * The expiration time. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1788969600000
   */
  expireDate?: string;
  /**
   * @remarks
   * The time when the permission record was created, in the yyyy-MM-dd mm:hh:ss format.
   * 
   * @example
   * 2024-04-16 13:17:39
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * 123123**dfsd
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - dashboard: dashboard
   * - screen: data screen
   * - report: electron
   * - ANALYSIS: ad hoc analysis
   * - dashboardOfflineQuery: self-service data retrieval
   * - dataForm: data form
   * - cube: dataset
   * - datasource: data source
   * 
   * @example
   * cube
   */
  resourceType?: string;
  /**
   * @remarks
   * The authorization scope. Valid values:
   * 
   * - 0: user
   * - 1: user group
   * - 2: organization
   * - 3: workspace
   * 
   * @example
   * 0
   */
  scope?: number;
  static names(): { [key: string]: string } {
    return {
      authorities: 'Authorities',
      authorizedId: 'AuthorizedId',
      authorizedName: 'AuthorizedName',
      expireDate: 'ExpireDate',
      gmtCreate: 'GmtCreate',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorities: { 'type': 'array', 'itemType': 'string' },
      authorizedId: 'string',
      authorizedName: 'string',
      expireDate: 'string',
      gmtCreate: 'string',
      resourceId: 'string',
      resourceType: 'string',
      scope: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.authorities)) {
      $dara.Model.validateArray(this.authorities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthConfigByResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FA14C-ED6B-5F39-8563-855676470C47
   */
  requestId?: string;
  /**
   * @remarks
   * The collection of authorization details.
   */
  result?: ListAuthConfigByResourceResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListAuthConfigByResourceResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

