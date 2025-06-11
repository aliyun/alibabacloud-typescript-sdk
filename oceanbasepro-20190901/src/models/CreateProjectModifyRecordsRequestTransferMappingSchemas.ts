// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateProjectModifyRecordsRequestTransferMappingSchemasSpecificTables } from "./CreateProjectModifyRecordsRequestTransferMappingSchemasSpecificTables";
import { CreateProjectModifyRecordsRequestTransferMappingSchemasSpecificViews } from "./CreateProjectModifyRecordsRequestTransferMappingSchemasSpecificViews";
import { CreateProjectModifyRecordsRequestTransferMappingSchemasTables } from "./CreateProjectModifyRecordsRequestTransferMappingSchemasTables";
import { CreateProjectModifyRecordsRequestTransferMappingSchemasViews } from "./CreateProjectModifyRecordsRequestTransferMappingSchemasViews";


export class CreateProjectModifyRecordsRequestTransferMappingSchemas extends $dara.Model {
  clusterName?: string;
  id?: string;
  mappedName?: string;
  name?: string;
  specificTables?: CreateProjectModifyRecordsRequestTransferMappingSchemasSpecificTables[];
  specificViews?: CreateProjectModifyRecordsRequestTransferMappingSchemasSpecificViews[];
  tables?: CreateProjectModifyRecordsRequestTransferMappingSchemasTables[];
  tenantName?: string;
  views?: CreateProjectModifyRecordsRequestTransferMappingSchemasViews[];
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
      specificTables: { 'type': 'array', 'itemType': CreateProjectModifyRecordsRequestTransferMappingSchemasSpecificTables },
      specificViews: { 'type': 'array', 'itemType': CreateProjectModifyRecordsRequestTransferMappingSchemasSpecificViews },
      tables: { 'type': 'array', 'itemType': CreateProjectModifyRecordsRequestTransferMappingSchemasTables },
      tenantName: 'string',
      views: { 'type': 'array', 'itemType': CreateProjectModifyRecordsRequestTransferMappingSchemasViews },
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

