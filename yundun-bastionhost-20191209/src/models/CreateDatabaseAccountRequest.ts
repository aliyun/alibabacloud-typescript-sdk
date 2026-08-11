// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatabaseAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database account to create. The name can be up to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * root
   */
  databaseAccountName?: string;
  /**
   * @remarks
   * The instance ID of the database for which you want to create an account.
   * > You can invoke the [ListDatabaseAccounts](https://help.aliyun.com/document_detail/2758839.html) operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  databaseId?: string;
  /**
   * @remarks
   * The database name. This parameter is required when the database corresponding to DatabaseId is PostgreSQL or Oracle.
   * 
   * @example
   * orcl
   */
  databaseSchema?: string;
  /**
   * @remarks
   * The ID of the bastion host instance for which you want to create a database account.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query this parameter.
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
   * - SERVICENAME
   * - SID
   * 
   * @example
   * SID
   */
  loginAttribute?: string;
  /**
   * @remarks
   * The password of the database account to create.
   * 
   * @example
   * MCQ******
   */
  password?: string;
  /**
   * @remarks
   * The project ID.
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the bastion host for which you want to create a database account.
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
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
      projectId: 'ProjectId',
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

