// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RuleTestDialogueContent extends $dara.Model {
  /**
   * @remarks
   * Start Time in long
   * 
   * @example
   * 360
   */
  begin?: number;
  /**
   * @remarks
   * Start Time in long
   * 
   * @example
   * 350
   */
  beginTime?: number;
  /**
   * @remarks
   * Emotion energy value
   * 
   * @example
   * 1
   */
  emotionValue?: number;
  /**
   * @remarks
   * End time in long
   * 
   * @example
   * 1360
   */
  end?: number;
  /**
   * @remarks
   * Hour, minute, second
   * 
   * @example
   * 00:00:00
   */
  hourMinSec?: string;
  /**
   * @remarks
   * Identity
   * 
   * @example
   * 客户
   */
  identity?: string;
  /**
   * @remarks
   * Role
   * 
   * @example
   * 客户
   */
  role?: string;
  /**
   * @remarks
   * Silence duration
   * 
   * @example
   * 100
   */
  silenceDuration?: number;
  /**
   * @remarks
   * Speech rate
   * 
   * @example
   * 100
   */
  speechRate?: number;
  /**
   * @remarks
   * Dialogue
   * 
   * @example
   * 方便
   */
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      beginTime: 'BeginTime',
      emotionValue: 'EmotionValue',
      end: 'End',
      hourMinSec: 'HourMinSec',
      identity: 'Identity',
      role: 'Role',
      silenceDuration: 'SilenceDuration',
      speechRate: 'SpeechRate',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      beginTime: 'number',
      emotionValue: 'number',
      end: 'number',
      hourMinSec: 'string',
      identity: 'string',
      role: 'string',
      silenceDuration: 'number',
      speechRate: 'number',
      words: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RuleTestDialogue extends $dara.Model {
  /**
   * @remarks
   * Content
   */
  content?: RuleTestDialogueContent[];
  /**
   * @remarks
   * Conversation ID
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Conversation Name
   * 
   * @example
   * xx
   */
  name?: string;
  /**
   * @remarks
   * group
   * 
   * @example
   * xx
   */
  userGroup?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      id: 'Id',
      name: 'Name',
      userGroup: 'UserGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': RuleTestDialogueContent },
      id: 'number',
      name: 'string',
      userGroup: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

