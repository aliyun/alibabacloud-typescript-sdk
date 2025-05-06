// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRemediationResponseBodyRemediation } from "./DescribeRemediationResponseBodyRemediation";


export class DescribeRemediationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the remediation configuration.
   */
  remediation?: DescribeRemediationResponseBodyRemediation;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 79BE07A7-46A5-5D3C-B378-0ACDA979****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      remediation: 'Remediation',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediation: DescribeRemediationResponseBodyRemediation,
      requestId: 'string',
    };
  }

  validate() {
    if(this.remediation && typeof (this.remediation as any).validate === 'function') {
      (this.remediation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

