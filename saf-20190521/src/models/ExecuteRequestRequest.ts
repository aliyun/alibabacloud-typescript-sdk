// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteRequestRequest extends $dara.Model {
  /**
   * @remarks
   * The service product code. For custom events, set this parameter to saf_de.
   * 
   * This parameter is required.
   * 
   * @example
   * account_abuse_pro
   */
  service?: string;
  /**
   * @remarks
   * The service input parameters in JSON format. This must be a complete JSON string. For custom events, you must include the eventCode property.
   * 
   * This parameter is required.
   * 
   * @example
   * {"accountId": "1233***"}
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

