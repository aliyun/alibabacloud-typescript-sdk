// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCollectionRequest extends $dara.Model {
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
   * The name of the namespace.
   * 
   * >  You can call the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) operation to query a list of namespaces.
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
   * The ID of the workspace that consists of multiple AnalyticDB for PostgreSQL instances. You must specify one of the WorkspaceId and DBInstanceId parameters. If you specify both parameters, the WorkspaceId parameter takes effect.
   * 
   * @example
   * gp-ws-*****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
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

