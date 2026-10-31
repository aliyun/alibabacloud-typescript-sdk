// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPythonModulesResponseBodyPageResultPythonModuleList extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-01-01 10:00:00
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The last update time.
   * 
   * @example
   * 2026-01-01 10:00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the Python third-party package.
   * 
   * @example
   * 1001
   */
  id?: number;
  /**
   * @remarks
   * The installation time.
   * 
   * @example
   * 2026-01-01 10:00:00
   */
  installTime?: string;
  /**
   * @remarks
   * The installation method. Valid values:
   * - UPLOAD_INSTALL: upload installation package
   * - ONLINE_INSTALL: online installation
   * 
   * @example
   * UPLOAD_INSTALL
   */
  installType?: string;
  /**
   * @remarks
   * The installer.
   * 
   * @example
   * 30001011
   */
  installer?: string;
  /**
   * @remarks
   * The name of the Python third-party package.
   * 
   * @example
   * numpy
   */
  name?: string;
  /**
   * @remarks
   * The Python version. Valid values: PYTHON_2_7, PYTHON_3_7, and PYTHON_3_11.
   * 
   * @example
   * PYTHON_3_7
   */
  pythonVersion?: string;
  /**
   * @remarks
   * The status of the third-party package. Valid values:
   * - INSTALL_SUCCESS: installation succeeded
   * - INSTALL_FAILED: installation failed
   * - INSTALLING: installing
   * - UPGRADE_SUCCESS: upgrade succeeded
   * - UPGRADE_FAILED: upgrade failed
   * - UPGRADING: upgrading
   * 
   * @example
   * INSTALL_SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The version of the third-party package.
   * 
   * @example
   * 1.0.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      id: 'Id',
      installTime: 'InstallTime',
      installType: 'InstallType',
      installer: 'Installer',
      name: 'Name',
      pythonVersion: 'PythonVersion',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreated: 'string',
      gmtModified: 'string',
      id: 'number',
      installTime: 'string',
      installType: 'string',
      installer: 'string',
      name: 'string',
      pythonVersion: 'string',
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPythonModulesResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * The paginated list of Python third-party packages.
   */
  pythonModuleList?: ListPythonModulesResponseBodyPageResultPythonModuleList[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pythonModuleList: 'PythonModuleList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pythonModuleList: { 'type': 'array', 'itemType': ListPythonModulesResponseBodyPageResultPythonModuleList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pythonModuleList)) {
      $dara.Model.validateArray(this.pythonModuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPythonModulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The backend exception details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * The paged query result with paging details.
   */
  pageResult?: ListPythonModulesResponseBodyPageResult;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListPythonModulesResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pageResult && typeof (this.pageResult as any).validate === 'function') {
      (this.pageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

