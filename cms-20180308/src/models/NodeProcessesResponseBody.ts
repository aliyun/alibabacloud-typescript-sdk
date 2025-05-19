// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NodeProcessesResponseBodyNodeProcesses } from "./NodeProcessesResponseBodyNodeProcesses";


export class NodeProcessesResponseBody extends $dara.Model {
  errorCode?: number;
  errorMessage?: string;
  nodeProcesses?: NodeProcessesResponseBodyNodeProcesses;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      nodeProcesses: 'NodeProcesses',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      errorMessage: 'string',
      nodeProcesses: NodeProcessesResponseBodyNodeProcesses,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.nodeProcesses && typeof (this.nodeProcesses as any).validate === 'function') {
      (this.nodeProcesses as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

