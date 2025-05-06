// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetConfigurationRecorderResponseBodyConfigurationRecorder } from "./GetConfigurationRecorderResponseBodyConfigurationRecorder";


export class GetConfigurationRecorderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the configuration recorder that monitors resources.
   */
  configurationRecorder?: GetConfigurationRecorderResponseBodyConfigurationRecorder;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AE43696A-B3AF-5E55-9845-11393127E6D3
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
      configurationRecorder: GetConfigurationRecorderResponseBodyConfigurationRecorder,
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

