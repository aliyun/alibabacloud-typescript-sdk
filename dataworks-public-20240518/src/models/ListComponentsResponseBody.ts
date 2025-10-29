// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComponentsResponseBodyPagingInfoComponentsInputs extends $dara.Model {
  /**
   * @remarks
   * The default value of the variable.
   * 
   * @example
   * mdb.shard.2x.2xlarge.d
   */
  defaultValue?: string;
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * None
   */
  description?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * auto_updateAlertRule_test_bULIRo
   */
  name?: string;
  /**
   * @remarks
   * The parameter type.
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
   * The default value.
   * 
   * @example
   * 32000
   */
  defaultValue?: string;
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * zdy
   */
  description?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * auto_updateAlertRule_test_bULIRo
   */
  name?: string;
  /**
   * @remarks
   * The parameter type.
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
   * The command.
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
   * The script path.
   * 
   * @example
   * /
   */
  path?: string;
  /**
   * @remarks
   * The runtime.
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
   * @remarks
   * The component ID. This parameter can be used in requests to query, modify, or delete director components.
   * 
   * @example
   * 12312313123
   */
  componentId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2023-03-13 16:35:59
   */
  createTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * vpc peering management_staging
   */
  description?: string;
  /**
   * @remarks
   * The input parameters.
   */
  inputs?: ListComponentsResponseBodyPagingInfoComponentsInputs[];
  /**
   * @remarks
   * The timestamp when the publishing process was modified.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2023-11-30T13:30:58Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * auto_updateAlertRule_test_lJd81f
   */
  name?: string;
  /**
   * @remarks
   * The output parameters.
   */
  outputs?: ListComponentsResponseBodyPagingInfoComponentsOutputs[];
  /**
   * @remarks
   * The owner.
   * 
   * @example
   * 252675537980665607
   */
  owner?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. To obtain the workspace ID, log on to the DataWorks console and navigate to the workspace configuration page. You must specify either this parameter or ProjectIdentifier to identify the target DataWorks workspace for this API call.
   * 
   * @example
   * 199925
   */
  projectId?: number;
  /**
   * @remarks
   * The script information.
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
  /**
   * @remarks
   * The UID of the user who created the dataset acceleration component. In Alibaba Cloud, this is the RAM user ID (or the Alibaba Cloud account ID if created by the account itself).
   */
  components?: ListComponentsResponseBodyPagingInfoComponents[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
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
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListComponentsResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID. Use this ID for troubleshooting.
   * 
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

