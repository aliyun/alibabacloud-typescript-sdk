// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceOnlineHeatmapRequest extends $dara.Model {
  /**
   * @remarks
   * The date to query, in the format yyyyMMdd with a fixed length of 8 characters. Online data is retained for only 8 days. Dates beyond the retention period return an empty list.
   * 
   * This parameter is required.
   * 
   * @example
   * 20260809
   */
  date?: string;
  /**
   * @remarks
   * The terminal device ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2987b3e0-8108-2f99-4d18-3b4f1c1****
   */
  devTag?: string;
  /**
   * @remarks
   * The user ID. You can obtain this value from the following operations:
   * - [ListUserDevices](~~ListUserDevices~~): Lists user terminal devices.
   * - [GetUserDevice](~~GetUserDevice~~): Queries the details of a user terminal device.
   * 
   * This parameter is required.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      devTag: 'DevTag',
      saseUserId: 'SaseUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      devTag: 'string',
      saseUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

