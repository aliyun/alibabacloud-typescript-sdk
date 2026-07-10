// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVerifySettingRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the verification scenario.
   * 
   * This parameter is required.
   * 
   * @example
   * 用户注册
   */
  bizName?: string;
  /**
   * @remarks
   * The identifier of the verification scenario.
   * 
   * This parameter is required.
   * 
   * @example
   * UserRegister
   */
  bizType?: string;
  /**
   * @remarks
   * Specifies whether to use the default system guide page.
   * 
   * @example
   * false
   */
  guideStep?: boolean;
  /**
   * @remarks
   * Specifies whether to use the default system authorization page.
   * 
   * @example
   * true
   */
  privacyStep?: boolean;
  /**
   * @remarks
   * Specifies whether to use the default system result page.
   * 
   * @example
   * false
   */
  resultStep?: boolean;
  /**
   * @remarks
   * The name of the verification solution.
   * 
   * This parameter is required.
   * 
   * @example
   * RPBasic
   */
  solution?: string;
  static names(): { [key: string]: string } {
    return {
      bizName: 'BizName',
      bizType: 'BizType',
      guideStep: 'GuideStep',
      privacyStep: 'PrivacyStep',
      resultStep: 'ResultStep',
      solution: 'Solution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizName: 'string',
      bizType: 'string',
      guideStep: 'boolean',
      privacyStep: 'boolean',
      resultStep: 'boolean',
      solution: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

