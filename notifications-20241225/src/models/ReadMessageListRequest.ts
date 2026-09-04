// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadMessageListRequest extends $dara.Model {
  /**
   * @remarks
   * The language. Default value: Simplified Chinese.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * A system parameter. You do not need to specify this parameter.
   * 
   * @example
   * /
   */
  appName?: string;
  /**
   * @remarks
   * A system parameter. You do not need to specify this parameter.
   * 
   * @example
   * /
   */
  bizName?: string;
  /**
   * @remarks
   * A system parameter. You do not need to specify this parameter.
   * 
   * @example
   * /
   */
  callerProtocol?: string;
  /**
   * @remarks
   * Deprecated.
   * 
   * @example
   * 1
   */
  classId?: number;
  /**
   * @remarks
   * A system parameter. You do not need to specify this parameter.
   * 
   * @example
   * /
   */
  clientSource?: string;
  /**
   * @remarks
   * The message content. This parameter is used for fuzzy match.
   * 
   * @example
   * "消息内容示例“
   */
  content?: string;
  /**
   * @remarks
   * A system parameter. You do not need to specify this parameter.
   * 
   * @example
   * /
   */
  cookies?: string;
  /**
   * @remarks
   * The group code.
   * 
   * @example
   * test
   */
  groupCode?: string;
  /**
   * @remarks
   * Specifies whether the messages are historical messages.
   * 
   * @example
   * true
   */
  history?: string;
  /**
   * @remarks
   * The location.
   * 
   * @example
   * nav
   */
  loc?: string;
  /**
   * @remarks
   * A system parameter. You do not need to specify this parameter.
   * 
   * @example
   * /
   */
  maxResults?: number;
  /**
   * @remarks
   * A system parameter. You do not need to specify this parameter.
   * 
   * @example
   * /
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number for the paged query.
   * 
   * @example
   * 2
   */
  page?: number;
  /**
   * @remarks
   * The page size for the paged query.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * A system parameter. You do not need to specify this parameter.
   * 
   * @example
   * /
   */
  srcUrl?: string;
  /**
   * @remarks
   * The message status. A value of 1 indicates read. A value of 0 indicates unread. A value of -1 indicates all. Default value: -1.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * A system parameter. You do not need to specify this parameter.
   * 
   * @example
   * /
   */
  tenantCode?: string;
  /**
   * @remarks
   * The message title. This parameter is used for fuzzy match.
   * 
   * @example
   * "标题示例“
   */
  title?: string;
  /**
   * @remarks
   * A system parameter. You do not need to specify this parameter.
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
      groupCode: 'GroupCode',
      history: 'History',
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
      groupCode: 'string',
      history: 'string',
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

