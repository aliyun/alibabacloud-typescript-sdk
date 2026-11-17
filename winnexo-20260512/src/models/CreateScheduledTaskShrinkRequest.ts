// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduledTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the collaboration group to which the task belongs, such as cg_101. If this parameter is passed, a group space task is created, and the caller must be a valid group member. If this parameter is empty, a personal task is created.
   * 
   * @example
   * exampleCollaborationGroupId
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The description of the to-do card type.
   */
  descriptionShrink?: string;
  /**
   * @remarks
   * The name of the current effective digital employee. This parameter is empty if it is not configured.
   * 
   * @example
   * ["pcitc-magent"]
   */
  digitalEmployeeNameShrink?: string;
  /**
   * @remarks
   * Specifies whether public access is allowed.
   * 
   * @example
   * true
   */
  isOpen?: boolean;
  /**
   * @remarks
   * The large language model used by the assistant. The default value is empty, which indicates that DingTalk automatically selects the model.
   * 
   * @example
   * quick
   */
  model?: string;
  /**
   * @remarks
   * The name.
   * 
   * This parameter is required.
   * 
   * @example
   * SampleName.pdf
   */
  name?: string;
  /**
   * @remarks
   * 输出会话模式，默认 NEW_CONVERSATION
   * 
   * @example
   * NEW_CONVERSATION
   */
  outputMode?: string;
  /**
   * @remarks
   * The site ID.
   */
  segmentsShrink?: string;
  /**
   * @remarks
   * The task details.
   */
  taskDetailShrink?: string;
  /**
   * @remarks
   * The effective tenant ID.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The trigger configuration of the scheduled task. The triggerMode parameter supports manual (manual trigger) and scheduled (scheduled trigger). If scheduled is used, the cron parameter must be specified. The timezone and language parameters are injected by the server, and the client does not need to pass them. The pushConfig parameter is the list of task push channels. If the list is empty or no channel is enabled, no push is performed.
   */
  triggerConfigShrink?: string;
  /**
   * @remarks
   * The visibility scope of the group task. Valid values: PRIVATE (visible only to the creator and group owner), COLLABORATIVE (visible to specified collaboration members), and PUBLIC (visible to all group members). If this parameter is not passed for a group task, the default value is PRIVATE. This field is ignored for personal tasks.
   * 
   * @example
   * PRIVATE
   */
  visibility?: string;
  /**
   * @remarks
   * The list of user IDs of collaboration members. This parameter takes effect only when visibility is set to COLLABORATIVE and is ignored for other values. A maximum of 1,000 user IDs can be specified. You do not need to pass the IDs of the task creator and group creator because they are covered by the authentication layer. This field is ignored for personal tasks.
   * 
   * @example
   * ["1002"]
   */
  visibleMemberUserIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      collaborationGroupId: 'collaborationGroupId',
      descriptionShrink: 'description',
      digitalEmployeeNameShrink: 'digitalEmployeeName',
      isOpen: 'isOpen',
      model: 'model',
      name: 'name',
      outputMode: 'outputMode',
      segmentsShrink: 'segments',
      taskDetailShrink: 'taskDetail',
      tenantId: 'tenantId',
      triggerConfigShrink: 'triggerConfig',
      visibility: 'visibility',
      visibleMemberUserIdsShrink: 'visibleMemberUserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      descriptionShrink: 'string',
      digitalEmployeeNameShrink: 'string',
      isOpen: 'boolean',
      model: 'string',
      name: 'string',
      outputMode: 'string',
      segmentsShrink: 'string',
      taskDetailShrink: 'string',
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

