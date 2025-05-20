// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadMessageListRequest extends $dara.Model {
  acceptLanguage?: string;
  appName?: string;
  bizName?: string;
  callerProtocol?: string;
  classId?: number;
  clientSource?: string;
  content?: string;
  cookies?: string;
  loc?: string;
  maxResults?: number;
  nextToken?: string;
  page?: number;
  pageSize?: number;
  srcUrl?: string;
  status?: number;
  tenantCode?: string;
  title?: string;
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

