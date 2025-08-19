// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResidentConfig } from "./ResidentConfig";


export class PutScalingConfigOutput extends $dara.Model {
  functionName?: string;
  qualifier?: string;
  residentConfig?: ResidentConfig;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'functionName',
      qualifier: 'qualifier',
      residentConfig: 'residentConfig',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      qualifier: 'string',
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

