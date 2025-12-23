// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeABTestSceneResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The time when the test scenario was created.
   * 
   * @example
   * 1596527691
   */
  created?: number;
  /**
   * @remarks
   * The ID of the test scenario.
   * 
   * @example
   * 20614
   */
  id?: string;
  /**
   * @remarks
   * The name of the test scenario.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The status of the test scenario. Valid values:
   * 
   * *   0: The test is stopped.
   * *   1: The test is started.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The time when the test was last modified.
   * 
   * @example
   * 1596527691
   */
  updated?: number;
  /**
   * @remarks
   * The indicators of the test scenarios.
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

export class DescribeABTestSceneResponseBody extends $dara.Model {
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
   */
  result?: DescribeABTestSceneResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeABTestSceneResponseBodyResult,
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

