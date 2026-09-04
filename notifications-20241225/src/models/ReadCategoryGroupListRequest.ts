// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadCategoryGroupListRequest extends $dara.Model {
  /**
   * @remarks
   * The language. Automatically passed through by the browser and can be manually overridden.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * Ignore. No need to pass for now. Application name of the requester.
   * 
   * @example
   * /
   */
  appName?: string;
  /**
   * @remarks
   * Ignore. No need to pass for now. Business line of the requester.
   * 
   * @example
   * /
   */
  bizName?: string;
  /**
   * @remarks
   * Ignore. No need to pass for now. Request protocol type.
   * 
   * @example
   * /
   */
  callerProtocol?: string;
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
   * Ignore. No need to pass for now. Operation terminal source.
   * 
   * @example
   * /
   */
  clientSource?: string;
  /**
   * @remarks
   * Ignore. No need to pass for now. User cookies.
   * 
   * @example
   * /
   */
  cookies?: string;
  /**
   * @remarks
   * Ignore. No need to pass for now. Source page URL.
   * 
   * @example
   * /
   */
  srcUrl?: string;
  /**
   * @remarks
   * Ignore. No need to pass for now. Tenant information.
   * 
   * @example
   * /
   */
  tenantCode?: string;
  /**
   * @remarks
   * Ignore. No need to pass for now. User type.
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

