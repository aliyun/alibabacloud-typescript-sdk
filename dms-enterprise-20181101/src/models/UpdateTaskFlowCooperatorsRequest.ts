// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTaskFlowCooperatorsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the users who are involved in the task flow to be updated.
   */
  cooperatorIds?: string[];
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
   * The ID of the tenant.
   * 
   * > :To view the ID of the tenant, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      cooperatorIds: 'CooperatorIds',
      dagId: 'DagId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cooperatorIds: { 'type': 'array', 'itemType': 'string' },
      dagId: 'number',
      tid: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cooperatorIds)) {
      $dara.Model.validateArray(this.cooperatorIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

