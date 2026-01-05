// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourcesResponseBodyPagingInfoResourcesDataSource extends $dara.Model {
  /**
   * @remarks
   * The data source name.
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

export class ListResourcesResponseBodyPagingInfoResourcesScriptRuntime extends $dara.Model {
  /**
   * @remarks
   * Command. This parameter indicates the file type.
   * 
   * @example
   * ODPS_PYTHON
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

export class ListResourcesResponseBodyPagingInfoResourcesScript extends $dara.Model {
  /**
   * @remarks
   * Script ID.
   * 
   * >  Prior to SDK version 8.0.0, this field is of type Long. In SDK version 8.0.0 and later, it is of type String. This change does not affect the normal use of the SDK. The parameter is returned based on the type defined in the SDK. Compilation failures caused by the type change may occur only when you upgrade the SDK across version 8.0.0. In this case, you must manually update the data type.
   * 
   * @example
   * 123348864897630XXXX
   */
  id?: string;
  /**
   * @remarks
   * The script path.
   * 
   * @example
   * root/demo
   */
  path?: string;
  /**
   * @remarks
   * Runtime
   */
  runtime?: ListResourcesResponseBodyPagingInfoResourcesScriptRuntime;
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
      runtime: ListResourcesResponseBodyPagingInfoResourcesScriptRuntime,
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

export class ListResourcesResponseBodyPagingInfoResources extends $dara.Model {
  /**
   * @remarks
   * The time when the file resource was created. This value is a UNIX timestamp.
   * 
   * @example
   * 1724505917000
   */
  createTime?: number;
  /**
   * @remarks
   * The data source.
   */
  dataSource?: ListResourcesResponseBodyPagingInfoResourcesDataSource;
  /**
   * @remarks
   * The unique identifier of the file resource.
   * 
   * >  Prior to SDK version 8.0.0, this field is of type Long. In SDK version 8.0.0 and later, it is of type String. This change does not affect the normal use of the SDK. The parameter is returned based on the type defined in the SDK. Compilation failures caused by the type change may occur only when you upgrade the SDK across version 8.0.0. In this case, you must manually update the data type.
   * 
   * @example
   * 631478864897630XXXX
   */
  id?: string;
  /**
   * @remarks
   * The timestamp when the file resource was last modified.
   * 
   * @example
   * 1724505917000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * math.py
   */
  name?: string;
  /**
   * @remarks
   * The owner of the file resource.
   * 
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. To obtain the workspace ID, log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and navigate to the workspace configuration page.
   * 
   * @example
   * 344247
   */
  projectId?: number;
  /**
   * @remarks
   * The script information.
   */
  script?: ListResourcesResponseBodyPagingInfoResourcesScript;
  /**
   * @remarks
   * Source path of the file resource. This parameter is empty if the type is Local.
   * 
   * @example
   * XXX/unknown/ide/1/XXX/20240820200851_963a9da676de44ef8d06a6576a8c4d6a.py
   */
  sourcePath?: string;
  /**
   * @remarks
   * The source storage type of the file resource.
   * 
   * Valid values:
   * 
   * *   Local: Local storage
   * *   OSS: Object Storage Service
   * 
   * @example
   * local
   */
  sourceType?: string;
  /**
   * @remarks
   * The destination storage path
   * 
   * @example
   * XXX/unknown/ide/1/XXX/20240820200851_963a9da676de44ef8d06a6576a8c4d6a.py
   */
  targetPath?: string;
  /**
   * @remarks
   * The destination storage type.
   * 
   * Valid values:
   * 
   * *   Gateway
   * *   OSS
   * *   HDFS
   * 
   * @example
   * oss
   */
  targetType?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * Valid values:
   * 
   * *   Python
   * *   Jar
   * *   Archive
   * *   File
   * 
   * @example
   * jar
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataSource: 'DataSource',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      script: 'Script',
      sourcePath: 'SourcePath',
      sourceType: 'SourceType',
      targetPath: 'TargetPath',
      targetType: 'TargetType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      dataSource: ListResourcesResponseBodyPagingInfoResourcesDataSource,
      id: 'string',
      modifyTime: 'number',
      name: 'string',
      owner: 'string',
      projectId: 'number',
      script: ListResourcesResponseBodyPagingInfoResourcesScript,
      sourcePath: 'string',
      sourceType: 'string',
      targetPath: 'string',
      targetType: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.dataSource && typeof (this.dataSource as any).validate === 'function') {
      (this.dataSource as any).validate();
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

export class ListResourcesResponseBodyPagingInfo extends $dara.Model {
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
   * The returned resource list.
   */
  resources?: ListResourcesResponseBodyPagingInfoResources[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 131
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resources: 'Resources',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      resources: { 'type': 'array', 'itemType': ListResourcesResponseBodyPagingInfoResources },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListResourcesResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 99EBE7CF-69C0-5089-BE3E-79563C31XXXX
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
      pagingInfo: ListResourcesResponseBodyPagingInfo,
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

