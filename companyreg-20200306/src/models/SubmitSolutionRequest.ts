// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSolutionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * esp.wangwen
   */
  bizType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * I20211223101045000001
   */
  intentionBizId?: string;
  operateType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  solution?: string;
  /**
   * @example
   * 1219541161213057
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      intentionBizId: 'IntentionBizId',
      operateType: 'OperateType',
      solution: 'Solution',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      intentionBizId: 'string',
      operateType: 'string',
      solution: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

