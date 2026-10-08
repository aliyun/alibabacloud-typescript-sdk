// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceIPArrayListRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call DescribeDBInstances to obtain the instance ID.
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
   * * **Classic**: classic network in the enhanced whitelist mode.
   * * **VPC**: virtual private cloud (VPC) in the enhanced whitelist mode.
   * * **MIX**: general whitelist mode.
   * 
   * By default, the IP whitelist of all network types is returned.
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

