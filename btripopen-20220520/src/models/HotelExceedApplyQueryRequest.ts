// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelExceedApplyQueryRequest extends $dara.Model {
  /**
   * @example
   * 1287123
   */
  applyId?: number;
  businessInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      businessInstanceId: 'business_instance_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      businessInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

