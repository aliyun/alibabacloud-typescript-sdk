// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Catalog extends $dara.Model {
  /**
   * @remarks
   * The comment.
   * 
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1722073854000
   */
  createTime?: number;
  /**
   * @remarks
   * ID
   * 
   * @example
   * dlf-catalog:123456XXX:test_catalog
   * starrocks-catalog:c-abc123xxx:default_catalog
   */
  id?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1722073854000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * default_catalog
   */
  name?: string;
  /**
   * @remarks
   * The ID of the parent entity.
   * 
   * @example
   * dlf
   * starrocks:c-abc123xxx
   */
  parentMetaEntityId?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * Internal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      createTime: 'CreateTime',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      parentMetaEntityId: 'ParentMetaEntityId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      createTime: 'number',
      id: 'string',
      modifyTime: 'number',
      name: 'string',
      parentMetaEntityId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

