// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInterAuthStatisticsGlobalOverviewRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the returned availability zone names. Valid values:
   * 
   * - **zh-CN**: Chinese.
   * 
   * - **en-US** (default): English.
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * A unique, client-generated token to ensure the idempotence of the request. The token must be a string of ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 23445411234395894586....
   */
  clientToken?: string;
  /**
   * @remarks
   * The statistical period.
   * 
   * @example
   * DAY
   */
  overviewPeriod?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  serverRegion?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clientToken: 'ClientToken',
      overviewPeriod: 'OverviewPeriod',
      serverRegion: 'ServerRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clientToken: 'string',
      overviewPeriod: 'string',
      serverRegion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

