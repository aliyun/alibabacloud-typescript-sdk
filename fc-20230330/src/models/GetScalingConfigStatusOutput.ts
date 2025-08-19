// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScalingConfigStatus } from "./ScalingConfigStatus";


export class GetScalingConfigStatusOutput extends $dara.Model {
  scalingConfigStatus?: ScalingConfigStatus;
  static names(): { [key: string]: string } {
    return {
      scalingConfigStatus: 'scalingConfigStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scalingConfigStatus: ScalingConfigStatus,
    };
  }

  validate() {
    if(this.scalingConfigStatus && typeof (this.scalingConfigStatus as any).validate === 'function') {
      (this.scalingConfigStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

