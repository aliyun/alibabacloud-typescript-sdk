// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizationResourcesResponseBodyAuthorizationResources extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated resource entity.
   * 
   * @example
   * carole_01kmek49aqxxxx
   */
  authorizationResourceEntityId?: string;
  /**
   * @remarks
   * The type of the associated resource entity. Valid values:
   * 
   * - cloud_account_role: A cloud role.
   * 
   * @example
   * cloud_account_role
   */
  authorizationResourceEntityType?: string;
  /**
   * @remarks
   * The authorized resource ID.
   * 
   * @example
   * arres_01kgh3jvt7pk093rv6giu0c0qxxxx
   */
  authorizationResourceId?: string;
  /**
   * @remarks
   * The authorization rule ID.
   * 
   * @example
   * arrule_01kf143ug06fg7m9f43u7vahxxxx
   */
  authorizationRuleId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the associated resource entity.
   * 
   * @example
   * ca_01kmegjc11qa1txxxxx
   */
  cloudAccountId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationResourceEntityId: 'AuthorizationResourceEntityId',
      authorizationResourceEntityType: 'AuthorizationResourceEntityType',
      authorizationResourceId: 'AuthorizationResourceId',
      authorizationRuleId: 'AuthorizationRuleId',
      cloudAccountId: 'CloudAccountId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationResourceEntityId: 'string',
      authorizationResourceEntityType: 'string',
      authorizationResourceId: 'string',
      authorizationRuleId: 'string',
      cloudAccountId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizationResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of authorized resources.
   */
  authorizationResources?: ListAuthorizationResourcesResponseBodyAuthorizationResources[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results. This parameter is returned when the results are paged.
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      authorizationResources: 'AuthorizationResources',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationResources: { 'type': 'array', 'itemType': ListAuthorizationResourcesResponseBodyAuthorizationResources },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.authorizationResources)) {
      $dara.Model.validateArray(this.authorizationResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

