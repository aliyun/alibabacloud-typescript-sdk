// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlsOpenStatusResponseBody extends $dara.Model {
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  slsOpenStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slsOpenStatus: 'SlsOpenStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slsOpenStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

