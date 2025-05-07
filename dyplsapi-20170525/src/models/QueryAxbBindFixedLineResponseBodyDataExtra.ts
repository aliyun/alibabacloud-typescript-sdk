// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAxbBindFixedLineResponseBodyDataExtra extends $dara.Model {
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
      callrecording: 'Callrecording',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

