// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RequestDecisionRequest extends $dara.Model {
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * de_*
   */
  eventCode?: string;
  /**
   * @remarks
   * The service input parameters. The value is a complete JSON string.
   * 
   * @example
   * {"accountId": "1233***"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      eventCode: 'EventCode',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventCode: 'string',
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

