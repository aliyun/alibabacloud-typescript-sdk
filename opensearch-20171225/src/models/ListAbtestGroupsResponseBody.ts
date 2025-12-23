// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListABTestGroupsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The time when the test group was created.
   * 
   * @example
   * 1588839490
   */
  created?: number;
  /**
   * @remarks
   * The ID of the test group.
   * 
   * @example
   * 13466
   */
  id?: string;
  /**
   * @remarks
   * The name of the test group.
   * 
   * @example
   * Group_2020-5-7_15:23:3
   */
  name?: string;
  /**
   * @remarks
   * The status of the test group. Valid values:
   * 
   * *   0: not in effect
   * *   1: in effect
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The time when the test group was last modified.
   * 
   * @example
   * 1588839490
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      id: 'id',
      name: 'name',
      status: 'status',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      id: 'string',
      name: 'string',
      status: 'number',
      updated: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABTestGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  /**
   * @remarks
   * The test groups.
   * 
   * For more information, see [ABTestGroup](https://help.aliyun.com/document_detail/178935.html).
   */
  result?: ListABTestGroupsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListABTestGroupsResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

