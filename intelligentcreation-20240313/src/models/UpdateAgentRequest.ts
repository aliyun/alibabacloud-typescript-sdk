// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentRequest extends $dara.Model {
  agentIconUrl?: string;
  agentId?: string;
  agentName?: string;
  characterAgeStage?: string;
  characterGender?: string;
  characterName?: string;
  extraDescription?: string;
  industry?: string;
  static names(): { [key: string]: string } {
    return {
      agentIconUrl: 'agentIconUrl',
      agentId: 'agentId',
      agentName: 'agentName',
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
      agentId: 'string',
      agentName: 'string',
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

