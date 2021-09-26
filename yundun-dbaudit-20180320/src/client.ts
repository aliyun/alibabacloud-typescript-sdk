// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddLogMaskConfigRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  maskName?: string;
  maskRegex?: string;
  maskTxt?: string;
  maskDescription?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      maskName: 'MaskName',
      maskRegex: 'MaskRegex',
      maskTxt: 'MaskTxt',
      maskDescription: 'MaskDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      maskName: 'string',
      maskRegex: 'string',
      maskTxt: 'string',
      maskDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLogMaskConfigResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLogMaskConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddLogMaskConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddLogMaskConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateDbToRuleRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  ruleIds?: string;
  ruleDbRelations?: string;
  operType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      ruleIds: 'RuleIds',
      ruleDbRelations: 'RuleDbRelations',
      operType: 'OperType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      ruleIds: 'string',
      ruleDbRelations: 'string',
      operType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateDbToRuleResponseBody extends $tea.Model {
  serverData?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      serverData: 'ServerData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverData: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateDbToRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssociateDbToRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssociateDbToRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateRuleToDbRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  jsonParam?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      jsonParam: 'JsonParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      jsonParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateRuleToDbResponseBody extends $tea.Model {
  requestId?: string;
  serverData?: AssociateRuleToDbResponseBodyServerData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serverData: 'ServerData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serverData: AssociateRuleToDbResponseBodyServerData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateRuleToDbResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssociateRuleToDbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssociateRuleToDbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeAgentStatusRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  agentId?: string;
  agentStatus?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      agentId: 'AgentId',
      agentStatus: 'AgentStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      agentId: 'string',
      agentStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeAgentStatusResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeAgentStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ChangeAgentStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ChangeAgentStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeLogMaskConfigStateRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  maskId?: number;
  maskState?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      maskId: 'MaskId',
      maskState: 'MaskState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      maskId: 'number',
      maskState: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeLogMaskConfigStateResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeLogMaskConfigStateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ChangeLogMaskConfigStateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ChangeLogMaskConfigStateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeRulePriorityRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  dbId?: string;
  ruleInfos?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      dbId: 'DbId',
      ruleInfos: 'RuleInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      dbId: 'string',
      ruleInfos: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeRulePriorityResponseBody extends $tea.Model {
  serverData?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      serverData: 'ServerData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverData: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeRulePriorityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ChangeRulePriorityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ChangeRulePriorityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeRuleStatusRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  jsonParam?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      jsonParam: 'JsonParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      jsonParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeRuleStatusResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeRuleStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ChangeRuleStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ChangeRuleStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMailRegisteredRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  mail?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      mail: 'Mail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      mail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMailRegisteredResponseBody extends $tea.Model {
  registered?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      registered: 'Registered',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registered: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckMailRegisteredResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckMailRegisteredResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckMailRegisteredResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearAgentRecordsRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  agentIds?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      agentIds: 'AgentIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      agentIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearAgentRecordsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearAgentRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ClearAgentRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ClearAgentRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigInstanceNetworkRequest extends $tea.Model {
  instanceId?: string;
  publicAccessControl?: number;
  regionId?: string;
  privateWhiteList?: string[];
  publicWhiteList?: string[];
  securityGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      publicAccessControl: 'PublicAccessControl',
      regionId: 'RegionId',
      privateWhiteList: 'PrivateWhiteList',
      publicWhiteList: 'PublicWhiteList',
      securityGroupIds: 'SecurityGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      publicAccessControl: 'number',
      regionId: 'string',
      privateWhiteList: { 'type': 'array', 'itemType': 'string' },
      publicWhiteList: { 'type': 'array', 'itemType': 'string' },
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigInstanceNetworkResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigInstanceNetworkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfigInstanceNetworkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfigInstanceNetworkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  dbName?: string;
  dbInstanceId?: string;
  assetType?: number;
  dbType?: number;
  dbVersion?: number;
  dbCertificate?: string;
  dbUsername?: string;
  dbPassword?: string;
  dbAddresses?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      dbName: 'DbName',
      dbInstanceId: 'DbInstanceId',
      assetType: 'AssetType',
      dbType: 'DbType',
      dbVersion: 'DbVersion',
      dbCertificate: 'DbCertificate',
      dbUsername: 'DbUsername',
      dbPassword: 'DbPassword',
      dbAddresses: 'DbAddresses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      dbName: 'string',
      dbInstanceId: 'string',
      assetType: 'number',
      dbType: 'number',
      dbVersion: 'number',
      dbCertificate: 'string',
      dbUsername: 'string',
      dbPassword: 'string',
      dbAddresses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceResponseBody extends $tea.Model {
  dbId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGradeProtectionReportRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  dbId?: number;
  beginDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      dbId: 'DbId',
      beginDate: 'BeginDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      dbId: 'number',
      beginDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGradeProtectionReportResponseBody extends $tea.Model {
  requestId?: string;
  serverData?: CreateGradeProtectionReportResponseBodyServerData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serverData: 'ServerData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serverData: CreateGradeProtectionReportResponseBodyServerData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGradeProtectionReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateGradeProtectionReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateGradeProtectionReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntegratedReportRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  dbId?: number;
  beginDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      dbId: 'DbId',
      beginDate: 'BeginDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      dbId: 'number',
      beginDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntegratedReportResponseBody extends $tea.Model {
  requestId?: string;
  serverData?: CreateIntegratedReportResponseBodyServerData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serverData: 'ServerData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serverData: CreateIntegratedReportResponseBodyServerData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntegratedReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateIntegratedReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateIntegratedReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLogAlarmTaskRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  taskName?: string;
  toMailList?: string[];
  dbIdList?: string[];
  riskLevelList?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      taskName: 'TaskName',
      toMailList: 'ToMailList',
      dbIdList: 'DbIdList',
      riskLevelList: 'RiskLevelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      taskName: 'string',
      toMailList: { 'type': 'array', 'itemType': 'string' },
      dbIdList: { 'type': 'array', 'itemType': 'string' },
      riskLevelList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLogAlarmTaskResponseBody extends $tea.Model {
  taskId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLogAlarmTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateLogAlarmTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateLogAlarmTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePCIReportRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  dbId?: number;
  beginDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      dbId: 'DbId',
      beginDate: 'BeginDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      dbId: 'number',
      beginDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePCIReportResponseBody extends $tea.Model {
  requestId?: string;
  serverData?: CreatePCIReportResponseBodyServerData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serverData: 'ServerData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serverData: CreatePCIReportResponseBodyServerData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePCIReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreatePCIReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreatePCIReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReportPushTaskRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  scheduleType?: string;
  scheduleTime?: string;
  jobStatus?: number;
  reportType?: string[];
  dbList?: string[];
  emailList?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      scheduleType: 'ScheduleType',
      scheduleTime: 'ScheduleTime',
      jobStatus: 'JobStatus',
      reportType: 'ReportType',
      dbList: 'DbList',
      emailList: 'EmailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      scheduleType: 'string',
      scheduleTime: 'string',
      jobStatus: 'number',
      reportType: { 'type': 'array', 'itemType': 'string' },
      dbList: { 'type': 'array', 'itemType': 'string' },
      emailList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReportPushTaskResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReportPushTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateReportPushTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateReportPushTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  ruleInfo?: string;
  ruleDbRelation?: string;
  ruleGroup?: string;
  effectCurrentDBStatus?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      ruleInfo: 'RuleInfo',
      ruleDbRelation: 'RuleDbRelation',
      ruleGroup: 'RuleGroup',
      effectCurrentDBStatus: 'EffectCurrentDBStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      ruleInfo: 'string',
      ruleDbRelation: 'string',
      ruleGroup: 'string',
      effectCurrentDBStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleResponseBody extends $tea.Model {
  serverData?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      serverData: 'ServerData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverData: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleGroupRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  groupName?: string;
  groupType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      groupName: 'GroupName',
      groupType: 'GroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      groupName: 'string',
      groupType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleGroupResponseBody extends $tea.Model {
  serverData?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      serverData: 'ServerData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverData: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRuleGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRuleGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSOXReportRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  dbId?: number;
  beginDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      dbId: 'DbId',
      beginDate: 'BeginDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      dbId: 'number',
      beginDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSOXReportResponseBody extends $tea.Model {
  requestId?: string;
  serverData?: CreateSOXReportResponseBodyServerData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serverData: 'ServerData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serverData: CreateSOXReportResponseBodyServerData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSOXReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSOXReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSOXReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSqlRuleRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  jsonParam?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      jsonParam: 'JsonParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      jsonParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSqlRuleResponseBody extends $tea.Model {
  requestId?: string;
  serverData?: CreateSqlRuleResponseBodyServerData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serverData: 'ServerData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serverData: CreateSqlRuleResponseBodyServerData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSqlRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSqlRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSqlRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSystemAlarmTaskRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  taskName?: string;
  toMailList?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      taskName: 'TaskName',
      toMailList: 'ToMailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      taskName: 'string',
      toMailList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSystemAlarmTaskResponseBody extends $tea.Model {
  taskId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSystemAlarmTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSystemAlarmTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSystemAlarmTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlarmTaskRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  taskIds?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      taskIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlarmTaskResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlarmTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAlarmTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAlarmTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  dbIds?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      dbIds: 'DbIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      dbIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteReportPushTaskRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  jobId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      jobId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteReportPushTaskResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteReportPushTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteReportPushTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteReportPushTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  ruleId?: string;
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      ruleId: 'RuleId',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      ruleId: 'string',
      ruleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleResponseBody extends $tea.Model {
  serverData?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      serverData: 'ServerData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverData: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleGroupRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  groupKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      groupKeyId: 'GroupKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      groupKeyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleGroupResponseBody extends $tea.Model {
  serverData?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      serverData: 'ServerData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverData: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRuleGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRuleGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeregisterTemplatesFromRuleRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  sentenceParam?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      sentenceParam: 'SentenceParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      sentenceParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeregisterTemplatesFromRuleResponseBody extends $tea.Model {
  serverData?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      serverData: 'ServerData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverData: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeregisterTemplatesFromRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeregisterTemplatesFromRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeregisterTemplatesFromRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseBody extends $tea.Model {
  requestId?: string;
  instanceAttribute?: DescribeInstanceAttributeResponseBodyInstanceAttribute;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceAttribute: 'InstanceAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceAttribute: DescribeInstanceAttributeResponseBodyInstanceAttribute,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequest extends $tea.Model {
  instanceStatus?: string;
  regionId?: string;
  pageNo?: number;
  currentPage?: number;
  pageSize?: number;
  resourceGroupId?: string;
  instanceId?: string[];
  tag?: DescribeInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      instanceStatus: 'InstanceStatus',
      regionId: 'RegionId',
      pageNo: 'PageNo',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      instanceId: 'InstanceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceStatus: 'string',
      regionId: 'string',
      pageNo: 'number',
      currentPage: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': DescribeInstancesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  instances?: DescribeInstancesResponseBodyInstances[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      instances: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoginTicketRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoginTicketResponseBody extends $tea.Model {
  requestId?: string;
  loginTicket?: DescribeLoginTicketResponseBodyLoginTicket;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      loginTicket: 'LoginTicket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      loginTicket: DescribeLoginTicketResponseBodyLoginTicket,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoginTicketResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLoginTicketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLoginTicketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  acceptLanguage?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  requestId?: string;
  regions?: DescribeRegionsResponseBodyRegions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncInfoRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncInfoResponseBody extends $tea.Model {
  requestId?: string;
  instanceInfo?: DescribeSyncInfoResponseBodyInstanceInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceInfo: 'InstanceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceInfo: DescribeSyncInfoResponseBodyInstanceInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSyncInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSyncInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableLogMaskConfigsRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  maskIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      maskIdList: 'MaskIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      maskIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableLogMaskConfigsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableLogMaskConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableLogMaskConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableLogMaskConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateRulesFromDbRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  jsonParam?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      jsonParam: 'JsonParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      jsonParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateRulesFromDbResponseBody extends $tea.Model {
  requestId?: string;
  serverData?: DissociateRulesFromDbResponseBodyServerData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serverData: 'ServerData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serverData: DissociateRulesFromDbResponseBodyServerData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateRulesFromDbResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DissociateRulesFromDbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DissociateRulesFromDbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateTemplatesFromRuleRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  jsonParam?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      jsonParam: 'JsonParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      jsonParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateTemplatesFromRuleResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateTemplatesFromRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DissociateTemplatesFromRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DissociateTemplatesFromRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditLogMaskConfigRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  maskId?: number;
  maskName?: string;
  maskRegex?: string;
  maskTxt?: string;
  maskDescription?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      maskId: 'MaskId',
      maskName: 'MaskName',
      maskRegex: 'MaskRegex',
      maskTxt: 'MaskTxt',
      maskDescription: 'MaskDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      maskId: 'number',
      maskName: 'string',
      maskRegex: 'string',
      maskTxt: 'string',
      maskDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditLogMaskConfigResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditLogMaskConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EditLogMaskConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EditLogMaskConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableLogMaskConfigsRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  maskIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      maskIdList: 'MaskIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      maskIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableLogMaskConfigsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableLogMaskConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableLogMaskConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableLogMaskConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentFileUrlRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentFileUrlResponseBody extends $tea.Model {
  requestId?: string;
  linuxFileUrl?: string;
  accessToken?: string;
  winFileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      linuxFileUrl: 'LinuxFileUrl',
      accessToken: 'AccessToken',
      winFileUrl: 'WinFileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      linuxFileUrl: 'string',
      accessToken: 'string',
      winFileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentFileUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAgentFileUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAgentFileUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentListRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  agentIp?: string;
  agentStatus?: number;
  agentOs?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      agentIp: 'AgentIp',
      agentStatus: 'AgentStatus',
      agentOs: 'AgentOs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      agentIp: 'string',
      agentStatus: 'number',
      agentOs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentListResponseBody extends $tea.Model {
  requestId?: string;
  agentList?: GetAgentListResponseBodyAgentList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      agentList: 'AgentList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      agentList: { 'type': 'array', 'itemType': GetAgentListResponseBodyAgentList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAgentListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAgentListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppointOperationRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppointOperationResponseBody extends $tea.Model {
  serverData?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      serverData: 'ServerData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverData: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppointOperationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAppointOperationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAppointOperationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuditCountRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  dbId?: number;
  beginDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      dbId: 'DbId',
      beginDate: 'BeginDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      dbId: 'number',
      beginDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuditCountResponseBody extends $tea.Model {
  sessionCount?: number;
  sqlCount?: number;
  riskCount?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      sessionCount: 'SessionCount',
      sqlCount: 'SqlCount',
      riskCount: 'RiskCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionCount: 'number',
      sqlCount: 'number',
      riskCount: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuditCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAuditCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAuditCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuditCountDistributionRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  dbId?: number;
  beginDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      dbId: 'DbId',
      beginDate: 'BeginDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      dbId: 'number',
      beginDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuditCountDistributionResponseBody extends $tea.Model {
  requestId?: string;
  timeList?: GetAuditCountDistributionResponseBodyTimeList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      timeList: 'TimeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      timeList: { 'type': 'array', 'itemType': GetAuditCountDistributionResponseBodyTimeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuditCountDistributionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAuditCountDistributionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAuditCountDistributionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaseTemplateListRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaseTemplateListResponseBody extends $tea.Model {
  requestId?: string;
  templateList?: GetBaseTemplateListResponseBodyTemplateList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateList: 'TemplateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateList: { 'type': 'array', 'itemType': GetBaseTemplateListResponseBodyTemplateList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaseTemplateListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetBaseTemplateListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetBaseTemplateListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDasUsageRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDasUsageResponseBody extends $tea.Model {
  over1sSqlCount?: number;
  requestId?: string;
  sessionTotalCount?: number;
  createTime?: string;
  sqlTotalCount?: number;
  auditAsset?: GetDasUsageResponseBodyAuditAsset;
  consoleAccess?: GetDasUsageResponseBodyConsoleAccess;
  agent?: GetDasUsageResponseBodyAgent;
  noticeState?: GetDasUsageResponseBodyNoticeState;
  riskAsset?: GetDasUsageResponseBodyRiskAsset;
  riskRule?: GetDasUsageResponseBodyRiskRule;
  wpAsset?: GetDasUsageResponseBodyWpAsset;
  static names(): { [key: string]: string } {
    return {
      over1sSqlCount: 'Over1sSqlCount',
      requestId: 'RequestId',
      sessionTotalCount: 'SessionTotalCount',
      createTime: 'CreateTime',
      sqlTotalCount: 'SqlTotalCount',
      auditAsset: 'AuditAsset',
      consoleAccess: 'ConsoleAccess',
      agent: 'Agent',
      noticeState: 'NoticeState',
      riskAsset: 'RiskAsset',
      riskRule: 'RiskRule',
      wpAsset: 'WpAsset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      over1sSqlCount: 'number',
      requestId: 'string',
      sessionTotalCount: 'number',
      createTime: 'string',
      sqlTotalCount: 'number',
      auditAsset: GetDasUsageResponseBodyAuditAsset,
      consoleAccess: GetDasUsageResponseBodyConsoleAccess,
      agent: GetDasUsageResponseBodyAgent,
      noticeState: GetDasUsageResponseBodyNoticeState,
      riskAsset: GetDasUsageResponseBodyRiskAsset,
      riskRule: GetDasUsageResponseBodyRiskRule,
      wpAsset: GetDasUsageResponseBodyWpAsset,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDasUsageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDasUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDasUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDBAuditCountListRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  dbId?: number;
  beginDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      dbId: 'DbId',
      beginDate: 'BeginDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      dbId: 'number',
      beginDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDBAuditCountListResponseBody extends $tea.Model {
  requestId?: string;
  dbList?: GetDBAuditCountListResponseBodyDbList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dbList: 'DbList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dbList: { 'type': 'array', 'itemType': GetDBAuditCountListResponseBodyDbList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDBAuditCountListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDBAuditCountListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDBAuditCountListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupDetailRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  groupKeyId?: string;
  groupType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      groupKeyId: 'GroupKeyId',
      groupType: 'GroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      groupKeyId: 'string',
      groupType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupDetailResponseBody extends $tea.Model {
  serverData?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      serverData: 'ServerData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverData: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetGroupDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetGroupDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLicenseRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLicenseResponseBody extends $tea.Model {
  startTime?: string;
  requestId?: string;
  assetLimit?: number;
  assetLimitUsed?: number;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      requestId: 'RequestId',
      assetLimit: 'AssetLimit',
      assetLimitUsed: 'AssetLimitUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      requestId: 'string',
      assetLimit: 'number',
      assetLimitUsed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLicenseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetLicenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogDetailRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  beginDate?: string;
  endDate?: string;
  sqlId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      beginDate: 'BeginDate',
      endDate: 'EndDate',
      sqlId: 'SqlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      beginDate: 'string',
      endDate: 'string',
      sqlId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogDetailResponseBody extends $tea.Model {
  clientPort?: number;
  appClientIp?: string;
  execCostUS?: number;
  sessionLogoutTime?: string;
  clientOsUser?: string;
  ruleId?: number;
  requestId?: string;
  sqlId?: string;
  sessionId?: string;
  sqlType?: string;
  appUsername?: string;
  riskLevel?: number;
  dbId?: number;
  ruleType?: number;
  ruleKeyId?: number;
  sqlResult?: string;
  affectRows?: number;
  sqlTypeName?: string;
  schema?: string;
  sessionLoginTime?: string;
  dbUser?: string;
  serverMac?: string;
  dbServer?: string;
  ruleName?: string;
  responseCode?: string;
  sqlContent?: string;
  instName?: string;
  templateContent?: string;
  clientProgram?: string;
  captureTime?: string;
  clientIp?: string;
  clientMac?: string;
  templateId?: string;
  responseText?: string;
  fetchCostUS?: number;
  templateRules?: string[];
  static names(): { [key: string]: string } {
    return {
      clientPort: 'ClientPort',
      appClientIp: 'AppClientIp',
      execCostUS: 'ExecCostUS',
      sessionLogoutTime: 'SessionLogoutTime',
      clientOsUser: 'ClientOsUser',
      ruleId: 'RuleId',
      requestId: 'RequestId',
      sqlId: 'SqlId',
      sessionId: 'SessionId',
      sqlType: 'SqlType',
      appUsername: 'AppUsername',
      riskLevel: 'RiskLevel',
      dbId: 'DbId',
      ruleType: 'RuleType',
      ruleKeyId: 'RuleKeyId',
      sqlResult: 'SqlResult',
      affectRows: 'AffectRows',
      sqlTypeName: 'SqlTypeName',
      schema: 'Schema',
      sessionLoginTime: 'SessionLoginTime',
      dbUser: 'DbUser',
      serverMac: 'ServerMac',
      dbServer: 'DbServer',
      ruleName: 'RuleName',
      responseCode: 'ResponseCode',
      sqlContent: 'SqlContent',
      instName: 'InstName',
      templateContent: 'TemplateContent',
      clientProgram: 'ClientProgram',
      captureTime: 'CaptureTime',
      clientIp: 'ClientIp',
      clientMac: 'ClientMac',
      templateId: 'TemplateId',
      responseText: 'ResponseText',
      fetchCostUS: 'FetchCostUS',
      templateRules: 'TemplateRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientPort: 'number',
      appClientIp: 'string',
      execCostUS: 'number',
      sessionLogoutTime: 'string',
      clientOsUser: 'string',
      ruleId: 'number',
      requestId: 'string',
      sqlId: 'string',
      sessionId: 'string',
      sqlType: 'string',
      appUsername: 'string',
      riskLevel: 'number',
      dbId: 'number',
      ruleType: 'number',
      ruleKeyId: 'number',
      sqlResult: 'string',
      affectRows: 'number',
      sqlTypeName: 'string',
      schema: 'string',
      sessionLoginTime: 'string',
      dbUser: 'string',
      serverMac: 'string',
      dbServer: 'string',
      ruleName: 'string',
      responseCode: 'string',
      sqlContent: 'string',
      instName: 'string',
      templateContent: 'string',
      clientProgram: 'string',
      captureTime: 'string',
      clientIp: 'string',
      clientMac: 'string',
      templateId: 'string',
      responseText: 'string',
      fetchCostUS: 'number',
      templateRules: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetLogDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetLogDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogListRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  dbId?: number;
  beginDate?: string;
  endDate?: string;
  pageNumber?: number;
  pageSize?: number;
  sqlId?: string;
  sqlKey?: string;
  sessionId?: string;
  templateId?: string;
  isSuccess?: string;
  minAffectRows?: number;
  maxAffectRows?: number;
  minExecCostUS?: number;
  maxExecCostUS?: number;
  ruleName?: string;
  clientIpList?: string[];
  dbUserList?: string[];
  dbHostList?: string[];
  riskLevelList?: string[];
  ruleTypeList?: string[];
  sqlTypeList?: string[];
  clientProgramList?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      dbId: 'DbId',
      beginDate: 'BeginDate',
      endDate: 'EndDate',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sqlId: 'SqlId',
      sqlKey: 'SqlKey',
      sessionId: 'SessionId',
      templateId: 'TemplateId',
      isSuccess: 'IsSuccess',
      minAffectRows: 'MinAffectRows',
      maxAffectRows: 'MaxAffectRows',
      minExecCostUS: 'MinExecCostUS',
      maxExecCostUS: 'MaxExecCostUS',
      ruleName: 'RuleName',
      clientIpList: 'ClientIpList',
      dbUserList: 'DbUserList',
      dbHostList: 'DbHostList',
      riskLevelList: 'RiskLevelList',
      ruleTypeList: 'RuleTypeList',
      sqlTypeList: 'SqlTypeList',
      clientProgramList: 'ClientProgramList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      dbId: 'number',
      beginDate: 'string',
      endDate: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sqlId: 'string',
      sqlKey: 'string',
      sessionId: 'string',
      templateId: 'string',
      isSuccess: 'string',
      minAffectRows: 'number',
      maxAffectRows: 'number',
      minExecCostUS: 'number',
      maxExecCostUS: 'number',
      ruleName: 'string',
      clientIpList: { 'type': 'array', 'itemType': 'string' },
      dbUserList: { 'type': 'array', 'itemType': 'string' },
      dbHostList: { 'type': 'array', 'itemType': 'string' },
      riskLevelList: { 'type': 'array', 'itemType': 'string' },
      ruleTypeList: { 'type': 'array', 'itemType': 'string' },
      sqlTypeList: { 'type': 'array', 'itemType': 'string' },
      clientProgramList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogListResponseBody extends $tea.Model {
  endDate?: string;
  requestId?: string;
  beginDate?: string;
  incomplete?: string;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  results?: GetLogListResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      requestId: 'RequestId',
      beginDate: 'BeginDate',
      incomplete: 'Incomplete',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      requestId: 'string',
      beginDate: 'string',
      incomplete: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      results: { 'type': 'array', 'itemType': GetLogListResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetLogListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetLogListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogMaskConfigsRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  maskName?: string;
  maskType?: number;
  maskState?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      maskName: 'MaskName',
      maskType: 'MaskType',
      maskState: 'MaskState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      maskName: 'string',
      maskType: 'number',
      maskState: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogMaskConfigsResponseBody extends $tea.Model {
  requestId?: string;
  configs?: GetLogMaskConfigsResponseBodyConfigs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      configs: 'Configs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      configs: { 'type': 'array', 'itemType': GetLogMaskConfigsResponseBodyConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogMaskConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetLogMaskConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetLogMaskConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogQueryConditionRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  dbId?: number;
  beginDate?: string;
  endDate?: string;
  isRisk?: string;
  isSuccess?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      dbId: 'DbId',
      beginDate: 'BeginDate',
      endDate: 'EndDate',
      isRisk: 'IsRisk',
      isSuccess: 'IsSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      dbId: 'number',
      beginDate: 'string',
      endDate: 'string',
      isRisk: 'string',
      isSuccess: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogQueryConditionResponseBody extends $tea.Model {
  requestId?: string;
  dbUserList?: string[];
  clientIpList?: string[];
  clientProgramList?: string[];
  dbServerList?: string[];
  sqlTypeList?: GetLogQueryConditionResponseBodySqlTypeList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dbUserList: 'DbUserList',
      clientIpList: 'ClientIpList',
      clientProgramList: 'ClientProgramList',
      dbServerList: 'DbServerList',
      sqlTypeList: 'SqlTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dbUserList: { 'type': 'array', 'itemType': 'string' },
      clientIpList: { 'type': 'array', 'itemType': 'string' },
      clientProgramList: { 'type': 'array', 'itemType': 'string' },
      dbServerList: { 'type': 'array', 'itemType': 'string' },
      sqlTypeList: { 'type': 'array', 'itemType': GetLogQueryConditionResponseBodySqlTypeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogQueryConditionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetLogQueryConditionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetLogQueryConditionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogStatisticsRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  dbId?: number;
  beginDate?: string;
  endDate?: string;
  byDbId?: number;
  byClientIp?: number;
  byDbUser?: number;
  byDbServer?: number;
  byClientProgram?: number;
  bySqlType?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      dbId: 'DbId',
      beginDate: 'BeginDate',
      endDate: 'EndDate',
      byDbId: 'ByDbId',
      byClientIp: 'ByClientIp',
      byDbUser: 'ByDbUser',
      byDbServer: 'ByDbServer',
      byClientProgram: 'ByClientProgram',
      bySqlType: 'BySqlType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      dbId: 'number',
      beginDate: 'string',
      endDate: 'string',
      byDbId: 'number',
      byClientIp: 'number',
      byDbUser: 'number',
      byDbServer: 'number',
      byClientProgram: 'number',
      bySqlType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogStatisticsResponseBody extends $tea.Model {
  requestId?: string;
  countList?: GetLogStatisticsResponseBodyCountList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      countList: 'CountList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      countList: { 'type': 'array', 'itemType': GetLogStatisticsResponseBodyCountList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetLogStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetLogStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogTopDistributionRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  dbId?: number;
  beginDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      dbId: 'DbId',
      beginDate: 'BeginDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      dbId: 'number',
      beginDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogTopDistributionResponseBody extends $tea.Model {
  requestId?: string;
  timeList?: GetLogTopDistributionResponseBodyTimeList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      timeList: 'TimeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      timeList: { 'type': 'array', 'itemType': GetLogTopDistributionResponseBodyTimeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogTopDistributionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetLogTopDistributionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetLogTopDistributionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogTopStatisticsRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  dbId?: number;
  topTime?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      dbId: 'DbId',
      topTime: 'TopTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      dbId: 'number',
      topTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogTopStatisticsResponseBody extends $tea.Model {
  requestId?: string;
  countList?: GetLogTopStatisticsResponseBodyCountList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      countList: 'CountList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      countList: { 'type': 'array', 'itemType': GetLogTopStatisticsResponseBodyCountList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogTopStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetLogTopStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetLogTopStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogTypeDistributionRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  dbId?: number;
  beginDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      dbId: 'DbId',
      beginDate: 'BeginDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      dbId: 'number',
      beginDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogTypeDistributionResponseBody extends $tea.Model {
  requestId?: string;
  timeList?: GetLogTypeDistributionResponseBodyTimeList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      timeList: 'TimeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      timeList: { 'type': 'array', 'itemType': GetLogTypeDistributionResponseBodyTimeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogTypeDistributionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetLogTypeDistributionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetLogTypeDistributionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNewSqlTemplateListRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  dbId?: number;
  beginDate?: string;
  endDate?: string;
  pageNumber?: number;
  pageSize?: number;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      dbId: 'DbId',
      beginDate: 'BeginDate',
      endDate: 'EndDate',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      dbId: 'number',
      beginDate: 'string',
      endDate: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNewSqlTemplateListResponseBody extends $tea.Model {
  requestId?: string;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  results?: GetNewSqlTemplateListResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      results: { 'type': 'array', 'itemType': GetNewSqlTemplateListResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNewSqlTemplateListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetNewSqlTemplateListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetNewSqlTemplateListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReportFileUrlRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReportFileUrlResponseBody extends $tea.Model {
  requestId?: string;
  serverData?: GetReportFileUrlResponseBodyServerData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serverData: 'ServerData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serverData: GetReportFileUrlResponseBodyServerData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReportFileUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetReportFileUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetReportFileUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskLevelDistributionRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  dbId?: number;
  beginDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      dbId: 'DbId',
      beginDate: 'BeginDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      dbId: 'number',
      beginDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskLevelDistributionResponseBody extends $tea.Model {
  requestId?: string;
  timeList?: GetRiskLevelDistributionResponseBodyTimeList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      timeList: 'TimeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      timeList: { 'type': 'array', 'itemType': GetRiskLevelDistributionResponseBodyTimeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskLevelDistributionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRiskLevelDistributionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRiskLevelDistributionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskStatisticsRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  dbId?: number;
  beginDate?: string;
  endDate?: string;
  byDbId?: number;
  byRiskLevel?: number;
  byRuleType?: number;
  byRuleId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      dbId: 'DbId',
      beginDate: 'BeginDate',
      endDate: 'EndDate',
      byDbId: 'ByDbId',
      byRiskLevel: 'ByRiskLevel',
      byRuleType: 'ByRuleType',
      byRuleId: 'ByRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      dbId: 'number',
      beginDate: 'string',
      endDate: 'string',
      byDbId: 'number',
      byRiskLevel: 'number',
      byRuleType: 'number',
      byRuleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskStatisticsResponseBody extends $tea.Model {
  requestId?: string;
  timeList?: GetRiskStatisticsResponseBodyTimeList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      timeList: 'TimeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      timeList: { 'type': 'array', 'itemType': GetRiskStatisticsResponseBodyTimeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRiskStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRiskStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  ruleId?: number;
  ruleKeyId?: number;
  dbId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      ruleId: 'RuleId',
      ruleKeyId: 'RuleKeyId',
      dbId: 'DbId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      ruleId: 'number',
      ruleKeyId: 'number',
      dbId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBody extends $tea.Model {
  requestId?: string;
  serverData?: GetRuleDetailResponseBodyServerData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serverData: 'ServerData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serverData: GetRuleDetailResponseBodyServerData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRuleDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRuleDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleGroupNameRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  groupName?: string;
  groupType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      groupName: 'GroupName',
      groupType: 'GroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      groupName: 'string',
      groupType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleGroupNameResponseBody extends $tea.Model {
  serverData?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      serverData: 'ServerData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverData: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleGroupNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRuleGroupNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRuleGroupNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSessionDetailRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSessionDetailResponseBody extends $tea.Model {
  loginTime?: string;
  dbId?: number;
  loginCode?: number;
  clientPort?: number;
  loginMessage?: string;
  dbUser?: string;
  logoutTime?: string;
  serverPort?: number;
  clientOsUser?: string;
  serverMac?: string;
  requestId?: string;
  clientProgram?: string;
  clientIp?: string;
  serverIp?: string;
  sessionId?: string;
  clientMac?: string;
  static names(): { [key: string]: string } {
    return {
      loginTime: 'LoginTime',
      dbId: 'DbId',
      loginCode: 'LoginCode',
      clientPort: 'ClientPort',
      loginMessage: 'LoginMessage',
      dbUser: 'DbUser',
      logoutTime: 'LogoutTime',
      serverPort: 'ServerPort',
      clientOsUser: 'ClientOsUser',
      serverMac: 'ServerMac',
      requestId: 'RequestId',
      clientProgram: 'ClientProgram',
      clientIp: 'ClientIp',
      serverIp: 'ServerIp',
      sessionId: 'SessionId',
      clientMac: 'ClientMac',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginTime: 'string',
      dbId: 'number',
      loginCode: 'number',
      clientPort: 'number',
      loginMessage: 'string',
      dbUser: 'string',
      logoutTime: 'string',
      serverPort: 'number',
      clientOsUser: 'string',
      serverMac: 'string',
      requestId: 'string',
      clientProgram: 'string',
      clientIp: 'string',
      serverIp: 'string',
      sessionId: 'string',
      clientMac: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSessionDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSessionDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSessionDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSessionDistributionRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  dbId?: number;
  beginDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      dbId: 'DbId',
      beginDate: 'BeginDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      dbId: 'number',
      beginDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSessionDistributionResponseBody extends $tea.Model {
  requestId?: string;
  timeList?: GetSessionDistributionResponseBodyTimeList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      timeList: 'TimeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      timeList: { 'type': 'array', 'itemType': GetSessionDistributionResponseBodyTimeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSessionDistributionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSessionDistributionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSessionDistributionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSessionListRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  dbId?: number;
  beginDate?: string;
  endDate?: string;
  pageNumber?: number;
  pageSize?: number;
  sessionId?: string;
  actionList?: string[];
  clientIpList?: string[];
  dbUserList?: string[];
  dbHostList?: string[];
  clientProgramList?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      dbId: 'DbId',
      beginDate: 'BeginDate',
      endDate: 'EndDate',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sessionId: 'SessionId',
      actionList: 'ActionList',
      clientIpList: 'ClientIpList',
      dbUserList: 'DbUserList',
      dbHostList: 'DbHostList',
      clientProgramList: 'ClientProgramList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      dbId: 'number',
      beginDate: 'string',
      endDate: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sessionId: 'string',
      actionList: { 'type': 'array', 'itemType': 'string' },
      clientIpList: { 'type': 'array', 'itemType': 'string' },
      dbUserList: { 'type': 'array', 'itemType': 'string' },
      dbHostList: { 'type': 'array', 'itemType': 'string' },
      clientProgramList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSessionListResponseBody extends $tea.Model {
  endDate?: string;
  requestId?: string;
  beginDate?: string;
  incomplete?: string;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  results?: GetSessionListResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      requestId: 'RequestId',
      beginDate: 'BeginDate',
      incomplete: 'Incomplete',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      requestId: 'string',
      beginDate: 'string',
      incomplete: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      results: { 'type': 'array', 'itemType': GetSessionListResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSessionListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSessionListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSessionListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSessionQueryConditionRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  dbId?: number;
  beginDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      dbId: 'DbId',
      beginDate: 'BeginDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      dbId: 'number',
      beginDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSessionQueryConditionResponseBody extends $tea.Model {
  requestId?: string;
  dbUserList?: string[];
  clientIpList?: string[];
  clientProgramList?: string[];
  dbServerList?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dbUserList: 'DbUserList',
      clientIpList: 'ClientIpList',
      clientProgramList: 'ClientProgramList',
      dbServerList: 'DbServerList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dbUserList: { 'type': 'array', 'itemType': 'string' },
      clientIpList: { 'type': 'array', 'itemType': 'string' },
      clientProgramList: { 'type': 'array', 'itemType': 'string' },
      dbServerList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSessionQueryConditionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSessionQueryConditionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSessionQueryConditionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlTemplateListRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  dbId?: number;
  beginDate?: string;
  endDate?: string;
  pageNumber?: number;
  pageSize?: number;
  sqlId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      dbId: 'DbId',
      beginDate: 'BeginDate',
      endDate: 'EndDate',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sqlId: 'SqlId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      dbId: 'number',
      beginDate: 'string',
      endDate: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sqlId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlTemplateListResponseBody extends $tea.Model {
  requestId?: string;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  results?: GetSqlTemplateListResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      results: { 'type': 'array', 'itemType': GetSqlTemplateListResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlTemplateListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSqlTemplateListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSqlTemplateListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopSqlTemplateListRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  dbId?: number;
  beginDate?: string;
  endDate?: string;
  orderType?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      dbId: 'DbId',
      beginDate: 'BeginDate',
      endDate: 'EndDate',
      orderType: 'OrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      dbId: 'number',
      beginDate: 'string',
      endDate: 'string',
      orderType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopSqlTemplateListResponseBody extends $tea.Model {
  requestId?: string;
  templateList?: GetTopSqlTemplateListResponseBodyTemplateList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateList: 'TemplateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateList: { 'type': 'array', 'itemType': GetTopSqlTemplateListResponseBodyTemplateList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopSqlTemplateListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTopSqlTemplateListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTopSqlTemplateListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GradeProtectionReportRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  dbId?: number;
  beginDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      dbId: 'DbId',
      beginDate: 'BeginDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      dbId: 'number',
      beginDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GradeProtectionReportResponseBody extends $tea.Model {
  serverData?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      serverData: 'ServerData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverData: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GradeProtectionReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GradeProtectionReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GradeProtectionReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportDataSourceRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  dataJson?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      dataJson: 'DataJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      dataJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportDataSourceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportDataSourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ImportDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ImportDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntegratedReportRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  dbId?: number;
  beginDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      dbId: 'DbId',
      beginDate: 'BeginDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      dbId: 'number',
      beginDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntegratedReportResponseBody extends $tea.Model {
  serverData?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      serverData: 'ServerData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverData: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntegratedReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: IntegratedReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: IntegratedReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssociatedRulesRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  ruleName?: string;
  ruleType?: string;
  ruleDefn?: string;
  dbId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      ruleDefn: 'RuleDefn',
      dbId: 'DbId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      ruleName: 'string',
      ruleType: 'string',
      ruleDefn: 'string',
      dbId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssociatedRulesResponseBody extends $tea.Model {
  requestId?: string;
  serverData?: ListAssociatedRulesResponseBodyServerData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serverData: 'ServerData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serverData: ListAssociatedRulesResponseBodyServerData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssociatedRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAssociatedRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAssociatedRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceAttributeRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  dbIds?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      dbIds: 'DbIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      dbIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceAttributeResponseBody extends $tea.Model {
  requestId?: string;
  dbList?: ListDataSourceAttributeResponseBodyDbList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dbList: 'DbList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dbList: { 'type': 'array', 'itemType': ListDataSourceAttributeResponseBodyDbList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDataSourceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDataSourceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  dbId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      dbId: 'DbId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      dbId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponseBody extends $tea.Model {
  requestId?: string;
  dbList?: ListDataSourcesResponseBodyDbList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dbList: 'DbList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dbList: { 'type': 'array', 'itemType': ListDataSourcesResponseBodyDbList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDataSourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDataSourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogAlarmTasksRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogAlarmTasksResponseBody extends $tea.Model {
  requestId?: string;
  taskList?: ListLogAlarmTasksResponseBodyTaskList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskList: 'TaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskList: { 'type': 'array', 'itemType': ListLogAlarmTasksResponseBodyTaskList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogAlarmTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListLogAlarmTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListLogAlarmTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReportPushTasksRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReportPushTasksResponseBody extends $tea.Model {
  requestId?: string;
  taskList?: ListReportPushTasksResponseBodyTaskList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskList: 'TaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskList: { 'type': 'array', 'itemType': ListReportPushTasksResponseBodyTaskList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReportPushTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListReportPushTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListReportPushTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleGroupsRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleGroupsResponseBody extends $tea.Model {
  serverData?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      serverData: 'ServerData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverData: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRuleGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRuleGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  dbId?: string;
  foregroundType?: string;
  ruleName?: string;
  ruleType?: string;
  ruleGroupId?: string;
  riskLevel?: string;
  ruleQuote?: number;
  ruleState?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      dbId: 'DbId',
      foregroundType: 'ForegroundType',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      ruleGroupId: 'RuleGroupId',
      riskLevel: 'RiskLevel',
      ruleQuote: 'RuleQuote',
      ruleState: 'RuleState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      dbId: 'string',
      foregroundType: 'string',
      ruleName: 'string',
      ruleType: 'string',
      ruleGroupId: 'string',
      riskLevel: 'string',
      ruleQuote: 'number',
      ruleState: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBody extends $tea.Model {
  requestId?: string;
  serverData?: ListRulesResponseBodyServerData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serverData: 'ServerData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serverData: ListRulesResponseBodyServerData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSqlTypeKeysForRuleRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSqlTypeKeysForRuleResponseBody extends $tea.Model {
  serverData?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      serverData: 'ServerData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverData: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSqlTypeKeysForRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSqlTypeKeysForRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSqlTypeKeysForRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSqlTypesForRuleRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  typeId?: string;
  sqltype1?: string;
  keyWorld?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      typeId: 'TypeId',
      sqltype1: 'Sqltype1',
      keyWorld: 'KeyWorld',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      typeId: 'string',
      sqltype1: 'string',
      keyWorld: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSqlTypesForRuleResponseBody extends $tea.Model {
  serverData?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      serverData: 'ServerData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverData: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSqlTypesForRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSqlTypesForRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSqlTypesForRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSupportDbTypesRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSupportDbTypesResponseBody extends $tea.Model {
  requestId?: string;
  typeList?: ListSupportDbTypesResponseBodyTypeList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      typeList: 'TypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      typeList: { 'type': 'array', 'itemType': ListSupportDbTypesResponseBodyTypeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSupportDbTypesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSupportDbTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSupportDbTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemAlarmsRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  alarmType?: number;
  beginDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      alarmType: 'AlarmType',
      beginDate: 'BeginDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      alarmType: 'number',
      beginDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemAlarmsResponseBody extends $tea.Model {
  requestId?: string;
  alarms?: ListSystemAlarmsResponseBodyAlarms[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      alarms: 'Alarms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      alarms: { 'type': 'array', 'itemType': ListSystemAlarmsResponseBodyAlarms },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemAlarmsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSystemAlarmsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSystemAlarmsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemAlarmTasksRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemAlarmTasksResponseBody extends $tea.Model {
  requestId?: string;
  taskList?: ListSystemAlarmTasksResponseBodyTaskList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskList: 'TaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskList: { 'type': 'array', 'itemType': ListSystemAlarmTasksResponseBodyTaskList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemAlarmTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSystemAlarmTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSystemAlarmTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysRequest extends $tea.Model {
  regionId?: string;
  resourceType?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBody extends $tea.Model {
  currentPage?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  tagKeys?: ListTagKeysResponseBodyTagKeys[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      tagKeys: { 'type': 'array', 'itemType': ListTagKeysResponseBodyTagKeys },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceType?: string;
  nextToken?: string;
  resourceId?: string[];
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesForSqlRuleRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  sqlType1?: string;
  choseCondition?: string;
  dbId?: number;
  ruleId?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      sqlType1: 'SqlType1',
      choseCondition: 'ChoseCondition',
      dbId: 'DbId',
      ruleId: 'RuleId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      sqlType1: 'string',
      choseCondition: 'string',
      dbId: 'number',
      ruleId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesForSqlRuleResponseBody extends $tea.Model {
  requestId?: string;
  serverData?: ListTemplatesForSqlRuleResponseBodyServerData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serverData: 'ServerData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serverData: { 'type': 'array', 'itemType': ListTemplatesForSqlRuleResponseBodyServerData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesForSqlRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTemplatesForSqlRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTemplatesForSqlRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsedSqlTypesRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  ruleId?: string;
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      ruleId: 'RuleId',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      ruleId: 'string',
      ruleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsedSqlTypesResponseBody extends $tea.Model {
  serverData?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      serverData: 'ServerData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverData: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsedSqlTypesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUsedSqlTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUsedSqlTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBaseTemplateStateRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  templateState?: number;
  templateIds?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      templateState: 'TemplateState',
      templateIds: 'TemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      templateState: 'number',
      templateIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBaseTemplateStateResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBaseTemplateStateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyBaseTemplateStateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyBaseTemplateStateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCustomNameRequest extends $tea.Model {
  sourceIp?: string;
  commodityCode?: string;
  instanceId?: string;
  customName?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      commodityCode: 'CommodityCode',
      instanceId: 'InstanceId',
      customName: 'CustomName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      commodityCode: 'string',
      instanceId: 'string',
      customName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCustomNameResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCustomNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyCustomNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyCustomNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  dbId?: number;
  dbName?: string;
  dbVersion?: number;
  dbCertificate?: string;
  dbUsername?: string;
  dbPassword?: string;
  dbInstanceId?: string;
  dbAddresses?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      dbId: 'DbId',
      dbName: 'DbName',
      dbVersion: 'DbVersion',
      dbCertificate: 'DbCertificate',
      dbUsername: 'DbUsername',
      dbPassword: 'DbPassword',
      dbInstanceId: 'DbInstanceId',
      dbAddresses: 'DbAddresses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      dbId: 'number',
      dbName: 'string',
      dbVersion: 'number',
      dbCertificate: 'string',
      dbUsername: 'string',
      dbPassword: 'string',
      dbInstanceId: 'string',
      dbAddresses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceAttributeRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  auditMode?: string;
  resultAuditMode?: string;
  resultAuditMaxLine?: number;
  resultAuditMaxSize?: number;
  dbIds?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      auditMode: 'AuditMode',
      resultAuditMode: 'ResultAuditMode',
      resultAuditMaxLine: 'ResultAuditMaxLine',
      resultAuditMaxSize: 'ResultAuditMaxSize',
      dbIds: 'DbIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      auditMode: 'string',
      resultAuditMode: 'string',
      resultAuditMaxLine: 'number',
      resultAuditMaxSize: 'number',
      dbIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceAttributeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDataSourceAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDataSourceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDataSourceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAttributeRequest extends $tea.Model {
  instanceId?: string;
  description?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      description: 'Description',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      description: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAttributeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyInstanceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyInstanceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLogAlarmTaskRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  taskName?: string;
  taskId?: number;
  toMailList?: string[];
  dbIdList?: string[];
  riskLevelList?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      taskName: 'TaskName',
      taskId: 'TaskId',
      toMailList: 'ToMailList',
      dbIdList: 'DbIdList',
      riskLevelList: 'RiskLevelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      taskName: 'string',
      taskId: 'number',
      toMailList: { 'type': 'array', 'itemType': 'string' },
      dbIdList: { 'type': 'array', 'itemType': 'string' },
      riskLevelList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLogAlarmTaskResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLogAlarmTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyLogAlarmTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyLogAlarmTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPlanRequest extends $tea.Model {
  commodityCode?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPlanResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyReportPushTaskRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  jobId?: number;
  scheduleType?: string;
  scheduleTime?: string;
  jobStatus?: number;
  reportType?: string[];
  dbList?: string[];
  emailList?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      scheduleType: 'ScheduleType',
      scheduleTime: 'ScheduleTime',
      jobStatus: 'JobStatus',
      reportType: 'ReportType',
      dbList: 'DbList',
      emailList: 'EmailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      jobId: 'number',
      scheduleType: 'string',
      scheduleTime: 'string',
      jobStatus: 'number',
      reportType: { 'type': 'array', 'itemType': 'string' },
      dbList: { 'type': 'array', 'itemType': 'string' },
      emailList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyReportPushTaskResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyReportPushTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyReportPushTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyReportPushTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRuleGroupRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  groupId?: string;
  groupName?: string;
  groupType?: string;
  groupKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      groupId: 'GroupId',
      groupName: 'GroupName',
      groupType: 'GroupType',
      groupKeyId: 'GroupKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      groupId: 'string',
      groupName: 'string',
      groupType: 'string',
      groupKeyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRuleGroupResponseBody extends $tea.Model {
  serverData?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      serverData: 'ServerData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverData: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRuleGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyRuleGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyRuleGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySystemAlarmTaskRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  taskName?: string;
  taskId?: number;
  toMailList?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      taskName: 'TaskName',
      taskId: 'TaskId',
      toMailList: 'ToMailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      taskName: 'string',
      taskId: 'number',
      toMailList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySystemAlarmTaskResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySystemAlarmTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySystemAlarmTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySystemAlarmTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupRequest extends $tea.Model {
  resourceId?: string;
  resourceGroupId?: string;
  resourceType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceGroupId: 'ResourceGroupId',
      resourceType: 'ResourceType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MoveResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MoveResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PciReportRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  dbId?: number;
  beginDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      dbId: 'DbId',
      beginDate: 'BeginDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      dbId: 'number',
      beginDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PciReportResponseBody extends $tea.Model {
  serverData?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      serverData: 'ServerData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverData: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PciReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PciReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PciReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutLoginCountRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutLoginCountResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutLoginCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PutLoginCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutLoginCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadMarkSystemAlarmsRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  alarmIds?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      alarmIds: 'AlarmIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      alarmIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadMarkSystemAlarmsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadMarkSystemAlarmsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReadMarkSystemAlarmsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReadMarkSystemAlarmsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundInstanceRequest extends $tea.Model {
  instanceId?: string;
  serviceCode?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      serviceCode: 'ServiceCode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      serviceCode: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RefundInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RefundInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterNoticeMailRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  mail?: string;
  vcode?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      mail: 'Mail',
      vcode: 'Vcode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      mail: 'string',
      vcode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterNoticeMailResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterNoticeMailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RegisterNoticeMailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RegisterNoticeMailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveLogMaskConfigRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  maskId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      maskId: 'MaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      maskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveLogMaskConfigResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveLogMaskConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveLogMaskConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveLogMaskConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVerifyCodeMailRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  mail?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      mail: 'Mail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      mail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVerifyCodeMailResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVerifyCodeMailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SendVerifyCodeMailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SendVerifyCodeMailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SoxReportRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  dbId?: number;
  beginDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      dbId: 'DbId',
      beginDate: 'BeginDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      dbId: 'number',
      beginDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SoxReportResponseBody extends $tea.Model {
  serverData?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      serverData: 'ServerData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverData: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SoxReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SoxReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SoxReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAlarmTaskRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  taskIds?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      taskIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAlarmTaskResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAlarmTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartAlarmTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartAlarmTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceRequest extends $tea.Model {
  instanceId?: string;
  vswitchId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      vswitchId: 'VswitchId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      vswitchId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAlarmTaskRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  taskIds?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      taskIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAlarmTaskResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAlarmTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopAlarmTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopAlarmTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceType?: string;
  resourceId?: string[];
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceType?: string;
  all?: boolean;
  resourceId?: string[];
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      all: 'All',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceVersionRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceVersionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradeInstanceVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradeInstanceVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateRuleToDbResponseBodyServerData extends $tea.Model {
  jsonResult?: string;
  static names(): { [key: string]: string } {
    return {
      jsonResult: 'JsonResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jsonResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGradeProtectionReportResponseBodyServerData extends $tea.Model {
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntegratedReportResponseBodyServerData extends $tea.Model {
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePCIReportResponseBodyServerData extends $tea.Model {
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSOXReportResponseBodyServerData extends $tea.Model {
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSqlRuleResponseBodyServerData extends $tea.Model {
  jsonResult?: string;
  static names(): { [key: string]: string } {
    return {
      jsonResult: 'JsonResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jsonResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseBodyInstanceAttribute extends $tea.Model {
  vpcId?: string;
  vswitchId?: string;
  internetIp?: string;
  networkType?: string;
  imageVersionName?: string;
  seriesCode?: string;
  description?: string;
  accessType?: number;
  ecsStatus?: string;
  operatable?: boolean;
  planUpgradeStatus?: number;
  expireTime?: number;
  upgradeable?: boolean;
  instanceId?: string;
  internetEndpoint?: string;
  intranetIp?: string;
  renewable?: boolean;
  regionId?: string;
  intranetEndpoint?: string;
  startTime?: number;
  upgradeStatus?: number;
  planUpgradeable?: boolean;
  instanceStatus?: string;
  licenseCode?: string;
  publicAccessControl?: number;
  publicWhiteList?: string[];
  securityGroupIds?: string[];
  privateWhiteList?: string[];
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      internetIp: 'InternetIp',
      networkType: 'NetworkType',
      imageVersionName: 'ImageVersionName',
      seriesCode: 'SeriesCode',
      description: 'Description',
      accessType: 'AccessType',
      ecsStatus: 'EcsStatus',
      operatable: 'Operatable',
      planUpgradeStatus: 'PlanUpgradeStatus',
      expireTime: 'ExpireTime',
      upgradeable: 'Upgradeable',
      instanceId: 'InstanceId',
      internetEndpoint: 'InternetEndpoint',
      intranetIp: 'IntranetIp',
      renewable: 'Renewable',
      regionId: 'RegionId',
      intranetEndpoint: 'IntranetEndpoint',
      startTime: 'StartTime',
      upgradeStatus: 'UpgradeStatus',
      planUpgradeable: 'PlanUpgradeable',
      instanceStatus: 'InstanceStatus',
      licenseCode: 'LicenseCode',
      publicAccessControl: 'PublicAccessControl',
      publicWhiteList: 'PublicWhiteList',
      securityGroupIds: 'SecurityGroupIds',
      privateWhiteList: 'PrivateWhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      vswitchId: 'string',
      internetIp: 'string',
      networkType: 'string',
      imageVersionName: 'string',
      seriesCode: 'string',
      description: 'string',
      accessType: 'number',
      ecsStatus: 'string',
      operatable: 'boolean',
      planUpgradeStatus: 'number',
      expireTime: 'number',
      upgradeable: 'boolean',
      instanceId: 'string',
      internetEndpoint: 'string',
      intranetIp: 'string',
      renewable: 'boolean',
      regionId: 'string',
      intranetEndpoint: 'string',
      startTime: 'number',
      upgradeStatus: 'number',
      planUpgradeable: 'boolean',
      instanceStatus: 'string',
      licenseCode: 'string',
      publicAccessControl: 'number',
      publicWhiteList: { 'type': 'array', 'itemType': 'string' },
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      privateWhiteList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstances extends $tea.Model {
  vpcId?: string;
  vswitchId?: string;
  internetIp?: string;
  networkType?: string;
  imageVersionName?: string;
  seriesCode?: string;
  description?: string;
  ecsStatus?: string;
  operatable?: boolean;
  planUpgradeStatus?: number;
  expireTime?: number;
  upgradeable?: boolean;
  legacy?: boolean;
  instanceId?: string;
  internetEndpoint?: string;
  intranetIp?: string;
  renewable?: boolean;
  regionId?: string;
  intranetEndpoint?: string;
  startTime?: number;
  upgradeStatus?: number;
  planUpgradeable?: boolean;
  instanceStatus?: string;
  licenseCode?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      internetIp: 'InternetIp',
      networkType: 'NetworkType',
      imageVersionName: 'ImageVersionName',
      seriesCode: 'SeriesCode',
      description: 'Description',
      ecsStatus: 'EcsStatus',
      operatable: 'Operatable',
      planUpgradeStatus: 'PlanUpgradeStatus',
      expireTime: 'ExpireTime',
      upgradeable: 'Upgradeable',
      legacy: 'Legacy',
      instanceId: 'InstanceId',
      internetEndpoint: 'InternetEndpoint',
      intranetIp: 'IntranetIp',
      renewable: 'Renewable',
      regionId: 'RegionId',
      intranetEndpoint: 'IntranetEndpoint',
      startTime: 'StartTime',
      upgradeStatus: 'UpgradeStatus',
      planUpgradeable: 'PlanUpgradeable',
      instanceStatus: 'InstanceStatus',
      licenseCode: 'LicenseCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      vswitchId: 'string',
      internetIp: 'string',
      networkType: 'string',
      imageVersionName: 'string',
      seriesCode: 'string',
      description: 'string',
      ecsStatus: 'string',
      operatable: 'boolean',
      planUpgradeStatus: 'number',
      expireTime: 'number',
      upgradeable: 'boolean',
      legacy: 'boolean',
      instanceId: 'string',
      internetEndpoint: 'string',
      intranetIp: 'string',
      renewable: 'boolean',
      regionId: 'string',
      intranetEndpoint: 'string',
      startTime: 'number',
      upgradeStatus: 'number',
      planUpgradeable: 'boolean',
      instanceStatus: 'string',
      licenseCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoginTicketResponseBodyLoginTicketZones extends $tea.Model {
  zoneId?: string;
  localName?: string;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
      localName: 'LocalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      localName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoginTicketResponseBodyLoginTicket extends $tea.Model {
  ticket?: string;
  certificate?: string;
  zones?: DescribeLoginTicketResponseBodyLoginTicketZones[];
  static names(): { [key: string]: string } {
    return {
      ticket: 'Ticket',
      certificate: 'Certificate',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ticket: 'string',
      certificate: 'string',
      zones: { 'type': 'array', 'itemType': DescribeLoginTicketResponseBodyLoginTicketZones },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  regionEndpoint?: string;
  localName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionEndpoint: 'RegionEndpoint',
      localName: 'LocalName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionEndpoint: 'string',
      localName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncInfoResponseBodyInstanceInfo extends $tea.Model {
  status?: number;
  vswitchId?: string;
  regionNo?: string;
  ecsInstanceId?: string;
  imageVersionName?: string;
  planCode?: string;
  ecsUuid?: string;
  accessType?: number;
  ecsStatus?: string;
  planUpgradeStatus?: number;
  zoneNo?: string;
  aliuid?: number;
  productName?: string;
  ecsEip?: string;
  expireTime?: number;
  ecsInternetIp?: string;
  instanceId?: string;
  renewable?: boolean;
  ecsIntranetIp?: string;
  startTime?: number;
  regionName?: string;
  upgradeStatus?: number;
  planUpgradeable?: string;
  customName?: string;
  ecsNetworkType?: string;
  publicAccessControl?: number;
  vendorCode?: string;
  planName?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      vswitchId: 'VswitchId',
      regionNo: 'RegionNo',
      ecsInstanceId: 'EcsInstanceId',
      imageVersionName: 'ImageVersionName',
      planCode: 'PlanCode',
      ecsUuid: 'EcsUuid',
      accessType: 'AccessType',
      ecsStatus: 'EcsStatus',
      planUpgradeStatus: 'PlanUpgradeStatus',
      zoneNo: 'ZoneNo',
      aliuid: 'Aliuid',
      productName: 'ProductName',
      ecsEip: 'EcsEip',
      expireTime: 'ExpireTime',
      ecsInternetIp: 'EcsInternetIp',
      instanceId: 'InstanceId',
      renewable: 'Renewable',
      ecsIntranetIp: 'EcsIntranetIp',
      startTime: 'StartTime',
      regionName: 'RegionName',
      upgradeStatus: 'UpgradeStatus',
      planUpgradeable: 'PlanUpgradeable',
      customName: 'CustomName',
      ecsNetworkType: 'EcsNetworkType',
      publicAccessControl: 'PublicAccessControl',
      vendorCode: 'VendorCode',
      planName: 'PlanName',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      vswitchId: 'string',
      regionNo: 'string',
      ecsInstanceId: 'string',
      imageVersionName: 'string',
      planCode: 'string',
      ecsUuid: 'string',
      accessType: 'number',
      ecsStatus: 'string',
      planUpgradeStatus: 'number',
      zoneNo: 'string',
      aliuid: 'number',
      productName: 'string',
      ecsEip: 'string',
      expireTime: 'number',
      ecsInternetIp: 'string',
      instanceId: 'string',
      renewable: 'boolean',
      ecsIntranetIp: 'string',
      startTime: 'number',
      regionName: 'string',
      upgradeStatus: 'number',
      planUpgradeable: 'string',
      customName: 'string',
      ecsNetworkType: 'string',
      publicAccessControl: 'number',
      vendorCode: 'string',
      planName: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateRulesFromDbResponseBodyServerData extends $tea.Model {
  jsonResult?: string;
  static names(): { [key: string]: string } {
    return {
      jsonResult: 'JsonResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jsonResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentListResponseBodyAgentList extends $tea.Model {
  vpcId?: string;
  privateIp?: string;
  rmagentMem?: number;
  agentId?: string;
  rmagentCpu?: number;
  firstLoginTime?: string;
  agentOs?: string;
  agentStatus?: number;
  agentPort?: string;
  agentVersion?: string;
  sendPackets?: number;
  sendBytes?: number;
  lastActiveTime?: string;
  sendPacketCount?: number;
  ecsId?: string;
  publicIp?: string;
  sendByteCount?: number;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      privateIp: 'PrivateIp',
      rmagentMem: 'RmagentMem',
      agentId: 'AgentId',
      rmagentCpu: 'RmagentCpu',
      firstLoginTime: 'FirstLoginTime',
      agentOs: 'AgentOs',
      agentStatus: 'AgentStatus',
      agentPort: 'AgentPort',
      agentVersion: 'AgentVersion',
      sendPackets: 'SendPackets',
      sendBytes: 'SendBytes',
      lastActiveTime: 'LastActiveTime',
      sendPacketCount: 'SendPacketCount',
      ecsId: 'EcsId',
      publicIp: 'PublicIp',
      sendByteCount: 'SendByteCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      privateIp: 'string',
      rmagentMem: 'number',
      agentId: 'string',
      rmagentCpu: 'number',
      firstLoginTime: 'string',
      agentOs: 'string',
      agentStatus: 'number',
      agentPort: 'string',
      agentVersion: 'string',
      sendPackets: 'number',
      sendBytes: 'number',
      lastActiveTime: 'string',
      sendPacketCount: 'number',
      ecsId: 'string',
      publicIp: 'string',
      sendByteCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuditCountDistributionResponseBodyTimeList extends $tea.Model {
  sessionCount?: number;
  beginDate?: string;
  sqlCount?: number;
  endDate?: string;
  riskCount?: number;
  static names(): { [key: string]: string } {
    return {
      sessionCount: 'SessionCount',
      beginDate: 'BeginDate',
      sqlCount: 'SqlCount',
      endDate: 'EndDate',
      riskCount: 'RiskCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionCount: 'number',
      beginDate: 'string',
      sqlCount: 'number',
      endDate: 'string',
      riskCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaseTemplateListResponseBodyTemplateList extends $tea.Model {
  dbTypeName?: string;
  templateContent?: string;
  sqlTypeName?: string;
  templateId?: string;
  templateState?: string;
  static names(): { [key: string]: string } {
    return {
      dbTypeName: 'DbTypeName',
      templateContent: 'TemplateContent',
      sqlTypeName: 'SqlTypeName',
      templateId: 'TemplateId',
      templateState: 'TemplateState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbTypeName: 'string',
      templateContent: 'string',
      sqlTypeName: 'string',
      templateId: 'string',
      templateState: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDasUsageResponseBodyAuditAssetDbTypes extends $tea.Model {
  dbType?: string;
  dbCount?: number;
  static names(): { [key: string]: string } {
    return {
      dbType: 'DbType',
      dbCount: 'DbCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbType: 'string',
      dbCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDasUsageResponseBodyAuditAsset extends $tea.Model {
  dbCount?: number;
  dbTypes?: GetDasUsageResponseBodyAuditAssetDbTypes[];
  static names(): { [key: string]: string } {
    return {
      dbCount: 'DbCount',
      dbTypes: 'DbTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbCount: 'number',
      dbTypes: { 'type': 'array', 'itemType': GetDasUsageResponseBodyAuditAssetDbTypes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDasUsageResponseBodyConsoleAccess extends $tea.Model {
  lastAccessTime?: string;
  day90AccessCount?: number;
  day15AccessCount?: number;
  day30AccessCount?: number;
  day180AccessCount?: number;
  static names(): { [key: string]: string } {
    return {
      lastAccessTime: 'LastAccessTime',
      day90AccessCount: 'Day90AccessCount',
      day15AccessCount: 'Day15AccessCount',
      day30AccessCount: 'Day30AccessCount',
      day180AccessCount: 'Day180AccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastAccessTime: 'string',
      day90AccessCount: 'number',
      day15AccessCount: 'number',
      day30AccessCount: 'number',
      day180AccessCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDasUsageResponseBodyAgent extends $tea.Model {
  hasFlow?: boolean;
  instState?: string;
  activeCount?: number;
  static names(): { [key: string]: string } {
    return {
      hasFlow: 'HasFlow',
      instState: 'InstState',
      activeCount: 'ActiveCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasFlow: 'boolean',
      instState: 'string',
      activeCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDasUsageResponseBodyNoticeState extends $tea.Model {
  riskNotice?: boolean;
  sysNotice?: boolean;
  static names(): { [key: string]: string } {
    return {
      riskNotice: 'RiskNotice',
      sysNotice: 'SysNotice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskNotice: 'boolean',
      sysNotice: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDasUsageResponseBodyRiskAsset extends $tea.Model {
  riskDBCount?: number;
  day30RiskDBCount?: number;
  static names(): { [key: string]: string } {
    return {
      riskDBCount: 'RiskDBCount',
      day30RiskDBCount: 'Day30RiskDBCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskDBCount: 'number',
      day30RiskDBCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDasUsageResponseBodyRiskRuleMaxHitRule extends $tea.Model {
  count?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDasUsageResponseBodyRiskRuleDay30MaxHitRule extends $tea.Model {
  count?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDasUsageResponseBodyRiskRule extends $tea.Model {
  day30RiskCount?: number;
  riskCount?: number;
  maxHitRule?: GetDasUsageResponseBodyRiskRuleMaxHitRule;
  day30MaxHitRule?: GetDasUsageResponseBodyRiskRuleDay30MaxHitRule;
  static names(): { [key: string]: string } {
    return {
      day30RiskCount: 'Day30RiskCount',
      riskCount: 'RiskCount',
      maxHitRule: 'MaxHitRule',
      day30MaxHitRule: 'Day30MaxHitRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day30RiskCount: 'number',
      riskCount: 'number',
      maxHitRule: GetDasUsageResponseBodyRiskRuleMaxHitRule,
      day30MaxHitRule: GetDasUsageResponseBodyRiskRuleDay30MaxHitRule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDasUsageResponseBodyWpAsset extends $tea.Model {
  avgTime?: number;
  dbName?: string;
  static names(): { [key: string]: string } {
    return {
      avgTime: 'AvgTime',
      dbName: 'DbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgTime: 'number',
      dbName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDBAuditCountListResponseBodyDbList extends $tea.Model {
  sessionCount?: number;
  dbId?: number;
  dbName?: string;
  dbType?: number;
  sqlCount?: number;
  dbTypeName?: string;
  riskCount?: number;
  dbVersionName?: string;
  assetType?: number;
  dbVersion?: number;
  dbAddresses?: string[];
  static names(): { [key: string]: string } {
    return {
      sessionCount: 'SessionCount',
      dbId: 'DbId',
      dbName: 'DbName',
      dbType: 'DbType',
      sqlCount: 'SqlCount',
      dbTypeName: 'DbTypeName',
      riskCount: 'RiskCount',
      dbVersionName: 'DbVersionName',
      assetType: 'AssetType',
      dbVersion: 'DbVersion',
      dbAddresses: 'DbAddresses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionCount: 'number',
      dbId: 'number',
      dbName: 'string',
      dbType: 'number',
      sqlCount: 'number',
      dbTypeName: 'string',
      riskCount: 'number',
      dbVersionName: 'string',
      assetType: 'number',
      dbVersion: 'number',
      dbAddresses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogListResponseBodyResults extends $tea.Model {
  clientPort?: number;
  execCostUS?: number;
  appClientIp?: string;
  sessionLogoutTime?: string;
  clientOsUser?: string;
  ruleId?: number;
  sqlId?: string;
  sessionId?: string;
  sqlType?: string;
  riskLevel?: number;
  appUsername?: string;
  dbId?: number;
  ruleType?: number;
  ruleKeyId?: number;
  affectRows?: number;
  schema?: string;
  sessionLoginTime?: string;
  dbUser?: string;
  serverMac?: string;
  dbServer?: string;
  ruleName?: string;
  sqlContent?: string;
  responseCode?: string;
  instName?: string;
  clientProgram?: string;
  captureTime?: string;
  clientIp?: string;
  clientMac?: string;
  templateId?: string;
  fetchCostUS?: number;
  responseText?: string;
  static names(): { [key: string]: string } {
    return {
      clientPort: 'ClientPort',
      execCostUS: 'ExecCostUS',
      appClientIp: 'AppClientIp',
      sessionLogoutTime: 'SessionLogoutTime',
      clientOsUser: 'ClientOsUser',
      ruleId: 'RuleId',
      sqlId: 'SqlId',
      sessionId: 'SessionId',
      sqlType: 'SqlType',
      riskLevel: 'RiskLevel',
      appUsername: 'AppUsername',
      dbId: 'DbId',
      ruleType: 'RuleType',
      ruleKeyId: 'RuleKeyId',
      affectRows: 'AffectRows',
      schema: 'Schema',
      sessionLoginTime: 'SessionLoginTime',
      dbUser: 'DbUser',
      serverMac: 'ServerMac',
      dbServer: 'DbServer',
      ruleName: 'RuleName',
      sqlContent: 'SqlContent',
      responseCode: 'ResponseCode',
      instName: 'InstName',
      clientProgram: 'ClientProgram',
      captureTime: 'CaptureTime',
      clientIp: 'ClientIp',
      clientMac: 'ClientMac',
      templateId: 'TemplateId',
      fetchCostUS: 'FetchCostUS',
      responseText: 'ResponseText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientPort: 'number',
      execCostUS: 'number',
      appClientIp: 'string',
      sessionLogoutTime: 'string',
      clientOsUser: 'string',
      ruleId: 'number',
      sqlId: 'string',
      sessionId: 'string',
      sqlType: 'string',
      riskLevel: 'number',
      appUsername: 'string',
      dbId: 'number',
      ruleType: 'number',
      ruleKeyId: 'number',
      affectRows: 'number',
      schema: 'string',
      sessionLoginTime: 'string',
      dbUser: 'string',
      serverMac: 'string',
      dbServer: 'string',
      ruleName: 'string',
      sqlContent: 'string',
      responseCode: 'string',
      instName: 'string',
      clientProgram: 'string',
      captureTime: 'string',
      clientIp: 'string',
      clientMac: 'string',
      templateId: 'string',
      fetchCostUS: 'number',
      responseText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogMaskConfigsResponseBodyConfigs extends $tea.Model {
  maskDescription?: string;
  maskState?: number;
  maskName?: string;
  maskRegex?: string;
  maskTxt?: string;
  maskId?: number;
  maskType?: number;
  static names(): { [key: string]: string } {
    return {
      maskDescription: 'MaskDescription',
      maskState: 'MaskState',
      maskName: 'MaskName',
      maskRegex: 'MaskRegex',
      maskTxt: 'MaskTxt',
      maskId: 'MaskId',
      maskType: 'MaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maskDescription: 'string',
      maskState: 'number',
      maskName: 'string',
      maskRegex: 'string',
      maskTxt: 'string',
      maskId: 'number',
      maskType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogQueryConditionResponseBodySqlTypeList extends $tea.Model {
  sqlKeyword?: string;
  sqlType?: string;
  static names(): { [key: string]: string } {
    return {
      sqlKeyword: 'SqlKeyword',
      sqlType: 'SqlType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sqlKeyword: 'string',
      sqlType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogStatisticsResponseBodyCountList extends $tea.Model {
  sqlKeyword?: string;
  dbId?: number;
  dbName?: string;
  clientProgram?: string;
  dbUser?: string;
  clientIp?: string;
  sqlCount?: number;
  riskCount?: number;
  dbServer?: string;
  sqlType?: string;
  static names(): { [key: string]: string } {
    return {
      sqlKeyword: 'SqlKeyword',
      dbId: 'DbId',
      dbName: 'DbName',
      clientProgram: 'ClientProgram',
      dbUser: 'DbUser',
      clientIp: 'ClientIp',
      sqlCount: 'SqlCount',
      riskCount: 'RiskCount',
      dbServer: 'DbServer',
      sqlType: 'SqlType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sqlKeyword: 'string',
      dbId: 'number',
      dbName: 'string',
      clientProgram: 'string',
      dbUser: 'string',
      clientIp: 'string',
      sqlCount: 'number',
      riskCount: 'number',
      dbServer: 'string',
      sqlType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogTopDistributionResponseBodyTimeList extends $tea.Model {
  beginDate?: string;
  sqlCount?: number;
  endDate?: string;
  topTime?: string;
  static names(): { [key: string]: string } {
    return {
      beginDate: 'BeginDate',
      sqlCount: 'SqlCount',
      endDate: 'EndDate',
      topTime: 'TopTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginDate: 'string',
      sqlCount: 'number',
      endDate: 'string',
      topTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogTopStatisticsResponseBodyCountList extends $tea.Model {
  clientIp?: string;
  dbUser?: string;
  sqlCount?: number;
  clientProgram?: string;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      dbUser: 'DbUser',
      sqlCount: 'SqlCount',
      clientProgram: 'ClientProgram',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      dbUser: 'string',
      sqlCount: 'number',
      clientProgram: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogTypeDistributionResponseBodyTimeList extends $tea.Model {
  endDate?: string;
  execCostUS?: string;
  insertSqlCount?: number;
  selectSqlCount?: number;
  deleteSqlCount?: number;
  beginDate?: string;
  otherSqlCount?: number;
  sqlCount?: number;
  updateSqlCount?: number;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      execCostUS: 'ExecCostUS',
      insertSqlCount: 'InsertSqlCount',
      selectSqlCount: 'SelectSqlCount',
      deleteSqlCount: 'DeleteSqlCount',
      beginDate: 'BeginDate',
      otherSqlCount: 'OtherSqlCount',
      sqlCount: 'SqlCount',
      updateSqlCount: 'UpdateSqlCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      execCostUS: 'string',
      insertSqlCount: 'number',
      selectSqlCount: 'number',
      deleteSqlCount: 'number',
      beginDate: 'string',
      otherSqlCount: 'number',
      sqlCount: 'number',
      updateSqlCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNewSqlTemplateListResponseBodyResults extends $tea.Model {
  templateContent?: string;
  templateId?: string;
  firstCaptureTime?: string;
  static names(): { [key: string]: string } {
    return {
      templateContent: 'TemplateContent',
      templateId: 'TemplateId',
      firstCaptureTime: 'FirstCaptureTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateContent: 'string',
      templateId: 'string',
      firstCaptureTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReportFileUrlResponseBodyServerData extends $tea.Model {
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskLevelDistributionResponseBodyTimeList extends $tea.Model {
  middleRiskCount?: number;
  highRiskCount?: number;
  endDate?: string;
  beginDate?: string;
  riskCount?: number;
  lowRiskCount?: number;
  static names(): { [key: string]: string } {
    return {
      middleRiskCount: 'MiddleRiskCount',
      highRiskCount: 'HighRiskCount',
      endDate: 'EndDate',
      beginDate: 'BeginDate',
      riskCount: 'RiskCount',
      lowRiskCount: 'LowRiskCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      middleRiskCount: 'number',
      highRiskCount: 'number',
      endDate: 'string',
      beginDate: 'string',
      riskCount: 'number',
      lowRiskCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskStatisticsResponseBodyTimeList extends $tea.Model {
  riskLevel?: number;
  dbId?: number;
  dbName?: string;
  ruleType?: number;
  lastCaptureTime?: string;
  riskCount?: number;
  ruleName?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      riskLevel: 'RiskLevel',
      dbId: 'DbId',
      dbName: 'DbName',
      ruleType: 'RuleType',
      lastCaptureTime: 'LastCaptureTime',
      riskCount: 'RiskCount',
      ruleName: 'RuleName',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskLevel: 'number',
      dbId: 'number',
      dbName: 'string',
      ruleType: 'number',
      lastCaptureTime: 'string',
      riskCount: 'number',
      ruleName: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyServerData extends $tea.Model {
  jsonResult?: string;
  static names(): { [key: string]: string } {
    return {
      jsonResult: 'JsonResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jsonResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSessionDistributionResponseBodyTimeList extends $tea.Model {
  beginDate?: string;
  loginSessionCount?: number;
  activeSessionCount?: number;
  endDate?: string;
  errorSessionCount?: number;
  static names(): { [key: string]: string } {
    return {
      beginDate: 'BeginDate',
      loginSessionCount: 'LoginSessionCount',
      activeSessionCount: 'ActiveSessionCount',
      endDate: 'EndDate',
      errorSessionCount: 'ErrorSessionCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginDate: 'string',
      loginSessionCount: 'number',
      activeSessionCount: 'number',
      endDate: 'string',
      errorSessionCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSessionListResponseBodyResults extends $tea.Model {
  dbId?: number;
  loginCode?: number;
  action?: string;
  clientPort?: number;
  loginMessage?: string;
  dbUser?: string;
  serverPort?: number;
  clientOsUser?: string;
  serverMac?: string;
  clientProgram?: string;
  captureTime?: string;
  clientIp?: string;
  serverIp?: string;
  sessionId?: string;
  clientMac?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      loginCode: 'LoginCode',
      action: 'Action',
      clientPort: 'ClientPort',
      loginMessage: 'LoginMessage',
      dbUser: 'DbUser',
      serverPort: 'ServerPort',
      clientOsUser: 'ClientOsUser',
      serverMac: 'ServerMac',
      clientProgram: 'ClientProgram',
      captureTime: 'CaptureTime',
      clientIp: 'ClientIp',
      serverIp: 'ServerIp',
      sessionId: 'SessionId',
      clientMac: 'ClientMac',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      loginCode: 'number',
      action: 'string',
      clientPort: 'number',
      loginMessage: 'string',
      dbUser: 'string',
      serverPort: 'number',
      clientOsUser: 'string',
      serverMac: 'string',
      clientProgram: 'string',
      captureTime: 'string',
      clientIp: 'string',
      serverIp: 'string',
      sessionId: 'string',
      clientMac: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlTemplateListResponseBodyResultsRuleList extends $tea.Model {
  riskLevel?: number;
  ruleState?: number;
  dbId?: number;
  ruleName?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      riskLevel: 'RiskLevel',
      ruleState: 'RuleState',
      dbId: 'DbId',
      ruleName: 'RuleName',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskLevel: 'number',
      ruleState: 'number',
      dbId: 'number',
      ruleName: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlTemplateListResponseBodyResults extends $tea.Model {
  templateContent?: string;
  lastCaptureTime?: string;
  captureCount?: number;
  templateId?: string;
  sqlType?: number;
  ruleList?: GetSqlTemplateListResponseBodyResultsRuleList[];
  static names(): { [key: string]: string } {
    return {
      templateContent: 'TemplateContent',
      lastCaptureTime: 'LastCaptureTime',
      captureCount: 'CaptureCount',
      templateId: 'TemplateId',
      sqlType: 'SqlType',
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateContent: 'string',
      lastCaptureTime: 'string',
      captureCount: 'number',
      templateId: 'string',
      sqlType: 'number',
      ruleList: { 'type': 'array', 'itemType': GetSqlTemplateListResponseBodyResultsRuleList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopSqlTemplateListResponseBodyTemplateList extends $tea.Model {
  templateContent?: string;
  execCostUS?: string;
  affectRows?: string;
  execCostUSMean?: string;
  lastCaptureTime?: string;
  templateId?: string;
  captureCount?: string;
  static names(): { [key: string]: string } {
    return {
      templateContent: 'TemplateContent',
      execCostUS: 'ExecCostUS',
      affectRows: 'AffectRows',
      execCostUSMean: 'ExecCostUSMean',
      lastCaptureTime: 'LastCaptureTime',
      templateId: 'TemplateId',
      captureCount: 'CaptureCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateContent: 'string',
      execCostUS: 'string',
      affectRows: 'string',
      execCostUSMean: 'string',
      lastCaptureTime: 'string',
      templateId: 'string',
      captureCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssociatedRulesResponseBodyServerData extends $tea.Model {
  jsonResult?: string;
  static names(): { [key: string]: string } {
    return {
      jsonResult: 'JsonResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jsonResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceAttributeResponseBodyDbList extends $tea.Model {
  resultAuditMode?: string;
  dbId?: number;
  resultAuditMaxSize?: number;
  auditMode?: string;
  resultAuditMaxLine?: number;
  static names(): { [key: string]: string } {
    return {
      resultAuditMode: 'ResultAuditMode',
      dbId: 'DbId',
      resultAuditMaxSize: 'ResultAuditMaxSize',
      auditMode: 'AuditMode',
      resultAuditMaxLine: 'ResultAuditMaxLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultAuditMode: 'string',
      dbId: 'number',
      resultAuditMaxSize: 'number',
      auditMode: 'string',
      resultAuditMaxLine: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponseBodyDbList extends $tea.Model {
  dbId?: number;
  createTime?: string;
  dbUsername?: string;
  dbCertificate?: string;
  dbInstanceId?: string;
  assetType?: number;
  dbVersion?: number;
  dbName?: string;
  dbType?: number;
  auditSwitch?: number;
  dbTypeName?: string;
  dbVersionName?: string;
  dbAddresses?: string[];
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      createTime: 'CreateTime',
      dbUsername: 'DbUsername',
      dbCertificate: 'DbCertificate',
      dbInstanceId: 'DbInstanceId',
      assetType: 'AssetType',
      dbVersion: 'DbVersion',
      dbName: 'DbName',
      dbType: 'DbType',
      auditSwitch: 'AuditSwitch',
      dbTypeName: 'DbTypeName',
      dbVersionName: 'DbVersionName',
      dbAddresses: 'DbAddresses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      createTime: 'string',
      dbUsername: 'string',
      dbCertificate: 'string',
      dbInstanceId: 'string',
      assetType: 'number',
      dbVersion: 'number',
      dbName: 'string',
      dbType: 'number',
      auditSwitch: 'number',
      dbTypeName: 'string',
      dbVersionName: 'string',
      dbAddresses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogAlarmTasksResponseBodyTaskList extends $tea.Model {
  taskStatus?: number;
  taskId?: number;
  createTime?: string;
  taskName?: string;
  toMailList?: string[];
  riskLevelList?: string[];
  dbIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      taskStatus: 'TaskStatus',
      taskId: 'TaskId',
      createTime: 'CreateTime',
      taskName: 'TaskName',
      toMailList: 'ToMailList',
      riskLevelList: 'RiskLevelList',
      dbIdList: 'DbIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskStatus: 'number',
      taskId: 'number',
      createTime: 'string',
      taskName: 'string',
      toMailList: { 'type': 'array', 'itemType': 'string' },
      riskLevelList: { 'type': 'array', 'itemType': 'string' },
      dbIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReportPushTasksResponseBodyTaskList extends $tea.Model {
  scheduleTime?: string;
  jobStatus?: number;
  jobId?: number;
  scheduleType?: string;
  dbList?: string[];
  reportType?: string[];
  emailList?: string[];
  static names(): { [key: string]: string } {
    return {
      scheduleTime: 'ScheduleTime',
      jobStatus: 'JobStatus',
      jobId: 'JobId',
      scheduleType: 'ScheduleType',
      dbList: 'DbList',
      reportType: 'ReportType',
      emailList: 'EmailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduleTime: 'string',
      jobStatus: 'number',
      jobId: 'number',
      scheduleType: 'string',
      dbList: { 'type': 'array', 'itemType': 'string' },
      reportType: { 'type': 'array', 'itemType': 'string' },
      emailList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyServerData extends $tea.Model {
  jsonResult?: string;
  static names(): { [key: string]: string } {
    return {
      jsonResult: 'JsonResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jsonResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSupportDbTypesResponseBodyTypeListDbVersions extends $tea.Model {
  dbVersionName?: string;
  dbVersion?: number;
  static names(): { [key: string]: string } {
    return {
      dbVersionName: 'DbVersionName',
      dbVersion: 'DbVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbVersionName: 'string',
      dbVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSupportDbTypesResponseBodyTypeList extends $tea.Model {
  dbType?: number;
  dbTypeName?: string;
  dbVersions?: ListSupportDbTypesResponseBodyTypeListDbVersions[];
  static names(): { [key: string]: string } {
    return {
      dbType: 'DbType',
      dbTypeName: 'DbTypeName',
      dbVersions: 'DbVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbType: 'number',
      dbTypeName: 'string',
      dbVersions: { 'type': 'array', 'itemType': ListSupportDbTypesResponseBodyTypeListDbVersions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemAlarmsResponseBodyAlarms extends $tea.Model {
  readMark?: number;
  alarmDetail?: string;
  alarmType?: string;
  alarmId?: number;
  createTime?: string;
  static names(): { [key: string]: string } {
    return {
      readMark: 'ReadMark',
      alarmDetail: 'AlarmDetail',
      alarmType: 'AlarmType',
      alarmId: 'AlarmId',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readMark: 'number',
      alarmDetail: 'string',
      alarmType: 'string',
      alarmId: 'number',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemAlarmTasksResponseBodyTaskList extends $tea.Model {
  taskStatus?: number;
  taskId?: number;
  createTime?: string;
  taskName?: string;
  toMailList?: string[];
  static names(): { [key: string]: string } {
    return {
      taskStatus: 'TaskStatus',
      taskId: 'TaskId',
      createTime: 'CreateTime',
      taskName: 'TaskName',
      toMailList: 'ToMailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskStatus: 'number',
      taskId: 'number',
      createTime: 'string',
      taskName: 'string',
      toMailList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBodyTagKeys extends $tea.Model {
  tagCount?: number;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagCount: 'TagCount',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagCount: 'number',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  tagValue?: string;
  resourceType?: string;
  resourceId?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: 'string',
      resourceType: 'string',
      resourceId: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesForSqlRuleResponseBodyServerData extends $tea.Model {
  countTimely?: string;
  blackOrWhite?: number;
  sqlText?: string;
  sqltype1?: string;
  sqlId?: string;
  static names(): { [key: string]: string } {
    return {
      countTimely: 'CountTimely',
      blackOrWhite: 'BlackOrWhite',
      sqlText: 'SqlText',
      sqltype1: 'Sqltype1',
      sqlId: 'SqlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countTimely: 'string',
      blackOrWhite: 'number',
      sqlText: 'string',
      sqltype1: 'string',
      sqlId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("yundun-dbaudit", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async addLogMaskConfigWithOptions(request: AddLogMaskConfigRequest, runtime: $Util.RuntimeOptions): Promise<AddLogMaskConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddLogMaskConfigResponse>(await this.doRPCRequest("AddLogMaskConfig", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new AddLogMaskConfigResponse({}));
  }

  async addLogMaskConfig(request: AddLogMaskConfigRequest): Promise<AddLogMaskConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLogMaskConfigWithOptions(request, runtime);
  }

  async associateDbToRuleWithOptions(request: AssociateDbToRuleRequest, runtime: $Util.RuntimeOptions): Promise<AssociateDbToRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssociateDbToRuleResponse>(await this.doRPCRequest("AssociateDbToRule", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new AssociateDbToRuleResponse({}));
  }

  async associateDbToRule(request: AssociateDbToRuleRequest): Promise<AssociateDbToRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateDbToRuleWithOptions(request, runtime);
  }

  async associateRuleToDbWithOptions(request: AssociateRuleToDbRequest, runtime: $Util.RuntimeOptions): Promise<AssociateRuleToDbResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssociateRuleToDbResponse>(await this.doRPCRequest("AssociateRuleToDb", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new AssociateRuleToDbResponse({}));
  }

  async associateRuleToDb(request: AssociateRuleToDbRequest): Promise<AssociateRuleToDbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateRuleToDbWithOptions(request, runtime);
  }

  async changeAgentStatusWithOptions(request: ChangeAgentStatusRequest, runtime: $Util.RuntimeOptions): Promise<ChangeAgentStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ChangeAgentStatusResponse>(await this.doRPCRequest("ChangeAgentStatus", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ChangeAgentStatusResponse({}));
  }

  async changeAgentStatus(request: ChangeAgentStatusRequest): Promise<ChangeAgentStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeAgentStatusWithOptions(request, runtime);
  }

  async changeLogMaskConfigStateWithOptions(request: ChangeLogMaskConfigStateRequest, runtime: $Util.RuntimeOptions): Promise<ChangeLogMaskConfigStateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ChangeLogMaskConfigStateResponse>(await this.doRPCRequest("ChangeLogMaskConfigState", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ChangeLogMaskConfigStateResponse({}));
  }

  async changeLogMaskConfigState(request: ChangeLogMaskConfigStateRequest): Promise<ChangeLogMaskConfigStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeLogMaskConfigStateWithOptions(request, runtime);
  }

  async changeRulePriorityWithOptions(request: ChangeRulePriorityRequest, runtime: $Util.RuntimeOptions): Promise<ChangeRulePriorityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ChangeRulePriorityResponse>(await this.doRPCRequest("ChangeRulePriority", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ChangeRulePriorityResponse({}));
  }

  async changeRulePriority(request: ChangeRulePriorityRequest): Promise<ChangeRulePriorityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeRulePriorityWithOptions(request, runtime);
  }

  async changeRuleStatusWithOptions(request: ChangeRuleStatusRequest, runtime: $Util.RuntimeOptions): Promise<ChangeRuleStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ChangeRuleStatusResponse>(await this.doRPCRequest("ChangeRuleStatus", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ChangeRuleStatusResponse({}));
  }

  async changeRuleStatus(request: ChangeRuleStatusRequest): Promise<ChangeRuleStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeRuleStatusWithOptions(request, runtime);
  }

  async checkMailRegisteredWithOptions(request: CheckMailRegisteredRequest, runtime: $Util.RuntimeOptions): Promise<CheckMailRegisteredResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckMailRegisteredResponse>(await this.doRPCRequest("CheckMailRegistered", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new CheckMailRegisteredResponse({}));
  }

  async checkMailRegistered(request: CheckMailRegisteredRequest): Promise<CheckMailRegisteredResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkMailRegisteredWithOptions(request, runtime);
  }

  async clearAgentRecordsWithOptions(request: ClearAgentRecordsRequest, runtime: $Util.RuntimeOptions): Promise<ClearAgentRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ClearAgentRecordsResponse>(await this.doRPCRequest("ClearAgentRecords", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ClearAgentRecordsResponse({}));
  }

  async clearAgentRecords(request: ClearAgentRecordsRequest): Promise<ClearAgentRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.clearAgentRecordsWithOptions(request, runtime);
  }

  async configInstanceNetworkWithOptions(request: ConfigInstanceNetworkRequest, runtime: $Util.RuntimeOptions): Promise<ConfigInstanceNetworkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigInstanceNetworkResponse>(await this.doRPCRequest("ConfigInstanceNetwork", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigInstanceNetworkResponse({}));
  }

  async configInstanceNetwork(request: ConfigInstanceNetworkRequest): Promise<ConfigInstanceNetworkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configInstanceNetworkWithOptions(request, runtime);
  }

  async createDataSourceWithOptions(request: CreateDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDataSourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDataSourceResponse>(await this.doRPCRequest("CreateDataSource", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDataSourceResponse({}));
  }

  async createDataSource(request: CreateDataSourceRequest): Promise<CreateDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDataSourceWithOptions(request, runtime);
  }

  async createGradeProtectionReportWithOptions(request: CreateGradeProtectionReportRequest, runtime: $Util.RuntimeOptions): Promise<CreateGradeProtectionReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateGradeProtectionReportResponse>(await this.doRPCRequest("CreateGradeProtectionReport", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateGradeProtectionReportResponse({}));
  }

  async createGradeProtectionReport(request: CreateGradeProtectionReportRequest): Promise<CreateGradeProtectionReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGradeProtectionReportWithOptions(request, runtime);
  }

  async createIntegratedReportWithOptions(request: CreateIntegratedReportRequest, runtime: $Util.RuntimeOptions): Promise<CreateIntegratedReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateIntegratedReportResponse>(await this.doRPCRequest("CreateIntegratedReport", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateIntegratedReportResponse({}));
  }

  async createIntegratedReport(request: CreateIntegratedReportRequest): Promise<CreateIntegratedReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIntegratedReportWithOptions(request, runtime);
  }

  async createLogAlarmTaskWithOptions(request: CreateLogAlarmTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateLogAlarmTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateLogAlarmTaskResponse>(await this.doRPCRequest("CreateLogAlarmTask", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateLogAlarmTaskResponse({}));
  }

  async createLogAlarmTask(request: CreateLogAlarmTaskRequest): Promise<CreateLogAlarmTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLogAlarmTaskWithOptions(request, runtime);
  }

  async createPCIReportWithOptions(request: CreatePCIReportRequest, runtime: $Util.RuntimeOptions): Promise<CreatePCIReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreatePCIReportResponse>(await this.doRPCRequest("CreatePCIReport", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreatePCIReportResponse({}));
  }

  async createPCIReport(request: CreatePCIReportRequest): Promise<CreatePCIReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPCIReportWithOptions(request, runtime);
  }

  async createReportPushTaskWithOptions(request: CreateReportPushTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateReportPushTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateReportPushTaskResponse>(await this.doRPCRequest("CreateReportPushTask", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateReportPushTaskResponse({}));
  }

  async createReportPushTask(request: CreateReportPushTaskRequest): Promise<CreateReportPushTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createReportPushTaskWithOptions(request, runtime);
  }

  async createRuleWithOptions(request: CreateRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRuleResponse>(await this.doRPCRequest("CreateRule", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRuleResponse({}));
  }

  async createRule(request: CreateRuleRequest): Promise<CreateRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRuleWithOptions(request, runtime);
  }

  async createRuleGroupWithOptions(request: CreateRuleGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateRuleGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRuleGroupResponse>(await this.doRPCRequest("CreateRuleGroup", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRuleGroupResponse({}));
  }

  async createRuleGroup(request: CreateRuleGroupRequest): Promise<CreateRuleGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRuleGroupWithOptions(request, runtime);
  }

  async createSOXReportWithOptions(request: CreateSOXReportRequest, runtime: $Util.RuntimeOptions): Promise<CreateSOXReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSOXReportResponse>(await this.doRPCRequest("CreateSOXReport", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSOXReportResponse({}));
  }

  async createSOXReport(request: CreateSOXReportRequest): Promise<CreateSOXReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSOXReportWithOptions(request, runtime);
  }

  async createSqlRuleWithOptions(request: CreateSqlRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateSqlRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSqlRuleResponse>(await this.doRPCRequest("CreateSqlRule", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSqlRuleResponse({}));
  }

  async createSqlRule(request: CreateSqlRuleRequest): Promise<CreateSqlRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSqlRuleWithOptions(request, runtime);
  }

  async createSystemAlarmTaskWithOptions(request: CreateSystemAlarmTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateSystemAlarmTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSystemAlarmTaskResponse>(await this.doRPCRequest("CreateSystemAlarmTask", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSystemAlarmTaskResponse({}));
  }

  async createSystemAlarmTask(request: CreateSystemAlarmTaskRequest): Promise<CreateSystemAlarmTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSystemAlarmTaskWithOptions(request, runtime);
  }

  async deleteAlarmTaskWithOptions(request: DeleteAlarmTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAlarmTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAlarmTaskResponse>(await this.doRPCRequest("DeleteAlarmTask", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAlarmTaskResponse({}));
  }

  async deleteAlarmTask(request: DeleteAlarmTaskRequest): Promise<DeleteAlarmTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAlarmTaskWithOptions(request, runtime);
  }

  async deleteDataSourceWithOptions(request: DeleteDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDataSourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDataSourceResponse>(await this.doRPCRequest("DeleteDataSource", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDataSourceResponse({}));
  }

  async deleteDataSource(request: DeleteDataSourceRequest): Promise<DeleteDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataSourceWithOptions(request, runtime);
  }

  async deleteReportPushTaskWithOptions(request: DeleteReportPushTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteReportPushTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteReportPushTaskResponse>(await this.doRPCRequest("DeleteReportPushTask", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteReportPushTaskResponse({}));
  }

  async deleteReportPushTask(request: DeleteReportPushTaskRequest): Promise<DeleteReportPushTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteReportPushTaskWithOptions(request, runtime);
  }

  async deleteRuleWithOptions(request: DeleteRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRuleResponse>(await this.doRPCRequest("DeleteRule", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRuleResponse({}));
  }

  async deleteRule(request: DeleteRuleRequest): Promise<DeleteRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRuleWithOptions(request, runtime);
  }

  async deleteRuleGroupWithOptions(request: DeleteRuleGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRuleGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRuleGroupResponse>(await this.doRPCRequest("DeleteRuleGroup", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRuleGroupResponse({}));
  }

  async deleteRuleGroup(request: DeleteRuleGroupRequest): Promise<DeleteRuleGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRuleGroupWithOptions(request, runtime);
  }

  async deregisterTemplatesFromRuleWithOptions(request: DeregisterTemplatesFromRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeregisterTemplatesFromRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeregisterTemplatesFromRuleResponse>(await this.doRPCRequest("DeregisterTemplatesFromRule", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeregisterTemplatesFromRuleResponse({}));
  }

  async deregisterTemplatesFromRule(request: DeregisterTemplatesFromRuleRequest): Promise<DeregisterTemplatesFromRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deregisterTemplatesFromRuleWithOptions(request, runtime);
  }

  async describeInstanceAttributeWithOptions(request: DescribeInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceAttributeResponse>(await this.doRPCRequest("DescribeInstanceAttribute", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceAttributeResponse({}));
  }

  async describeInstanceAttribute(request: DescribeInstanceAttributeRequest): Promise<DescribeInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceAttributeWithOptions(request, runtime);
  }

  async describeInstancesWithOptions(request: DescribeInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstancesResponse>(await this.doRPCRequest("DescribeInstances", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstancesResponse({}));
  }

  async describeInstances(request: DescribeInstancesRequest): Promise<DescribeInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  async describeLoginTicketWithOptions(request: DescribeLoginTicketRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLoginTicketResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLoginTicketResponse>(await this.doRPCRequest("DescribeLoginTicket", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLoginTicketResponse({}));
  }

  async describeLoginTicket(request: DescribeLoginTicketRequest): Promise<DescribeLoginTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLoginTicketWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeSyncInfoWithOptions(request: DescribeSyncInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSyncInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSyncInfoResponse>(await this.doRPCRequest("DescribeSyncInfo", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSyncInfoResponse({}));
  }

  async describeSyncInfo(request: DescribeSyncInfoRequest): Promise<DescribeSyncInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSyncInfoWithOptions(request, runtime);
  }

  async disableLogMaskConfigsWithOptions(request: DisableLogMaskConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DisableLogMaskConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableLogMaskConfigsResponse>(await this.doRPCRequest("DisableLogMaskConfigs", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DisableLogMaskConfigsResponse({}));
  }

  async disableLogMaskConfigs(request: DisableLogMaskConfigsRequest): Promise<DisableLogMaskConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableLogMaskConfigsWithOptions(request, runtime);
  }

  async dissociateRulesFromDbWithOptions(request: DissociateRulesFromDbRequest, runtime: $Util.RuntimeOptions): Promise<DissociateRulesFromDbResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DissociateRulesFromDbResponse>(await this.doRPCRequest("DissociateRulesFromDb", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DissociateRulesFromDbResponse({}));
  }

  async dissociateRulesFromDb(request: DissociateRulesFromDbRequest): Promise<DissociateRulesFromDbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dissociateRulesFromDbWithOptions(request, runtime);
  }

  async dissociateTemplatesFromRuleWithOptions(request: DissociateTemplatesFromRuleRequest, runtime: $Util.RuntimeOptions): Promise<DissociateTemplatesFromRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DissociateTemplatesFromRuleResponse>(await this.doRPCRequest("DissociateTemplatesFromRule", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new DissociateTemplatesFromRuleResponse({}));
  }

  async dissociateTemplatesFromRule(request: DissociateTemplatesFromRuleRequest): Promise<DissociateTemplatesFromRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dissociateTemplatesFromRuleWithOptions(request, runtime);
  }

  async editLogMaskConfigWithOptions(request: EditLogMaskConfigRequest, runtime: $Util.RuntimeOptions): Promise<EditLogMaskConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EditLogMaskConfigResponse>(await this.doRPCRequest("EditLogMaskConfig", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new EditLogMaskConfigResponse({}));
  }

  async editLogMaskConfig(request: EditLogMaskConfigRequest): Promise<EditLogMaskConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.editLogMaskConfigWithOptions(request, runtime);
  }

  async enableLogMaskConfigsWithOptions(request: EnableLogMaskConfigsRequest, runtime: $Util.RuntimeOptions): Promise<EnableLogMaskConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableLogMaskConfigsResponse>(await this.doRPCRequest("EnableLogMaskConfigs", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new EnableLogMaskConfigsResponse({}));
  }

  async enableLogMaskConfigs(request: EnableLogMaskConfigsRequest): Promise<EnableLogMaskConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableLogMaskConfigsWithOptions(request, runtime);
  }

  async getAgentFileUrlWithOptions(request: GetAgentFileUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetAgentFileUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAgentFileUrlResponse>(await this.doRPCRequest("GetAgentFileUrl", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetAgentFileUrlResponse({}));
  }

  async getAgentFileUrl(request: GetAgentFileUrlRequest): Promise<GetAgentFileUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAgentFileUrlWithOptions(request, runtime);
  }

  async getAgentListWithOptions(request: GetAgentListRequest, runtime: $Util.RuntimeOptions): Promise<GetAgentListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAgentListResponse>(await this.doRPCRequest("GetAgentList", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetAgentListResponse({}));
  }

  async getAgentList(request: GetAgentListRequest): Promise<GetAgentListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAgentListWithOptions(request, runtime);
  }

  async getAppointOperationWithOptions(request: GetAppointOperationRequest, runtime: $Util.RuntimeOptions): Promise<GetAppointOperationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAppointOperationResponse>(await this.doRPCRequest("GetAppointOperation", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetAppointOperationResponse({}));
  }

  async getAppointOperation(request: GetAppointOperationRequest): Promise<GetAppointOperationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppointOperationWithOptions(request, runtime);
  }

  async getAuditCountWithOptions(request: GetAuditCountRequest, runtime: $Util.RuntimeOptions): Promise<GetAuditCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAuditCountResponse>(await this.doRPCRequest("GetAuditCount", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetAuditCountResponse({}));
  }

  async getAuditCount(request: GetAuditCountRequest): Promise<GetAuditCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAuditCountWithOptions(request, runtime);
  }

  async getAuditCountDistributionWithOptions(request: GetAuditCountDistributionRequest, runtime: $Util.RuntimeOptions): Promise<GetAuditCountDistributionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAuditCountDistributionResponse>(await this.doRPCRequest("GetAuditCountDistribution", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetAuditCountDistributionResponse({}));
  }

  async getAuditCountDistribution(request: GetAuditCountDistributionRequest): Promise<GetAuditCountDistributionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAuditCountDistributionWithOptions(request, runtime);
  }

  async getBaseTemplateListWithOptions(request: GetBaseTemplateListRequest, runtime: $Util.RuntimeOptions): Promise<GetBaseTemplateListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetBaseTemplateListResponse>(await this.doRPCRequest("GetBaseTemplateList", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetBaseTemplateListResponse({}));
  }

  async getBaseTemplateList(request: GetBaseTemplateListRequest): Promise<GetBaseTemplateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBaseTemplateListWithOptions(request, runtime);
  }

  async getDasUsageWithOptions(request: GetDasUsageRequest, runtime: $Util.RuntimeOptions): Promise<GetDasUsageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDasUsageResponse>(await this.doRPCRequest("GetDasUsage", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetDasUsageResponse({}));
  }

  async getDasUsage(request: GetDasUsageRequest): Promise<GetDasUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDasUsageWithOptions(request, runtime);
  }

  async getDBAuditCountListWithOptions(request: GetDBAuditCountListRequest, runtime: $Util.RuntimeOptions): Promise<GetDBAuditCountListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDBAuditCountListResponse>(await this.doRPCRequest("GetDBAuditCountList", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetDBAuditCountListResponse({}));
  }

  async getDBAuditCountList(request: GetDBAuditCountListRequest): Promise<GetDBAuditCountListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDBAuditCountListWithOptions(request, runtime);
  }

  async getGroupDetailWithOptions(request: GetGroupDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetGroupDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetGroupDetailResponse>(await this.doRPCRequest("GetGroupDetail", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetGroupDetailResponse({}));
  }

  async getGroupDetail(request: GetGroupDetailRequest): Promise<GetGroupDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGroupDetailWithOptions(request, runtime);
  }

  async getLicenseWithOptions(request: GetLicenseRequest, runtime: $Util.RuntimeOptions): Promise<GetLicenseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetLicenseResponse>(await this.doRPCRequest("GetLicense", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetLicenseResponse({}));
  }

  async getLicense(request: GetLicenseRequest): Promise<GetLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLicenseWithOptions(request, runtime);
  }

  async getLogDetailWithOptions(request: GetLogDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetLogDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetLogDetailResponse>(await this.doRPCRequest("GetLogDetail", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetLogDetailResponse({}));
  }

  async getLogDetail(request: GetLogDetailRequest): Promise<GetLogDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLogDetailWithOptions(request, runtime);
  }

  async getLogListWithOptions(request: GetLogListRequest, runtime: $Util.RuntimeOptions): Promise<GetLogListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetLogListResponse>(await this.doRPCRequest("GetLogList", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetLogListResponse({}));
  }

  async getLogList(request: GetLogListRequest): Promise<GetLogListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLogListWithOptions(request, runtime);
  }

  async getLogMaskConfigsWithOptions(request: GetLogMaskConfigsRequest, runtime: $Util.RuntimeOptions): Promise<GetLogMaskConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetLogMaskConfigsResponse>(await this.doRPCRequest("GetLogMaskConfigs", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetLogMaskConfigsResponse({}));
  }

  async getLogMaskConfigs(request: GetLogMaskConfigsRequest): Promise<GetLogMaskConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLogMaskConfigsWithOptions(request, runtime);
  }

  async getLogQueryConditionWithOptions(request: GetLogQueryConditionRequest, runtime: $Util.RuntimeOptions): Promise<GetLogQueryConditionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetLogQueryConditionResponse>(await this.doRPCRequest("GetLogQueryCondition", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetLogQueryConditionResponse({}));
  }

  async getLogQueryCondition(request: GetLogQueryConditionRequest): Promise<GetLogQueryConditionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLogQueryConditionWithOptions(request, runtime);
  }

  async getLogStatisticsWithOptions(request: GetLogStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<GetLogStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetLogStatisticsResponse>(await this.doRPCRequest("GetLogStatistics", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetLogStatisticsResponse({}));
  }

  async getLogStatistics(request: GetLogStatisticsRequest): Promise<GetLogStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLogStatisticsWithOptions(request, runtime);
  }

  async getLogTopDistributionWithOptions(request: GetLogTopDistributionRequest, runtime: $Util.RuntimeOptions): Promise<GetLogTopDistributionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetLogTopDistributionResponse>(await this.doRPCRequest("GetLogTopDistribution", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetLogTopDistributionResponse({}));
  }

  async getLogTopDistribution(request: GetLogTopDistributionRequest): Promise<GetLogTopDistributionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLogTopDistributionWithOptions(request, runtime);
  }

  async getLogTopStatisticsWithOptions(request: GetLogTopStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<GetLogTopStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetLogTopStatisticsResponse>(await this.doRPCRequest("GetLogTopStatistics", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetLogTopStatisticsResponse({}));
  }

  async getLogTopStatistics(request: GetLogTopStatisticsRequest): Promise<GetLogTopStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLogTopStatisticsWithOptions(request, runtime);
  }

  async getLogTypeDistributionWithOptions(request: GetLogTypeDistributionRequest, runtime: $Util.RuntimeOptions): Promise<GetLogTypeDistributionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetLogTypeDistributionResponse>(await this.doRPCRequest("GetLogTypeDistribution", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetLogTypeDistributionResponse({}));
  }

  async getLogTypeDistribution(request: GetLogTypeDistributionRequest): Promise<GetLogTypeDistributionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLogTypeDistributionWithOptions(request, runtime);
  }

  async getNewSqlTemplateListWithOptions(request: GetNewSqlTemplateListRequest, runtime: $Util.RuntimeOptions): Promise<GetNewSqlTemplateListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetNewSqlTemplateListResponse>(await this.doRPCRequest("GetNewSqlTemplateList", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetNewSqlTemplateListResponse({}));
  }

  async getNewSqlTemplateList(request: GetNewSqlTemplateListRequest): Promise<GetNewSqlTemplateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNewSqlTemplateListWithOptions(request, runtime);
  }

  async getReportFileUrlWithOptions(request: GetReportFileUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetReportFileUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetReportFileUrlResponse>(await this.doRPCRequest("GetReportFileUrl", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetReportFileUrlResponse({}));
  }

  async getReportFileUrl(request: GetReportFileUrlRequest): Promise<GetReportFileUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getReportFileUrlWithOptions(request, runtime);
  }

  async getRiskLevelDistributionWithOptions(request: GetRiskLevelDistributionRequest, runtime: $Util.RuntimeOptions): Promise<GetRiskLevelDistributionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRiskLevelDistributionResponse>(await this.doRPCRequest("GetRiskLevelDistribution", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetRiskLevelDistributionResponse({}));
  }

  async getRiskLevelDistribution(request: GetRiskLevelDistributionRequest): Promise<GetRiskLevelDistributionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRiskLevelDistributionWithOptions(request, runtime);
  }

  async getRiskStatisticsWithOptions(request: GetRiskStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<GetRiskStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRiskStatisticsResponse>(await this.doRPCRequest("GetRiskStatistics", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetRiskStatisticsResponse({}));
  }

  async getRiskStatistics(request: GetRiskStatisticsRequest): Promise<GetRiskStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRiskStatisticsWithOptions(request, runtime);
  }

  async getRuleDetailWithOptions(request: GetRuleDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetRuleDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRuleDetailResponse>(await this.doRPCRequest("GetRuleDetail", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetRuleDetailResponse({}));
  }

  async getRuleDetail(request: GetRuleDetailRequest): Promise<GetRuleDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRuleDetailWithOptions(request, runtime);
  }

  async getRuleGroupNameWithOptions(request: GetRuleGroupNameRequest, runtime: $Util.RuntimeOptions): Promise<GetRuleGroupNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRuleGroupNameResponse>(await this.doRPCRequest("GetRuleGroupName", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetRuleGroupNameResponse({}));
  }

  async getRuleGroupName(request: GetRuleGroupNameRequest): Promise<GetRuleGroupNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRuleGroupNameWithOptions(request, runtime);
  }

  async getSessionDetailWithOptions(request: GetSessionDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetSessionDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSessionDetailResponse>(await this.doRPCRequest("GetSessionDetail", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetSessionDetailResponse({}));
  }

  async getSessionDetail(request: GetSessionDetailRequest): Promise<GetSessionDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSessionDetailWithOptions(request, runtime);
  }

  async getSessionDistributionWithOptions(request: GetSessionDistributionRequest, runtime: $Util.RuntimeOptions): Promise<GetSessionDistributionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSessionDistributionResponse>(await this.doRPCRequest("GetSessionDistribution", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetSessionDistributionResponse({}));
  }

  async getSessionDistribution(request: GetSessionDistributionRequest): Promise<GetSessionDistributionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSessionDistributionWithOptions(request, runtime);
  }

  async getSessionListWithOptions(request: GetSessionListRequest, runtime: $Util.RuntimeOptions): Promise<GetSessionListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSessionListResponse>(await this.doRPCRequest("GetSessionList", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetSessionListResponse({}));
  }

  async getSessionList(request: GetSessionListRequest): Promise<GetSessionListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSessionListWithOptions(request, runtime);
  }

  async getSessionQueryConditionWithOptions(request: GetSessionQueryConditionRequest, runtime: $Util.RuntimeOptions): Promise<GetSessionQueryConditionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSessionQueryConditionResponse>(await this.doRPCRequest("GetSessionQueryCondition", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetSessionQueryConditionResponse({}));
  }

  async getSessionQueryCondition(request: GetSessionQueryConditionRequest): Promise<GetSessionQueryConditionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSessionQueryConditionWithOptions(request, runtime);
  }

  async getSqlTemplateListWithOptions(request: GetSqlTemplateListRequest, runtime: $Util.RuntimeOptions): Promise<GetSqlTemplateListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSqlTemplateListResponse>(await this.doRPCRequest("GetSqlTemplateList", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetSqlTemplateListResponse({}));
  }

  async getSqlTemplateList(request: GetSqlTemplateListRequest): Promise<GetSqlTemplateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSqlTemplateListWithOptions(request, runtime);
  }

  async getTopSqlTemplateListWithOptions(request: GetTopSqlTemplateListRequest, runtime: $Util.RuntimeOptions): Promise<GetTopSqlTemplateListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTopSqlTemplateListResponse>(await this.doRPCRequest("GetTopSqlTemplateList", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetTopSqlTemplateListResponse({}));
  }

  async getTopSqlTemplateList(request: GetTopSqlTemplateListRequest): Promise<GetTopSqlTemplateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTopSqlTemplateListWithOptions(request, runtime);
  }

  async gradeProtectionReportWithOptions(request: GradeProtectionReportRequest, runtime: $Util.RuntimeOptions): Promise<GradeProtectionReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GradeProtectionReportResponse>(await this.doRPCRequest("GradeProtectionReport", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new GradeProtectionReportResponse({}));
  }

  async gradeProtectionReport(request: GradeProtectionReportRequest): Promise<GradeProtectionReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.gradeProtectionReportWithOptions(request, runtime);
  }

  async importDataSourceWithOptions(request: ImportDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<ImportDataSourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ImportDataSourceResponse>(await this.doRPCRequest("ImportDataSource", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ImportDataSourceResponse({}));
  }

  async importDataSource(request: ImportDataSourceRequest): Promise<ImportDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importDataSourceWithOptions(request, runtime);
  }

  async integratedReportWithOptions(request: IntegratedReportRequest, runtime: $Util.RuntimeOptions): Promise<IntegratedReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<IntegratedReportResponse>(await this.doRPCRequest("IntegratedReport", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new IntegratedReportResponse({}));
  }

  async integratedReport(request: IntegratedReportRequest): Promise<IntegratedReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.integratedReportWithOptions(request, runtime);
  }

  async listAssociatedRulesWithOptions(request: ListAssociatedRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListAssociatedRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAssociatedRulesResponse>(await this.doRPCRequest("ListAssociatedRules", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListAssociatedRulesResponse({}));
  }

  async listAssociatedRules(request: ListAssociatedRulesRequest): Promise<ListAssociatedRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAssociatedRulesWithOptions(request, runtime);
  }

  async listDataSourceAttributeWithOptions(request: ListDataSourceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ListDataSourceAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDataSourceAttributeResponse>(await this.doRPCRequest("ListDataSourceAttribute", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListDataSourceAttributeResponse({}));
  }

  async listDataSourceAttribute(request: ListDataSourceAttributeRequest): Promise<ListDataSourceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataSourceAttributeWithOptions(request, runtime);
  }

  async listDataSourcesWithOptions(request: ListDataSourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListDataSourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDataSourcesResponse>(await this.doRPCRequest("ListDataSources", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListDataSourcesResponse({}));
  }

  async listDataSources(request: ListDataSourcesRequest): Promise<ListDataSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataSourcesWithOptions(request, runtime);
  }

  async listLogAlarmTasksWithOptions(request: ListLogAlarmTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListLogAlarmTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListLogAlarmTasksResponse>(await this.doRPCRequest("ListLogAlarmTasks", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListLogAlarmTasksResponse({}));
  }

  async listLogAlarmTasks(request: ListLogAlarmTasksRequest): Promise<ListLogAlarmTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLogAlarmTasksWithOptions(request, runtime);
  }

  async listReportPushTasksWithOptions(request: ListReportPushTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListReportPushTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListReportPushTasksResponse>(await this.doRPCRequest("ListReportPushTasks", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListReportPushTasksResponse({}));
  }

  async listReportPushTasks(request: ListReportPushTasksRequest): Promise<ListReportPushTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listReportPushTasksWithOptions(request, runtime);
  }

  async listRuleGroupsWithOptions(request: ListRuleGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListRuleGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRuleGroupsResponse>(await this.doRPCRequest("ListRuleGroups", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListRuleGroupsResponse({}));
  }

  async listRuleGroups(request: ListRuleGroupsRequest): Promise<ListRuleGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRuleGroupsWithOptions(request, runtime);
  }

  async listRulesWithOptions(request: ListRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRulesResponse>(await this.doRPCRequest("ListRules", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListRulesResponse({}));
  }

  async listRules(request: ListRulesRequest): Promise<ListRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRulesWithOptions(request, runtime);
  }

  async listSqlTypeKeysForRuleWithOptions(request: ListSqlTypeKeysForRuleRequest, runtime: $Util.RuntimeOptions): Promise<ListSqlTypeKeysForRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSqlTypeKeysForRuleResponse>(await this.doRPCRequest("ListSqlTypeKeysForRule", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListSqlTypeKeysForRuleResponse({}));
  }

  async listSqlTypeKeysForRule(request: ListSqlTypeKeysForRuleRequest): Promise<ListSqlTypeKeysForRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSqlTypeKeysForRuleWithOptions(request, runtime);
  }

  async listSqlTypesForRuleWithOptions(request: ListSqlTypesForRuleRequest, runtime: $Util.RuntimeOptions): Promise<ListSqlTypesForRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSqlTypesForRuleResponse>(await this.doRPCRequest("ListSqlTypesForRule", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListSqlTypesForRuleResponse({}));
  }

  async listSqlTypesForRule(request: ListSqlTypesForRuleRequest): Promise<ListSqlTypesForRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSqlTypesForRuleWithOptions(request, runtime);
  }

  async listSupportDbTypesWithOptions(request: ListSupportDbTypesRequest, runtime: $Util.RuntimeOptions): Promise<ListSupportDbTypesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSupportDbTypesResponse>(await this.doRPCRequest("ListSupportDbTypes", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListSupportDbTypesResponse({}));
  }

  async listSupportDbTypes(request: ListSupportDbTypesRequest): Promise<ListSupportDbTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSupportDbTypesWithOptions(request, runtime);
  }

  async listSystemAlarmsWithOptions(request: ListSystemAlarmsRequest, runtime: $Util.RuntimeOptions): Promise<ListSystemAlarmsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSystemAlarmsResponse>(await this.doRPCRequest("ListSystemAlarms", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListSystemAlarmsResponse({}));
  }

  async listSystemAlarms(request: ListSystemAlarmsRequest): Promise<ListSystemAlarmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSystemAlarmsWithOptions(request, runtime);
  }

  async listSystemAlarmTasksWithOptions(request: ListSystemAlarmTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListSystemAlarmTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSystemAlarmTasksResponse>(await this.doRPCRequest("ListSystemAlarmTasks", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListSystemAlarmTasksResponse({}));
  }

  async listSystemAlarmTasks(request: ListSystemAlarmTasksRequest): Promise<ListSystemAlarmTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSystemAlarmTasksWithOptions(request, runtime);
  }

  async listTagKeysWithOptions(request: ListTagKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListTagKeysResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagKeysResponse>(await this.doRPCRequest("ListTagKeys", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagKeysResponse({}));
  }

  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doRPCRequest("ListTagResources", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async listTemplatesForSqlRuleWithOptions(request: ListTemplatesForSqlRuleRequest, runtime: $Util.RuntimeOptions): Promise<ListTemplatesForSqlRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTemplatesForSqlRuleResponse>(await this.doRPCRequest("ListTemplatesForSqlRule", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListTemplatesForSqlRuleResponse({}));
  }

  async listTemplatesForSqlRule(request: ListTemplatesForSqlRuleRequest): Promise<ListTemplatesForSqlRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTemplatesForSqlRuleWithOptions(request, runtime);
  }

  async listUsedSqlTypesWithOptions(request: ListUsedSqlTypesRequest, runtime: $Util.RuntimeOptions): Promise<ListUsedSqlTypesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUsedSqlTypesResponse>(await this.doRPCRequest("ListUsedSqlTypes", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListUsedSqlTypesResponse({}));
  }

  async listUsedSqlTypes(request: ListUsedSqlTypesRequest): Promise<ListUsedSqlTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsedSqlTypesWithOptions(request, runtime);
  }

  async modifyBaseTemplateStateWithOptions(request: ModifyBaseTemplateStateRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBaseTemplateStateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyBaseTemplateStateResponse>(await this.doRPCRequest("ModifyBaseTemplateState", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyBaseTemplateStateResponse({}));
  }

  async modifyBaseTemplateState(request: ModifyBaseTemplateStateRequest): Promise<ModifyBaseTemplateStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBaseTemplateStateWithOptions(request, runtime);
  }

  async modifyCustomNameWithOptions(request: ModifyCustomNameRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCustomNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyCustomNameResponse>(await this.doRPCRequest("ModifyCustomName", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyCustomNameResponse({}));
  }

  async modifyCustomName(request: ModifyCustomNameRequest): Promise<ModifyCustomNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCustomNameWithOptions(request, runtime);
  }

  async modifyDataSourceWithOptions(request: ModifyDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDataSourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDataSourceResponse>(await this.doRPCRequest("ModifyDataSource", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDataSourceResponse({}));
  }

  async modifyDataSource(request: ModifyDataSourceRequest): Promise<ModifyDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDataSourceWithOptions(request, runtime);
  }

  async modifyDataSourceAttributeWithOptions(request: ModifyDataSourceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDataSourceAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDataSourceAttributeResponse>(await this.doRPCRequest("ModifyDataSourceAttribute", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDataSourceAttributeResponse({}));
  }

  async modifyDataSourceAttribute(request: ModifyDataSourceAttributeRequest): Promise<ModifyDataSourceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDataSourceAttributeWithOptions(request, runtime);
  }

  async modifyInstanceAttributeWithOptions(request: ModifyInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyInstanceAttributeResponse>(await this.doRPCRequest("ModifyInstanceAttribute", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyInstanceAttributeResponse({}));
  }

  async modifyInstanceAttribute(request: ModifyInstanceAttributeRequest): Promise<ModifyInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceAttributeWithOptions(request, runtime);
  }

  async modifyLogAlarmTaskWithOptions(request: ModifyLogAlarmTaskRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLogAlarmTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyLogAlarmTaskResponse>(await this.doRPCRequest("ModifyLogAlarmTask", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyLogAlarmTaskResponse({}));
  }

  async modifyLogAlarmTask(request: ModifyLogAlarmTaskRequest): Promise<ModifyLogAlarmTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLogAlarmTaskWithOptions(request, runtime);
  }

  async modifyPlanWithOptions(request: ModifyPlanRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyPlanResponse>(await this.doRPCRequest("ModifyPlan", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyPlanResponse({}));
  }

  async modifyPlan(request: ModifyPlanRequest): Promise<ModifyPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPlanWithOptions(request, runtime);
  }

  async modifyReportPushTaskWithOptions(request: ModifyReportPushTaskRequest, runtime: $Util.RuntimeOptions): Promise<ModifyReportPushTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyReportPushTaskResponse>(await this.doRPCRequest("ModifyReportPushTask", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyReportPushTaskResponse({}));
  }

  async modifyReportPushTask(request: ModifyReportPushTaskRequest): Promise<ModifyReportPushTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyReportPushTaskWithOptions(request, runtime);
  }

  async modifyRuleGroupWithOptions(request: ModifyRuleGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRuleGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyRuleGroupResponse>(await this.doRPCRequest("ModifyRuleGroup", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyRuleGroupResponse({}));
  }

  async modifyRuleGroup(request: ModifyRuleGroupRequest): Promise<ModifyRuleGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRuleGroupWithOptions(request, runtime);
  }

  async modifySystemAlarmTaskWithOptions(request: ModifySystemAlarmTaskRequest, runtime: $Util.RuntimeOptions): Promise<ModifySystemAlarmTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySystemAlarmTaskResponse>(await this.doRPCRequest("ModifySystemAlarmTask", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySystemAlarmTaskResponse({}));
  }

  async modifySystemAlarmTask(request: ModifySystemAlarmTaskRequest): Promise<ModifySystemAlarmTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySystemAlarmTaskWithOptions(request, runtime);
  }

  async moveResourceGroupWithOptions(request: MoveResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<MoveResourceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MoveResourceGroupResponse>(await this.doRPCRequest("MoveResourceGroup", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new MoveResourceGroupResponse({}));
  }

  async moveResourceGroup(request: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  async pciReportWithOptions(request: PciReportRequest, runtime: $Util.RuntimeOptions): Promise<PciReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PciReportResponse>(await this.doRPCRequest("PciReport", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new PciReportResponse({}));
  }

  async pciReport(request: PciReportRequest): Promise<PciReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pciReportWithOptions(request, runtime);
  }

  async putLoginCountWithOptions(request: PutLoginCountRequest, runtime: $Util.RuntimeOptions): Promise<PutLoginCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PutLoginCountResponse>(await this.doRPCRequest("PutLoginCount", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new PutLoginCountResponse({}));
  }

  async putLoginCount(request: PutLoginCountRequest): Promise<PutLoginCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putLoginCountWithOptions(request, runtime);
  }

  async readMarkSystemAlarmsWithOptions(request: ReadMarkSystemAlarmsRequest, runtime: $Util.RuntimeOptions): Promise<ReadMarkSystemAlarmsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReadMarkSystemAlarmsResponse>(await this.doRPCRequest("ReadMarkSystemAlarms", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new ReadMarkSystemAlarmsResponse({}));
  }

  async readMarkSystemAlarms(request: ReadMarkSystemAlarmsRequest): Promise<ReadMarkSystemAlarmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.readMarkSystemAlarmsWithOptions(request, runtime);
  }

  async refundInstanceWithOptions(request: RefundInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RefundInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RefundInstanceResponse>(await this.doRPCRequest("RefundInstance", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new RefundInstanceResponse({}));
  }

  async refundInstance(request: RefundInstanceRequest): Promise<RefundInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refundInstanceWithOptions(request, runtime);
  }

  async registerNoticeMailWithOptions(request: RegisterNoticeMailRequest, runtime: $Util.RuntimeOptions): Promise<RegisterNoticeMailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RegisterNoticeMailResponse>(await this.doRPCRequest("RegisterNoticeMail", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new RegisterNoticeMailResponse({}));
  }

  async registerNoticeMail(request: RegisterNoticeMailRequest): Promise<RegisterNoticeMailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerNoticeMailWithOptions(request, runtime);
  }

  async removeLogMaskConfigWithOptions(request: RemoveLogMaskConfigRequest, runtime: $Util.RuntimeOptions): Promise<RemoveLogMaskConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveLogMaskConfigResponse>(await this.doRPCRequest("RemoveLogMaskConfig", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveLogMaskConfigResponse({}));
  }

  async removeLogMaskConfig(request: RemoveLogMaskConfigRequest): Promise<RemoveLogMaskConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeLogMaskConfigWithOptions(request, runtime);
  }

  async sendVerifyCodeMailWithOptions(request: SendVerifyCodeMailRequest, runtime: $Util.RuntimeOptions): Promise<SendVerifyCodeMailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SendVerifyCodeMailResponse>(await this.doRPCRequest("SendVerifyCodeMail", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new SendVerifyCodeMailResponse({}));
  }

  async sendVerifyCodeMail(request: SendVerifyCodeMailRequest): Promise<SendVerifyCodeMailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendVerifyCodeMailWithOptions(request, runtime);
  }

  async soxReportWithOptions(request: SoxReportRequest, runtime: $Util.RuntimeOptions): Promise<SoxReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SoxReportResponse>(await this.doRPCRequest("SoxReport", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new SoxReportResponse({}));
  }

  async soxReport(request: SoxReportRequest): Promise<SoxReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.soxReportWithOptions(request, runtime);
  }

  async startAlarmTaskWithOptions(request: StartAlarmTaskRequest, runtime: $Util.RuntimeOptions): Promise<StartAlarmTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartAlarmTaskResponse>(await this.doRPCRequest("StartAlarmTask", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new StartAlarmTaskResponse({}));
  }

  async startAlarmTask(request: StartAlarmTaskRequest): Promise<StartAlarmTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startAlarmTaskWithOptions(request, runtime);
  }

  async startInstanceWithOptions(request: StartInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StartInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartInstanceResponse>(await this.doRPCRequest("StartInstance", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new StartInstanceResponse({}));
  }

  async startInstance(request: StartInstanceRequest): Promise<StartInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startInstanceWithOptions(request, runtime);
  }

  async stopAlarmTaskWithOptions(request: StopAlarmTaskRequest, runtime: $Util.RuntimeOptions): Promise<StopAlarmTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopAlarmTaskResponse>(await this.doRPCRequest("StopAlarmTask", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new StopAlarmTaskResponse({}));
  }

  async stopAlarmTask(request: StopAlarmTaskRequest): Promise<StopAlarmTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopAlarmTaskWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UntagResourcesResponse>(await this.doRPCRequest("UntagResources", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async upgradeInstanceVersionWithOptions(request: UpgradeInstanceVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeInstanceVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpgradeInstanceVersionResponse>(await this.doRPCRequest("UpgradeInstanceVersion", "2018-03-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpgradeInstanceVersionResponse({}));
  }

  async upgradeInstanceVersion(request: UpgradeInstanceVersionRequest): Promise<UpgradeInstanceVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeInstanceVersionWithOptions(request, runtime);
  }

}
