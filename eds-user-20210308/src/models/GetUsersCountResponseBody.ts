// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUsersCountResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  groupCount?: number;
  /**
   * @example
   * 10000
   */
  maxUserNumber?: number;
  /**
   * @example
   * 278
   */
  orgCount?: number;
  /**
   * @example
   * 9677D40F-0040-5956-A0EB-11B8B88****
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      groupCount: 'GroupCount',
      maxUserNumber: 'MaxUserNumber',
      orgCount: 'OrgCount',
      requestId: 'RequestId',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupCount: 'number',
      maxUserNumber: 'number',
      orgCount: 'number',
      requestId: 'string',
      userCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

