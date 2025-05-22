// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RejectUserSolutionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * esp.companyreg
   */
  bizType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  note?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * S20211227151912000001
   */
  solutionBizId?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      note: 'Note',
      solutionBizId: 'SolutionBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      note: 'string',
      solutionBizId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

