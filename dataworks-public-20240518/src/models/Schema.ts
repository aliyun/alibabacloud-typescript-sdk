// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Schema extends $dara.Model {
  /**
   * @remarks
   * 注释。
   * 
   * @example
   * test comment
   */
  comment?: string;
  /**
   * @remarks
   * 创建时间（毫秒级时间戳）。
   * 
   * @example
   * 1736852168000
   */
  createTime?: number;
  /**
   * @remarks
   * ID，可参考[元数据实体相关概念说明](https://help.aliyun.com/document_detail/2880092.html)。
   * 
   * 格式为`${EntityType}:${实例ID或转义后的URL}:${数据目录名称}:${数据库名称}:${模式名称}`，对于不存在的层级置空。
   * 
   * > 对于MaxCompute类型，此处的实例ID即为主账号ID，数据库名称即为MaxCompute项目名称。
   * 
   * @example
   * maxcompute-schema:123456XXX::test_project:default
   * holo-schema:h-abc123xxx::test_db:test_schema
   */
  id?: string;
  /**
   * @remarks
   * 更新时间（毫秒级时间戳）。
   * 
   * @example
   * 1736852168000
   */
  modifyTime?: number;
  /**
   * @remarks
   * 名称。
   * 
   * @example
   * test_db
   */
  name?: string;
  /**
   * @remarks
   * 父层级元数据实体ID，父层级实体类型取值参考ListCrawlerTypes接口。
   * 
   * 格式为`${EntityType}:${实例ID或转义后的URL}:${数据目录名称}:${数据库名称}`，对于不存在的层级置空。
   * 
   * > 对于MaxCompute类型，此处的实例ID即为主账号ID，数据库名称即为MaxCompute项目名称。
   * 
   * @example
   * maxcompute-project:123456XXX::test_project
   * holo-database:h-abc123xxx::test_db
   */
  parentMetaEntityId?: string;
  /**
   * @remarks
   * 类型。
   * 
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

