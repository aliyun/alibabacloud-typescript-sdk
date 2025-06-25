// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPolicyResponseBodyPolicyAccessTimeRangeConfig } from "./GetPolicyResponseBodyPolicyAccessTimeRangeConfig";
import { GetPolicyResponseBodyPolicyApprovalConfig } from "./GetPolicyResponseBodyPolicyApprovalConfig";
import { GetPolicyResponseBodyPolicyCommandConfig } from "./GetPolicyResponseBodyPolicyCommandConfig";
import { GetPolicyResponseBodyPolicyIPAclConfig } from "./GetPolicyResponseBodyPolicyIpaclConfig";
import { GetPolicyResponseBodyPolicyProtocolConfig } from "./GetPolicyResponseBodyPolicyProtocolConfig";


export class GetPolicyResponseBodyPolicy extends $dara.Model {
  /**
   * @remarks
   * The details of the logon period restrictions.
   */
  accessTimeRangeConfig?: GetPolicyResponseBodyPolicyAccessTimeRangeConfig;
  /**
   * @remarks
   * The O\\&M approval setting.
   */
  approvalConfig?: GetPolicyResponseBodyPolicyApprovalConfig;
  /**
   * @remarks
   * The details of the command policy.
   */
  commandConfig?: GetPolicyResponseBodyPolicyCommandConfig;
  /**
   * @remarks
   * The description of the control policy.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * The access control settings on source IP addresses.
   */
  IPAclConfig?: GetPolicyResponseBodyPolicyIPAclConfig;
  /**
   * @remarks
   * The ID of the control policy.
   * 
   * @example
   * 3
   */
  policyId?: string;
  /**
   * @remarks
   * The name of the control policy.
   * 
   * @example
   * test
   */
  policyName?: string;
  /**
   * @remarks
   * The priority of the control policy. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The details of protocol control.
   */
  protocolConfig?: GetPolicyResponseBodyPolicyProtocolConfig;
  static names(): { [key: string]: string } {
    return {
      accessTimeRangeConfig: 'AccessTimeRangeConfig',
      approvalConfig: 'ApprovalConfig',
      commandConfig: 'CommandConfig',
      comment: 'Comment',
      IPAclConfig: 'IPAclConfig',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      priority: 'Priority',
      protocolConfig: 'ProtocolConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTimeRangeConfig: GetPolicyResponseBodyPolicyAccessTimeRangeConfig,
      approvalConfig: GetPolicyResponseBodyPolicyApprovalConfig,
      commandConfig: GetPolicyResponseBodyPolicyCommandConfig,
      comment: 'string',
      IPAclConfig: GetPolicyResponseBodyPolicyIPAclConfig,
      policyId: 'string',
      policyName: 'string',
      priority: 'number',
      protocolConfig: GetPolicyResponseBodyPolicyProtocolConfig,
    };
  }

  validate() {
    if(this.accessTimeRangeConfig && typeof (this.accessTimeRangeConfig as any).validate === 'function') {
      (this.accessTimeRangeConfig as any).validate();
    }
    if(this.approvalConfig && typeof (this.approvalConfig as any).validate === 'function') {
      (this.approvalConfig as any).validate();
    }
    if(this.commandConfig && typeof (this.commandConfig as any).validate === 'function') {
      (this.commandConfig as any).validate();
    }
    if(this.IPAclConfig && typeof (this.IPAclConfig as any).validate === 'function') {
      (this.IPAclConfig as any).validate();
    }
    if(this.protocolConfig && typeof (this.protocolConfig as any).validate === 'function') {
      (this.protocolConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

