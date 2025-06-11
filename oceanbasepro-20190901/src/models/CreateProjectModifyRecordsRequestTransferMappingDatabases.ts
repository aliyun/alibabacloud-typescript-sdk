// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateProjectModifyRecordsRequestTransferMappingDatabasesSpecificTables } from "./CreateProjectModifyRecordsRequestTransferMappingDatabasesSpecificTables";
import { CreateProjectModifyRecordsRequestTransferMappingDatabasesSpecificViews } from "./CreateProjectModifyRecordsRequestTransferMappingDatabasesSpecificViews";
import { CreateProjectModifyRecordsRequestTransferMappingDatabasesTables } from "./CreateProjectModifyRecordsRequestTransferMappingDatabasesTables";
import { CreateProjectModifyRecordsRequestTransferMappingDatabasesViews } from "./CreateProjectModifyRecordsRequestTransferMappingDatabasesViews";


export class CreateProjectModifyRecordsRequestTransferMappingDatabases extends $dara.Model {
  clusterName?: string;
  id?: string;
  mappedName?: string;
  name?: string;
  specificTables?: CreateProjectModifyRecordsRequestTransferMappingDatabasesSpecificTables[];
  specificViews?: CreateProjectModifyRecordsRequestTransferMappingDatabasesSpecificViews[];
  tables?: CreateProjectModifyRecordsRequestTransferMappingDatabasesTables[];
  tenantName?: string;
  views?: CreateProjectModifyRecordsRequestTransferMappingDatabasesViews[];
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
      specificTables: { 'type': 'array', 'itemType': CreateProjectModifyRecordsRequestTransferMappingDatabasesSpecificTables },
      specificViews: { 'type': 'array', 'itemType': CreateProjectModifyRecordsRequestTransferMappingDatabasesSpecificViews },
      tables: { 'type': 'array', 'itemType': CreateProjectModifyRecordsRequestTransferMappingDatabasesTables },
      tenantName: 'string',
      views: { 'type': 'array', 'itemType': CreateProjectModifyRecordsRequestTransferMappingDatabasesViews },
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

