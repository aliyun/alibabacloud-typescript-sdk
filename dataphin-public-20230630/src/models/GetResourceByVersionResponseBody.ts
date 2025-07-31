// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceByVersionResponseBodyResourceInfo extends $dara.Model {
  /**
   * @example
   * MAX_COMPUTE
   */
  computeEngineType?: string;
  /**
   * @example
   * 30011021
   */
  creator?: string;
  /**
   * @example
   * 测试
   */
  description?: string;
  /**
   * @example
   * /
   */
  directory?: string;
  /**
   * @example
   * 2025-06-10 10:01:01
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-06-10 10:01:01
   */
  gmtModified?: string;
  /**
   * @example
   * 10200121011
   */
  id?: number;
  /**
   * @example
   * 30011021
   */
  lastModifier?: string;
  /**
   * @example
   * udf_sleep.jar
   */
  name?: string;
  /**
   * @example
   * 1030111021
   */
  projectId?: number;
  /**
   * @example
   * JAR
   */
  resourceType?: string;
  /**
   * @example
   * 102400
   */
  size?: number;
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
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
  resourceInfo?: GetResourceByVersionResponseBodyResourceInfo;
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

