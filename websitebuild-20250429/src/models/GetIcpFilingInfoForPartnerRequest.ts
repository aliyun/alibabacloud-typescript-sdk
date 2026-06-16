// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIcpFilingInfoForPartnerRequest extends $dara.Model {
  /**
   * @remarks
   * The customer business ID.
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * yjdw.bpu.edu.cn-waf
   */
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      domain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

