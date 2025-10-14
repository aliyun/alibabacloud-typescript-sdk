// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentRequest extends $dara.Model {
  /**
   * @example
   * http://img.com
   */
  agentIconUrl?: string;
  /**
   * @example
   * AgentAlpha
   */
  agentName?: string;
  /**
   * @example
   * aiCoachPractice
   */
  agentScene?: string;
  /**
   * @example
   * 18-22
   */
  characterAgeStage?: string;
  characterGender?: string;
  /**
   * @example
   * Tom
   */
  characterName?: string;
  extraDescription?: string;
  /**
   * @example
   * Common
   */
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

