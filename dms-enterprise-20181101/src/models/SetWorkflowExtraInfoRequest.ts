// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetWorkflowExtraInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the Sign button is displayed in the ticket approval section of the DMS console for a third-party approval workflow. Valid values:
   * 
   * *   **true** (default): The Sign button is displayed.
   * *   **false**: The Sign button is not displayed.
   * 
   * @example
   * false
   */
  renderAddApprovalNode?: boolean;
  /**
   * @remarks
   * Specifies whether the Agree button is displayed in the ticket approval section of the DMS console for a third-party approval workflow. Valid values:
   * 
   * *   **true** (default): The Agree button is displayed.
   * *   **false**: The Agree button is not displayed.
   * 
   * @example
   * true
   */
  renderAgree?: boolean;
  /**
   * @remarks
   * Specifies whether the Revoke button is displayed in the ticket approval section of the DMS console for a third-party approval workflow. Valid values:
   * 
   * *   **true** (default): The Revoke button is displayed.
   * *   **false**: The Revoke button is not displayed.
   * 
   * @example
   * true
   */
  renderCancel?: boolean;
  /**
   * @remarks
   * Specifies whether the Reject button is displayed in the ticket approval section of the DMS console for a third-party approval workflow. Valid values:
   * 
   * *   **true** (default): The Reject button is displayed.
   * *   **false**: The Reject button is not displayed.
   * 
   * @example
   * false
   */
  renderReject?: boolean;
  /**
   * @remarks
   * Specifies whether the Forward button is displayed in the ticket approval section of the DMS console for a third-party approval workflow. Valid values:
   * 
   * *   **true** (default): The Forward button is displayed.
   * *   **false**: The Forward button is not displayed.
   * 
   * @example
   * true
   */
  renderTransfer?: boolean;
  /**
   * @remarks
   * The remarks of approval workflow for third parties.
   * 
   * @example
   * test
   */
  thirdpartyWorkflowComment?: string;
  /**
   * @remarks
   * The link of approval workflow for third parties.
   * 
   * @example
   * https://xxx
   */
  thirdpartyWorkflowUrl?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * >  To view the ID of the tenant, go to the DMS console and move the pointer over the profile picture in the upper-right corner. For more information, see the [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) section of the "Manage DMS tenants" topic.
   * 
   * @example
   * 3***
   */
  tid?: number;
  /**
   * @remarks
   * The ID of the approval workflow. You can call the [GetOrderBaseInfo](https://help.aliyun.com/document_detail/144642.html) operation to query the ID of the approval workflow.
   * 
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

