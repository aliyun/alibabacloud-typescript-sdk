// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UrlAsyncModerationRequest extends $dara.Model {
  /**
   * @remarks
   * Service name: URL threat detection
   * 
   * @example
   * url_detection_pro
   */
  service?: string;
  /**
   * @remarks
   * The parameter set for the content moderation object. This parameter is a JSON string. For more information, see the description of ServiceParameters.
   * 
   * @example
   * {
   *         "url": "https://help.aliyun.com/",
   *         "dataId": "url123******"
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

