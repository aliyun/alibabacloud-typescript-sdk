// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFileModerationResultRequest extends $dara.Model {
  /**
   * @remarks
   * The service for enhanced file moderation.
   * 
   * @example
   * document_detection
   */
  service?: string;
  /**
   * @remarks
   * The parameters for the moderation service, specified as a JSON string.
   * 
   * - taskId: Required. The URL of the object to moderate. The URL must be accessible over the public network.
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

