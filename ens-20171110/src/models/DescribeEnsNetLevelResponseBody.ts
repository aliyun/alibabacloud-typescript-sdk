// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnsNetLevelResponseBodyEnsNetLevels } from "./DescribeEnsNetLevelResponseBodyEnsNetLevels";


export class DescribeEnsNetLevelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned service code. A value of 0 indicates that the operation was successful.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The network levels.
   */
  ensNetLevels?: DescribeEnsNetLevelResponseBodyEnsNetLevels;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 86A6D421-A0C7-4C01-8648-47377CA6A2CE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      ensNetLevels: 'EnsNetLevels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      ensNetLevels: DescribeEnsNetLevelResponseBodyEnsNetLevels,
      requestId: 'string',
    };
  }

  validate() {
    if(this.ensNetLevels && typeof (this.ensNetLevels as any).validate === 'function') {
      (this.ensNetLevels as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

