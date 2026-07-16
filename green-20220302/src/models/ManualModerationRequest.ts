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
   * Parameters required by the moderation service, in JSON string format.
   * 
   * - url: The URL of the object to be inspected. Make sure the URL is accessible through the public network.
   * - dataId: Optional. The data ID corresponding to the object being inspected.
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

