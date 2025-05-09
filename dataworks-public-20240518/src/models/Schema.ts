// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Schema extends $dara.Model {
  /**
   * @example
   * test comment
   */
  comment?: string;
  /**
   * @example
   * 1736852168000
   */
  createTime?: number;
  /**
   * @example
   * maxcompute-schema:123456::test_project:default
   */
  id?: string;
  /**
   * @example
   * 1736852168000
   */
  modifyTime?: number;
  /**
   * @example
   * test_db
   */
  name?: string;
  /**
   * @example
   * maxcompute-project:123456::test_project
   */
  parentMetaEntityId?: string;
  /**
   * @example
   * MANAGED
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

