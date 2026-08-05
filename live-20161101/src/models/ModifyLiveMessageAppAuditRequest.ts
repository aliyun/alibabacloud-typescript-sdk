// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLiveMessageAppAuditRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the interactive messaging application to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * demo
   */
  appId?: string;
  /**
   * @remarks
   * The security audit method. Valid values:
   * - 0: No security audit.
   * - 1: Built-in security audit.
   * - 2: Custom security audit.
   * 
   * @example
   * 2
   */
  auditType?: number;
  /**
   * @remarks
   * The security audit URL required when custom security audit is used (AuditType=2). The URL must start with http:// or https://, must not contain private IP addresses, and must not include port numbers.
   * 
   * @example
   * http://example.aliyundoc.com/exampleaudit
   */
  auditUrl?: string;
  /**
   * @remarks
   * The data center. This value must be the same as the data center specified in [CreateLiveMessageApp](https://help.aliyun.com/document_detail/2848162.html). Valid values: cn-shanghai (Shanghai) and ap-southeast-1 (Singapore).
   * 
   * @example
   * cn-shanghai
   */
  dataCenter?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      auditType: 'AuditType',
      auditUrl: 'AuditUrl',
      dataCenter: 'DataCenter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      auditType: 'number',
      auditUrl: 'string',
      dataCenter: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

