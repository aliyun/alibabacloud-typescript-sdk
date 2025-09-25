// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVerifySettingRequest extends $dara.Model {
  /**
   * @remarks
   * Verification scenario name, supporting Chinese, English, numbers, and hyphens (-), with a maximum of 20 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * 用户注册
   */
  bizName?: string;
  /**
   * @remarks
   * Verification scenario identifier, supporting English letters, numbers, and hyphens (-), with a maximum of 20 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * UserRegister
   */
  bizType?: string;
  /**
   * @remarks
   * Whether to use the system\\"s default guide page.
   * 
   * @example
   * false
   */
  guideStep?: boolean;
  /**
   * @remarks
   * Whether to use the system\\"s default authorization page.
   * 
   * @example
   * true
   */
  privacyStep?: boolean;
  /**
   * @remarks
   * Whether to use the system\\"s default result page.
   * 
   * @example
   * false
   */
  resultStep?: boolean;
  /**
   * @remarks
   * The name of the authentication solution to use, such as **RPBasic**, **RPBioOnly**, etc. For all supported authentication solutions, see [Authentication Solutions](https://help.aliyun.com/document_detail/127521.html).
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

