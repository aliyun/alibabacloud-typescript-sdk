// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNamespaceRequest extends $dara.Model {
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
   * 用于保证请求幂等性的Token，防止因网络重试导致重复操作。建议使用 UUID
   * 
   * @example
   * 1e9b8f60-3a2c-4d7e-9f1b-8c3d5e7a2b4f
   */
  clientToken?: string;
  /**
   * @remarks
   * 命名空间的备注描述信息。传空字符串可清除原有备注，无格式限制
   * 
   * @example
   * 更新后的备注
   */
  comment?: string;
  /**
   * @remarks
   * 要修改的命名空间名称。名称本身不可修改，此处用于定位目标命名空间。需同时指定所属 Catalog。可通过 ListNamespaces 获取
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

