// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceIPArrayListRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the instance. You can call the DescribeDBInstances operation to query instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The network type of the whitelist. Valid values:
   * * **Classic**: the classic network in enhanced whitelist mode
   * * **VPC**: the VPC in enhanced whitelist mode
   * * **MIX**: the standard whitelist mode
   * 
   * By default, the IP addresses in the whitelists of all network types are returned.
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

