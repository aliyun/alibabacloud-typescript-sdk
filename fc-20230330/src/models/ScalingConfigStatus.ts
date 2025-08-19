// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResidentConfig } from "./ResidentConfig";
import { ScalingStatus } from "./ScalingStatus";


export class ScalingConfigStatus extends $dara.Model {
  functionName?: string;
  qualifier?: string;
  residentConfig?: ResidentConfig;
  resourceType?: string;
  scalingStatus?: ScalingStatus;
  static names(): { [key: string]: string } {
    return {
      functionName: 'functionName',
      qualifier: 'qualifier',
      residentConfig: 'residentConfig',
      resourceType: 'resourceType',
      scalingStatus: 'scalingStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      qualifier: 'string',
      residentConfig: ResidentConfig,
      resourceType: 'string',
      scalingStatus: ScalingStatus,
    };
  }

  validate() {
    if(this.residentConfig && typeof (this.residentConfig as any).validate === 'function') {
      (this.residentConfig as any).validate();
    }
    if(this.scalingStatus && typeof (this.scalingStatus as any).validate === 'function') {
      (this.scalingStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

