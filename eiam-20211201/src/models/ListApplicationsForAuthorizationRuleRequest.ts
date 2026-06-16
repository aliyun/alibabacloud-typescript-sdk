// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsForAuthorizationRuleRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The name of the field to filter. Valid values:
   * 
   * - ApplicationId: The application ID.
   * 
   * @example
   * ApplicationId
   */
  name?: string;
  /**
   * @remarks
   * The list of values for the filter field.
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

export class ListApplicationsForAuthorizationRuleRequest extends $dara.Model {
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
  filter?: ListApplicationsForAuthorizationRuleRequestFilter[];
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
   * The maximum number of records to return in a paged query.
   * 
   * - The default value is 20.
   * 
   * - The maximum value cannot exceed 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to mark the start of the next page for a paged query.
   * 
   * - If you do not specify this parameter, the query starts from the first page.
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
      filter: { 'type': 'array', 'itemType': ListApplicationsForAuthorizationRuleRequestFilter },
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

