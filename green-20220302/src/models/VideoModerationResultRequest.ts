// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoModerationResultRequest extends $dara.Model {
  /**
   * @remarks
   * The ServiceCode for video moderation.
   * 
   * @example
   * videoDetection
   */
  service?: string;
  /**
   * @remarks
   * The parameter set required by the moderation service. taskId specifies the taskId of the moderation task to query. Only one taskId can be specified per request.
   * 
   * @example
   * {"taskId":"au_f_8PoWiZKoLbczp5HRn69VdT-1y8@U5"}
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

