// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskFlowEdgesByConditionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the task flow. You can call the [ListTaskFlow](https://help.aliyun.com/document_detail/424565.html) or [ListLhTaskFlowAndScenario](https://help.aliyun.com/document_detail/426672.html) operation to query the task flow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 15***
   */
  dagId?: number;
  /**
   * @remarks
   * The ID of the task flow edge.
   * 
   * @example
   * 24***
   */
  id?: number;
  /**
   * @remarks
   * The ID of the end node on the edge.
   * 
   * @example
   * 44***
   */
  nodeEnd?: number;
  /**
   * @remarks
   * The ID of the start node on the edge.
   * 
   * @example
   * 44***
   */
  nodeFrom?: number;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * >  To view the ID of the tenant, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      dagId: 'DagId',
      id: 'Id',
      nodeEnd: 'NodeEnd',
      nodeFrom: 'NodeFrom',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagId: 'number',
      id: 'number',
      nodeEnd: 'number',
      nodeFrom: 'number',
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

