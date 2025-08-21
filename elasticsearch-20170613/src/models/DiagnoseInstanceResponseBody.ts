// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DiagnoseInstanceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the diagnostic instance.
   * 
   * @example
   * 1535745731000
   */
  createTime?: number;
  /**
   * @example
   * es-cn-n6w1o1x0w001c****
   */
  instanceId?: string;
  /**
   * @example
   * trigger__2020-08-17T17:09:02
   */
  reportId?: string;
  /**
   * @example
   * RUNNING
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      instanceId: 'instanceId',
      reportId: 'reportId',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      instanceId: 'string',
      reportId: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiagnoseInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the report.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D***
   */
  requestId?: string;
  /**
   * @remarks
   * The diagnosis status. Valid values: Supported: SUCCESS, FAILED, and RUNNING.
   */
  result?: DiagnoseInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DiagnoseInstanceResponseBodyResult,
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

