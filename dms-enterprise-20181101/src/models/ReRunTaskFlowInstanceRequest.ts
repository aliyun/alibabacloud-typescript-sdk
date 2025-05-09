// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReRunTaskFlowInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the task flow. You can call the [ListTaskFlow](https://help.aliyun.com/document_detail/424565.html) or [ListLhTaskFlowAndScenario](https://help.aliyun.com/document_detail/426672.html) operation to query the task flow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7***
   */
  dagId?: number;
  /**
   * @remarks
   * The ID of the execution record of the task flow. You can call the [ListTaskFlowInstance](https://help.aliyun.com/document_detail/424689.html) operation to query the execution record ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 47****
   */
  dagInstanceId?: number;
  /**
   * @remarks
   * The version number of the task flow. You can call the ListTaskFlowVersions operation to query the version number of the task flow.
   * 
   * @example
   * 2****
   */
  dagVersion?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > To view the ID of the tenant, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html).
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

