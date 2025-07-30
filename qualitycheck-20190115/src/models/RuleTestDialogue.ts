// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RuleTestDialogueContent extends $dara.Model {
  begin?: number;
  beginTime?: number;
  emotionValue?: number;
  end?: number;
  hourMinSec?: string;
  identity?: string;
  role?: string;
  silenceDuration?: number;
  speechRate?: number;
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
  content?: RuleTestDialogueContent[];
  id?: number;
  name?: string;
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

