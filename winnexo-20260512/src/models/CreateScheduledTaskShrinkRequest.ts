// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduledTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 平台应用 Token（控制台签发）。传入后将以 opsUserId 或 opsUserCode 指定的用户身份执行
   * 
   * @example
   * wn_app_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  appToken?: string;
  /**
   * @remarks
   * AUTO 偏好：none=默认、performance=效果优先、credit=成本优先；创建缺省为 none，固定模型可保存但不生效
   * 
   * @example
   * performance
   */
  autoPreference?: string;
  /**
   * @remarks
   * The ID of the associated collaboration group (such as cg_101). If this parameter is passed, a group space task is created, and the caller must be a valid group member. If this parameter is empty, a personal task is created.
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
   * The name of the currently effective digital employee. This parameter is empty if it is not configured.
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
   * The large model used by the assistant. The default value is empty, which indicates that DingTalk automatically selects the model.
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
   * Sample name.pdf
   */
  name?: string;
  /**
   * @remarks
   * 代理用户编码（租户内唯一），仅当应用凭证配置为 source_uid 时使用
   * 
   * @example
   * alice
   */
  opsUserCode?: string;
  /**
   * @remarks
   * 代理用户ID（WINNEXO 平台用户ID），仅当应用凭证配置为 winnexo_uid 时使用
   * 
   * @example
   * 10001
   */
  opsUserId?: string;
  /**
   * @remarks
   * The output conversation mode. Default value: NEW_CONVERSATION.
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
   * The ID of the effective tenant.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The trigger configuration of the scheduled task. triggerMode supports manual (manual trigger) and scheduled (scheduled trigger). If scheduled is used, cron must be specified. timezone and language are injected by the server, and the client does not need to pass them. pushConfig is the list of task push channels. If it is empty or no channel is enabled, no push is performed.
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
      appToken: 'appToken',
      autoPreference: 'autoPreference',
      collaborationGroupId: 'collaborationGroupId',
      descriptionShrink: 'description',
      digitalEmployeeNameShrink: 'digitalEmployeeName',
      isOpen: 'isOpen',
      model: 'model',
      name: 'name',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
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
      appToken: 'string',
      autoPreference: 'string',
      collaborationGroupId: 'string',
      descriptionShrink: 'string',
      digitalEmployeeNameShrink: 'string',
      isOpen: 'boolean',
      model: 'string',
      name: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
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

