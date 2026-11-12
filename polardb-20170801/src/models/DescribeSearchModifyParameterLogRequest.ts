// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSearchModifyParameterLogRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB for MySQL primary cluster, which is used to query the parameter modification history of the associated Search cluster. Before you call this operation, ensure that PolarSearch is enabled for the target cluster. You can add a search node on the basic information page of the cluster in the console. This operation is not applicable to clusters for which PolarSearch is not enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-xxxxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. Specify the time in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC. Only records modified before this time are returned. The end time must not be earlier than the start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-10-14T02:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the query. Specify the time in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC. Only records modified after this time are returned.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-10-14T01:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
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

