// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FileModerationRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the moderation service.
   * 
   * @example
   * document_detection
   */
  service?: string;
  /**
   * @remarks
   * The parameters required by the moderation service. The value is a JSON string.
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

