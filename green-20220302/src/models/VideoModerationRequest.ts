// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoModerationRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the moderation service.
   * 
   * @example
   * videoDetection
   */
  service?: string;
  /**
   * @remarks
   * The parameters required by the moderation service. The value is a JSON string.
   * 
   * @example
   * {\\"url\\": \\"https://talesofai.oss-cn-shanghai.aliyuncs.com/xxx.mp4\\", \\"dataId\\": \\"94db0b88-f521-11ed-806e-fae21c1f239c\\"}
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

