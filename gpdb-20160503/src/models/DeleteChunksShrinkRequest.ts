// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteChunksShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  chunkIdsShrink?: string;
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
      chunkIdsShrink: 'ChunkIds',
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkIdsShrink: 'string',
      collection: 'string',
      DBInstanceId: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

