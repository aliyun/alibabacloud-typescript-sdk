// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHostGroupsRequest extends $dara.Model {
  /**
   * @example
   * 1586863220000
   */
  createEndTime?: number;
  /**
   * @example
   * 1586863220000
   */
  createStartTime?: number;
  /**
   * @example
   * 1112122121,3223332
   */
  creatorAccountIds?: string;
  /**
   * @example
   * 121,1212121232
   */
  ids?: string;
  /**
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @example
   * 主机组
   */
  name?: string;
  /**
   * @example
   * 221212221
   */
  nextToken?: string;
  /**
   * @example
   * DESC
   */
  pageOrder?: string;
  /**
   * @example
   * ID
   */
  pageSort?: string;
  static names(): { [key: string]: string } {
    return {
      createEndTime: 'createEndTime',
      createStartTime: 'createStartTime',
      creatorAccountIds: 'creatorAccountIds',
      ids: 'ids',
      maxResults: 'maxResults',
      name: 'name',
      nextToken: 'nextToken',
      pageOrder: 'pageOrder',
      pageSort: 'pageSort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createEndTime: 'number',
      createStartTime: 'number',
      creatorAccountIds: 'string',
      ids: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      pageOrder: 'string',
      pageSort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

