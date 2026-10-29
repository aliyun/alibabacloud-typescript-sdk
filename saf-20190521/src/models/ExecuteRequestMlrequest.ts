// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteRequestMLRequest extends $dara.Model {
  /**
   * @remarks
   * The language.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The service product code. Set this parameter to saf_de because this operation supports only custom events.
   * 
   * This parameter is required.
   * 
   * @example
   * saf_de
   */
  service?: string;
  /**
   * @remarks
   * The service input parameters in JSON format. You must include the eventCode property of the custom event in the JSON string.
   * 
   * This parameter is required.
   * 
   * @example
   * {"accountId": "1233***"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
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

