// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSqlLogTaskRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The name of the filter parameter.
   * 
   * > For the supported filter parameters and values, see **Request parameters description**.
   * 
   * @example
   * KeyWords
   */
  key?: string;
  /**
   * @remarks
   * The value of the filter parameter.
   * 
   * @example
   * select
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSqlLogTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the task. Specify the value as a UNIX timestamp. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1608888296000
   */
  endTime?: number;
  /**
   * @remarks
   * The list of filter conditions.
   */
  filters?: CreateSqlLogTaskRequestFilters[];
  /**
   * @remarks
   * The database instance ID.
   * 
   * @example
   * pc-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * SQL audit export 1
   */
  name?: string;
  /**
   * @remarks
   * The node ID.
   * >This parameter is applicable only to cluster instances. You can specify this parameter to query the batch task of a specific node. If you do not specify this parameter, the batch task of the primary node is returned by default.
   * 
   * @example
   * pi-uf6k5f6g3912i****
   */
  nodeId?: string;
  /**
   * @remarks
   * The node information of the PolarDB-X 2.0 database instance.
   * 
   * - **polarx_cn**: compute node.
   * 
   * - **polarx_dn**: data node.
   * 
   * @example
   * polarx_cn
   */
  role?: string;
  /**
   * @remarks
   * The start time of the task. Specify the value as a UNIX timestamp. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1596177993000
   */
  startTime?: number;
  /**
   * @remarks
   * The task type.
   * 
   * - **Export**: export task.
   * > For the filter parameters and values supported by **Export**, see **Request parameters description**.
   * - **Query**: query task.
   * 
   * @example
   * Export
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      filters: 'Filters',
      instanceId: 'InstanceId',
      name: 'Name',
      nodeId: 'NodeId',
      role: 'Role',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      filters: { 'type': 'array', 'itemType': CreateSqlLogTaskRequestFilters },
      instanceId: 'string',
      name: 'string',
      nodeId: 'string',
      role: 'string',
      startTime: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

