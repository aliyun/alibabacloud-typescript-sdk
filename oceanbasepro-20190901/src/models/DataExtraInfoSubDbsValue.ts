// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataExtraInfoSubDbsValueTables } from "./DataExtraInfoSubDbsValueTables";


export class DataExtraInfoSubDbsValue extends $dara.Model {
  /**
   * @example
   * cluster_name
   */
  clusterName?: string;
  /**
   * @example
   * tenant_name
   */
  tenantName?: string;
  /**
   * @example
   * null
   */
  databaseId?: string;
  /**
   * @example
   * db_name
   */
  databaseName?: string;
  /**
   * @example
   * mapped_db
   */
  mappingDatabaseName?: string;
  /**
   * @example
   * null
   */
  sourceClientId?: string;
  tables?: DataExtraInfoSubDbsValueTables[];
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      tenantName: 'TenantName',
      databaseId: 'DatabaseId',
      databaseName: 'DatabaseName',
      mappingDatabaseName: 'MappingDatabaseName',
      sourceClientId: 'SourceClientId',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      tenantName: 'string',
      databaseId: 'string',
      databaseName: 'string',
      mappingDatabaseName: 'string',
      sourceClientId: 'string',
      tables: { 'type': 'array', 'itemType': DataExtraInfoSubDbsValueTables },
    };
  }

  validate() {
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

