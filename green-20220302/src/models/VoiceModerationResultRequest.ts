// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VoiceModerationResultRequest extends $dara.Model {
  /**
   * @remarks
   * The moderation service type. Supported values include `nickname_detection` for user nickname moderation. Support for more types is planned.
   * 
   * @example
   * nickname_detection
   */
  service?: string;
  /**
   * @remarks
   * Parameters that the gateway sends to the backend service.
   * 
   * For more information, see [ServiceParameter](https://help.aliyun.com/document_detail/43988.html).
   * 
   * @example
   * 暂无
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

