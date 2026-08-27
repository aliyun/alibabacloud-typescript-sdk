// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalDingtalkChatRequestUpdateFrequency extends $dara.Model {
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
   * Specifies whether to enable or disable the feature.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The preset mode (can be ignored).
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

export class CreatePersonalDingtalkChatRequest extends $dara.Model {
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
   * The group chat name.
   * 
   * @example
   * CustomerProjectGroup
   */
  chatName?: string;
  /**
   * @remarks
   * The pipeline description.
   * 
   * @example
   * Customer group chat history
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
   * my-agent
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The resource tags (optional, a JSON string list, such as ["tagA","tagB"]).
   * 
   * @example
   * ["Customer","GroupChat"]
   */
  sourceTags?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The feature update frequency.
   */
  updateFrequency?: CreatePersonalDingtalkChatRequestUpdateFrequency;
  static names(): { [key: string]: string } {
    return {
      chatId: 'chatId',
      chatName: 'chatName',
      description: 'description',
      directoryId: 'directoryId',
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
      historyStartTime: 'string',
      notes: 'string',
      operatingObjectName: 'string',
      sourceTags: 'string',
      tenantId: 'string',
      updateFrequency: CreatePersonalDingtalkChatRequestUpdateFrequency,
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

