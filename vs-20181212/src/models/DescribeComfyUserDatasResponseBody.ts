// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComfyUserDatasResponseBodyUserDatas extends $dara.Model {
  /**
   * @example
   * myfile
   */
  fileName?: string;
  /**
   * @example
   * 1024
   */
  fileSize?: number;
  /**
   * @example
   * file
   */
  type?: string;
  /**
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
   * @example
   * 0
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
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
   * @example
   * 1
   */
  total?: number;
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

