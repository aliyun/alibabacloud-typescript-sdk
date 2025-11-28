// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIndexRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the collection.
   * 
   * > You can call the [ListCollections](https://help.aliyun.com/document_detail/2401503.html) operation to query a list of collections.
   * 
   * This parameter is required.
   * 
   * @example
   * testcollection
   */
  collection?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the IDs of all AnalyticDB for PostgreSQL instances in the specified region.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The index parameter. If you do not specify this parameter, a B-tree index is created.
   * 
   * > 
   * 
   * *   b-tree: To create a B-tree index, set the fillFactor parameter to a value between 10 and 100. Default value: 90.
   * 
   * *   gin: To create a GIN index, set the fastUpdate parameter to true or false. Default value: true.
   */
  indexConfig?: string;
  /**
   * @remarks
   * The index field. Only a single field is supported, and it must be a key defined in metadata.
   * 
   * @example
   * title
   */
  indexField?: string;
  /**
   * @remarks
   * The name of the index.
   * 
   * @example
   * testindex
   */
  indexName?: string;
  /**
   * @remarks
   * The namespace name.
   * 
   * > You can call the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) operation to query a list of namespaces.
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
   * > The value of this parameter is specified by the CreateNamespace operation.
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
   * The ID of the workspace that consists of multiple AnalyticDB for PostgreSQL instances. This parameter and DBInstanceId cannot both be empty. If both parameters are specified, this value takes precedence.
   * 
   * Valid values:
   * 
   * *   ip
   * *   l2
   * *   cosine
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

