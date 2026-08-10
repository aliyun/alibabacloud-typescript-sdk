// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteDDLRequestContext extends $dara.Model {
  /**
   * @remarks
   * The current operating environment. Valid values:
   * 
   * - DEV: development environment.
   * - PROD: production environment.
   * 
   * This parameter is required.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * The ID of the project to which the integration pipeline task belongs.
   * 
   * This parameter is required.
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

export class ExecuteDDLRequestDDLCommandDatasourceId extends $dara.Model {
  /**
   * @remarks
   * The catalog of the data source or compute cluster. This parameter is required only in OneCatalog scenarios.
   * 
   * @example
   * dummy_cdm_dev
   */
  catalog?: string;
  /**
   * @remarks
   * The data source category. Valid values:
   * 
   * - DATA_SOURCE: physical data source.
   * - PROJECT_COMPUTE_SOURCE: compute source bound to a project.
   * - ONE_CATALOG: compute source or data source in multi-engine mode (OneCatalog).
   * - DATA_SET: dataset.
   * 
   * This parameter is optional. The system automatically infers the category based on other fields if this parameter is not specified.
   * 
   * @example
   * DATA_SOURCE
   */
  dsCategory?: string;
  /**
   * @remarks
   * The ID of the data source, compute source, or dataset. This parameter is optional when DsCategory is set to PROJECT_COMPUTE_SOURCE.
   * 
   * @example
   * 123
   */
  dsId?: string;
  /**
   * @remarks
   * The environment. Valid values:
   * 
   * - DEV: development environment.
   * - PROD: production environment.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * The catalog type when DsCategory is set to ONE_CATALOG. Valid values:
   * 
   * - COMPUTE_CLUSTER: compute cluster.
   * - DATA_SOURCE: physical data source.
   * 
   * @example
   * COMPUTE_CLUSTER
   */
  oneCatalogType?: string;
  /**
   * @remarks
   * The ID of the project bound to the compute source. This parameter is required only when DsCategory is set to PROJECT_COMPUTE_SOURCE.
   * 
   * @example
   * 123
   */
  projectId?: number;
  /**
   * @remarks
   * The dataset version. This parameter is required only when DsCategory is set to DATA_SET.
   * 
   * @example
   * 3
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      dsCategory: 'DsCategory',
      dsId: 'DsId',
      env: 'Env',
      oneCatalogType: 'OneCatalogType',
      projectId: 'ProjectId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      dsCategory: 'string',
      dsId: 'string',
      env: 'string',
      oneCatalogType: 'string',
      projectId: 'number',
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

export class ExecuteDDLRequestDDLCommand extends $dara.Model {
  /**
   * @remarks
   * The identifier of the data source, compute source, or dataset used for table creation.
   * 
   * This parameter is required.
   */
  datasourceId?: ExecuteDDLRequestDDLCommandDatasourceId;
  /**
   * @remarks
   * The DDL statement for table creation.
   * 
   * This parameter is required.
   * 
   * @example
   * CREATE TABLE test (id bigint)
   */
  ddl?: string;
  /**
   * @remarks
   * Specifies whether to drop the table if it already exists.
   * 
   * @example
   * true
   */
  dropTable?: boolean;
  static names(): { [key: string]: string } {
    return {
      datasourceId: 'DatasourceId',
      ddl: 'Ddl',
      dropTable: 'DropTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasourceId: ExecuteDDLRequestDDLCommandDatasourceId,
      ddl: 'string',
      dropTable: 'boolean',
    };
  }

  validate() {
    if(this.datasourceId && typeof (this.datasourceId as any).validate === 'function') {
      (this.datasourceId as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteDDLRequest extends $dara.Model {
  /**
   * @remarks
   * The request context information.
   * 
   * This parameter is required.
   */
  context?: ExecuteDDLRequestContext;
  /**
   * @remarks
   * The one-click table creation parameters.
   * 
   * This parameter is required.
   */
  DDLCommand?: ExecuteDDLRequestDDLCommand;
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
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
      DDLCommand: 'DDLCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: ExecuteDDLRequestContext,
      DDLCommand: ExecuteDDLRequestDDLCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.context && typeof (this.context as any).validate === 'function') {
      (this.context as any).validate();
    }
    if(this.DDLCommand && typeof (this.DDLCommand as any).validate === 'function') {
      (this.DDLCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

