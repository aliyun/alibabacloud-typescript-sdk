// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelSetStatus extends $dara.Model {
  observedGeneration?: number;
  observedTime?: string;
  phase?: string;
  static names(): { [key: string]: string } {
    return {
      observedGeneration: 'observedGeneration',
      observedTime: 'observedTime',
      phase: 'phase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      observedGeneration: 'number',
      observedTime: 'string',
      phase: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

