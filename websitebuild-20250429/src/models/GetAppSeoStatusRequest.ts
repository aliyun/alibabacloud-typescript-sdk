// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppSeoStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Business ID
   * 
   * @example
   * WD20250814102215000001
   */
  bizId?: string;
  /**
   * @remarks
   * Domain name
   * 
   * @example
   * yjdw.bpu.edu.cn-waf
   */
  domain?: string;
  /**
   * @remarks
   * Search engine type
   * 
   * @example
   * type
   */
  seType?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      domain: 'Domain',
      seType: 'SeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      domain: 'string',
      seType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

