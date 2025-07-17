// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFolderResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2735****
   */
  folderId?: string;
  /**
   * @example
   * Business_process/my_first_business_process/MaxCompute/ods_layer
   */
  folderPath?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
      folderPath: 'FolderPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      folderPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFolderResponseBody extends $dara.Model {
  data?: GetFolderResponseBodyData;
  /**
   * @example
   * Invalid.Tenant.ConnectionNotExists
   */
  errorCode?: string;
  /**
   * @example
   * The connection does not exist.
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetFolderResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
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

