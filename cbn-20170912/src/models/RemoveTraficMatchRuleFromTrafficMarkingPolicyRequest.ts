// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveTraficMatchRuleFromTrafficMarkingPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run without deleting traffic classification rules from the traffic marking policy. The system checks the required parameters, request syntax, and business restrictions. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): performs a dry run and sends the request. After the request passes the dry run, traffic classification rules are deleted from the traffic marking policy.
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
   * The IDs of the traffic classification rules.
   */
  trafficMarkRuleIds?: string[];
  /**
   * @remarks
   * The ID of the traffic marking policy.
   * 
   * This parameter is required.
   * 
   * @example
   * tm-d33hdczo3qo8ta****
   */
  trafficMarkingPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trafficMarkRuleIds: 'TrafficMarkRuleIds',
      trafficMarkingPolicyId: 'TrafficMarkingPolicyId',
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
      trafficMarkRuleIds: { 'type': 'array', 'itemType': 'string' },
      trafficMarkingPolicyId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.trafficMarkRuleIds)) {
      $dara.Model.validateArray(this.trafficMarkRuleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

