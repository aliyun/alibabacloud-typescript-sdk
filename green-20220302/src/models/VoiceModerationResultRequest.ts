// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VoiceModerationResultRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the moderation service. Valid values: nickname_detection: user nickname
   * 
   * @example
   * nickname_detection
   */
  service?: string;
  /**
   * @remarks
   * The parameters of API requests that are sent from API Gateway to the backend service.
   * 
   * For more information, see [ServiceParameter](https://help.aliyun.com/document_detail/43988.html).
   * 
   * @example
   * {"taskId":"xxxxx-xxxx"}
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

