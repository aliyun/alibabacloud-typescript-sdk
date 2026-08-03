// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentRequest extends $dara.Model {
  agentIconUrl?: string;
  agentName?: string;
  agentScene?: string;
  characterAgeStage?: string;
  characterGender?: string;
  characterName?: string;
  extraDescription?: string;
  industry?: string;
  static names(): { [key: string]: string } {
    return {
      agentIconUrl: 'agentIconUrl',
      agentName: 'agentName',
      agentScene: 'agentScene',
      characterAgeStage: 'characterAgeStage',
      characterGender: 'characterGender',
      characterName: 'characterName',
      extraDescription: 'extraDescription',
      industry: 'industry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIconUrl: 'string',
      agentName: 'string',
      agentScene: 'string',
      characterAgeStage: 'string',
      characterGender: 'string',
      characterName: 'string',
      extraDescription: 'string',
      industry: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

