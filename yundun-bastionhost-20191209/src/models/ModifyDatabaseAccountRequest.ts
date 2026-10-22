// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDatabaseAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the database account to be modified.
   * > You can call the [ListDatabaseAccounts](https://help.aliyun.com/document_detail/2758839.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  databaseAccountId?: string;
  /**
   * @remarks
   * The new name of the database account. The name can be up to 128 characters in length.
   * 
   * @example
   * aaa
   */
  databaseAccountName?: string;
  /**
   * @remarks
   * The new database schema name. This parameter is required when the database specified by DatabaseId is a PostgreSQL or Oracle database.
   * 
   * @example
   * orcl
   */
  databaseSchema?: string;
  /**
   * @remarks
   * The instance ID of the Bastionhost instance where the database account to be modified resides.
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
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
   * The project ID.
   * 
   * @example
   * 3
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the Bastionhost instance where the database account to be modified resides.
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
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
      projectId: 'ProjectId',
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
      projectId: 'number',
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

