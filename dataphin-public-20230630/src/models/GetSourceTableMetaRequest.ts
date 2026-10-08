// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSourceTableMetaRequestContext extends $dara.Model {
  /**
   * @example
   * DEV
   */
  env?: string;
  /**
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
   * @example
   * hive_catalog
   */
  catalog?: string;
  /**
   * @example
   * 123
   */
  id?: string;
  /**
   * @example
   * DATA_SOURCE
   */
  queryMode?: string;
  /**
   * @example
   * default
   */
  schemaName?: string;
  /**
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
   * This parameter is required.
   */
  context?: GetSourceTableMetaRequestContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
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

