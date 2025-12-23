// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateABTestSceneResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The time when the test scenario was created.
   * 
   * @example
   * 0
   */
  created?: number;
  /**
   * @remarks
   * The ID of the test group.
   * 
   * @example
   * 20405
   */
  id?: string;
  /**
   * @remarks
   * The name of the A/B test group.
   * 
   * @example
   * kevintest_2020-5-7_15:21:48
   */
  name?: string;
  /**
   * @remarks
   * The status. Valid values:
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
   * The time when the test scenario was last updated.
   * 
   * @example
   * 1589012351
   */
  updated?: number;
  /**
   * @remarks
   * The ID of the test scenario
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

export class CreateABTestSceneResponseBody extends $dara.Model {
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
   * The returned data.
   */
  result?: CreateABTestSceneResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateABTestSceneResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

