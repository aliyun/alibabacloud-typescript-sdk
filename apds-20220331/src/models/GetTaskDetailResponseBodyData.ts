// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTaskDetailResponseBodyDataDqlAssociationDDLTaskList } from "./GetTaskDetailResponseBodyDataDqlAssociationDdltaskList";


export class GetTaskDetailResponseBodyData extends $dara.Model {
  ddlFilename?: string;
  ddlRelateType?: number;
  dqlAssociationDDLTaskList?: GetTaskDetailResponseBodyDataDqlAssociationDDLTaskList[];
  dqlFilename?: string;
  dqlRelateDdlMessage?: string;
  dqlRelateTargetDatasourceId?: string;
  dqlRelateTargetDatasourceName?: string;
  dqlTestDatasourceId?: string;
  dqlTestDatasourceName?: string;
  dqlTestProject?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  lastImportTime?: string;
  scriptTransformStatus?: string;
  sourceDatasourceId?: string;
  sourceDatasourceName?: string;
  sourceDialect?: string;
  sourceProject?: string;
  syntaxErrorCount?: number;
  syntaxPassCount?: number;
  syntaxValidationStatus?: string;
  targetDatasourceId?: string;
  targetDatasourceName?: string;
  targetDialect?: string;
  targetProject?: string;
  taskDescription?: string;
  taskName?: string;
  taskType?: number;
  tenantId?: string;
  totalCount?: number;
  transformFailureCount?: number;
  transformSchema?: string;
  transformSuccessCount?: number;
  uid?: string;
  uploadedScriptUrl?: string;
  zipParsingState?: string;
  static names(): { [key: string]: string } {
    return {
      ddlFilename: 'ddlFilename',
      ddlRelateType: 'ddlRelateType',
      dqlAssociationDDLTaskList: 'dqlAssociationDDLTaskList',
      dqlFilename: 'dqlFilename',
      dqlRelateDdlMessage: 'dqlRelateDdlMessage',
      dqlRelateTargetDatasourceId: 'dqlRelateTargetDatasourceId',
      dqlRelateTargetDatasourceName: 'dqlRelateTargetDatasourceName',
      dqlTestDatasourceId: 'dqlTestDatasourceId',
      dqlTestDatasourceName: 'dqlTestDatasourceName',
      dqlTestProject: 'dqlTestProject',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      lastImportTime: 'lastImportTime',
      scriptTransformStatus: 'scriptTransformStatus',
      sourceDatasourceId: 'sourceDatasourceId',
      sourceDatasourceName: 'sourceDatasourceName',
      sourceDialect: 'sourceDialect',
      sourceProject: 'sourceProject',
      syntaxErrorCount: 'syntaxErrorCount',
      syntaxPassCount: 'syntaxPassCount',
      syntaxValidationStatus: 'syntaxValidationStatus',
      targetDatasourceId: 'targetDatasourceId',
      targetDatasourceName: 'targetDatasourceName',
      targetDialect: 'targetDialect',
      targetProject: 'targetProject',
      taskDescription: 'taskDescription',
      taskName: 'taskName',
      taskType: 'taskType',
      tenantId: 'tenantId',
      totalCount: 'totalCount',
      transformFailureCount: 'transformFailureCount',
      transformSchema: 'transformSchema',
      transformSuccessCount: 'transformSuccessCount',
      uid: 'uid',
      uploadedScriptUrl: 'uploadedScriptUrl',
      zipParsingState: 'zipParsingState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddlFilename: 'string',
      ddlRelateType: 'number',
      dqlAssociationDDLTaskList: { 'type': 'array', 'itemType': GetTaskDetailResponseBodyDataDqlAssociationDDLTaskList },
      dqlFilename: 'string',
      dqlRelateDdlMessage: 'string',
      dqlRelateTargetDatasourceId: 'string',
      dqlRelateTargetDatasourceName: 'string',
      dqlTestDatasourceId: 'string',
      dqlTestDatasourceName: 'string',
      dqlTestProject: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      lastImportTime: 'string',
      scriptTransformStatus: 'string',
      sourceDatasourceId: 'string',
      sourceDatasourceName: 'string',
      sourceDialect: 'string',
      sourceProject: 'string',
      syntaxErrorCount: 'number',
      syntaxPassCount: 'number',
      syntaxValidationStatus: 'string',
      targetDatasourceId: 'string',
      targetDatasourceName: 'string',
      targetDialect: 'string',
      targetProject: 'string',
      taskDescription: 'string',
      taskName: 'string',
      taskType: 'number',
      tenantId: 'string',
      totalCount: 'number',
      transformFailureCount: 'number',
      transformSchema: 'string',
      transformSuccessCount: 'number',
      uid: 'string',
      uploadedScriptUrl: 'string',
      zipParsingState: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dqlAssociationDDLTaskList)) {
      $dara.Model.validateArray(this.dqlAssociationDDLTaskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

