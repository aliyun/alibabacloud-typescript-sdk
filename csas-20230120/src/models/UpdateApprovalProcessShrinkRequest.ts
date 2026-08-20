// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApprovalProcessShrinkRequest extends $dara.Model {
  approvalType?: number;
  /**
   * @remarks
   * The description of the approval process. The description must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), hyphens (-), and spaces. Chinese characters are supported.
   * 
   * @example
   * This is a test
   */
  description?: string;
  eventLabel?: string;
  externalConfig?: string;
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
   * The name of the approval process. The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). Chinese characters are supported.
   * 
   * @example
   * Test
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

