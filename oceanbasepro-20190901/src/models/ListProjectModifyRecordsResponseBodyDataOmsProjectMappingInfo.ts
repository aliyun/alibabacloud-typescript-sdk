// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfoColumnMappings } from "./ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfoColumnMappings";
import { ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfoSchemaMappings } from "./ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfoSchemaMappings";
import { ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfoTableMappings } from "./ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfoTableMappings";
import { ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfoViewMappings } from "./ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfoViewMappings";


export class ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfo extends $dara.Model {
  columnMappings?: ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfoColumnMappings[];
  schemaMappings?: ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfoSchemaMappings[];
  tableMappings?: ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfoTableMappings[];
  viewMappings?: ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfoViewMappings[];
  static names(): { [key: string]: string } {
    return {
      columnMappings: 'ColumnMappings',
      schemaMappings: 'SchemaMappings',
      tableMappings: 'TableMappings',
      viewMappings: 'ViewMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnMappings: { 'type': 'array', 'itemType': ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfoColumnMappings },
      schemaMappings: { 'type': 'array', 'itemType': ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfoSchemaMappings },
      tableMappings: { 'type': 'array', 'itemType': ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfoTableMappings },
      viewMappings: { 'type': 'array', 'itemType': ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfoViewMappings },
    };
  }

  validate() {
    if(Array.isArray(this.columnMappings)) {
      $dara.Model.validateArray(this.columnMappings);
    }
    if(Array.isArray(this.schemaMappings)) {
      $dara.Model.validateArray(this.schemaMappings);
    }
    if(Array.isArray(this.tableMappings)) {
      $dara.Model.validateArray(this.tableMappings);
    }
    if(Array.isArray(this.viewMappings)) {
      $dara.Model.validateArray(this.viewMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

