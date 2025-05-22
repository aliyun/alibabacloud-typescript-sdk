// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserNeedAuthResponseBody extends $dara.Model {
  /**
   * @example
   * True
   */
  needAuth?: boolean;
  /**
   * @example
   * 2C859C36-886C-5BE7-A606-01F38A5374D6
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      needAuth: 'NeedAuth',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needAuth: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

