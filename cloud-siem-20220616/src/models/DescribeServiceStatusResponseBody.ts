// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * - true: The authorization is granted.
   * 
   * - false: The authorization is not granted.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

