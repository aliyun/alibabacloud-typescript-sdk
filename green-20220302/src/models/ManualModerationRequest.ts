// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ManualModerationRequest extends $dara.Model {
  /**
   * @remarks
   * Service.
   * 
   * @example
   * imageManualCheck
   */
  service?: string;
  /**
   * @remarks
   * Parameter set required for the review service, in JSON string format.
   * - url: The URL of the object to be checked. Please ensure that this URL is publicly accessible.
   * - dataId: Optional, the data ID corresponding to the object being checked.
   * 
   * @example
   * {"url": "https://talesofai.oss-cn-shanghai.aliyuncs.com/xxx.mp4", "dataId": "data1234"}
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

