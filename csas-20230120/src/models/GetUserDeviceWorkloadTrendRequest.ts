// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserDeviceWorkloadTrendRequest extends $dara.Model {
  /**
   * @remarks
   * The endpoint device ID. You can obtain this value from the following operations:
   * - [GetUserDevice](~~GetUserDevice~~): Queries the details of a user endpoint device.
   * - [ListUserDevices](~~ListUserDevices~~): Queries user endpoint devices in batches.
   * 
   * This parameter is required.
   * 
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  deviceTag?: string;
  /**
   * @remarks
   * The start time of the query time range. This value is a UNIX timestamp in seconds. The value must be greater than or equal to 0 and less than the value of To.
   * 
   * This parameter is required.
   * 
   * @example
   * 1769998785
   */
  from?: number;
  /**
   * @remarks
   * The end time of the query time range. This value is a UNIX timestamp in seconds. The value must be greater than the value of From.
   * 
   * This parameter is required.
   * 
   * @example
   * 1771986521
   */
  to?: number;
  /**
   * @remarks
   * The workload type. Valid values:
   * - **cpu**: CPU usage.
   * - **mem**: memory usage.
   * 
   * This parameter is required.
   * 
   * @example
   * cpu
   */
  workloadType?: string;
  static names(): { [key: string]: string } {
    return {
      deviceTag: 'DeviceTag',
      from: 'From',
      to: 'To',
      workloadType: 'WorkloadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceTag: 'string',
      from: 'number',
      to: 'number',
      workloadType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

