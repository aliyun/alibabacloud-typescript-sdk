// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomTextResponseBodyData extends $dara.Model {
  /**
   * @example
   * 内容
   */
  content?: string;
  /**
   * @example
   * 创建时间
   */
  createTime?: string;
  /**
   * @example
   * 创建用户
   */
  createUser?: string;
  /**
   * @example
   * 40
   */
  id?: number;
  /**
   * @example
   * 标题
   */
  title?: string;
  /**
   * @example
   * 修改时间
   */
  updateTime?: string;
  /**
   * @example
   * 修改用户
   */
  updateUser?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      id: 'Id',
      title: 'Title',
      updateTime: 'UpdateTime',
      updateUser: 'UpdateUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      createUser: 'string',
      id: 'number',
      title: 'string',
      updateTime: 'string',
      updateUser: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

