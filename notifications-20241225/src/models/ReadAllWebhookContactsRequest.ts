// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadAllWebhookContactsRequest extends $dara.Model {
  /**
   * @remarks
   * The language. Automatically passed through by the browser. You can forcefully override this value.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * Ignore. This parameter does not need to be specified. The application name of the caller.
   * 
   * @example
   * /
   */
  appName?: string;
  /**
   * @remarks
   * Ignore. This parameter does not need to be specified. The business line of the caller.
   * 
   * @example
   * /
   */
  bizName?: string;
  /**
   * @remarks
   * Ignore. This parameter does not need to be specified. The request protocol type.
   * 
   * @example
   * /
   */
  callerProtocol?: string;
  /**
   * @remarks
   * Ignore. This parameter does not need to be specified. The client source of the operation.
   * 
   * @example
   * /
   */
  clientSource?: string;
  /**
   * @remarks
   * Ignore. This parameter does not need to be specified. The user cookies.
   * 
   * @example
   * /
   */
  cookies?: string;
  /**
   * @remarks
   * Ignore. This parameter does not need to be specified. The URL of the source page.
   * 
   * @example
   * /
   */
  srcUrl?: string;
  /**
   * @remarks
   * Ignore. This parameter does not need to be specified. The tenant information.
   * 
   * @example
   * /
   */
  tenantCode?: string;
  /**
   * @remarks
   * Ignore. This parameter does not need to be specified. The user type.
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

