// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTaskFlowConstantsRequestDagConstants extends $dara.Model {
  /**
   * @remarks
   * The key name of a constant for the task flow.
   * 
   * @example
   * poc_test
   */
  key?: string;
  /**
   * @remarks
   * The key value of a constant for the task flow.
   * 
   * @example
   * poc_test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskFlowConstantsRequest extends $dara.Model {
  /**
   * @remarks
   * The constants for the task flow.
   */
  dagConstants?: UpdateTaskFlowConstantsRequestDagConstants[];
  /**
   * @remarks
   * The ID of the task flow. You can call the [ListTaskFlow](https://help.aliyun.com/document_detail/424565.html) or [ListLhTaskFlowAndScenario](https://help.aliyun.com/document_detail/426672.html) operation to query the task flow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3****
   */
  dagId?: number;
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
      dagConstants: 'DagConstants',
      dagId: 'DagId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagConstants: { 'type': 'array', 'itemType': UpdateTaskFlowConstantsRequestDagConstants },
      dagId: 'number',
      tid: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dagConstants)) {
      $dara.Model.validateArray(this.dagConstants);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

