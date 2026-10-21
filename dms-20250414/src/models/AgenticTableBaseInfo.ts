// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgenticTableEngineMeta } from "./AgenticTableEngineMeta";


export class AgenticTableBaseInfo extends $dara.Model {
  /**
   * @remarks
   * The type of the catalog to which the table belongs. Valid values:
   * - **JDBC**: relational database catalog
   * - **DataLake**: data lake catalog
   * - **Dataset**: knowledge base catalog
   * 
   * @example
   * JDBC
   */
  catalogType?: string;
  /**
   * @remarks
   * The fully qualified name of the database to which the table belongs.
   * 
   * @example
   * order_db
   */
  databaseQualifiedName?: string;
  /**
   * @remarks
   * The UUID of the database to which the table belongs.
   * 
   * @example
   * md-HZ-fp9K7r***
   */
  databaseUuid?: string;
  /**
   * @remarks
   * The description of the table.
   * 
   * @example
   * Order table
   */
  description?: string;
  /**
   * @remarks
   * The engine metadata of the table.
   */
  engineMeta?: AgenticTableEngineMeta;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * orders
   */
  name?: string;
  /**
   * @remarks
   * The fully qualified name of the table. You can use this name as the TableQualifiedName parameter for GetAgenticTableColumn and GetAgenticTableIndex. For SQL Server, the format is schema name.table name.
   * 
   * @example
   * orders
   */
  qualifiedName?: string;
  /**
   * @remarks
   * The table type. Valid values:
   * - **NORMAL**: regular table
   * - **VIEW**: view
   * - **FOREIGN**: foreign table
   * - **SYNONYM**: synonym, supported only for Oracle data sources
   * 
   * @example
   * NORMAL
   */
  tableType?: string;
  static names(): { [key: string]: string } {
    return {
      catalogType: 'CatalogType',
      databaseQualifiedName: 'DatabaseQualifiedName',
      databaseUuid: 'DatabaseUuid',
      description: 'Description',
      engineMeta: 'EngineMeta',
      name: 'Name',
      qualifiedName: 'QualifiedName',
      tableType: 'TableType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogType: 'string',
      databaseQualifiedName: 'string',
      databaseUuid: 'string',
      description: 'string',
      engineMeta: AgenticTableEngineMeta,
      name: 'string',
      qualifiedName: 'string',
      tableType: 'string',
    };
  }

  validate() {
    if(this.engineMeta && typeof (this.engineMeta as any).validate === 'function') {
      (this.engineMeta as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

