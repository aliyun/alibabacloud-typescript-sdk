// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DebugResourceRuleResponseBody extends $dara.Model {
  currentValues?: { [key: string]: any };
  outputValues?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      currentValues: 'CurrentValues',
      outputValues: 'OutputValues',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentValues: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      outputValues: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.currentValues) {
      $dara.Model.validateMap(this.currentValues);
    }
    if(this.outputValues) {
      $dara.Model.validateMap(this.outputValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

