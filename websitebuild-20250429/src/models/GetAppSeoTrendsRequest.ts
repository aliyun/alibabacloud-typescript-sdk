// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppSeoTrendsRequest extends $dara.Model {
  /**
   * @example
   * WD20250814102215000001
   */
  bizId?: string;
  /**
   * @example
   * yjdw.bpu.edu.cn-waf
   */
  domain?: string;
  /**
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

