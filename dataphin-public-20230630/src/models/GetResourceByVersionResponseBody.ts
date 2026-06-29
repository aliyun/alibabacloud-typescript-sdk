// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceByVersionResponseBodyResourceInfo extends $dara.Model {
  /**
   * @remarks
   * Compute engine type.
   * 
   * @example
   * MAX_COMPUTE
   */
  computeEngineType?: string;
  /**
   * @remarks
   * Creator.
   * 
   * @example
   * 30011021
   */
  creator?: string;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * 测试
   */
  description?: string;
  /**
   * @remarks
   * Storage directory.
   * 
   * @example
   * /
   */
  directory?: string;
  /**
   * @remarks
   * Creation time, format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2025-06-10 10:01:01
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Modification time, format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2025-06-10 10:01:01
   */
  gmtModified?: string;
  /**
   * @remarks
   * Resource ID.
   * 
   * @example
   * 10200121011
   */
  id?: number;
  /**
   * @remarks
   * Last modifier.
   * 
   * @example
   * 30011021
   */
  lastModifier?: string;
  /**
   * @remarks
   * Resource file name.
   * 
   * @example
   * udf_sleep.jar
   */
  name?: string;
  /**
   * @remarks
   * Project ID.
   * 
   * @example
   * 1030111021
   */
  projectId?: number;
  /**
   * @remarks
   * Resource type.
   * 
   * @example
   * JAR
   */
  resourceType?: string;
  /**
   * @remarks
   * Resource size, unit: bytes.
   * 
   * @example
   * 102400
   */
  size?: number;
  /**
   * @remarks
   * Resource storage address.
   * 
   * @example
   * 300011448/711833/cdcd1c44-f1ee-46bb-b318-1d123dbabf6c
   */
  storageAddress?: string;
  static names(): { [key: string]: string } {
    return {
      computeEngineType: 'ComputeEngineType',
      creator: 'Creator',
      description: 'Description',
      directory: 'Directory',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      lastModifier: 'LastModifier',
      name: 'Name',
      projectId: 'ProjectId',
      resourceType: 'ResourceType',
      size: 'Size',
      storageAddress: 'StorageAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeEngineType: 'string',
      creator: 'string',
      description: 'string',
      directory: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      lastModifier: 'string',
      name: 'string',
      projectId: 'number',
      resourceType: 'string',
      size: 'number',
      storageAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceByVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Backend error details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Resource file details.
   */
  resourceInfo?: GetResourceByVersionResponseBodyResourceInfo;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      resourceInfo: 'ResourceInfo',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      resourceInfo: GetResourceByVersionResponseBodyResourceInfo,
      success: 'boolean',
    };
  }

  validate() {
    if(this.resourceInfo && typeof (this.resourceInfo as any).validate === 'function') {
      (this.resourceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

