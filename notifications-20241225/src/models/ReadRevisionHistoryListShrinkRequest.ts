// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadRevisionHistoryListShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language. Automatically passed through by the browser. You can manually override this value.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * Ignored. No need to pass this parameter. The application name of the caller.
   * 
   * @example
   * /
   */
  appName?: string;
  /**
   * @remarks
   * Ignored. No need to pass this parameter. The business line of the caller.
   * 
   * @example
   * /
   */
  bizName?: string;
  /**
   * @remarks
   * Ignored. No need to pass this parameter. The request protocol type.
   * 
   * @example
   * /
   */
  callerProtocol?: string;
  /**
   * @remarks
   * The category code.
   * 
   * @example
   * prod_edu_content
   */
  categoryCode?: string;
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
   * Ignored. No need to pass this parameter. The source of the operation terminal.
   * 
   * @example
   * /
   */
  clientSource?: string;
  /**
   * @remarks
   * Ignored. No need to pass this parameter. The user cookies.
   * 
   * @example
   * /
   */
  cookies?: string;
  /**
   * @remarks
   * The pagination information.
   */
  pageInfoShrink?: string;
  /**
   * @remarks
   * Ignored. No need to pass this parameter. The source page URL.
   * 
   * @example
   * /
   */
  srcUrl?: string;
  /**
   * @remarks
   * Ignored. No need to pass this parameter. The tenant information.
   * 
   * @example
   * /
   */
  tenantCode?: string;
  /**
   * @remarks
   * Ignored. No need to pass this parameter. The user type.
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
      categoryCode: 'CategoryCode',
      channelGroupCode: 'ChannelGroupCode',
      clientSource: 'ClientSource',
      cookies: 'Cookies',
      pageInfoShrink: 'PageInfo',
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
      categoryCode: 'string',
      channelGroupCode: 'string',
      clientSource: 'string',
      cookies: 'string',
      pageInfoShrink: 'string',
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

