// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspaceUsersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * dms user id
   * 
   * @example
   * 12345
   */
  dmsUserId?: number;
  /**
   * @example
   * li
   */
  loginName?: string;
  /**
   * @example
   * dynamic_320514_20250429102514
   */
  nickName?: string;
  static names(): { [key: string]: string } {
    return {
      dmsUserId: 'DmsUserId',
      loginName: 'LoginName',
      nickName: 'NickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dmsUserId: 'number',
      loginName: 'string',
      nickName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspaceUsersResponseBody extends $dara.Model {
  data?: ListWorkspaceUsersResponseBodyData[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * NesLoKLEdIZrKhDT7I2gS****
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListWorkspaceUsersResponseBodyData },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

