// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTaskFlowEdgesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The task flow ID. You can call the [ListTaskFlow](https://help.aliyun.com/document_detail/424565.html) or [ListLhTaskFlowAndScenario](https://help.aliyun.com/document_detail/426672.html) operation to query the task flow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 15***
   */
  dagId?: number;
  /**
   * @remarks
   * The list of updated task flow edges.
   * 
   * This parameter is required.
   */
  edgesShrink?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * > To view the tenant ID, move the pointer over the profile picture in the upper-right corner of the Data Management (DMS) console. For more information, see [Manage DMS tenants](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      dagId: 'DagId',
      edgesShrink: 'Edges',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagId: 'number',
      edgesShrink: 'string',
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

