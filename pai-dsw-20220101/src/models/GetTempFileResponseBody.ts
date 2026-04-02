// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTempFileResponseBody extends $dara.Model {
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
   * "200"
   */
  code?: string;
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
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * "XXX"
   */
  message?: string;
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
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * Created
   */
  status?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
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
      code: 'Code',
      description: 'Description',
      downloadUrl: 'DownloadUrl',
      gmtCreateTime: 'GmtCreateTime',
      gmtExpiredTime: 'GmtExpiredTime',
      gmtModifiedTime: 'GmtModifiedTime',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      message: 'Message',
      name: 'Name',
      ownerId: 'OwnerId',
      prefix: 'Prefix',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
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
      code: 'string',
      description: 'string',
      downloadUrl: 'string',
      gmtCreateTime: 'string',
      gmtExpiredTime: 'string',
      gmtModifiedTime: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      message: 'string',
      name: 'string',
      ownerId: 'string',
      prefix: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
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

