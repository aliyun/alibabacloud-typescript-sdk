// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceIPArrayListRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The network type of the IP address whitelist. Valid values:
   * 
   * *   **Classic**: classic network in enhanced whitelist mode
   * *   **VPC**: virtual private cloud (VPC) in enhanced whitelist mode
   * *   **MIX**: standard whitelist mode
   * 
   * By default, this operation returns IP address whitelists of all network types.
   * 
   * @example
   * VPC
   */
  whitelistNetworkType?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      whitelistNetworkType: 'WhitelistNetworkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerAccount: 'string',
      resourceOwnerId: 'number',
      whitelistNetworkType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

