// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateConfigurationRecorderResponseBodyConfigurationRecorder } from "./UpdateConfigurationRecorderResponseBodyConfigurationRecorder";


export class UpdateConfigurationRecorderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the configuration recorder.
   */
  configurationRecorder?: UpdateConfigurationRecorderResponseBodyConfigurationRecorder;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2A1D5095-D1F9-56B6-A712-EA495608E79A
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
      configurationRecorder: UpdateConfigurationRecorderResponseBodyConfigurationRecorder,
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

