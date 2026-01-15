// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NodeCordonParameters } from "./NodeCordonParameters";
import { NodeDrainParameters } from "./NodeDrainParameters";
import { NodeUncordonParameters } from "./NodeUncordonParameters";


export class NodeOperationParameters extends $dara.Model {
  cordonParameters?: NodeCordonParameters;
  drainParameters?: NodeDrainParameters;
  uncordonParameters?: NodeUncordonParameters;
  static names(): { [key: string]: string } {
    return {
      cordonParameters: 'CordonParameters',
      drainParameters: 'DrainParameters',
      uncordonParameters: 'UncordonParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cordonParameters: NodeCordonParameters,
      drainParameters: NodeDrainParameters,
      uncordonParameters: NodeUncordonParameters,
    };
  }

  validate() {
    if(this.cordonParameters && typeof (this.cordonParameters as any).validate === 'function') {
      (this.cordonParameters as any).validate();
    }
    if(this.drainParameters && typeof (this.drainParameters as any).validate === 'function') {
      (this.drainParameters as any).validate();
    }
    if(this.uncordonParameters && typeof (this.uncordonParameters as any).validate === 'function') {
      (this.uncordonParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

