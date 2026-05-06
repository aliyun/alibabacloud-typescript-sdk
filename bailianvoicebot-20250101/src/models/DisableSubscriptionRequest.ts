// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableSubscriptionRequest extends $dara.Model {
  /**
   * @example
   * llm-3pptowd2olrctsvc
   */
  businessUnitId?: string;
  static names(): { [key: string]: string } {
    return {
      businessUnitId: 'BusinessUnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessUnitId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

