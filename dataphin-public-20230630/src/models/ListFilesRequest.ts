// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFilesRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * Menu tree category
   * - Ad hoc query: tempCode
   * - Code task: codeManage
   * - Offline pipeline: offlinePipeline
   * - Pipeline custom component: offlinePipelineCustomPlugin
   * - Sync task: dataX
   * - Real-time meta table: streamMeta
   * - Real-time custom source: streamCustomDataSource
   * - Real-time computing template: streamTemplate
   * - Resource management: resourceManage
   * - Offline function: udfResource
   * - Real-time function: streamFunction
   * 
   * This parameter is required.
   * 
   * @example
   * tempCode
   */
  category?: string;
  /**
   * @remarks
   * File directory
   * 
   * This parameter is required.
   * 
   * @example
   * /xx/x
   */
  directory?: string;
  /**
   * @remarks
   * Environment identifier
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
   * Project ID
   * 
   * This parameter is required.
   * 
   * @example
   * 11112311
   */
  projectId?: number;
  /**
   * @remarks
   * Whether to recursively traverse and query
   * - true: Yes, returns all nodes under the directory
   * - false: No, returns only the first-level nodes under the directory
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
   * Query conditions
   * 
   * This parameter is required.
   */
  listQuery?: ListFilesRequestListQuery;
  /**
   * @remarks
   * Tenant ID
   * 
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

