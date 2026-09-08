// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NodeCordonParameters } from "./NodeCordonParameters";
import { NodeDrainParameters } from "./NodeDrainParameters";
import { ResizeDiskParameters } from "./ResizeDiskParameters";
import { NodeUncordonParameters } from "./NodeUncordonParameters";


export class NodeOperationParameters extends $dara.Model {
  /**
   * @remarks
   * The parameter settings for disabling node scheduling.
   */
  cordonParameters?: NodeCordonParameters;
  /**
   * @remarks
   * The parameter settings for draining task instances from a node.
   */
  drainParameters?: NodeDrainParameters;
  /**
   * @remarks
   * The parameters for changing disk capacity.
   */
  resizeDiskParameters?: ResizeDiskParameters;
  /**
   * @remarks
   * The parameter settings for enabling node scheduling.
   */
  uncordonParameters?: NodeUncordonParameters;
  static names(): { [key: string]: string } {
    return {
      cordonParameters: 'CordonParameters',
      drainParameters: 'DrainParameters',
      resizeDiskParameters: 'ResizeDiskParameters',
      uncordonParameters: 'UncordonParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cordonParameters: NodeCordonParameters,
      drainParameters: NodeDrainParameters,
      resizeDiskParameters: ResizeDiskParameters,
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
    if(this.resizeDiskParameters && typeof (this.resizeDiskParameters as any).validate === 'function') {
      (this.resizeDiskParameters as any).validate();
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

