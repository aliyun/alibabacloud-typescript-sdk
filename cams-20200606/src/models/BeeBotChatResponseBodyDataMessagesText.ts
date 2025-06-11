// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BeeBotChatResponseBodyDataMessagesTextSlots } from "./BeeBotChatResponseBodyDataMessagesTextSlots";


export class BeeBotChatResponseBodyDataMessagesText extends $dara.Model {
  /**
   * @remarks
   * Distinguish answer types.
   * 
   * @example
   * BotFramework
   */
  answerSource?: string;
  /**
   * @remarks
   * The content of the text message.
   * 
   * @example
   * May I ask where you want to check the weather?
   */
  content?: string;
  /**
   * @remarks
   * Indication of plain/rich text answers.
   * 
   * @example
   * PLAIN_TEXT
   */
  contentType?: string;
  /**
   * @remarks
   * When AnswerSource is BotFramework, this field returns the name of the dialogue unit.
   * 
   * @example
   * Example: Checking Weather
   */
  dialogName?: string;
  /**
   * @remarks
   * This field returns transparent parameters.
   */
  ext?: { [key: string]: any };
  /**
   * @remarks
   * When AnswerSource is BotFramework, this field returns a transparent parameter.
   */
  externalFlags?: { [key: string]: any };
  /**
   * @remarks
   * Hit statement.
   * 
   * @example
   * Check the weather.
   */
  hitStatement?: string;
  /**
   * @remarks
   * When AnswerSource is BotFramework, this field returns the intent name.
   * 
   * @example
   * Check weather intention.
   */
  intentName?: string;
  /**
   * @remarks
   * Metadata.
   * 
   * @example
   * [[{\\"columnName\\":\\"name\\",\\"stringValue\\":\\"wangshanshan\\"}]]
   */
  metaData?: string;
  /**
   * @remarks
   * When AnswerSource is BotFramework, this field returns the node ID.
   * 
   * @example
   * 1410-c7a72a78.__city
   */
  nodeId?: string;
  /**
   * @remarks
   * When AnswerSource is BotFramework, this field returns the node name.
   * 
   * @example
   * Example: Checking Weather Check the weather and fill in the slots__ city
   */
  nodeName?: string;
  /**
   * @remarks
   * Slot information list.
   */
  slots?: BeeBotChatResponseBodyDataMessagesTextSlots[];
  /**
   * @remarks
   * Custom Chat Topic Title.
   * 
   * @example
   * greet.
   */
  userDefinedChatTitle?: string;
  static names(): { [key: string]: string } {
    return {
      answerSource: 'AnswerSource',
      content: 'Content',
      contentType: 'ContentType',
      dialogName: 'DialogName',
      ext: 'Ext',
      externalFlags: 'ExternalFlags',
      hitStatement: 'HitStatement',
      intentName: 'IntentName',
      metaData: 'MetaData',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      slots: 'Slots',
      userDefinedChatTitle: 'UserDefinedChatTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerSource: 'string',
      content: 'string',
      contentType: 'string',
      dialogName: 'string',
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      externalFlags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      hitStatement: 'string',
      intentName: 'string',
      metaData: 'string',
      nodeId: 'string',
      nodeName: 'string',
      slots: { 'type': 'array', 'itemType': BeeBotChatResponseBodyDataMessagesTextSlots },
      userDefinedChatTitle: 'string',
    };
  }

  validate() {
    if(this.ext) {
      $dara.Model.validateMap(this.ext);
    }
    if(this.externalFlags) {
      $dara.Model.validateMap(this.externalFlags);
    }
    if(Array.isArray(this.slots)) {
      $dara.Model.validateArray(this.slots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

