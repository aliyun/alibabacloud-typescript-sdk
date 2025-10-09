// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComponentsResponseBodyPagingInfoComponentsInputs extends $dara.Model {
  /**
   * @remarks
   * 输入参数的默认值
   * 
   * @example
   * mdb.shard.2x.2xlarge.d
   */
  defaultValue?: string;
  /**
   * @remarks
   * 输入参数的描述信息
   * 
   * @example
   * None
   */
  description?: string;
  /**
   * @remarks
   * 输入参数的名称
   * 
   * @example
   * auto_updateAlertRule_test_bULIRo
   */
  name?: string;
  /**
   * @remarks
   * 输入参数的数据类型
   * 
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      description: 'Description',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      description: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBodyPagingInfoComponentsOutputs extends $dara.Model {
  /**
   * @remarks
   * 输出参数的默认值
   * 
   * @example
   * 32000
   */
  defaultValue?: string;
  /**
   * @remarks
   * 输出参数的描述信息
   * 
   * @example
   * zdy
   */
  description?: string;
  /**
   * @remarks
   * 输出参数的名称
   * 
   * @example
   * auto_updateAlertRule_test_bULIRo
   */
  name?: string;
  /**
   * @remarks
   * 输出参数的数据类型
   * 
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      description: 'Description',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      description: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBodyPagingInfoComponentsScriptRuntime extends $dara.Model {
  /**
   * @remarks
   * 脚本所属类型
   * 
   * @example
   * SQL_COMPONENT
   */
  command?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBodyPagingInfoComponentsScript extends $dara.Model {
  /**
   * @remarks
   * ID
   * 
   * @example
   * 348100
   */
  id?: string;
  /**
   * @remarks
   * 脚本路径
   * 
   * @example
   * /
   */
  path?: string;
  /**
   * @remarks
   * 脚本的运行时信息
   */
  runtime?: ListComponentsResponseBodyPagingInfoComponentsScriptRuntime;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      path: 'Path',
      runtime: 'Runtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      path: 'string',
      runtime: ListComponentsResponseBodyPagingInfoComponentsScriptRuntime,
    };
  }

  validate() {
    if(this.runtime && typeof (this.runtime as any).validate === 'function') {
      (this.runtime as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBodyPagingInfoComponents extends $dara.Model {
  /**
   * @example
   * 12312313123
   */
  componentId?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2023-03-13 16:35:59
   */
  createTime?: string;
  /**
   * @remarks
   * 对组件的描述
   * 
   * @example
   * vpc peering management_staging
   */
  description?: string;
  /**
   * @remarks
   * 组件的输入参数列表
   */
  inputs?: ListComponentsResponseBodyPagingInfoComponentsInputs[];
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2023-11-30T13:30:58Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * 代表资源名称的资源属性字段
   * 
   * @example
   * auto_updateAlertRule_test_lJd81f
   */
  name?: string;
  /**
   * @remarks
   * 组件的输出参数列表
   */
  outputs?: ListComponentsResponseBodyPagingInfoComponentsOutputs[];
  /**
   * @remarks
   * 组件责任人
   * 
   * @example
   * 252675537980665607
   */
  owner?: string;
  /**
   * @example
   * 199925
   */
  projectId?: number;
  /**
   * @remarks
   * 工作流的脚本信息
   */
  script?: ListComponentsResponseBodyPagingInfoComponentsScript;
  static names(): { [key: string]: string } {
    return {
      componentId: 'ComponentId',
      createTime: 'CreateTime',
      description: 'Description',
      inputs: 'Inputs',
      modifyTime: 'ModifyTime',
      name: 'Name',
      outputs: 'Outputs',
      owner: 'Owner',
      projectId: 'ProjectId',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentId: 'string',
      createTime: 'string',
      description: 'string',
      inputs: { 'type': 'array', 'itemType': ListComponentsResponseBodyPagingInfoComponentsInputs },
      modifyTime: 'string',
      name: 'string',
      outputs: { 'type': 'array', 'itemType': ListComponentsResponseBodyPagingInfoComponentsOutputs },
      owner: 'string',
      projectId: 'number',
      script: ListComponentsResponseBodyPagingInfoComponentsScript,
    };
  }

  validate() {
    if(Array.isArray(this.inputs)) {
      $dara.Model.validateArray(this.inputs);
    }
    if(Array.isArray(this.outputs)) {
      $dara.Model.validateArray(this.outputs);
    }
    if(this.script && typeof (this.script as any).validate === 'function') {
      (this.script as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBodyPagingInfo extends $dara.Model {
  components?: ListComponentsResponseBodyPagingInfoComponents[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      components: 'Components',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      components: { 'type': 'array', 'itemType': ListComponentsResponseBodyPagingInfoComponents },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBody extends $dara.Model {
  pagingInfo?: ListComponentsResponseBodyPagingInfo;
  /**
   * @example
   * 952795279527ab****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListComponentsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

