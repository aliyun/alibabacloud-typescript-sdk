// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskInstanceRelationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the task flow. You can call the [ListTaskFlow](https://help.aliyun.com/document_detail/424565.html) or [ListLhTaskFlowAndScenario](https://help.aliyun.com/document_detail/426672.html) operation to obtain the ID of the task flow.
   * 
   * This parameter is required.
   * 
   * @example
   * 7***
   */
  dagId?: number;
  /**
   * @remarks
   * The ID of the execution record of the task flow. You can call the [ListTaskFlowInstance](https://help.aliyun.com/document_detail/424689.html) operation to obtain the execution record ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 47****
   */
  dagInstanceId?: number;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to obtain the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      dagId: 'DagId',
      dagInstanceId: 'DagInstanceId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagId: 'number',
      dagInstanceId: 'number',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

