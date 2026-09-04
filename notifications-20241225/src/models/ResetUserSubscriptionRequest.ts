// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetUserSubscriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The language.
   * 
   * @example
   * /
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The application name of the caller.
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
   * The list of category codes.
   */
  categoryCodes?: string[];
  /**
   * @remarks
   * The channel group. Valid values:
   * - tts: Voice reception management.
   * - webhook: Bot reception management.
   * - base: Basic reception management.
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
   * The user cookies.
   * 
   * @example
   * /
   */
  cookies?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * /
   */
  remarks?: string;
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
      categoryCodes: 'CategoryCodes',
      channelGroupCode: 'ChannelGroupCode',
      clientSource: 'ClientSource',
      cookies: 'Cookies',
      remarks: 'Remarks',
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
      categoryCodes: { 'type': 'array', 'itemType': 'string' },
      channelGroupCode: 'string',
      clientSource: 'string',
      cookies: 'string',
      remarks: 'string',
      srcUrl: 'string',
      tenantCode: 'string',
      uidType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categoryCodes)) {
      $dara.Model.validateArray(this.categoryCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

