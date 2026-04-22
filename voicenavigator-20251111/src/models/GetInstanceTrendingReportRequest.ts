// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceTrendingReportRequest extends $dara.Model {
  /**
   * @example
   * 1582103299434
   */
  endTime?: number;
  /**
   * @example
   * 82b2eaae-ce5c-45f8-8231-f15b6b27e55c
   */
  instanceId?: string;
  /**
   * @example
   * 1582267398628
   */
  startTime?: number;
  /**
   * @example
   * 1d
   */
  timeInterval?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      timeInterval: 'TimeInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      startTime: 'number',
      timeInterval: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

