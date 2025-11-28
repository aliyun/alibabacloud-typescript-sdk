// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCollectionRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the collection.
   * 
   * >  You can call the [ListCollections](https://help.aliyun.com/document_detail/2401503.html) operation to query a list of collections.
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
   * >  You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the information about all AnalyticDB for PostgreSQL instances within a region, including instance IDs.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The metadata of the addition or modification operation, which is in the JSON string format.
   * 
   * You can specify this parameter to add a metadata definition, or rename an existing metadata definition and perform implicit type conversion.
   * 
   * If you specify `operations[*].operator = add` to add a metadata definition, `operations[*].newMetaName` specifies the name of the metadata definition, and `operations[*].newMetaType` specifies the data type of the metadata definition.
   * 
   * If you specify `operations[*].operator = replace` to modify an existing metadata definition, `operations[*].oldMetaName` specifies the current name of the metadata definition, `operations[*].newMetaName` specifies the new name of the metadata definition, and `operations[*].newMetaType` specifies the new data type of the metadata definition. If you only want to rename the metadata definition, you do not need to specify the `operations[*].newMetaType` field. If you only want to perform implicit type conversion, you do not need to specify the `operations[*].newMetaName` field.
   * 
   * > 
   * 
   * *   For information about the supported data types, see [Data types](https://help.aliyun.com/document_detail/424383.html).
   * 
   * *   The money data type is not supported.
   * 
   * **
   * 
   * **Warning**Reserved fields such as id, vector, to_tsvector, and source cannot be used.
   * 
   * This parameter is required.
   * 
   * @example
   * {"operations":[
   * {"operator":"add","newMetaType":"int","newMetaName":"ext1"},
   * {"operator":"replace","oldMetaName":"ext2","newMetaName":"ext3"},
   * {"operator":"replace","newMetaType":"bigint","oldMetaName":"ext4"},
   * {"operator":"replace","newMetaType":"int","oldMetaName":"ext5","newMetaName":"ext6"}
   * ]}
   */
  metadata?: string;
  /**
   * @remarks
   * The name of the namespace. Default value: public.
   * 
   * >  You can call the CreateNamespace operation to create a namespace and call the ListNamespaces operation to query a list of namespaces.
   * 
   * @example
   * mynamespace
   */
  namespace?: string;
  /**
   * @remarks
   * The password of the namespace.
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
   * The ID of the workspace that consists of multiple AnalyticDB for PostgreSQL instances. You must specify one of the WorkspaceId and DBInstanceId parameters. If you specify both parameters, the WorkspaceId parameter takes precedence.
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

