// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DelMessageRequest extends $dara.Model {
  acceptLanguage?: string;
  appName?: string;
  bizName?: string;
  callerProtocol?: string;
  clientSource?: string;
  cookies?: string;
  msgId?: string;
  srcUrl?: string;
  tenantCode?: string;
  uidType?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appName: 'AppName',
      bizName: 'BizName',
      callerProtocol: 'CallerProtocol',
      clientSource: 'ClientSource',
      cookies: 'Cookies',
      msgId: 'MsgId',
      srcUrl: 'SrcUrl',
      tenantCode: 'TenantCode',
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
      msgId: 'string',
      srcUrl: 'string',
      tenantCode: 'string',
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

