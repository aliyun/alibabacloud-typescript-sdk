// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSolutionResponseBody extends $dara.Model {
  /**
   * @example
   * 8B8F098D-A338-54DD-B19C-24BBBCBD8498
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

