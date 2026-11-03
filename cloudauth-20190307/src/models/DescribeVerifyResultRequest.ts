// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVerifyResultRequest extends $dara.Model {
  /**
   * @remarks
   * The verification ID. The unique ID that identifies a verification task. The ID can be up to 64 characters in length. For a single verification task, the system supports unlimited submissions until the verification is passed and the task is completed.
   * > You must use a different BizId when you initiate different verification tasks.
   * 
   * This parameter is required.
   * 
   * @example
   * 39ecf51e-2f81-4dc5-90ee-ff86125b****
   */
  bizId?: string;
  /**
   * @remarks
   * The business scenario identifier of the ID Verification service.
   * 
   * This parameter is required.
   * 
   * @example
   * FVBioOnlyTest
   */
  bizType?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

