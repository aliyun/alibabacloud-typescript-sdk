// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRouteMapRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the parameter value on your client. Make sure that the token is unique across different requests. The client token supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * The detailed description of the rule. The description can be empty or 1 to 256 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * Matches production prefixes from on-prem and sets a higher local preference.
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * 
   * - **true**: Prechecks the request without creating the route map rule. The system checks whether required parameters are specified, the request format, and service limits. If the request fails the precheck, the corresponding error is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * - **false** (default): Sends the request. After the request passes the precheck, the route map rule is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The match conditions of the route map rule. The system executes the actions defined in **SetActions** only when a route meets all the match conditions defined in this parameter.
   */
  matchConditionsShrink?: string;
  /**
   * @remarks
   * The name of the rule for easy identification. The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * Permit-Prod-Prefixes-Set-LP
   */
  name?: string;
  /**
   * @remarks
   * The priority of the rule. A smaller value indicates a higher priority.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the route map.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-0a1b2c3d4e5f6a7b8
   */
  routeMapId?: string;
  /**
   * @remarks
   * The actions to execute for the route map rule. After a route meets all the match conditions defined in **MatchConditions**, the system processes the route based on the actions defined in this parameter.
   */
  setActionsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      matchConditionsShrink: 'MatchConditions',
      name: 'Name',
      priority: 'Priority',
      routeMapId: 'RouteMapId',
      setActionsShrink: 'SetActions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      matchConditionsShrink: 'string',
      name: 'string',
      priority: 'number',
      routeMapId: 'string',
      setActionsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

