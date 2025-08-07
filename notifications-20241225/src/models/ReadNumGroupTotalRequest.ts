// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadNumGroupTotalRequest extends $dara.Model {
  /**
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  appName?: string;
  bizName?: string;
  callerProtocol?: string;
  clientSource?: string;
  cookies?: string;
  srcUrl?: string;
  tenantCode?: string;
  title?: string;
  uidType?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appName: 'AppName',
      bizName: 'BizName',
      callerProtocol: 'CallerProtocol',
      clientSource: 'ClientSource',
      cookies: 'Cookies',
      srcUrl: 'SrcUrl',
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
      clientSource: 'string',
      cookies: 'string',
      srcUrl: 'string',
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

