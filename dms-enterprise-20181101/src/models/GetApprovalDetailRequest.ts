// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApprovalDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) operation to obtain the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  /**
   * @remarks
   * The ID of the approval process. You can call the [GetOrderBaseInfo](https://help.aliyun.com/document_detail/144642.html) operation to obtain the ID of the approval process.
   * 
   * This parameter is required.
   * 
   * @example
   * 184****
   */
  workflowInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      workflowInstanceId: 'WorkflowInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

