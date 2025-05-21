// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAICoachScriptResponseBodyScoreConfigLevels } from "./GetAicoachScriptResponseBodyScoreConfigLevels";


export class GetAICoachScriptResponseBodyScoreConfig extends $dara.Model {
  enabled?: boolean;
  levelEnabled?: boolean;
  levels?: GetAICoachScriptResponseBodyScoreConfigLevels[];
  passScore?: string;
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
      levels: { 'type': 'array', 'itemType': GetAICoachScriptResponseBodyScoreConfigLevels },
      passScore: 'string',
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

