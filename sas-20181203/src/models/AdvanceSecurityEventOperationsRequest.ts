// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AdvanceSecurityEventOperationsRequest extends $dara.Model {
  /**
   * @remarks
   * The alert name.
   * 
   * @example
   * 恶意脚本代码执行
   */
  eventName?: string;
  /**
   * @remarks
   * The alert event type. Valid values:
   * 
   * *   Suspicious process
   * *   Webshell
   * *   Unusual logon
   * *   Exception
   * *   Sensitive file tampering
   * *   Malicious process (cloud threat detection)
   * *   Unusual network connection
   * *   Abnormal account
   * *   Application intrusion event
   * *   Cloud threat detection
   * *   Precision defense
   * *   Application whitelist
   * *   Persistent webshell
   * *   Web application threat detection
   * *   Malicious script
   * *   Threat intelligence
   * *   Malicious network activity
   * *   Cluster exception
   * *   Webshell (on-premises threat detection)
   * *   Vulnerability exploitation
   * *   Malicious process (on-premises threat detection)
   * *   Trusted exception
   * *   Others
   * 
   * For more information about alert types, see [Alerts](https://help.aliyun.com/document_detail/68388.html).
   * 
   * @example
   * 恶意脚本
   */
  eventType?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 123
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      eventName: 'EventName',
      eventType: 'EventType',
      resourceOwnerId: 'ResourceOwnerId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      eventType: 'string',
      resourceOwnerId: 'number',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

