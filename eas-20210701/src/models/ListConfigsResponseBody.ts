// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConfigsResponseBodyConfigs extends $dara.Model {
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * 2024-01-01T10:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * 配置项键名
   * 
   * @example
   * rate_limit
   */
  key?: string;
  /**
   * @remarks
   * 更新时间
   * 
   * @example
   * 2024-01-01T10:00:00Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * 配置值
   * 
   * @example
   * 100
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      key: 'Key',
      updatedAt: 'UpdatedAt',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      key: 'string',
      updatedAt: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * 配置项列表
   * 
   * @example
   * [{"Key": "rate_limit", "Value": "{\\"limit\\": 100}", "CreatedAt": "2024-01-15T10:30:00Z", "UpdatedAt": "2024-01-15T10:30:00Z"}]
   */
  configs?: ListConfigsResponseBodyConfigs[];
  /**
   * @remarks
   * 是否有更多数据
   * 
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @remarks
   * 服务名称
   * 
   * @example
   * my-service
   */
  name?: string;
  /**
   * @remarks
   * 当前页码
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * 每页数量
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * 总数量
   * 
   * @example
   * 150
   */
  total?: number;
  /**
   * @remarks
   * 配置类型
   * 
   * @example
   * Service
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      hasMore: 'HasMore',
      name: 'Name',
      page: 'Page',
      pageSize: 'PageSize',
      total: 'Total',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': ListConfigsResponseBodyConfigs },
      hasMore: 'boolean',
      name: 'string',
      page: 'number',
      pageSize: 'number',
      total: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

