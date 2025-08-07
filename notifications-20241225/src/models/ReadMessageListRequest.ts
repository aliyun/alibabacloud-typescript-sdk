// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadMessageListRequest extends $dara.Model {
  /**
   * @remarks
   * 语言，默认为简体中文
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * 系统参数，无需填写
   * 
   * @example
   * /
   */
  appName?: string;
  /**
   * @remarks
   * 系统参数，无需填写
   * 
   * @example
   * /
   */
  bizName?: string;
  /**
   * @remarks
   * 系统参数，无需填写
   * 
   * @example
   * /
   */
  callerProtocol?: string;
  /**
   * @remarks
   * 消息类目ID
   * 
   * @example
   * 1
   */
  classId?: number;
  /**
   * @remarks
   * 系统参数，无需填写
   * 
   * @example
   * /
   */
  clientSource?: string;
  /**
   * @remarks
   * 消息内容，用于模糊搜索
   * 
   * @example
   * "消息内容示例“
   */
  content?: string;
  /**
   * @remarks
   * 系统参数，无需填写
   * 
   * @example
   * /
   */
  cookies?: string;
  /**
   * @remarks
   * 栏位 nav代表控制台topbar
   * 
   * @example
   * /
   */
  loc?: string;
  /**
   * @remarks
   * 系统参数，无需填写
   * 
   * @example
   * /
   */
  maxResults?: number;
  /**
   * @remarks
   * 系统参数，无需填写
   * 
   * @example
   * /
   */
  nextToken?: string;
  /**
   * @remarks
   * 分页查询页码
   * 
   * @example
   * 2
   */
  page?: number;
  /**
   * @remarks
   * 分页查询大小
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * 系统参数，无需填写
   * 
   * @example
   * /
   */
  srcUrl?: string;
  /**
   * @remarks
   * 消息状态，已读为1，未读为0
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * 系统参数，无需填写
   * 
   * @example
   * /
   */
  tenantCode?: string;
  /**
   * @remarks
   * 消息标题，用于模糊搜索
   * 
   * @example
   * "标题示例“
   */
  title?: string;
  /**
   * @remarks
   * 系统参数，无需填写
   * 
   * @example
   * /
   */
  uidType?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appName: 'AppName',
      bizName: 'BizName',
      callerProtocol: 'CallerProtocol',
      classId: 'ClassId',
      clientSource: 'ClientSource',
      content: 'Content',
      cookies: 'Cookies',
      loc: 'Loc',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      page: 'Page',
      pageSize: 'PageSize',
      srcUrl: 'SrcUrl',
      status: 'Status',
      tenantCode: 'TenantCode',
      title: 'Title',
      uidType: 'UidType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appName: 'string',
      bizName: 'string',
      callerProtocol: 'string',
      classId: 'number',
      clientSource: 'string',
      content: 'string',
      cookies: 'string',
      loc: 'string',
      maxResults: 'number',
      nextToken: 'string',
      page: 'number',
      pageSize: 'number',
      srcUrl: 'string',
      status: 'number',
      tenantCode: 'string',
      title: 'string',
      uidType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

