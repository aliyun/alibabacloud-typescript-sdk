// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExperimentGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @example
   * 3
   */
  layerId?: string;
  regionId?: string;
  /**
   * @example
   * Online
   */
  status?: string;
  timeRangeEnd?: string;
  timeRangeStart?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      layerId: 'LayerId',
      regionId: 'RegionId',
      status: 'Status',
      timeRangeEnd: 'TimeRangeEnd',
      timeRangeStart: 'TimeRangeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      layerId: 'string',
      regionId: 'string',
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

