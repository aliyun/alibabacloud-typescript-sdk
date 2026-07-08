// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppSeoTrendsRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * WD20250814102215000001
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
  /**
   * @remarks
   * The search engine type.
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

