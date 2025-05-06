// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartConfigurationRecorderResponseBodyConfigurationRecorder } from "./StartConfigurationRecorderResponseBodyConfigurationRecorder";


export class StartConfigurationRecorderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the configuration recorder.
   */
  configurationRecorder?: StartConfigurationRecorderResponseBodyConfigurationRecorder;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4D994662-6B27-536F-B320-38F4B3D58705
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configurationRecorder: 'ConfigurationRecorder',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationRecorder: StartConfigurationRecorderResponseBodyConfigurationRecorder,
      requestId: 'string',
    };
  }

  validate() {
    if(this.configurationRecorder && typeof (this.configurationRecorder as any).validate === 'function') {
      (this.configurationRecorder as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

