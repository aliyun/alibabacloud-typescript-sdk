// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartConfigurationRecorderResponseBodyConfigurationRecorder extends $dara.Model {
  configurationRecorderStatus?: string;
  resourceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      configurationRecorderStatus: 'ConfigurationRecorderStatus',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationRecorderStatus: 'string',
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceTypes)) {
      $dara.Model.validateArray(this.resourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartConfigurationRecorderResponseBody extends $dara.Model {
  configurationRecorder?: StartConfigurationRecorderResponseBodyConfigurationRecorder;
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

