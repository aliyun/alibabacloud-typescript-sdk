// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantCollectionRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the collection.
   * 
   * >  You can call the [CreateCollection](https://help.aliyun.com/document_detail/2401497.html) operation to create a vector collection and call the [ListCollections](https://help.aliyun.com/document_detail/2401503.html) operation to query a list of vector collections.
   * 
   * This parameter is required.
   * 
   * @example
   * document
   */
  collection?: string;
  /**
   * @remarks
   * The ID of the instance in reserved storage mode.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the information about all AnalyticDB for PostgreSQL instances within a region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the namespace to which you want to grant the vector collection permissions.
   * 
   * This parameter is required.
   * 
   * @example
   * othernamespace
   */
  grantToNamespace?: string;
  /**
   * @remarks
   * The type of the permissions that you want to grant. Valid values:
   * 
   * *   rw: the read and write permissions.
   * *   ro: the read-only permission.
   * *   none: the delete permission.
   * 
   * This parameter is required.
   * 
   * @example
   * rw
   */
  grantType?: string;
  /**
   * @remarks
   * The name of the manager account that has the rds_superuser permission.
   * 
   * >  You can create an account on the Account Management page of the AnalyticDB for PostgreSQL console or by calling the [CreateAccount](https://help.aliyun.com/document_detail/2361789.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * testaccount
   */
  managerAccount?: string;
  /**
   * @remarks
   * The password of the manager account.
   * 
   * This parameter is required.
   * 
   * @example
   * testpassword
   */
  managerAccountPassword?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * >  You can call the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) operation to query a list of namespaces.
   * 
   * @example
   * mynamespace
   */
  namespace?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      grantToNamespace: 'GrantToNamespace',
      grantType: 'GrantType',
      managerAccount: 'ManagerAccount',
      managerAccountPassword: 'ManagerAccountPassword',
      namespace: 'Namespace',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      DBInstanceId: 'string',
      grantToNamespace: 'string',
      grantType: 'string',
      managerAccount: 'string',
      managerAccountPassword: 'string',
      namespace: 'string',
      ownerId: 'number',
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

