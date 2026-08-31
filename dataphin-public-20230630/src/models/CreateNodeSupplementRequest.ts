// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNodeSupplementRequestCreateCommandDownStreamNodeIdList extends $dara.Model {
  /**
   * @remarks
   * The field ID.
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
   * - TARGETS: specified endpoints
   * - SOURCES: specified start points
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
   * The list of field IDs. This parameter is applicable when the node ID is a logical table node ID. If this parameter is not specified, all fields in the table are used by default.
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
   * The parameter list.
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
   * Specifies whether to include all downstream nodes in batch mode. Default value: false.
   * 
   * @example
   * false
   */
  containAllDownStream?: boolean;
  /**
   * @remarks
   * The IDs of downstream nodes to run. This parameter takes effect only when ContainAllDownStream is set to false.
   */
  downStreamNodeIdList?: CreateNodeSupplementRequestCreateCommandDownStreamNodeIdList[];
  /**
   * @remarks
   * The end business date.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-05-21
   */
  endBizDate?: string;
  /**
   * @remarks
   * The list of filters. This parameter is used together with ContainAllDownStream to include or exclude nodes based on criteria such as project or node. Default value: empty.
   */
  filterList?: CreateNodeSupplementRequestCreateCommandFilterList[];
  /**
   * @remarks
   * The runtime global parameters.
   */
  globalParamList?: CreateNodeSupplementRequestCreateCommandGlobalParamList[];
  /**
   * @remarks
   * The latest trigger time in the HH:MM format. This parameter is applicable only to hourly nodes.
   * 
   * @example
   * 20:59
   */
  maxDueTime?: string;
  /**
   * @remarks
   * The earliest trigger time in the HH:MM format. This parameter is applicable only to hourly nodes.
   * 
   * @example
   * 00:00
   */
  minDueTime?: string;
  /**
   * @remarks
   * The name of the data backfill. If this parameter is not specified, the system automatically generates a name.
   * 
   * @example
   * TestBackfill
   */
  name?: string;
  /**
   * @remarks
   * The root nodes for data backfill. Multiple root nodes are supported.
   * 
   * This parameter is required.
   */
  nodeIdList?: CreateNodeSupplementRequestCreateCommandNodeIdList[];
  /**
   * @remarks
   * The runtime custom parameters configured by node.
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
   * Corresponds to the "Task Run Time" option in the data backfill dialog box. If this parameter is set to true, the scheduled run time of instances is ignored and all instances run immediately. If this parameter is set to false, instances wait for their scheduled run time before running. Default value: true.
   */
  runImmediately?: boolean;
  /**
   * @remarks
   * The start business date.
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
      runImmediately: 'RunImmediately',
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
      runImmediately: 'boolean',
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
   * - DEV: Development environment. 
   * - PROD (default): Production environment.
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
   * The ID of the operator user.
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

