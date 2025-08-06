// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodEditingUsageDataRequest extends $dara.Model {
  /**
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @example
   * 2024-11-07T16:00:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @example
   * H264.SD
   */
  specification?: string;
  /**
   * @example
   * 2024-11-06T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      region: 'Region',
      specification: 'Specification',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'string',
      ownerId: 'number',
      region: 'string',
      specification: 'string',
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

