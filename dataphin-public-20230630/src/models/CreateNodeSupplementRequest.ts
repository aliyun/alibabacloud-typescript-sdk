// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNodeSupplementRequestCreateCommandDownStreamNodeIdList extends $dara.Model {
  /**
   * @remarks
   * Field ID
   */
  fieldIdList?: string[];
  /**
   * @remarks
   * Node ID
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
   * Filter key. Valid values:
   * - PROJECT: project
   * - NODE_OUTPUT_NAME: node output name
   * - NODE_NAME: node name
   * - NODE_ID: node ID
   * - TARGETS: specified endpoints
   * - SOURCES: specified start points
   * 
   * @example
   * NODE_OUTPUT_NAME
   */
  key?: string;
  /**
   * @remarks
   * Filter value list
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
   * Parameter key
   * 
   * @example
   * param1
   */
  key?: string;
  /**
   * @remarks
   * Parameter value
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
   * Field ID list: Can be specified when the node is a logical table node ID. If not specified, the entire table is used by default.
   */
  fieldIdList?: string[];
  /**
   * @remarks
   * Node ID
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
   * Parameter key
   * 
   * @example
   * param1
   */
  key?: string;
  /**
   * @remarks
   * Parameter value
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
   * Node ID
   * 
   * @example
   * n_23324
   */
  nodeId?: string;
  /**
   * @remarks
   * Parameter list
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
   * Bulk mode: Include all downstream nodes. Default value: false.
   * 
   * @example
   * false
   */
  containAllDownStream?: boolean;
  /**
   * @remarks
   * Downstream node IDs. Specifies downstream nodes for execution.
   */
  downStreamNodeIdList?: CreateNodeSupplementRequestCreateCommandDownStreamNodeIdList[];
  /**
   * @remarks
   * End business date
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-05-21
   */
  endBizDate?: string;
  /**
   * @remarks
   * Filter list: Used together with ContainAllDownStream. You can include or exclude items based on project, node, and other criteria. Default value: empty.
   */
  filterList?: CreateNodeSupplementRequestCreateCommandFilterList[];
  /**
   * @remarks
   * Runtime global parameters
   */
  globalParamList?: CreateNodeSupplementRequestCreateCommandGlobalParamList[];
  /**
   * @remarks
   * Latest trigger time (HH:MM). This parameter applies only to hourly tasks.
   * 
   * @example
   * 20:59
   */
  maxDueTime?: string;
  /**
   * @remarks
   * Earliest trigger time (HH:MM). This parameter applies only to hourly tasks.
   * 
   * @example
   * 00:00
   */
  minDueTime?: string;
  /**
   * @remarks
   * Backfill name. If not specified, a name is automatically generated by the system.
   * 
   * @example
   * xx测试
   */
  name?: string;
  /**
   * @remarks
   * Root nodes for backfill. Multiple root nodes are supported.
   * 
   * This parameter is required.
   */
  nodeIdList?: CreateNodeSupplementRequestCreateCommandNodeIdList[];
  /**
   * @remarks
   * Runtime custom parameters, configured per node
   */
  nodeParamsList?: CreateNodeSupplementRequestCreateCommandNodeParamsList[];
  /**
   * @remarks
   * Concurrency. Default value: 1.
   * 
   * @example
   * 1
   */
  parallelism?: number;
  /**
   * @remarks
   * Project ID
   * 
   * This parameter is required.
   * 
   * @example
   * 101121
   */
  projectId?: number;
  /**
   * @remarks
   * Start business date
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
      filterList: 'FilterList',
      globalParamList: 'GlobalParamList',
      maxDueTime: 'MaxDueTime',
      minDueTime: 'MinDueTime',
      name: 'Name',
      nodeIdList: 'NodeIdList',
      nodeParamsList: 'NodeParamsList',
      parallelism: 'Parallelism',
      projectId: 'ProjectId',
      startBizDate: 'StartBizDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containAllDownStream: 'boolean',
      downStreamNodeIdList: { 'type': 'array', 'itemType': CreateNodeSupplementRequestCreateCommandDownStreamNodeIdList },
      endBizDate: 'string',
      filterList: { 'type': 'array', 'itemType': CreateNodeSupplementRequestCreateCommandFilterList },
      globalParamList: { 'type': 'array', 'itemType': CreateNodeSupplementRequestCreateCommandGlobalParamList },
      maxDueTime: 'string',
      minDueTime: 'string',
      name: 'string',
      nodeIdList: { 'type': 'array', 'itemType': CreateNodeSupplementRequestCreateCommandNodeIdList },
      nodeParamsList: { 'type': 'array', 'itemType': CreateNodeSupplementRequestCreateCommandNodeParamsList },
      parallelism: 'number',
      projectId: 'number',
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
   * Create backfill request
   * 
   * This parameter is required.
   */
  createCommand?: CreateNodeSupplementRequestCreateCommand;
  /**
   * @remarks
   * Environment identifier.
   * - DEV: development environment.
   * - PROD (default): production environment.
   * 
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * Tenant ID
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      env: 'Env',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateNodeSupplementRequestCreateCommand,
      env: 'string',
      opTenantId: 'number',
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

