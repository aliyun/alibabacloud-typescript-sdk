// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitializeConfig extends $dara.Model {
  steps?: any[];
  static names(): { [key: string]: string } {
    return {
      steps: 'steps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      steps: { 'type': 'array', 'itemType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.steps)) {
      $dara.Model.validateArray(this.steps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

