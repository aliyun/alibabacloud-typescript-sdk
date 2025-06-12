// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFileModerationResultRequest extends $dara.Model {
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
   * *   taskId: required. The URL of the object that you want to moderate. Make sure that the URL can be accessed over the Internet.
   * 
   * @example
   * {\\"taskId\\":\\"vi_f_hPgx9PFIQISdlfA888hOFG-1yJq8v\\"}
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

