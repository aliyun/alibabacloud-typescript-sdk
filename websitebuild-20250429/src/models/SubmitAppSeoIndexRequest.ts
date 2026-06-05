// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAppSeoIndexRequest extends $dara.Model {
  /**
   * @example
   * WD20250703155602000001
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
  submitLater?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      domain: 'Domain',
      seType: 'SeType',
      submitLater: 'SubmitLater',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      domain: 'string',
      seType: 'string',
      submitLater: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

