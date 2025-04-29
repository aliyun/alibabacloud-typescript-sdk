// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMarketRemainsQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The remaining quota.
   * 
   * @example
   * 1000
   */
  remainsQuota?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E7FE7172-AA75-5880-B6F7-C00893E9BC06
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      remainsQuota: 'RemainsQuota',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remainsQuota: 'number',
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

