// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecallHonorResponseBodyContent extends $dara.Model {
  /**
   * @example
   * success
   */
  data?: any;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

