// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * 命名空间所属的数据目录名称。可通过 ListCatalogs 接口获取已有目录列表
   * 
   * @example
   * my_catalog
   */
  catalog?: string;
  /**
   * @remarks
   * 用于保证请求幂等性的Token
   * 
   * @example
   * 1e9b8f60-3a2c-4d7e-9f1b-8c3d5e7a2b4f
   */
  clientToken?: string;
  /**
   * @remarks
   * 命名空间的备注描述信息
   * 
   * @example
   * 测试命名空间
   */
  comment?: string;
  /**
   * @remarks
   * 命名空间名称，在同一数据目录下唯一。以字母或数字开头，支持字母、数字、下划线和短横线，长度1~127
   * 
   * This parameter is required.
   * 
   * @example
   * my_namespace
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      clientToken: 'ClientToken',
      comment: 'Comment',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      clientToken: 'string',
      comment: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

