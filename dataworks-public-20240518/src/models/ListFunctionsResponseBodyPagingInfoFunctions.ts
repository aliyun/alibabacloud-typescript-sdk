// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFunctionsResponseBodyPagingInfoFunctionsDataSource } from "./ListFunctionsResponseBodyPagingInfoFunctionsDataSource";
import { ListFunctionsResponseBodyPagingInfoFunctionsRuntimeResource } from "./ListFunctionsResponseBodyPagingInfoFunctionsRuntimeResource";
import { ListFunctionsResponseBodyPagingInfoFunctionsScript } from "./ListFunctionsResponseBodyPagingInfoFunctionsScript";


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

