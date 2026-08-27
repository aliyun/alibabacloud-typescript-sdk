// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupDingtalkChatRequestUpdateFrequency extends $dara.Model {
  /**
   * @remarks
   * The cron expression for timed scheduling.
   * 
   * @example
   * 0 2 * * *
   */
  cron?: string;
  /**
   * @remarks
   * Specifies whether the throttling rule is enabled. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The preset mode. You can ignore this parameter.
   * 
   * @example
   * hourly
   */
  preset?: string;
  static names(): { [key: string]: string } {
    return {
      cron: 'cron',
      enabled: 'enabled',
      preset: 'preset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cron: 'string',
      enabled: 'boolean',
      preset: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupDingtalkChatRequest extends $dara.Model {
  /**
   * @remarks
   * The conversation ID, typically used for JSSDK.
   * 
   * This parameter is required.
   * 
   * @example
   * cidxxxxxxxx
   */
  chatId?: string;
  /**
   * @remarks
   * The chat name.
   * 
   * @example
   * Customer Project Chat
   */
  chatName?: string;
  /**
   * @remarks
   * The description of the AI assistant.
   * 
   * @example
   * Customer chat history
   */
  description?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * The project group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleGroupId
   */
  groupId?: string;
  /**
   * @remarks
   * The start time for collecting chat history.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-08-01
   */
  historyStartTime?: string;
  /**
   * @remarks
   * The meeting notes content (optional). This participates in auxiliary analysis.
   * 
   * @example
   * Focus on identifying customer requests and to-do items
   */
  notes?: string;
  /**
   * @remarks
   * The name of the digital employee (operating object name, optional).
   * 
   * @example
   * my-agent
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The source tags.
   * 
   * @example
   * ["Customer","Chat"]
   */
  sourceTags?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. In winnexo-cli, pass this value explicitly by using --tenant-id.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The feature update frequency.
   */
  updateFrequency?: CreateGroupDingtalkChatRequestUpdateFrequency;
  static names(): { [key: string]: string } {
    return {
      chatId: 'chatId',
      chatName: 'chatName',
      description: 'description',
      directoryId: 'directoryId',
      groupId: 'groupId',
      historyStartTime: 'historyStartTime',
      notes: 'notes',
      operatingObjectName: 'operatingObjectName',
      sourceTags: 'sourceTags',
      tenantId: 'tenantId',
      updateFrequency: 'updateFrequency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatId: 'string',
      chatName: 'string',
      description: 'string',
      directoryId: 'string',
      groupId: 'string',
      historyStartTime: 'string',
      notes: 'string',
      operatingObjectName: 'string',
      sourceTags: 'string',
      tenantId: 'string',
      updateFrequency: CreateGroupDingtalkChatRequestUpdateFrequency,
    };
  }

  validate() {
    if(this.updateFrequency && typeof (this.updateFrequency as any).validate === 'function') {
      (this.updateFrequency as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

