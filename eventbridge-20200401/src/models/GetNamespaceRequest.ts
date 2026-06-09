// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNamespaceRequest extends $dara.Model {
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
   * 用于保证请求幂等性的Token。建议使用 UUID
   * 
   * @example
   * 1e9b8f60-3a2c-4d7e-9f1b-8c3d5e7a2b4f
   */
  clientToken?: string;
  /**
   * @remarks
   * 要查询的命名空间名称。需同时指定所属 Catalog。可通过 ListNamespaces 获取已有命名空间列表
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
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      clientToken: 'string',
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

