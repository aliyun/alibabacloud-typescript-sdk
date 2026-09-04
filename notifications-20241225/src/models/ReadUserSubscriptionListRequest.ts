// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadUserSubscriptionListRequest extends $dara.Model {
  /**
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @example
   * /
   */
  appName?: string;
  /**
   * @example
   * /
   */
  bizName?: string;
  /**
   * @example
   * /
   */
  callerProtocol?: string;
  /**
   * @example
   * prod_msg
   */
  categoryGroupCode?: string;
  /**
   * @example
   * base
   */
  channelGroupCode?: string;
  /**
   * @example
   * /
   */
  clientSource?: string;
  /**
   * @example
   * /
   */
  cookies?: string;
  /**
   * @example
   * /
   */
  srcUrl?: string;
  /**
   * @example
   * /
   */
  tenantCode?: string;
  /**
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

