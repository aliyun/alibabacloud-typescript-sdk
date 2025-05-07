// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFreeUserEventTypesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of security events.
   * 
   * @example
   * 4
   */
  eventNum?: string;
  /**
   * @remarks
   * The type of the security event.
   * 
   * @example
   * SMSInterfaceAbuse
   */
  eventType?: string;
  static names(): { [key: string]: string } {
    return {
      eventNum: 'EventNum',
      eventType: 'EventType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventNum: 'string',
      eventType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

