// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAxnBindFixedLineRequestExtra extends $dara.Model {
  /**
   * @remarks
   * A通过X呼叫，即A主叫X，仅下列值有效。默认是0。 0：不能外呼 1：接续最近的N号码 2：回拨固定号码：telB
   * 
   * @example
   * 0
   */
  callback?: string;
  /**
   * @remarks
   * 录音控制，仅下列值有效。默认是0（不开通录音功能）。 0：不录音 1：录音
   * 
   * @example
   * 1
   */
  callrecording?: string;
  static names(): { [key: string]: string } {
    return {
      callback: 'Callback',
      callrecording: 'Callrecording',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callback: 'string',
      callrecording: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

