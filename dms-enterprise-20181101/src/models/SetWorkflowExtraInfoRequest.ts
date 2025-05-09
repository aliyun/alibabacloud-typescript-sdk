// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetWorkflowExtraInfoRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  renderAddApprovalNode?: boolean;
  /**
   * @example
   * true
   */
  renderAgree?: boolean;
  /**
   * @example
   * true
   */
  renderCancel?: boolean;
  /**
   * @example
   * false
   */
  renderReject?: boolean;
  /**
   * @example
   * true
   */
  renderTransfer?: boolean;
  /**
   * @example
   * test
   */
  thirdpartyWorkflowComment?: string;
  /**
   * @example
   * https://xxx
   */
  thirdpartyWorkflowUrl?: string;
  /**
   * @example
   * 3***
   */
  tid?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 184****
   */
  workflowInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      renderAddApprovalNode: 'RenderAddApprovalNode',
      renderAgree: 'RenderAgree',
      renderCancel: 'RenderCancel',
      renderReject: 'RenderReject',
      renderTransfer: 'RenderTransfer',
      thirdpartyWorkflowComment: 'ThirdpartyWorkflowComment',
      thirdpartyWorkflowUrl: 'ThirdpartyWorkflowUrl',
      tid: 'Tid',
      workflowInstanceId: 'WorkflowInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renderAddApprovalNode: 'boolean',
      renderAgree: 'boolean',
      renderCancel: 'boolean',
      renderReject: 'boolean',
      renderTransfer: 'boolean',
      thirdpartyWorkflowComment: 'string',
      thirdpartyWorkflowUrl: 'string',
      tid: 'number',
      workflowInstanceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

