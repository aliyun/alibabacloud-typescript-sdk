// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTaskFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the task flow.
   * 
   * This parameter is required.
   * 
   * @example
   * Dag_Name
   */
  dagName?: string;
  /**
   * @remarks
   * The description of the task flow.
   * 
   * @example
   * zht_test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the scenario.
   * 
   * @example
   * 2**
   */
  scenarioId?: number;
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
      dagName: 'DagName',
      description: 'Description',
      scenarioId: 'ScenarioId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagName: 'string',
      description: 'string',
      scenarioId: 'number',
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

