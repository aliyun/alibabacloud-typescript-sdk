// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateScheduledTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description information.
   */
  descriptionShrink?: string;
  /**
   * @remarks
   * The list of digital human names.
   * 
   * @example
   * string_value
   */
  digitalEmployeeNameShrink?: string;
  /**
   * @remarks
   * Specifies whether the task is publicly accessible.
   * 
   * @example
   * true
   */
  isOpen?: boolean;
  /**
   * @remarks
   * The execution model tier. If not specified, the model tier is not updated.
   * 
   * @example
   * quick
   */
  model?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * SampleName.pdf
   */
  name?: string;
  /**
   * @remarks
   * The segments.
   */
  segmentsShrink?: string;
  /**
   * @remarks
   * The task details.
   */
  taskDetailShrink?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleTaskId
   */
  taskId?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The trigger configuration. The configuration varies depending on the trigger type.
   */
  triggerConfigShrink?: string;
  /**
   * @remarks
   * The visibility scope for group tasks. Valid values: PRIVATE (visible only to the creator and group owner), COLLABORATIVE (visible to specified collaborators), and PUBLIC (visible to all group members). If not specified, the visibility is not updated. This parameter is ignored for personal tasks.
   * 
   * @example
   * COLLABORATIVE
   */
  visibility?: string;
  /**
   * @remarks
   * The full replacement list of collaborator member user IDs. This parameter takes effect only when visibility is set to COLLABORATIVE. The list is cleared when switching away from the COLLABORATIVE tier. A maximum of 1000 members are supported. If not specified, the member list is not updated. The task creator and group creator do not need to be included because they are covered by the authentication layer. This parameter is ignored for personal tasks.
   * 
   * @example
   * string_value
   */
  visibleMemberUserIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      descriptionShrink: 'description',
      digitalEmployeeNameShrink: 'digitalEmployeeName',
      isOpen: 'isOpen',
      model: 'model',
      name: 'name',
      segmentsShrink: 'segments',
      taskDetailShrink: 'taskDetail',
      taskId: 'taskId',
      tenantId: 'tenantId',
      triggerConfigShrink: 'triggerConfig',
      visibility: 'visibility',
      visibleMemberUserIdsShrink: 'visibleMemberUserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      descriptionShrink: 'string',
      digitalEmployeeNameShrink: 'string',
      isOpen: 'boolean',
      model: 'string',
      name: 'string',
      segmentsShrink: 'string',
      taskDetailShrink: 'string',
      taskId: 'string',
      tenantId: 'string',
      triggerConfigShrink: 'string',
      visibility: 'string',
      visibleMemberUserIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

