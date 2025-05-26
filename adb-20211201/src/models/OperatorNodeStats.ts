// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperatorNodeStats extends $dara.Model {
  bytes?: number;
  outputRows?: number;
  parameters?: string;
  peakMemory?: number;
  timeCost?: number;
  static names(): { [key: string]: string } {
    return {
      bytes: 'bytes',
      outputRows: 'outputRows',
      parameters: 'parameters',
      peakMemory: 'peakMemory',
      timeCost: 'timeCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bytes: 'number',
      outputRows: 'number',
      parameters: 'string',
      peakMemory: 'number',
      timeCost: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

