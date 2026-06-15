// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserBusinessBehaviorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   */
  requestId?: string;
  /**
   * @remarks
   * The value of the business attribute.
   */
  statusValue?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statusValue: 'StatusValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statusValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

