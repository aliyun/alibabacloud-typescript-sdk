// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUsageRequest extends $dara.Model {
  /**
   * @example
   * 1001
   */
  externalUserId?: string;
  /**
   * @example
   * R123456789
   */
  redemptionOrderNo?: string;
  static names(): { [key: string]: string } {
    return {
      externalUserId: 'externalUserId',
      redemptionOrderNo: 'redemptionOrderNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalUserId: 'string',
      redemptionOrderNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

