// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkItemWorkFlowInfoResponseBodyWorkflowStatuses extends $dara.Model {
  /**
   * @example
   * 19xx7043xxxxxxx914
   */
  creator?: string;
  /**
   * @example
   * xxx
   */
  description?: string;
  /**
   * @example
   * 1613805843000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1613805843000
   */
  gmtModified?: number;
  /**
   * @example
   * 156603
   */
  identifier?: string;
  /**
   * @example
   * 19xx7043xxxxxxx914
   */
  modifier?: string;
  /**
   * @example
   * 待处理
   */
  name?: string;
  /**
   * @example
   * Workitem
   */
  resourceType?: string;
  /**
   * @example
   * system
   */
  source?: string;
  /**
   * @example
   * 1
   */
  workflowStageIdentifier?: string;
  /**
   * @example
   * 确认阶段
   */
  workflowStageName?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'creator',
      description: 'description',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      identifier: 'identifier',
      modifier: 'modifier',
      name: 'name',
      resourceType: 'resourceType',
      source: 'source',
      workflowStageIdentifier: 'workflowStageIdentifier',
      workflowStageName: 'workflowStageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      identifier: 'string',
      modifier: 'string',
      name: 'string',
      resourceType: 'string',
      source: 'string',
      workflowStageIdentifier: 'string',
      workflowStageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkItemWorkFlowInfoResponseBodyWorkflowWorkflowActions extends $dara.Model {
  /**
   * @example
   * 16274887
   */
  id?: number;
  /**
   * @example
   * xxx
   */
  name?: string;
  /**
   * @example
   * 100011
   */
  nextWorkflowStatusIdentifier?: string;
  /**
   * @example
   * fd0xxxxxd00d355b05dxxxx26
   */
  workflowIdentifier?: string;
  /**
   * @example
   * 100005
   */
  workflowStatusIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
      nextWorkflowStatusIdentifier: 'nextWorkflowStatusIdentifier',
      workflowIdentifier: 'workflowIdentifier',
      workflowStatusIdentifier: 'workflowStatusIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      nextWorkflowStatusIdentifier: 'string',
      workflowIdentifier: 'string',
      workflowStatusIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkItemWorkFlowInfoResponseBodyWorkflow extends $dara.Model {
  /**
   * @example
   * 19xx7043xxxxxxx914
   */
  creator?: string;
  /**
   * @example
   * 100005
   */
  defaultStatusIdentifier?: string;
  /**
   * @example
   * 工作流的描述
   */
  description?: string;
  /**
   * @example
   * 1640850318000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1640850318000
   */
  gmtModified?: number;
  /**
   * @example
   * e8bxxxxxxxxxxxxxxxx23
   */
  identifier?: string;
  /**
   * @example
   * 19xx7043xxxxxxx914
   */
  modifier?: string;
  /**
   * @example
   * 名称
   */
  name?: string;
  /**
   * @example
   * e8b26xxxxx6e76aa20xxxxx23
   */
  ownerSpaceIdentifier?: string;
  /**
   * @example
   * null
   */
  ownerSpaceType?: string;
  /**
   * @example
   * Project
   */
  resourceType?: string;
  /**
   * @example
   * system
   */
  source?: string;
  /**
   * @example
   * null
   */
  statusOrder?: string;
  statuses?: GetWorkItemWorkFlowInfoResponseBodyWorkflowStatuses[];
  workflowActions?: GetWorkItemWorkFlowInfoResponseBodyWorkflowWorkflowActions[];
  static names(): { [key: string]: string } {
    return {
      creator: 'creator',
      defaultStatusIdentifier: 'defaultStatusIdentifier',
      description: 'description',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      identifier: 'identifier',
      modifier: 'modifier',
      name: 'name',
      ownerSpaceIdentifier: 'ownerSpaceIdentifier',
      ownerSpaceType: 'ownerSpaceType',
      resourceType: 'resourceType',
      source: 'source',
      statusOrder: 'statusOrder',
      statuses: 'statuses',
      workflowActions: 'workflowActions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      defaultStatusIdentifier: 'string',
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      identifier: 'string',
      modifier: 'string',
      name: 'string',
      ownerSpaceIdentifier: 'string',
      ownerSpaceType: 'string',
      resourceType: 'string',
      source: 'string',
      statusOrder: 'string',
      statuses: { 'type': 'array', 'itemType': GetWorkItemWorkFlowInfoResponseBodyWorkflowStatuses },
      workflowActions: { 'type': 'array', 'itemType': GetWorkItemWorkFlowInfoResponseBodyWorkflowWorkflowActions },
    };
  }

  validate() {
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    if(Array.isArray(this.workflowActions)) {
      $dara.Model.validateArray(this.workflowActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkItemWorkFlowInfoResponseBody extends $dara.Model {
  /**
   * @example
   * Openapi.RequestError
   */
  errorCode?: string;
  /**
   * @example
   * error
   */
  errorMessage?: string;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  workflow?: GetWorkItemWorkFlowInfoResponseBodyWorkflow;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
      workflow: 'workflow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      workflow: GetWorkItemWorkFlowInfoResponseBodyWorkflow,
    };
  }

  validate() {
    if(this.workflow && typeof (this.workflow as any).validate === 'function') {
      (this.workflow as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

