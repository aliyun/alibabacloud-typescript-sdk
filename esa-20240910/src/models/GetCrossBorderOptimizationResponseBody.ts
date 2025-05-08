// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCrossBorderOptimizationResponseBody extends $dara.Model {
  /**
   * @example
   * on
   */
  enable?: string;
  /**
   * @example
   * CF521A24-633F-5350-A6A5-42AD503D0D20
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'string',
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

