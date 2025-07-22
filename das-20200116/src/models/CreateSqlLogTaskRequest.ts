// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSqlLogTaskRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The name of the filter parameter.
   * 
   * >  For more information about the supported filter parameters and their valid values, see the following **supplement about the Key parameter**.
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
   * The end of the time range to query. Specify the time in the UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1608888296000
   */
  endTime?: number;
  /**
   * @remarks
   * The filter conditions.
   */
  filters?: CreateSqlLogTaskRequestFilters[];
  /**
   * @remarks
   * The ID of the database instance.
   * 
   * @example
   * pc-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * test01
   */
  name?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * >  This parameter is available only for instances that run in a cluster architecture. You can specify this parameter to query the offline tasks of a specific node. By default, if this parameter is not specified, the information about the offline tasks of the primary node is returned.
   * 
   * @example
   * pi-uf6k5f6g3912i0dqz
   */
  nodeId?: string;
  /**
   * @remarks
   * The role of the node of the PolarDB-X 2.0 database instance. Valid values:
   * 
   * *   **polarx_cn**: compute node
   * *   **polarx_dn**: data node
   * 
   * @example
   * polarx_cn
   */
  role?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1596177993000
   */
  startTime?: number;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * *   **Export**
   * *   **Query**
   * *   **Insight**
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

