// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FileModerationRequest extends $dara.Model {
  /**
   * @remarks
   * The service supported by enhanced document moderation.
   * 
   * @example
   * document_detection
   */
  service?: string;
  /**
   * @remarks
   * The set of parameters required for the moderation service. The value must be a JSON string.
   * 
   * - url: Required. The URL of the object to be moderated. Make sure that the URL can be accessed over the Internet.
   * - dataId: Optional. The data ID that corresponds to the moderated object.
   * 
   * @example
   * {"url":"https://detect-obj.oss-cn-hangzhou.aliyuncs.com/sample/xxxx.pdf"}
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

