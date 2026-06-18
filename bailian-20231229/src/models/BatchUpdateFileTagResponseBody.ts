// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchUpdateFileTagResponseBodyDataUpdateFileTagResultList extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter is returned only if Success is false.
   * 
   * @example
   * NoPermission
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message. This parameter is returned only if Success is false.
   * 
   * @example
   * FileId not exists.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * file_f40f2a32205d44b4a93b11617113da15_10045951
   */
  fileId?: string;
  /**
   * @remarks
   * Indicates whether the tags for the specific file were updated. Valid values:
   * 
   * - true: The tags were updated successfully.
   * 
   * - false: The tag update failed.
   * 
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
  /**
   * @remarks
   * A list of the tag update results.
   */
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
   * @remarks
   * The response code. A value of Success indicates that the call was successful.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned by the operation.
   */
  data?: BatchUpdateFileTagResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Required parameter(FileId) missing or invalid, please check the request parameters.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 17204B98-xxxx-4F9A-8464-2446A84821CA
   */
  requestId?: string;
  /**
   * @remarks
   * The status code returned for the request.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the request was accepted. Check `UpdateFileTagResultList` for the status of each file. Valid values:
   * 
   * - true: The request was accepted.
   * 
   * - false: The request failed, for example, due to an invalid parameter.
   * 
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

