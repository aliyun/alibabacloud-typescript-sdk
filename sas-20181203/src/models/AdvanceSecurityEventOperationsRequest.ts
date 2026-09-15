// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AdvanceSecurityEventOperationsRequest extends $dara.Model {
  /**
   * @remarks
   * The alert name. The EventName and EventType parameters must be specified together. If only one of them is specified, the API returns a 400 error.
   * 
   * @example
   * Malicious script code execution
   */
  eventName?: string;
  /**
   * @remarks
   * The type of the alerting event. Valid values:
   * 
   * - Abnormal process behavior
   * - Web shell
   * - Unusual logon
   * - Abnormal event
   * - Sensitive file tampering
   * - Malicious process (cloud scan)
   * - Suspicious network connection
   * - Abnormal account
   * - Application intrusion event
   * - Cloud service threat detection
   * - Precise defense
   * - Application whitelist
   * - Persistent backdoor
   * - Web application threat detection
   * - Malicious script
   * - Threat intelligence
   * - Malicious network behavior
   * - Container cluster exception
   * - Web shell (local scan)
   * - Vulnerability exploits
   * - Malicious process (local scan)
   * - Trusted exception
   * - Other
   * 
   * For more information about alert types, see [Security alert check items](https://help.aliyun.com/document_detail/68388.html).
   * 
   * The EventName and EventType parameters must be specified together. If only one of them is specified, the API returns a 400 error.
   * 
   * @example
   * Malicious script
   */
  eventType?: string;
  /**
   * @remarks
   * The member account ID in the resource directory (Alibaba Cloud account).
   * 
   * @example
   * 1232428423234****
   */
  resourceDirectoryAccountId?: number;
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
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      resourceOwnerId: 'ResourceOwnerId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      eventType: 'string',
      resourceDirectoryAccountId: 'number',
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

