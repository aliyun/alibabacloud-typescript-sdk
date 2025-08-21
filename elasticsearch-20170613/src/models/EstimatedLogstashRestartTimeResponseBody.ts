// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EstimatedLogstashRestartTimeResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The unit.
   * 
   * @example
   * second
   */
  unit?: string;
  /**
   * @remarks
   * The estimated restart time.
   * 
   * @example
   * 600
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      unit: 'unit',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimatedLogstashRestartTimeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D***
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: EstimatedLogstashRestartTimeResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: EstimatedLogstashRestartTimeResponseBodyResult,
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

