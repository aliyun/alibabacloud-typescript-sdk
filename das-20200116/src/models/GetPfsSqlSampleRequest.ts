// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPfsSqlSampleRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query. The time is a UNIX timestamp in milliseconds.
   * 
   * > The end time must be later than the start time. You can query data for up to seven days within the last month.
   * 
   * This parameter is required.
   * 
   * @example
   * 1678074351197
   */
  endTime?: number;
  /**
   * @remarks
   * The instance ID.
   * > Only ApsaraDB RDS for MySQL and PolarDB for MySQL instances are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2ze1jdv45i7l6****
   */
  instanceId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * > For an ApsaraDB RDS for MySQL Cluster Edition instance or a PolarDB for MySQL cluster, you must specify the node ID.
   * 
   * @example
   * r-x****-db-0
   */
  nodeId?: string;
  /**
   * @remarks
   * The SQL ID.
   * 
   * @example
   * 651b56fe9418d48edb8fdf0980ec****
   */
  sqlId?: string;
  /**
   * @remarks
   * The start time of the query. The time is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1676511134614
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      sqlId: 'SqlId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      nodeId: 'string',
      sqlId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

