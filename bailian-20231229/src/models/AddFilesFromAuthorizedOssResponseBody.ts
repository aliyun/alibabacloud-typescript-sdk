// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFilesFromAuthorizedOssResponseBodyDataAddFileResultList extends $dara.Model {
  /**
   * @example
   * file_809f469a59ac449586ec692576xxxxx_102248XXX
   */
  fileId?: string;
  /**
   * @example
   * size too large
   */
  msg?: string;
  /**
   * @example
   * root/path/this_is_temp_xxxx.pdf
   */
  ossKey?: string;
  /**
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      msg: 'Msg',
      ossKey: 'OssKey',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      msg: 'string',
      ossKey: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFilesFromAuthorizedOssResponseBodyData extends $dara.Model {
  addFileResultList?: AddFilesFromAuthorizedOssResponseBodyDataAddFileResultList[];
  static names(): { [key: string]: string } {
    return {
      addFileResultList: 'AddFileResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addFileResultList: { 'type': 'array', 'itemType': AddFilesFromAuthorizedOssResponseBodyDataAddFileResultList },
    };
  }

  validate() {
    if(Array.isArray(this.addFileResultList)) {
      $dara.Model.validateArray(this.addFileResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFilesFromAuthorizedOssResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  data?: AddFilesFromAuthorizedOssResponseBodyData;
  /**
   * @example
   * Cant find out category for category_id param.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 17204B98-xxxx-4F9A-8464-2446A84821CA
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  status?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AddFilesFromAuthorizedOssResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'string',
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

