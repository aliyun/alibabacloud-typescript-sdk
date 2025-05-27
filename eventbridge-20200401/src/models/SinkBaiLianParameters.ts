// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SinkBaiLianParametersAfter } from "./SinkBaiLianParametersAfter";
import { SinkBaiLianParametersBefore } from "./SinkBaiLianParametersBefore";
import { SinkBaiLianParametersOffset } from "./SinkBaiLianParametersOffset";
import { SinkBaiLianParametersOp } from "./SinkBaiLianParametersOp";
import { SinkBaiLianParametersPartition } from "./SinkBaiLianParametersPartition";


export class SinkBaiLianParameters extends $dara.Model {
  after?: SinkBaiLianParametersAfter;
  applicationType?: string;
  before?: SinkBaiLianParametersBefore;
  context?: any;
  extend?: any;
  offset?: SinkBaiLianParametersOffset;
  op?: SinkBaiLianParametersOp;
  partition?: SinkBaiLianParametersPartition;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      after: 'After',
      applicationType: 'ApplicationType',
      before: 'Before',
      context: 'Context',
      extend: 'Extend',
      offset: 'Offset',
      op: 'Op',
      partition: 'Partition',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      after: SinkBaiLianParametersAfter,
      applicationType: 'string',
      before: SinkBaiLianParametersBefore,
      context: 'any',
      extend: 'any',
      offset: SinkBaiLianParametersOffset,
      op: SinkBaiLianParametersOp,
      partition: SinkBaiLianParametersPartition,
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.after && typeof (this.after as any).validate === 'function') {
      (this.after as any).validate();
    }
    if(this.before && typeof (this.before as any).validate === 'function') {
      (this.before as any).validate();
    }
    if(this.offset && typeof (this.offset as any).validate === 'function') {
      (this.offset as any).validate();
    }
    if(this.op && typeof (this.op as any).validate === 'function') {
      (this.op as any).validate();
    }
    if(this.partition && typeof (this.partition as any).validate === 'function') {
      (this.partition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

