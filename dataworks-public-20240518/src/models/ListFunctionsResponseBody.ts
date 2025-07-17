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
   * The ID of the resource group used when you run the UDF.
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
   * The command.
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
   * @example
   * 652567824470354XXXX
   */
  id?: number;
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
   * The runtime.
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
      id: 'number',
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
   * The file resources in an Advanced RISC Machines (ARM) cluster.
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
   * The description of the command.
   * 
   * @example
   * testUdf(xx,yy)
   */
  commandDescription?: string;
  /**
   * @remarks
   * The time when the UDF was created. This value is a UNIX timestamp.
   * 
   * @example
   * 1655953028000
   */
  createTime?: number;
  /**
   * @remarks
   * The data source information about the UDF.
   */
  dataSource?: ListFunctionsResponseBodyPagingInfoFunctionsDataSource;
  /**
   * @remarks
   * The name of the database. This parameter is returned for E-MapReduce (EMR) functions.
   * 
   * @example
   * odps_first
   */
  databaseName?: string;
  /**
   * @remarks
   * The overall description of the UDF.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The code of the embedded UDF.
   * 
   * @example
   * print(\\"hello,world!\\")
   */
  embeddedCode?: string;
  /**
   * @remarks
   * The type of the nested code.
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
   * The type of the nested resource.
   * 
   * Valid values:
   * 
   * *   File: general resources
   * *   Embedded: embedded resources
   * 
   * @example
   * File
   */
  embeddedResourceType?: string;
  /**
   * @remarks
   * The description of the example.
   * 
   * @example
   * Example description >>> select tsetUdf(xx,yy);
   * abc
   */
  exampleDescription?: string;
  /**
   * @remarks
   * The files resources.
   * 
   * @example
   * xxx.jar,yyy.jar
   */
  fileResource?: string;
  /**
   * @remarks
   * The ID of the UDF.
   * 
   * @example
   * 580667964888595XXXX
   */
  id?: number;
  /**
   * @remarks
   * The time when the UDF was last modified. This value is a UNIX timestamp.
   * 
   * @example
   * 1655953028000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name of the UDF.
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
   * The description of the parameter.
   * 
   * @example
   * xx: parameter information XXX
   * yy: parameter information YYY
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The ID of the workspace to which the UDF belongs.
   * 
   * @example
   * 307XXX
   */
  projectId?: number;
  /**
   * @remarks
   * The description of the return value.
   * 
   * @example
   * The return value is a string.
   */
  returnValueDescription?: string;
  /**
   * @remarks
   * The information about the resource group used when you run the UDF.
   */
  runtimeResource?: ListFunctionsResponseBodyPagingInfoFunctionsRuntimeResource;
  /**
   * @remarks
   * The script information about the UDF.
   */
  script?: ListFunctionsResponseBodyPagingInfoFunctionsScript;
  /**
   * @remarks
   * The UDF type.
   * 
   * Valid values:
   * 
   * *   Math: mathematical operation function
   * *   Aggregate: aggregate function
   * *   String: string processing function
   * *   Date: date function
   * *   Analytic: window function
   * *   Other: other functions
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
      id: 'number',
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
   * The UDFs.
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

