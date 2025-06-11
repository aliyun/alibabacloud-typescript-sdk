// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateProjectRequestTransferMappingDatabasesBlackSpecificTables } from "./CreateProjectRequestTransferMappingDatabasesBlackSpecificTables";
import { CreateProjectRequestTransferMappingDatabasesBlackSpecificViews } from "./CreateProjectRequestTransferMappingDatabasesBlackSpecificViews";
import { CreateProjectRequestTransferMappingDatabasesBlackTables } from "./CreateProjectRequestTransferMappingDatabasesBlackTables";
import { CreateProjectRequestTransferMappingDatabasesBlackViews } from "./CreateProjectRequestTransferMappingDatabasesBlackViews";


export class CreateProjectRequestTransferMappingDatabasesBlack extends $dara.Model {
  /**
   * @example
   * cluster_name
   */
  clusterName?: string;
  /**
   * @example
   * e_3y6v5v1x94f4
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
  specificTables?: CreateProjectRequestTransferMappingDatabasesBlackSpecificTables[];
  specificViews?: CreateProjectRequestTransferMappingDatabasesBlackSpecificViews[];
  tables?: CreateProjectRequestTransferMappingDatabasesBlackTables[];
  /**
   * @example
   * tenant_name
   */
  tenantName?: string;
  views?: CreateProjectRequestTransferMappingDatabasesBlackViews[];
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
      specificTables: { 'type': 'array', 'itemType': CreateProjectRequestTransferMappingDatabasesBlackSpecificTables },
      specificViews: { 'type': 'array', 'itemType': CreateProjectRequestTransferMappingDatabasesBlackSpecificViews },
      tables: { 'type': 'array', 'itemType': CreateProjectRequestTransferMappingDatabasesBlackTables },
      tenantName: 'string',
      views: { 'type': 'array', 'itemType': CreateProjectRequestTransferMappingDatabasesBlackViews },
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

