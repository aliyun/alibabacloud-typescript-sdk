// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeProjectResponseBodyDataTransferMappingDatabasesSpecificTables } from "./DescribeProjectResponseBodyDataTransferMappingDatabasesSpecificTables";
import { DescribeProjectResponseBodyDataTransferMappingDatabasesSpecificViews } from "./DescribeProjectResponseBodyDataTransferMappingDatabasesSpecificViews";
import { DescribeProjectResponseBodyDataTransferMappingDatabasesTables } from "./DescribeProjectResponseBodyDataTransferMappingDatabasesTables";
import { DescribeProjectResponseBodyDataTransferMappingDatabasesViews } from "./DescribeProjectResponseBodyDataTransferMappingDatabasesViews";


export class DescribeProjectResponseBodyDataTransferMappingDatabases extends $dara.Model {
  /**
   * @example
   * db_id
   */
  id?: string;
  /**
   * @example
   * mapped_db
   */
  mappedName?: string;
  /**
   * @example
   * db_name
   */
  name?: string;
  specificTables?: DescribeProjectResponseBodyDataTransferMappingDatabasesSpecificTables[];
  specificViews?: DescribeProjectResponseBodyDataTransferMappingDatabasesSpecificViews[];
  tables?: DescribeProjectResponseBodyDataTransferMappingDatabasesTables[];
  /**
   * @example
   * tenant_name
   */
  tenantName?: string;
  /**
   * @example
   * MYSQL
   */
  type?: string;
  views?: DescribeProjectResponseBodyDataTransferMappingDatabasesViews[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      specificTables: 'SpecificTables',
      specificViews: 'SpecificViews',
      tables: 'Tables',
      tenantName: 'TenantName',
      type: 'Type',
      views: 'Views',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      mappedName: 'string',
      name: 'string',
      specificTables: { 'type': 'array', 'itemType': DescribeProjectResponseBodyDataTransferMappingDatabasesSpecificTables },
      specificViews: { 'type': 'array', 'itemType': DescribeProjectResponseBodyDataTransferMappingDatabasesSpecificViews },
      tables: { 'type': 'array', 'itemType': DescribeProjectResponseBodyDataTransferMappingDatabasesTables },
      tenantName: 'string',
      type: 'string',
      views: { 'type': 'array', 'itemType': DescribeProjectResponseBodyDataTransferMappingDatabasesViews },
    };
  }

  validate() {
    if(Array.isArray(this.specificTables)) {
      $dara.Model.validateArray(this.specificTables);
    }
    if(Array.isArray(this.specificViews)) {
      $dara.Model.validateArray(this.specificViews);
    }
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    if(Array.isArray(this.views)) {
      $dara.Model.validateArray(this.views);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

