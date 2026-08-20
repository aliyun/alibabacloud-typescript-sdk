// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduledTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the collaboration group (such as cg_101). If specified, a group space task is created (the caller must be a valid group member). If empty, a personal task is created.
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
   * The name of the current effective digital employee. This parameter is empty if not configured.
   * 
   * @example
   * string_value
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
   * The large model used by the assistant. An empty value indicates that DingTalk automatically selects the model.
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
   * The trigger configuration. The configuration varies depending on the trigger type. For the specific format, refer to the following data structures:
   * 
   *   - OSS trigger: See [OSSTriggerConfig](https://help.aliyun.com/document_detail/415697.html).
   *   - Simple Log Service trigger: See [LogTriggerConfig](https://help.aliyun.com/document_detail/415694.html).
   *   - Time trigger: See [TimeTriggerConfig](https://help.aliyun.com/document_detail/415712.html).
   *   - HTTP trigger: See [HTTPTriggerConfig](https://help.aliyun.com/document_detail/415685.html).
   *   - Tablestore trigger: You only need to specify the complete **SourceArn** parameter. No additional configuration is required. Set the value to an empty object {}.
   *   - CDN event trigger: See [CDNEventsTriggerConfig](https://help.aliyun.com/document_detail/415674.html).
   *   - MNS topic trigger: See [MnsTopicTriggerConfig](https://help.aliyun.com/document_detail/415695.html).
   *   - EventBridge trigger: See [EventBridgeTriggerConfig](https://help.aliyun.com/document_detail/2508622.html).
   */
  triggerConfigShrink?: string;
  /**
   * @remarks
   * The visibility scope of the group task. Valid values: PRIVATE (visible only to the creator and group owner), COLLABORATIVE (visible to specified collaborators), and PUBLIC (visible to all group members). Default value for group tasks: PRIVATE. This parameter is ignored for personal tasks.
   * 
   * @example
   * PRIVATE
   */
  visibility?: string;
  /**
   * @remarks
   * The list of collaborator user IDs. This parameter takes effect only when visibility is set to COLLABORATIVE. It is ignored for other visibility levels. A maximum of 1000 IDs are supported. The task creator and group creator do not need to be included (covered by the authentication layer). This parameter is ignored for personal tasks.
   * 
   * @example
   * string_value
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

