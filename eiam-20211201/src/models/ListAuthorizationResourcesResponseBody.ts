// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizationResourcesResponseBodyAuthorizationResourcesConditionCredentialCondition extends $dara.Model {
  /**
   * @remarks
   * Specifies whether same-name identity accounts are supported.
   * 
   * @example
   * true
   */
  allowSameNameIdentity?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowSameNameIdentity: 'AllowSameNameIdentity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowSameNameIdentity: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizationResourcesResponseBodyAuthorizationResourcesCondition extends $dara.Model {
  /**
   * @remarks
   * The effective condition when used as a credential.
   */
  credentialCondition?: ListAuthorizationResourcesResponseBodyAuthorizationResourcesConditionCredentialCondition;
  static names(): { [key: string]: string } {
    return {
      credentialCondition: 'CredentialCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialCondition: ListAuthorizationResourcesResponseBodyAuthorizationResourcesConditionCredentialCondition,
    };
  }

  validate() {
    if(this.credentialCondition && typeof (this.credentialCondition as any).validate === 'function') {
      (this.credentialCondition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizationResourcesResponseBodyAuthorizationResources extends $dara.Model {
  /**
   * @remarks
   * The resource entity ID associated with the authorization resource.
   * 
   * @example
   * carole_01kmek49aqxxxx
   */
  authorizationResourceEntityId?: string;
  /**
   * @remarks
   * The resource entity type associated with the authorization resource. Valid values:
   * - cloud_account_role: cloud role
   * 
   * @example
   * cloud_account_role
   */
  authorizationResourceEntityType?: string;
  /**
   * @remarks
   * The authorization resource ID.
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
   * The cloud account ID to which the resource entity associated with the authorization resource belongs.
   * 
   * @example
   * ca_01kmegjc11qa1txxxxx
   */
  cloudAccountId?: string;
  /**
   * @remarks
   * The effective condition.
   */
  condition?: ListAuthorizationResourcesResponseBodyAuthorizationResourcesCondition;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1768789292000
   */
  createTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1768789292000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      authorizationResourceEntityId: 'AuthorizationResourceEntityId',
      authorizationResourceEntityType: 'AuthorizationResourceEntityType',
      authorizationResourceId: 'AuthorizationResourceId',
      authorizationRuleId: 'AuthorizationRuleId',
      cloudAccountId: 'CloudAccountId',
      condition: 'Condition',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationResourceEntityId: 'string',
      authorizationResourceEntityType: 'string',
      authorizationResourceId: 'string',
      authorizationRuleId: 'string',
      cloudAccountId: 'string',
      condition: ListAuthorizationResourcesResponseBodyAuthorizationResourcesCondition,
      createTime: 'number',
      instanceId: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(this.condition && typeof (this.condition as any).validate === 'function') {
      (this.condition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizationResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of authorization resources.
   */
  authorizationResources?: ListAuthorizationResourcesResponseBodyAuthorizationResources[];
  /**
   * @remarks
   * The number of rows per page in a paging query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token returned by this call, used for the next page query.
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
   * The total number of entries in the list.
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

