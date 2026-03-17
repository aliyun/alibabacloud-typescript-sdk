// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantSagInstanceToCcnRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the CCN instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ccn-n2935s1mnwv8i*****
   */
  ccnInstanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the CCN instance belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 1210123456123456
   */
  ccnUid?: number;
  /**
   * @remarks
   * Specifies whether to grant the CCN instance permissions to manage network traffic from the SAG instance.
   * 
   * After the CCN instance is granted the permissions, the CCN instance can redirect the network traffic sent from the SAG instance to the Internet to Cloud Security Access Service (CSAS) for security audit.
   * 
   * *   **true**: grants permissions.
   * *   **false**: does not grant permissions.
   * 
   * >  If you set the value to true and the SAG instance connected to the CCN instance has the secure rerouting feature enabled, you cannot revoke the permissions.
   * 
   * @example
   * true
   */
  grantTrafficService?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the SAG instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the SAG instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-tzirqx07bvcngm****
   */
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      ccnInstanceId: 'CcnInstanceId',
      ccnUid: 'CcnUid',
      grantTrafficService: 'GrantTrafficService',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccnInstanceId: 'string',
      ccnUid: 'number',
      grantTrafficService: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

