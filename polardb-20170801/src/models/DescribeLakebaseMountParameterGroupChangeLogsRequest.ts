// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLakebaseMountParameterGroupChangeLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query (UTC).
   * 
   * @example
   * 2026-01-02T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The parameter name filter.
   * 
   * @example
   * param1
   */
  name?: string;
  /**
   * @remarks
   * The parameter template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-xxx
   */
  parameterGroupId?: string;
  /**
   * @remarks
   * The PolarFS instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pfs-xxx
   */
  polarFsInstanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The start time of the query (UTC).
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      name: 'Name',
      parameterGroupId: 'ParameterGroupId',
      polarFsInstanceId: 'PolarFsInstanceId',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      name: 'string',
      parameterGroupId: 'string',
      polarFsInstanceId: 'string',
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

