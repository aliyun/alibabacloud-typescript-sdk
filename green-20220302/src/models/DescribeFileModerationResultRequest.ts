// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFileModerationResultRequest extends $dara.Model {
  /**
   * @remarks
   * The service supported by the enhanced file moderation feature.
   * 
   * @example
   * document_detection
   */
  service?: string;
  /**
   * @remarks
   * The set of parameters required by the moderation service, in JSON string format.
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

