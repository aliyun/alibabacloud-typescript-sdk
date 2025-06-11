// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListProjectModifyRecordsResponseBodyDataDatabases } from "./ListProjectModifyRecordsResponseBodyDataDatabases";
import { ListProjectModifyRecordsResponseBodyDataErrorDetail } from "./ListProjectModifyRecordsResponseBodyDataErrorDetail";
import { ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfo } from "./ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfo";
import { ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfo } from "./ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfo";
import { ListProjectModifyRecordsResponseBodyDataTableEtlList } from "./ListProjectModifyRecordsResponseBodyDataTableEtlList";


export class ListProjectModifyRecordsResponseBodyData extends $dara.Model {
  databases?: ListProjectModifyRecordsResponseBodyDataDatabases[];
  errorDetail?: ListProjectModifyRecordsResponseBodyDataErrorDetail;
  /**
   * @example
   * 2023-07-13T06:26:15
   */
  gmtModified?: string;
  /**
   * @example
   * 344000005
   */
  id?: number;
  /**
   * @example
   * id
   */
  mergeRequestId?: number;
  migrationObjectsInfo?: ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfo;
  omsProjectMappingInfo?: ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfo;
  /**
   * @example
   * PENDING
   */
  status?: string;
  /**
   * @example
   * np_598qm***
   */
  subProjectId?: string;
  tableEtlList?: ListProjectModifyRecordsResponseBodyDataTableEtlList[];
  /**
   * @example
   * INCREASE_OBJECT
   */
  type?: string;
  /**
   * @example
   * id
   */
  updateRequestId?: number;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      errorDetail: 'ErrorDetail',
      gmtModified: 'GmtModified',
      id: 'Id',
      mergeRequestId: 'MergeRequestId',
      migrationObjectsInfo: 'MigrationObjectsInfo',
      omsProjectMappingInfo: 'OmsProjectMappingInfo',
      status: 'Status',
      subProjectId: 'SubProjectId',
      tableEtlList: 'TableEtlList',
      type: 'Type',
      updateRequestId: 'UpdateRequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': ListProjectModifyRecordsResponseBodyDataDatabases },
      errorDetail: ListProjectModifyRecordsResponseBodyDataErrorDetail,
      gmtModified: 'string',
      id: 'number',
      mergeRequestId: 'number',
      migrationObjectsInfo: ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfo,
      omsProjectMappingInfo: ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfo,
      status: 'string',
      subProjectId: 'string',
      tableEtlList: { 'type': 'array', 'itemType': ListProjectModifyRecordsResponseBodyDataTableEtlList },
      type: 'string',
      updateRequestId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.databases)) {
      $dara.Model.validateArray(this.databases);
    }
    if(this.errorDetail && typeof (this.errorDetail as any).validate === 'function') {
      (this.errorDetail as any).validate();
    }
    if(this.migrationObjectsInfo && typeof (this.migrationObjectsInfo as any).validate === 'function') {
      (this.migrationObjectsInfo as any).validate();
    }
    if(this.omsProjectMappingInfo && typeof (this.omsProjectMappingInfo as any).validate === 'function') {
      (this.omsProjectMappingInfo as any).validate();
    }
    if(Array.isArray(this.tableEtlList)) {
      $dara.Model.validateArray(this.tableEtlList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

