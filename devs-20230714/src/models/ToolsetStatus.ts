// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ToolsetStatus extends $dara.Model {
  observedGeneration?: number;
  observedTime?: string;
  outputs?: { [key: string]: any };
  /**
   * @example
   * Installed
   */
  phase?: string;
  static names(): { [key: string]: string } {
    return {
      observedGeneration: 'observedGeneration',
      observedTime: 'observedTime',
      outputs: 'outputs',
      phase: 'phase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      observedGeneration: 'number',
      observedTime: 'string',
      outputs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      phase: 'string',
    };
  }

  validate() {
    if(this.outputs) {
      $dara.Model.validateMap(this.outputs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

