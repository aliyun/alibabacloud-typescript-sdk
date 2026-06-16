// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupPageResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The community number.
   * 
   * @example
   * 129838420210118141502RaMMIgVG
   */
  communityNo?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1699450018265
   */
  createTime?: number;
  /**
   * @remarks
   * The risk concentration.
   * 
   * @example
   * 80
   */
  groupRisk?: string;
  /**
   * @remarks
   * The community scale.
   * 
   * @example
   * 2
   */
  groupScale?: string;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 497
   */
  id?: number;
  /**
   * @remarks
   * The scenario name.
   * 
   * @example
   * 通用图计算
   */
  sceneName?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 6770764
   */
  taskId?: number;
  /**
   * @remarks
   * The user UID.
   * 
   * @example
   * 1519714049632764
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      communityNo: 'communityNo',
      createTime: 'createTime',
      groupRisk: 'groupRisk',
      groupScale: 'groupScale',
      id: 'id',
      sceneName: 'sceneName',
      taskId: 'taskId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      communityNo: 'string',
      createTime: 'number',
      groupRisk: 'string',
      groupScale: 'string',
      id: 'number',
      sceneName: 'string',
      taskId: 'number',
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

export class DescribeGroupPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The returned object.
   */
  resultObject?: DescribeGroupPageResponseBodyResultObject[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 3
   */
  totalItem?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      resultObject: 'resultObject',
      totalItem: 'totalItem',
      totalPage: 'totalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      currentPage: 'number',
      pageSize: 'number',
      resultObject: { 'type': 'array', 'itemType': DescribeGroupPageResponseBodyResultObject },
      totalItem: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resultObject)) {
      $dara.Model.validateArray(this.resultObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

