// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserOwnedResourcesResponseBodyDataResourceList extends $dara.Model {
  alias?: string;
  dbId?: string;
  dbInstanceId?: string;
  dbType?: string;
  envType?: string;
  host?: string;
  instanceId?: string;
  logic?: boolean;
  port?: number;
  schemaName?: string;
  searchName?: string;
  tableId?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      dbId: 'DbId',
      dbInstanceId: 'DbInstanceId',
      dbType: 'DbType',
      envType: 'EnvType',
      host: 'Host',
      instanceId: 'InstanceId',
      logic: 'Logic',
      port: 'Port',
      schemaName: 'SchemaName',
      searchName: 'SearchName',
      tableId: 'TableId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      dbId: 'string',
      dbInstanceId: 'string',
      dbType: 'string',
      envType: 'string',
      host: 'string',
      instanceId: 'string',
      logic: 'boolean',
      port: 'number',
      schemaName: 'string',
      searchName: 'string',
      tableId: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserOwnedResourcesResponseBodyData extends $dara.Model {
  resourceList?: ListUserOwnedResourcesResponseBodyDataResourceList[];
  static names(): { [key: string]: string } {
    return {
      resourceList: 'resourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceList: { 'type': 'array', 'itemType': ListUserOwnedResourcesResponseBodyDataResourceList },
    };
  }

  validate() {
    if(Array.isArray(this.resourceList)) {
      $dara.Model.validateArray(this.resourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserOwnedResourcesResponseBody extends $dara.Model {
  data?: ListUserOwnedResourcesResponseBodyData;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID. You can use the request ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 8E88933E-E3D4-5BA8-8CBF-0A1CAE666690
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned. By default, this parameter is not returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListUserOwnedResourcesResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

