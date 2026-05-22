// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRealtimeDeliveryFieldRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  businessType?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

