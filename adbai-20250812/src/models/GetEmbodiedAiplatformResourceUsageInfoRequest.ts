// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEmbodiedAIPlatformResourceUsageInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The instance cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range for querying network resource usage. Format: yyyy-MM-ddTHH:mmZ.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2026-01-20T01:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the embodied intelligence platform.
   * 
   * @example
   * platform1
   */
  platformName?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * > You can call the DescribeRegions operation to query the region ID of a specified Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The start of the time range for querying network resource usage. Format: yyyy-MM-ddTHH:mmZ.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2026-01-10T01:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      platformName: 'PlatformName',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      platformName: 'string',
      regionId: 'string',
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

