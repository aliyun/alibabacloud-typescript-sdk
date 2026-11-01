// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPermissionRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to retrieve the next page.
   * 
   * @example
   * token-example
   */
  nextToken?: string;
  /**
   * @remarks
   * The principal ID.
   * 
   * @example
   * 1234567890123456
   */
  principalId?: string;
  /**
   * @remarks
   * The principal name.
   * 
   * @example
   * example-user
   */
  principalName?: string;
  /**
   * @remarks
   * The principal type.
   * 
   * @example
   * USER
   */
  principalType?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * This parameter is required.
   * 
   * @example
   * agent-1234567890
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * AGENT
   */
  resourceType?: string;
  /**
   * @remarks
   * The rule source.
   * 
   * @example
   * AgentCore
   */
  source?: string;
  /**
   * @remarks
   * The rule target.
   * 
   * @example
   * agent-1234567890
   */
  target?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      principalId: 'principalId',
      principalName: 'principalName',
      principalType: 'principalType',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      source: 'source',
      target: 'target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      principalId: 'string',
      principalName: 'string',
      principalType: 'string',
      resourceId: 'string',
      resourceType: 'string',
      source: 'string',
      target: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

