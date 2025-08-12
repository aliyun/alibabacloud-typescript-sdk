// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitoringAgentStatusesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the availability monitoring task.
   * 
   * @example
   * 126****
   */
  hostAvailabilityTaskId?: string;
  /**
   * @remarks
   * The instance IDs. Separate multiple instance IDs with commas (,).
   * 
   * @example
   * i-hp3dunahluwajv6f****
   */
  instanceIds?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAvailabilityTaskId: 'HostAvailabilityTaskId',
      instanceIds: 'InstanceIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAvailabilityTaskId: 'string',
      instanceIds: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

