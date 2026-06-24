// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAckOperatorResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The Operator installation status. Valid values:
   * 
   * - deployed: installed
   * - not-deploy: not installed
   * - failed: installation failed
   * - unknown: unknown status.
   * 
   * @example
   * deployed
   */
  status?: string;
  /**
   * @remarks
   * The Operator version.
   * 
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAckOperatorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6615EE8D-FD9D-4FD3-997E-6FEA5B8D82ED
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: DescribeAckOperatorResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeAckOperatorResponseBodyResult,
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

