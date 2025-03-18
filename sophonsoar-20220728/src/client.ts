// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class ComparePlaybooksResponseBodyCompareResult extends $dara.Model {
  /**
   * @remarks
   * The description of the comparison result.
   * 
   * @example
   * The first version adds one node compared to the second version
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the second version provides more information than the first version. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  new?: boolean;
  /**
   * @remarks
   * Indicates whether the configurations of the two versions are the same. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  same?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      new: 'New',
      same: 'Same',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      new: 'boolean',
      same: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyPlaybookResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  active?: number;
  /**
   * @example
   * This is a action of processing for WAF
   */
  description?: string;
  /**
   * @example
   * 11111
   */
  displayName?: string;
  /**
   * @example
   * 1
   */
  failNum?: number;
  /**
   * @example
   * 0.5
   */
  failRate?: number;
  /**
   * @example
   * 1655951601000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1638270967000
   */
  gmtModified?: number;
  /**
   * @example
   * 1
   */
  historyMd5?: number;
  /**
   * @example
   * [{\\"name\\":\\"1\\",\\"dataType\\":\\"String\\",\\"required\\":false,\\"isArray\\":false,\\"example\\":\\"\\",\\"description\\":\\"\\",\\"id\\":0,\\"typeName\\":\\"String\\",\\"dataClass\\":\\"normal\\"}]
   */
  inputParams?: string;
  /**
   * @example
   * 1725258397847
   */
  lastRuntime?: number;
  /**
   * @example
   * 037046****1b00c4717963818ccbf2xx
   */
  logicReleaseTaskflowMd5?: string;
  /**
   * @example
   * []
   */
  outputParams?: string;
  /**
   * @example
   * user
   */
  ownType?: string;
  /**
   * @example
   * 1
   */
  permission?: number;
  /**
   * @example
   * 1
   */
  playbookStatus?: number;
  /**
   * @example
   * 9e38111e-9794-4784-9ca8-xxxxxxx
   */
  playbookUuid?: string;
  /**
   * @example
   * 1
   */
  succNum?: number;
  /**
   * @example
   * 13760*****8718726
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      description: 'Description',
      displayName: 'DisplayName',
      failNum: 'FailNum',
      failRate: 'FailRate',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      historyMd5: 'HistoryMd5',
      inputParams: 'InputParams',
      lastRuntime: 'LastRuntime',
      logicReleaseTaskflowMd5: 'LogicReleaseTaskflowMd5',
      outputParams: 'OutputParams',
      ownType: 'OwnType',
      permission: 'Permission',
      playbookStatus: 'PlaybookStatus',
      playbookUuid: 'PlaybookUuid',
      succNum: 'SuccNum',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      description: 'string',
      displayName: 'string',
      failNum: 'number',
      failRate: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      historyMd5: 'number',
      inputParams: 'string',
      lastRuntime: 'number',
      logicReleaseTaskflowMd5: 'string',
      outputParams: 'string',
      ownType: 'string',
      permission: 'number',
      playbookStatus: 'number',
      playbookUuid: 'string',
      succNum: 'number',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyPlaybookResponseBodyPage extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePlaybookResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * UUID of the newly created playbook.
   * 
   * @example
   * 9e38111e-9794-4784-9ca8-xxxxxxx
   */
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playbookUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentAssetsResponseBodyComponentAssets extends $dara.Model {
  /**
   * @remarks
   * The UUID of the asset.
   * 
   * @example
   * ff6fe161-93e2-464c-a326-fxxxxxx
   */
  assetUuid?: string;
  /**
   * @remarks
   * The name of the component to which the asset belongs.
   * 
   * @example
   * pyhton3
   */
  componentname?: string;
  /**
   * @remarks
   * The time when the asset was created. The time is in the yyyy-MM-ddTHH:mm:ssZ format and is displayed in UTC.
   * 
   * @example
   * 2023-03-23T14:38Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the asset was modified. The time is in the yyyy-MM-ddTHH:mm:ssZ format and is displayed in UTC.
   * 
   * @example
   * 2023-03-23T14:38Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The UUID of the asset.
   * 
   * @example
   * 7xx
   */
  id?: number;
  /**
   * @remarks
   * The name of the asset.
   * 
   * @example
   * test asset
   */
  name?: string;
  /**
   * @remarks
   * The configurations of the asset in the JSON string format. DescribeComponentAssetForm
   * 
   * >  For more information, see [DescribeComponentAssetForm](~~DescribeComponentAssetForm~~).
   * 
   * @example
   * [
   *     {
   *         "name": "authMethod",
   *         "value": "ak"
   *     },
   *     {
   *         "name": "accessKeyId",
   *         "value": "xxxxxxx"
   *     },
   *     {
   *         "name": "accessKeySecret",
   *         "value": "xxxxx"
   *     },
   *     {
   *         "name": "roleArn",
   *         "value": ""
   *     }
   * ]
   */
  params?: string;
  static names(): { [key: string]: string } {
    return {
      assetUuid: 'AssetUuid',
      componentname: 'Componentname',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetUuid: 'string',
      componentname: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      name: 'string',
      params: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentPlaybookResponseBodyPlaybooks extends $dara.Model {
  /**
   * @remarks
   * The description of the predefined component.
   * 
   * @example
   * aegis_kill_process
   */
  description?: string;
  /**
   * @remarks
   * The name of the predefined component.
   * 
   * @example
   * AegisKillQuara
   */
  displayName?: string;
  /**
   * @remarks
   * The input parameter configuration of the playbook. The value is a JSON array.
   * 
   * >  For more information, see [DescribePlaybookInputOutput](~~DescribePlaybookInputOutput~~).
   * 
   * @example
   * [
   *     {
   *         "typeName": "String",
   *         "dataClass": "normal",
   *         "dataType": "String",
   *         "description": "period",
   *         "example": "",
   *         "name": "period",
   *         "required": false
   *     }
   * ]
   */
  inputParams?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      inputParams: 'InputParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      inputParams: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistinctReleasesResponseBodyRecords extends $dara.Model {
  /**
   * @remarks
   * The version description.
   * 
   * @example
   * demo version
   */
  description?: string;
  /**
   * @remarks
   * The MD5 value of the version XML configuration.
   * 
   * @example
   * 17cf53049bc8efa941207xxxxx
   */
  taskflowMd5?: string;
  /**
   * @remarks
   * The format of the playbook. Valid values:
   * 
   * *   **xml**: XML format.
   * *   **x6**: JSON format.
   * 
   * @example
   * x6
   */
  taskflowType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      taskflowMd5: 'TaskflowMd5',
      taskflowType: 'TaskflowType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      taskflowMd5: 'string',
      taskflowType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnumItemsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The key of the enumeration item.
   * 
   * @example
   * system_xxxxx_process_book
   */
  key?: string;
  /**
   * @remarks
   * The value of the enumeration item.
   * 
   * @example
   * system_xxxxx_process_book
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutePlaybooksResponseBodyPlaybookMetrics extends $dara.Model {
  /**
   * @remarks
   * The playbook description.
   * 
   * @example
   * a demo playbook
   */
  description?: string;
  /**
   * @remarks
   * The playbook name.
   * 
   * @example
   * demo_playbook
   */
  displayName?: string;
  /**
   * @remarks
   * The configuration of the input parameter. The value is a JSON array.
   * 
   * >  For more information, see [DescribePlaybookInputOutput](~~DescribePlaybookInputOutput~~).
   * 
   * @example
   * [
   *     {
   *         "typeName": "String",
   *         "dataClass": "normal",
   *         "dataType": "String",
   *         "description": "period",
   *         "example": "",
   *         "name": "period",
   *         "required": false
   *     }
   * ]
   */
  paramConfig?: string;
  /**
   * @remarks
   * The input parameter type of the playbook.
   * 
   * *   **template-ip**
   * *   **template-file**
   * *   **template-process**
   * *   **custom**
   * 
   * @example
   * custom
   */
  paramType?: string;
  /**
   * @remarks
   * The playbook UUID.
   * 
   * @example
   * c5c88b5e-97ca-435d-8c20-2xxxxx
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      paramConfig: 'ParamConfig',
      paramType: 'ParamType',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      paramConfig: 'string',
      paramType: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupProductionsResponseBodyDataProductionsPolicyList extends $dara.Model {
  /**
   * @example
   * AliyunRAMReadOnlyAccess
   */
  policyName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupProductionsResponseBodyDataProductions extends $dara.Model {
  /**
   * @example
   * Rds
   */
  code?: string;
  /**
   * @example
   * rds.aliyuncs.com
   */
  defaultDomain?: string;
  /**
   * @example
   * 2014-08-15
   */
  defaultVersion?: string;
  description?: string;
  fullDomains?: string[];
  group?: string;
  name?: string;
  policyList?: DescribeGroupProductionsResponseBodyDataProductionsPolicyList[];
  /**
   * @example
   * rds
   */
  ramCode?: string;
  /**
   * @example
   * RDS
   */
  shortName?: string;
  /**
   * @example
   * next
   */
  source?: string;
  versions?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      defaultDomain: 'DefaultDomain',
      defaultVersion: 'DefaultVersion',
      description: 'Description',
      fullDomains: 'FullDomains',
      group: 'Group',
      name: 'Name',
      policyList: 'PolicyList',
      ramCode: 'RamCode',
      shortName: 'ShortName',
      source: 'Source',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      defaultDomain: 'string',
      defaultVersion: 'string',
      description: 'string',
      fullDomains: { 'type': 'array', 'itemType': 'string' },
      group: 'string',
      name: 'string',
      policyList: { 'type': 'array', 'itemType': DescribeGroupProductionsResponseBodyDataProductionsPolicyList },
      ramCode: 'string',
      shortName: 'string',
      source: 'string',
      versions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.fullDomains)) {
      $dara.Model.validateArray(this.fullDomains);
    }
    if(Array.isArray(this.policyList)) {
      $dara.Model.validateArray(this.policyList);
    }
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupProductionsResponseBodyData extends $dara.Model {
  groupName?: string;
  productions?: DescribeGroupProductionsResponseBodyDataProductions[];
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      productions: 'Productions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      productions: { 'type': 'array', 'itemType': DescribeGroupProductionsResponseBodyDataProductions },
    };
  }

  validate() {
    if(Array.isArray(this.productions)) {
      $dara.Model.validateArray(this.productions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupProductionsResponseBodyPage extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLatestRecordSchemaResponseBodyPlaybookNodeSchemaNodeSchema extends $dara.Model {
  /**
   * @remarks
   * The action name of the component.
   * 
   * @example
   * formatedata
   */
  actionName?: string;
  /**
   * @remarks
   * The name of the component.
   * 
   * @example
   * DataFormat
   */
  componentName?: string;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * DataFormat_1
   */
  nodeName?: string;
  /**
   * @remarks
   * The output fields.
   */
  outputFields?: string[];
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      componentName: 'ComponentName',
      nodeName: 'NodeName',
      outputFields: 'OutputFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      componentName: 'string',
      nodeName: 'string',
      outputFields: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.outputFields)) {
      $dara.Model.validateArray(this.outputFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLatestRecordSchemaResponseBodyPlaybookNodeSchema extends $dara.Model {
  /**
   * @remarks
   * The structure information.
   */
  nodeSchema?: DescribeLatestRecordSchemaResponseBodyPlaybookNodeSchemaNodeSchema[];
  static names(): { [key: string]: string } {
    return {
      nodeSchema: 'NodeSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeSchema: { 'type': 'array', 'itemType': DescribeLatestRecordSchemaResponseBodyPlaybookNodeSchemaNodeSchema },
    };
  }

  validate() {
    if(Array.isArray(this.nodeSchema)) {
      $dara.Model.validateArray(this.nodeSchema);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeParamTagsResponseBodyParamReferredPaths extends $dara.Model {
  /**
   * @remarks
   * The name of the upstream node.
   * 
   * @example
   * DataFormat_1
   */
  paramName?: string;
  /**
   * @remarks
   * The paths.
   */
  referredPath?: string[];
  static names(): { [key: string]: string } {
    return {
      paramName: 'ParamName',
      referredPath: 'ReferredPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramName: 'string',
      referredPath: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.referredPath)) {
      $dara.Model.validateArray(this.referredPath);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNotifyTemplateListResponseBodyData extends $dara.Model {
  /**
   * @example
   * Dear $aliyunUID : Cloud Security Center Threat Analysis and Response has detected a newly discovered security incident $incidentName(Incident id :$incidentID) in $startTime, Please go to Cloud Security Center Console View.
   */
  content?: string;
  /**
   * @example
   * yundun_soar_incident_generate
   */
  eventId?: string;
  /**
   * @example
   * [\\"aliyunUID\\",\\"incidentName\\",\\"incidentID\\",\\"startTime\\"]
   */
  params?: string;
  /**
   * @example
   * [Alibaba Cloud Threat Analysis and Response] has detected a newly discovered security incident $incidentName($incidentID)
   */
  subject?: string;
  /**
   * @example
   * incident generate
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      eventId: 'EventId',
      params: 'Params',
      subject: 'Subject',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      eventId: 'string',
      params: 'string',
      subject: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNotifyTemplateListResponseBodyPage extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenApiInfoResponseBodyData extends $dara.Model {
  /**
   * @example
   * describeEcs
   */
  description?: string;
  /**
   * @example
   * {}
   */
  inputParams?: string;
  /**
   * @example
   * []
   */
  outputParams?: string;
  /**
   * @example
   * []
   */
  responseDemo?: string;
  /**
   * @example
   * describeEcs
   */
  summary?: string;
  /**
   * @example
   * describeEcs
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      inputParams: 'InputParams',
      outputParams: 'OutputParams',
      responseDemo: 'ResponseDemo',
      summary: 'Summary',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      inputParams: 'string',
      outputParams: 'string',
      responseDemo: 'string',
      summary: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenApiListResponseBodyData extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * [{"apis":[{"summary":"get account information","deprecated":false,"name":"DescAccountSummary","title":"get account information"}],"childrens":[],"title":"account"}]
   */
  directories?: any;
  /**
   * @example
   * 2018-12-03
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      directories: 'Directories',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      directories: 'any',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookResponseBodyPlaybook extends $dara.Model {
  /**
   * @remarks
   * The description of the playbook.
   * 
   * @example
   * demo playbook
   */
  description?: string;
  /**
   * @remarks
   * The display name of the playbook.
   * 
   * @example
   * demo_test
   */
  displayName?: string;
  /**
   * @remarks
   * The number of times that the playbook failed to be run.
   * 
   * @example
   * 1
   */
  failExeNum?: number;
  /**
   * @remarks
   * The creation time of the playbook. The value is a 13-digit timestamp.
   * 
   * @example
   * 1665288858000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time of the playbook. The value is a 13-digit timestamp.
   * 
   * @example
   * 1677482519000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The input parameter configuration of the playbook. The value is a JSON array.
   * 
   * >  For more information, see [DescribePlaybookInputOutput](~~DescribePlaybookInputOutput~~).
   * 
   * @example
   * [
   *     {
   *         "typeName": "String",
   *         "dataClass": "normal",
   *         "dataType": "String",
   *         "description": "period",
   *         "example": "",
   *         "name": "period",
   *         "required": false
   *     }
   * ]
   */
  inputParams?: string;
  /**
   * @remarks
   * The time when the playbook was last run. The value is a 13-digit timestamp.
   * 
   * @example
   * 1665288858000
   */
  lastExeTime?: number;
  /**
   * @remarks
   * The status of the playbook. Valid values:
   * 
   * *   **0**: disabled
   * *   **1**: enabled
   * 
   * @example
   * 0
   */
  onlineActive?: boolean;
  /**
   * @remarks
   * The MD5 hash value in the latest published version of the playbook.
   * 
   * @example
   * asdfsdfe232-e2b2-44fd-b2cc-xxxxx
   */
  onlineReleaseTaskflowMd5?: string;
  /**
   * @remarks
   * The type of the playbook. Valid values:
   * 
   * *   **preset**: predefined playbook
   * *   **user**: custom playbook
   * 
   * @example
   * preset
   */
  ownType?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * @example
   * 8db257d3-e2b2-44fd-b2cc-xxxxx
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The number of times that the playbook was successfully run.
   * 
   * @example
   * 100
   */
  successExeNum?: number;
  /**
   * @remarks
   * The XML configuration of the playbook.
   * 
   * @example
   * <?xml version="1.0" encoding="UTF-8"?><bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" targetNamespace="http://bpmn.io/schema/bpmn" id="Definitions_1"><bpmn:process id="Process_1" isExecutable="false"><bpmn:startEvent id="StartEvent_1"/></bpmn:process><bpmndi:BPMNDiagram id="BPMNDiagram_1"><bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1"><bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1"><dc:Bounds height="36.0" width="36.0" x="173.0" y="102.0"/></bpmndi:BPMNShape></bpmndi:BPMNPlane></bpmndi:BPMNDiagram></bpmn:definitions>
   */
  taskflow?: string;
  /**
   * @remarks
   * The playbook configuration type.
   * *   **xml**: XML format.
   * *   **x6**: JSON format.
   * 
   * @example
   * xml
   */
  taskflowType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      failExeNum: 'FailExeNum',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      inputParams: 'InputParams',
      lastExeTime: 'LastExeTime',
      onlineActive: 'OnlineActive',
      onlineReleaseTaskflowMd5: 'OnlineReleaseTaskflowMd5',
      ownType: 'OwnType',
      playbookUuid: 'PlaybookUuid',
      successExeNum: 'SuccessExeNum',
      taskflow: 'Taskflow',
      taskflowType: 'TaskflowType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      failExeNum: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      inputParams: 'string',
      lastExeTime: 'number',
      onlineActive: 'boolean',
      onlineReleaseTaskflowMd5: 'string',
      ownType: 'string',
      playbookUuid: 'string',
      successExeNum: 'number',
      taskflow: 'string',
      taskflowType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookInputOutputResponseBodyConfig extends $dara.Model {
  /**
   * @remarks
   * The execution method of the playbook is in JSONObject format.
   */
  exeConfig?: string;
  /**
   * @remarks
   * The input parameter configuration of the playbook. The value is a JSON array.
   * 
   * @example
   * [
   *     {
   *         "typeName": "String",
   *         "dataClass": "normal",
   *         "dataType": "String",
   *         "description": "period",
   *         "example": "",
   *         "name": "period",
   *         "required": false
   *     }
   * ]
   */
  inputParams?: string;
  /**
   * @remarks
   * The output parameter configuration. This parameter is unavailable and is always left empty.
   * 
   * @example
   * []
   */
  outputParams?: string;
  /**
   * @remarks
   * The input parameter type of the playbook. Valid values:
   * 
   * *   **template-ip**
   * *   **template-file**
   * *   **template-process**
   * *   **custom**
   * 
   * @example
   * custom
   */
  paramType?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * @example
   * 9030076b-6733-4842-b05a-xxxxxx
   */
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      exeConfig: 'ExeConfig',
      inputParams: 'InputParams',
      outputParams: 'OutputParams',
      paramType: 'ParamType',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exeConfig: 'string',
      inputParams: 'string',
      outputParams: 'string',
      paramType: 'string',
      playbookUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookMetricsResponseBodyMetrics extends $dara.Model {
  /**
   * @remarks
   * The status of the playbook. Valid values:
   * 
   * *   **1**: enabled
   * *   **0**: disabled
   * 
   * @example
   * 1
   */
  active?: number;
  /**
   * @remarks
   * The description of the playbook.
   * 
   * @example
   * This is a playbook for waf processing
   */
  description?: string;
  /**
   * @remarks
   * The name of the playbook.
   * 
   * @example
   * demo name
   */
  displayName?: string;
  /**
   * @remarks
   * The number of the tasks that are created for the playbook and failed to run.
   * 
   * @example
   * 10
   */
  failNum?: number;
  /**
   * @remarks
   * The time when the playbook was created. The value is a 13-digit timestamp.
   * 
   * @example
   * 1655277397000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The number of historical versions of the playbook.
   * 
   * @example
   * 10
   */
  historyMd5?: number;
  /**
   * @remarks
   * The time when the playbook was last run. The value is a 13-digit timestamp.
   * 
   * @example
   * 1683526277415
   */
  lastRuntime?: number;
  /**
   * @remarks
   * The type of the playbook. Valid values:
   * 
   * *   **preset**: predefined playbook
   * *   **user**: custom playbook
   * 
   * @example
   * user
   */
  ownType?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * @example
   * 0fbc9bdb-9ae3-4ef4-a709-xxxxx
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The number of the tasks that are created for the playbook and were successfully run.
   * 
   * @example
   * 100
   */
  succNum?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      description: 'Description',
      displayName: 'DisplayName',
      failNum: 'FailNum',
      gmtCreate: 'GmtCreate',
      historyMd5: 'HistoryMd5',
      lastRuntime: 'LastRuntime',
      ownType: 'OwnType',
      playbookUuid: 'PlaybookUuid',
      succNum: 'SuccNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      description: 'string',
      displayName: 'string',
      failNum: 'number',
      gmtCreate: 'number',
      historyMd5: 'number',
      lastRuntime: 'number',
      ownType: 'string',
      playbookUuid: 'string',
      succNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookNodesOutputResponseBodyPlaybookNodesOutput extends $dara.Model {
  /**
   * @remarks
   * The name of the component node.
   * 
   * @example
   * DataFormat_1
   */
  nodeName?: string;
  /**
   * @remarks
   * The historical output data of the component node. The value is in the JSON string format. If no data is found, the parameter is left empty.
   * 
   * @example
   * {
   *     "datalist": [
   *         {
   *             "score": "10",
   *             "ip": "1.1.1.1"
   *         }
   *     ],
   *     "total_data_successful": 1,
   *     "filter_total_data": 1,
   *     "total_data": 1,
   *     "total_exe_successful": 1,
   *     "total_exe": 1,
   *     "total_data_with_dup": 1,
   *     "filter_total_data_successful": 1,
   *     "status": true
   * }
   */
  nodeOutput?: string;
  static names(): { [key: string]: string } {
    return {
      nodeName: 'NodeName',
      nodeOutput: 'NodeOutput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeName: 'string',
      nodeOutput: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookNumberMetricsResponseBodyMetrics extends $dara.Model {
  /**
   * @remarks
   * The number of enabled playbooks.
   * 
   * @example
   * 50
   */
  startUpNum?: number;
  /**
   * @remarks
   * The total number of playbooks.
   * 
   * @example
   * 100
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      startUpNum: 'StartUpNum',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startUpNum: 'number',
      totalNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookReleasesResponseBodyPage extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookReleasesResponseBodyRecords extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to publish the version.
   * 
   * @example
   * 145xxxx985
   */
  creator?: string;
  /**
   * @remarks
   * The description of the layer version.
   * 
   * @example
   * This is a new version
   */
  description?: string;
  /**
   * @remarks
   * The time when the version was created. The value is a 13-digit timestamp.
   * 
   * @example
   * 1655277397000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time when the version was modified. The value is a 13-digit timestamp.
   * 
   * @example
   * 1691460804000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The record ID.
   * 
   * @example
   * 80xxx
   */
  id?: number;
  /**
   * @remarks
   * The MD5 value configured for the published version of the playbook.
   * 
   * @example
   * be0a4ef084dd174abe47xxxxx
   */
  taskflowMd5?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      taskflowMd5: 'TaskflowMd5',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      taskflowMd5: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybooksResponseBodyPage extends $dara.Model {
  /**
   * @remarks
   * The page number in pagination queries.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of items per page in pagination queries.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of items found.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybooksResponseBodyPlaybooks extends $dara.Model {
  /**
   * @remarks
   * The status indicator of the playbook. Values:
   * 
   * - **1**: Indicates the playbook is activated.
   * - **0**: Indicates the playbook is deactivated.
   * 
   * @example
   * 1
   */
  active?: number;
  /**
   * @remarks
   * The display name of the playbook.
   * 
   * @example
   * demo_playbook
   */
  displayName?: string;
  /**
   * @remarks
   * The creation time of the playbook, in 13-digit timestamp format.
   * 
   * @example
   * 1683526277415
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The modification time of the playbook.
   * 
   * @example
   * 1681396398000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The last execution time of the playbook, in 13-digit timestamp format.
   * 
   * @example
   * 1683526277415
   */
  lastRuntime?: number;
  /**
   * @remarks
   * The type of the playbook. Values:
   * 
   * - **preset**: Predefined playbook.
   * - **user**: Custom playbook.
   * 
   * @example
   * user
   */
  ownType?: string;
  /**
   * @remarks
   * The trigger method for the playbook, with a default value of **query all**. Possible values are:
   * - **template-incident**: Security incident.
   * - **template-ip**: IP entity.
   * - **template-file**: File entity.
   * - **template-process**: Process entity.
   * - **template-alert**: Security alert.
   * - **template-domain**: Domain entity.
   * - **template-container**: Container entity.
   * - **template-host**: Host entity.
   * 
   * @example
   * template-alert
   */
  paramType?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * @example
   * bb5a8640-a14f-44ef-8376-cxxxxx
   */
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      displayName: 'DisplayName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      lastRuntime: 'LastRuntime',
      ownType: 'OwnType',
      paramType: 'ParamType',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      displayName: 'string',
      gmtCreate: 'number',
      gmtModified: 'string',
      lastRuntime: 'number',
      ownType: 'string',
      paramType: 'string',
      playbookUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePopApiResponseBodyOpenApiMetaList extends $dara.Model {
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * demo parameter
   */
  description?: string;
  /**
   * @remarks
   * The example value.
   * 
   * @example
   * 12.xx.xx.xx
   */
  exampleValue?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * DescribePopApi
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the parameter is required.
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  required?: boolean;
  /**
   * @remarks
   * The data type of the parameter field. Valid values:
   * 
   * *   **string**
   * *   **boolean**
   * *   **integer**
   * *   **long**
   * 
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      exampleValue: 'ExampleValue',
      name: 'Name',
      required: 'Required',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      exampleValue: 'string',
      name: 'string',
      required: 'boolean',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessStatisticsResponseBodyMetrics extends $dara.Model {
  /**
   * @example
   * 1
   */
  banFileNum?: number;
  /**
   * @example
   * 1
   */
  banIpNum?: number;
  /**
   * @example
   * 1
   */
  banProcessNum?: number;
  /**
   * @example
   * 1
   */
  taskNum?: number;
  static names(): { [key: string]: string } {
    return {
      banFileNum: 'BanFileNum',
      banIpNum: 'BanIpNum',
      banProcessNum: 'BanProcessNum',
      taskNum: 'TaskNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      banFileNum: 'number',
      banIpNum: 'number',
      banProcessNum: 'number',
      taskNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessTaskCountResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Count.
   * 
   * @example
   * 67
   */
  count?: number;
  /**
   * @remarks
   * Entity UUID.
   * 
   * @example
   * a680c9ae-****-4c39-****-0302****fc8e
   */
  entityUuid?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      entityUuid: 'EntityUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      entityUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessTasksResponseBodyPage extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessTasksResponseBodyProcessTasks extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to submit the handling task.
   * 
   * @example
   * 123xxxx355
   */
  creator?: string;
  /**
   * @remarks
   * The name of the handling entity.
   * 
   * @example
   * 1.1.1.x
   */
  entityName?: string;
  /**
   * @remarks
   * The type of the handling entity.
   * 
   * @example
   * ip
   */
  entityType?: string;
  entityUuid?: string;
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * sts_openapi.Info.DefenseSceneNotSupported
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the call failed.
   * 
   * @example
   * ParamError : The parameters of your request are invalid
   */
  errMsg?: string;
  /**
   * @remarks
   * The error tip returned if the call failed.
   * 
   * @example
   * Verify that the input parameters of the components are correct
   */
  errTip?: string;
  eventUuid?: string;
  /**
   * @remarks
   * The creation time of the handling task. The value is a 13-digit timestamp.
   * 
   * @example
   * 1700031183572
   */
  gmtCreateMillis?: number;
  /**
   * @remarks
   * The modification time of the handling task. The value is a 13-digit timestamp.
   * 
   * @example
   * 1700031183572
   */
  gmtModifiedMillis?: number;
  /**
   * @remarks
   * The input parameter of the handling task.
   * 
   * @example
   * {"groupuuid":"c6a9b1df-f4ac-4078-bef4-99xxxxxx"}
   */
  inputParams?: string;
  /**
   * @remarks
   * The ID of the associated policy.
   * 
   * @example
   * 92af3c79-1754-4646-9366-9ddbd1e45536_xxxx
   */
  processStrategyUuid?: string;
  /**
   * @remarks
   * The delivery time of the handling task. The value is a 13-digit timestamp.
   * 
   * @example
   * 1700031183572
   */
  processTime?: number;
  /**
   * @remarks
   * The unblocking time of the handling task. The value is a 13-digit timestamp.
   * 
   * @example
   * 1700031183572
   */
  removeTime?: number;
  reqUuid?: string;
  /**
   * @remarks
   * The scenario code of the handling task.
   * 
   * @example
   * event_xxx_whole_process
   */
  sceneCode?: string;
  /**
   * @remarks
   * The scenario name of the handling task.
   * 
   * @example
   * waf_whole_process
   */
  sceneName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is specified in the handling task.
   * 
   * @example
   * 123xxxxx234
   */
  scope?: string;
  /**
   * @remarks
   * The submission source of the handling task.
   * 
   * @example
   * system
   */
  source?: string;
  /**
   * @remarks
   * The unique identifier of the handling task.
   * 
   * @example
   * 150xxxxxxxxx95066
   */
  taskId?: string;
  /**
   * @remarks
   * The status of the handling task.
   * 
   * @example
   * 11
   */
  taskStatus?: number;
  triggerSource?: string;
  /**
   * @remarks
   * The code of the cloud service that is associated with the handling task.
   * 
   * @example
   * WAF
   */
  yunCode?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      entityName: 'EntityName',
      entityType: 'EntityType',
      entityUuid: 'EntityUuid',
      errCode: 'ErrCode',
      errMsg: 'ErrMsg',
      errTip: 'ErrTip',
      eventUuid: 'EventUuid',
      gmtCreateMillis: 'GmtCreateMillis',
      gmtModifiedMillis: 'GmtModifiedMillis',
      inputParams: 'InputParams',
      processStrategyUuid: 'ProcessStrategyUuid',
      processTime: 'ProcessTime',
      removeTime: 'RemoveTime',
      reqUuid: 'ReqUuid',
      sceneCode: 'SceneCode',
      sceneName: 'SceneName',
      scope: 'Scope',
      source: 'Source',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      triggerSource: 'TriggerSource',
      yunCode: 'YunCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      entityName: 'string',
      entityType: 'string',
      entityUuid: 'string',
      errCode: 'string',
      errMsg: 'string',
      errTip: 'string',
      eventUuid: 'string',
      gmtCreateMillis: 'number',
      gmtModifiedMillis: 'number',
      inputParams: 'string',
      processStrategyUuid: 'string',
      processTime: 'number',
      removeTime: 'number',
      reqUuid: 'string',
      sceneCode: 'string',
      sceneName: 'string',
      scope: 'string',
      source: 'string',
      taskId: 'string',
      taskStatus: 'number',
      triggerSource: 'string',
      yunCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarRecordsResponseBodyPage extends $dara.Model {
  /**
   * @remarks
   * The current page number in paginated queries.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of items per page in paginated queries.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of queried items.
   * 
   * @example
   * 22
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarRecordsResponseBodySoarExecuteRecords extends $dara.Model {
  /**
   * @remarks
   * The end time of the component execution, in 13-digit timestamp format.
   * 
   * @example
   * 1686294686000
   */
  endTime?: number;
  /**
   * @remarks
   * The error message of the playbook task. This field is empty when the task succeeds.
   * 
   * @example
   * stime not match
   */
  errorMsg?: string;
  /**
   * @remarks
   * The request parameters of the playbook task.
   * 
   * @example
   * {
   *     "input1": "xx.xx.xx.xx",
   *     "input2": "7d"
   * }
   */
  rawEventReq?: string;
  /**
   * @remarks
   * The request ID of the playbook task, a unique ID for each task run.
   * 
   * @example
   * ba1ec480-aa90-4bb6-a1a7-9e311ae79321
   */
  requestUuid?: string;
  /**
   * @remarks
   * The return information of the playbook, defined by the user within the playbook.
   * 
   * @example
   * Playbook finish
   */
  resultMessage?: string;
  /**
   * @remarks
   * The start time of the task execution, in 13-digit timestamp format.
   * 
   * @example
   * 1675823338433
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the playbook task. Values:
   * 
   * - **success**: Indicates successful execution.
   * - **fail**: Indicates failed execution.
   * - **running**: Indicates the task is running
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The name of the playbook task, which is the same as the playbook\\"s UUID.
   * 
   * @example
   * 82848ebc-eaff-4791-acd4-xxxxx
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the playbook task, with values:
   * 
   * - **general**: Represents a general playbook task.
   * - **standard**: Represents a component execution task.
   * 
   * @example
   * standard
   */
  taskType?: string;
  /**
   * @remarks
   * The MD5 value of the playbook configuration.
   * 
   * @example
   * dea65a3db87fb9bd84bbxxxxx
   */
  taskflowMd5?: string;
  /**
   * @remarks
   * The type of the playbook task. Values:
   * 
   * - **debug**: Indicates a debugging task.
   * - **manual**: Indicates a manual task.
   * - **siem**: Indicates a task triggered by an event or alert.
   * 
   * @example
   * debug
   */
  triggerType?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID that executes the playbook task.
   * 
   * @example
   * 127xxxx4392
   */
  triggerUser?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      errorMsg: 'ErrorMsg',
      rawEventReq: 'RawEventReq',
      requestUuid: 'RequestUuid',
      resultMessage: 'ResultMessage',
      startTime: 'StartTime',
      status: 'Status',
      taskName: 'TaskName',
      taskType: 'TaskType',
      taskflowMd5: 'TaskflowMd5',
      triggerType: 'TriggerType',
      triggerUser: 'TriggerUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      errorMsg: 'string',
      rawEventReq: 'string',
      requestUuid: 'string',
      resultMessage: 'string',
      startTime: 'number',
      status: 'string',
      taskName: 'string',
      taskType: 'string',
      taskflowMd5: 'string',
      triggerType: 'string',
      triggerUser: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarTaskAndActionsResponseBodyDetailsActions extends $dara.Model {
  /**
   * @remarks
   * The action name of the component.
   * 
   * @example
   * formatdata
   */
  action?: string;
  /**
   * @remarks
   * The UUID of the component execution record.
   * 
   * @example
   * 091be399-a937-4276-af78-xxxxxxxx
   */
  actionUuid?: string;
  /**
   * @remarks
   * The name of the asset that is used by the component.
   * 
   * @example
   * SLS Asset
   */
  assetName?: string;
  /**
   * @remarks
   * The component name.
   * 
   * @example
   * DataFormat
   */
  component?: string;
  /**
   * @remarks
   * The end of the time range during which the component is run. The value is a 13-digit timestamp.
   * 
   * @example
   * 1699868848766
   */
  endTime?: number;
  /**
   * @remarks
   * The custom name of the node in the component.
   * 
   * @example
   * DataFormat_1
   */
  nodeName?: string;
  /**
   * @remarks
   * The request ID of the task. The value is unique.
   * 
   * @example
   * 8dac16c6-7411-4116-8d70-xxxxxxx
   */
  requestUuid?: string;
  /**
   * @remarks
   * The beginning of the time range during which the component is run. The value is a 13-digit timestamp.
   * 
   * @example
   * 1699868848731
   */
  startTime?: number;
  /**
   * @remarks
   * The running result of the component. Valid values:
   * 
   * *   **success**
   * *   **fail**
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The name of the task. The value is the same as the playbook UUID.
   * 
   * @example
   * ed127287-6699-4e4d-b986-xxxxxxx
   */
  taskName?: string;
  /**
   * @remarks
   * The status of the triggered component action.
   * 
   * >  This parameter is disabled and left empty.
   * 
   * @example
   * NULL
   */
  taskStatus?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to execute the task.
   * 
   * @example
   * 127xxxx4392
   */
  triggerUser?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionUuid: 'ActionUuid',
      assetName: 'AssetName',
      component: 'Component',
      endTime: 'EndTime',
      nodeName: 'NodeName',
      requestUuid: 'RequestUuid',
      startTime: 'StartTime',
      status: 'Status',
      taskName: 'TaskName',
      taskStatus: 'TaskStatus',
      triggerUser: 'TriggerUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionUuid: 'string',
      assetName: 'string',
      component: 'string',
      endTime: 'number',
      nodeName: 'string',
      requestUuid: 'string',
      startTime: 'number',
      status: 'string',
      taskName: 'string',
      taskStatus: 'string',
      triggerUser: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarTaskAndActionsResponseBodyDetails extends $dara.Model {
  /**
   * @remarks
   * The list of component actions during the running of the playbook.
   */
  actions?: DescribeSoarTaskAndActionsResponseBodyDetailsActions[];
  /**
   * @remarks
   * The end of the time range during which the playbook is run. The value is a 13-digit timestamp.
   * 
   * @example
   * 1699868848767
   */
  endTime?: number;
  /**
   * @remarks
   * The error message of the task. If the task is successful, this field is empty.
   * 
   * @example
   * stime not match
   */
  errorMsg?: string;
  /**
   * @remarks
   * The request parameters of the task.
   * 
   * @example
   * {
   *     "input1": "xx.xx.xx.xx",
   *     "input2": "7d"
   * }
   */
  rawEventReq?: string;
  /**
   * @remarks
   * The request ID of the task. The value is unique.
   * 
   * @example
   * 17f75844-75cc-4174-86da-cec07a690142
   */
  requestUuid?: string;
  /**
   * @remarks
   * The flag of the task. For debugging tasks, the value is **DEBUG**. For other tasks, the parameter is left empty.
   * 
   * @example
   * DEBUG
   */
  resultLevel?: string;
  /**
   * @remarks
   * The returned information about the playbook. You can define the value in the playbook.
   * 
   * @example
   * deubug playbook finished
   */
  resultMessage?: string;
  /**
   * @remarks
   * The beginning of the time range during which the playbook is run. The value is a 13-digit timestamp.
   * 
   * @example
   * 1699868848645
   */
  startTime?: number;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   **success**
   * *   **fail**
   * *   **running**
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The MD5 value of the playbook.
   * 
   * @example
   * ed127287-6699-4e4d-b986-9f770879xxx
   */
  taskFlowMd5?: string;
  /**
   * @remarks
   * The name of the task. The value is the same as the playbook UUID.
   * 
   * @example
   * 92af3c79-1754-4646-9366-9ddbd1e45536
   */
  taskName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the task belongs.
   * 
   * @example
   * 127xxxx4392
   */
  taskTenantId?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * *   **debug**: a debugging task
   * *   **manual**: a manual task
   * *   **siem**: an event-triggered task
   * 
   * @example
   * siem
   */
  triggerType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that triggers the task.
   * 
   * @example
   * 127xxxx4392
   */
  triggerUser?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      endTime: 'EndTime',
      errorMsg: 'ErrorMsg',
      rawEventReq: 'RawEventReq',
      requestUuid: 'RequestUuid',
      resultLevel: 'ResultLevel',
      resultMessage: 'ResultMessage',
      startTime: 'StartTime',
      status: 'Status',
      taskFlowMd5: 'TaskFlowMd5',
      taskName: 'TaskName',
      taskTenantId: 'TaskTenantId',
      triggerType: 'TriggerType',
      triggerUser: 'TriggerUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': DescribeSoarTaskAndActionsResponseBodyDetailsActions },
      endTime: 'number',
      errorMsg: 'string',
      rawEventReq: 'string',
      requestUuid: 'string',
      resultLevel: 'string',
      resultMessage: 'string',
      startTime: 'number',
      status: 'string',
      taskFlowMd5: 'string',
      taskName: 'string',
      taskTenantId: 'string',
      triggerType: 'string',
      triggerUser: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSophonCommandsResponseBodyDataParamConfig extends $dara.Model {
  /**
   * @remarks
   * The regular expression that is used to check the format of the parameter value. If the parameter is left empty, the check is not performed.
   * 
   * @example
   * [0-9]{4}\\.[0-9]{4}\\.[0-9]{4}\\.[0-9]{4}
   */
  checkField?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * ip
   */
  field?: string;
  /**
   * @remarks
   * Indicates whether the parameter is required. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  necessary?: boolean;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * 12.xx.xx.xx
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      checkField: 'CheckField',
      field: 'Field',
      necessary: 'Necessary',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkField: 'string',
      field: 'string',
      necessary: 'boolean',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSophonCommandsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The description of the command.
   * 
   * @example
   * This is a action of processing for WAF
   */
  description?: string;
  /**
   * @remarks
   * The display name of the command.
   * 
   * @example
   * WAF Process IP
   */
  displayName?: string;
  /**
   * @remarks
   * The name of the command.
   * 
   * @example
   * waf_process_ip_v2
   */
  name?: string;
  /**
   * @remarks
   * The parameter configurations.
   */
  paramConfig?: DescribeSophonCommandsResponseBodyDataParamConfig[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
      paramConfig: 'ParamConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      name: 'string',
      paramConfig: { 'type': 'array', 'itemType': DescribeSophonCommandsResponseBodyDataParamConfig },
    };
  }

  validate() {
    if(Array.isArray(this.paramConfig)) {
      $dara.Model.validateArray(this.paramConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVendorApiListResponseBodyApiList extends $dara.Model {
  /**
   * @example
   * {
   *     "cmd": "DescribeAclApiDispatch"
   * }
   */
  advanceConfig?: string;
  /**
   * @example
   * VerifyMobile
   */
  apiName?: string;
  /**
   * @example
   * 2017-08-01
   */
  apiVersion?: string;
  /**
   * @example
   * POST
   */
  method?: string;
  /**
   * @example
   * true
   */
  needAdvanceConfig?: boolean;
  /**
   * @example
   * false
   */
  needPageInfo?: boolean;
  /**
   * @example
   * {\\"Count\\": 10, \\"TotalCount\\": 23, \\"PageSize\\": 10, \\"CurrentPage\\": 1}
   */
  pageInfo?: string;
  /**
   * @example
   * [
   *     {
   *         "name": "Domain",
   *         "type": "String",
   *         "isRequired": true,
   *         "exampleValue": "www.***.com",
   *         "description": "www.***.com"
   *     }
   * ]
   */
  parameter?: string;
  /**
   * @example
   * cfw
   */
  productCode?: string;
  /**
   * @example
   * cfw.xxx.com
   */
  productDomain?: string;
  /**
   * @example
   * waf
   */
  productName?: string;
  /**
   * @example
   * https
   */
  protocol?: string;
  /**
   * @example
   * Azure
   */
  vendorCode?: string;
  static names(): { [key: string]: string } {
    return {
      advanceConfig: 'AdvanceConfig',
      apiName: 'ApiName',
      apiVersion: 'ApiVersion',
      method: 'Method',
      needAdvanceConfig: 'NeedAdvanceConfig',
      needPageInfo: 'NeedPageInfo',
      pageInfo: 'PageInfo',
      parameter: 'Parameter',
      productCode: 'ProductCode',
      productDomain: 'ProductDomain',
      productName: 'ProductName',
      protocol: 'Protocol',
      vendorCode: 'VendorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advanceConfig: 'string',
      apiName: 'string',
      apiVersion: 'string',
      method: 'string',
      needAdvanceConfig: 'boolean',
      needPageInfo: 'boolean',
      pageInfo: 'string',
      parameter: 'string',
      productCode: 'string',
      productDomain: 'string',
      productName: 'string',
      protocol: 'string',
      vendorCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVendorApiListResponseBodyPage extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunNotifyComponentWithEmailResponseBodyPage extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunNotifyComponentWithMessageCenterResponseBodyPage extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunNotifyComponentWithWebhookResponseBodyPage extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerSophonPlaybookResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The custom ID. If you do not specify this parameter when the playbook is triggered, a random ID is generated for fault locating and troubleshooting.
   * 
   * @example
   * a7c6d055-a72f-4676-bc89-3cd9edc0284c
   */
  sophonTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      sophonTaskId: 'SophonTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sophonTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPlaybookResponseBodyCheckTaskInfos extends $dara.Model {
  /**
   * @remarks
   * The error message returned when the playbook does not pass the check.
   * 
   * @example
   * Node [python3_3] doesn\\"t have the asset information
   */
  detail?: string;
  /**
   * @remarks
   * The name of the node in the playbook.
   * 
   * @example
   * python3_3
   */
  nodeName?: string;
  /**
   * @remarks
   * The severity level of the verification information. Valid values:
   * 
   * *   warn: An issue may occur during playbook running.
   * *   error: The playbook cannot be compiled.
   * *   remind: The publishing and running of the playbook are not affected. We recommend that you optimize the playbook format.
   * 
   * @example
   * error
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      nodeName: 'NodeName',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      nodeName: 'string',
      riskLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPythonFileResponseBodySyntax extends $dara.Model {
  /**
   * @remarks
   * The number that indicates the end column of the error code.
   * 
   * @example
   * 5
   */
  endColumn?: number;
  /**
   * @remarks
   * The number that indicates the end line of the error code.
   * 
   * @example
   * 5
   */
  endLineNumber?: number;
  /**
   * @remarks
   * The error message for the error code.
   * 
   * @example
   * undefined name \\"ab\\"
   */
  message?: string;
  /**
   * @remarks
   * The severity level of the error code. Valid values:
   * 
   * *   4: moderate
   * *   8: serious
   * 
   * @example
   * 4
   */
  severity?: number;
  /**
   * @remarks
   * The number that indicates the start column of the error code.
   * 
   * @example
   * 2
   */
  startColumn?: number;
  /**
   * @remarks
   * The number that indicates the start line of the error code.
   * 
   * @example
   * 2
   */
  startLineNumber?: number;
  static names(): { [key: string]: string } {
    return {
      endColumn: 'EndColumn',
      endLineNumber: 'EndLineNumber',
      message: 'Message',
      severity: 'Severity',
      startColumn: 'StartColumn',
      startLineNumber: 'StartLineNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endColumn: 'number',
      endLineNumber: 'number',
      message: 'string',
      severity: 'number',
      startColumn: 'number',
      startLineNumber: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchModifyInstanceStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to start or stop the playbook.
   * 
   * *   **0**: stops the playbook.
   * *   **1**: starts the playbook.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  active?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The playbook UUID. If you want to specify multiple playbooks, separate the playbook UUIDs with commas (,).
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the playbook UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 8baa6cff-319e-4ede-97bc-1xxxxxx,s8df2e-s8dfs-xxxx
   */
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      lang: 'Lang',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      lang: 'string',
      playbookUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchModifyInstanceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 358E012F-B516-599D-9ED0-A1A361CDE615
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchModifyInstanceStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchModifyInstanceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchModifyInstanceStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ComparePlaybooksRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the second version.
   * 
   * >  You can call the [DescribePlaybookReleases](~~DescribePlaybookReleases~~) operation to query the IDs of versions. The system automatically generates IDs for new versions.
   * 
   * This parameter is required.
   * 
   * @example
   * sfdf2395-e814-459f-9662-xxxxx
   */
  newPlaybookReleaseId?: number;
  /**
   * @remarks
   * The ID of the first version.
   * 
   * >  You can call the [DescribePlaybookReleases](~~DescribePlaybookReleases~~) operation to query the IDs of versions. The system automatically generates IDs for new versions.
   * 
   * This parameter is required.
   * 
   * @example
   * sflk23423-e814-459f-9662-xxxxx
   */
  oldPlaybookReleaseId?: number;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the UUIDs of playbooks.
   * 
   * This parameter is required.
   * 
   * @example
   * f916b93e-e814-459f-9662-xxxxx
   */
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      newPlaybookReleaseId: 'NewPlaybookReleaseId',
      oldPlaybookReleaseId: 'OldPlaybookReleaseId',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      newPlaybookReleaseId: 'number',
      oldPlaybookReleaseId: 'number',
      playbookUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ComparePlaybooksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The comparison result.
   */
  compareResult?: ComparePlaybooksResponseBodyCompareResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2EC05B06-BF3C-5F3E-8FE8-3B1FAD76087A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      compareResult: 'CompareResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compareResult: ComparePlaybooksResponseBodyCompareResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.compareResult && typeof (this.compareResult as any).validate === 'function') {
      (this.compareResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ComparePlaybooksResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ComparePlaybooksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ComparePlaybooksResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertPlaybookRequest extends $dara.Model {
  /**
   * @remarks
   * Language type for request and response messages. Values:
   * 
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * User ID for the administrator to switch to another member\\"s perspective.
   * 
   * @example
   * 13760*****718726
   */
  roleFor?: number;
  /**
   * @remarks
   * View type. Values:
   * 
   * - 0: Current Alibaba Cloud account view.
   * - 1: View for all accounts under the enterprise.
   * 
   * @example
   * 0
   */
  roleType?: string;
  /**
   * @remarks
   * XML configuration information for playbook orchestration.
   * 
   * This parameter is required.
   * 
   * @example
   * <?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>
   * <bpmn:definitions xmlns:xsi=\\"http://www.w3.org/2001/XMLSchema-instance\\" xmlns:bpmn=\\"http://www.omg.org/spec/BPMN/20100524/MODEL\\" xmlns:bpmndi=\\"http://www.omg.org/spec/BPMN/20100524/DI\\" xmlns:dc=\\"http://www.omg.org/spec/DD/20100524/DC\\" id=\\"Definitions_1\\" targetNamespace=\\"http://bpmn.io/schema/bpmn\\">
   *   <bpmn:process id=\\"Process_1\\" isExecutable=\\"false\\">
   *     <bpmn:startEvent id=\\"StartEvent_1\\" />
   *   </bpmn:process>
   *   <bpmndi:BPMNDiagram id=\\"BPMNDiagram_1\\">
   *      <bpmndi:BPMNPlane id=\\"BPMNPlane_1\\" bpmnElement=\\"Process_1\\">
   *            <bpmndi:BPMNShape id=\\"_BPMNShape_StartEvent_2\\" bpmnElement=\\"StartEvent_1\\">
   *                    <dc:Bounds x=\\"173\\" y=\\"102\\" width=\\"36\\" height=\\"36\\" />
   *             </bpmndi:BPMNShape>
   *      </bpmndi:BPMNPlane>
   *   </bpmndi:BPMNDiagram>
   * </bpmn:definitions>
   */
  taskflow?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      taskflow: 'Taskflow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      roleFor: 'number',
      roleType: 'string',
      taskflow: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertPlaybookResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configurations.
   * 
   * @example
   * {}
   */
  config?: string;
  /**
   * @remarks
   * The ID of this call request, which is a unique identifier generated by Alibaba Cloud for this request, and can be used for troubleshooting and problem localization.
   * 
   * @example
   * 39C38A34-****-*****-****-7263B435C316
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertPlaybookResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConvertPlaybookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConvertPlaybookResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyPlaybookRequest extends $dara.Model {
  /**
   * @example
   * playbook description
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * playbook_xxx
   */
  displayName?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 0
   */
  releaseVersion?: string;
  /**
   * @example
   * 137602*****718726
   */
  roleFor?: number;
  /**
   * @example
   * 0
   */
  roleType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 94bc318c-****-4cba-****-801ccb0d739f
   */
  sourcePlaybookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      lang: 'Lang',
      releaseVersion: 'ReleaseVersion',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      sourcePlaybookUuid: 'SourcePlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      lang: 'string',
      releaseVersion: 'string',
      roleFor: 'number',
      roleType: 'string',
      sourcePlaybookUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyPlaybookResponseBody extends $dara.Model {
  data?: CopyPlaybookResponseBodyData;
  page?: CopyPlaybookResponseBodyPage;
  /**
   * @example
   * 2EC05B06-****-5F3E-****-3B1FAD76087A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      page: 'Page',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CopyPlaybookResponseBodyData,
      page: CopyPlaybookResponseBodyPage,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyPlaybookResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CopyPlaybookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CopyPlaybookResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePlaybookRequest extends $dara.Model {
  /**
   * @remarks
   * Description of the playbook.
   * 
   * @example
   * This is a new version
   */
  description?: string;
  /**
   * @remarks
   * Name of the playbook.
   * 
   * This parameter is required.
   * 
   * @example
   * test09
   */
  displayName?: string;
  /**
   * @remarks
   * Language type for receiving messages. Values:
   * 
   * - **zh** (default): Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Playbook TaskFlow type.
   * - **x6** : x6
   * - **bpmn**: bpmn
   * 
   * @example
   * x6
   */
  taskflowType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      lang: 'Lang',
      taskflowType: 'TaskflowType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      lang: 'string',
      taskflowType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePlaybookResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the creation.
   */
  data?: CreatePlaybookResponseBodyData;
  /**
   * @remarks
   * The ID of this call request, a unique identifier generated by Alibaba Cloud for this request, which can be used to troubleshoot and locate issues.
   * 
   * @example
   * B09B40B2-F11E-512C-B755-423F2056C17B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreatePlaybookResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePlaybookResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePlaybookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePlaybookResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugPlaybookRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The playbook UUID.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the playbook UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * f916b93e-e814-459f-9662-xxxxx
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The input parameters that you use to debug the playbook. You can define the parameters based on your business requirements.
   * 
   * @example
   * {
   *    "param1":"a",
   *    "param2":"b"
   * }
   */
  record?: string;
  /**
   * @remarks
   * The XML configuration of the playbook.
   * 
   * >  You can call the [DescribePlaybook](~~DescribePlaybook~~) operation to query the XML configuration of the playbook.
   * 
   * This parameter is required.
   * 
   * @example
   * <?xml version="1.0" encoding="UTF-8"?><bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" targetNamespace="http://bpmn.io/schema/bpmn" id="Definitions_1"><bpmn:process id="Process_1" isExecutable="false"><bpmn:startEvent id="StartEvent_1"/></bpmn:process><bpmndi:BPMNDiagram id="BPMNDiagram_1"><bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1"><bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1"><dc:Bounds height="36.0" width="36.0" x="173.0" y="102.0"/></bpmndi:BPMNShape></bpmndi:BPMNPlane></bpmndi:BPMNDiagram></bpmn:definitions>
   */
  taskflow?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      playbookUuid: 'PlaybookUuid',
      record: 'Record',
      taskflow: 'Taskflow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      playbookUuid: 'string',
      record: 'string',
      taskflow: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugPlaybookResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75E56B2C-C8FA-5A2F-AA08-8745E2AC33EF
   */
  requestId?: string;
  /**
   * @remarks
   * The UUID of the debugging task. You can use the UUID to query the result and other details of the debugging task.
   * 
   * @example
   * 6d412cfa-0905-4567-8a83-xxxxxx
   */
  requestUuid?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      requestUuid: 'RequestUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      requestUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DebugPlaybookResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DebugPlaybookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DebugPlaybookResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteComponentAssetRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the asset.
   * 
   * >  You can call the [DescribeComponentAssets](~~DescribeComponentAssets~~) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12x
   */
  assetId?: number;
  /**
   * @remarks
   * The language of the content within the request and the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      assetId: 'AssetId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetId: 'number',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteComponentAssetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 39C38A34-8532-5D44-B88A-7263B435C316
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteComponentAssetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteComponentAssetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteComponentAssetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePlaybookRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the playbook UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * e99dab31-499b-4307-9248-xxxxxx
   */
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      playbookUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePlaybookResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6F3CA8A9-B5BB-506A-9182-FFE80A6E0584
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePlaybookResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePlaybookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePlaybookResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentAssetFormRequest extends $dara.Model {
  /**
   * @remarks
   * The component name.
   * 
   * This parameter is required.
   * 
   * @example
   * python3
   */
  componentName?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      componentName: 'ComponentName',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentName: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentAssetFormResponseBody extends $dara.Model {
  /**
   * @remarks
   * The metadata of the asset in the component. The value is a JSON array and contains the following fields:
   * 
   * *   **name**: the parameter name.
   * *   **defaultValue**: the default parameter value.
   * *   **description**: the parameter description.
   * *   **required**: indicates whether the parameter is required. Valid values: **true** and **false**.
   * 
   * @example
   * [
   *     {
   *         "defaultValue": "",
   *         "description": "assetname",
   *         "name": "assetname",
   *         "required": true
   *     }
   * ]
   */
  componentAssetForm?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9D1651AC-31CC-5CC4-A14E-626B3FCC1022
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      componentAssetForm: 'ComponentAssetForm',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentAssetForm: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentAssetFormResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeComponentAssetFormResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeComponentAssetFormResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentAssetsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the component.
   * 
   * This parameter is required.
   * 
   * @example
   * python3
   */
  componentName?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      componentName: 'ComponentName',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentName: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentAssetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the assets.
   */
  componentAssets?: DescribeComponentAssetsResponseBodyComponentAssets[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BFEFB76D-DD0E-5529-BD57-0DAC10B9B30F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      componentAssets: 'ComponentAssets',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentAssets: { 'type': 'array', 'itemType': DescribeComponentAssetsResponseBodyComponentAssets },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.componentAssets)) {
      $dara.Model.validateArray(this.componentAssets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentAssetsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeComponentAssetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeComponentAssetsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentListRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the UUIDs of playbooks.
   * 
   * This parameter is required.
   * 
   * @example
   * b724d2b0-3c3b-4223-9bfd-xxxxx
   */
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      playbookUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the components. The value is a JSON array.
   * 
   * @example
   * [
   *     {
   *         "actions": [
   *             {
   *                 "description": "mysql component",
   *                 "name": "storeIdb",
   *                 "parameters": [
   *                     {
   *                         "description": "update the mysql db",
   *                         "name": "updateSql",
   *                         "required": false
   *                     }
   *                 ]
   *             }
   *         ],
   *         "basic": {
   *             "description": "mysq sql component for 5.6",
   *             "logo": "https://img.alicdn.com/tfs/TB1H89IpH3nBKNjSZFMXXaUSFXa-200-200.svg",
   *             "name": "Mysql"
   *         }
   *     }
   * ]
   */
  components?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B0A255B3-495C-56FB-8B6B-DB073F80388A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      components: 'Components',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      components: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeComponentListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeComponentListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentPlaybookRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the UUIDs of playbooks.
   * 
   * This parameter is required.
   * 
   * @example
   * ac343acc-1a61-4084-9a1cxxxxx
   */
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      playbookUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentPlaybookResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the predefined components.
   */
  playbooks?: DescribeComponentPlaybookResponseBodyPlaybooks[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C5F5D6C9-DF1A-5381-92B1-39676F777D20
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      playbooks: 'Playbooks',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playbooks: { 'type': 'array', 'itemType': DescribeComponentPlaybookResponseBodyPlaybooks },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.playbooks)) {
      $dara.Model.validateArray(this.playbooks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentPlaybookResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeComponentPlaybookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeComponentPlaybookResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentsJsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentsJsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration of the JavaScript file for the component.
   * 
   * @example
   * [
   *     {
   *         "js": "https://xxxxx.oss-cn-zhangjiakou.aliyuncs.com/componentUpload/xxxxx",
   *         "name": "python3",
   *         "ownType": "sys"
   *     }
   * ]
   */
  componentsJs?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 58A518BC-E4A8-5BD7-AFEA-366046ED9073
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      componentsJs: 'ComponentsJs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentsJs: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentsJsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeComponentsJsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeComponentsJsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistinctReleasesRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The playbook UUID.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the playbook UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * bc0b8424-535c-4ed5-bd94-xxxxxx
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The MD5 value of the playbook XML configuration.
   * 
   * @example
   * be0a4ef084dd174abe47xxxxx
   */
  taskflowMd5?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      playbookUuid: 'PlaybookUuid',
      taskflowMd5: 'TaskflowMd5',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      playbookUuid: 'string',
      taskflowMd5: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistinctReleasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about versions.
   */
  records?: DescribeDistinctReleasesResponseBodyRecords[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 145CACF6-D276-5197-8549-CB1AD76E2AC8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': DescribeDistinctReleasesResponseBodyRecords },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistinctReleasesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDistinctReleasesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDistinctReleasesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnumItemsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the enumeration item. Valid values:
   * 
   * *   **process**: scenarios
   * 
   * This parameter is required.
   * 
   * @example
   * process
   */
  enumType?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh_cn**: Simplified Chinese (default)
   * *   **en_us**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      enumType: 'EnumType',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enumType: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnumItemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the enumeration item.
   */
  data?: DescribeEnumItemsResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E7698CFB-4E1C-5840-8EC9-691B86729E94
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeEnumItemsResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnumItemsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEnumItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEnumItemsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutePlaybooksRequest extends $dara.Model {
  /**
   * @remarks
   * The entity type of the script input parameter. When you want to query multiple entity types, separate them with commas.
   * - **ip**: IP entity.
   * - **file**: file entity.
   * - **process**: process entity.
   * - **incident**: incident entity.
   * 
   * @example
   * ip,file,process,host
   */
  inputMode?: string;
  /**
   * @remarks
   * The language of the content within the request and the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The input parameter type of the playbook.
   * 
   * *   **template-ip**
   * *   **template-file**
   * *   **template-process**
   * *   **custom**
   * 
   * @example
   * custom
   */
  paramType?: string;
  /**
   * @remarks
   * The playbook name. Fuzzy search is supported.
   * 
   * @example
   * demo_test
   */
  playbookName?: string;
  /**
   * @remarks
   * The playbook UUID.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~) operation to query the playbook UUID.
   * 
   * @example
   * f916b93e-e814-459f-9662-xxxxxx
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      inputMode: 'InputMode',
      lang: 'Lang',
      paramType: 'ParamType',
      playbookName: 'PlaybookName',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputMode: 'string',
      lang: 'string',
      paramType: 'string',
      playbookName: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutePlaybooksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The playbook.
   */
  playbookMetrics?: DescribeExecutePlaybooksResponseBodyPlaybookMetrics[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 88A39217-2802-5B1E-BA2B-CF1BBC43C1F5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      playbookMetrics: 'PlaybookMetrics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playbookMetrics: { 'type': 'array', 'itemType': DescribeExecutePlaybooksResponseBodyPlaybookMetrics },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.playbookMetrics)) {
      $dara.Model.validateArray(this.playbookMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutePlaybooksResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeExecutePlaybooksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeExecutePlaybooksResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFieldRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The key of the global configuration. Valid values:
   * 
   * *   **soar_filed_tags**: queries the input template of the playbook.
   * 
   * This parameter is required.
   * 
   * @example
   * soar_filed_tags
   */
  queryKey?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      queryKey: 'QueryKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      queryKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFieldResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration content.
   * 
   * @example
   * ["ip","name","hostinfo","md5"]
   */
  fields?: string;
  /**
   * @remarks
   * The name of the global configuration.
   * 
   * @example
   * soar_filed_tags
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BCDE6498-83CC-50A1-8307-3D5A539C42F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
      name: 'Name',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: 'string',
      name: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFieldResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFieldResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeFieldResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupProductionsRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 1182415068150980
   */
  roleFor?: number;
  /**
   * @example
   * 0
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      roleFor: 'number',
      roleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupProductionsResponseBody extends $dara.Model {
  data?: DescribeGroupProductionsResponseBodyData[];
  page?: DescribeGroupProductionsResponseBodyPage;
  /**
   * @example
   * 358E012F-B516-599D-9ED0-A1A361CDE615
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      page: 'Page',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeGroupProductionsResponseBodyData },
      page: DescribeGroupProductionsResponseBodyPage,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupProductionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGroupProductionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGroupProductionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLatestRecordSchemaRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the UUIDs of playbooks.
   * 
   * This parameter is required.
   * 
   * @example
   * c5c88b5e-97ca-435d-8c20-xxxxxx
   */
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      playbookUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLatestRecordSchemaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The output structure information of the playbook.
   */
  playbookNodeSchema?: DescribeLatestRecordSchemaResponseBodyPlaybookNodeSchema;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 10B92EE1-4597-593B-A131-7A17D25EF5C9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      playbookNodeSchema: 'PlaybookNodeSchema',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playbookNodeSchema: DescribeLatestRecordSchemaResponseBodyPlaybookNodeSchema,
      requestId: 'string',
    };
  }

  validate() {
    if(this.playbookNodeSchema && typeof (this.playbookNodeSchema as any).validate === 'function') {
      (this.playbookNodeSchema as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLatestRecordSchemaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLatestRecordSchemaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeLatestRecordSchemaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeParamTagsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The name of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * python3_2
   */
  nodeName?: string;
  /**
   * @remarks
   * The playbook UUID.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the playbook UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * ac343acc-1a61-4084-9a1c-xxxxxxx
   */
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      nodeName: 'NodeName',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      nodeName: 'string',
      playbookUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeParamTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration of the recommended path.
   */
  paramReferredPaths?: DescribeNodeParamTagsResponseBodyParamReferredPaths[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6BE94351-712A-505D-A40A-BC77CC8254A9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      paramReferredPaths: 'ParamReferredPaths',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramReferredPaths: { 'type': 'array', 'itemType': DescribeNodeParamTagsResponseBodyParamReferredPaths },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.paramReferredPaths)) {
      $dara.Model.validateArray(this.paramReferredPaths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeParamTagsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNodeParamTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeNodeParamTagsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeUsedInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The node name of the component.
   * 
   * This parameter is required.
   * 
   * @example
   * python3_2
   */
  nodeName?: string;
  /**
   * @remarks
   * The playbook UUID.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the playbook UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * ac343acc-1a61-4084-9a1c-xxxx
   */
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      nodeName: 'NodeName',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      nodeName: 'string',
      playbookUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeUsedInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The node reference information. The value is in the JSON format and contains the following fields:
   * 
   * *   **action**: the referencing action. This field contains the following information:
   * 
   *     *   **name**: the name of the referencing node.
   *     *   **inputParams**: the parameter settings of the referencing node.
   * 
   * @example
   * {
   *     "action": [
   *         {
   *             "name": "query_books",
   *             "inputParams": [
   *                 {
   *                     "referInfos": [
   *                         "${play_group.datalist.*.ids}"
   *                     ],
   *                     "name": "querySql"
   *                 }
   *             ]
   *         }
   *     ]
   * }
   */
  nodeUsedInfos?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3B10F836-C2B1-54FA-AB59-7591B548FB59
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeUsedInfos: 'NodeUsedInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeUsedInfos: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeUsedInfosResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNodeUsedInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeNodeUsedInfosResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNotifyTemplateListRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 137602425xxx8726
   */
  roleFor?: number;
  /**
   * @example
   * 0
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      roleFor: 'number',
      roleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNotifyTemplateListResponseBody extends $dara.Model {
  data?: DescribeNotifyTemplateListResponseBodyData[];
  page?: DescribeNotifyTemplateListResponseBodyPage;
  /**
   * @example
   * B3FED5B9-190A-5952-93A4-24FBF0F0C573
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      page: 'Page',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeNotifyTemplateListResponseBodyData },
      page: DescribeNotifyTemplateListResponseBodyPage,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNotifyTemplateListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNotifyTemplateListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeNotifyTemplateListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenApiInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DescribePopApiItemList
   */
  apiName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2018-12-03
   */
  apiVersion?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Sas
   */
  popCode?: string;
  /**
   * @example
   * 1592757xxx002956
   */
  roleFor?: number;
  /**
   * @example
   * 0
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      apiVersion: 'ApiVersion',
      lang: 'Lang',
      popCode: 'PopCode',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      apiVersion: 'string',
      lang: 'string',
      popCode: 'string',
      roleFor: 'number',
      roleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenApiInfoResponseBody extends $dara.Model {
  data?: DescribeOpenApiInfoResponseBodyData;
  /**
   * @example
   * 358E012F-B516-599D-9ED0-A1A361CDE615
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeOpenApiInfoResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenApiInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOpenApiInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOpenApiInfoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenApiListRequest extends $dara.Model {
  /**
   * @example
   * DescribePopApiItemList
   */
  apiName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2021-10-01
   */
  apiVersion?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Sas
   */
  popCode?: string;
  /**
   * @example
   * 137602xxx8718726
   */
  roleFor?: number;
  /**
   * @example
   * 0
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      apiVersion: 'ApiVersion',
      lang: 'Lang',
      popCode: 'PopCode',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      apiVersion: 'string',
      lang: 'string',
      popCode: 'string',
      roleFor: 'number',
      roleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenApiListResponseBody extends $dara.Model {
  data?: DescribeOpenApiListResponseBodyData;
  /**
   * @example
   * EF2ECA2D-D8E6-5021-BF5C-19DD6D52C5B2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeOpenApiListResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenApiListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOpenApiListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOpenApiListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookRequest extends $dara.Model {
  /**
   * @remarks
   * The flag that indicates whether the playbook is of the debugging or published version. Valid values:
   * 
   * *   **1**: playbook of the debugging version
   * *   **0**: playbook of the published version
   * 
   * @example
   * 0
   */
  debugFlag?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the UUIDs of playbooks.
   * 
   * This parameter is required.
   * 
   * @example
   * 9030076b-6733-4842-b05a-xxxxx
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The MD5 hash value of the playbook.
   * 
   * @example
   * 7a8f608dc64c242632aa578xxxxx
   */
  taskflowMd5?: string;
  static names(): { [key: string]: string } {
    return {
      debugFlag: 'DebugFlag',
      lang: 'Lang',
      playbookUuid: 'PlaybookUuid',
      taskflowMd5: 'TaskflowMd5',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debugFlag: 'number',
      lang: 'string',
      playbookUuid: 'string',
      taskflowMd5: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration of the playbook.
   */
  playbook?: DescribePlaybookResponseBodyPlaybook;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2989BC59-E9F0-5C83-B453-B368857649C8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      playbook: 'Playbook',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playbook: DescribePlaybookResponseBodyPlaybook,
      requestId: 'string',
    };
  }

  validate() {
    if(this.playbook && typeof (this.playbook as any).validate === 'function') {
      (this.playbook as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePlaybookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePlaybookResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookInputOutputRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the UUIDs of playbooks.
   * 
   * This parameter is required.
   * 
   * @example
   * b724d2b0-3c3b-4223-9bfd-xxxxxxx
   */
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      playbookUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookInputOutputResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configurations.
   */
  config?: DescribePlaybookInputOutputResponseBodyConfig;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 688B4CCD-5272-5DCF-9D76-FE5EFEF545F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: DescribePlaybookInputOutputResponseBodyConfig,
      requestId: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookInputOutputResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePlaybookInputOutputResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePlaybookInputOutputResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the UUIDs of playbooks.
   * 
   * This parameter is required.
   * 
   * @example
   * 2a687089-d4dd-47d4-9709-xxxxxx
   */
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      playbookUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookMetricsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the playbook.
   */
  metrics?: DescribePlaybookMetricsResponseBodyMetrics;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 567D3D0B-2153-5860-BF9A-F9DEED55FB73
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: DescribePlaybookMetricsResponseBodyMetrics,
      requestId: 'string',
    };
  }

  validate() {
    if(this.metrics && typeof (this.metrics as any).validate === 'function') {
      (this.metrics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookMetricsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePlaybookMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePlaybookMetricsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookNodesOutputRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The name of the component node.
   * 
   * This parameter is required.
   * 
   * @example
   * DataFormat_1
   */
  nodeName?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the UUIDs of playbooks.
   * 
   * This parameter is required.
   * 
   * @example
   * ac343acc-1a61-4084-9a1c-xxxxx
   */
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      nodeName: 'NodeName',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      nodeName: 'string',
      playbookUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookNodesOutputResponseBody extends $dara.Model {
  /**
   * @remarks
   * The output data of the component node.
   */
  playbookNodesOutput?: DescribePlaybookNodesOutputResponseBodyPlaybookNodesOutput;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A491170C-FE1F-520E-83D4-72ED205B72ED
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      playbookNodesOutput: 'PlaybookNodesOutput',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playbookNodesOutput: DescribePlaybookNodesOutputResponseBodyPlaybookNodesOutput,
      requestId: 'string',
    };
  }

  validate() {
    if(this.playbookNodesOutput && typeof (this.playbookNodesOutput as any).validate === 'function') {
      (this.playbookNodesOutput as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookNodesOutputResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePlaybookNodesOutputResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePlaybookNodesOutputResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookNumberMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookNumberMetricsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistics.
   */
  metrics?: DescribePlaybookNumberMetricsResponseBodyMetrics;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D4CC979E-3D5B-5A6A-BC87-C93C9E861C7B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: DescribePlaybookNumberMetricsResponseBodyMetrics,
      requestId: 'string',
    };
  }

  validate() {
    if(this.metrics && typeof (this.metrics as any).validate === 'function') {
      (this.metrics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookNumberMetricsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePlaybookNumberMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePlaybookNumberMetricsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookReleasesRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The page number. Default value: 1. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. If you do not specify the PageSize parameter, 10 entries are returned by default.
   * 
   * >  We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The playbook UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * ac343acc-1a61-4084-9a1c-xxxx
   */
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      playbookUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookReleasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  page?: DescribePlaybookReleasesResponseBodyPage;
  /**
   * @remarks
   * The information about the playbook version.
   */
  records?: DescribePlaybookReleasesResponseBodyRecords[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3DFBE11C-6EB6-5166-92D6-3397796AFE1E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      records: 'Records',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: DescribePlaybookReleasesResponseBodyPage,
      records: { 'type': 'array', 'itemType': DescribePlaybookReleasesResponseBodyRecords },
      requestId: 'string',
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookReleasesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePlaybookReleasesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePlaybookReleasesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybooksRequest extends $dara.Model {
  /**
   * @remarks
   * Activation status of the playbook. Values:
   * 
   * - **1**: Indicates the playbook is activated.
   * - **0**: Indicates the playbook is not activated.
   * 
   * @example
   * 1
   */
  active?: number;
  /**
   * @remarks
   * End time for the query, in 13-digit timestamp format.
   * 
   * @example
   * 1683858064361
   */
  endMillis?: number;
  /**
   * @remarks
   * Specifies the language type for the request and response, default is **zh**. Values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The name of the playbook.
   * 
   * @example
   * demo_playbook
   */
  name?: string;
  /**
   * @remarks
   * The sorting logic, with a default value of **desc**. Values:
   * - **desc**: Descending order.
   * - **asc**: Ascending order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * Type of the playbook. Values:
   * 
   * - **preset**: Predefined playbook.
   * - **user**: Custom playbook.
   * 
   * @example
   * user
   */
  ownType?: string;
  /**
   * @remarks
   * Sets the page number from which to start displaying the query results. The default value is 1, indicating the first page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Specifies the maximum number of items to display per page in a paginated query. The default number of items per page is 20. If the PageSize parameter is empty, it will return 10 items by default.
   * > It is recommended that the PageSize value is not empty.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The trigger method for the playbook, with a default value of **query all**. Values:
   * - **template-incident**: Security incident.
   * - **template-ip**: IP entity.
   * - **template-file**: File entity.
   * - **template-process**: Process entity.
   * - **template-alert**: Security alert.
   * - **template-domain**: Domain entity.
   * - **template-container**: Container entity.
   * - **template-host**: Host entity.
   * - **template-custom**: Custom.
   * 
   * @example
   * template-alert
   */
  paramTypes?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * > You can use the UUID to query specific playbook information.
   * > - Call the [DescribePlaybooks](~~DescribePlaybooks~~) API to obtain this parameter.
   * 
   * @example
   * 8baa6cff-319e-4ede-97bc-1xxxxxx
   */
  playbookUuid?: string;
  /**
   * @remarks
   * UUID List of the playbook.
   * 
   * Note You can use the UUID list to query specific playbook information.
   * Call the DescribePlaybooks API to obtain this parameter.
   * 
   * @example
   * 8baa6cff-319e-4ede-97bc-1xxxxxx,7745e6cff-319e-4ede-97bc-1xxxxxx
   */
  playbookUuids?: string;
  /**
   * @remarks
   * The sorting basis, with a default value of **1**. Values:
   * - **1**: Last modified time.
   * - **2**: Most recent execution time.
   * 
   * @example
   * 1
   */
  sort?: string;
  /**
   * @remarks
   * Start time for the query, in 13-digit timestamp format.
   * 
   * @example
   * 1683526277415
   */
  startMillis?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      endMillis: 'EndMillis',
      lang: 'Lang',
      name: 'Name',
      order: 'Order',
      ownType: 'OwnType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      paramTypes: 'ParamTypes',
      playbookUuid: 'PlaybookUuid',
      playbookUuids: 'PlaybookUuids',
      sort: 'Sort',
      startMillis: 'StartMillis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      endMillis: 'number',
      lang: 'string',
      name: 'string',
      order: 'string',
      ownType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      paramTypes: 'string',
      playbookUuid: 'string',
      playbookUuids: 'string',
      sort: 'string',
      startMillis: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybooksResponseBody extends $dara.Model {
  /**
   * @remarks
   * Pagination query information.
   */
  page?: DescribePlaybooksResponseBodyPage;
  /**
   * @remarks
   * List of playbooks.
   */
  playbooks?: DescribePlaybooksResponseBodyPlaybooks[];
  /**
   * @remarks
   * The ID of the current request, generated by Alibaba Cloud as a unique identifier for troubleshooting and problem localization.
   * 
   * @example
   * 138B5AB7-****-5814-87A3-E3E****F207E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      playbooks: 'Playbooks',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: DescribePlaybooksResponseBodyPage,
      playbooks: { 'type': 'array', 'itemType': DescribePlaybooksResponseBodyPlaybooks },
      requestId: 'string',
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    if(Array.isArray(this.playbooks)) {
      $dara.Model.validateArray(this.playbooks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybooksResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePlaybooksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePlaybooksResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePopApiRequest extends $dara.Model {
  /**
   * @remarks
   * The operation name of the Alibaba Cloud service.
   * 
   * This parameter is required.
   * 
   * @example
   * DescribeInstanceInfo
   */
  apiName?: string;
  /**
   * @remarks
   * The version number of the API.
   * 
   * >  You can call the [DescribePopApiVersionList](~~DescribePopApiVersionList~~) operation to query the version number.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-10-01
   */
  apiVersion?: string;
  /**
   * @remarks
   * The environment in which the API operation parameter is used. Set the value to online.
   * 
   * This parameter is required.
   * 
   * @example
   * online
   */
  env?: string;
  /**
   * @remarks
   * The POP code of the Alibaba Cloud service.
   * 
   * >  You can call the [DescribeApiList](~~DescribeApiList~~) operation to query the POP code.
   * 
   * This parameter is required.
   * 
   * @example
   * Sas
   */
  popCode?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      apiVersion: 'ApiVersion',
      env: 'Env',
      popCode: 'PopCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      apiVersion: 'string',
      env: 'string',
      popCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePopApiResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the API.
   * 
   * @example
   * AddAssetCleanConfig
   */
  apiName?: string;
  /**
   * @remarks
   * The information about the API.
   */
  openApiMetaList?: DescribePopApiResponseBodyOpenApiMetaList[];
  /**
   * @remarks
   * The POP code of the Alibaba Cloud service.
   * 
   * @example
   * Sas
   */
  popCode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1A01B0BA-CFC4-5813-9EB0-A5DA15FA95AE
   */
  requestId?: string;
  /**
   * @remarks
   * The version of the API.
   * 
   * @example
   * 2019-09-10
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      openApiMetaList: 'OpenApiMetaList',
      popCode: 'PopCode',
      requestId: 'RequestId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      openApiMetaList: { 'type': 'array', 'itemType': DescribePopApiResponseBodyOpenApiMetaList },
      popCode: 'string',
      requestId: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.openApiMetaList)) {
      $dara.Model.validateArray(this.openApiMetaList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePopApiResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePopApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePopApiResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePopApiItemListRequest extends $dara.Model {
  /**
   * @remarks
   * The API operation name of the Alibaba Cloud service. Fuzzy match is supported.
   * 
   * @example
   * DescribePopApiItemList
   */
  apiName?: string;
  /**
   * @remarks
   * The version number of the API.
   * 
   * >  You can call the [DescribePopApiVersionList](~~DescribePopApiVersionList~~) operation to query the version number.
   * 
   * This parameter is required.
   * 
   * @example
   * 2018-12-03
   */
  apiVersion?: string;
  /**
   * @remarks
   * The environment in which the API operation parameters are used. Set the value to online.
   * 
   * This parameter is required.
   * 
   * @example
   * online
   */
  env?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The POP code of the Alibaba Cloud service.
   * 
   * >  You can call the [DescribeApiList](~~DescribeApiList~~) operation to query the POP code.
   * 
   * This parameter is required.
   * 
   * @example
   * Sas
   */
  popCode?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      apiVersion: 'ApiVersion',
      env: 'Env',
      lang: 'Lang',
      popCode: 'PopCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      apiVersion: 'string',
      env: 'string',
      lang: 'string',
      popCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePopApiItemListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The names of API operations.
   */
  names?: string[];
  /**
   * @remarks
   * The POP code of the Alibaba Cloud service.
   * 
   * @example
   * Sas
   */
  popCode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6336D603-7028-52DE-AD88-E34AA5248355
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  total?: number;
  /**
   * @remarks
   * The version number of the API for the Alibaba Cloud service.
   * 
   * @example
   * 2018-12-03
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      names: 'Names',
      popCode: 'PopCode',
      requestId: 'RequestId',
      total: 'Total',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      names: { 'type': 'array', 'itemType': 'string' },
      popCode: 'string',
      requestId: 'string',
      total: 'number',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.names)) {
      $dara.Model.validateArray(this.names);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePopApiItemListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePopApiItemListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePopApiItemListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessStatisticsRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 1709821xxxxx3093
   */
  roleFor?: string;
  /**
   * @example
   * 0
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      roleFor: 'string',
      roleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessStatisticsResponseBody extends $dara.Model {
  metrics?: DescribeProcessStatisticsResponseBodyMetrics;
  /**
   * @example
   * 4CFC0F8A-D600-5FFF-A0DF-3121C4C1B90F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: DescribeProcessStatisticsResponseBodyMetrics,
      requestId: 'string',
    };
  }

  validate() {
    if(this.metrics && typeof (this.metrics as any).validate === 'function') {
      (this.metrics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessStatisticsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeProcessStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeProcessStatisticsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessTaskCountRequest extends $dara.Model {
  /**
   * @remarks
   * Collection of entity UUIDs.
   * 
   * This parameter is required.
   */
  entityUuidList?: string[];
  /**
   * @remarks
   * Language type for request and response messages. Values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * User ID for administrators to switch to other member\\"s perspective.
   * 
   * @example
   * 104739******259
   */
  roleFor?: number;
  /**
   * @remarks
   * View type.
   * 
   * - **0**: Current Alibaba Cloud account view.
   * - **1**: View for all accounts under the enterprise.
   * 
   * @example
   * 0
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      entityUuidList: 'EntityUuidList',
      lang: 'Lang',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityUuidList: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      roleFor: 'number',
      roleType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entityUuidList)) {
      $dara.Model.validateArray(this.entityUuidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessTaskCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * Transmitted data.
   */
  data?: DescribeProcessTaskCountResponseBodyData[];
  /**
   * @remarks
   * The ID of this call request, which is a unique identifier generated by Alibaba Cloud for this request, used for troubleshooting and problem localization.
   * 
   * @example
   * e866cce0-****-41de-817e-****8d5e2650
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeProcessTaskCountResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessTaskCountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeProcessTaskCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeProcessTaskCountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * *   **desc** (default)
   * *   **asc**
   * 
   * @example
   * desc
   */
  direction?: string;
  /**
   * @remarks
   * The name of the handling entity.
   * 
   * @example
   * 127.0.0.1
   */
  entityName?: string;
  /**
   * @remarks
   * The type of the handling entity. Valid values:
   * 
   * *   **ip**
   * *   **file**
   * *   **process**
   * 
   * @example
   * ip
   */
  entityType?: string;
  entityUuid?: string;
  eventUuid?: string;
  /**
   * @remarks
   * The field that you use to sort the result.
   * 
   * >  You can obtain the field from the response result.
   * 
   * @example
   * gmtCreate
   */
  orderField?: string;
  /**
   * @remarks
   * The page number. Default value: 1. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. If you do not specify the PageSize parameter, 10 entries are returned by default.
   * 
   * >  We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The handling entity, handling scenario, or handling parameter that is used for fuzzy match.
   * 
   * @example
   * 12.x.x.x
   */
  paramContent?: string;
  /**
   * @remarks
   * The end of the time range for a handling task. The value is a 13-digit timestamp.
   * 
   * @example
   * 1700031183572
   */
  processActionEnd?: number;
  /**
   * @remarks
   * The beginning of the time range for a handling task. The value is a 13-digit timestamp.
   * 
   * @example
   * 1700031183572
   */
  processActionStart?: number;
  /**
   * @remarks
   * The end of the time range for an unblocking task. The value is a 13-digit timestamp.
   * 
   * @example
   * 1700031183572
   */
  processRemoveEnd?: number;
  /**
   * @remarks
   * The beginning of the time range for an unblocking task. The value is a 13-digit timestamp.
   * 
   * @example
   * 1700031183572
   */
  processRemoveStart?: number;
  /**
   * @remarks
   * The UUID of the handling policy.
   * 
   * >  You can call the [ListDisposeStrategy](https://help.aliyun.com/document_detail/2584440.html) operation to query the UUID of the handling policy.
   * 
   * @example
   * 92af3c79-1754-4646-9366-9ddbd1e45536_xxxx
   */
  processStrategyUuid?: string;
  /**
   * @remarks
   * The scenario code of the handling task.
   * 
   * >  You can call the [DescribeEnumItems](~~DescribeEnumItems~~) operation to query the scenario code of the handling task. This parameter is available when you set **EnumType** to **process**.
   * 
   * @example
   * event_xxx_whole_process
   */
  sceneCode?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is specified in the handling task.
   * 
   * @example
   * 125xxxxx9870
   */
  scope?: string;
  /**
   * @remarks
   * The triggering source of the handling task. The value is a string array. Valid values:
   * 
   * *   **system**: triggered when you manually handle an event
   * *   **custom**: triggered by an event based on an automatic response rule
   * *   **custom_alert**: triggered by an alert based on an automatic response rule
   * *   **soar-manual**: triggered when you use SOAR to manually run a playbook
   * *   **soar-mdr**: triggered by Managed Security Service
   * 
   * @example
   * ["system"]
   */
  source?: string;
  /**
   * @remarks
   * The unique identifier of the handling task.
   * 
   * >  This parameter is used to query a specific task. You can obtain the value from the response result.
   * 
   * @example
   * 150xxxxxxxxx95066
   */
  taskId?: string;
  /**
   * @remarks
   * The status of the handling task. The value is a string. Valid values:
   * 
   * *   **11**: being handled
   * *   **21**: being blocked
   * *   **22**: being quarantined
   * *   **23**: completed
   * *   **24**: added to the whitelist
   * *   **20**: successful
   * *   **90**: failed
   * *   **91**: unblocking failed
   * *   **92**: restoring quarantined files failed
   * 
   * @example
   * ["11","21"]
   */
  taskStatus?: string;
  triggerSource?: string;
  /**
   * @remarks
   * The cloud service that is associated with the handling task. The value is a string. Valid values:
   * 
   * *   **WAF**: Web Application Firewall (WAF)
   * *   **CFW**: Cloud Firewall
   * *   **Aegis**: Security Center
   * 
   * @example
   * ["WAF"]
   */
  yunCode?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      entityName: 'EntityName',
      entityType: 'EntityType',
      entityUuid: 'EntityUuid',
      eventUuid: 'EventUuid',
      orderField: 'OrderField',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      paramContent: 'ParamContent',
      processActionEnd: 'ProcessActionEnd',
      processActionStart: 'ProcessActionStart',
      processRemoveEnd: 'ProcessRemoveEnd',
      processRemoveStart: 'ProcessRemoveStart',
      processStrategyUuid: 'ProcessStrategyUuid',
      sceneCode: 'SceneCode',
      scope: 'Scope',
      source: 'Source',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      triggerSource: 'TriggerSource',
      yunCode: 'YunCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      entityName: 'string',
      entityType: 'string',
      entityUuid: 'string',
      eventUuid: 'string',
      orderField: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      paramContent: 'string',
      processActionEnd: 'number',
      processActionStart: 'number',
      processRemoveEnd: 'number',
      processRemoveStart: 'number',
      processStrategyUuid: 'string',
      sceneCode: 'string',
      scope: 'string',
      source: 'string',
      taskId: 'string',
      taskStatus: 'string',
      triggerSource: 'string',
      yunCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  page?: DescribeProcessTasksResponseBodyPage;
  /**
   * @remarks
   * The handling tasks.
   */
  processTasks?: DescribeProcessTasksResponseBodyProcessTasks[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E7698CFB-4E1C-5840-8EC9-691B86729E94
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      processTasks: 'ProcessTasks',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: DescribeProcessTasksResponseBodyPage,
      processTasks: { 'type': 'array', 'itemType': DescribeProcessTasksResponseBodyProcessTasks },
      requestId: 'string',
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    if(Array.isArray(this.processTasks)) {
      $dara.Model.validateArray(this.processTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessTasksResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeProcessTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeProcessTasksResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarRecordActionOutputListRequest extends $dara.Model {
  /**
   * @remarks
   * The UUID of the component action.
   * 
   * >  You can call the [DescribeSoarTaskAndActions](~~DescribeSoarTaskAndActions~~) operation to query the UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2202c90d-fa93-4726-bc32-xxxxxx
   */
  actionUuid?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The page number. Default value: 1. Pages start from page 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. If you leave this parameter empty, 10 entries are returned on each page.
   * 
   * >  We recommend that you do not leave this parameter empty.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      actionUuid: 'ActionUuid',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionUuid: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarRecordActionOutputListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data that is returned when the component action is performed. The value is a JSON array.
   * 
   * >  The format of the output data is determined by the component that is configured when the playbook is written.
   * 
   * @example
   * [
   *     {
   *         "a": "a",
   *         "taskname": "92af3c79-1754-4646-9366-9ddbd1e45536_xxxx",
   *         "log_time": 1699868849000
   *     }
   * ]
   */
  actionOutputs?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6A2BF9CF-3E32-5E45-A79B-8F67E0A4FE90
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      actionOutputs: 'ActionOutputs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionOutputs: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarRecordActionOutputListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSoarRecordActionOutputListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSoarRecordActionOutputListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarRecordInOutputRequest extends $dara.Model {
  /**
   * @remarks
   * The UUID of the component action.
   * 
   * >  You can call the [DescribeSoarTaskAndActions](~~DescribeSoarTaskAndActions~~) operation to query the UUIDs of component actions.
   * 
   * This parameter is required.
   * 
   * @example
   * 0531ff66-dd05-4f24-84bf-xxxxxxxx
   */
  actionUuid?: string;
  /**
   * @remarks
   * The language of the content within the request and the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      actionUuid: 'ActionUuid',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionUuid: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarRecordInOutputResponseBody extends $dara.Model {
  /**
   * @remarks
   * The execution result of the component action.
   * 
   * @example
   * {
   *     "actionUuid": "3896a25d-4967-493c-942e-4e60f27da1f7-xxxxx",
   *     "outputSummary": {
   *         "datalist": [
   *             {
   *                 "a": "a"
   *             }
   *         ],
   *         "total_data_successful": 1,
   *         "total_data": 1,
   *         "total_exe_successful": 1,
   *         "total_exe": 1,
   *         "total_data_with_dup": 1,
   *         "status": true
   *     },
   *     "outputSchema": {
   *         "a": "String",
   *         "startTime": "DateTime"
   *     },
   *     "inputParams": {
   *         "inputData": [
   *             {
   *                 "outputFields": {
   *                     "a": "a"
   *                 }
   *             }
   *         ],
   *         "totalSize": 1
   *     },
   *     "startTime": "2023-11-13 17:47:28.645",
   *     "taskName": "92af3c79-1754-4646-9366-9ddbxxxxx"
   * }
   */
  inOutputInfo?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 372D8B41-AF8D-573A-9B3F-0924950F241F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      inOutputInfo: 'InOutputInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inOutputInfo: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarRecordInOutputResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSoarRecordInOutputResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSoarRecordInOutputResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the task execution, in 13-digit timestamp format.
   * 
   * @example
   * 1683772744953
   */
  endMillis?: number;
  /**
   * @remarks
   * Set the language type for requests and received messages. The default is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Set which page to start displaying the query results from. The default value is 1, indicating the first page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Specify the maximum number of data entries per page when performing a paginated query. The default number of entries per page is 20. If the PageSize parameter is empty, it will return 10 entries by default.
   * > It is recommended not to leave the PageSize value empty.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The UUID of the playbook.
   * > You can obtain this parameter by calling the [DescribePlaybooks](~~DescribePlaybooks~~) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 8f55e76d-b5d5-4720-9cd7-xxxxx
   */
  playbookUuid?: string;
  /**
   * @remarks
   * UUID of the playbook task execution.
   * > You can obtain this parameter by calling the [DescribeSoarRecords](https://help.aliyun.com/document_detail/2627455.html) interface.
   * 
   * @example
   * 6d412cfa-0905-4567-8a83-xxxxxx
   */
  requestUuid?: string;
  /**
   * @remarks
   * The start time of the task execution, in 13-digit timestamp format.
   * 
   * @example
   * 1683526284584
   */
  startMillis?: number;
  /**
   * @remarks
   * The status of the task execution. Values:
   * 
   * - **success**: Successful task.
   * - **failed**: Failed task.
   * - **inprogress**: Task in progress
   * 
   * @example
   * inprogress
   */
  taskStatus?: string;
  /**
   * @remarks
   * The MD5 value of the playbook configuration.
   * 
   * @example
   * be0a4ef084dd174abe478df52xxxxx
   */
  taskflowMd5?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID that executed the playbook task.
   * 
   * @example
   * 127xxxx4392
   */
  triggerUser?: string;
  static names(): { [key: string]: string } {
    return {
      endMillis: 'EndMillis',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      playbookUuid: 'PlaybookUuid',
      requestUuid: 'RequestUuid',
      startMillis: 'StartMillis',
      taskStatus: 'TaskStatus',
      taskflowMd5: 'TaskflowMd5',
      triggerUser: 'TriggerUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endMillis: 'number',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      playbookUuid: 'string',
      requestUuid: 'string',
      startMillis: 'number',
      taskStatus: 'string',
      taskflowMd5: 'string',
      triggerUser: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Information displayed on the page.
   * 
   * This parameter is required.
   */
  page?: DescribeSoarRecordsResponseBodyPage;
  /**
   * @remarks
   * The ID of the current request, generated by Alibaba Cloud as a unique identifier for the request, which can be used for troubleshooting and problem localization.
   * 
   * @example
   * 601C2DAC-6A67-5237-BEE8-5BF1CEE96296
   */
  requestId?: string;
  /**
   * @remarks
   * Execution record result set.
   */
  soarExecuteRecords?: DescribeSoarRecordsResponseBodySoarExecuteRecords[];
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      requestId: 'RequestId',
      soarExecuteRecords: 'SoarExecuteRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: DescribeSoarRecordsResponseBodyPage,
      requestId: 'string',
      soarExecuteRecords: { 'type': 'array', 'itemType': DescribeSoarRecordsResponseBodySoarExecuteRecords },
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    if(Array.isArray(this.soarExecuteRecords)) {
      $dara.Model.validateArray(this.soarExecuteRecords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarRecordsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSoarRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSoarRecordsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarTaskAndActionsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response.
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The playbook UUID.
   * 
   * @example
   * 1077f2f9-25e8-42d9-bfdf-1528e1313f6d
   */
  requestUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      requestUuid: 'RequestUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      requestUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarTaskAndActionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The execution details of each task.
   */
  details?: DescribeSoarTaskAndActionsResponseBodyDetails;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 18017A93-3D5D-503A-8308-914543F1CBA3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      details: 'Details',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: DescribeSoarTaskAndActionsResponseBodyDetails,
      requestId: 'string',
    };
  }

  validate() {
    if(this.details && typeof (this.details as any).validate === 'function') {
      (this.details as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarTaskAndActionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSoarTaskAndActionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSoarTaskAndActionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSophonCommandsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the command. Fuzzy match is supported.
   * 
   * @example
   * waf_process
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSophonCommandsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The commands.
   */
  data?: DescribeSophonCommandsResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1E1EC464-3BD7-518F-9937-BCC12E6855FE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeSophonCommandsResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSophonCommandsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSophonCommandsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSophonCommandsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVendorApiListRequest extends $dara.Model {
  /**
   * @example
   * AddAssetCleanConfig
   */
  apiName?: string;
  /**
   * @example
   * Create
   */
  keyWord?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * waf
   */
  productCode?: string;
  /**
   * @example
   * Azure
   */
  vendorCode?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      keyWord: 'KeyWord',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      vendorCode: 'VendorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      keyWord: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productCode: 'string',
      vendorCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVendorApiListResponseBody extends $dara.Model {
  apiList?: DescribeVendorApiListResponseBodyApiList[];
  page?: DescribeVendorApiListResponseBodyPage;
  /**
   * @example
   * E7698CFB-****-5840-8EC9-691B86729E94
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiList: 'ApiList',
      page: 'Page',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiList: { 'type': 'array', 'itemType': DescribeVendorApiListResponseBodyApiList },
      page: DescribeVendorApiListResponseBodyPage,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.apiList)) {
      $dara.Model.validateArray(this.apiList);
    }
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVendorApiListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVendorApiListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVendorApiListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescriberPython3ScriptLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UUID that is returned when the Python3 script is run.
   * 
   * >  You can call the [RunPython3Script](~~RunPython3Script~~) operation to query the UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 69edc2b4-c95c-424f-9114-xxxxxxx
   */
  requestUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      requestUuid: 'RequestUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      requestUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescriberPython3ScriptLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D22D8A0C-6E86-57B2-A142-929184122AB1
   */
  requestId?: string;
  /**
   * @remarks
   * The operational logs of the Python3 script.
   * 
   * @example
   * {
   *     "logs": [
   *         {
   *             "message": "function input is {}"
   *         }
   *     ]
   * }
   */
  runResult?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      runResult: 'RunResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      runResult: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescriberPython3ScriptLogsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescriberPython3ScriptLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescriberPython3ScriptLogsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyComponentAssetRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the asset. The value is a JSON object.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "name": "test asset",
   *     "componentName": "SLS",
   *     "params": [
   *         {
   *             "name": "end_point",
   *             "value": "xxx"
   *         },
   *         {
   *             "name": "sub_id",
   *             "value": "xxxx"
   *         },
   *         {
   *             "name": "access_key",
   *             "value": "xxxx"
   *         }
   *     ]
   * }
   */
  assetConfig?: string;
  /**
   * @remarks
   * The language of the content within the request and response.
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      assetConfig: 'AssetConfig',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetConfig: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyComponentAssetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1C5F11E9-464E-51F0-9296-43BB312A0557
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyComponentAssetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyComponentAssetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyComponentAssetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPlaybookRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the playbook.
   * 
   * @example
   * demo test task
   */
  description?: string;
  /**
   * @remarks
   * The display name of the playbook.
   * 
   * This parameter is required.
   * 
   * @example
   * aliyun_waf_test_playbook
   */
  displayName?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the UUIDs of playbooks.
   * 
   * This parameter is required.
   * 
   * @example
   * 8baa6cff-319e-4ede-97bc-1586c35e61f8
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The XML configuration of the playbook.
   * 
   * @example
   * <?xml version="1.0" encoding="UTF-8"?><bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" targetNamespace="http://bpmn.io/schema/bpmn" id="Definitions_1"><bpmn:process id="Process_1" isExecutable="false"><bpmn:startEvent id="StartEvent_1"/></bpmn:process><bpmndi:BPMNDiagram id="BPMNDiagram_1"><bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1"><bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1"><dc:Bounds height="36.0" width="36.0" x="173.0" y="102.0"/></bpmndi:BPMNShape></bpmndi:BPMNPlane></bpmndi:BPMNDiagram></bpmn:definitions>
   */
  taskflow?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      lang: 'Lang',
      playbookUuid: 'PlaybookUuid',
      taskflow: 'Taskflow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      lang: 'string',
      playbookUuid: 'string',
      taskflow: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPlaybookResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9B584F84-D66A-5525-8E7B-05612A903ABF
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPlaybookResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyPlaybookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyPlaybookResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPlaybookInputOutputRequest extends $dara.Model {
  /**
   * @remarks
   * The executed mode of a playbook. The value is a JSON array.
   */
  exeConfig?: string;
  /**
   * @remarks
   * The configuration of the input parameters. The value is a JSON array.
   * 
   * This parameter is required.
   * 
   * @example
   * [
   *     {
   *         "typeName": "String",
   *         "dataClass": "normal",
   *         "dataType": "String",
   *         "description": "period",
   *         "example": "",
   *         "name": "period",
   *         "required": false
   *     }
   * ]
   */
  inputParams?: string;
  /**
   * @remarks
   * The language of the content within the request and response.
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The configuration of the output parameters. This parameter is unavailable. Leave it empty.
   * 
   * This parameter is required.
   * 
   * @example
   * []
   */
  outputParams?: string;
  /**
   * @remarks
   * The input parameter type.
   * 
   * *   **template-ip**
   * *   **template-file**
   * *   **template-process**
   * *   **custom**
   * 
   * @example
   * custom
   */
  paramType?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the playbook UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 8baa6cff-319e-4ede-97bc-xxxxxxx
   */
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      exeConfig: 'ExeConfig',
      inputParams: 'InputParams',
      lang: 'Lang',
      outputParams: 'OutputParams',
      paramType: 'ParamType',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exeConfig: 'string',
      inputParams: 'string',
      lang: 'string',
      outputParams: 'string',
      paramType: 'string',
      playbookUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPlaybookInputOutputResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8DDC07CE-D41B-5142-8D91-469462719C77
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPlaybookInputOutputResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyPlaybookInputOutputResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyPlaybookInputOutputResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPlaybookInstanceStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The playbook status. Valid values:
   * 
   * *   **1**: starts the playbook.
   * *   **0**: stops the playbook.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  active?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The playbook UUID.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~) operation to query the playbook UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9fcd3829-80ff-4681-be1e-xxxxxxxx
   */
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      lang: 'Lang',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      lang: 'string',
      playbookUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPlaybookInstanceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C2A32830-2842-5F8F-B4ED-E4783E400BBE
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPlaybookInstanceStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyPlaybookInstanceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyPlaybookInstanceStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishPlaybookRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the released version.
   * 
   * @example
   * This is a waf processing playbook
   */
  description?: string;
  /**
   * @remarks
   * The playbook UUID.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~) operation to query the playbook UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * ac343acc-1a61-4084-9a1c-xxxxxxx
   */
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      playbookUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishPlaybookResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C513FCEA-D71F-5E50-ADC4-FCF8C5DCF6BF
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishPlaybookResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PublishPlaybookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PublishPlaybookResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTreeDataRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTreeDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned information about the playbook. The value is a JSON string.
   * 
   * @example
   * [
   *     {
   *         "playbook": {
   *             "active": false,
   *             "displayName": "test_playbook",
   *             "playbookUuid": "09a20455-3d3a-424c-a1df-xxxxxx"
   *         }
   *     }
   * ]
   */
  playbooks?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EF2ECA2D-D8E6-5021-BF5C-19DD6D52C5B2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      playbooks: 'Playbooks',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playbooks: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTreeDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTreeDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryTreeDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenamePlaybookNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The new name of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_process
   */
  newNodeName?: string;
  /**
   * @remarks
   * The original name of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * firewall_process
   */
  oldNodeName?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the UUIDs of playbooks.
   * 
   * This parameter is required.
   * 
   * @example
   * ac343acc-1a61-4084-9a1c-xxxxxxxx
   */
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      newNodeName: 'NewNodeName',
      oldNodeName: 'OldNodeName',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      newNodeName: 'string',
      oldNodeName: 'string',
      playbookUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenamePlaybookNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned new name of the node.
   * 
   * @example
   * waf_process
   */
  renameResult?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1E1EC464-3BD7-518F-9937-BCC12E6855FE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      renameResult: 'RenameResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renameResult: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenamePlaybookNodeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenamePlaybookNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RenamePlaybookNodeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevertPlaybookReleaseRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to directly publish the new playbook after the rollback.
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  isPublish?: boolean;
  /**
   * @remarks
   * The version of the playbook that you want to publish.
   * 
   * >  You can call the [DescribePlaybookReleases](~~DescribePlaybookReleases~~) operation to query the playbook version.
   * 
   * This parameter is required.
   * 
   * @example
   * 3f97b56e-064e-47e7-a309-xxxxxxx
   */
  playReleaseId?: number;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the playbook UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 185295a1-c987-4b64-8796-xxxxxxxx
   */
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      isPublish: 'IsPublish',
      playReleaseId: 'PlayReleaseId',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPublish: 'boolean',
      playReleaseId: 'number',
      playbookUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevertPlaybookReleaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B3FED5B9-190A-5952-93A4-24FBF0F0C573
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevertPlaybookReleaseResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevertPlaybookReleaseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RevertPlaybookReleaseResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunNotifyComponentWithEmailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * notifyByCustom
   */
  actionName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  assetId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * NotifyMessage
   */
  componentName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * email content
   */
  content?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * notify_message_1
   */
  nodeName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e99dab31-499b-4307-9248-xxxxxx
   */
  playbookUuid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  receivers?: string[];
  /**
   * @example
   * 137602xxx718726
   */
  roleFor?: number;
  /**
   * @example
   * 0
   */
  roleType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * title
   */
  subject?: string;
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      assetId: 'AssetId',
      componentName: 'ComponentName',
      content: 'Content',
      lang: 'Lang',
      nodeName: 'NodeName',
      playbookUuid: 'PlaybookUuid',
      receivers: 'Receivers',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      subject: 'Subject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      assetId: 'number',
      componentName: 'string',
      content: 'string',
      lang: 'string',
      nodeName: 'string',
      playbookUuid: 'string',
      receivers: { 'type': 'array', 'itemType': 'string' },
      roleFor: 'number',
      roleType: 'string',
      subject: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.receivers)) {
      $dara.Model.validateArray(this.receivers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunNotifyComponentWithEmailResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  data?: string;
  page?: RunNotifyComponentWithEmailResponseBodyPage;
  /**
   * @example
   * D4CC979E-3D5B-5A6A-BC87-C93C9E861C7B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      page: 'Page',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      page: RunNotifyComponentWithEmailResponseBodyPage,
      requestId: 'string',
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunNotifyComponentWithEmailResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunNotifyComponentWithEmailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunNotifyComponentWithEmailResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunNotifyComponentWithMessageCenterRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * notifyByMessageCenter
   */
  actionName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 146789xxxx733152
   */
  aliuid?: string;
  /**
   * @example
   * 1
   */
  assetId?: number;
  channelTypeList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * NotifyMessage
   */
  componentName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yundun_soar_incident_generate
   */
  eventId?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * notify_message
   */
  nodeName?: string;
  /**
   * @example
   * {"startTime":"test222","incidentName":"test123","incidentID":"teset123"}
   */
  params?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c5c88b5e-97ca-435d-8c20-xxxxxx
   */
  playbookUuid?: string;
  /**
   * @example
   * 1467894xxx733152
   */
  roleFor?: number;
  /**
   * @example
   * 0
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      aliuid: 'Aliuid',
      assetId: 'AssetId',
      channelTypeList: 'ChannelTypeList',
      componentName: 'ComponentName',
      eventId: 'EventId',
      lang: 'Lang',
      nodeName: 'NodeName',
      params: 'Params',
      playbookUuid: 'PlaybookUuid',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      aliuid: 'string',
      assetId: 'number',
      channelTypeList: { 'type': 'array', 'itemType': 'string' },
      componentName: 'string',
      eventId: 'string',
      lang: 'string',
      nodeName: 'string',
      params: 'string',
      playbookUuid: 'string',
      roleFor: 'number',
      roleType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.channelTypeList)) {
      $dara.Model.validateArray(this.channelTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunNotifyComponentWithMessageCenterResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  data?: string;
  page?: RunNotifyComponentWithMessageCenterResponseBodyPage;
  /**
   * @example
   * E7698CFB-4E1C-5840-8EC9-691B86729E94
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      page: 'Page',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      page: RunNotifyComponentWithMessageCenterResponseBodyPage,
      requestId: 'string',
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunNotifyComponentWithMessageCenterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunNotifyComponentWithMessageCenterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunNotifyComponentWithMessageCenterResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunNotifyComponentWithWebhookRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * notifyByCustom
   */
  actionName?: string;
  /**
   * @example
   * 1
   */
  assetId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * NotifyMessage
   */
  componentName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {
   *     "at": {
   *         "atMobiles":[
   *             "180xxxxxx"
   *         ],
   *         "atUserIds":[
   *             "user123"
   *         ],
   *         "isAtAll": false
   *     },
   *     "text": {
   *         "content":"1234"
   *     },
   *     "msgtype":"text"
   * }
   */
  content?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * text
   */
  msgType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * notify_message_node
   */
  nodeName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 94bc318c-****-4cba-****-801ccb0d739f
   */
  playbookUuid?: string;
  /**
   * @example
   * 126339xxxx805497
   */
  roleFor?: number;
  /**
   * @example
   * 0
   */
  roleType?: string;
  /**
   * @example
   * SECc1*****e157b32b380f********bb8c70e1a67a22072
   */
  secret?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [\\"10651\\"]
   */
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      assetId: 'AssetId',
      componentName: 'ComponentName',
      content: 'Content',
      lang: 'Lang',
      msgType: 'MsgType',
      nodeName: 'NodeName',
      playbookUuid: 'PlaybookUuid',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      secret: 'Secret',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      assetId: 'number',
      componentName: 'string',
      content: 'string',
      lang: 'string',
      msgType: 'string',
      nodeName: 'string',
      playbookUuid: 'string',
      roleFor: 'number',
      roleType: 'string',
      secret: 'string',
      webhook: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunNotifyComponentWithWebhookResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  data?: string;
  page?: RunNotifyComponentWithWebhookResponseBodyPage;
  /**
   * @example
   * E7698CFB-****-5840-8EC9-691B86729E94
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      page: 'Page',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      page: RunNotifyComponentWithWebhookResponseBodyPage,
      requestId: 'string',
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunNotifyComponentWithWebhookResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunNotifyComponentWithWebhookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunNotifyComponentWithWebhookResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunPython3ScriptRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the node in the playbook.
   * 
   * @example
   * python3_3
   */
  nodeName?: string;
  /**
   * @remarks
   * The input parameters of the Python3 script.
   * 
   * @example
   * {
   *     "input1": "xx.xx.xx.xx",
   *     "input2": "7d"
   * }
   */
  params?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~) operation to query the UUIDs of playbooks.
   * 
   * @example
   * 8baa6cff-319e-4ede-97bc-xxxxxxx
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The Python3 script.
   * 
   * @example
   * import logging
   * def execute (params):
   *   #ip = params[\\"ip\\"]
   *   #logging.info("enter execute,ip is "+ip)
   *   success=True
   *   message=\\"OK\\"
   *   data=[]
   *   return (success,message,data)
   */
  pythonScript?: string;
  static names(): { [key: string]: string } {
    return {
      nodeName: 'NodeName',
      params: 'Params',
      playbookUuid: 'PlaybookUuid',
      pythonScript: 'PythonScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeName: 'string',
      params: 'string',
      playbookUuid: 'string',
      pythonScript: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunPython3ScriptResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F210521C-D9BF-5264-8369-83EDDC617DB0
   */
  requestId?: string;
  /**
   * @remarks
   * The execution result of the Python3 script.
   * 
   * @example
   * {
   *     "requestUuid": "fe240b98-27b1-4a36-aec1-550b894318d9",
   *     "content": {
   *         "resultData": [],
   *         "success": true
   *     }
   * }
   */
  runResult?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      runResult: 'RunResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      runResult: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunPython3ScriptResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunPython3ScriptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunPython3ScriptResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerPlaybookRequest extends $dara.Model {
  /**
   * @remarks
   * The input parameters of the playbook.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "input1": "xx.xx.xx.xx",
   *     "input2": "7d"
   * }
   */
  inputParam?: string;
  /**
   * @remarks
   * The playbook UUID.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~) operation to query the playbook UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2a687089-d4dd-47d4-9709-xxxxxxxx
   */
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      inputParam: 'InputParam',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputParam: 'string',
      playbookUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerPlaybookResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BD5A8DB6-A42C-532B-BCE8-83E69550CD59
   */
  requestId?: string;
  /**
   * @remarks
   * The running UUID of the playbook. This parameter is used to query the running result of the playbook.
   * 
   * @example
   * 55E63C57-D6C8-5036-A770-5CB10AC807AA
   */
  triggerUuid?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      triggerUuid: 'TriggerUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      triggerUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerPlaybookResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TriggerPlaybookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TriggerPlaybookResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerProcessTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the action. Valid values:
   * 
   * *   **remove**: cancels blocking or isolation.
   * *   **retry**: submits the task again.
   * 
   * This parameter is required.
   * 
   * @example
   * remove
   */
  actionType?: string;
  /**
   * @remarks
   * The ID of the handling task.
   * 
   * >  You can call the [DescribeProcessTasks](~~DescribeProcessTasks~~) operation to query the IDs of handling tasks.
   * 
   * This parameter is required.
   * 
   * @example
   * 15355xxxxxx82894882
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerProcessTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 58A518BC-E4A8-5BD7-AFEA-366046ED9073
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerProcessTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TriggerProcessTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TriggerProcessTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerSophonPlaybookRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the command that you want to trigger.
   * 
   * >  You can call the [DescribeSophonCommands](~~DescribeSophonCommands~~) operation to query the command name.
   * 
   * @example
   * waf_process_command
   */
  commandName?: string;
  /**
   * @remarks
   * The input parameters of the command or playbook that you want to trigger.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "param1": "xx.xx.xx.xx",
   *     "param2": "7d"
   * }
   */
  inputParams?: string;
  /**
   * @remarks
   * The custom ID. If you do not specify this parameter when the playbook is triggered, a random ID is generated for fault locating and troubleshooting.
   * 
   * @example
   * f916b93e-e814-459f-9662-xxxxxxxxxx
   */
  sophonTaskId?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * *   **command**
   * *   **playbook**
   * 
   * @example
   * playbook
   */
  triggerType?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the playbook UUID.
   * 
   * @example
   * f916b93e-e814-459f-9662-xxxxxxxxxx
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      commandName: 'CommandName',
      inputParams: 'InputParams',
      sophonTaskId: 'SophonTaskId',
      triggerType: 'TriggerType',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandName: 'string',
      inputParams: 'string',
      sophonTaskId: 'string',
      triggerType: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerSophonPlaybookResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details that is returned after the command or playbook is triggered.
   */
  data?: TriggerSophonPlaybookResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0DFC9403-54EB-5672-B690-9AA93C9EBB54
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: TriggerSophonPlaybookResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerSophonPlaybookResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TriggerSophonPlaybookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TriggerSophonPlaybookResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPlaybookRequest extends $dara.Model {
  /**
   * @remarks
   * The playbook UUID.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~) operation to query the playbook UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9fcd3829-80ff-4681-be1e-4d2662c35fed
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The XML configuration of the playbook.
   * 
   * This parameter is required.
   * 
   * @example
   * <?xml version="1.0" encoding="UTF-8"?><bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" targetNamespace="http://bpmn.io/schema/bpmn" id="Definitions_1"><bpmn:process id="Process_1" isExecutable="false"><bpmn:startEvent id="StartEvent_1"/></bpmn:process><bpmndi:BPMNDiagram id="BPMNDiagram_1"><bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1"><bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1"><dc:Bounds height="36.0" width="36.0" x="173.0" y="102.0"/></bpmndi:BPMNShape></bpmndi:BPMNPlane></bpmndi:BPMNDiagram></bpmn:definitions>
   */
  taskFlow?: string;
  static names(): { [key: string]: string } {
    return {
      playbookUuid: 'PlaybookUuid',
      taskFlow: 'TaskFlow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playbookUuid: 'string',
      taskFlow: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPlaybookResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the verification.
   */
  checkTaskInfos?: VerifyPlaybookResponseBodyCheckTaskInfos[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0DFC9403-54EB-5672-B690-9AA93C9EBB54
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      checkTaskInfos: 'CheckTaskInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkTaskInfos: { 'type': 'array', 'itemType': VerifyPlaybookResponseBodyCheckTaskInfos },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkTaskInfos)) {
      $dara.Model.validateArray(this.checkTaskInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPlaybookResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyPlaybookResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VerifyPlaybookResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPythonFileRequest extends $dara.Model {
  /**
   * @remarks
   * The Python code snippet.
   * 
   * This parameter is required.
   * 
   * @example
   * import logging
   * def execute (params):
   *   success=True
   *   message=\\"OK\\"
   *   data=[]
   *   return (success,message,data)
   */
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPythonFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F72685FB-A6E6-5A9A-97F7-6DC1056E63CE
   */
  requestId?: string;
  /**
   * @remarks
   * The verification result. If the parameter is left empty, the syntax of the code snippet is correct.
   */
  syntax?: VerifyPythonFileResponseBodySyntax[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      syntax: 'Syntax',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      syntax: { 'type': 'array', 'itemType': VerifyPythonFileResponseBodySyntax },
    };
  }

  validate() {
    if(Array.isArray(this.syntax)) {
      $dara.Model.validateArray(this.syntax);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPythonFileResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyPythonFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VerifyPythonFileResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("sophonsoar", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Modifies the statuses of playbooks at a time.
   * 
   * @param request - BatchModifyInstanceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchModifyInstanceStatusResponse
   */
  async batchModifyInstanceStatusWithOptions(request: BatchModifyInstanceStatusRequest, runtime: $dara.RuntimeOptions): Promise<BatchModifyInstanceStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.active)) {
      body["Active"] = request.active;
    }

    if (!$dara.isNull(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchModifyInstanceStatus",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BatchModifyInstanceStatusResponse>(await this.callApi(params, req, runtime), new BatchModifyInstanceStatusResponse({}));
    } else {
      return $dara.cast<BatchModifyInstanceStatusResponse>(await this.execute(params, req, runtime), new BatchModifyInstanceStatusResponse({}));
    }

  }

  /**
   * Modifies the statuses of playbooks at a time.
   * 
   * @param request - BatchModifyInstanceStatusRequest
   * @returns BatchModifyInstanceStatusResponse
   */
  async batchModifyInstanceStatus(request: BatchModifyInstanceStatusRequest): Promise<BatchModifyInstanceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchModifyInstanceStatusWithOptions(request, runtime);
  }

  /**
   * Compares configurations between two versions of a published playbook.
   * 
   * @param request - ComparePlaybooksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ComparePlaybooksResponse
   */
  async comparePlaybooksWithOptions(request: ComparePlaybooksRequest, runtime: $dara.RuntimeOptions): Promise<ComparePlaybooksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.newPlaybookReleaseId)) {
      query["NewPlaybookReleaseId"] = request.newPlaybookReleaseId;
    }

    if (!$dara.isNull(request.oldPlaybookReleaseId)) {
      query["OldPlaybookReleaseId"] = request.oldPlaybookReleaseId;
    }

    if (!$dara.isNull(request.playbookUuid)) {
      query["PlaybookUuid"] = request.playbookUuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ComparePlaybooks",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ComparePlaybooksResponse>(await this.callApi(params, req, runtime), new ComparePlaybooksResponse({}));
    } else {
      return $dara.cast<ComparePlaybooksResponse>(await this.execute(params, req, runtime), new ComparePlaybooksResponse({}));
    }

  }

  /**
   * Compares configurations between two versions of a published playbook.
   * 
   * @param request - ComparePlaybooksRequest
   * @returns ComparePlaybooksResponse
   */
  async comparePlaybooks(request: ComparePlaybooksRequest): Promise<ComparePlaybooksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.comparePlaybooksWithOptions(request, runtime);
  }

  /**
   * Convert XML configuration.
   * 
   * @remarks
   * Please ensure that you fully understand the billing method and [pricing](https://www.aliyun.com/price/product#/sas/detail/sas) of the orchestration product before using this interface.
   * 
   * @param request - ConvertPlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConvertPlaybookResponse
   */
  async convertPlaybookWithOptions(request: ConvertPlaybookRequest, runtime: $dara.RuntimeOptions): Promise<ConvertPlaybookResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.roleFor)) {
      query["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      query["RoleType"] = request.roleType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskflow)) {
      body["Taskflow"] = request.taskflow;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConvertPlaybook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ConvertPlaybookResponse>(await this.callApi(params, req, runtime), new ConvertPlaybookResponse({}));
    } else {
      return $dara.cast<ConvertPlaybookResponse>(await this.execute(params, req, runtime), new ConvertPlaybookResponse({}));
    }

  }

  /**
   * Convert XML configuration.
   * 
   * @remarks
   * Please ensure that you fully understand the billing method and [pricing](https://www.aliyun.com/price/product#/sas/detail/sas) of the orchestration product before using this interface.
   * 
   * @param request - ConvertPlaybookRequest
   * @returns ConvertPlaybookResponse
   */
  async convertPlaybook(request: ConvertPlaybookRequest): Promise<ConvertPlaybookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.convertPlaybookWithOptions(request, runtime);
  }

  /**
   * 剧本复制
   * 
   * @param request - CopyPlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CopyPlaybookResponse
   */
  async copyPlaybookWithOptions(request: CopyPlaybookRequest, runtime: $dara.RuntimeOptions): Promise<CopyPlaybookResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.roleFor)) {
      query["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      query["RoleType"] = request.roleType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.releaseVersion)) {
      body["ReleaseVersion"] = request.releaseVersion;
    }

    if (!$dara.isNull(request.sourcePlaybookUuid)) {
      body["SourcePlaybookUuid"] = request.sourcePlaybookUuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CopyPlaybook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CopyPlaybookResponse>(await this.callApi(params, req, runtime), new CopyPlaybookResponse({}));
    } else {
      return $dara.cast<CopyPlaybookResponse>(await this.execute(params, req, runtime), new CopyPlaybookResponse({}));
    }

  }

  /**
   * 剧本复制
   * 
   * @param request - CopyPlaybookRequest
   * @returns CopyPlaybookResponse
   */
  async copyPlaybook(request: CopyPlaybookRequest): Promise<CopyPlaybookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.copyPlaybookWithOptions(request, runtime);
  }

  /**
   * New Playbook.
   * 
   * @remarks
   * Create Playbook.
   * 
   * @param request - CreatePlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePlaybookResponse
   */
  async createPlaybookWithOptions(request: CreatePlaybookRequest, runtime: $dara.RuntimeOptions): Promise<CreatePlaybookResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.taskflowType)) {
      body["TaskflowType"] = request.taskflowType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePlaybook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreatePlaybookResponse>(await this.callApi(params, req, runtime), new CreatePlaybookResponse({}));
    } else {
      return $dara.cast<CreatePlaybookResponse>(await this.execute(params, req, runtime), new CreatePlaybookResponse({}));
    }

  }

  /**
   * New Playbook.
   * 
   * @remarks
   * Create Playbook.
   * 
   * @param request - CreatePlaybookRequest
   * @returns CreatePlaybookResponse
   */
  async createPlaybook(request: CreatePlaybookRequest): Promise<CreatePlaybookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPlaybookWithOptions(request, runtime);
  }

  /**
   * Debugs a playbook.
   * 
   * @param request - DebugPlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DebugPlaybookResponse
   */
  async debugPlaybookWithOptions(request: DebugPlaybookRequest, runtime: $dara.RuntimeOptions): Promise<DebugPlaybookResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    if (!$dara.isNull(request.record)) {
      body["Record"] = request.record;
    }

    if (!$dara.isNull(request.taskflow)) {
      body["Taskflow"] = request.taskflow;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DebugPlaybook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DebugPlaybookResponse>(await this.callApi(params, req, runtime), new DebugPlaybookResponse({}));
    } else {
      return $dara.cast<DebugPlaybookResponse>(await this.execute(params, req, runtime), new DebugPlaybookResponse({}));
    }

  }

  /**
   * Debugs a playbook.
   * 
   * @param request - DebugPlaybookRequest
   * @returns DebugPlaybookResponse
   */
  async debugPlaybook(request: DebugPlaybookRequest): Promise<DebugPlaybookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.debugPlaybookWithOptions(request, runtime);
  }

  /**
   * Deletes the assets in a component.
   * 
   * @param request - DeleteComponentAssetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteComponentAssetResponse
   */
  async deleteComponentAssetWithOptions(request: DeleteComponentAssetRequest, runtime: $dara.RuntimeOptions): Promise<DeleteComponentAssetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.assetId)) {
      query["AssetId"] = request.assetId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteComponentAsset",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteComponentAssetResponse>(await this.callApi(params, req, runtime), new DeleteComponentAssetResponse({}));
    } else {
      return $dara.cast<DeleteComponentAssetResponse>(await this.execute(params, req, runtime), new DeleteComponentAssetResponse({}));
    }

  }

  /**
   * Deletes the assets in a component.
   * 
   * @param request - DeleteComponentAssetRequest
   * @returns DeleteComponentAssetResponse
   */
  async deleteComponentAsset(request: DeleteComponentAssetRequest): Promise<DeleteComponentAssetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteComponentAssetWithOptions(request, runtime);
  }

  /**
   * Deletes a custom playbook.
   * 
   * @param request - DeletePlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePlaybookResponse
   */
  async deletePlaybookWithOptions(request: DeletePlaybookRequest, runtime: $dara.RuntimeOptions): Promise<DeletePlaybookResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePlaybook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeletePlaybookResponse>(await this.callApi(params, req, runtime), new DeletePlaybookResponse({}));
    } else {
      return $dara.cast<DeletePlaybookResponse>(await this.execute(params, req, runtime), new DeletePlaybookResponse({}));
    }

  }

  /**
   * Deletes a custom playbook.
   * 
   * @param request - DeletePlaybookRequest
   * @returns DeletePlaybookResponse
   */
  async deletePlaybook(request: DeletePlaybookRequest): Promise<DeletePlaybookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePlaybookWithOptions(request, runtime);
  }

  /**
   * Queries the metadata of assets in a component. The metadata of an asset refers to the fields that describe the asset.
   * 
   * @param request - DescribeComponentAssetFormRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeComponentAssetFormResponse
   */
  async describeComponentAssetFormWithOptions(request: DescribeComponentAssetFormRequest, runtime: $dara.RuntimeOptions): Promise<DescribeComponentAssetFormResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeComponentAssetForm",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeComponentAssetFormResponse>(await this.callApi(params, req, runtime), new DescribeComponentAssetFormResponse({}));
    } else {
      return $dara.cast<DescribeComponentAssetFormResponse>(await this.execute(params, req, runtime), new DescribeComponentAssetFormResponse({}));
    }

  }

  /**
   * Queries the metadata of assets in a component. The metadata of an asset refers to the fields that describe the asset.
   * 
   * @param request - DescribeComponentAssetFormRequest
   * @returns DescribeComponentAssetFormResponse
   */
  async describeComponentAssetForm(request: DescribeComponentAssetFormRequest): Promise<DescribeComponentAssetFormResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeComponentAssetFormWithOptions(request, runtime);
  }

  /**
   * Queries a list of assets in a component.
   * 
   * @param request - DescribeComponentAssetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeComponentAssetsResponse
   */
  async describeComponentAssetsWithOptions(request: DescribeComponentAssetsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeComponentAssetsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeComponentAssets",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeComponentAssetsResponse>(await this.callApi(params, req, runtime), new DescribeComponentAssetsResponse({}));
    } else {
      return $dara.cast<DescribeComponentAssetsResponse>(await this.execute(params, req, runtime), new DescribeComponentAssetsResponse({}));
    }

  }

  /**
   * Queries a list of assets in a component.
   * 
   * @param request - DescribeComponentAssetsRequest
   * @returns DescribeComponentAssetsResponse
   */
  async describeComponentAssets(request: DescribeComponentAssetsRequest): Promise<DescribeComponentAssetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeComponentAssetsWithOptions(request, runtime);
  }

  /**
   * Queries a list of common components that are available.
   * 
   * @param request - DescribeComponentListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeComponentListResponse
   */
  async describeComponentListWithOptions(request: DescribeComponentListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeComponentListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeComponentList",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeComponentListResponse>(await this.callApi(params, req, runtime), new DescribeComponentListResponse({}));
    } else {
      return $dara.cast<DescribeComponentListResponse>(await this.execute(params, req, runtime), new DescribeComponentListResponse({}));
    }

  }

  /**
   * Queries a list of common components that are available.
   * 
   * @param request - DescribeComponentListRequest
   * @returns DescribeComponentListResponse
   */
  async describeComponentList(request: DescribeComponentListRequest): Promise<DescribeComponentListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeComponentListWithOptions(request, runtime);
  }

  /**
   * Queries a list of predefined components that are available.
   * 
   * @param request - DescribeComponentPlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeComponentPlaybookResponse
   */
  async describeComponentPlaybookWithOptions(request: DescribeComponentPlaybookRequest, runtime: $dara.RuntimeOptions): Promise<DescribeComponentPlaybookResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeComponentPlaybook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeComponentPlaybookResponse>(await this.callApi(params, req, runtime), new DescribeComponentPlaybookResponse({}));
    } else {
      return $dara.cast<DescribeComponentPlaybookResponse>(await this.execute(params, req, runtime), new DescribeComponentPlaybookResponse({}));
    }

  }

  /**
   * Queries a list of predefined components that are available.
   * 
   * @param request - DescribeComponentPlaybookRequest
   * @returns DescribeComponentPlaybookResponse
   */
  async describeComponentPlaybook(request: DescribeComponentPlaybookRequest): Promise<DescribeComponentPlaybookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeComponentPlaybookWithOptions(request, runtime);
  }

  /**
   * Queries the JavaScript file of a component. The component uses the returned JavaScript file for page rendering.
   * 
   * @param request - DescribeComponentsJsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeComponentsJsResponse
   */
  async describeComponentsJsWithOptions(request: DescribeComponentsJsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeComponentsJsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeComponentsJs",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeComponentsJsResponse>(await this.callApi(params, req, runtime), new DescribeComponentsJsResponse({}));
    } else {
      return $dara.cast<DescribeComponentsJsResponse>(await this.execute(params, req, runtime), new DescribeComponentsJsResponse({}));
    }

  }

  /**
   * Queries the JavaScript file of a component. The component uses the returned JavaScript file for page rendering.
   * 
   * @param request - DescribeComponentsJsRequest
   * @returns DescribeComponentsJsResponse
   */
  async describeComponentsJs(request: DescribeComponentsJsRequest): Promise<DescribeComponentsJsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeComponentsJsWithOptions(request, runtime);
  }

  /**
   * Queries the information about the published versions of a playbook after deduplication.
   * 
   * @param request - DescribeDistinctReleasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDistinctReleasesResponse
   */
  async describeDistinctReleasesWithOptions(request: DescribeDistinctReleasesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDistinctReleasesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDistinctReleases",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDistinctReleasesResponse>(await this.callApi(params, req, runtime), new DescribeDistinctReleasesResponse({}));
    } else {
      return $dara.cast<DescribeDistinctReleasesResponse>(await this.execute(params, req, runtime), new DescribeDistinctReleasesResponse({}));
    }

  }

  /**
   * Queries the information about the published versions of a playbook after deduplication.
   * 
   * @param request - DescribeDistinctReleasesRequest
   * @returns DescribeDistinctReleasesResponse
   */
  async describeDistinctReleases(request: DescribeDistinctReleasesRequest): Promise<DescribeDistinctReleasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDistinctReleasesWithOptions(request, runtime);
  }

  /**
   * Queries enumeration items that are required by a cloud service.
   * 
   * @param request - DescribeEnumItemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEnumItemsResponse
   */
  async describeEnumItemsWithOptions(request: DescribeEnumItemsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeEnumItemsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEnumItems",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeEnumItemsResponse>(await this.callApi(params, req, runtime), new DescribeEnumItemsResponse({}));
    } else {
      return $dara.cast<DescribeEnumItemsResponse>(await this.execute(params, req, runtime), new DescribeEnumItemsResponse({}));
    }

  }

  /**
   * Queries enumeration items that are required by a cloud service.
   * 
   * @param request - DescribeEnumItemsRequest
   * @returns DescribeEnumItemsResponse
   */
  async describeEnumItems(request: DescribeEnumItemsRequest): Promise<DescribeEnumItemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEnumItemsWithOptions(request, runtime);
  }

  /**
   * Queries the playbooks that are available for an automatic response plan.
   * 
   * @param request - DescribeExecutePlaybooksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExecutePlaybooksResponse
   */
  async describeExecutePlaybooksWithOptions(request: DescribeExecutePlaybooksRequest, runtime: $dara.RuntimeOptions): Promise<DescribeExecutePlaybooksResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeExecutePlaybooks",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeExecutePlaybooksResponse>(await this.callApi(params, req, runtime), new DescribeExecutePlaybooksResponse({}));
    } else {
      return $dara.cast<DescribeExecutePlaybooksResponse>(await this.execute(params, req, runtime), new DescribeExecutePlaybooksResponse({}));
    }

  }

  /**
   * Queries the playbooks that are available for an automatic response plan.
   * 
   * @param request - DescribeExecutePlaybooksRequest
   * @returns DescribeExecutePlaybooksResponse
   */
  async describeExecutePlaybooks(request: DescribeExecutePlaybooksRequest): Promise<DescribeExecutePlaybooksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExecutePlaybooksWithOptions(request, runtime);
  }

  /**
   * Queries the global configuration information about a cloud service.
   * 
   * @param request - DescribeFieldRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFieldResponse
   */
  async describeFieldWithOptions(request: DescribeFieldRequest, runtime: $dara.RuntimeOptions): Promise<DescribeFieldResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeField",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeFieldResponse>(await this.callApi(params, req, runtime), new DescribeFieldResponse({}));
    } else {
      return $dara.cast<DescribeFieldResponse>(await this.execute(params, req, runtime), new DescribeFieldResponse({}));
    }

  }

  /**
   * Queries the global configuration information about a cloud service.
   * 
   * @param request - DescribeFieldRequest
   * @returns DescribeFieldResponse
   */
  async describeField(request: DescribeFieldRequest): Promise<DescribeFieldResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFieldWithOptions(request, runtime);
  }

  /**
   * 获取OpenAPI的产品列表
   * 
   * @param request - DescribeGroupProductionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGroupProductionsResponse
   */
  async describeGroupProductionsWithOptions(request: DescribeGroupProductionsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeGroupProductionsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGroupProductions",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeGroupProductionsResponse>(await this.callApi(params, req, runtime), new DescribeGroupProductionsResponse({}));
    } else {
      return $dara.cast<DescribeGroupProductionsResponse>(await this.execute(params, req, runtime), new DescribeGroupProductionsResponse({}));
    }

  }

  /**
   * 获取OpenAPI的产品列表
   * 
   * @param request - DescribeGroupProductionsRequest
   * @returns DescribeGroupProductionsResponse
   */
  async describeGroupProductions(request: DescribeGroupProductionsRequest): Promise<DescribeGroupProductionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGroupProductionsWithOptions(request, runtime);
  }

  /**
   * Queries the output structure information of each node in a playbook based on the most recent running record of the playbook.
   * 
   * @param request - DescribeLatestRecordSchemaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLatestRecordSchemaResponse
   */
  async describeLatestRecordSchemaWithOptions(request: DescribeLatestRecordSchemaRequest, runtime: $dara.RuntimeOptions): Promise<DescribeLatestRecordSchemaResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLatestRecordSchema",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeLatestRecordSchemaResponse>(await this.callApi(params, req, runtime), new DescribeLatestRecordSchemaResponse({}));
    } else {
      return $dara.cast<DescribeLatestRecordSchemaResponse>(await this.execute(params, req, runtime), new DescribeLatestRecordSchemaResponse({}));
    }

  }

  /**
   * Queries the output structure information of each node in a playbook based on the most recent running record of the playbook.
   * 
   * @param request - DescribeLatestRecordSchemaRequest
   * @returns DescribeLatestRecordSchemaResponse
   */
  async describeLatestRecordSchema(request: DescribeLatestRecordSchemaRequest): Promise<DescribeLatestRecordSchemaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLatestRecordSchemaWithOptions(request, runtime);
  }

  /**
   * Queries recommended dynamic input parameters of a component for playbook orchestration.
   * 
   * @param request - DescribeNodeParamTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNodeParamTagsResponse
   */
  async describeNodeParamTagsWithOptions(request: DescribeNodeParamTagsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeNodeParamTagsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNodeParamTags",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeNodeParamTagsResponse>(await this.callApi(params, req, runtime), new DescribeNodeParamTagsResponse({}));
    } else {
      return $dara.cast<DescribeNodeParamTagsResponse>(await this.execute(params, req, runtime), new DescribeNodeParamTagsResponse({}));
    }

  }

  /**
   * Queries recommended dynamic input parameters of a component for playbook orchestration.
   * 
   * @param request - DescribeNodeParamTagsRequest
   * @returns DescribeNodeParamTagsResponse
   */
  async describeNodeParamTags(request: DescribeNodeParamTagsRequest): Promise<DescribeNodeParamTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNodeParamTagsWithOptions(request, runtime);
  }

  /**
   * Queries the nodes that reference the same node in a playbook.
   * 
   * @param request - DescribeNodeUsedInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNodeUsedInfosResponse
   */
  async describeNodeUsedInfosWithOptions(request: DescribeNodeUsedInfosRequest, runtime: $dara.RuntimeOptions): Promise<DescribeNodeUsedInfosResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNodeUsedInfos",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeNodeUsedInfosResponse>(await this.callApi(params, req, runtime), new DescribeNodeUsedInfosResponse({}));
    } else {
      return $dara.cast<DescribeNodeUsedInfosResponse>(await this.execute(params, req, runtime), new DescribeNodeUsedInfosResponse({}));
    }

  }

  /**
   * Queries the nodes that reference the same node in a playbook.
   * 
   * @param request - DescribeNodeUsedInfosRequest
   * @returns DescribeNodeUsedInfosResponse
   */
  async describeNodeUsedInfos(request: DescribeNodeUsedInfosRequest): Promise<DescribeNodeUsedInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNodeUsedInfosWithOptions(request, runtime);
  }

  /**
   * 查询通知消息模版列表
   * 
   * @param request - DescribeNotifyTemplateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNotifyTemplateListResponse
   */
  async describeNotifyTemplateListWithOptions(request: DescribeNotifyTemplateListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeNotifyTemplateListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNotifyTemplateList",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeNotifyTemplateListResponse>(await this.callApi(params, req, runtime), new DescribeNotifyTemplateListResponse({}));
    } else {
      return $dara.cast<DescribeNotifyTemplateListResponse>(await this.execute(params, req, runtime), new DescribeNotifyTemplateListResponse({}));
    }

  }

  /**
   * 查询通知消息模版列表
   * 
   * @param request - DescribeNotifyTemplateListRequest
   * @returns DescribeNotifyTemplateListResponse
   */
  async describeNotifyTemplateList(request: DescribeNotifyTemplateListRequest): Promise<DescribeNotifyTemplateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNotifyTemplateListWithOptions(request, runtime);
  }

  /**
   * 获取产品接口的详情
   * 
   * @param request - DescribeOpenApiInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOpenApiInfoResponse
   */
  async describeOpenApiInfoWithOptions(request: DescribeOpenApiInfoRequest, runtime: $dara.RuntimeOptions): Promise<DescribeOpenApiInfoResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOpenApiInfo",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeOpenApiInfoResponse>(await this.callApi(params, req, runtime), new DescribeOpenApiInfoResponse({}));
    } else {
      return $dara.cast<DescribeOpenApiInfoResponse>(await this.execute(params, req, runtime), new DescribeOpenApiInfoResponse({}));
    }

  }

  /**
   * 获取产品接口的详情
   * 
   * @param request - DescribeOpenApiInfoRequest
   * @returns DescribeOpenApiInfoResponse
   */
  async describeOpenApiInfo(request: DescribeOpenApiInfoRequest): Promise<DescribeOpenApiInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOpenApiInfoWithOptions(request, runtime);
  }

  /**
   * 获取产品的接口列表
   * 
   * @param request - DescribeOpenApiListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOpenApiListResponse
   */
  async describeOpenApiListWithOptions(request: DescribeOpenApiListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeOpenApiListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOpenApiList",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeOpenApiListResponse>(await this.callApi(params, req, runtime), new DescribeOpenApiListResponse({}));
    } else {
      return $dara.cast<DescribeOpenApiListResponse>(await this.execute(params, req, runtime), new DescribeOpenApiListResponse({}));
    }

  }

  /**
   * 获取产品的接口列表
   * 
   * @param request - DescribeOpenApiListRequest
   * @returns DescribeOpenApiListResponse
   */
  async describeOpenApiList(request: DescribeOpenApiListRequest): Promise<DescribeOpenApiListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOpenApiListWithOptions(request, runtime);
  }

  /**
   * Queries the XML configuration of a playbook.
   * 
   * @param request - DescribePlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePlaybookResponse
   */
  async describePlaybookWithOptions(request: DescribePlaybookRequest, runtime: $dara.RuntimeOptions): Promise<DescribePlaybookResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePlaybook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribePlaybookResponse>(await this.callApi(params, req, runtime), new DescribePlaybookResponse({}));
    } else {
      return $dara.cast<DescribePlaybookResponse>(await this.execute(params, req, runtime), new DescribePlaybookResponse({}));
    }

  }

  /**
   * Queries the XML configuration of a playbook.
   * 
   * @param request - DescribePlaybookRequest
   * @returns DescribePlaybookResponse
   */
  async describePlaybook(request: DescribePlaybookRequest): Promise<DescribePlaybookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePlaybookWithOptions(request, runtime);
  }

  /**
   * Queries the input and output parameter configurations of a playbook.
   * 
   * @param request - DescribePlaybookInputOutputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePlaybookInputOutputResponse
   */
  async describePlaybookInputOutputWithOptions(request: DescribePlaybookInputOutputRequest, runtime: $dara.RuntimeOptions): Promise<DescribePlaybookInputOutputResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePlaybookInputOutput",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribePlaybookInputOutputResponse>(await this.callApi(params, req, runtime), new DescribePlaybookInputOutputResponse({}));
    } else {
      return $dara.cast<DescribePlaybookInputOutputResponse>(await this.execute(params, req, runtime), new DescribePlaybookInputOutputResponse({}));
    }

  }

  /**
   * Queries the input and output parameter configurations of a playbook.
   * 
   * @param request - DescribePlaybookInputOutputRequest
   * @returns DescribePlaybookInputOutputResponse
   */
  async describePlaybookInputOutput(request: DescribePlaybookInputOutputRequest): Promise<DescribePlaybookInputOutputResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePlaybookInputOutputWithOptions(request, runtime);
  }

  /**
   * Queries the metrics of a playbook. The metrics include the playbook name, playbook description, the number of times that the playbook is run, and the failure rate of the playbook.
   * 
   * @param request - DescribePlaybookMetricsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePlaybookMetricsResponse
   */
  async describePlaybookMetricsWithOptions(request: DescribePlaybookMetricsRequest, runtime: $dara.RuntimeOptions): Promise<DescribePlaybookMetricsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePlaybookMetrics",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribePlaybookMetricsResponse>(await this.callApi(params, req, runtime), new DescribePlaybookMetricsResponse({}));
    } else {
      return $dara.cast<DescribePlaybookMetricsResponse>(await this.execute(params, req, runtime), new DescribePlaybookMetricsResponse({}));
    }

  }

  /**
   * Queries the metrics of a playbook. The metrics include the playbook name, playbook description, the number of times that the playbook is run, and the failure rate of the playbook.
   * 
   * @param request - DescribePlaybookMetricsRequest
   * @returns DescribePlaybookMetricsResponse
   */
  async describePlaybookMetrics(request: DescribePlaybookMetricsRequest): Promise<DescribePlaybookMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePlaybookMetricsWithOptions(request, runtime);
  }

  /**
   * Queries the historical output data of a component node.
   * 
   * @param request - DescribePlaybookNodesOutputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePlaybookNodesOutputResponse
   */
  async describePlaybookNodesOutputWithOptions(request: DescribePlaybookNodesOutputRequest, runtime: $dara.RuntimeOptions): Promise<DescribePlaybookNodesOutputResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePlaybookNodesOutput",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribePlaybookNodesOutputResponse>(await this.callApi(params, req, runtime), new DescribePlaybookNodesOutputResponse({}));
    } else {
      return $dara.cast<DescribePlaybookNodesOutputResponse>(await this.execute(params, req, runtime), new DescribePlaybookNodesOutputResponse({}));
    }

  }

  /**
   * Queries the historical output data of a component node.
   * 
   * @param request - DescribePlaybookNodesOutputRequest
   * @returns DescribePlaybookNodesOutputResponse
   */
  async describePlaybookNodesOutput(request: DescribePlaybookNodesOutputRequest): Promise<DescribePlaybookNodesOutputResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePlaybookNodesOutputWithOptions(request, runtime);
  }

  /**
   * Queries the statistics of Security Orchestration Automation Response (SOAR), such as the numbers of created and enabled playbooks.
   * 
   * @param request - DescribePlaybookNumberMetricsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePlaybookNumberMetricsResponse
   */
  async describePlaybookNumberMetricsWithOptions(request: DescribePlaybookNumberMetricsRequest, runtime: $dara.RuntimeOptions): Promise<DescribePlaybookNumberMetricsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePlaybookNumberMetrics",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribePlaybookNumberMetricsResponse>(await this.callApi(params, req, runtime), new DescribePlaybookNumberMetricsResponse({}));
    } else {
      return $dara.cast<DescribePlaybookNumberMetricsResponse>(await this.execute(params, req, runtime), new DescribePlaybookNumberMetricsResponse({}));
    }

  }

  /**
   * Queries the statistics of Security Orchestration Automation Response (SOAR), such as the numbers of created and enabled playbooks.
   * 
   * @param request - DescribePlaybookNumberMetricsRequest
   * @returns DescribePlaybookNumberMetricsResponse
   */
  async describePlaybookNumberMetrics(request: DescribePlaybookNumberMetricsRequest): Promise<DescribePlaybookNumberMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePlaybookNumberMetricsWithOptions(request, runtime);
  }

  /**
   * Queries the information about the published versions of a playbook.
   * 
   * @param request - DescribePlaybookReleasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePlaybookReleasesResponse
   */
  async describePlaybookReleasesWithOptions(request: DescribePlaybookReleasesRequest, runtime: $dara.RuntimeOptions): Promise<DescribePlaybookReleasesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePlaybookReleases",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribePlaybookReleasesResponse>(await this.callApi(params, req, runtime), new DescribePlaybookReleasesResponse({}));
    } else {
      return $dara.cast<DescribePlaybookReleasesResponse>(await this.execute(params, req, runtime), new DescribePlaybookReleasesResponse({}));
    }

  }

  /**
   * Queries the information about the published versions of a playbook.
   * 
   * @param request - DescribePlaybookReleasesRequest
   * @returns DescribePlaybookReleasesResponse
   */
  async describePlaybookReleases(request: DescribePlaybookReleasesRequest): Promise<DescribePlaybookReleasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePlaybookReleasesWithOptions(request, runtime);
  }

  /**
   * Retrieve the list of playbooks.
   * 
   * @param request - DescribePlaybooksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePlaybooksResponse
   */
  async describePlaybooksWithOptions(request: DescribePlaybooksRequest, runtime: $dara.RuntimeOptions): Promise<DescribePlaybooksResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePlaybooks",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribePlaybooksResponse>(await this.callApi(params, req, runtime), new DescribePlaybooksResponse({}));
    } else {
      return $dara.cast<DescribePlaybooksResponse>(await this.execute(params, req, runtime), new DescribePlaybooksResponse({}));
    }

  }

  /**
   * Retrieve the list of playbooks.
   * 
   * @param request - DescribePlaybooksRequest
   * @returns DescribePlaybooksResponse
   */
  async describePlaybooks(request: DescribePlaybooksRequest): Promise<DescribePlaybooksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePlaybooksWithOptions(request, runtime);
  }

  /**
   * Queries the details of an API operation.
   * 
   * @param request - DescribePopApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePopApiResponse
   */
  async describePopApiWithOptions(request: DescribePopApiRequest, runtime: $dara.RuntimeOptions): Promise<DescribePopApiResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePopApi",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribePopApiResponse>(await this.callApi(params, req, runtime), new DescribePopApiResponse({}));
    } else {
      return $dara.cast<DescribePopApiResponse>(await this.execute(params, req, runtime), new DescribePopApiResponse({}));
    }

  }

  /**
   * Queries the details of an API operation.
   * 
   * @param request - DescribePopApiRequest
   * @returns DescribePopApiResponse
   */
  async describePopApi(request: DescribePopApiRequest): Promise<DescribePopApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePopApiWithOptions(request, runtime);
  }

  /**
   * Queries a list of API operations for an Alibaba Cloud service.
   * 
   * @param request - DescribePopApiItemListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePopApiItemListResponse
   */
  async describePopApiItemListWithOptions(request: DescribePopApiItemListRequest, runtime: $dara.RuntimeOptions): Promise<DescribePopApiItemListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePopApiItemList",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribePopApiItemListResponse>(await this.callApi(params, req, runtime), new DescribePopApiItemListResponse({}));
    } else {
      return $dara.cast<DescribePopApiItemListResponse>(await this.execute(params, req, runtime), new DescribePopApiItemListResponse({}));
    }

  }

  /**
   * Queries a list of API operations for an Alibaba Cloud service.
   * 
   * @param request - DescribePopApiItemListRequest
   * @returns DescribePopApiItemListResponse
   */
  async describePopApiItemList(request: DescribePopApiItemListRequest): Promise<DescribePopApiItemListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePopApiItemListWithOptions(request, runtime);
  }

  /**
   * 获取统计信息
   * 
   * @param request - DescribeProcessStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProcessStatisticsResponse
   */
  async describeProcessStatisticsWithOptions(request: DescribeProcessStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeProcessStatisticsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProcessStatistics",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeProcessStatisticsResponse>(await this.callApi(params, req, runtime), new DescribeProcessStatisticsResponse({}));
    } else {
      return $dara.cast<DescribeProcessStatisticsResponse>(await this.execute(params, req, runtime), new DescribeProcessStatisticsResponse({}));
    }

  }

  /**
   * 获取统计信息
   * 
   * @param request - DescribeProcessStatisticsRequest
   * @returns DescribeProcessStatisticsResponse
   */
  async describeProcessStatistics(request: DescribeProcessStatisticsRequest): Promise<DescribeProcessStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProcessStatisticsWithOptions(request, runtime);
  }

  /**
   * Query the number of associated disposal tasks based on the entity UUID.
   * 
   * @param request - DescribeProcessTaskCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProcessTaskCountResponse
   */
  async describeProcessTaskCountWithOptions(request: DescribeProcessTaskCountRequest, runtime: $dara.RuntimeOptions): Promise<DescribeProcessTaskCountResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProcessTaskCount",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeProcessTaskCountResponse>(await this.callApi(params, req, runtime), new DescribeProcessTaskCountResponse({}));
    } else {
      return $dara.cast<DescribeProcessTaskCountResponse>(await this.execute(params, req, runtime), new DescribeProcessTaskCountResponse({}));
    }

  }

  /**
   * Query the number of associated disposal tasks based on the entity UUID.
   * 
   * @param request - DescribeProcessTaskCountRequest
   * @returns DescribeProcessTaskCountResponse
   */
  async describeProcessTaskCount(request: DescribeProcessTaskCountRequest): Promise<DescribeProcessTaskCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProcessTaskCountWithOptions(request, runtime);
  }

  /**
   * Queries the information about handling tasks. When you use Security Orchestration Automation Response (SOAR) to handle events, handling tasks are generated in the handling center.
   * 
   * @param request - DescribeProcessTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProcessTasksResponse
   */
  async describeProcessTasksWithOptions(request: DescribeProcessTasksRequest, runtime: $dara.RuntimeOptions): Promise<DescribeProcessTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.entityName)) {
      query["EntityName"] = request.entityName;
    }

    if (!$dara.isNull(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!$dara.isNull(request.entityUuid)) {
      query["EntityUuid"] = request.entityUuid;
    }

    if (!$dara.isNull(request.eventUuid)) {
      query["EventUuid"] = request.eventUuid;
    }

    if (!$dara.isNull(request.orderField)) {
      query["OrderField"] = request.orderField;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.paramContent)) {
      query["ParamContent"] = request.paramContent;
    }

    if (!$dara.isNull(request.processActionEnd)) {
      query["ProcessActionEnd"] = request.processActionEnd;
    }

    if (!$dara.isNull(request.processActionStart)) {
      query["ProcessActionStart"] = request.processActionStart;
    }

    if (!$dara.isNull(request.processRemoveEnd)) {
      query["ProcessRemoveEnd"] = request.processRemoveEnd;
    }

    if (!$dara.isNull(request.processRemoveStart)) {
      query["ProcessRemoveStart"] = request.processRemoveStart;
    }

    if (!$dara.isNull(request.processStrategyUuid)) {
      query["ProcessStrategyUuid"] = request.processStrategyUuid;
    }

    if (!$dara.isNull(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskStatus)) {
      query["TaskStatus"] = request.taskStatus;
    }

    if (!$dara.isNull(request.triggerSource)) {
      query["TriggerSource"] = request.triggerSource;
    }

    if (!$dara.isNull(request.yunCode)) {
      query["YunCode"] = request.yunCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProcessTasks",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeProcessTasksResponse>(await this.callApi(params, req, runtime), new DescribeProcessTasksResponse({}));
    } else {
      return $dara.cast<DescribeProcessTasksResponse>(await this.execute(params, req, runtime), new DescribeProcessTasksResponse({}));
    }

  }

  /**
   * Queries the information about handling tasks. When you use Security Orchestration Automation Response (SOAR) to handle events, handling tasks are generated in the handling center.
   * 
   * @param request - DescribeProcessTasksRequest
   * @returns DescribeProcessTasksResponse
   */
  async describeProcessTasks(request: DescribeProcessTasksRequest): Promise<DescribeProcessTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProcessTasksWithOptions(request, runtime);
  }

  /**
   * Queries the data that is returned when a component initiates an action in a playbook task.
   * 
   * @param request - DescribeSoarRecordActionOutputListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSoarRecordActionOutputListResponse
   */
  async describeSoarRecordActionOutputListWithOptions(request: DescribeSoarRecordActionOutputListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeSoarRecordActionOutputListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSoarRecordActionOutputList",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeSoarRecordActionOutputListResponse>(await this.callApi(params, req, runtime), new DescribeSoarRecordActionOutputListResponse({}));
    } else {
      return $dara.cast<DescribeSoarRecordActionOutputListResponse>(await this.execute(params, req, runtime), new DescribeSoarRecordActionOutputListResponse({}));
    }

  }

  /**
   * Queries the data that is returned when a component initiates an action in a playbook task.
   * 
   * @param request - DescribeSoarRecordActionOutputListRequest
   * @returns DescribeSoarRecordActionOutputListResponse
   */
  async describeSoarRecordActionOutputList(request: DescribeSoarRecordActionOutputListRequest): Promise<DescribeSoarRecordActionOutputListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSoarRecordActionOutputListWithOptions(request, runtime);
  }

  /**
   * Queries the input and output data of a component action. You can call this operation after a playbook is run.
   * 
   * @param request - DescribeSoarRecordInOutputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSoarRecordInOutputResponse
   */
  async describeSoarRecordInOutputWithOptions(request: DescribeSoarRecordInOutputRequest, runtime: $dara.RuntimeOptions): Promise<DescribeSoarRecordInOutputResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSoarRecordInOutput",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeSoarRecordInOutputResponse>(await this.callApi(params, req, runtime), new DescribeSoarRecordInOutputResponse({}));
    } else {
      return $dara.cast<DescribeSoarRecordInOutputResponse>(await this.execute(params, req, runtime), new DescribeSoarRecordInOutputResponse({}));
    }

  }

  /**
   * Queries the input and output data of a component action. You can call this operation after a playbook is run.
   * 
   * @param request - DescribeSoarRecordInOutputRequest
   * @returns DescribeSoarRecordInOutputResponse
   */
  async describeSoarRecordInOutput(request: DescribeSoarRecordInOutputRequest): Promise<DescribeSoarRecordInOutputResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSoarRecordInOutputWithOptions(request, runtime);
  }

  /**
   * Get the execution records of a playbook.
   * 
   * @param request - DescribeSoarRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSoarRecordsResponse
   */
  async describeSoarRecordsWithOptions(request: DescribeSoarRecordsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeSoarRecordsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSoarRecords",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeSoarRecordsResponse>(await this.callApi(params, req, runtime), new DescribeSoarRecordsResponse({}));
    } else {
      return $dara.cast<DescribeSoarRecordsResponse>(await this.execute(params, req, runtime), new DescribeSoarRecordsResponse({}));
    }

  }

  /**
   * Get the execution records of a playbook.
   * 
   * @param request - DescribeSoarRecordsRequest
   * @returns DescribeSoarRecordsResponse
   */
  async describeSoarRecords(request: DescribeSoarRecordsRequest): Promise<DescribeSoarRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSoarRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the execution records of a component during the running of a playbook.
   * 
   * @param request - DescribeSoarTaskAndActionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSoarTaskAndActionsResponse
   */
  async describeSoarTaskAndActionsWithOptions(request: DescribeSoarTaskAndActionsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeSoarTaskAndActionsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSoarTaskAndActions",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeSoarTaskAndActionsResponse>(await this.callApi(params, req, runtime), new DescribeSoarTaskAndActionsResponse({}));
    } else {
      return $dara.cast<DescribeSoarTaskAndActionsResponse>(await this.execute(params, req, runtime), new DescribeSoarTaskAndActionsResponse({}));
    }

  }

  /**
   * Queries the execution records of a component during the running of a playbook.
   * 
   * @param request - DescribeSoarTaskAndActionsRequest
   * @returns DescribeSoarTaskAndActionsResponse
   */
  async describeSoarTaskAndActions(request: DescribeSoarTaskAndActionsRequest): Promise<DescribeSoarTaskAndActionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSoarTaskAndActionsWithOptions(request, runtime);
  }

  /**
   * Queries the commands that can be run to obtain objects.
   * 
   * @param request - DescribeSophonCommandsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSophonCommandsResponse
   */
  async describeSophonCommandsWithOptions(request: DescribeSophonCommandsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeSophonCommandsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSophonCommands",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeSophonCommandsResponse>(await this.callApi(params, req, runtime), new DescribeSophonCommandsResponse({}));
    } else {
      return $dara.cast<DescribeSophonCommandsResponse>(await this.execute(params, req, runtime), new DescribeSophonCommandsResponse({}));
    }

  }

  /**
   * Queries the commands that can be run to obtain objects.
   * 
   * @param request - DescribeSophonCommandsRequest
   * @returns DescribeSophonCommandsResponse
   */
  async describeSophonCommands(request: DescribeSophonCommandsRequest): Promise<DescribeSophonCommandsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSophonCommandsWithOptions(request, runtime);
  }

  /**
   * 查询云厂商OpenApi列表
   * 
   * @param request - DescribeVendorApiListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVendorApiListResponse
   */
  async describeVendorApiListWithOptions(request: DescribeVendorApiListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeVendorApiListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!$dara.isNull(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.vendorCode)) {
      query["VendorCode"] = request.vendorCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVendorApiList",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeVendorApiListResponse>(await this.callApi(params, req, runtime), new DescribeVendorApiListResponse({}));
    } else {
      return $dara.cast<DescribeVendorApiListResponse>(await this.execute(params, req, runtime), new DescribeVendorApiListResponse({}));
    }

  }

  /**
   * 查询云厂商OpenApi列表
   * 
   * @param request - DescribeVendorApiListRequest
   * @returns DescribeVendorApiListResponse
   */
  async describeVendorApiList(request: DescribeVendorApiListRequest): Promise<DescribeVendorApiListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVendorApiListWithOptions(request, runtime);
  }

  /**
   * Queries the operational logs of a Python3 script by using the UUID that is returned when the script is run. The UUID is specified by requestUuid.
   * 
   * @param request - DescriberPython3ScriptLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescriberPython3ScriptLogsResponse
   */
  async describerPython3ScriptLogsWithOptions(request: DescriberPython3ScriptLogsRequest, runtime: $dara.RuntimeOptions): Promise<DescriberPython3ScriptLogsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescriberPython3ScriptLogs",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescriberPython3ScriptLogsResponse>(await this.callApi(params, req, runtime), new DescriberPython3ScriptLogsResponse({}));
    } else {
      return $dara.cast<DescriberPython3ScriptLogsResponse>(await this.execute(params, req, runtime), new DescriberPython3ScriptLogsResponse({}));
    }

  }

  /**
   * Queries the operational logs of a Python3 script by using the UUID that is returned when the script is run. The UUID is specified by requestUuid.
   * 
   * @param request - DescriberPython3ScriptLogsRequest
   * @returns DescriberPython3ScriptLogsResponse
   */
  async describerPython3ScriptLogs(request: DescriberPython3ScriptLogsRequest): Promise<DescriberPython3ScriptLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describerPython3ScriptLogsWithOptions(request, runtime);
  }

  /**
   * Modifies the information about the asset that is configured for a component.
   * 
   * @param request - ModifyComponentAssetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyComponentAssetResponse
   */
  async modifyComponentAssetWithOptions(request: ModifyComponentAssetRequest, runtime: $dara.RuntimeOptions): Promise<ModifyComponentAssetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.assetConfig)) {
      query["AssetConfig"] = request.assetConfig;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyComponentAsset",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyComponentAssetResponse>(await this.callApi(params, req, runtime), new ModifyComponentAssetResponse({}));
    } else {
      return $dara.cast<ModifyComponentAssetResponse>(await this.execute(params, req, runtime), new ModifyComponentAssetResponse({}));
    }

  }

  /**
   * Modifies the information about the asset that is configured for a component.
   * 
   * @param request - ModifyComponentAssetRequest
   * @returns ModifyComponentAssetResponse
   */
  async modifyComponentAsset(request: ModifyComponentAssetRequest): Promise<ModifyComponentAssetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyComponentAssetWithOptions(request, runtime);
  }

  /**
   * Modifies the configuration of a playbook.
   * 
   * @param request - ModifyPlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPlaybookResponse
   */
  async modifyPlaybookWithOptions(request: ModifyPlaybookRequest, runtime: $dara.RuntimeOptions): Promise<ModifyPlaybookResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    if (!$dara.isNull(request.taskflow)) {
      body["Taskflow"] = request.taskflow;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPlaybook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyPlaybookResponse>(await this.callApi(params, req, runtime), new ModifyPlaybookResponse({}));
    } else {
      return $dara.cast<ModifyPlaybookResponse>(await this.execute(params, req, runtime), new ModifyPlaybookResponse({}));
    }

  }

  /**
   * Modifies the configuration of a playbook.
   * 
   * @param request - ModifyPlaybookRequest
   * @returns ModifyPlaybookResponse
   */
  async modifyPlaybook(request: ModifyPlaybookRequest): Promise<ModifyPlaybookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPlaybookWithOptions(request, runtime);
  }

  /**
   * Modifies the input and output parameters of a playbook.
   * 
   * @param request - ModifyPlaybookInputOutputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPlaybookInputOutputResponse
   */
  async modifyPlaybookInputOutputWithOptions(request: ModifyPlaybookInputOutputRequest, runtime: $dara.RuntimeOptions): Promise<ModifyPlaybookInputOutputResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.exeConfig)) {
      body["ExeConfig"] = request.exeConfig;
    }

    if (!$dara.isNull(request.inputParams)) {
      body["InputParams"] = request.inputParams;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.outputParams)) {
      body["OutputParams"] = request.outputParams;
    }

    if (!$dara.isNull(request.paramType)) {
      body["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPlaybookInputOutput",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyPlaybookInputOutputResponse>(await this.callApi(params, req, runtime), new ModifyPlaybookInputOutputResponse({}));
    } else {
      return $dara.cast<ModifyPlaybookInputOutputResponse>(await this.execute(params, req, runtime), new ModifyPlaybookInputOutputResponse({}));
    }

  }

  /**
   * Modifies the input and output parameters of a playbook.
   * 
   * @param request - ModifyPlaybookInputOutputRequest
   * @returns ModifyPlaybookInputOutputResponse
   */
  async modifyPlaybookInputOutput(request: ModifyPlaybookInputOutputRequest): Promise<ModifyPlaybookInputOutputResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPlaybookInputOutputWithOptions(request, runtime);
  }

  /**
   * Modifies the status of a playbook.
   * 
   * @param request - ModifyPlaybookInstanceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPlaybookInstanceStatusResponse
   */
  async modifyPlaybookInstanceStatusWithOptions(request: ModifyPlaybookInstanceStatusRequest, runtime: $dara.RuntimeOptions): Promise<ModifyPlaybookInstanceStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.active)) {
      body["Active"] = request.active;
    }

    if (!$dara.isNull(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPlaybookInstanceStatus",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyPlaybookInstanceStatusResponse>(await this.callApi(params, req, runtime), new ModifyPlaybookInstanceStatusResponse({}));
    } else {
      return $dara.cast<ModifyPlaybookInstanceStatusResponse>(await this.execute(params, req, runtime), new ModifyPlaybookInstanceStatusResponse({}));
    }

  }

  /**
   * Modifies the status of a playbook.
   * 
   * @param request - ModifyPlaybookInstanceStatusRequest
   * @returns ModifyPlaybookInstanceStatusResponse
   */
  async modifyPlaybookInstanceStatus(request: ModifyPlaybookInstanceStatusRequest): Promise<ModifyPlaybookInstanceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPlaybookInstanceStatusWithOptions(request, runtime);
  }

  /**
   * Publishes the playbook. After the playbook is published, the playbook runs based on the new logic.
   * 
   * @param request - PublishPlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishPlaybookResponse
   */
  async publishPlaybookWithOptions(request: PublishPlaybookRequest, runtime: $dara.RuntimeOptions): Promise<PublishPlaybookResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishPlaybook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PublishPlaybookResponse>(await this.callApi(params, req, runtime), new PublishPlaybookResponse({}));
    } else {
      return $dara.cast<PublishPlaybookResponse>(await this.execute(params, req, runtime), new PublishPlaybookResponse({}));
    }

  }

  /**
   * Publishes the playbook. After the playbook is published, the playbook runs based on the new logic.
   * 
   * @param request - PublishPlaybookRequest
   * @returns PublishPlaybookResponse
   */
  async publishPlaybook(request: PublishPlaybookRequest): Promise<PublishPlaybookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishPlaybookWithOptions(request, runtime);
  }

  /**
   * Queries all playbooks at a time.
   * 
   * @param request - QueryTreeDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTreeDataResponse
   */
  async queryTreeDataWithOptions(request: QueryTreeDataRequest, runtime: $dara.RuntimeOptions): Promise<QueryTreeDataResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTreeData",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryTreeDataResponse>(await this.callApi(params, req, runtime), new QueryTreeDataResponse({}));
    } else {
      return $dara.cast<QueryTreeDataResponse>(await this.execute(params, req, runtime), new QueryTreeDataResponse({}));
    }

  }

  /**
   * Queries all playbooks at a time.
   * 
   * @param request - QueryTreeDataRequest
   * @returns QueryTreeDataResponse
   */
  async queryTreeData(request: QueryTreeDataRequest): Promise<QueryTreeDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTreeDataWithOptions(request, runtime);
  }

  /**
   * Changes the name of a node in a playbook. You can call this operation during playbook orchestration. After the name of the node is changed, the reference path of the node also changes.
   * 
   * @param request - RenamePlaybookNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenamePlaybookNodeResponse
   */
  async renamePlaybookNodeWithOptions(request: RenamePlaybookNodeRequest, runtime: $dara.RuntimeOptions): Promise<RenamePlaybookNodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.newNodeName)) {
      query["NewNodeName"] = request.newNodeName;
    }

    if (!$dara.isNull(request.oldNodeName)) {
      query["OldNodeName"] = request.oldNodeName;
    }

    if (!$dara.isNull(request.playbookUuid)) {
      query["PlaybookUuid"] = request.playbookUuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenamePlaybookNode",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RenamePlaybookNodeResponse>(await this.callApi(params, req, runtime), new RenamePlaybookNodeResponse({}));
    } else {
      return $dara.cast<RenamePlaybookNodeResponse>(await this.execute(params, req, runtime), new RenamePlaybookNodeResponse({}));
    }

  }

  /**
   * Changes the name of a node in a playbook. You can call this operation during playbook orchestration. After the name of the node is changed, the reference path of the node also changes.
   * 
   * @param request - RenamePlaybookNodeRequest
   * @returns RenamePlaybookNodeResponse
   */
  async renamePlaybookNode(request: RenamePlaybookNodeRequest): Promise<RenamePlaybookNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renamePlaybookNodeWithOptions(request, runtime);
  }

  /**
   * Rolls back a playbook to a specific version. You can determine whether to publish the new playbook version during the rollback.
   * 
   * @param request - RevertPlaybookReleaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevertPlaybookReleaseResponse
   */
  async revertPlaybookReleaseWithOptions(request: RevertPlaybookReleaseRequest, runtime: $dara.RuntimeOptions): Promise<RevertPlaybookReleaseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isPublish)) {
      body["IsPublish"] = request.isPublish;
    }

    if (!$dara.isNull(request.playReleaseId)) {
      body["PlayReleaseId"] = request.playReleaseId;
    }

    if (!$dara.isNull(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevertPlaybookRelease",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RevertPlaybookReleaseResponse>(await this.callApi(params, req, runtime), new RevertPlaybookReleaseResponse({}));
    } else {
      return $dara.cast<RevertPlaybookReleaseResponse>(await this.execute(params, req, runtime), new RevertPlaybookReleaseResponse({}));
    }

  }

  /**
   * Rolls back a playbook to a specific version. You can determine whether to publish the new playbook version during the rollback.
   * 
   * @param request - RevertPlaybookReleaseRequest
   * @returns RevertPlaybookReleaseResponse
   */
  async revertPlaybookRelease(request: RevertPlaybookReleaseRequest): Promise<RevertPlaybookReleaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revertPlaybookReleaseWithOptions(request, runtime);
  }

  /**
   * 执行通知组件-email发送消息
   * 
   * @param request - RunNotifyComponentWithEmailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunNotifyComponentWithEmailResponse
   */
  async runNotifyComponentWithEmailWithOptions(request: RunNotifyComponentWithEmailRequest, runtime: $dara.RuntimeOptions): Promise<RunNotifyComponentWithEmailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionName)) {
      query["ActionName"] = request.actionName;
    }

    if (!$dara.isNull(request.assetId)) {
      query["AssetId"] = request.assetId;
    }

    if (!$dara.isNull(request.componentName)) {
      query["ComponentName"] = request.componentName;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.nodeName)) {
      query["NodeName"] = request.nodeName;
    }

    if (!$dara.isNull(request.playbookUuid)) {
      query["PlaybookUuid"] = request.playbookUuid;
    }

    if (!$dara.isNull(request.receivers)) {
      query["Receivers"] = request.receivers;
    }

    if (!$dara.isNull(request.roleFor)) {
      query["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      query["RoleType"] = request.roleType;
    }

    if (!$dara.isNull(request.subject)) {
      query["Subject"] = request.subject;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunNotifyComponentWithEmail",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RunNotifyComponentWithEmailResponse>(await this.callApi(params, req, runtime), new RunNotifyComponentWithEmailResponse({}));
    } else {
      return $dara.cast<RunNotifyComponentWithEmailResponse>(await this.execute(params, req, runtime), new RunNotifyComponentWithEmailResponse({}));
    }

  }

  /**
   * 执行通知组件-email发送消息
   * 
   * @param request - RunNotifyComponentWithEmailRequest
   * @returns RunNotifyComponentWithEmailResponse
   */
  async runNotifyComponentWithEmail(request: RunNotifyComponentWithEmailRequest): Promise<RunNotifyComponentWithEmailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runNotifyComponentWithEmailWithOptions(request, runtime);
  }

  /**
   * 执行通知组件-消息中心发送消息
   * 
   * @param request - RunNotifyComponentWithMessageCenterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunNotifyComponentWithMessageCenterResponse
   */
  async runNotifyComponentWithMessageCenterWithOptions(request: RunNotifyComponentWithMessageCenterRequest, runtime: $dara.RuntimeOptions): Promise<RunNotifyComponentWithMessageCenterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionName)) {
      query["ActionName"] = request.actionName;
    }

    if (!$dara.isNull(request.aliuid)) {
      query["Aliuid"] = request.aliuid;
    }

    if (!$dara.isNull(request.assetId)) {
      query["AssetId"] = request.assetId;
    }

    if (!$dara.isNull(request.channelTypeList)) {
      query["ChannelTypeList"] = request.channelTypeList;
    }

    if (!$dara.isNull(request.componentName)) {
      query["ComponentName"] = request.componentName;
    }

    if (!$dara.isNull(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.nodeName)) {
      query["NodeName"] = request.nodeName;
    }

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    if (!$dara.isNull(request.playbookUuid)) {
      query["PlaybookUuid"] = request.playbookUuid;
    }

    if (!$dara.isNull(request.roleFor)) {
      query["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      query["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunNotifyComponentWithMessageCenter",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RunNotifyComponentWithMessageCenterResponse>(await this.callApi(params, req, runtime), new RunNotifyComponentWithMessageCenterResponse({}));
    } else {
      return $dara.cast<RunNotifyComponentWithMessageCenterResponse>(await this.execute(params, req, runtime), new RunNotifyComponentWithMessageCenterResponse({}));
    }

  }

  /**
   * 执行通知组件-消息中心发送消息
   * 
   * @param request - RunNotifyComponentWithMessageCenterRequest
   * @returns RunNotifyComponentWithMessageCenterResponse
   */
  async runNotifyComponentWithMessageCenter(request: RunNotifyComponentWithMessageCenterRequest): Promise<RunNotifyComponentWithMessageCenterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runNotifyComponentWithMessageCenterWithOptions(request, runtime);
  }

  /**
   * 执行通知组件-webhook发送消息
   * 
   * @param request - RunNotifyComponentWithWebhookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunNotifyComponentWithWebhookResponse
   */
  async runNotifyComponentWithWebhookWithOptions(request: RunNotifyComponentWithWebhookRequest, runtime: $dara.RuntimeOptions): Promise<RunNotifyComponentWithWebhookResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionName)) {
      query["ActionName"] = request.actionName;
    }

    if (!$dara.isNull(request.assetId)) {
      query["AssetId"] = request.assetId;
    }

    if (!$dara.isNull(request.componentName)) {
      query["ComponentName"] = request.componentName;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.msgType)) {
      query["MsgType"] = request.msgType;
    }

    if (!$dara.isNull(request.nodeName)) {
      query["NodeName"] = request.nodeName;
    }

    if (!$dara.isNull(request.playbookUuid)) {
      query["PlaybookUuid"] = request.playbookUuid;
    }

    if (!$dara.isNull(request.roleFor)) {
      query["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      query["RoleType"] = request.roleType;
    }

    if (!$dara.isNull(request.secret)) {
      query["Secret"] = request.secret;
    }

    if (!$dara.isNull(request.webhook)) {
      query["Webhook"] = request.webhook;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunNotifyComponentWithWebhook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RunNotifyComponentWithWebhookResponse>(await this.callApi(params, req, runtime), new RunNotifyComponentWithWebhookResponse({}));
    } else {
      return $dara.cast<RunNotifyComponentWithWebhookResponse>(await this.execute(params, req, runtime), new RunNotifyComponentWithWebhookResponse({}));
    }

  }

  /**
   * 执行通知组件-webhook发送消息
   * 
   * @param request - RunNotifyComponentWithWebhookRequest
   * @returns RunNotifyComponentWithWebhookResponse
   */
  async runNotifyComponentWithWebhook(request: RunNotifyComponentWithWebhookRequest): Promise<RunNotifyComponentWithWebhookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runNotifyComponentWithWebhookWithOptions(request, runtime);
  }

  /**
   * Submits and runs a Python3 script. You can call this operation only for data processing.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing method and pricing of Security Orchestration Automation Response (SOAR). For more information, see [Pricing](https://www.alibabacloud.com/en/pricing-calculator?_p_lc=1&spm=openapi-amp.newDocPublishment.0.0.4c41281fWhbdPa#/commodity/vm_intl).
   * 
   * @param request - RunPython3ScriptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunPython3ScriptResponse
   */
  async runPython3ScriptWithOptions(request: RunPython3ScriptRequest, runtime: $dara.RuntimeOptions): Promise<RunPython3ScriptResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeName)) {
      body["NodeName"] = request.nodeName;
    }

    if (!$dara.isNull(request.params)) {
      body["Params"] = request.params;
    }

    if (!$dara.isNull(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    if (!$dara.isNull(request.pythonScript)) {
      body["PythonScript"] = request.pythonScript;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunPython3Script",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RunPython3ScriptResponse>(await this.callApi(params, req, runtime), new RunPython3ScriptResponse({}));
    } else {
      return $dara.cast<RunPython3ScriptResponse>(await this.execute(params, req, runtime), new RunPython3ScriptResponse({}));
    }

  }

  /**
   * Submits and runs a Python3 script. You can call this operation only for data processing.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing method and pricing of Security Orchestration Automation Response (SOAR). For more information, see [Pricing](https://www.alibabacloud.com/en/pricing-calculator?_p_lc=1&spm=openapi-amp.newDocPublishment.0.0.4c41281fWhbdPa#/commodity/vm_intl).
   * 
   * @param request - RunPython3ScriptRequest
   * @returns RunPython3ScriptResponse
   */
  async runPython3Script(request: RunPython3ScriptRequest): Promise<RunPython3ScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runPython3ScriptWithOptions(request, runtime);
  }

  /**
   * Triggers an enabled custom playbook or a predefined playbook.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and pricing of Security Orchestration Automation Response (SOAR). For more information, see [Pricing](https://www.alibabacloud.com/en/pricing-calculator?_p_lc=1&spm=a2796.7960336.3034855210.1.7adab91arMeIx2#/commodity/vm_intl).
   * 
   * @param request - TriggerPlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TriggerPlaybookResponse
   */
  async triggerPlaybookWithOptions(request: TriggerPlaybookRequest, runtime: $dara.RuntimeOptions): Promise<TriggerPlaybookResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.inputParam)) {
      body["InputParam"] = request.inputParam;
    }

    if (!$dara.isNull(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TriggerPlaybook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<TriggerPlaybookResponse>(await this.callApi(params, req, runtime), new TriggerPlaybookResponse({}));
    } else {
      return $dara.cast<TriggerPlaybookResponse>(await this.execute(params, req, runtime), new TriggerPlaybookResponse({}));
    }

  }

  /**
   * Triggers an enabled custom playbook or a predefined playbook.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and pricing of Security Orchestration Automation Response (SOAR). For more information, see [Pricing](https://www.alibabacloud.com/en/pricing-calculator?_p_lc=1&spm=a2796.7960336.3034855210.1.7adab91arMeIx2#/commodity/vm_intl).
   * 
   * @param request - TriggerPlaybookRequest
   * @returns TriggerPlaybookResponse
   */
  async triggerPlaybook(request: TriggerPlaybookRequest): Promise<TriggerPlaybookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.triggerPlaybookWithOptions(request, runtime);
  }

  /**
   * Performs an action on a handling task that is generated by the handling center when an event is handled by using Security Orchestration Automation Response (SOAR). For example, you can call this operation to cancel blocking or isolation, or retry blocking.
   * 
   * @param request - TriggerProcessTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TriggerProcessTaskResponse
   */
  async triggerProcessTaskWithOptions(request: TriggerProcessTaskRequest, runtime: $dara.RuntimeOptions): Promise<TriggerProcessTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionType)) {
      query["ActionType"] = request.actionType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TriggerProcessTask",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<TriggerProcessTaskResponse>(await this.callApi(params, req, runtime), new TriggerProcessTaskResponse({}));
    } else {
      return $dara.cast<TriggerProcessTaskResponse>(await this.execute(params, req, runtime), new TriggerProcessTaskResponse({}));
    }

  }

  /**
   * Performs an action on a handling task that is generated by the handling center when an event is handled by using Security Orchestration Automation Response (SOAR). For example, you can call this operation to cancel blocking or isolation, or retry blocking.
   * 
   * @param request - TriggerProcessTaskRequest
   * @returns TriggerProcessTaskResponse
   */
  async triggerProcessTask(request: TriggerProcessTaskRequest): Promise<TriggerProcessTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.triggerProcessTaskWithOptions(request, runtime);
  }

  /**
   * Triggers a playbook or a command.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and pricing of Security Orchestration Automation Response (SOAR). For more information, see [Pricing](https://www.alibabacloud.com/en/pricing-calculator?_p_lc=1&spm=a2796.7960336.3034855210.1.7adab91arMeIx2#/commodity/vm_intl).
   * 
   * @param request - TriggerSophonPlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TriggerSophonPlaybookResponse
   */
  async triggerSophonPlaybookWithOptions(request: TriggerSophonPlaybookRequest, runtime: $dara.RuntimeOptions): Promise<TriggerSophonPlaybookResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commandName)) {
      query["CommandName"] = request.commandName;
    }

    if (!$dara.isNull(request.inputParams)) {
      query["InputParams"] = request.inputParams;
    }

    if (!$dara.isNull(request.sophonTaskId)) {
      query["SophonTaskId"] = request.sophonTaskId;
    }

    if (!$dara.isNull(request.triggerType)) {
      query["TriggerType"] = request.triggerType;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TriggerSophonPlaybook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<TriggerSophonPlaybookResponse>(await this.callApi(params, req, runtime), new TriggerSophonPlaybookResponse({}));
    } else {
      return $dara.cast<TriggerSophonPlaybookResponse>(await this.execute(params, req, runtime), new TriggerSophonPlaybookResponse({}));
    }

  }

  /**
   * Triggers a playbook or a command.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and pricing of Security Orchestration Automation Response (SOAR). For more information, see [Pricing](https://www.alibabacloud.com/en/pricing-calculator?_p_lc=1&spm=a2796.7960336.3034855210.1.7adab91arMeIx2#/commodity/vm_intl).
   * 
   * @param request - TriggerSophonPlaybookRequest
   * @returns TriggerSophonPlaybookResponse
   */
  async triggerSophonPlaybook(request: TriggerSophonPlaybookRequest): Promise<TriggerSophonPlaybookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.triggerSophonPlaybookWithOptions(request, runtime);
  }

  /**
   * Checks whether the configuration of the playbook is correct and whether the logic of the orchestration is reasonable.
   * 
   * @param request - VerifyPlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyPlaybookResponse
   */
  async verifyPlaybookWithOptions(request: VerifyPlaybookRequest, runtime: $dara.RuntimeOptions): Promise<VerifyPlaybookResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    if (!$dara.isNull(request.taskFlow)) {
      body["TaskFlow"] = request.taskFlow;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifyPlaybook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<VerifyPlaybookResponse>(await this.callApi(params, req, runtime), new VerifyPlaybookResponse({}));
    } else {
      return $dara.cast<VerifyPlaybookResponse>(await this.execute(params, req, runtime), new VerifyPlaybookResponse({}));
    }

  }

  /**
   * Checks whether the configuration of the playbook is correct and whether the logic of the orchestration is reasonable.
   * 
   * @param request - VerifyPlaybookRequest
   * @returns VerifyPlaybookResponse
   */
  async verifyPlaybook(request: VerifyPlaybookRequest): Promise<VerifyPlaybookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyPlaybookWithOptions(request, runtime);
  }

  /**
   * Checks whether the syntax of a Python code snippet is correct.
   * 
   * @param request - VerifyPythonFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyPythonFileResponse
   */
  async verifyPythonFileWithOptions(request: VerifyPythonFileRequest, runtime: $dara.RuntimeOptions): Promise<VerifyPythonFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifyPythonFile",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<VerifyPythonFileResponse>(await this.callApi(params, req, runtime), new VerifyPythonFileResponse({}));
    } else {
      return $dara.cast<VerifyPythonFileResponse>(await this.execute(params, req, runtime), new VerifyPythonFileResponse({}));
    }

  }

  /**
   * Checks whether the syntax of a Python code snippet is correct.
   * 
   * @param request - VerifyPythonFileRequest
   * @returns VerifyPythonFileResponse
   */
  async verifyPythonFile(request: VerifyPythonFileRequest): Promise<VerifyPythonFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyPythonFileWithOptions(request, runtime);
  }

}
