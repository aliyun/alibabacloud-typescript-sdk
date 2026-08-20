// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizationResourcesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The name of the filter field. Valid values:
   * 
   * - AuthorizationResourceEntityType: the type of the resource entity associated with the authorization resource.
   * 
   * - AuthorizationResourceEntityId: the ID of the resource entity associated with the authorization resource.
   * 
   * @example
   * AuthorizationResourceEntityId
   */
  name?: string;
  /**
   * @remarks
   * The list of filter field values.
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

export class ListAuthorizationResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * arrule_01kf143ug06fg7m9f43u7vahxxxx
   */
  authorizationRuleId?: string;
  /**
   * @remarks
   * The filter conditions.
   */
  filter?: ListAuthorizationResourcesRequestFilter[];
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
   * The maximum number of records per page.
   * 
   * - If this parameter is not specified, the default value is 20.
   * 
   * - The maximum value is 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that identifies the start position of the next page.
   * 
   * - If this parameter is not specified, the query starts from the first page.
   * 
   * @example
   * NTxxxxxexample
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationRuleId: 'AuthorizationRuleId',
      filter: 'Filter',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationRuleId: 'string',
      filter: { 'type': 'array', 'itemType': ListAuthorizationResourcesRequestFilter },
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
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

