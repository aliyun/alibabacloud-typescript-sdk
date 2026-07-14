// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIndexRequest extends $dara.Model {
  /**
   * @remarks
   * The collection name.
   * 
   * > You can call the [ListCollections](https://help.aliyun.com/document_detail/2401503.html) operation to query the list.
   * 
   * This parameter is required.
   * 
   * @example
   * testcollection
   */
  collection?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the IDs of all AnalyticDB for PostgreSQL instances in a region.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The index parameters. If this parameter is not specified, a B-tree index is created by default.
   * 
   * > 
   * >- b-tree: The fillFactor parameter. Valid values: 10 to 100. Default value: 90.
   * >- gin: The fastUpdate parameter. Valid values: true and false. Default value: true.
   * 
   * @example
   * {"b-tree":{"fillFactor":90}} or {"gin":{"fastUpdate":false}}
   */
  indexConfig?: string;
  /**
   * @remarks
   * The index field. Only a single field is supported, and the field must be a key defined in Metadata.
   * 
   * @example
   * title
   */
  indexField?: string;
  /**
   * @remarks
   * The index name.
   * 
   * @example
   * testindex
   */
  indexName?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * > You can call the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) operation to query the list.
   * 
   * This parameter is required.
   * 
   * @example
   * mynamespace
   */
  namespace?: string;
  /**
   * @remarks
   * The password of the namespace.
   * 
   * > This value is specified by the CreateNamespace operation.
   * 
   * This parameter is required.
   * 
   * @example
   * testpassword
   */
  namespacePassword?: string;
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
   * The ID of the workspace that consists of multiple database instances. This parameter and DBInstanceId cannot both be empty. If both this parameter and DBInstanceId are specified, this parameter takes precedence.
   * 
   * @example
   * gp-ws-*****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      indexConfig: 'IndexConfig',
      indexField: 'IndexField',
      indexName: 'IndexName',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      DBInstanceId: 'string',
      indexConfig: 'string',
      indexField: 'string',
      indexName: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      regionId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

