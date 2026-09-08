// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTrafficMarkingPolicyRequest extends $dara.Model {
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
   * - **true**: performs a dry run without deleting the traffic marking policy. The system checks the required parameters, request syntax, and business restrictions. If the request fails the dry run, an error message is returned. If the request passes the dry run, the DryRunOperation error code is returned.
   * - **false** (default): performs a dry run and sends the request. If the request passes the dry run, the traffic marking policy is deleted.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to force delete the traffic marking policy. Valid values:
   * - **false** (default): Before the traffic marking policy is deleted, the system checks whether traffic categorization rules exist. If traffic categorization rules exist, the traffic marking policy cannot be deleted and an error message is returned.
   * - **true**: When the traffic marking policy is deleted, all traffic categorization rules are also deleted.
   * 
   * @example
   * false
   */
  force?: boolean;
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
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      force: 'Force',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trafficMarkingPolicyId: 'TrafficMarkingPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      force: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trafficMarkingPolicyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

