// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PopEditTaskRequestConfiguration } from "./PopEditTaskRequestConfiguration";


export class PopEditTaskRequest extends $dara.Model {
  configuration?: PopEditTaskRequestConfiguration;
  dataTypeMappingFile?: any;
  dataTypeOssFileName?: string;
  dataTypeOssObjectName?: string;
  dataTypeRealFileName?: string;
  dqlAssociationDDLTaskList?: string;
  dqlRelateTargetDatasourceId?: string;
  dqlTestDatasourceId?: string;
  dqlTestProject?: string;
  fileName?: string;
  globalParams?: string;
  identifier?: string;
  ossObjectName?: string;
  realFileName?: string;
  relatedDdlContentOssFileName?: string;
  relatedDdlContentOssObjectName?: string;
  relatedDdlContentRealFileName?: string;
  sourceDatasourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sourceDialect?: string;
  sourceProject?: string;
  tableNameMappingFile?: any;
  tableNameOssFileName?: string;
  tableNameOssObjectName?: string;
  tableNameRealFileName?: string;
  targetDatasourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  targetDialect?: string;
  targetProject?: string;
  taskDescription?: string;
  taskId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  taskName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  taskType?: number;
  tenantId?: string;
  transformSchema?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      dataTypeMappingFile: 'dataTypeMappingFile',
      dataTypeOssFileName: 'dataTypeOssFileName',
      dataTypeOssObjectName: 'dataTypeOssObjectName',
      dataTypeRealFileName: 'dataTypeRealFileName',
      dqlAssociationDDLTaskList: 'dqlAssociationDDLTaskList',
      dqlRelateTargetDatasourceId: 'dqlRelateTargetDatasourceId',
      dqlTestDatasourceId: 'dqlTestDatasourceId',
      dqlTestProject: 'dqlTestProject',
      fileName: 'fileName',
      globalParams: 'globalParams',
      identifier: 'identifier',
      ossObjectName: 'ossObjectName',
      realFileName: 'realFileName',
      relatedDdlContentOssFileName: 'relatedDdlContentOssFileName',
      relatedDdlContentOssObjectName: 'relatedDdlContentOssObjectName',
      relatedDdlContentRealFileName: 'relatedDdlContentRealFileName',
      sourceDatasourceId: 'sourceDatasourceId',
      sourceDialect: 'sourceDialect',
      sourceProject: 'sourceProject',
      tableNameMappingFile: 'tableNameMappingFile',
      tableNameOssFileName: 'tableNameOssFileName',
      tableNameOssObjectName: 'tableNameOssObjectName',
      tableNameRealFileName: 'tableNameRealFileName',
      targetDatasourceId: 'targetDatasourceId',
      targetDialect: 'targetDialect',
      targetProject: 'targetProject',
      taskDescription: 'taskDescription',
      taskId: 'taskId',
      taskName: 'taskName',
      taskType: 'taskType',
      tenantId: 'tenantId',
      transformSchema: 'transformSchema',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: PopEditTaskRequestConfiguration,
      dataTypeMappingFile: 'any',
      dataTypeOssFileName: 'string',
      dataTypeOssObjectName: 'string',
      dataTypeRealFileName: 'string',
      dqlAssociationDDLTaskList: 'string',
      dqlRelateTargetDatasourceId: 'string',
      dqlTestDatasourceId: 'string',
      dqlTestProject: 'string',
      fileName: 'string',
      globalParams: 'string',
      identifier: 'string',
      ossObjectName: 'string',
      realFileName: 'string',
      relatedDdlContentOssFileName: 'string',
      relatedDdlContentOssObjectName: 'string',
      relatedDdlContentRealFileName: 'string',
      sourceDatasourceId: 'string',
      sourceDialect: 'string',
      sourceProject: 'string',
      tableNameMappingFile: 'any',
      tableNameOssFileName: 'string',
      tableNameOssObjectName: 'string',
      tableNameRealFileName: 'string',
      targetDatasourceId: 'string',
      targetDialect: 'string',
      targetProject: 'string',
      taskDescription: 'string',
      taskId: 'number',
      taskName: 'string',
      taskType: 'number',
      tenantId: 'string',
      transformSchema: 'string',
      uid: 'string',
    };
  }

  validate() {
    if(this.configuration && typeof (this.configuration as any).validate === 'function') {
      (this.configuration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

