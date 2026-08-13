// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatSessionsRequest extends $dara.Model {
  /**
   * @remarks
   * 数字员工名称筛选（逗号分隔，如 sales_agent,service_agent）
   * 
   * @example
   * string_value
   */
  digitalEmployeeName?: string;
  /**
   * @remarks
   * 标题模糊搜索
   * 
   * @example
   * 示例关键词
   */
  keyword?: string;
  /**
   * @remarks
   * 页码，从 1 开始
   */
  page?: number;
  pageSize?: number;
  /**
   * @remarks
   * 租户ID
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      digitalEmployeeName: 'digitalEmployeeName',
      keyword: 'keyword',
      page: 'page',
      pageSize: 'pageSize',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digitalEmployeeName: 'string',
      keyword: 'string',
      page: 'number',
      pageSize: 'number',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

