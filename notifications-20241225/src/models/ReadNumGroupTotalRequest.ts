// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadNumGroupTotalRequest extends $dara.Model {
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
   * System parameter. You do not need to set this parameter.
   * 
   * @example
   * /
   */
  appName?: string;
  /**
   * @remarks
   * System parameter. You do not need to set this parameter.
   * 
   * @example
   * /
   */
  bizName?: string;
  /**
   * @remarks
   * System parameter. You do not need to set this parameter.
   * 
   * @example
   * /
   */
  callerProtocol?: string;
  /**
   * @remarks
   * System parameter. You do not need to set this parameter.
   * 
   * @example
   * /
   */
  clientSource?: string;
  /**
   * @remarks
   * System parameter. You do not need to set this parameter.
   * 
   * @example
   * /
   */
  cookies?: string;
  /**
   * @remarks
   * System parameter. You do not need to set this parameter.
   * 
   * @example
   * /
   */
  srcUrl?: string;
  /**
   * @remarks
   * System parameter. You do not need to set this parameter.
   * 
   * @example
   * /
   */
  tenantCode?: string;
  /**
   * @remarks
   * The message title.
   * 
   * @example
   * Can \\"Financial expenses_interest income\\" be considered as income?
   */
  title?: string;
  /**
   * @remarks
   * System parameter. You do not need to set this parameter.
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

