// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTrafficMarkingPolicyRequestTrafficMatchRules } from "./CreateTrafficMarkingPolicyRequestTrafficMatchRules";


export class CreateTrafficMarkingPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among all requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** for each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * *   **true**: performs a dry run. The system checks the required parameters, request format, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and sends the request.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The differentiated services code point (DSCP) value to be added to packets that match the traffic classification rule. Valid values: **0** to **63**.
   * 
   * The DSCP value of each traffic marking policy on a transit router must be unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  markingDscp?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The priority value of the traffic marking policy. Valid values: **1** to **100**.
   * 
   * The priority value of each traffic marking policy on a transit router must be unique. A smaller value specifies a higher priority.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  priority?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The description of the traffic marking policy.
   * 
   * This parameter is optional. If you enter a description, it must be 1 to 256 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * desctest
   */
  trafficMarkingPolicyDescription?: string;
  /**
   * @remarks
   * The name of the traffic marking policy.
   * 
   * The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * nametest
   */
  trafficMarkingPolicyName?: string;
  /**
   * @remarks
   * The traffic classification rules in the traffic marking policy.
   * 
   * Data packets that meet the traffic classification rule is assigned the DSCP value of quality of service (QoS) policy.
   * 
   * You can create up to 50 traffic classification rules.
   */
  trafficMatchRules?: CreateTrafficMarkingPolicyRequestTrafficMatchRules[];
  /**
   * @remarks
   * The ID of the transit router.
   * 
   * This parameter is required.
   * 
   * @example
   * tr-8vbuqeo5h5pu3m01d****
   */
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      markingDscp: 'MarkingDscp',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      priority: 'Priority',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trafficMarkingPolicyDescription: 'TrafficMarkingPolicyDescription',
      trafficMarkingPolicyName: 'TrafficMarkingPolicyName',
      trafficMatchRules: 'TrafficMatchRules',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      markingDscp: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      priority: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trafficMarkingPolicyDescription: 'string',
      trafficMarkingPolicyName: 'string',
      trafficMatchRules: { 'type': 'array', 'itemType': CreateTrafficMarkingPolicyRequestTrafficMatchRules },
      transitRouterId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.trafficMatchRules)) {
      $dara.Model.validateArray(this.trafficMatchRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

