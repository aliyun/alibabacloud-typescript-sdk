// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInterAuthStatisticsGlobalOverviewRequest extends $dara.Model {
  /**
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @example
   * 23445411234395894586....
   */
  clientToken?: string;
  /**
   * @example
   * DAY
   */
  overviewPeriod?: string;
  /**
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

