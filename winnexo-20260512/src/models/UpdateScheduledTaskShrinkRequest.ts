// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateScheduledTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description.
   */
  descriptionShrink?: string;
  /**
   * @remarks
   * The list of digital employee names.
   * 
   * @example
   * ["test"]
   */
  digitalEmployeeNameShrink?: string;
  /**
   * @remarks
   * Specifies whether public access is enabled.
   * 
   * @example
   * true
   */
  isOpen?: boolean;
  /**
   * @remarks
   * The execution model tier. If this parameter is not specified, the model tier is not updated.
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
   * The output conversation mode. If this parameter is omitted, the current configuration is retained.
   * 
   * @example
   * SAME_CONVERSATION
   */
  outputMode?: string;
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
   * The tenant ID. This is a common parameter. If this parameter is not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The trigger configuration. The configuration varies based on the trigger type.
   */
  triggerConfigShrink?: string;
  /**
   * @remarks
   * The visibility scope adjustment for group tasks. Valid values: PRIVATE (visible only to the creator and group owner), COLLABORATIVE (visible to specified collaborators), and PUBLIC (visible to all group members). If this parameter is not specified, the visibility scope is not updated. This field is ignored for personal tasks.
   * 
   * @example
   * COLLABORATIVE
   */
  visibility?: string;
  /**
   * @remarks
   * The full replacement list of collaborators. This parameter takes effect only when visibility is set to COLLABORATIVE. When the visibility is changed from COLLABORATIVE to another value, the list is cleared. A maximum of 1,000 members are supported. If this parameter is not specified, the members are not updated. You do not need to specify the task creator and group creator because they are covered by the authentication layer. This field is ignored for personal tasks.
   * 
   * @example
   * ["10001"]
   */
  visibleMemberUserIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      descriptionShrink: 'description',
      digitalEmployeeNameShrink: 'digitalEmployeeName',
      isOpen: 'isOpen',
      model: 'model',
      name: 'name',
      outputMode: 'outputMode',
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
      outputMode: 'string',
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

