// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLivyComputeResponseBodyData extends $dara.Model {
  /**
   * @example
   * lc-i8xogcdfa4fk3yn1
   */
  livyComputeId?: string;
  static names(): { [key: string]: string } {
    return {
      livyComputeId: 'livyComputeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      livyComputeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

