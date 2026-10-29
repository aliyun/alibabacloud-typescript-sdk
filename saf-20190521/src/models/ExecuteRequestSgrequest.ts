// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteRequestSGRequest extends $dara.Model {
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
   * The service product code. For custom events, set this parameter to saf_de.
   * 
   * This parameter is required.
   * 
   * @example
   * account_abuse_intl_pro
   */
  service?: string;
  /**
   * @remarks
   * The service input parameters in JSON format. For custom events, you must include the eventCode property in the JSON string.
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

