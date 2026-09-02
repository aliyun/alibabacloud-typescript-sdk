// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Catalog extends $dara.Model {
  /**
   * @remarks
   * The comment or description of the data catalog.
   * 
   * @example
   * Test data catalog
   */
  comment?: string;
  /**
   * @remarks
   * The connection name associated with a mounted catalog. This parameter has a value only when Provider is set to MySQL, PostgreSQL, Elasticsearch, OSS_TABLES, SLS, OTS, MaxCompute, MongoDB, Redis, SQLServer, ClickHouse, Oracle, Hive, or Iceberg.
   * 
   * @example
   * my_connection
   */
  connectionName?: string;
  /**
   * @remarks
   * The unique identifier name of the data catalog.
   * 
   * @example
   * my_catalog
   */
  name?: string;
  /**
   * @remarks
   * The extended properties (JSON object). For the Elasticsearch type, this includes information such as IndexPattern.
   * 
   * @example
   * {"IndexPattern":"my-index-*"}
   */
  properties?: { [key: string]: any };
  /**
   * @remarks
   * The data source provider. EventHouse indicates built-in storage. MySQL, PostgreSQL, Elasticsearch, OSS_TABLES, SLS, OTS, MaxCompute, MongoDB, Redis, SQLServer, ClickHouse, Oracle, Hive, and Iceberg indicate externally mounted sources.
   * 
   * @example
   * EventHouse
   */
  provider?: string;
  /**
   * @remarks
   * The type of the data catalog, such as RELATIONAL.
   * 
   * @example
   * RELATIONAL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      connectionName: 'ConnectionName',
      name: 'Name',
      properties: 'Properties',
      provider: 'Provider',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      connectionName: 'string',
      name: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      provider: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

