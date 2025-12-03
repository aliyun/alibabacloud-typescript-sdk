// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkItemWorkFlowStatusResponseBodyStatuses extends $dara.Model {
  /**
   * @example
   * 用户阿里云pk，例如19xxxx31947xxxx
   */
  creator?: string;
  /**
   * @example
   * 该状态的具体信息
   */
  description?: string;
  /**
   * @example
   * 1620455467000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1641870287000
   */
  gmtModified?: number;
  /**
   * @example
   * dfexxxxxf4fee18xxxxx36
   */
  identifier?: string;
  /**
   * @example
   * 用户阿里云pk，例如19xxxx31947xxxx
   */
  modifier?: string;
  /**
   * @example
   * 例：待处理
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
   * 例如：1
   */
  workflowStageIdentifier?: string;
  /**
   * @example
   * 例：确认阶段
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

export class ListWorkItemWorkFlowStatusResponseBody extends $dara.Model {
  /**
   * @example
   * 例：Openapi.RequestError
   */
  errorCode?: string;
  /**
   * @example
   * errormessage
   */
  errorMessage?: string;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  statuses?: ListWorkItemWorkFlowStatusResponseBodyStatuses[];
  /**
   * @example
   * true或者false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      statuses: 'statuses',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      statuses: { 'type': 'array', 'itemType': ListWorkItemWorkFlowStatusResponseBodyStatuses },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

