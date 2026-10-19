// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkflowInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Workflow 必填验收标准
   * 
   * This parameter is required.
   * 
   * @example
   * 完成全部审批节点并产出报告
   */
  acceptanceCriteria?: string;
  /**
   * @remarks
   * 空间内唯一需求编号，重复请求幂等
   * 
   * This parameter is required.
   * 
   * @example
   * REQ-1001
   */
  businessId?: string;
  /**
   * @remarks
   * 协作空间 ID
   * 
   * This parameter is required.
   * 
   * @example
   * cg_20261016_abc123
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * 外部发起人展示标签
   * 
   * @example
   * 外部发起人张三
   */
  initiator?: string;
  /**
   * @remarks
   * 工作项优先级
   * 
   * @example
   * HIGH
   */
  priority?: string;
  /**
   * @remarks
   * 工作流模板 ID，最多 64 字符
   * 
   * This parameter is required.
   * 
   * @example
   * wft_20261016_abc123
   */
  templateId?: string;
  /**
   * @remarks
   * 租户ID，公共参数；winnexo-cli 通过 --tenant-id 显式传入
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * 需求标题
   * 
   * This parameter is required.
   * 
   * @example
   * 季度经营分析报告
   */
  title?: string;
  /**
   * @remarks
   * 业务变量对象，tags 可为字符串标签列表
   * 
   * @example
   * tags=季度报告
   */
  variables?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      acceptanceCriteria: 'acceptanceCriteria',
      businessId: 'businessId',
      collaborationGroupId: 'collaborationGroupId',
      initiator: 'initiator',
      priority: 'priority',
      templateId: 'templateId',
      tenantId: 'tenantId',
      title: 'title',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptanceCriteria: 'string',
      businessId: 'string',
      collaborationGroupId: 'string',
      initiator: 'string',
      priority: 'string',
      templateId: 'string',
      tenantId: 'string',
      title: 'string',
      variables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.variables) {
      $dara.Model.validateMap(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

