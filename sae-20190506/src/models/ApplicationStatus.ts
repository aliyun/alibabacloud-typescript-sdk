// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScaleConfig } from "./ScaleConfig";


export class ApplicationStatus extends $dara.Model {
  instanceCount?: number;
  scaleConfig?: ScaleConfig;
  static names(): { [key: string]: string } {
    return {
      instanceCount: 'instanceCount',
      scaleConfig: 'scaleConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCount: 'number',
      scaleConfig: ScaleConfig,
    };
  }

  validate() {
    if(this.scaleConfig && typeof (this.scaleConfig as any).validate === 'function') {
      (this.scaleConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

