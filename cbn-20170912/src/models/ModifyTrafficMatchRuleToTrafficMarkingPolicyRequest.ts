// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTrafficMatchRuleToTrafficMarkingPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * Generate a unique parameter value from your client for each request. The ClientToken parameter supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: Performs a dry run. The system checks for required parameters, the request format, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): Sends a normal request. After the request passes the check, the stream classification rule is added to the traffic marking policy.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the traffic marking policy.
   * 
   * This parameter is required.
   * 
   * @example
   * tm-u9nxup5kww5po8****
   */
  trafficMarkingPolicyId?: string;
  /**
   * @remarks
   * The description of the stream classification rule.
   * 
   * The description can be empty or 1 to 256 characters in length. The description cannot start with http\\:// or https\\://.
   * 
   * @example
   * descriptiontest
   */
  trafficMatchRuleDescription?: string;
  /**
   * @remarks
   * The ID of the stream classification rule.
   * 
   * This parameter is required.
   * 
   * @example
   * tm-rule-fa9kgq1e90rmhc****
   */
  trafficMatchRuleId?: string;
  /**
   * @remarks
   * The name of the stream classification rule.
   * 
   * The name can be empty or 1 to 128 characters in length. The name cannot start with http\\:// or https\\://.
   * 
   * @example
   * nametest
   */
  trafficMatchRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trafficMarkingPolicyId: 'TrafficMarkingPolicyId',
      trafficMatchRuleDescription: 'TrafficMatchRuleDescription',
      trafficMatchRuleId: 'TrafficMatchRuleId',
      trafficMatchRuleName: 'TrafficMatchRuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trafficMarkingPolicyId: 'string',
      trafficMatchRuleDescription: 'string',
      trafficMatchRuleId: 'string',
      trafficMatchRuleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

