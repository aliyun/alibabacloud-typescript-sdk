// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteChunksRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  chunkIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testcollection
   */
  collection?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      chunkIds: 'ChunkIds',
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkIds: { 'type': 'array', 'itemType': 'string' },
      collection: 'string',
      DBInstanceId: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chunkIds)) {
      $dara.Model.validateArray(this.chunkIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

