// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalFeishuChatShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The group chat session ID.
   * 
   * This parameter is required.
   * 
   * @example
   * oc_abc123
   */
  chatId?: string;
  /**
   * @remarks
   * The description of the source.
   * 
   * @example
   * Product R&D group chat records
   */
  description?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * dir_personal_1
   */
  directoryId?: string;
  /**
   * @remarks
   * The start time for historical messages. Supports YYYY-MM-DD or YYYY-MM-DD HH:MM:SS. If not specified, all visible history is pulled.
   * 
   * @example
   * 2026-08-01 00:00:00
   */
  historyStartTime?: string;
  /**
   * @remarks
   * The meeting notes content (optional). Used for auxiliary analysis.
   * 
   * @example
   * Focus on extracting decisions and action items
   */
  notes?: string;
  /**
   * @remarks
   * The digital employee name (operating object name, optional).
   * 
   * @example
   * R&D Assistant
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The source tags.
   * 
   * @example
   * ["R&D"]
   */
  sourceTags?: string;
  /**
   * @remarks
   * The tenant ID to take effect.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The update frequency.
   */
  updateFrequencyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      chatId: 'chatId',
      description: 'description',
      directoryId: 'directoryId',
      historyStartTime: 'historyStartTime',
      notes: 'notes',
      operatingObjectName: 'operatingObjectName',
      sourceTags: 'sourceTags',
      tenantId: 'tenantId',
      updateFrequencyShrink: 'updateFrequency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatId: 'string',
      description: 'string',
      directoryId: 'string',
      historyStartTime: 'string',
      notes: 'string',
      operatingObjectName: 'string',
      sourceTags: 'string',
      tenantId: 'string',
      updateFrequencyShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

