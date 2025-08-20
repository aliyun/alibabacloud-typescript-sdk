// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApprovalProcessShrinkRequest extends $dara.Model {
  approvalType?: number;
  description?: string;
  eventLabel?: string;
  externalConfig?: string;
  matchSchemaConfigsShrink?: string;
  matchSchemasShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * approval-process-f16bf74b2b29****
   */
  processId?: string;
  processName?: string;
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

