// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVectorIndexRequest extends $dara.Model {
  /**
   * @remarks
   * The collection name.
   * 
   * > You can call the [ListCollections](https://help.aliyun.com/document_detail/2401503.html) operation to view the list.
   * 
   * This parameter is required.
   * 
   * @example
   * document
   */
  collection?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to view the details of all AnalyticDB for PostgreSQL instances in the specified region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp152460513z****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the management account that has the rds_superuser permission.
   * 
   * > You can create an account on the **Accounts** page in the console or by calling the [CreateAccount](https://help.aliyun.com/document_detail/2361789.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * testaccount
   */
  managerAccount?: string;
  /**
   * @remarks
   * The password of the management account.
   * 
   * This parameter is required.
   * 
   * @example
   * testpassword
   */
  managerAccountPassword?: string;
  /**
   * @remarks
   * The namespace. Default value: public.
   * 
   * > You can call the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) operation to view the list.
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
  /**
   * @remarks
   * The vector type. Valid values:
   * - Dense: dense vector. This is the default value.
   * - Sparse: sparse vector.
   * 
   * @example
   * Dense
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      managerAccount: 'ManagerAccount',
      managerAccountPassword: 'ManagerAccountPassword',
      namespace: 'Namespace',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      DBInstanceId: 'string',
      managerAccount: 'string',
      managerAccountPassword: 'string',
      namespace: 'string',
      ownerId: 'number',
      regionId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

