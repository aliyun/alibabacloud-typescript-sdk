// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMigrationJobDetailResponseBodyDataInitializationDetailListDataInitializationDetail extends $dara.Model {
  destinationOwnerDBName?: string;
  errorMessage?: string;
  finishRowNum?: string;
  migrationTime?: string;
  sourceOwnerDBName?: string;
  status?: string;
  tableName?: string;
  totalRowNum?: string;
  static names(): { [key: string]: string } {
    return {
      destinationOwnerDBName: 'DestinationOwnerDBName',
      errorMessage: 'ErrorMessage',
      finishRowNum: 'FinishRowNum',
      migrationTime: 'MigrationTime',
      sourceOwnerDBName: 'SourceOwnerDBName',
      status: 'Status',
      tableName: 'TableName',
      totalRowNum: 'TotalRowNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationOwnerDBName: 'string',
      errorMessage: 'string',
      finishRowNum: 'string',
      migrationTime: 'string',
      sourceOwnerDBName: 'string',
      status: 'string',
      tableName: 'string',
      totalRowNum: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobDetailResponseBodyDataInitializationDetailList extends $dara.Model {
  dataInitializationDetail?: DescribeMigrationJobDetailResponseBodyDataInitializationDetailListDataInitializationDetail[];
  static names(): { [key: string]: string } {
    return {
      dataInitializationDetail: 'DataInitializationDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitializationDetail: { 'type': 'array', 'itemType': DescribeMigrationJobDetailResponseBodyDataInitializationDetailListDataInitializationDetail },
    };
  }

  validate() {
    if(Array.isArray(this.dataInitializationDetail)) {
      $dara.Model.validateArray(this.dataInitializationDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobDetailResponseBodyDataSynchronizationDetailListDataSynchronizationDetail extends $dara.Model {
  destinationOwnerDBName?: string;
  errorMessage?: string;
  sourceOwnerDBName?: string;
  status?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      destinationOwnerDBName: 'DestinationOwnerDBName',
      errorMessage: 'ErrorMessage',
      sourceOwnerDBName: 'SourceOwnerDBName',
      status: 'Status',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationOwnerDBName: 'string',
      errorMessage: 'string',
      sourceOwnerDBName: 'string',
      status: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobDetailResponseBodyDataSynchronizationDetailList extends $dara.Model {
  dataSynchronizationDetail?: DescribeMigrationJobDetailResponseBodyDataSynchronizationDetailListDataSynchronizationDetail[];
  static names(): { [key: string]: string } {
    return {
      dataSynchronizationDetail: 'DataSynchronizationDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSynchronizationDetail: { 'type': 'array', 'itemType': DescribeMigrationJobDetailResponseBodyDataSynchronizationDetailListDataSynchronizationDetail },
    };
  }

  validate() {
    if(Array.isArray(this.dataSynchronizationDetail)) {
      $dara.Model.validateArray(this.dataSynchronizationDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobDetailResponseBodyStructureInitializationDetailListStructureInitializationDetailConstraintListStructureInitializationDetail extends $dara.Model {
  destinationOwnerDBName?: string;
  errorMessage?: string;
  objectDefinition?: string;
  objectName?: string;
  objectType?: string;
  sourceOwnerDBName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      destinationOwnerDBName: 'DestinationOwnerDBName',
      errorMessage: 'ErrorMessage',
      objectDefinition: 'ObjectDefinition',
      objectName: 'ObjectName',
      objectType: 'ObjectType',
      sourceOwnerDBName: 'SourceOwnerDBName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationOwnerDBName: 'string',
      errorMessage: 'string',
      objectDefinition: 'string',
      objectName: 'string',
      objectType: 'string',
      sourceOwnerDBName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobDetailResponseBodyStructureInitializationDetailListStructureInitializationDetailConstraintList extends $dara.Model {
  structureInitializationDetail?: DescribeMigrationJobDetailResponseBodyStructureInitializationDetailListStructureInitializationDetailConstraintListStructureInitializationDetail[];
  static names(): { [key: string]: string } {
    return {
      structureInitializationDetail: 'StructureInitializationDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      structureInitializationDetail: { 'type': 'array', 'itemType': DescribeMigrationJobDetailResponseBodyStructureInitializationDetailListStructureInitializationDetailConstraintListStructureInitializationDetail },
    };
  }

  validate() {
    if(Array.isArray(this.structureInitializationDetail)) {
      $dara.Model.validateArray(this.structureInitializationDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobDetailResponseBodyStructureInitializationDetailListStructureInitializationDetail extends $dara.Model {
  constraintList?: DescribeMigrationJobDetailResponseBodyStructureInitializationDetailListStructureInitializationDetailConstraintList;
  destinationOwnerDBName?: string;
  errorMessage?: string;
  objectDefinition?: string;
  objectName?: string;
  objectType?: string;
  sourceOwnerDBName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      constraintList: 'ConstraintList',
      destinationOwnerDBName: 'DestinationOwnerDBName',
      errorMessage: 'ErrorMessage',
      objectDefinition: 'ObjectDefinition',
      objectName: 'ObjectName',
      objectType: 'ObjectType',
      sourceOwnerDBName: 'SourceOwnerDBName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraintList: DescribeMigrationJobDetailResponseBodyStructureInitializationDetailListStructureInitializationDetailConstraintList,
      destinationOwnerDBName: 'string',
      errorMessage: 'string',
      objectDefinition: 'string',
      objectName: 'string',
      objectType: 'string',
      sourceOwnerDBName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.constraintList && typeof (this.constraintList as any).validate === 'function') {
      (this.constraintList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobDetailResponseBodyStructureInitializationDetailList extends $dara.Model {
  structureInitializationDetail?: DescribeMigrationJobDetailResponseBodyStructureInitializationDetailListStructureInitializationDetail[];
  static names(): { [key: string]: string } {
    return {
      structureInitializationDetail: 'StructureInitializationDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      structureInitializationDetail: { 'type': 'array', 'itemType': DescribeMigrationJobDetailResponseBodyStructureInitializationDetailListStructureInitializationDetail },
    };
  }

  validate() {
    if(Array.isArray(this.structureInitializationDetail)) {
      $dara.Model.validateArray(this.structureInitializationDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMigrationJobDetailResponseBody extends $dara.Model {
  dataInitializationDetailList?: DescribeMigrationJobDetailResponseBodyDataInitializationDetailList;
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

