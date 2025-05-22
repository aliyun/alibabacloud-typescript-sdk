// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartBackToBackCallRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20211203180209000001
   */
  bizId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  bizType?: string;
  /**
   * @example
   * 02131584184
   */
  callCenterNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 13162828888
   */
  caller?: string;
  /**
   * @example
   * mobile1
   */
  mobileKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  skillType?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      callCenterNumber: 'CallCenterNumber',
      caller: 'Caller',
      mobileKey: 'MobileKey',
      skillType: 'SkillType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      callCenterNumber: 'string',
      caller: 'string',
      mobileKey: 'string',
      skillType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

