// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppVulScanCycleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The scan cycle for application vulnerabilities.
   * 
   * *   1week
   * *   2weeks
   * *   3days
   * 
   * @example
   * 1week
   */
  cycle?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 934E6D2A-0123-5A99-88BA-80DC27634E22
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cycle: 'Cycle',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycle: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

