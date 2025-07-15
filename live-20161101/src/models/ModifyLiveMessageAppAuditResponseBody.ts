// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLiveMessageAppAuditResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the interactive messaging application.
   * 
   * @example
   * demo
   */
  appId?: string;
  /**
   * @remarks
   * The signature of the interactive messaging application. It is required by the interactive messaging SDK.
   * 
   * @example
   * **************************************************************************
   */
  appSign?: string;
  /**
   * @remarks
   * Indicates whether authentication is enabled. If custom content moderation is used, the value of this parameter is true by default.
   * 
   * @example
   * true
   */
  auditNeedAuthentication?: boolean;
  /**
   * @remarks
   * The content moderation method.
   * 
   * @example
   * 2
   */
  auditType?: number;
  /**
   * @remarks
   * The URL for content moderation. This parameter is returned when the value of AuditType is 2.
   * 
   * @example
   * http: //example.aliyundoc.com/exampleaudit
   */
  auditUrl?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4C4E8440-3838-1831-9BDE-AFC15803****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appSign: 'AppSign',
      auditNeedAuthentication: 'AuditNeedAuthentication',
      auditType: 'AuditType',
      auditUrl: 'AuditUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appSign: 'string',
      auditNeedAuthentication: 'boolean',
      auditType: 'number',
      auditUrl: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

