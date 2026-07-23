// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExperimentGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can get this ID by calling the ListInstances operation.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @remarks
   * The layer ID. You can get this ID by calling the ListLayers operation.
   * 
   * @example
   * 3
   */
  layerId?: string;
  /**
   * @remarks
   * The status of the experiment group. Valid values: Offline, Online, and Pushed.
   * 
   * @example
   * Online
   */
  status?: string;
  /**
   * @remarks
   * The end time for filtering experiment groups.
   * 
   * @example
   * 2024-08-31 12:00:00
   */
  timeRangeEnd?: string;
  /**
   * @remarks
   * The start time for filtering experiment groups.
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

