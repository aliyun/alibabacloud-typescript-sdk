// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeProjectResponseBodyDataTransferMappingDatabasesBlackSpecificTables } from "./DescribeProjectResponseBodyDataTransferMappingDatabasesBlackSpecificTables";
import { DescribeProjectResponseBodyDataTransferMappingDatabasesBlackSpecificViews } from "./DescribeProjectResponseBodyDataTransferMappingDatabasesBlackSpecificViews";
import { DescribeProjectResponseBodyDataTransferMappingDatabasesBlackTables } from "./DescribeProjectResponseBodyDataTransferMappingDatabasesBlackTables";
import { DescribeProjectResponseBodyDataTransferMappingDatabasesBlackViews } from "./DescribeProjectResponseBodyDataTransferMappingDatabasesBlackViews";


export class DescribeProjectResponseBodyDataTransferMappingDatabasesBlack extends $dara.Model {
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
  specificTables?: DescribeProjectResponseBodyDataTransferMappingDatabasesBlackSpecificTables[];
  specificViews?: DescribeProjectResponseBodyDataTransferMappingDatabasesBlackSpecificViews[];
  tables?: DescribeProjectResponseBodyDataTransferMappingDatabasesBlackTables[];
  /**
   * @example
   * mapped_tenant
   */
  tenantName?: string;
  /**
   * @example
   * DATABASE
   */
  type?: string;
  views?: DescribeProjectResponseBodyDataTransferMappingDatabasesBlackViews[];
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
      specificTables: { 'type': 'array', 'itemType': DescribeProjectResponseBodyDataTransferMappingDatabasesBlackSpecificTables },
      specificViews: { 'type': 'array', 'itemType': DescribeProjectResponseBodyDataTransferMappingDatabasesBlackSpecificViews },
      tables: { 'type': 'array', 'itemType': DescribeProjectResponseBodyDataTransferMappingDatabasesBlackTables },
      tenantName: 'string',
      type: 'string',
      views: { 'type': 'array', 'itemType': DescribeProjectResponseBodyDataTransferMappingDatabasesBlackViews },
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

