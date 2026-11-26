// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalAliDingChatShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The platform application token issued by the console. If provided, the operation is executed as the user specified by opsUserId or opsUserCode.
   * 
   * @example
   * wn_app_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  appToken?: string;
  /**
   * @remarks
   * The ID of the DingTalk group chat session.
   * 
   * This parameter is required.
   * 
   * @example
   * cidxxxxxxxx
   */
  chatId?: string;
  /**
   * @remarks
   * The name of the group chat.
   * 
   * @example
   * Customer project group
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
   * The folder ID.
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
   * The content of meeting notes (optional), which is used for auxiliary analysis.
   * 
   * @example
   * Focus on identifying customer requirements and to-do items
   */
  notes?: string;
  /**
   * @remarks
   * The name of the digital employee (the name of the operating object, optional).
   * 
   * @example
   * my-agent
   */
  operatingObjectName?: string;
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
   * The resource tags (optional). The value is a JSON string list, such as ["tagA","tagB"].
   * 
   * @example
   * ["Customer","Group chat"]
   */
  sourceTags?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter and is explicitly passed by using the --tenant-id option in winnexo-cli.
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
      appToken: 'appToken',
      chatId: 'chatId',
      chatName: 'chatName',
      description: 'description',
      directoryId: 'directoryId',
      historyStartTime: 'historyStartTime',
      notes: 'notes',
      operatingObjectName: 'operatingObjectName',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      sourceTags: 'sourceTags',
      tenantId: 'tenantId',
      updateFrequencyShrink: 'updateFrequency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      chatId: 'string',
      chatName: 'string',
      description: 'string',
      directoryId: 'string',
      historyStartTime: 'string',
      notes: 'string',
      operatingObjectName: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
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

