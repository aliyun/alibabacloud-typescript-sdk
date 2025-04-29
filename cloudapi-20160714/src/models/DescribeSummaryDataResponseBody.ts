// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSummaryDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of subscription dedicated instances that expire in 14 days or less.
   * 
   * @example
   * 1
   */
  expireInstanceNum?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ004
   */
  requestId?: string;
  /**
   * @remarks
   * The number of APIs.
   * 
   * @example
   * 10
   */
  usageApiNum?: number;
  /**
   * @remarks
   * The number of API groups.
   * 
   * @example
   * 1
   */
  usageGroupNum?: number;
  /**
   * @remarks
   * The number of running dedicated instances.
   * 
   * @example
   * 1
   */
  usageInstanceNum?: number;
  static names(): { [key: string]: string } {
    return {
      expireInstanceNum: 'ExpireInstanceNum',
      region: 'Region',
      requestId: 'RequestId',
      usageApiNum: 'UsageApiNum',
      usageGroupNum: 'UsageGroupNum',
      usageInstanceNum: 'UsageInstanceNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireInstanceNum: 'number',
      region: 'string',
      requestId: 'string',
      usageApiNum: 'number',
      usageGroupNum: 'number',
      usageInstanceNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

