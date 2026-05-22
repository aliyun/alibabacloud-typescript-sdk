// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MultiModalGuardAsyncResultRequest extends $dara.Model {
  /**
   * @example
   * audio_security_check
   */
  service?: string;
  /**
   * @example
   * {
   *   "url": "https://xxx.mp4"
   * }
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

