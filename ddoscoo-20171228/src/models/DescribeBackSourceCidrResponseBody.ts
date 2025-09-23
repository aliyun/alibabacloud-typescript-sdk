// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackSourceCidrResponseBody extends $dara.Model {
  cidrList?: string[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrList: 'CidrList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cidrList)) {
      $dara.Model.validateArray(this.cidrList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

