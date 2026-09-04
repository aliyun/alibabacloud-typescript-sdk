// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadMessageContentRequest extends $dara.Model {
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
   * Deprecated.
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
   * /
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
   * Specifies whether the message is a historical message.
   * 
   * @example
   * true
   */
  history?: boolean;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * 3727683838
   */
  msgId?: string;
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
   * The read status. Valid values:
   * - 0: unread
   * - 1: read.
   * 
   * @example
   * 0
   */
  status?: number;
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
      history: 'History',
      msgId: 'MsgId',
      srcUrl: 'SrcUrl',
      status: 'Status',
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
      history: 'boolean',
      msgId: 'string',
      srcUrl: 'string',
      status: 'number',
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

