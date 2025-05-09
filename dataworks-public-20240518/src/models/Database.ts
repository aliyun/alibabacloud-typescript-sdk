// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Database extends $dara.Model {
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
   * holo-database:h-xxxx::test_db
   */
  id?: string;
  /**
   * @example
   * oss://test-bucket/test_db
   */
  locationUri?: string;
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
   * holo:h-xxxx
   */
  parentMetaEntityId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      createTime: 'CreateTime',
      id: 'Id',
      locationUri: 'LocationUri',
      modifyTime: 'ModifyTime',
      name: 'Name',
      parentMetaEntityId: 'ParentMetaEntityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      createTime: 'number',
      id: 'string',
      locationUri: 'string',
      modifyTime: 'number',
      name: 'string',
      parentMetaEntityId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

