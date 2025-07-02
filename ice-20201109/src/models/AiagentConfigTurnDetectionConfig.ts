// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AIAgentConfigTurnDetectionConfig extends $dara.Model {
  mode?: string;
  semanticWaitDuration?: number;
  turnEndWords?: string[];
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      semanticWaitDuration: 'SemanticWaitDuration',
      turnEndWords: 'TurnEndWords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      semanticWaitDuration: 'number',
      turnEndWords: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.turnEndWords)) {
      $dara.Model.validateArray(this.turnEndWords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

