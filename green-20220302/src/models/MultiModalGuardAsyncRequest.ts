// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MultiModalGuardAsyncRequest extends $dara.Model {
  /**
   * @remarks
   * The moderation service type. Valid values: `audio_security_check` and `video_security_check`.
   * 
   * @example
   * audio_security_check
   */
  service?: string;
  /**
   * @remarks
   * The parameter set required for the moderation service.
   * 
   * @example
   * {"url": "https://testxxx.oss-cn-shanghai.aliyuncs.com/xxx.mp4", "dataId": "data1234"}
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

