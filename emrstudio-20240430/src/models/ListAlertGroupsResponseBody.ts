// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertGroupsResponseBodyData extends $dara.Model {
  /**
   * @example
   * ag-8mklwpevk74****
   */
  alertGroupId?: string;
  /**
   * @example
   * 50
   */
  alertInstanceIds?: string;
  /**
   * @example
   * 1726834240000
   */
  createTime?: number;
  /**
   * @example
   * description
   */
  description?: string;
  /**
   * @example
   * name
   */
  groupName?: string;
  /**
   * @example
   * 1726834240000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      alertGroupId: 'alertGroupId',
      alertInstanceIds: 'alertInstanceIds',
      createTime: 'createTime',
      description: 'description',
      groupName: 'groupName',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertGroupId: 'string',
      alertInstanceIds: 'string',
      createTime: 'number',
      description: 'string',
      groupName: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertGroupsResponseBody extends $dara.Model {
  data?: ListAlertGroupsResponseBodyData[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 0
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListAlertGroupsResponseBodyData },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
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

