// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiskWarningLineResponseBody extends $dara.Model {
  /**
   * @example
   * 08DF8283-D290-4107-931E-7913D6D3480D
   */
  requestId?: string;
  /**
   * @example
   * 80
   */
  warningLine?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      warningLine: 'WarningLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      warningLine: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

