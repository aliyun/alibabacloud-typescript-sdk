// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPythonModulesRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The keyword of the third-party package name.
   * 
   * @example
   * numpy
   */
  keyword?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
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
   * The ID of the Python third-party package.
   * 
   * @example
   * 1001
   */
  pythonModuleId?: number;
  /**
   * @remarks
   * The Python version. Valid values: PYTHON_2_7, PYTHON_3_7, and PYTHON_3_11.
   * 
   * @example
   * PYTHON_3_7
   */
  pythonVersion?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      pythonModuleId: 'PythonModuleId',
      pythonVersion: 'PythonVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNum: 'number',
      pageSize: 'number',
      pythonModuleId: 'number',
      pythonVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPythonModulesRequest extends $dara.Model {
  /**
   * @remarks
   * The paging conditions for the paged query.
   * 
   * This parameter is required.
   */
  listQuery?: ListPythonModulesRequestListQuery;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListPythonModulesRequestListQuery,
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    if(this.listQuery && typeof (this.listQuery as any).validate === 'function') {
      (this.listQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

