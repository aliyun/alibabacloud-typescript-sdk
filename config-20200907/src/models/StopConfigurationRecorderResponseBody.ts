// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopConfigurationRecorderResponseBody extends $dara.Model {
  requestId?: string;
  stopConfigurationRecorderResult?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stopConfigurationRecorderResult: 'StopConfigurationRecorderResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stopConfigurationRecorderResult: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

