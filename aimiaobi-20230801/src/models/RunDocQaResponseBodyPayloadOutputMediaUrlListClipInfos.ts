// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunDocQaResponseBodyPayloadOutputMediaUrlListClipInfos extends $dara.Model {
  /**
   * @example
   * 0
   */
  from?: number;
  /**
   * @example
   * 30
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

