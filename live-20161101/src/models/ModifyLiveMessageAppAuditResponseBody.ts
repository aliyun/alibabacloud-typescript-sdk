// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLiveMessageAppAuditResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the interactive messaging application to modify.
   * 
   * @example
   * demo
   */
  appId?: string;
  /**
   * @remarks
   * The signature of the interactive messaging application. This information is required by the interactive messaging service SDK.
   * 
   * @example
   * **************************************************************************
   */
  appSign?: string;
  /**
   * @remarks
   * Indicates whether call authentication is enabled. If custom security audit is used, this parameter is set to true by default to enable call authentication.
   * 
   * @example
   * true
   */
  auditNeedAuthentication?: boolean;
  /**
   * @remarks
   * The security audit method.
   * 
   * @example
   * 2
   */
  auditType?: number;
  /**
   * @remarks
   * The security audit URL provided when AuditType is set to 2.
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

