// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCollectionDataRequest extends $dara.Model {
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
   * The data fields and values to delete. The value is a JSON string in dictionary format, where the key is the field name and the value is a list of data values to delete.
   * 
   * @example
   * {"title":["a","b"]}
   */
  collectionData?: string;
  /**
   * @remarks
   * The filter condition for the data to delete. The format is SQL WHERE syntax.
   * 
   * @example
   * a < 10
   */
  collectionDataFilter?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to view the IDs of all AnalyticDB for PostgreSQL instances in the target region.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
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
   * The region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to view the available region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the workspace that consists of multiple database instances. This parameter and the DBInstanceId parameter cannot be empty at the same time. If both parameters are specified, this parameter takes precedence.
   * 
   * @example
   * gp-ws-*****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      collectionData: 'CollectionData',
      collectionDataFilter: 'CollectionDataFilter',
      DBInstanceId: 'DBInstanceId',
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
      collectionData: 'string',
      collectionDataFilter: 'string',
      DBInstanceId: 'string',
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

