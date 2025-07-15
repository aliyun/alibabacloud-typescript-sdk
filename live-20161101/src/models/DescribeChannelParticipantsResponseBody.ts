// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChannelParticipantsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6159ba01-6687-4fb2-a831-f0cd8d188648
   */
  requestId?: string;
  /**
   * @remarks
   * The time elapsed until the result was returned. Unit: seconds. The value is a UNIX timestamp.
   * 
   * @example
   * 1557909133
   */
  times?: number;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 3
   */
  totalNum?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  totalPage?: number;
  /**
   * @remarks
   * The list of user IDs.
   */
  userList?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      times: 'Times',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      times: 'number',
      totalNum: 'number',
      totalPage: 'number',
      userList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userList)) {
      $dara.Model.validateArray(this.userList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

