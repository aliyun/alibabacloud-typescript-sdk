// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersForGroupResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * user_001
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

export class ListUsersForGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListUsersForGroupResponseBodyData[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. If NextToken is empty, no next page exists.
   * 
   * @example
   * NTxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListUsersForGroupResponseBodyData },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
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

