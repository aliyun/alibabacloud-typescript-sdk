// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDatabaseAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the database account to modify.
   * 
   * >  You can call the [ListDatabaseAccounts](https://help.aliyun.com/document_detail/2758839.html) operation to query the database account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  databaseAccountId?: string;
  /**
   * @remarks
   * The new username of the database account. The username can be up to 128 characters in length.
   * 
   * @example
   * aaa
   */
  databaseAccountName?: string;
  /**
   * @remarks
   * The new name of the database. This parameter is required if the database engine is PostgreSQL or Oracle.
   * 
   * @example
   * orcl
   */
  databaseSchema?: string;
  /**
   * @remarks
   * The ID of the bastion host that manages the database account to modify.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the bastion host ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-zpr2zyqx603
   */
  instanceId?: string;
  /**
   * @remarks
   * The new password of the database account.
   * 
   * @example
   * 14SZ!******
   */
  password?: string;
  /**
   * @remarks
   * The region ID of the bastion host that manages the database account to modify.
   * 
   * >  For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccountId: 'DatabaseAccountId',
      databaseAccountName: 'DatabaseAccountName',
      databaseSchema: 'DatabaseSchema',
      instanceId: 'InstanceId',
      password: 'Password',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccountId: 'string',
      databaseAccountName: 'string',
      databaseSchema: 'string',
      instanceId: 'string',
      password: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

