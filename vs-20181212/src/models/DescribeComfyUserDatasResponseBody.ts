// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComfyUserDatasResponseBodyUserDatas extends $dara.Model {
  /**
   * @remarks
   * The name of the file or directory.
   * 
   * @example
   * myfile
   */
  fileName?: string;
  /**
   * @remarks
   * The file size in bytes.
   * 
   * @example
   * 1024
   */
  fileSize?: number;
  /**
   * @remarks
   * The file type. Valid values: file and dir.
   * 
   * @example
   * file
   */
  type?: string;
  /**
   * @remarks
   * The last modified time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1776646928000
   */
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileSize: 'FileSize',
      type: 'Type',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileSize: 'number',
      type: 'string',
      updatedTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComfyUserDatasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 1
   */
  total?: number;
  /**
   * @remarks
   * The list of user data.
   */
  userDatas?: DescribeComfyUserDatasResponseBodyUserDatas[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
      userDatas: 'UserDatas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
      userDatas: { 'type': 'array', 'itemType': DescribeComfyUserDatasResponseBodyUserDatas },
    };
  }

  validate() {
    if(Array.isArray(this.userDatas)) {
      $dara.Model.validateArray(this.userDatas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

