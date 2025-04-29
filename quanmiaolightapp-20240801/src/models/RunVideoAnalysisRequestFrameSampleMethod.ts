// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunVideoAnalysisRequestFrameSampleMethod extends $dara.Model {
  interval?: number;
  methodName?: string;
  pixel?: number;
  static names(): { [key: string]: string } {
    return {
      interval: 'interval',
      methodName: 'methodName',
      pixel: 'pixel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interval: 'number',
      methodName: 'string',
      pixel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

