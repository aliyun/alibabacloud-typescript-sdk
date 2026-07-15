// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobTemplateResponseBodyVersions extends $dara.Model {
  /**
   * @remarks
   * The field constraint rules. The key is a JSONPath expression and the value is a constraint type.
   * 
   * @example
   * {\\"JobSpecs[0].Image\\":\\"locked\\",\\"UserCommand\\":\\"locked\\",\\"JobType\\":\\"locked\\"}
   */
  constraints?: { [key: string]: any };
  /**
   * @remarks
   * The configuration of the version, in JSON format.
   * 
   * @example
   * {\\"WorkspaceId\\":\\"15****05\\",\\"JobType\\":\\"PyTorchJob\\",\\"UserCommand\\":\\"echo hello\\",\\"JobSpecs\\":[{\\"Type\\":\\"Worker\\",\\"PodCount\\":1,\\"Image\\":\\"dsw-registry-vpc.cn-hangzhou.cr.aliyuncs.com/pai/pytorch:2.8.0-gpu-py313-cu129-ubuntu22.04-3995b779-1764361782\\",\\"EcsSpec\\":\\"ecs.gn7i-c8g1.2xlarge\\"}],\\"ResourceType\\":\\"ECS\\",\\"_ResourcePaymentType\\":\\"PostPaid\\",\\"CredentialConfig\\":{\\"EnableCredentialInject\\":false},\\"Accessibility\\":\\"PRIVATE\\",\\"Settings\\":{\\"JobReservedMinutes\\":0,\\"Tags\\":{}}}
   */
  content?: any;
  /**
   * @remarks
   * The ID of the user who created the version.
   * 
   * @example
   * 20**************26
   */
  createdBy?: string;
  /**
   * @remarks
   * The time the version was created.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2026-01-08T14:17:55Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The version number.
   * 
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
   * The default version of the job template.
   * 
   * @example
   * 2
   */
  defaultVersion?: number;
  /**
   * @remarks
   * A description of the job template.
   * 
   * @example
   * job template description
   */
  description?: string;
  /**
   * @remarks
   * The time the job template was created.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2026-01-08T14:17:55Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time the job template was last modified.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2026-03-03T05:48:02Z
   */
  gmtModifyTime?: string;
  /**
   * @remarks
   * A collection of user-defined key-value pairs.
   * 
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the user who last modified the job template.
   * 
   * @example
   * 20**************26
   */
  modifiedBy?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the job template.
   * 
   * @example
   * tplmceolmf2****
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the job template.
   * 
   * @example
   * job-template-example-1778047****
   */
  templateName?: string;
  /**
   * @remarks
   * The ID of the tenant that owns the job template.
   * 
   * @example
   * 142388383837****
   */
  tenantId?: string;
  /**
   * @remarks
   * The total number of versions returned. This value is 1 if a specific version is queried, or the total count if all versions are queried.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The ID of the user who created the job template.
   * 
   * @example
   * 20**************26
   */
  userId?: string;
  /**
   * @remarks
   * An array of template versions. This array contains only one version if a specific version is requested, or all versions if `all` is specified.
   */
  versions?: GetJobTemplateResponseBodyVersions[];
  /**
   * @remarks
   * The ID of the workspace that contains the job template.
   * 
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

