// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMigrationJobDetailResponseBodyDataInitializationDetailList } from "./DescribeMigrationJobDetailResponseBodyDataInitializationDetailList";
import { DescribeMigrationJobDetailResponseBodyDataSynchronizationDetailList } from "./DescribeMigrationJobDetailResponseBodyDataSynchronizationDetailList";
import { DescribeMigrationJobDetailResponseBodyStructureInitializationDetailList } from "./DescribeMigrationJobDetailResponseBodyStructureInitializationDetailList";


export class DescribeMigrationJobDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of data migration instances that can be displayed on one page.
   */
  dataInitializationDetailList?: DescribeMigrationJobDetailResponseBodyDataInitializationDetailList;
  /**
   * @remarks
   * The error message returned if full data migration failed.
   */
  dataSynchronizationDetailList?: DescribeMigrationJobDetailResponseBodyDataSynchronizationDetailList;
  /**
   * @remarks
   * Specifies whether to query the details of incremental data migration. Valid values:
   * 
   * *   **true**: yes
   * 
   * *   **false**: no
   * 
   * > Default value: **false**
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * Specifies whether to query the details of full data migration. Valid values:
   * 
   * *   **true**: yes
   * 
   * *   **false**: no
   * 
   * > Default value: **false**
   * 
   * @example
   * 0AE3CD0B-4148-426F-A90E-952467CC****
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the database to which the migration object in the source instance belongs.
   */
  structureInitializationDetailList?: DescribeMigrationJobDetailResponseBodyStructureInitializationDetailList;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter because this parameter will be removed in the future.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataInitializationDetailList: 'DataInitializationDetailList',
      dataSynchronizationDetailList: 'DataSynchronizationDetailList',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      structureInitializationDetailList: 'StructureInitializationDetailList',
      success: 'Success',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitializationDetailList: DescribeMigrationJobDetailResponseBodyDataInitializationDetailList,
      dataSynchronizationDetailList: DescribeMigrationJobDetailResponseBodyDataSynchronizationDetailList,
      errCode: 'string',
      errMessage: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      structureInitializationDetailList: DescribeMigrationJobDetailResponseBodyStructureInitializationDetailList,
      success: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.dataInitializationDetailList && typeof (this.dataInitializationDetailList as any).validate === 'function') {
      (this.dataInitializationDetailList as any).validate();
    }
    if(this.dataSynchronizationDetailList && typeof (this.dataSynchronizationDetailList as any).validate === 'function') {
      (this.dataSynchronizationDetailList as any).validate();
    }
    if(this.structureInitializationDetailList && typeof (this.structureInitializationDetailList as any).validate === 'function') {
      (this.structureInitializationDetailList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

