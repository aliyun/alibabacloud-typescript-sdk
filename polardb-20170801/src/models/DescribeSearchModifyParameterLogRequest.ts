// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSearchModifyParameterLogRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB for MySQL primary cluster. This ID is used to query the parameter modification history of the associated Search cluster. Before you call this operation, you must enable PolarSearch for the target cluster. You can add a search node on the Basic Information page of the cluster in the console. This operation is not applicable to clusters for which Search is not enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-xxxxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query in UTC. Format: yyyy-MM-ddTHH:mmZ. Only records with a modification time earlier than this time are returned. The end time cannot be earlier than the start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-10-14T02:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the query in UTC. Format: yyyy-MM-ddTHH:mmZ. Only records with a modification time later than this time are returned.
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

