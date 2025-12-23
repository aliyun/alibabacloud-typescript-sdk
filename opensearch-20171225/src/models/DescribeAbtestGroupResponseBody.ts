// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeABTestGroupResponseBodyResult extends $dara.Model {
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
   * The alias of the test group.
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
   * The time when the test group was last updated.
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

export class DescribeABTestGroupResponseBody extends $dara.Model {
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
   * The details of the test group.
   */
  result?: DescribeABTestGroupResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeABTestGroupResponseBodyResult,
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

