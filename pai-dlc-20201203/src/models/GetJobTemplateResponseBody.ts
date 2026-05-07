// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobTemplateResponseBodyVersions extends $dara.Model {
  /**
   * @remarks
   * 字段约束规则。Key 为 JSONPath 表达式，Value 为约束类型
   * 
   * @example
   * {\\"JobSpecs[0].Image\\":\\"locked\\",\\"UserCommand\\":\\"locked\\",\\"JobType\\":\\"locked\\"}
   */
  constraints?: { [key: string]: any };
  /**
   * @remarks
   * 该版本的模板配置内容，JSON 格式
   * 
   * @example
   * {\\"WorkspaceId\\":\\"15****05\\",\\"JobType\\":\\"PyTorchJob\\",\\"UserCommand\\":\\"echo hello\\",\\"JobSpecs\\":[{\\"Type\\":\\"Worker\\",\\"PodCount\\":1,\\"Image\\":\\"dsw-registry-vpc.cn-hangzhou.cr.aliyuncs.com/pai/pytorch:2.8.0-gpu-py313-cu129-ubuntu22.04-3995b779-1764361782\\",\\"EcsSpec\\":\\"ecs.gn7i-c8g1.2xlarge\\"}],\\"ResourceType\\":\\"ECS\\",\\"_ResourcePaymentType\\":\\"PostPaid\\",\\"CredentialConfig\\":{\\"EnableCredentialInject\\":false},\\"Accessibility\\":\\"PRIVATE\\",\\"Settings\\":{\\"JobReservedMinutes\\":0,\\"Tags\\":{}}}
   */
  content?: any;
  /**
   * @example
   * 20**************26
   */
  createdBy?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2026-01-08T14:17:55Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      content: 'Content',
      createdBy: 'CreatedBy',
      gmtCreateTime: 'GmtCreateTime',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      content: 'any',
      createdBy: 'string',
      gmtCreateTime: 'string',
      version: 'number',
    };
  }

  validate() {
    if(this.constraints) {
      $dara.Model.validateMap(this.constraints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * 当前默认使用的版本号
   * 
   * @example
   * 2
   */
  defaultVersion?: number;
  /**
   * @example
   * job template description
   */
  description?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2026-01-08T14:17:55Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2026-03-03T05:48:02Z
   */
  gmtModifyTime?: string;
  /**
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @example
   * 20**************26
   */
  modifiedBy?: string;
  /**
   * @remarks
   * 本次请求的 ID，用于诊断和答疑。
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @example
   * tplmceolmf2****
   */
  templateId?: string;
  /**
   * @example
   * job-template-example-1778047****
   */
  templateName?: string;
  /**
   * @example
   * 142388383837****
   */
  tenantId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @example
   * 20**************26
   */
  userId?: string;
  /**
   * @remarks
   * 模板版本详情列表。查询单个版本时返回1个元素，查询所有版本时返回全部
   */
  versions?: GetJobTemplateResponseBodyVersions[];
  /**
   * @example
   * 4***9
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultVersion: 'DefaultVersion',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifyTime: 'GmtModifyTime',
      metadata: 'Metadata',
      modifiedBy: 'ModifiedBy',
      requestId: 'RequestId',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      tenantId: 'TenantId',
      totalCount: 'TotalCount',
      userId: 'UserId',
      versions: 'Versions',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultVersion: 'number',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifyTime: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      modifiedBy: 'string',
      requestId: 'string',
      templateId: 'string',
      templateName: 'string',
      tenantId: 'string',
      totalCount: 'number',
      userId: 'string',
      versions: { 'type': 'array', 'itemType': GetJobTemplateResponseBodyVersions },
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
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

