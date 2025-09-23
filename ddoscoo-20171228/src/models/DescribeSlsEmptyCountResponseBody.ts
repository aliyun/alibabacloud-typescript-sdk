// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlsEmptyCountResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  availableCount?: number;
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableCount: 'AvailableCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableCount: 'number',
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

