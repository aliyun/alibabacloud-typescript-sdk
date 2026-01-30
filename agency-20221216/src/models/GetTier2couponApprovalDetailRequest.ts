// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTier2CouponApprovalDetailRequest extends $dara.Model {
  /**
   * @example
   * d54ca949-9b88-4514-add3-c6029c4027f4
   */
  applicationSheetId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationSheetId: 'ApplicationSheetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationSheetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

