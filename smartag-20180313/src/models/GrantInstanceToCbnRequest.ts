// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantInstanceToCbnRequest extends $dara.Model {
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
   * The ID of the CEN instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-7qthudw0ll6jm*****
   */
  cenInstanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the CEN instance belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 1250123456123456
   */
  cenUid?: number;
  /**
   * @remarks
   * Specifies whether to grant the CEN instance permissions to manage network traffic from the CCN instance. Valid values:
   * 
   * *   **true**: grants permissions.
   * *   **false**: does not grant permissions. This is the default value.
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
   * The ID of the region where the CCN instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/69813.htmll) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ccnInstanceId: 'CcnInstanceId',
      cenInstanceId: 'CenInstanceId',
      cenUid: 'CenUid',
      grantTrafficService: 'GrantTrafficService',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccnInstanceId: 'string',
      cenInstanceId: 'string',
      cenUid: 'number',
      grantTrafficService: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

