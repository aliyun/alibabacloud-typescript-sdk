// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceServerScopesRequest extends $dara.Model {
  /**
   * @remarks
   * Application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * Authorization type.
   * 
   * @example
   * authorize_required
   */
  authorizationType?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Number of rows per page in paginated queries.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Token for the next page query. Set this to the NextToken value returned by the previous API call. Leave empty for the first query.
   * 
   * @example
   * NTxxxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * Token for the previous page query. Set this to the PreviousToken value returned by the previous API call.
   * 
   * @example
   * PTxxxxxexample
   */
  previousToken?: string;
  /**
   * @remarks
   * List of Scope permission IDs.
   */
  resourceServerScopeIds?: string[];
  /**
   * @remarks
   * Scope permission name.
   * 
   * @example
   * 读取全部用户
   */
  resourceServerScopeName?: string;
  /**
   * @remarks
   * Scope permission type.
   * 
   * @example
   * urn:alibaba:idaas:resourceserver:scope:delegated
   */
  resourceServerScopeType?: string;
  /**
   * @remarks
   * Scope permission value.
   * 
   * @example
   * User:Write:ALL
   */
  resourceServerScopeValue?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      authorizationType: 'AuthorizationType',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      previousToken: 'PreviousToken',
      resourceServerScopeIds: 'ResourceServerScopeIds',
      resourceServerScopeName: 'ResourceServerScopeName',
      resourceServerScopeType: 'ResourceServerScopeType',
      resourceServerScopeValue: 'ResourceServerScopeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      authorizationType: 'string',
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      previousToken: 'string',
      resourceServerScopeIds: { 'type': 'array', 'itemType': 'string' },
      resourceServerScopeName: 'string',
      resourceServerScopeType: 'string',
      resourceServerScopeValue: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceServerScopeIds)) {
      $dara.Model.validateArray(this.resourceServerScopeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

