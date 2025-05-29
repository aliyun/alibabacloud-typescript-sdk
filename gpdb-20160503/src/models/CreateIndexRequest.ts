// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIndexRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testcollection
   */
  collection?: string;
  /**
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  indexConfig?: string;
  /**
   * @example
   * title
   */
  indexField?: string;
  /**
   * @example
   * testindex
   */
  indexName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mynamespace
   */
  namespace?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testpassword
   */
  namespacePassword?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
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

