// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSourceTableMetaRequestContext extends $dara.Model {
  /**
   * @remarks
   * The current operation environment. Valid values:
   * - DEV: development environment.
   * - PROD: production environment.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * The ID of the project to which the integration pipeline task belongs.
   * 
   * @example
   * 123
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSourceTableMetaRequestQuery extends $dara.Model {
  /**
   * @remarks
   * The catalog name.
   * 
   * @example
   * hive_catalog
   */
  catalog?: string;
  /**
   * @remarks
   * The identifier of the data source or compute source. If QueryMode is set to DATA_SOURCE, specify the physical data source ID. If QueryMode is set to PROJECT_COMPUTE_SOURCE, specify the data source ID bound to the compute source.
   * 
   * @example
   * 123
   */
  id?: string;
  /**
   * @remarks
   * The query mode. Valid values:
   * - DATA_SOURCE: physical data source. This is the default value. It includes direct queries and automatic routing of external data source metadata.
   * - PROJECT_COMPUTE_SOURCE: tables under the project or compute source. The data source is parsed based on the compute source of the project specified by Context.ProjectId.
   * 
   * @example
   * DATA_SOURCE
   */
  queryMode?: string;
  /**
   * @remarks
   * The schema name.
   * 
   * @example
   * default
   */
  schemaName?: string;
  /**
   * @remarks
   * The table name. The schema.table format is supported.
   * 
   * @example
   * ods_user_info
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      id: 'Id',
      queryMode: 'QueryMode',
      schemaName: 'SchemaName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      id: 'string',
      queryMode: 'string',
      schemaName: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSourceTableMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The request context.
   * 
   * This parameter is required.
   */
  context?: GetSourceTableMetaRequestContext;
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
  /**
   * @remarks
   * The query conditions for the integration source table.
   * 
   * This parameter is required.
   */
  query?: GetSourceTableMetaRequestQuery;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: GetSourceTableMetaRequestContext,
      opTenantId: 'number',
      opUserId: 'string',
      query: GetSourceTableMetaRequestQuery,
    };
  }

  validate() {
    if(this.context && typeof (this.context as any).validate === 'function') {
      (this.context as any).validate();
    }
    if(this.query && typeof (this.query as any).validate === 'function') {
      (this.query as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

