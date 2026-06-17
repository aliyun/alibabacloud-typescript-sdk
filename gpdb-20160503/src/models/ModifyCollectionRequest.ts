// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCollectionRequest extends $dara.Model {
  /**
   * @remarks
   * The collection name.
   * 
   * > You can call the [ListCollections](https://help.aliyun.com/document_detail/2401503.html) operation to list all collections.
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
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query details for all AnalyticDB for PostgreSQL instances in a region, including their instance IDs.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * A JSON string that specifies the operations to add or modify metadata fields. For the required format, see the example.
   * 
   * Use this parameter to add new metadata fields, rename existing metadata fields, or perform implicit data type conversion on existing fields.
   * 
   * Details:
   * 
   * To add a new metadata field, set `operations[*].operator = add`. Then, use `operations[*].newMetaName` to specify the field\\"s name, `operations[*].newMetaType` for its data type, and `operations[*].fullTextRetrieval` to enable full-text retrieval for it.
   * 
   * To modify an existing metadata field, set `operations[*].operator = replace`. You must specify the current field name in `operations[*].oldMetaName`. To rename the field, provide the new name in `operations[*].newMetaName`. To change its data type, provide the new type in `operations[*].newMetaType`.
   * 
   * > - For a list of supported data types, see [Data types](https://help.aliyun.com/document_detail/424383.html). The money data type is not supported.
   * >
   * > - Full-text retrieval can be enabled for a field only during an `add` operation, not a `replace` operation.
   * 
   * >Warning: 
   * 
   * The field names `id`, `vector`, `to_tsvector`, and `source` are reserved.
   * 
   * This parameter is required.
   * 
   * @example
   * {"operations":[
   * {"operator":"add","newMetaType":"int","newMetaName":"ext1","fullTextRetrieval":true},
   * {"operator":"replace","oldMetaName":"ext2","newMetaName":"ext3"},
   * {"operator":"replace","newMetaType":"bigint","oldMetaName":"ext4"},
   * {"operator":"replace","newMetaType":"int","oldMetaName":"ext5","newMetaName":"ext6"}
   * ]}
   */
  metadata?: string;
  /**
   * @remarks
   * The namespace. The default value is `public`.
   * 
   * > You can call the CreateNamespace operation to create a namespace and the ListNamespaces operation to list existing namespaces.
   * 
   * @example
   * mynamespace
   */
  namespace?: string;
  /**
   * @remarks
   * The password for the namespace.
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
   * The ID of the workspace that contains multiple database instances. You must specify either this parameter or `DBInstanceId`. If you specify both, this parameter takes precedence.
   * 
   * @example
   * gp-ws-*****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      metadata: 'Metadata',
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
      metadata: 'string',
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

