// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceTaskResponseBody extends $dara.Model {
  /**
   * @example
   * A1B2C3D4-E5F6-7890-ABCD-EF1234567890
   */
  requestId?: string;
  /**
   * @example
   * {"taskId":"a1b2c3d4-e5f6-7890-abcd-ef1234567890","serviceId":"ggxw4lnjuz@f2fd3a6265a254a052afb","taskType":"live_debug_log_probe","ip":"10.0.0.1","extraInfo":"{\\"probeType\\":\\"LOG\\",\\"language\\":\\"java\\"}"}
   */
  serviceTask?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      serviceTask: 'serviceTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceTask: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.serviceTask) {
      $dara.Model.validateMap(this.serviceTask);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

