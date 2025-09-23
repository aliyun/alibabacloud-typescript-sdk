// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainAttackMaxQpsResponseBody extends $dara.Model {
  /**
   * @example
   * 613
   */
  qps?: string;
  /**
   * @example
   * 62F9BD81-8BCA-5B23-A3CB-3FB7CEB7A4CA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      qps: 'Qps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qps: 'string',
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

