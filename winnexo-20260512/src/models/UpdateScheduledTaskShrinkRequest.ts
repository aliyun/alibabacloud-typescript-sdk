// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateScheduledTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The platform application token issued by the console. If specified, the task is executed as the user specified by opsUserId or opsUserCode.
   * 
   * @example
   * wn_app_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  appToken?: string;
  /**
   * @remarks
   * The AUTO preference. Valid values: none (default), performance (performance first), and credit (cost first). If omitted or set to null, the current value is retained. If set to an empty string, the value is reset to none. For fixed models, this parameter can be saved but does not take effect.
   * 
   * @example
   * credit
   */
  autoPreference?: string;
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
   * The proxy user code, which is unique within the tenant. This parameter is used only when the application credential is configured as source_uid.
   * 
   * @example
   * alice
   */
  opsUserCode?: string;
  /**
   * @remarks
   * The proxy user ID, which is the WINNEXO platform user ID. This parameter is used only when the application credential is configured as winnexo_uid.
   * 
   * @example
   * 10001
   */
  opsUserId?: string;
  /**
   * @remarks
   * The output conversation mode. If not specified, the current configuration is retained.
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
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
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
   * The visibility scope for group tasks. Valid values: PRIVATE (visible only to the creator and group owner), COLLABORATIVE (visible to specified collaborators), and PUBLIC (visible to all group members). If not specified, the visibility scope is not updated. This parameter is ignored for personal tasks.
   * 
   * @example
   * COLLABORATIVE
   */
  visibility?: string;
  /**
   * @remarks
   * The full replacement list of collaborators. This parameter takes effect only when visibility is set to COLLABORATIVE. A maximum of 1,000 members can be specified. If the visibility is changed from COLLABORATIVE to another value, the list is cleared. If not specified, the members are not updated. The task creator and group creator do not need to be specified because they are covered by the authentication layer. This parameter is ignored for personal tasks.
   * 
   * @example
   * ["10001"]
   */
  visibleMemberUserIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      autoPreference: 'autoPreference',
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
      taskId: 'taskId',
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

