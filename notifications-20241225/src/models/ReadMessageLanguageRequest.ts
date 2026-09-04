// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadMessageLanguageRequest extends $dara.Model {
  /**
   * @remarks
   * Ignored. This parameter does not need to be specified. The page language.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * Ignored. This parameter does not need to be specified. The application name of the requester.
   * 
   * @example
   * /
   */
  appName?: string;
  /**
   * @remarks
   * Ignored. This parameter does not need to be specified. The business line of the requester.
   * 
   * @example
   * /
   */
  bizName?: string;
  /**
   * @remarks
   * Ignored. This parameter does not need to be specified. The request protocol type.
   * 
   * @example
   * /
   */
  callerProtocol?: string;
  /**
   * @remarks
   * Ignored. This parameter does not need to be specified. The operation terminal source.
   * 
   * @example
   * /
   */
  clientSource?: string;
  /**
   * @remarks
   * Ignored. This parameter does not need to be specified. The user cookies.
   * 
   * @example
   * /
   */
  cookies?: string;
  /**
   * @remarks
   * Specifies whether to return the default language. If the value is YES, the default language is returned.
   * 
   * @example
   * YES
   */
  returnDefaultLang?: string;
  /**
   * @remarks
   * Ignored. This parameter does not need to be specified. The source page URL.
   * 
   * @example
   * /
   */
  srcUrl?: string;
  /**
   * @remarks
   * Ignored. This parameter does not need to be specified. The tenant information.
   * 
   * @example
   * /
   */
  tenantCode?: string;
  /**
   * @remarks
   * Ignored. This parameter does not need to be specified. The user type.
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
      clientSource: 'ClientSource',
      cookies: 'Cookies',
      returnDefaultLang: 'ReturnDefaultLang',
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
      returnDefaultLang: 'string',
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

