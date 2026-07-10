// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceServerScopesRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The authorization type.
   * 
   * @example
   * authorize_required
   */
  authorizationType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries per page in a paged query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token (NextToken) used to retrieve the next page of results. Set this parameter to the NextToken value returned in the previous API call. Leave this parameter empty for the first query.
   * 
   * @example
   * NTxxxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The pagination token for the previous page. Set this parameter to the PreviousToken value returned in the previous API call.
   * 
   * @example
   * PTxxxxxexample
   */
  previousToken?: string;
  /**
   * @remarks
   * The list of scope permission IDs.
   */
  resourceServerScopeIds?: string[];
  /**
   * @remarks
   * The scope permission name.
   * 
   * @example
   * 读取全部用户
   */
  resourceServerScopeName?: string;
  /**
   * @remarks
   * The scope permission type.
   * 
   * @example
   * urn:alibaba:idaas:resourceserver:scope:delegated
   */
  resourceServerScopeType?: string;
  /**
   * @remarks
   * The scope permission value.
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

