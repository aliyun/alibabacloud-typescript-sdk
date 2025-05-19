// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NodeProcessesResponseBodyNodeProcessesNodeProcess } from "./NodeProcessesResponseBodyNodeProcessesNodeProcess";


export class NodeProcessesResponseBodyNodeProcesses extends $dara.Model {
  nodeProcess?: NodeProcessesResponseBodyNodeProcessesNodeProcess[];
  static names(): { [key: string]: string } {
    return {
      nodeProcess: 'NodeProcess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeProcess: { 'type': 'array', 'itemType': NodeProcessesResponseBodyNodeProcessesNodeProcess },
    };
  }

  validate() {
    if(Array.isArray(this.nodeProcess)) {
      $dara.Model.validateArray(this.nodeProcess);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

