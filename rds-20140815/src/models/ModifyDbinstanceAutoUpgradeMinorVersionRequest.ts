// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceAutoUpgradeMinorVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The minor version upgrade method for the instance. Valid values:
   * * **Auto**: Automatically upgrades the minor version.
   * * **Manual**: Does not automatically upgrade the minor version. The minor version is forcibly upgraded only when the current version is retired.
   * 
   * This parameter is required.
   * 
   * @example
   * Auto
   */
  autoUpgradeMinorVersion?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can be up to 64 characters in length and cannot contain non-ASCII characters.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      autoUpgradeMinorVersion: 'AutoUpgradeMinorVersion',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpgradeMinorVersion: 'string',
      clientToken: 'string',
      DBInstanceId: 'string',
      ownerId: 'number',
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

