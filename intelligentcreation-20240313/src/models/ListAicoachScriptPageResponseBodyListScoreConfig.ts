// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAICoachScriptPageResponseBodyListScoreConfigLevels } from "./ListAicoachScriptPageResponseBodyListScoreConfigLevels";


export class ListAICoachScriptPageResponseBodyListScoreConfig extends $dara.Model {
  enabled?: boolean;
  levelEnabled?: boolean;
  levels?: ListAICoachScriptPageResponseBodyListScoreConfigLevels[];
  passScore?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      levelEnabled: 'levelEnabled',
      levels: 'levels',
      passScore: 'passScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      levelEnabled: 'boolean',
      levels: { 'type': 'array', 'itemType': ListAICoachScriptPageResponseBodyListScoreConfigLevels },
      passScore: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.levels)) {
      $dara.Model.validateArray(this.levels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

