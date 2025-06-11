// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateProjectModifyRecordsRequestTransferMappingDatabasesBlackSpecificTables } from "./CreateProjectModifyRecordsRequestTransferMappingDatabasesBlackSpecificTables";
import { CreateProjectModifyRecordsRequestTransferMappingDatabasesBlackSpecificViews } from "./CreateProjectModifyRecordsRequestTransferMappingDatabasesBlackSpecificViews";
import { CreateProjectModifyRecordsRequestTransferMappingDatabasesBlackTables } from "./CreateProjectModifyRecordsRequestTransferMappingDatabasesBlackTables";
import { CreateProjectModifyRecordsRequestTransferMappingDatabasesBlackViews } from "./CreateProjectModifyRecordsRequestTransferMappingDatabasesBlackViews";


export class CreateProjectModifyRecordsRequestTransferMappingDatabasesBlack extends $dara.Model {
  clusterName?: string;
  id?: string;
  mappedName?: string;
  name?: string;
  specificTables?: CreateProjectModifyRecordsRequestTransferMappingDatabasesBlackSpecificTables[];
  specificViews?: CreateProjectModifyRecordsRequestTransferMappingDatabasesBlackSpecificViews[];
  tables?: CreateProjectModifyRecordsRequestTransferMappingDatabasesBlackTables[];
  tenantName?: string;
  views?: CreateProjectModifyRecordsRequestTransferMappingDatabasesBlackViews[];
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
      specificTables: { 'type': 'array', 'itemType': CreateProjectModifyRecordsRequestTransferMappingDatabasesBlackSpecificTables },
      specificViews: { 'type': 'array', 'itemType': CreateProjectModifyRecordsRequestTransferMappingDatabasesBlackSpecificViews },
      tables: { 'type': 'array', 'itemType': CreateProjectModifyRecordsRequestTransferMappingDatabasesBlackTables },
      tenantName: 'string',
      views: { 'type': 'array', 'itemType': CreateProjectModifyRecordsRequestTransferMappingDatabasesBlackViews },
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

