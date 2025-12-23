// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListABTestScenesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The time when the test group was created.
   * 
   * @example
   * 1588836130
   */
  created?: number;
  /**
   * @remarks
   * The ID of the test group.
   * 
   * @example
   * 20404
   */
  id?: string;
  /**
   * @remarks
   * The alias of the test group.
   * 
   * @example
   * kevintest_2020-5-7_15:21:482
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
   * The time when the test group was last updated.
   * 
   * @example
   * 1588836129
   */
  updated?: number;
  /**
   * @remarks
   * The name of the test scenario.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      id: 'id',
      name: 'name',
      status: 'status',
      updated: 'updated',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      id: 'string',
      name: 'string',
      status: 'number',
      updated: 'number',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListABTestScenesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the test scenario.
   * 
   * For more information, see [ABTestScene](https://help.aliyun.com/document_detail/173618.html).
   */
  result?: ListABTestScenesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListABTestScenesResponseBodyResult },
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

