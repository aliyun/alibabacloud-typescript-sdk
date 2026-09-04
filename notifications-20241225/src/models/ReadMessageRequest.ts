// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadMessageRequest extends $dara.Model {
  /**
   * @remarks
   * The language. Default value: zh-CN (Simplified Chinese).
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * System parameter. You do not need to specify this parameter.
   * 
   * @example
   * /
   */
  appName?: string;
  /**
   * @remarks
   * System parameter. You do not need to specify this parameter.
   * 
   * @example
   * /
   */
  bizName?: string;
  /**
   * @remarks
   * System parameter. You do not need to specify this parameter.
   * 
   * @example
   * /
   */
  callerProtocol?: string;
  /**
   * @remarks
   * System parameter. You do not need to specify this parameter.
   * 
   * @example
   * /
   */
  clientSource?: string;
  /**
   * @remarks
   * System parameter. You do not need to specify this parameter.
   * 
   * @example
   * /
   */
  cookies?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * A9FEF04A004A383534AA6400092A904F
   */
  msgId?: string;
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
   * System parameter. You do not need to specify this parameter.
   * 
   * @example
   * /
   */
  tenantCode?: string;
  /**
   * @remarks
   * System parameter. You do not need to specify this parameter.
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

