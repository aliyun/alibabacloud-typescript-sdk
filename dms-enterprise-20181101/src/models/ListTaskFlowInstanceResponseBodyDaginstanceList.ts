// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTaskFlowInstanceResponseBodyDAGInstanceListDAGInstance } from "./ListTaskFlowInstanceResponseBodyDaginstanceListDaginstance";


export class ListTaskFlowInstanceResponseBodyDAGInstanceList extends $dara.Model {
  DAGInstance?: ListTaskFlowInstanceResponseBodyDAGInstanceListDAGInstance[];
  static names(): { [key: string]: string } {
    return {
      DAGInstance: 'DAGInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DAGInstance: { 'type': 'array', 'itemType': ListTaskFlowInstanceResponseBodyDAGInstanceListDAGInstance },
    };
  }

  validate() {
    if(Array.isArray(this.DAGInstance)) {
      $dara.Model.validateArray(this.DAGInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

