// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A3A41736-A050-50B6-ABC5-590F376A0044
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the CloudSSO user.
   * 
   * @example
   * u-d8d1iox****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

