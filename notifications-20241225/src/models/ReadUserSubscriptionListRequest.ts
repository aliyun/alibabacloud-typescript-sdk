// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadUserSubscriptionListRequest extends $dara.Model {
  /**
   * @remarks
   * The language.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The application project name of the caller.
   * 
   * @example
   * /
   */
  appName?: string;
  /**
   * @remarks
   * The business line of the caller.
   * 
   * @example
   * /
   */
  bizName?: string;
  /**
   * @remarks
   * The request protocol type.
   * 
   * @example
   * /
   */
  callerProtocol?: string;
  /**
   * @remarks
   * The category group code.
   * 
   * @example
   * prod_msg
   */
  categoryGroupCode?: string;
  /**
   * @remarks
   * The channel group.
   * 
   * @example
   * base
   */
  channelGroupCode?: string;
  /**
   * @remarks
   * The source of the operation terminal.
   * 
   * @example
   * /
   */
  clientSource?: string;
  /**
   * @remarks
   * The cookies of the user.
   * 
   * @example
   * /
   */
  cookies?: string;
  /**
   * @remarks
   * The URL of the source page.
   * 
   * @example
   * /
   */
  srcUrl?: string;
  /**
   * @remarks
   * The tenant information.
   * 
   * @example
   * /
   */
  tenantCode?: string;
  /**
   * @remarks
   * The user type.
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
      categoryGroupCode: 'CategoryGroupCode',
      channelGroupCode: 'ChannelGroupCode',
      clientSource: 'ClientSource',
      cookies: 'Cookies',
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
      categoryGroupCode: 'string',
      channelGroupCode: 'string',
      clientSource: 'string',
      cookies: 'string',
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

