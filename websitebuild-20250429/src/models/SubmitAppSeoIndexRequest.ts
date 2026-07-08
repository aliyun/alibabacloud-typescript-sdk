// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAppSeoIndexRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID.
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
  /**
   * @remarks
   * The search engine type.
   * 
   * @example
   * type
   */
  seType?: string;
  /**
   * @remarks
   * Specifies whether to delay the submission.
   */
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

