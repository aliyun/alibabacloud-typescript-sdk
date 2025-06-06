// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVerifySettingRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bizName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * UserRegister
   */
  bizType?: string;
  /**
   * @example
   * false
   */
  guideStep?: boolean;
  /**
   * @example
   * true
   */
  privacyStep?: boolean;
  /**
   * @example
   * false
   */
  resultStep?: boolean;
  /**
   * @remarks
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

