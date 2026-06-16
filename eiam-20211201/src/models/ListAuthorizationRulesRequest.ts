// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizationRulesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The name of the field to filter. Valid values:
   * 
   * - AuthorizationRuleId: the ID of the authorization rule.
   * 
   * - AuthorizationRuleNameStartWith: the leftmost characters of the authorization rule name.
   * 
   * @example
   * AuthorizationRuleId
   */
  name?: string;
  /**
   * @remarks
   * The list of values for the field to filter.
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

export class ListAuthorizationRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions.
   */
  filter?: ListAuthorizationRulesRequestFilter[];
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
   * - If you do not specify this parameter, the default value is 20.
   * 
   * - The maximum value is 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that identifies the start of the next page of results.
   * 
   * - If you do not specify this parameter, the system returns the first page of results.
   * 
   * @example
   * NTxxxxxexample
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListAuthorizationRulesRequestFilter },
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

