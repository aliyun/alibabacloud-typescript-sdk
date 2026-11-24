// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApprovalProcessShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The approval type. Valid values: 0 (built-in approval), 1 (DingTalk approval), 2 (WeCom approval), and 3 (Lark approval). Default value: 0.
   * 
   * @example
   * 1
   */
  approvalType?: number;
  /**
   * @remarks
   * The description of the approval process. The description must be 1 to 128 characters in length and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), hyphens (-), and spaces.
   * 
   * @example
   * Office endpoint software installation and uninstallation approval process
   */
  description?: string;
  /**
   * @remarks
   * The event callback identifier. When the approval type is 1 (DingTalk approval) or 3 (Lark approval), this parameter is used to generate the event callback URL for the external platform. You can pass a complete callback URL, and the server retains only the part after the callback path prefix.
   * 
   * @example
   * https://callback.example.com/sase/api/v1/approval/dingtalk/callback/9m4e2mr0ui3e8a21****
   */
  eventLabel?: string;
  /**
   * @remarks
   * The integration configuration for the external approval platform. This parameter is required when the approval type is 1 (DingTalk approval) or 3 (Lark approval). It includes integration parameters such as appKey and appSecret, and must be passed as a JSON string.
   * 
   * @example
   * {"appKey":"dingn1a2b3c4d5e6f****","appSecret":"f9c8e7d6a5b4c3d2e1f0a9b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0****","eventVerifyToken":"7a8b9c0d1e2f3a4b5c6d7e8f9a0b****","eventAesKey":"1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t****"}
   */
  externalConfig?: string;
  /**
   * @remarks
   * The external approval template configurations. Configure the approval template ID, external approval process ID, and field mappings based on the policy type. This parameter is used only when ApprovalType is set to 1 (DingTalk approval), 2 (WeCom approval), or 3 (Lark approval). If this parameter is not passed, the existing template associations of the approval process are cleared. The approval templates associated with business policies cannot be cleared.
   */
  matchSchemaConfigsShrink?: string;
  /**
   * @remarks
   * The matched approval templates.
   */
  matchSchemasShrink?: string;
  /**
   * @remarks
   * The ID of the approval process.
   * 
   * This parameter is required.
   * 
   * @example
   * approval-process-f16bf74b2b29****
   */
  processId?: string;
  /**
   * @remarks
   * The name of the approval process. The name must be 1 to 128 characters in length and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * Endpoint software installation approval process
   */
  processName?: string;
  /**
   * @remarks
   * The list of approval nodes. You can define up to 5 approval nodes.
   */
  processNodes?: string[][];
  static names(): { [key: string]: string } {
    return {
      approvalType: 'ApprovalType',
      description: 'Description',
      eventLabel: 'EventLabel',
      externalConfig: 'ExternalConfig',
      matchSchemaConfigsShrink: 'MatchSchemaConfigs',
      matchSchemasShrink: 'MatchSchemas',
      processId: 'ProcessId',
      processName: 'ProcessName',
      processNodes: 'ProcessNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalType: 'number',
      description: 'string',
      eventLabel: 'string',
      externalConfig: 'string',
      matchSchemaConfigsShrink: 'string',
      matchSchemasShrink: 'string',
      processId: 'string',
      processName: 'string',
      processNodes: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
    };
  }

  validate() {
    if(Array.isArray(this.processNodes)) {
      $dara.Model.validateArray(this.processNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

