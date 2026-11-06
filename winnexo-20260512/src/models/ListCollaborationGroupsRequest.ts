// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCollaborationGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * 空间名称搜索关键词，可选，最长256字符；不传或去除首尾空白后为空时不按名称过滤。
   * 
   * @example
   * 工作流
   */
  keyword?: string;
  /**
   * @remarks
   * 页码，从1开始；请求省略时默认为1。
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * 每页记录数，取值1至100；请求省略时默认为20。
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * 业务租户ID，可选。必须属于当前调用身份的可访问租户；无权访问时拒绝请求。未传时按现有鉴权规则解析租户，多租户用户无法唯一确定时需显式指定。
   * 
   * @example
   * 10001
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      page: 'page',
      pageSize: 'pageSize',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

