// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadMetaConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The language type of the returned information. Valid values:
   * 
   * - zh: Chinese.
   * - en: English.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The application project name of the requester.
   * 
   * @example
   * xxxApp
   */
  appName?: string;
  /**
   * @remarks
   * The business line of the requester.
   * 
   * @example
   * SystemAlerts
   */
  bizName?: string;
  /**
   * @remarks
   * The request protocol type.
   * 
   * @example
   * https
   */
  callerProtocol?: string;
  /**
   * @remarks
   * The source of the operation terminal.
   * 
   * @example
   * h5
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
   * The URL of the source page.
   * 
   * @example
   * https://example.com/notify,0
   */
  srcUrl?: string;
  /**
   * @remarks
   * The tenant information.
   * 
   * @example
   * T002
   */
  tenantCode?: string;
  /**
   * @remarks
   * The user type.
   * 
   * @example
   * aliyunPk
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

