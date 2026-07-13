// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAppSeoStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * WS20250801154628000001
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
   * @example
   * 123123
   */
  seAuthInfo?: string;
  seIndexStatus?: number;
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
      seAuthInfo: 'SeAuthInfo',
      seIndexStatus: 'SeIndexStatus',
      seType: 'SeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      domain: 'string',
      seAuthInfo: 'string',
      seIndexStatus: 'number',
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

