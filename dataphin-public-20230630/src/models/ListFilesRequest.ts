// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFilesRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The menu tree category. Valid values:
   * - tempCode: Ad hoc query.
   * - codeManage: Code task.
   * - offlinePipeline: Offline pipeline.
   * - offlinePipelineCustomPlugin: Custom pipeline component.
   * - dataX: Synchronization task.
   * - streamMeta: Real-time metatable.
   * - streamCustomDataSource: Real-time custom data source.
   * - streamTemplate: Real-time computing template.
   * - resourceManage: Resource management.
   * - udfResource: Offline function.
   * - streamFunction: Real-time function.
   * 
   * This parameter is required.
   * 
   * @example
   * tempCode
   */
  category?: string;
  /**
   * @remarks
   * The file directory.
   * 
   * This parameter is required.
   * 
   * @example
   * /xx/x
   */
  directory?: string;
  /**
   * @remarks
   * The environment identifier. Valid values:
   * - DEV
   * - PROD
   * 
   * This parameter is required.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 11112311
   */
  projectId?: number;
  /**
   * @remarks
   * Specifies whether to recursively traverse and query the directory. Valid values:
   * - true: Yes. Returns all nodes under the directory.
   * - false: No. Returns only the first-level nodes under the directory.
   * 
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
   * The query conditions.
   * 
   * This parameter is required.
   */
  listQuery?: ListFilesRequestListQuery;
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
      listQuery: ListFilesRequestListQuery,
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

