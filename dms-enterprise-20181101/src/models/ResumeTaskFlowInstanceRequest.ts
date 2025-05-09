// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResumeTaskFlowInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the task flow. You can call the [ListTaskFlow](https://help.aliyun.com/document_detail/424565.html) or [ListLhTaskFlowAndScenario](https://help.aliyun.com/document_detail/426672.html) operation to query the task flow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 11****
   */
  dagId?: number;
  /**
   * @remarks
   * The ID of the execution record of the task flow. You can call the [ListTaskFlowInstance](https://help.aliyun.com/document_detail/424689.html) operation to query the execution record ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3****
   */
  dagInstanceId?: number;
  /**
   * @remarks
   * The version number of the task flow. You can call the [ListDAGVersions](https://help.aliyun.com/document_detail/424682.html) operation to query the version number.
   * 
   * @example
   * []
   */
  dagVersion?: string;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to query the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      dagId: 'DagId',
      dagInstanceId: 'DagInstanceId',
      dagVersion: 'DagVersion',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagId: 'number',
      dagInstanceId: 'number',
      dagVersion: 'string',
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

