// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFunctionsResponseBodyPagingInfoFunctionsDataSource extends $dara.Model {
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * odps_first
   */
  name?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * odps
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListFunctionsResponseBodyPagingInfoFunctionsRuntimeResource extends $dara.Model {
  /**
   * @remarks
   * The runtime resource group ID.
   * 
   * @example
   * S_resgrop_xxx
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponseBodyPagingInfoFunctionsScriptRuntime extends $dara.Model {
  /**
   * @remarks
   * Command
   * 
   * @example
   * ODPS_FUNCTION
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

export class ListFunctionsResponseBodyPagingInfoFunctionsScript extends $dara.Model {
  /**
   * @remarks
   * The script ID.
   * 
   * >  Prior to SDK version 8.0.0, this field is of type Long. In SDK version 8.0.0 and later, it is of type String. This change does not affect the normal use of the SDK. The parameter is returned based on the type defined in the SDK. Compilation failures caused by the type change may occur only when you upgrade the SDK across version 8.0.0. In this case, you must manually update the data type.
   * 
   * @example
   * 652567824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * The script path.
   * 
   * @example
   * XXX/OpenAPI/function/function_name
   */
  path?: string;
  /**
   * @remarks
   * Runtime
   */
  runtime?: ListFunctionsResponseBodyPagingInfoFunctionsScriptRuntime;
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
      runtime: ListFunctionsResponseBodyPagingInfoFunctionsScriptRuntime,
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

export class ListFunctionsResponseBodyPagingInfoFunctions extends $dara.Model {
  /**
   * @remarks
   * The list of resource files for the ARM cluster.
   * 
   * @example
   * xxx.jar,yyy.jar
   */
  armResource?: string;
  /**
   * @remarks
   * The fully qualified class name of the UDF.
   * 
   * @example
   * com.demo.Main
   */
  className?: string;
  /**
   * @remarks
   * The command description.
   * 
   * @example
   * testUdf(xx,yy)
   */
  commandDescription?: string;
  /**
   * @remarks
   * The timestamp when the UDF was created.
   * 
   * @example
   * 1655953028000
   */
  createTime?: number;
  /**
   * @remarks
   * Data source information of the UDF.
   */
  dataSource?: ListFunctionsResponseBodyPagingInfoFunctionsDataSource;
  /**
   * @remarks
   * The database name. This parameter is used only when the function type is EMR Function.
   * 
   * @example
   * odps_first
   */
  databaseName?: string;
  /**
   * @remarks
   * The general description of the function.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * Content of the nested function code
   * 
   * @example
   * print(\\"hello,world!\\")
   */
  embeddedCode?: string;
  /**
   * @remarks
   * The nested code type.
   * 
   * Valid values:
   * 
   * *   Python2
   * *   Python3
   * *   Java8
   * *   Java11
   * *   Java17
   * 
   * @example
   * Python2
   */
  embeddedCodeType?: string;
  /**
   * @remarks
   * The nested resource type.
   * 
   * Valid values:
   * 
   * *   File: General resource file
   * *   Embedded: Embedded resource
   * 
   * @example
   * File
   */
  embeddedResourceType?: string;
  /**
   * @remarks
   * The example description.
   * 
   * @example
   * Example description >>> select tsetUdf(xx,yy);
   * abc
   */
  exampleDescription?: string;
  /**
   * @remarks
   * The implementation code of the function and the list of resource files.
   * 
   * @example
   * xxx.jar,yyy.jar
   */
  fileResource?: string;
  /**
   * @remarks
   * The unique identifier of the UDF.
   * 
   * >  Prior to SDK version 8.0.0, this field is of type Long. In SDK version 8.0.0 and later, it is of type String. This change does not affect the normal use of the SDK. The parameter is returned based on the type defined in the SDK. Compilation failures caused by the type change may occur only when you upgrade the SDK across version 8.0.0. In this case, you must manually update the data type.
   * 
   * @example
   * 580667964888595XXXX
   */
  id?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1655953028000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The UDF name.
   * 
   * @example
   * Function name
   */
  name?: string;
  /**
   * @remarks
   * The owner of the UDF.
   * 
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * xx: parameter information XXX
   * yy: parameter information YYY
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The ID of the project to which the UDF belongs.
   * 
   * @example
   * 307XXX
   */
  projectId?: number;
  /**
   * @remarks
   * The return value description.
   * 
   * @example
   * The return value is a string.
   */
  returnValueDescription?: string;
  /**
   * @remarks
   * The runtime resource group information.
   */
  runtimeResource?: ListFunctionsResponseBodyPagingInfoFunctionsRuntimeResource;
  /**
   * @remarks
   * Script information of the UDF.
   */
  script?: ListFunctionsResponseBodyPagingInfoFunctionsScript;
  /**
   * @remarks
   * The UDF type.
   * 
   * Valid values:
   * 
   * *   Math: Mathematical operation functions
   * *   Aggregate: Aggregation functions
   * *   String: String processing functions
   * *   Date: Date functions
   * *   Analytic: Window functions
   * *   Other: Other functions
   * 
   * @example
   * MATH
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      armResource: 'ArmResource',
      className: 'ClassName',
      commandDescription: 'CommandDescription',
      createTime: 'CreateTime',
      dataSource: 'DataSource',
      databaseName: 'DatabaseName',
      description: 'Description',
      embeddedCode: 'EmbeddedCode',
      embeddedCodeType: 'EmbeddedCodeType',
      embeddedResourceType: 'EmbeddedResourceType',
      exampleDescription: 'ExampleDescription',
      fileResource: 'FileResource',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      parameterDescription: 'ParameterDescription',
      projectId: 'ProjectId',
      returnValueDescription: 'ReturnValueDescription',
      runtimeResource: 'RuntimeResource',
      script: 'Script',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      armResource: 'string',
      className: 'string',
      commandDescription: 'string',
      createTime: 'number',
      dataSource: ListFunctionsResponseBodyPagingInfoFunctionsDataSource,
      databaseName: 'string',
      description: 'string',
      embeddedCode: 'string',
      embeddedCodeType: 'string',
      embeddedResourceType: 'string',
      exampleDescription: 'string',
      fileResource: 'string',
      id: 'string',
      modifyTime: 'number',
      name: 'string',
      owner: 'string',
      parameterDescription: 'string',
      projectId: 'number',
      returnValueDescription: 'string',
      runtimeResource: ListFunctionsResponseBodyPagingInfoFunctionsRuntimeResource,
      script: ListFunctionsResponseBodyPagingInfoFunctionsScript,
      type: 'string',
    };
  }

  validate() {
    if(this.dataSource && typeof (this.dataSource as any).validate === 'function') {
      (this.dataSource as any).validate();
    }
    if(this.runtimeResource && typeof (this.runtimeResource as any).validate === 'function') {
      (this.runtimeResource as any).validate();
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

export class ListFunctionsResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The function list.
   */
  functions?: ListFunctionsResponseBodyPagingInfoFunctions[];
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
   * The total number of entries returned.
   * 
   * @example
   * 294
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      functions: 'Functions',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functions: { 'type': 'array', 'itemType': ListFunctionsResponseBodyPagingInfoFunctions },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.functions)) {
      $dara.Model.validateArray(this.functions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListFunctionsResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 89FB2BF0-EB00-5D03-9C34-05931001XXXX
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
      pagingInfo: ListFunctionsResponseBodyPagingInfo,
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

