// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CNameStatus extends $dara.Model {
  /**
   * @example
   * BINDING/BOUND
   */
  bingdingState?: string;
  /**
   * @example
   * NORMAL/ABNORMAL
   */
  legalState?: string;
  /**
   * @example
   * beian
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      bingdingState: 'bingding_state',
      legalState: 'legal_state',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bingdingState: 'string',
      legalState: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

