// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateProjectRequestTransferMappingDatabasesSpecificTables } from "./CreateProjectRequestTransferMappingDatabasesSpecificTables";
import { CreateProjectRequestTransferMappingDatabasesSpecificViews } from "./CreateProjectRequestTransferMappingDatabasesSpecificViews";
import { CreateProjectRequestTransferMappingDatabasesTables } from "./CreateProjectRequestTransferMappingDatabasesTables";
import { CreateProjectRequestTransferMappingDatabasesViews } from "./CreateProjectRequestTransferMappingDatabasesViews";


export class CreateProjectRequestTransferMappingDatabases extends $dara.Model {
  /**
   * @example
   * cluster_name
   */
  clusterName?: string;
  /**
   * @example
   * gez3***
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
  specificTables?: CreateProjectRequestTransferMappingDatabasesSpecificTables[];
  specificViews?: CreateProjectRequestTransferMappingDatabasesSpecificViews[];
  tables?: CreateProjectRequestTransferMappingDatabasesTables[];
  /**
   * @example
   * tenant_name
   */
  tenantName?: string;
  views?: CreateProjectRequestTransferMappingDatabasesViews[];
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      specificTables: 'SpecificTables',
      specificViews: 'SpecificViews',
      tables: 'Tables',
      tenantName: 'TenantName',
      views: 'Views',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      id: 'string',
      mappedName: 'string',
      name: 'string',
      specificTables: { 'type': 'array', 'itemType': CreateProjectRequestTransferMappingDatabasesSpecificTables },
      specificViews: { 'type': 'array', 'itemType': CreateProjectRequestTransferMappingDatabasesSpecificViews },
      tables: { 'type': 'array', 'itemType': CreateProjectRequestTransferMappingDatabasesTables },
      tenantName: 'string',
      views: { 'type': 'array', 'itemType': CreateProjectRequestTransferMappingDatabasesViews },
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

