// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCollectionDataMetadataRequest extends $dara.Model {
  /**
   * @remarks
   * Collection name.
   * 
   * > You can use the [ListCollections](https://help.aliyun.com/document_detail/2401503.html) API to view the list.
   * 
   * This parameter is required.
   * 
   * @example
   * document
   */
  collection?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) API to view details of all AnalyticDB for PostgreSQL instances in the target region, including the instance ID.
   * 
   * @example
   * gp-j788ghhjjxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Filter condition for the data to be updated, in SQL WHERE format. This field cannot be empty at the same time as the Ids field.
   * 
   * @example
   * business_value = \\"chat_file_1\\"
   */
  filter?: string;
  /**
   * @remarks
   * ID list of the data to be updated, i.e., the Row.Id specified when uploading the data. This field cannot be empty at the same time as the Filter field.
   */
  ids?: string[];
  /**
   * @remarks
   * Data to be updated, in a JSON string of MAP format. The key is the field name, and the value is the new data value.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *       "title": "new title",
   *       "content": "new content"
   * }
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * Namespace.
   * 
   * > You can use the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) API to view the list.
   * 
   * @example
   * mynamespace
   */
  namespace?: string;
  /**
   * @remarks
   * Password corresponding to the namespace.
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
   * Region ID where the instance is located.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * ID of the Workspace composed of multiple database instances. This parameter and the DBInstanceId parameter cannot both be empty. When both are specified, this parameter takes precedence.
   * 
   * @example
   * gp-ws-*****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      filter: 'Filter',
      ids: 'Ids',
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
      filter: 'string',
      ids: { 'type': 'array', 'itemType': 'string' },
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      regionId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

