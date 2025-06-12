// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class OperateAppInstanceForPartnerRequest extends $dara.Model {
  extend?: string;
  /**
   * @example
   * SERVICE_DELIVERY_PROCESS
   */
  operateEvent?: string;
  static names(): { [key: string]: string } {
    return {
      extend: 'Extend',
      operateEvent: 'OperateEvent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extend: 'string',
      operateEvent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

