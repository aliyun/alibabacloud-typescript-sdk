// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupsForResourceServerRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The name of the filter condition. The only valid value is GroupIds.
   * 
   * @example
   * GroupIds
   */
  name?: string;
  /**
   * @remarks
   * The values for the filter condition.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsForResourceServerRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource server application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The filter conditions.
   */
  filter?: ListGroupsForResourceServerRequestFilter[];
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
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
   * The token for the next page of results. You do not need to provide this parameter for the first request. For subsequent requests, set this to the `NextToken` value from the previous response.
   * 
   * @example
   * NTxxxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the scope.
   * 
   * @example
   * ress_nbte4bb3qqqnaq73rlmkqixxxx
   */
  resourceServerScopeId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      filter: 'Filter',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceServerScopeId: 'ResourceServerScopeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      filter: { 'type': 'array', 'itemType': ListGroupsForResourceServerRequestFilter },
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceServerScopeId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

