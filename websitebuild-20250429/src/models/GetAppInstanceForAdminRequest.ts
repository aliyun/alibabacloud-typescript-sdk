// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppInstanceForAdminRequest extends $dara.Model {
  /**
   * @example
   * WS20250801154628000001
   */
  bizId?: string;
  /**
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

