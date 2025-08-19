// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResidentConfig } from "./ResidentConfig";


export class PutScalingConfigInput extends $dara.Model {
  residentConfig?: ResidentConfig;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      residentConfig: 'residentConfig',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      residentConfig: ResidentConfig,
      resourceType: 'string',
    };
  }

  validate() {
    if(this.residentConfig && typeof (this.residentConfig as any).validate === 'function') {
      (this.residentConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

