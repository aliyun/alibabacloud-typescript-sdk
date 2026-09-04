// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupDingtalkChatShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The session ID, typically used for JSSDK.
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
   * Focus on identifying customer demands and to-do items
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
   * ["Customer","GroupChat"]
   */
  sourceTags?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. In winnexo-cli, pass this explicitly with --tenant-id.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The feature update frequency.
   */
  updateFrequencyShrink?: string;
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
      updateFrequencyShrink: 'updateFrequency',
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

