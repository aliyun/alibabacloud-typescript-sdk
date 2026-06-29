// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceResponseBodyResourceInfo extends $dara.Model {
  /**
   * @remarks
   * The compute engine type.
   * 
   * @example
   * MAX_COMPUTE
   */
  computeEngineType?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * 30011021
   */
  creator?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 测试
   */
  description?: string;
  /**
   * @remarks
   * The directory where the resource is stored.
   * 
   * @example
   * /
   */
  directory?: string;
  /**
   * @remarks
   * The creation time, in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2025-06-10 10:01:01
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last modification time, in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2025-06-10 10:01:01
   */
  gmtModified?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * 10200121011
   */
  id?: number;
  /**
   * @remarks
   * The last modifier.
   * 
   * @example
   * 30011021
   */
  lastModifier?: string;
  /**
   * @remarks
   * The name of the resource file.
   * 
   * @example
   * udf_sleep.jar
   */
  name?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 1030111021
   */
  projectId?: number;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * JAR
   */
  resourceType?: string;
  /**
   * @remarks
   * The size of the resource, in bytes.
   * 
   * @example
   * 102400
   */
  size?: number;
  /**
   * @remarks
   * The storage address of the resource.
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

export class GetResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The details of the backend exception.
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
   * The resource file details.
   */
  resourceInfo?: GetResourceResponseBodyResourceInfo;
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
      resourceInfo: GetResourceResponseBodyResourceInfo,
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

