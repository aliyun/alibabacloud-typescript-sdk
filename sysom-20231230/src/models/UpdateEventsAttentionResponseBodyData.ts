// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventsAttentionResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  mode?: number;
  static names(): { [key: string]: string } {
    return {
      mode: 'mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

