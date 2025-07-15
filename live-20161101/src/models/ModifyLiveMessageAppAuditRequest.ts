// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLiveMessageAppAuditRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the interactive messaging application whose content moderation settings you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * demo
   */
  appId?: string;
  /**
   * @remarks
   * The content moderation method. Valid values:
   * 
   * *   0: disables content moderation.
   * *   1: uses built-in content moderation.
   * *   2: uses custom content moderation.
   * 
   * @example
   * 2
   */
  auditType?: number;
  /**
   * @remarks
   * The URL for content moderation. This parameter is required if you set AuditType to 2. The URL must start with http:// or https:// and cannot contain a private IP address or a port number.
   * 
   * @example
   * http://example.aliyundoc.com/exampleaudit
   */
  auditUrl?: string;
  /**
   * @remarks
   * The data center. It must be the same as the data center that was specified when you called the [CreateLiveMessageApp](https://help.aliyun.com/document_detail/2848162.html) operation to create the interactive messaging application. Valid values: cn-shanghai and ap-southeast-1 (Singapore).
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

