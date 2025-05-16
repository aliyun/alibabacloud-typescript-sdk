// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FinishDemandRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SE20183A0Q7C5556
   */
  bizId?: string;
  /**
   * @example
   * some message
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

