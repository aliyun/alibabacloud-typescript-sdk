// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNodeSupplementRequestCreateCommandDownStreamNodeIdList extends $dara.Model {
  /**
   * @remarks
   * The field IDs.
   */
  fieldIdList?: string[];
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * 2323232
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      fieldIdList: 'FieldIdList',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldIdList: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldIdList)) {
      $dara.Model.validateArray(this.fieldIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeSupplementRequestCreateCommandFilterList extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to exclude the matched items. Default value: false.
   * 
   * @example
   * false
   */
  exclude?: boolean;
  /**
   * @remarks
   * The filter key. Valid values:
   * - PROJECT: project
   * - NODE_OUTPUT_NAME: node output name
   * - NODE_NAME: node name
   * - NODE_ID: node ID
   * - TARGETS: specified destination
   * - SOURCES: specified source
   * 
   * @example
   * NODE_OUTPUT_NAME
   */
  key?: string;
  /**
   * @remarks
   * The list of filter values.
   */
  valueList?: string[];
  static names(): { [key: string]: string } {
    return {
      exclude: 'Exclude',
      key: 'Key',
      valueList: 'ValueList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exclude: 'boolean',
      key: 'string',
      valueList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.valueList)) {
      $dara.Model.validateArray(this.valueList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeSupplementRequestCreateCommandGlobalParamList extends $dara.Model {
  /**
   * @remarks
   * The parameter.
   * 
   * @example
   * param1
   */
  key?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * value1
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

export class CreateNodeSupplementRequestCreateCommandNodeIdList extends $dara.Model {
  /**
   * @remarks
   * The list of field IDs. This parameter can be specified when the node is a logical table node. If you do not specify this parameter, all fields in the table are used by default.
   */
  fieldIdList?: string[];
  /**
   * @remarks
   * The node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * n_1232324
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      fieldIdList: 'FieldIdList',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldIdList: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldIdList)) {
      $dara.Model.validateArray(this.fieldIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeSupplementRequestCreateCommandNodeParamsListParamList extends $dara.Model {
  /**
   * @remarks
   * The parameter.
   * 
   * @example
   * param1
   */
  key?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * value1
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

export class CreateNodeSupplementRequestCreateCommandNodeParamsList extends $dara.Model {
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * n_23324
   */
  nodeId?: string;
  /**
   * @remarks
   * The list of parameters.
   */
  paramList?: CreateNodeSupplementRequestCreateCommandNodeParamsListParamList[];
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      paramList: 'ParamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      paramList: { 'type': 'array', 'itemType': CreateNodeSupplementRequestCreateCommandNodeParamsListParamList },
    };
  }

  validate() {
    if(Array.isArray(this.paramList)) {
      $dara.Model.validateArray(this.paramList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeSupplementRequestCreateCommand extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include all downstream nodes in massive mode. Default value: false.
   * 
   * @example
   * false
   */
  containAllDownStream?: boolean;
  /**
   * @remarks
   * The IDs of the downstream nodes to run. This parameter takes effect only when ContainAllDownStream is set to false.
   */
  downStreamNodeIdList?: CreateNodeSupplementRequestCreateCommandDownStreamNodeIdList[];
  /**
   * @remarks
   * The end business date. Format: YYYY-MM-DD.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-05-21
   */
  endBizDate?: string;
  /**
   * @remarks
   * The execution status of idle nodes. Valid values: NORMAL, PAUSED, and IDLE.
   * 
   * @example
   * NORMAL
   */
  executeStatusOfIdleNode?: string;
  /**
   * @remarks
   * The execution status of paused nodes. Valid values: NORMAL, PAUSED, and IDLE.
   * 
   * @example
   * NORMAL
   */
  executeStatusOfPauseNode?: string;
  /**
   * @remarks
   * The filter list. This parameter is used together with ContainAllDownStream to include or exclude items such as projects and nodes. Default value: empty.
   */
  filterList?: CreateNodeSupplementRequestCreateCommandFilterList[];
  /**
   * @remarks
   * The global parameters at runtime.
   */
  globalParamList?: CreateNodeSupplementRequestCreateCommandGlobalParamList[];
  /**
   * @remarks
   * The latest trigger time. Format: HH:MM. This parameter is dedicated to hourly nodes.
   * 
   * @example
   * 20:59
   */
  maxDueTime?: string;
  /**
   * @remarks
   * The earliest trigger time. Format: HH:MM. This parameter is dedicated to hourly nodes.
   * 
   * @example
   * 00:00
   */
  minDueTime?: string;
  /**
   * @remarks
   * The name of the data backfill task. If you do not specify this parameter, the system generates a name.
   * 
   * @example
   * xx test
   */
  name?: string;
  /**
   * @remarks
   * The IDs of the root nodes for data backfill. Multiple root nodes are supported.
   * 
   * This parameter is required.
   */
  nodeIdList?: CreateNodeSupplementRequestCreateCommandNodeIdList[];
  /**
   * @remarks
   * The custom parameters at runtime, configured by node.
   */
  nodeParamsList?: CreateNodeSupplementRequestCreateCommandNodeParamsList[];
  /**
   * @remarks
   * The concurrency. Default value: 1.
   * 
   * @example
   * 1
   */
  parallelism?: number;
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 101121
   */
  projectId?: number;
  /**
   * @remarks
   * Corresponds to the Task Run Time option in the data backfill dialog box on the page. Valid values:
   * - true: ignores the scheduled run time of instances and runs all instances immediately.
   * - false: waits for the scheduled run time of instances and runs each instance only when its scheduled time is reached.
   * Default value: true.
   */
  runImmediately?: boolean;
  /**
   * @remarks
   * The ID of the schedule resource group.
   * 
   * @example
   * 123
   */
  scheduleResourceGroupId?: string;
  /**
   * @remarks
   * The start business date. Format: YYYY-MM-DD.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-05-21
   */
  startBizDate?: string;
  static names(): { [key: string]: string } {
    return {
      containAllDownStream: 'ContainAllDownStream',
      downStreamNodeIdList: 'DownStreamNodeIdList',
      endBizDate: 'EndBizDate',
      executeStatusOfIdleNode: 'ExecuteStatusOfIdleNode',
      executeStatusOfPauseNode: 'ExecuteStatusOfPauseNode',
      filterList: 'FilterList',
      globalParamList: 'GlobalParamList',
      maxDueTime: 'MaxDueTime',
      minDueTime: 'MinDueTime',
      name: 'Name',
      nodeIdList: 'NodeIdList',
      nodeParamsList: 'NodeParamsList',
      parallelism: 'Parallelism',
      projectId: 'ProjectId',
      runImmediately: 'RunImmediately',
      scheduleResourceGroupId: 'ScheduleResourceGroupId',
      startBizDate: 'StartBizDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containAllDownStream: 'boolean',
      downStreamNodeIdList: { 'type': 'array', 'itemType': CreateNodeSupplementRequestCreateCommandDownStreamNodeIdList },
      endBizDate: 'string',
      executeStatusOfIdleNode: 'string',
      executeStatusOfPauseNode: 'string',
      filterList: { 'type': 'array', 'itemType': CreateNodeSupplementRequestCreateCommandFilterList },
      globalParamList: { 'type': 'array', 'itemType': CreateNodeSupplementRequestCreateCommandGlobalParamList },
      maxDueTime: 'string',
      minDueTime: 'string',
      name: 'string',
      nodeIdList: { 'type': 'array', 'itemType': CreateNodeSupplementRequestCreateCommandNodeIdList },
      nodeParamsList: { 'type': 'array', 'itemType': CreateNodeSupplementRequestCreateCommandNodeParamsList },
      parallelism: 'number',
      projectId: 'number',
      runImmediately: 'boolean',
      scheduleResourceGroupId: 'string',
      startBizDate: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.downStreamNodeIdList)) {
      $dara.Model.validateArray(this.downStreamNodeIdList);
    }
    if(Array.isArray(this.filterList)) {
      $dara.Model.validateArray(this.filterList);
    }
    if(Array.isArray(this.globalParamList)) {
      $dara.Model.validateArray(this.globalParamList);
    }
    if(Array.isArray(this.nodeIdList)) {
      $dara.Model.validateArray(this.nodeIdList);
    }
    if(Array.isArray(this.nodeParamsList)) {
      $dara.Model.validateArray(this.nodeParamsList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeSupplementRequest extends $dara.Model {
  /**
   * @remarks
   * The data backfill request.
   * 
   * This parameter is required.
   */
  createCommand?: CreateNodeSupplementRequestCreateCommand;
  /**
   * @remarks
   * The environment identifier. Valid values:
   * - DEV: development environment 
   * - PROD: production environment (default)
   * 
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      env: 'Env',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateNodeSupplementRequestCreateCommand,
      env: 'string',
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    if(this.createCommand && typeof (this.createCommand as any).validate === 'function') {
      (this.createCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

