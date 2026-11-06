// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCollaborationGroupMembersRequest extends $dara.Model {
  /**
   * @remarks
   * 协作空间ID，必填，长度1至64。调用者必须是该租户下该空间的有效成员。可从ListCollaborationGroups返回的items中获取。
   * 
   * This parameter is required.
   * 
   * @example
   * cg_9401
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * 成员显示名称搜索关键词，可选，最长256字符；忽略大小写，先筛选后分页。不传时查询全部有效成员。
   * 
   * @example
   * 销售
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
      collaborationGroupId: 'collaborationGroupId',
      keyword: 'keyword',
      page: 'page',
      pageSize: 'pageSize',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
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

