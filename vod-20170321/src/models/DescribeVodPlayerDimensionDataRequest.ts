// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodPlayerDimensionDataRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * app-1000000
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Os
   */
  dimension?: string;
  /**
   * @example
   * 2025-06-05T15:59:59Z
   */
  endTime?: string;
  /**
   * @example
   * ALL
   */
  region?: string;
  /**
   * @example
   * 2025-06-24T00:55:06Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      dimension: 'Dimension',
      endTime: 'EndTime',
      region: 'Region',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      dimension: 'string',
      endTime: 'string',
      region: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

