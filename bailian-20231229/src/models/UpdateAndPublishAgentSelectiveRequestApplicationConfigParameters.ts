// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAndPublishAgentSelectiveRequestApplicationConfigParameters extends $dara.Model {
  dialogRound?: number;
  maxTokens?: number;
  temperature?: number;
  static names(): { [key: string]: string } {
    return {
      dialogRound: 'dialogRound',
      maxTokens: 'maxTokens',
      temperature: 'temperature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogRound: 'number',
      maxTokens: 'number',
      temperature: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

