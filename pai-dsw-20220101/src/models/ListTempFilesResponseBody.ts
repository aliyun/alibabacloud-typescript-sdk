// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTempFilesResponseBodyQuota extends $dara.Model {
  /**
   * @example
   * 1000
   */
  totalCapacity?: number;
  /**
   * @example
   * 1000
   */
  totalFileNum?: number;
  /**
   * @example
   * 1000
   */
  usedCapacity?: number;
  /**
   * @example
   * 100
   */
  usedFileNum?: number;
  static names(): { [key: string]: string } {
    return {
      totalCapacity: 'TotalCapacity',
      totalFileNum: 'TotalFileNum',
      usedCapacity: 'UsedCapacity',
      usedFileNum: 'UsedFileNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCapacity: 'number',
      totalFileNum: 'number',
      usedCapacity: 'number',
      usedFileNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTempFilesResponseBodyTempFiles extends $dara.Model {
  /**
   * @example
   * 10Mi
   */
  bandwidth?: number;
  /**
   * @example
   * 1000
   */
  capacity?: number;
  /**
   * @example
   * desc
   */
  description?: string;
  /**
   * @example
   * http://examplebucket.yourEndpoint/exampledir/exampleobject.txt?Expires=1703123270&OSSAccessKeyId&Signature=Fn7xSv2kRQraU6UqRZ3+DMzQK14=
   */
  downloadUrl?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtExpiredTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * filename
   */
  name?: string;
  /**
   * @remarks
   * Owner Id
   * 
   * @example
   * 1612285282502324
   */
  ownerId?: string;
  /**
   * @example
   * /1079135428626537/209170658818096848/
   */
  prefix?: string;
  /**
   * @example
   * Created
   */
  status?: string;
  /**
   * @example
   * task-05cexxxxxxxxx
   */
  taskId?: string;
  /**
   * @example
   * type
   */
  type?: string;
  /**
   * @example
   * http://examplebucket.yourEndpoint/exampledir/exampleobject.txt?Expires=1703123154&OSSAccessKeyId&Signature=5ekVo7r+CeeU5oYmCpnmrzrx2IM=
   */
  uploadUrl?: string;
  /**
   * @example
   * 1612285282502324
   */
  userId?: string;
  /**
   * @example
   * tempfile-05cexxxxxxxxx
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      capacity: 'Capacity',
      description: 'Description',
      downloadUrl: 'DownloadUrl',
      gmtCreateTime: 'GmtCreateTime',
      gmtExpiredTime: 'GmtExpiredTime',
      gmtModifiedTime: 'GmtModifiedTime',
      instanceId: 'InstanceId',
      name: 'Name',
      ownerId: 'OwnerId',
      prefix: 'Prefix',
      status: 'Status',
      taskId: 'TaskId',
      type: 'Type',
      uploadUrl: 'UploadUrl',
      userId: 'UserId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      capacity: 'number',
      description: 'string',
      downloadUrl: 'string',
      gmtCreateTime: 'string',
      gmtExpiredTime: 'string',
      gmtModifiedTime: 'string',
      instanceId: 'string',
      name: 'string',
      ownerId: 'string',
      prefix: 'string',
      status: 'string',
      taskId: 'string',
      type: 'string',
      uploadUrl: 'string',
      userId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTempFilesResponseBody extends $dara.Model {
  /**
   * @example
   * "200"
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * "XXX"
   */
  message?: string;
  quota?: ListTempFilesResponseBodyQuota;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  tempFiles?: ListTempFilesResponseBodyTempFiles[];
  /**
   * @example
   * 35
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      quota: 'Quota',
      requestId: 'RequestId',
      success: 'Success',
      tempFiles: 'TempFiles',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      quota: ListTempFilesResponseBodyQuota,
      requestId: 'string',
      success: 'boolean',
      tempFiles: { 'type': 'array', 'itemType': ListTempFilesResponseBodyTempFiles },
      totalCount: 'number',
    };
  }

  validate() {
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    if(Array.isArray(this.tempFiles)) {
      $dara.Model.validateArray(this.tempFiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

