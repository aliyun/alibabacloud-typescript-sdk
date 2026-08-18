// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Catalog extends $dara.Model {
  /**
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @example
   * 1722073854000
   */
  createTime?: number;
  /**
   * @example
   * dlf-catalog:123456XXX:test_catalog
   * starrocks-catalog:c-abc123xxx:default_catalog
   */
  id?: string;
  /**
   * @example
   * 1722073854000
   */
  modifyTime?: number;
  /**
   * @example
   * default_catalog
   */
  name?: string;
  /**
   * @example
   * dlf
   * starrocks:c-abc123xxx
   */
  parentMetaEntityId?: string;
  /**
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

