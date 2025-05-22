// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePartnerConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * esp.wangwen
   */
  bizType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * jinsan
   */
  partnerCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      partnerCode: 'PartnerCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      partnerCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

