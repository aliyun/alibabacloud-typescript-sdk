// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatabaseAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The username of the database account to be created. The username can be up to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * root
   */
  databaseAccountName?: string;
  /**
   * @remarks
   * The ID of the database for which you want to create a database account.
   * 
   * >  You can call the [ListDatabaseAccounts](https://help.aliyun.com/document_detail/2758839.html) operation to query the database account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  databaseId?: string;
  /**
   * @remarks
   * The name of the database. This parameter is required for PostgreSQL and Oracle databases.
   * 
   * @example
   * orcl
   */
  databaseSchema?: string;
  /**
   * @remarks
   * The ID of the bastion host for which you want to create a database account.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the ID of the bastion host.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-5yd34ol020a
   */
  instanceId?: string;
  /**
   * @remarks
   * The logon attribute. This parameter is required for Oracle databases. Valid values:
   * 
   * *   SERVICENAME
   * *   SID
   * 
   * @example
   * SID
   */
  loginAttribute?: string;
  /**
   * @remarks
   * The password of the database account to be created.
   * 
   * @example
   * MCQ******
   */
  password?: string;
  /**
   * @remarks
   * The region ID of the bastion host for which you want to create a database account.
   * 
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccountName: 'DatabaseAccountName',
      databaseId: 'DatabaseId',
      databaseSchema: 'DatabaseSchema',
      instanceId: 'InstanceId',
      loginAttribute: 'LoginAttribute',
      password: 'Password',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccountName: 'string',
      databaseId: 'string',
      databaseSchema: 'string',
      instanceId: 'string',
      loginAttribute: 'string',
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

