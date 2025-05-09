// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateTaskFlowEdgesRequestEdges } from "./UpdateTaskFlowEdgesRequestEdges";


export class UpdateTaskFlowEdgesRequest extends $dara.Model {
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
  edges?: UpdateTaskFlowEdgesRequestEdges[];
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
      edges: 'Edges',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagId: 'number',
      edges: { 'type': 'array', 'itemType': UpdateTaskFlowEdgesRequestEdges },
      tid: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.edges)) {
      $dara.Model.validateArray(this.edges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

