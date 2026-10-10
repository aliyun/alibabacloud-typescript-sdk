// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupFeishuChatRequestUpdateFrequency extends $dara.Model {
  /**
   * @remarks
   * The cron expression for the timed scheduling task.
   * 
   * @example
   * 0 2 * * *
   */
  cron?: string;
  /**
   * @remarks
   * **Enable/Disable**
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The synchronization preset: hourly or daily_2am.
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

export class CreateGroupFeishuChatRequest extends $dara.Model {
  /**
   * @remarks
   * The DingTalk group chat session ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cidxxxxxxxx
   */
  chatId?: string;
  /**
   * @remarks
   * The pipeline description.
   * 
   * @example
   * string_value
   */
  description?: string;
  /**
   * @remarks
   * The folder ID.
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
   * The start time for historical messages. The value must be in the YYYY-MM-DD or YYYY-MM-DD HH:MM:SS format. If this parameter is not specified, all visible historical messages are retrieved.
   * 
   * @example
   * 2026-08-01
   */
  historyStartTime?: string;
  /**
   * @remarks
   * The meeting notes content (optional). The notes are used for auxiliary analysis.
   * 
   * @example
   * Focus on identifying customer demands and to-do items
   */
  notes?: string;
  /**
   * @remarks
   * The digital employee name (operating object name, optional).
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The source tags.
   * 
   * @example
   * ["Key","File"]
   */
  sourceTags?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. You can pass it explicitly by using --tenant-id in winnexo-cli.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The feature update frequency.
   */
  updateFrequency?: CreateGroupFeishuChatRequestUpdateFrequency;
  static names(): { [key: string]: string } {
    return {
      chatId: 'chatId',
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
      description: 'string',
      directoryId: 'string',
      groupId: 'string',
      historyStartTime: 'string',
      notes: 'string',
      operatingObjectName: 'string',
      sourceTags: 'string',
      tenantId: 'string',
      updateFrequency: CreateGroupFeishuChatRequestUpdateFrequency,
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

