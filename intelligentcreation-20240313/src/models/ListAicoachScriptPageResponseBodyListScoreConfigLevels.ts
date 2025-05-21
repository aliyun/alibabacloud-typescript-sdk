// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAICoachScriptPageResponseBodyListScoreConfigLevels extends $dara.Model {
  max?: number;
  min?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      max: 'max',
      min: 'min',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'number',
      min: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

