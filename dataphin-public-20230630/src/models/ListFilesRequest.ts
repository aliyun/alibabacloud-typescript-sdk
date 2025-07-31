// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFilesRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tempCode
   */
  category?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /xx/x
   */
  directory?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11112311
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  recursive?: boolean;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      directory: 'Directory',
      env: 'Env',
      projectId: 'ProjectId',
      recursive: 'Recursive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      directory: 'string',
      env: 'string',
      projectId: 'number',
      recursive: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  listQuery?: ListFilesRequestListQuery;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListFilesRequestListQuery,
      opTenantId: 'number',
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

