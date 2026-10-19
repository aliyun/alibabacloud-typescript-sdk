// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportWorkflowTemplateResponseBodySteps extends $dara.Model {
  /**
   * @remarks
   * 模型档位
   * 
   * @example
   * standard
   */
  modelMode?: string;
  /**
   * @remarks
   * 步骤名称
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * 智能体负责人名称
   * 
   * @example
   * example
   */
  ownerAgentName?: string;
  /**
   * @remarks
   * 负责人类型：MEMBER 人工 / AGENT 智能体
   * 
   * @example
   * MEMBER
   */
  ownerType?: string;
  /**
   * @remarks
   * 人工负责人用户ID
   * 
   * @example
   * 1
   */
  ownerUserId?: number;
  /**
   * @remarks
   * 审核人用户ID列表
   * 
   * @example
   * example
   */
  reviewerUserIds?: number[];
  /**
   * @remarks
   * 步骤顺序
   * 
   * @example
   * 1
   */
  sortOrder?: number;
  /**
   * @remarks
   * 步骤处理说明
   * 
   * @example
   * example
   */
  specification?: string;
  /**
   * @remarks
   * 步骤ID
   * 
   * @example
   * collect
   */
  stepId?: string;
  static names(): { [key: string]: string } {
    return {
      modelMode: 'modelMode',
      name: 'name',
      ownerAgentName: 'ownerAgentName',
      ownerType: 'ownerType',
      ownerUserId: 'ownerUserId',
      reviewerUserIds: 'reviewerUserIds',
      sortOrder: 'sortOrder',
      specification: 'specification',
      stepId: 'stepId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelMode: 'string',
      name: 'string',
      ownerAgentName: 'string',
      ownerType: 'string',
      ownerUserId: 'number',
      reviewerUserIds: { 'type': 'array', 'itemType': 'number' },
      sortOrder: 'number',
      specification: 'string',
      stepId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.reviewerUserIds)) {
      $dara.Model.validateArray(this.reviewerUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportWorkflowTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码；成功为200
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 创建人用户ID
   * 
   * @example
   * 1
   */
  createdByUserId?: number;
  /**
   * @remarks
   * 模板描述
   * 
   * @example
   * example
   */
  description?: string;
  /**
   * @remarks
   * 创建时间(ISO8601)
   * 
   * @example
   * example
   */
  gmtCreate?: string;
  /**
   * @remarks
   * 修改时间(ISO8601)
   * 
   * @example
   * example
   */
  gmtModified?: string;
  /**
   * @remarks
   * 错误描述
   * 
   * @example
   * 请求的资源不存在
   */
  message?: string;
  /**
   * @remarks
   * 模板名称
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * 请求追踪ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * 有序步骤
   * 
   * @example
   * example
   */
  steps?: ImportWorkflowTemplateResponseBodySteps[];
  /**
   * @remarks
   * 模板ID
   * 
   * @example
   * tpl_example
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      createdByUserId: 'createdByUserId',
      description: 'description',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      message: 'message',
      name: 'name',
      requestId: 'requestId',
      steps: 'steps',
      templateId: 'templateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createdByUserId: 'number',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      message: 'string',
      name: 'string',
      requestId: 'string',
      steps: { 'type': 'array', 'itemType': ImportWorkflowTemplateResponseBodySteps },
      templateId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.steps)) {
      $dara.Model.validateArray(this.steps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

