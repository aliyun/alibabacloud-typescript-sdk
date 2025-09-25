// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVerifySettingResponseBody extends $dara.Model {
  /**
   * @remarks
   * Verification scenario name.
   * 
   * @example
   * 用户注册
   */
  bizName?: string;
  /**
   * @remarks
   * Verification scenario identifier.
   * 
   * @example
   * UserRegister
   */
  bizType?: string;
  /**
   * @remarks
   * ID of this request.
   * 
   * @example
   * D6163397-15C5-419C-9ACC-B7C83E0B4C10
   */
  requestId?: string;
  /**
   * @remarks
   * Authentication solution name.
   * 
   * @example
   * RPBasic
   */
  solution?: string;
  /**
   * @remarks
   * Authentication steps
   */
  stepList?: string[];
  static names(): { [key: string]: string } {
    return {
      bizName: 'BizName',
      bizType: 'BizType',
      requestId: 'RequestId',
      solution: 'Solution',
      stepList: 'StepList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizName: 'string',
      bizType: 'string',
      requestId: 'string',
      solution: 'string',
      stepList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.stepList)) {
      $dara.Model.validateArray(this.stepList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

