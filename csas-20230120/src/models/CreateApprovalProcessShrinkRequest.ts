// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApprovalProcessShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the approval process. The description must be 1 to 128 characters in length, and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), hyphens (-), and spaces.
   * 
   * @example
   * Process for approving employees\" temporary access to internal network applications
   */
  description?: string;
  /**
   * @remarks
   * The matched approval templates.
   */
  matchSchemasShrink?: string;
  /**
   * @remarks
   * The name of the process. The name must be 1 to 128 characters in length, and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * Internal network access approval process
   */
  processName?: string;
  /**
   * @remarks
   * The list of approval nodes. You can define up to five approval nodes.
   * 
   * This parameter is required.
   */
  processNodes?: string[][];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      matchSchemasShrink: 'MatchSchemas',
      processName: 'ProcessName',
      processNodes: 'ProcessNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      matchSchemasShrink: 'string',
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

