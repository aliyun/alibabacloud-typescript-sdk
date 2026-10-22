// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadMaterialFileForAdminResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The business instance ID.
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * The file content type.
   * 
   * @example
   * image/png
   */
  contentType?: string;
  /**
   * @remarks
   * The creation time. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2025-11-03 02:05:01
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the file was moved to the recycle bin or deleted. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2025-11-03 02:05:01
   */
  deletedTime?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * ddddwww
   */
  directoryId?: string;
  /**
   * @remarks
   * The unique ID of the file.
   * 
   * @example
   * d75e1e9693cc460da218419d67735567
   */
  fileId?: string;
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * https://xxx.xxx.cn/original-data/pdf/mndj_report/cd649b2cc2102c0df57bfa1ae62931d6.zip
   */
  fileUrl?: string;
  /**
   * @remarks
   * The height of the file.
   * 
   * @example
   * 1280
   */
  height?: number;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * FileName
   */
  name?: string;
  /**
   * @remarks
   * The file status.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The file size.
   * 
   * @example
   * 23M
   */
  storageSize?: string;
  /**
   * @remarks
   * The file suffix.
   * 
   * @example
   * png
   */
  suffix?: string;
  /**
   * @remarks
   * The file type.
   * 
   * @example
   * IMAGE
   */
  type?: string;
  /**
   * @remarks
   * The width of the file.
   * 
   * @example
   * 1920
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      contentType: 'ContentType',
      createTime: 'CreateTime',
      deletedTime: 'DeletedTime',
      directoryId: 'DirectoryId',
      fileId: 'FileId',
      fileUrl: 'FileUrl',
      height: 'Height',
      name: 'Name',
      status: 'Status',
      storageSize: 'StorageSize',
      suffix: 'Suffix',
      type: 'Type',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      contentType: 'string',
      createTime: 'string',
      deletedTime: 'string',
      directoryId: 'string',
      fileId: 'string',
      fileUrl: 'string',
      height: 'number',
      name: 'string',
      status: 'string',
      storageSize: 'string',
      suffix: 'string',
      type: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMaterialFileForAdminResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason why access is denied.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Indicates whether a retry is allowed.
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * or
   */
  appName?: string;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic message.
   * 
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error parameters.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The file object.
   */
  module?: UploadMaterialFileForAdminResponseBodyModule;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6C6B99AC-39EC-5350-874C-204128C905E6
   */
  requestId?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * System exception
   */
  rootErrorMsg?: string;
  /**
   * @remarks
   * Indicates whether the request is processed synchronously.
   * 
   * @example
   * True
   */
  synchro?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      allowRetry: 'AllowRetry',
      appName: 'AppName',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorArgs: 'ErrorArgs',
      module: 'Module',
      requestId: 'RequestId',
      rootErrorCode: 'RootErrorCode',
      rootErrorMsg: 'RootErrorMsg',
      synchro: 'Synchro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      allowRetry: 'boolean',
      appName: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorArgs: { 'type': 'array', 'itemType': 'any' },
      module: UploadMaterialFileForAdminResponseBodyModule,
      requestId: 'string',
      rootErrorCode: 'string',
      rootErrorMsg: 'string',
      synchro: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.errorArgs)) {
      $dara.Model.validateArray(this.errorArgs);
    }
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

