// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchUpdateFileTagResponseBodyDataUpdateFileTagResultList extends $dara.Model {
  /**
   * @example
   * NoPermission
   */
  errorCode?: string;
  /**
   * @example
   * FileId not exists.
   */
  errorMessage?: string;
  /**
   * @example
   * file_f40f2a32205d44b4a93b11617113da15_10045951
   */
  fileId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      fileId: 'FileId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      fileId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateFileTagResponseBodyData extends $dara.Model {
  updateFileTagResultList?: BatchUpdateFileTagResponseBodyDataUpdateFileTagResultList[];
  static names(): { [key: string]: string } {
    return {
      updateFileTagResultList: 'UpdateFileTagResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateFileTagResultList: { 'type': 'array', 'itemType': BatchUpdateFileTagResponseBodyDataUpdateFileTagResultList },
    };
  }

  validate() {
    if(Array.isArray(this.updateFileTagResultList)) {
      $dara.Model.validateArray(this.updateFileTagResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateFileTagResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: BatchUpdateFileTagResponseBodyData;
  /**
   * @example
   * Required parameter(FileId) missing or invalid, please check the request parameters.
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
  success?: boolean;
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
      data: BatchUpdateFileTagResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
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

