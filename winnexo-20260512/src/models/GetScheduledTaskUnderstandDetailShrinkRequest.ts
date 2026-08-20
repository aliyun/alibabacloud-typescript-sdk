// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduledTaskUnderstandDetailShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the collaboration group to which the task belongs (such as cg_101). If this parameter is specified, a group space task is created (the caller must be a valid group member). If this parameter is left empty, a personal task is created.
   * 
   * @example
   * exampleCollaborationGroupId
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The name of the current effective digital employee. This parameter is empty if not configured.
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  digitalEmployeeNameShrink?: string;
  /**
   * @remarks
   * The segments.
   */
  segmentsShrink?: string;
  /**
   * @remarks
   * The ID of the effective tenant.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The natural language task description.
   * 
   * @example
   * string_value
   */
  userInput?: string;
  static names(): { [key: string]: string } {
    return {
      collaborationGroupId: 'collaborationGroupId',
      digitalEmployeeNameShrink: 'digitalEmployeeName',
      segmentsShrink: 'segments',
      tenantId: 'tenantId',
      userInput: 'userInput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      digitalEmployeeNameShrink: 'string',
      segmentsShrink: 'string',
      tenantId: 'string',
      userInput: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

