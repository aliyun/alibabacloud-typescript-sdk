// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataServiceApiRequestCreateCommandScriptDetailsScriptRequestParameters extends $dara.Model {
  /**
   * @example
   * test
   */
  exampleValue?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  isRequiredParameter?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * STRING
   */
  parameterDataType?: string;
  parameterDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * d
   */
  parameterName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * =
   */
  parameterValueType?: string;
  static names(): { [key: string]: string } {
    return {
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterValueType: 'ParameterValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
      parameterDataType: 'string',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterValueType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataServiceApiRequestCreateCommandScriptDetailsScriptResponseParameters extends $dara.Model {
  /**
   * @example
   * amazing
   */
  exampleValue?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * STRING
   */
  parameterDataType?: string;
  parameterDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a
   */
  parameterName?: string;
  static names(): { [key: string]: string } {
    return {
      exampleValue: 'ExampleValue',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exampleValue: 'string',
      parameterDataType: 'string',
      parameterDescription: 'string',
      parameterName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataServiceApiRequestCreateCommandScriptDetails extends $dara.Model {
  /**
   * @example
   * 6668888888888812345L
   */
  datasourceID?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  datasourceType?: number;
  /**
   * @example
   * false
   */
  isPaginated?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * select a,b,c from table1 where d = ${d}
   */
  script?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  scriptRequestParameters?: CreateDataServiceApiRequestCreateCommandScriptDetailsScriptRequestParameters[];
  /**
   * @remarks
   * This parameter is required.
   */
  scriptResponseParameters?: CreateDataServiceApiRequestCreateCommandScriptDetailsScriptResponseParameters[];
  /**
   * @example
   * 2
   */
  sortPriority?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  sqlMode?: number;
  static names(): { [key: string]: string } {
    return {
      datasourceID: 'DatasourceID',
      datasourceType: 'DatasourceType',
      isPaginated: 'IsPaginated',
      script: 'Script',
      scriptRequestParameters: 'ScriptRequestParameters',
      scriptResponseParameters: 'ScriptResponseParameters',
      sortPriority: 'SortPriority',
      sqlMode: 'SqlMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasourceID: 'number',
      datasourceType: 'number',
      isPaginated: 'boolean',
      script: 'string',
      scriptRequestParameters: { 'type': 'array', 'itemType': CreateDataServiceApiRequestCreateCommandScriptDetailsScriptRequestParameters },
      scriptResponseParameters: { 'type': 'array', 'itemType': CreateDataServiceApiRequestCreateCommandScriptDetailsScriptResponseParameters },
      sortPriority: 'number',
      sqlMode: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scriptRequestParameters)) {
      $dara.Model.validateArray(this.scriptRequestParameters);
    }
    if(Array.isArray(this.scriptResponseParameters)) {
      $dara.Model.validateArray(this.scriptResponseParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataServiceApiRequestCreateCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 101
   */
  apiGroupId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  apiGroupName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * API_01
   */
  apiName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  apiType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  bizProtocol?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 600
   */
  cacheTimeout?: number;
  /**
   * @example
   * 1
   */
  callMode?: number;
  customUpdateRate?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 30
   */
  executionTimeout?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  mode?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  requestType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  scriptDetails?: CreateDataServiceApiRequestCreateCommandScriptDetails;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30
   */
  timeout?: number;
  /**
   * @example
   * 1
   */
  updateRate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * V1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      apiGroupId: 'ApiGroupId',
      apiGroupName: 'ApiGroupName',
      apiName: 'ApiName',
      apiType: 'ApiType',
      bizProtocol: 'BizProtocol',
      cacheTimeout: 'CacheTimeout',
      callMode: 'CallMode',
      customUpdateRate: 'CustomUpdateRate',
      description: 'Description',
      executionTimeout: 'ExecutionTimeout',
      mode: 'Mode',
      projectId: 'ProjectId',
      requestType: 'RequestType',
      scriptDetails: 'ScriptDetails',
      timeout: 'Timeout',
      updateRate: 'UpdateRate',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiGroupId: 'number',
      apiGroupName: 'string',
      apiName: 'string',
      apiType: 'number',
      bizProtocol: { 'type': 'array', 'itemType': 'number' },
      cacheTimeout: 'number',
      callMode: 'number',
      customUpdateRate: 'string',
      description: 'string',
      executionTimeout: 'number',
      mode: 'number',
      projectId: 'number',
      requestType: 'number',
      scriptDetails: CreateDataServiceApiRequestCreateCommandScriptDetails,
      timeout: 'number',
      updateRate: 'number',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bizProtocol)) {
      $dara.Model.validateArray(this.bizProtocol);
    }
    if(this.scriptDetails && typeof (this.scriptDetails as any).validate === 'function') {
      (this.scriptDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataServiceApiRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  createCommand?: CreateDataServiceApiRequestCreateCommand;
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
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateDataServiceApiRequestCreateCommand,
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

