// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateTrafficMarkingPolicyAttributeRequestAddTrafficMatchRules } from "./UpdateTrafficMarkingPolicyAttributeRequestAddTrafficMatchRules";
import { UpdateTrafficMarkingPolicyAttributeRequestDeleteTrafficMatchRules } from "./UpdateTrafficMarkingPolicyAttributeRequestDeleteTrafficMatchRules";


export class UpdateTrafficMarkingPolicyAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The traffic classification rules to be added to the traffic marking policy.
   * 
   * You can add at most 50 traffic classification rules in each call.
   */
  addTrafficMatchRules?: UpdateTrafficMarkingPolicyAttributeRequestAddTrafficMatchRules[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426****
   */
  clientToken?: string;
  /**
   * @remarks
   * The traffic classification rules to be deleted from the traffic marking policy.
   * 
   * >  Specify detailed information about the traffic classification rule, such as the source CIDR block, destination CIDR block, source port, destination port, and DSCP value. If you do not specify sufficient information, the system may fail to match the traffic classification rule that you want to delete.
   */
  deleteTrafficMatchRules?: UpdateTrafficMarkingPolicyAttributeRequestDeleteTrafficMatchRules[];
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * *   **true**: preforms a dry run. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and sends the request.
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
   * The new description of the traffic marking policy.
   * 
   * The description must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The description must start with a letter.
   * 
   * @example
   * desctest
   */
  trafficMarkingPolicyDescription?: string;
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
   * The new name of the traffic marking policy.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). It must start with a letter.
   * 
   * @example
   * nametest
   */
  trafficMarkingPolicyName?: string;
  static names(): { [key: string]: string } {
    return {
      addTrafficMatchRules: 'AddTrafficMatchRules',
      clientToken: 'ClientToken',
      deleteTrafficMatchRules: 'DeleteTrafficMatchRules',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trafficMarkingPolicyDescription: 'TrafficMarkingPolicyDescription',
      trafficMarkingPolicyId: 'TrafficMarkingPolicyId',
      trafficMarkingPolicyName: 'TrafficMarkingPolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTrafficMatchRules: { 'type': 'array', 'itemType': UpdateTrafficMarkingPolicyAttributeRequestAddTrafficMatchRules },
      clientToken: 'string',
      deleteTrafficMatchRules: { 'type': 'array', 'itemType': UpdateTrafficMarkingPolicyAttributeRequestDeleteTrafficMatchRules },
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trafficMarkingPolicyDescription: 'string',
      trafficMarkingPolicyId: 'string',
      trafficMarkingPolicyName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addTrafficMatchRules)) {
      $dara.Model.validateArray(this.addTrafficMatchRules);
    }
    if(Array.isArray(this.deleteTrafficMatchRules)) {
      $dara.Model.validateArray(this.deleteTrafficMatchRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

