// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadAllMessageRequest extends $dara.Model {
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
   * A system parameter. You do not need to specify this parameter.
   * 
   * @example
   * /
   */
  appName?: string;
  /**
   * @remarks
   * A system parameter. You do not need to specify this parameter.
   * 
   * @example
   * /
   */
  bizName?: string;
  /**
   * @remarks
   * A system parameter. You do not need to specify this parameter.
   * 
   * @example
   * /
   */
  callerProtocol?: string;
  /**
   * @remarks
   * The message category ID.
   * 
   * @example
   * 1
   */
  classId?: number;
  /**
   * @remarks
   * A system parameter. You do not need to specify this parameter.
   * 
   * @example
   * /
   */
  clientSource?: string;
  /**
   * @remarks
   * A system parameter. You do not need to specify this parameter.
   * 
   * @example
   * []
   */
  cookies?: string;
  /**
   * @remarks
   * The group code.
   * 
   * @example
   * test
   */
  groupCode?: string;
  /**
   * @remarks
   * A system parameter. You do not need to specify this parameter.
   * 
   * @example
   * /
   */
  srcUrl?: string;
  /**
   * @remarks
   * A system parameter. You do not need to specify this parameter.
   * 
   * @example
   * /
   */
  tenantCode?: string;
  /**
   * @remarks
   * A system parameter. You do not need to specify this parameter.
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
      classId: 'ClassId',
      clientSource: 'ClientSource',
      cookies: 'Cookies',
      groupCode: 'GroupCode',
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
      classId: 'number',
      clientSource: 'string',
      cookies: 'string',
      groupCode: 'string',
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

