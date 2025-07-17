// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourcesResponseBodyPagingInfoResourcesDataSource extends $dara.Model {
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

export class ListResourcesResponseBodyPagingInfoResourcesScriptRuntime extends $dara.Model {
  /**
   * @remarks
   * The command used to distinguish file resource types.
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
   * The script ID.
   * 
   * @example
   * 123348864897630XXXX
   */
  id?: number;
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
   * The runtime.
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
      id: 'number',
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
   * The information about the data source.
   */
  dataSource?: ListResourcesResponseBodyPagingInfoResourcesDataSource;
  /**
   * @remarks
   * The ID of the file resource.
   * 
   * @example
   * 631478864897630XXXX
   */
  id?: number;
  /**
   * @remarks
   * The times when the file resource was last modified. This value is a UNIX timestamp.
   * 
   * @example
   * 1724505917000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name of the file resource.
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
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to obtain the ID.
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
   * The path of the source of the file resource. If the SourecType parameter is set to Local, this parameter is left empty.
   * 
   * @example
   * XXX/unknown/ide/1/XXX/20240820200851_963a9da676de44ef8d06a6576a8c4d6a.py
   */
  sourcePath?: string;
  /**
   * @remarks
   * The storage type of the source of the file resource.
   * 
   * Valid values:
   * 
   * *   Local
   * *   Oss
   * 
   * @example
   * local
   */
  sourceType?: string;
  /**
   * @remarks
   * The storage path of the destination of the file resource.
   * 
   * @example
   * XXX/unknown/ide/1/XXX/20240820200851_963a9da676de44ef8d06a6576a8c4d6a.py
   */
  targetPath?: string;
  /**
   * @remarks
   * The storage type of the destination of the file resource.
   * 
   * Valid values:
   * 
   * *   Gateway
   * *   Oss
   * *   Hdfs
   * 
   * @example
   * oss
   */
  targetType?: string;
  /**
   * @remarks
   * The type of the file resource.
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
      id: 'number',
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
   * The queried file resources.
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

