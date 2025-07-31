// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNodeSupplementRequestCreateCommandDownStreamNodeIdList extends $dara.Model {
  fieldIdList?: string[];
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
  exclude?: boolean;
  key?: string;
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
  key?: string;
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
  fieldIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
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
  key?: string;
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
  nodeId?: string;
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
  containAllDownStream?: boolean;
  downStreamNodeIdList?: CreateNodeSupplementRequestCreateCommandDownStreamNodeIdList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2021-06-01
   */
  endBizDate?: string;
  filterList?: CreateNodeSupplementRequestCreateCommandFilterList[];
  globalParamList?: CreateNodeSupplementRequestCreateCommandGlobalParamList[];
  maxDueTime?: string;
  minDueTime?: string;
  /**
   * @example
   * xx测试
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  nodeIdList?: CreateNodeSupplementRequestCreateCommandNodeIdList[];
  nodeParamsList?: CreateNodeSupplementRequestCreateCommandNodeParamsList[];
  parallelism?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 101121
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2021-06-01
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
   * This parameter is required.
   */
  createCommand?: CreateNodeSupplementRequestCreateCommand;
  /**
   * @example
   * DEV/PROD
   */
  env?: string;
  /**
   * @remarks
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

