// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLabelTableResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  labelTableId?: string;
  /**
   * @example
   * 0FA90B3B-F30A-5C9D-A9FD-8114F8868062
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      labelTableId: 'LabelTableId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelTableId: 'string',
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

