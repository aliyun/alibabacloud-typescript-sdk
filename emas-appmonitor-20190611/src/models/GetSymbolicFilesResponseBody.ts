// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSymbolicFilesResponseBodyModelItems extends $dara.Model {
  /**
   * @example
   * 1.0.0
   */
  appVersion?: string;
  /**
   * @example
   * e8a1a2b9ab653780b34383a942ac91b2
   */
  buildId?: string;
  /**
   * @example
   * EXPORT_SUCCESS
   */
  exportStatus?: string;
  /**
   * @example
   * app_so.zip
   */
  fileName?: string;
  /**
   * @example
   * 24781204@android/1743506690915-app_so.zip
   */
  filePath?: string;
  /**
   * @example
   * APP_SO
   */
  fileType?: string;
  /**
   * @example
   * 1655962713000
   */
  gmtCreate?: number;
  /**
   * @example
   * 392522
   */
  id?: number;
  /**
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * uuid
   * 
   * @example
   * 9634758587856312DEV
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      buildId: 'BuildId',
      exportStatus: 'ExportStatus',
      fileName: 'FileName',
      filePath: 'FilePath',
      fileType: 'FileType',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      status: 'Status',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      buildId: 'string',
      exportStatus: 'string',
      fileName: 'string',
      filePath: 'string',
      fileType: 'string',
      gmtCreate: 'number',
      id: 'number',
      status: 'string',
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

export class GetSymbolicFilesResponseBodyModel extends $dara.Model {
  items?: GetSymbolicFilesResponseBodyModelItems[];
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 3
   */
  pages?: number;
  /**
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      pages: 'Pages',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetSymbolicFilesResponseBodyModelItems },
      pageNum: 'number',
      pageSize: 'number',
      pages: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSymbolicFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Args
   */
  args?: { [key: string]: any };
  /**
   * @example
   * 200
   */
  errorCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  model?: GetSymbolicFilesResponseBodyModel;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * B3AD0FE4-36EF-1641-90B1-77618166F2ff
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      errorCode: 'ErrorCode',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorCode: 'number',
      message: 'string',
      model: GetSymbolicFilesResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.args) {
      $dara.Model.validateMap(this.args);
    }
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

