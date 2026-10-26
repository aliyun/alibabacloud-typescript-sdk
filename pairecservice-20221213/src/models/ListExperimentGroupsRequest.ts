// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExperimentGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can retrieve this value by calling ListInstances.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @remarks
   * The layer ID. You can retrieve this value by calling ListLayers.
   * 
   * @example
   * 3
   */
  layerId?: string;
  /**
   * @remarks
   * The status filter. Valid values:
   * ● Offline: Not online.
   * ● Online: Online.
   * ● Pushed: Fully pushed.
   * 
   * @example
   * Online
   */
  status?: string;
  /**
   * @remarks
   * Filters experiment groups by end time. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2024-08-31 12:00:00
   */
  timeRangeEnd?: string;
  /**
   * @remarks
   * Filters experiment groups by start time. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2024-08-30 12:00:00
   */
  timeRangeStart?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      layerId: 'LayerId',
      status: 'Status',
      timeRangeEnd: 'TimeRangeEnd',
      timeRangeStart: 'TimeRangeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      layerId: 'string',
      status: 'string',
      timeRangeEnd: 'string',
      timeRangeStart: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

